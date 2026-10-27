import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Alert from "./Alert";
import useAlert from "../hooks/useAlert";
import { profile } from "../data";

const emptyForm = { name: "", email: "", message: "" };

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({ text: "Thanks for your message. I'll get back to you soon.", type: "success" });
          setForm(emptyForm);
          setTimeout(hideAlert, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({ text: "Your message didn't send. Please try again or email me directly.", type: "danger" });
        }
      );
  };

  return (
    <section id="contact" className="section border-t border-line text-center">
      {alert.show && <Alert {...alert} />}

      <h2 className="heading">Let's Connect</h2>
      <p className="mt-4 text-lg text-muted">Feel free to reach out for collaborations or just a friendly hello 😃</p>
      <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-lg font-medium text-pink hover:underline">
        {profile.email}
      </a>
      <p className="mt-2 text-muted">{profile.phone}</p>

      <div className="mt-8 flex justify-center gap-3">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="chip hover:border-pink hover:text-pink">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="chip hover:border-pink hover:text-pink">
          GitHub
        </a>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="mx-auto mt-16 flex max-w-xl flex-col gap-5 text-left">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Name
          <input type="text" name="name" className="field" placeholder="Your name" required value={form.name} onChange={handleChange} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input type="email" name="email" className="field" placeholder="you@example.com" required value={form.email} onChange={handleChange} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Message
          <textarea name="message" rows="5" className="field" placeholder="What's on your mind?" required value={form.message} onChange={handleChange} />
        </label>
        <button type="submit" disabled={loading} className="btn-primary mt-2 self-center disabled:opacity-60">
          {loading ? "Sending…" : "Send message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
