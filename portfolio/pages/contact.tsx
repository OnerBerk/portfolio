import React, {useEffect, useState} from "react";
import styles from "../styles/contact.module.scss";
import Layout from "../component/layout/layout";
import Map from "../component/map/map";
import {send} from "@emailjs/browser";
import Toaster from "../component/toaster/toaster";
import SubmitButton from "../component/button/submit/submit-button";
import SqueezeButton from "../component/button/squeeze/squeeze-button";

const Contact = () => {
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "";
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

  const [nameFocus, setNameFocus] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const [projectFocus, setProjectFocus] = useState<boolean>(false);
  const [project, setProject] = useState<string>("");

  const [toaster, setToaster] = useState(false);
  const [success, setSuccess] = useState(false);

  const cancel = () => {
    setNameFocus(false);
    setEmailFocus(false);
    setProjectFocus(false);
  };

  const returnName = () => name.length === 0 ? "Mon nom" : name;
  const returnEmail = () => email.length === 0 ? "Mon adresse e-amil" : email;
  const returnProject = () => project.length === 0 ? "Projet" : email;

  const atLeastOneTrue = () => {
    if (name.length !== 0 || email.length !== 0 || project.length !== 0) {
      return true;
    } else {
      return false;
    }
  };
  const returnButton = () => {
    return (
      <div className={styles.returnButtonMain}>
        <SqueezeButton onClick={() => {
          setNameFocus(false);
          setName("");
          setEmailFocus(false);
          setEmail("");
          setProjectFocus(false);
          setProject("");
        }} />
        <SubmitButton />
      </div>
    );
  };
  const displayToaster = (success: boolean) => {
    setToaster(true);
    setSuccess(success);
    setNameFocus(false);
    setName("");
    setEmailFocus(false);
    setEmail("");
    setProjectFocus(false);
    setProject("");
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
  };

  useEffect(() => {
    atLeastOneTrue();
  }, [name, project, email]);

  return (
    <Layout title="contact">
      <div className={styles.contactMain}>
        {toaster && <Toaster success={success} />}
        <div className={styles.contactTop}></div>
        <div className={styles.contactBottom}>
          <div className={styles.map}><Map /></div>
          <div></div>
          <div className={styles.last}>
            <form onSubmit={onSubmit} className={styles.contactForm}>
              <div className={styles.title}>Un petit mot !</div>
              <div>
                <span> Hello,</span>
                <br />
                <span onClick={cancel}>Je suis</span>
                {nameFocus
                  ? (<input onChange={(e) => setName(e.target.value)} placeholder="Votre nom" type="text" />)
                  : (
                    <span onClick={() => setNameFocus(true)} className={styles.placeholder}>
                    {returnName()}
                  </span>)}
                <span onClick={cancel}>et mon e-mail est</span>

                <span onClick={() => setEmailFocus(true)} className={styles.placeholder}>
                  {emailFocus
                    ? (<input type="text" onChange={(e) => setEmail(e.target.value)} />)
                    : <span onClick={() => setEmailFocus(true)} className={styles.placeholder}>
                    {returnEmail()}
                  </span>
                  }
                    </span>

                <span onClick={cancel}>J'aimerai discuté avec vous de</span>

                <span className={styles.placeholder}>
                  {projectFocus
                    ? (<textarea onChange={(e) => setProject(e.target.value)} placeholder="Votre message" />)
                    : <span onClick={() => setProjectFocus(true)} className={styles.placeholder}>
                    {returnProject()}
                  </span>
                  }
                </span>
              </div>
              {atLeastOneTrue()
                ? returnButton()
                : <div></div>
              }
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;