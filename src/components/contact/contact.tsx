import React, {useState} from "react";
import "./contact.scss";
import timbre from "../../assets/timbre.png";
import {onchange} from "../../utils/onchange";
import stamp from "../../assets/stamp-bg.png";

const Contact = () => {
  const [finish, setFinish] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState(0);

  const stampVisble = () => setFinish(true);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    stampVisble();
    console.log({name: name, tel: tel, email: email, description: description});
  };

  return (
    <form onSubmit={onSubmit} className="postal">
      <div className="timbre">
        <img alt="timbre" src={timbre} />
        <div className={`stamp-ext ${finish ? "visible" : "hidden"}`}>
          <img alt="tampon" className="s" src={stamp} />
          <div className="stamp-title"></div>
        </div>
      </div>
      <div className="form-left">
        <textarea
          required
          onChange={(e) => onchange(setDescription, e.target.value)}
          placeholder="Votre texte ici"
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
  );
};
export default Contact;
