import "./Contact.css";

import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [nameText, setName] = useState("");
  const [phnText, setPhn] = useState("");
  const [msgText, setMsg] = useState("");
  const [emailText, setEmail] = useState("");
  const [subText, setSub] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h70u6hd",
        "template_4uonzff",
        form.current,
        "sL9pDKU_P2TxigadV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMsg("");
    setName("");
    setPhn("");
    setEmail("");
    setSub("");
  };
  return (
    <div className="contact">
      <div className="text">
        <h1>Any Project On Your Mind. Let Us Know.</h1>
      </div>
      <div className="forms">
        <form ref={form} onSubmit={sendEmail}>
          <div className="sec1">
            <input
              placeholder="Name"
              type="text"
              name="user_name"
              value={nameText}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Phone"
              type="text"
              name="user_number"
              value={phnText}
              onChange={(e) => setPhn(e.target.value)}
            />
          </div>
          <div className="sec2">
            <input
              placeholder="Email"
              type="email"
              name="user_email"
              value={emailText}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Subject"
              type="text"
              name="user_sub"
              value={subText}
              onChange={(e) => setSub(e.target.value)}
            />
          </div>
          <div className="sec3">
            <input
              type="text"
              placeholder="Message"
              name="message"
              value={msgText}
              onChange={(e) => setMsg(e.target.value)}
            />

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
