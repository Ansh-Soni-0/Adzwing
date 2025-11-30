import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { motion } from "motion/react";

function Publisher() {
  const items = [
    "Fraud-free traffic sources",
    "Wide range of targeting capabilities",
    "Various Ad Formats and Traffic Sources",
    "Zero set-up fee. Start right now",
    "Dedicated manager to help you get setup and grow your business",
  ];

  return (
    <div id="publisher">
      <SectionTitle
        text1="Publisher"
        text2="Empowering publishers to earn more."
        text3="Helping publishers maximize revenue with smart, seamless monetization.
      Helping publishers maximize revenue with smart, seamless monetization."
      />

      <div className="w-full flex items-center justify-around">
        {/* left section  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center min-h-screen bg-black p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-gray-900 to-black rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <ul className="space-y-0">
              {items.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  key={index}
                  className="relative flex items-start"
                >
                  {/* Vertical Line */}
                  {index !== items.length - 1 && (
                    <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-linear-to-b from-gray-700 to-gray-900"></div>
                  )}

                  {/* Bullet Point */}
                  <div className="relative z-10 shrink-0 w-4 h-4 mt-1.5 rounded-full bg-linear-to-br from-gray-800 to-black border-2 border-gray-700 shadow-[0_0_8px_rgba(0,0,0,0.8)]"></div>

                  {/* Text Content */}
                  <span className="ml-4 text-white py-1 pb-4">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:block px-9 py-4 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full mr-50 mt-15"
          >
            <Link to={"/register"}>
              Join Us Today
            </Link>
          </motion.button>
        </motion.div>

        {/* right image  */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/analytical.gif"
            alt="analytical"
            className="w-110 h-110 rounded-tl-4xl rounded-br-4xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Publisher;
