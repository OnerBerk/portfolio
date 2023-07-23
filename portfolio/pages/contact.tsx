import React, {useEffect, useState} from "react";
import styles from "../styles/contact.module.scss";
import {send} from "@emailjs/browser";
import Toaster from "../component/toaster/toaster";
import ContactForm from "../component/contact-form/contact-form";
import Head from "next/head";
import SocialIcon from "../ui-component/social-icon/social-icon";
import {faCircleDown} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
    <div className={styles.contactMain}>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.contactTop}>
        <div className={styles.left}>
          <Link href="/"><span className={styles.span}>Home</span></Link>
          <Link href="/me"><span className={styles.span}>Moi</span></Link>
          <Link href="/skills"><span className={styles.span}>Compétences</span></Link>
          <Link href="/projects"><span className={styles.span}>Projets</span></Link>
        </div>
        <div className={styles.contactName}> ÖNER BERK</div>
        <div className={styles.right}>
          <SocialIcon url="https://github.com/OnerBerk" icon={faGithubAlt} />
          <SocialIcon url="https://www.linkedin.com/in/onerberk/" icon={faLinkedin} />
        </div>
      </div>
      <div className={styles.contactBody}>
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
  );
};
export default Contact;

{/*<Layout title="contact">
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
        </Layout>*/
}