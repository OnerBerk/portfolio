import { Mail01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import ContactForm from '@/components/form/contact-form';
import SectionNumber from '@/components/section-number/section-number';

import styles from './contact-section.module.scss';

const ContactSection = () => {
  return (
    <section id="contact" className={`anchor-section ${styles.contactSection}`}>
      <SectionNumber value="04" />
      <h2 className="sr-only">Contact</h2>
      <h3>Restons en contact</h3>
      <div className={styles.contactContainer}>
        <div className={styles.contactMe}>
          <h4>Contactez moi</h4>
          <p>Vous pouvez me contacter via le formulaire ci-dessous ou par email</p>
          <a href="mailto:oner_berk@hotmail.com" className={styles.email}>
            <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={2} aria-hidden="true" />
            oner_berk@hotmail.com
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
