import React, {useEffect, useState} from "react";
import "./contact.scss";
import timbre from "../../assets/timbre.png";
import {onchange} from "../../utils/onchange";
import stamp from "../../assets/stamp-bg.png";
import {send} from "@emailjs/browser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {faUmbrellaBeach, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [finish, setFinish] = useState(false);
  const [display, setDisplay] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState(0);

  const stampVisble = () => setFinish(true);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const body = {des: description, tel: tel};
    const project = JSON.stringify(body);
    e.preventDefault();
    send(
      "service_ne7fxvi",
      "template_n70txwb",
      {name, email, project},
      "qTbzjvyC63bokoWKZ",
    )
      .then((response) => {
        stampVisble();
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  useEffect(() => {
    finish &&
      setTimeout(() => {
        setDisplay(false);
      }, 2000);
  }, [finish]);

  return (
    <>
      {display ? (
        <form onSubmit={onSubmit} className="postal">
          <div className="timbre">
            <img alt="timbre" src={timbre} />
            <div className={`stamp-ext ${finish ? "visible" : "hidden"}`}>
              <img alt="tampon" className="s" src={stamp} />
              <div className="stamp-title"></div>
            </div>
          </div>
          <div className="postal-title">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contactez moi</span>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
          </div>
          <div className="form-left">
            <textarea
              required
              onChange={(e) => onchange(setDescription, e.target.value)}
              placeholder="Vôtre texte ici"
            />
          </div>
          <div className="separator" />
          <div className="form-right">
            <input
              onChange={(e) => onchange(setName, e.target.value)}
              required
              type="text"
              placeholder="John do"
            />
            <input
              onChange={(e) => onchange(setEmail, e.target.value)}
              required
              type="email"
              placeholder="John-do@gmail.com"
            />
            <input
              onChange={(e) => onchange(setTel, e.target.value)}
              type="tel"
              placeholder="07.XX.XX.XX.54"
            />
          </div>
          <button type="submit" className="send">
            Envoyer
          </button>
        </form>
      ) : (
        <div className="email-send">
          <FontAwesomeIcon icon={faCircleCheck} />
          <div>
            Merci
            <br />
            Vôtre message à bien été envoyé !
          </div>
        </div>
      )}
    </>
  );
};
export default Contact;
