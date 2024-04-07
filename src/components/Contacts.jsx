import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ToggleContext from "../context/ToggleContext";
import Socials from "../components/Socials";

const Contacts = () => {
  const form = useRef();
  const { darkMode } = useContext(ToggleContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1nl0gdi", "template_bxjwb1k", form.current, {
        publicKey: "FWGFhXU2ti7QFv4NM",
      })
      .then(
        () => {
          toast.success("Message has been sent!", {
            autoClose: 3000,
            theme: "colored",
            position: "bottom-left",
          });
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="scroll-mt-20 max-w-xl container flex flex-col px-5 py-3 md:py-5 md:px-10 justify-center items-center md:items-start"
    >
      <ToastContainer autoClose={3000} theme="colored" position="bottom-left" />
      <h1 className="text-2xl md:text-3xl font-bold underline underline-offset-8 decoration-indigo-500 decoration-4">
        Contact Me
      </h1>

      <div className="py-10 flex flex-col w-full text-base font-semibold">
        <form ref={form} onSubmit={sendEmail}>
          <div className="pb-5 flex flex-col justify-center items-start gap-2">
            <label htmlFor="user_name">Your Name</label>
            <input
              className="text-black font-normal rounded-md w-full border-2 p-2 capitalize outline-indigo-500"
              type="text"
              id="user_name"
              name="user_name"
              required
            />
          </div>

          <div className="pb-5 flex flex-col justify-center items-start gap-2">
            <label htmlFor="user_email">Your Email</label>
            <input
              className="text-black font-normal rounded-md w-full border-2 p-2 outline-indigo-500"
              type="email"
              id="user_email"
              name="user_email"
              required
            />
          </div>

          <div className="pb-5 flex flex-col justify-center items-start gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="text-black font-normal rounded-md w-full border-2 p-2 outline-indigo-500"
              name="message"
              id="message"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className={`${
              darkMode ? `bg-transparent border` : `bg-black text-white`
            } py-2 px-10 rounded-full w-auto hover:scale-105 transition-all ease-in-out duration-300`}
          >
            <h4>Send</h4>
          </button>
        </form>
        <Socials />
      </div>
    </div>
  );
};

export default Contacts;
