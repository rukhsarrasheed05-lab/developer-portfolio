import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../hoc/SectionWrapper";
import ContactOrb from "./canvas/ContactOrb";
import { title } from "framer-motion/client";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Wire up your own EmailJS service/template/public keys here.
    // See: https://www.emailjs.com/docs/sdk/send/
    const SERVICE_ID = "service_0w8ndow";
    const TEMPLATE_ID = "template_vzduqcf";
    const PUBLIC_KEY = "AeMPIZdwl6uzDBwMp";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Rukhsar Rasheed",
          from_email: form.email,
          message: form.message,
          title: "Portfolio Contact Form",
          time:new Date().toLocaleString(),
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
      <div>
        <div className="mb-4 flex items-baseline gap-3">
          <span className="font-mono text-xs text-[#00e5c7]">05</span>
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
        </div>
        <p className="mb-8 max-w-md text-[#8c89a6]">
          Open to backend and full-stack roles, and select contract work on
          infrastructure and developer tooling.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-mono uppercase tracking-widest text-[#8c89a6]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-[#211c48] bg-[#0d0a29] px-4 py-3 text-sm text-[#f1efff] outline-none transition-colors placeholder:text-[#5c5878] focus:border-[#8452ff]"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-mono uppercase tracking-widest text-[#8c89a6]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#211c48] bg-[#0d0a29] px-4 py-3 text-sm text-[#f1efff] outline-none transition-colors placeholder:text-[#5c5878] focus:border-[#8452ff]"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-widest text-[#8c89a6]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What are you building?"
              className="w-full resize-none rounded-lg border border-[#211c48] bg-[#0d0a29] px-4 py-3 text-sm text-[#f1efff] outline-none transition-colors placeholder:text-[#5c5878] focus:border-[#8452ff]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-[#8452ff] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#9666ff] disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-[#00e5c7]">
              Thanks &mdash; I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-[#ff6b6b]">
              Something went wrong. Add your EmailJS keys in Contact.jsx, or
              email me directly.
            </p>
          )}
        </form>
      </div>

      <div className="h-[320px] sm:h-[420px]">
        <ContactOrb />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
