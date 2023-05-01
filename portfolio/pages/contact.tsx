import React, {useEffect, useState} from "react";
import styles from "../styles/contact.module.scss";
import Layout from "../component/layout/layout";
import Map from "../component/map/map";
import {send} from "@emailjs/browser";
import Toaster from "../component/toaster/toaster";
import ContactForm from "../component/contact-form/contact-form";

const Contact = () => {
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "";
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [project, setProject] = useState<string>("");

  const [toaster, setToaster] = useState(false);
  const [success, setSuccess] = useState(false);

  const [open, setOpen] = useState(false);

  const displayToaster = (success: boolean) => {
    setToaster(true);
    setSuccess(success);

    setTimeout(() => {
      setToaster(false);
      setSuccess(false);
    }, 5000);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      service_id,
      template_id,
      {name, email, project},
      user_id
    )
      .then((response) => {
        displayToaster(true);

        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        displayToaster(false);
        console.log("FAILED...", err);
      });
    setName("");
    setEmail("");
    setProject("");
    setOpen(false);
  };

  return (
    <Layout title="contact">
      <div className={styles.contactMain}>
        {toaster && <Toaster success={success} />}
        <div className={styles.contactTop}></div>
        <div className={styles.contactBottom}>
          <div className={styles.map}>
            <Map />
          </div>
          <div></div>
          <ContactForm
            onSubmit={onSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            project={project}
            setProject={setProject}
            open={open}
            setOpen={setOpen} />
        </div>
      </div>
    </Layout>
  );
};
export default Contact;