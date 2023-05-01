import styles from "./contact-form.module.scss";
import React, {Dispatch, SetStateAction, useState} from "react";
import Envelop from "../envelop/envelop";
import SubmitButton from "../button/submit/submit-button";

type ContactFormProps = {
  onSubmit: (e: any) => void
  setName: Dispatch<SetStateAction<string>>
  name: string
  setEmail: Dispatch<SetStateAction<string>>
  email: string
  setProject: Dispatch<SetStateAction<string>>
  project: string
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean

};
const ContactForm = (props: ContactFormProps) => {
  return (
    <div className={styles.last}>
      {props.open
        ?
        <div className={styles.lastForm}>
          <img onClick={() => props.setOpen(false)} alt="Fermer le formulaire de contact" src="close-red.png" />
          <form onSubmit={props.onSubmit} className={styles.contactForm}>
            <div>
              <label>Nom</label>
              <input value={props.name} onChange={(e) => props.setName(e.target.value)} placeholder="Vôtre nom"
                     type="text" />
            </div>
            <div>
              <label>Email</label>
              <input value={props.email} onChange={(e) => props.setEmail(e.target.value)} placeholder="Vôtre email"
                     type="email" />
            </div>
            <div>
              <label>Message</label>
              <textarea value={props.project} onChange={(e) => props.setProject(e.target.value)}
                        placeholder="Vôtre message ou projet" />
            </div>
            <div className={styles.bt}>
              <SubmitButton />
            </div>
          </form>
        </div>
        : <Envelop setOpen={props.setOpen} />
      }
    </div>
  );
};
export default ContactForm;