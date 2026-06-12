'use client';

import { send } from '@emailjs/browser';
import { useForm } from 'react-hook-form';

import { useToastStore } from '@/stores/toast-store';
import UiButton from '@/ui-commponents/ui-button/ui-button';
import UiInput from '@/ui-commponents/ui-input/ui-input';

import styles from './contact-form.module.scss';

type ContactFormData = {
  name: string;
  email: string;
  tel: string;
  description: string;
};

const defaultValues: ContactFormData = {
  name: '',
  email: '',
  tel: '',
  description: '',
};

const ContactForm = () => {
  const showToast = useToastStore((state) => state.show);
  const { handleSubmit, control, reset } = useForm<ContactFormData>({ defaultValues });

  const onSubmit = async (data: ContactFormData) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? '';

    try {
      await send(
        serviceId,
        templateId,
        { name: data.name, email: data.email, message: data.description, tel: data.tel || '' },
        userId,
      );
      showToast('Message envoyé avec succès.', 'success');
      reset();
    } catch {
      showToast("L'envoi a échoué. Réessayez plus tard.", 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formGroup}>
      <UiInput
        control={control}
        dataName="name"
        label="Nom"
        rules={{ required: 'Le nom est requis' }}
      />
      <UiInput
        control={control}
        dataName="email"
        label="Email"
        rules={{ required: "L'email est requis" }}
        type="email"
        placeholder="votre.email@example.com"
      />
      <UiInput
        control={control}
        dataName="tel"
        label="Téléphone"
        rules={{
          required: 'Le téléphone est requis',
          pattern: { value: /^[0-9]{10}$/, message: 'Le numero doit contenir 10 chiffres' },
        }}
        type="tel"
        placeholder="07.XX.XX.XX.54"
      />
      <UiInput
        control={control}
        dataName="description"
        label="Description"
        rules={{ required: 'La description est requise' }}
        type="textarea"
      />
      <UiButton />
    </form>
  );
};

export default ContactForm;
