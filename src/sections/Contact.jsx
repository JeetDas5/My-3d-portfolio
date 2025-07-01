import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_trkfnsp
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_trkfnsp",
        "template_umt10km",
        {
          from_name: form.name,
          to_name: "Jeet",
          from_email: form.email,
          to_email: "jeet15083011@gmail.com",
          message: form.message,
        },
        "Oa6YrFXXPoUNDJBbu"
      );
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex justify-center items-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text mt-10">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a
            question, want to collaborate, or just want to say hello, feel free
            to reach out!
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your full name"
              />
            </label>

            <label htmlFor="email" className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your email"
              />
            </label>

            <label htmlFor="message" className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
