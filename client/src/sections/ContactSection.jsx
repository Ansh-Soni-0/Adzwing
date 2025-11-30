import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";

export default function ContactSection() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d3bc632f-9447-4e2e-8b75-389dd0f8fb56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32">
      <SectionTitle
        text1="Contact"
        text2="Reach out to us"
        text3="Ready to grow your brand? Let’s connect and build something exceptional together."
      />
      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full"
      >
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500">
            <UserIcon className="size-5" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 outline-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium">Email id</p>
          <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500">
            <MailIcon className="size-5" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 outline-none"
            />
          </div>
        </motion.div>

        <motion.div
          className="sm:col-span-2"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="focus:border-pink-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700"
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-max flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 rounded-full"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          Submit
          <ArrowRightIcon className="size-5" />
        </motion.button>

        <p className="text-gray-300 mt-4">{result}</p> 
      </form>
    </div>
  );
}
