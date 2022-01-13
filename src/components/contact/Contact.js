import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import style from './Contact.module.css';

function Contact() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 250);
  }, []);

  const [state, handleSubmit] = useForm('xvolzolv');
  if (state.succeeded) {
    return <p>Thanks for contacting me. I&apos;ll respond your request as soon as possible.</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={show ? `${style.contactOn} ${style.contact}` : style.contact}
    >
      <label htmlFor="name">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
        />
      </label>
      <label htmlFor="last-name">
        <input
          id="last-name"
          type="text"
          name="last-name"
          placeholder="Last Name"
        />
      </label>
      <label htmlFor="email">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Type your message here..."
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
