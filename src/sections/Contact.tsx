import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex justify-center text-white px-4 md:px-12 xl:px-64 pb-40 w-full">
      <div className="flex flex-col w-full justify-center bg-zinc-800 rounded-xl max-w-lg p-8 space-y-3">
        <div className="text-center pb-2 text-3xl md:text-5xl font-bold ">
          Find Me On
        </div>
        <p className="text-center text-sm md:text-base">
          Shoot me an email if you want to connect!
          <br /> You can also find me on
        </p>
        <div className="flex gap-4 justify-center pt-3">
          <a href="https://www.facebook.com/share/xxBbK5vySHpBpzfS/?mibextid=qi2Omg" target="_blank">
          <FaFacebookSquare className="text-2xl hover:scale-110 cursor-pointer active:scale-90 hover:text-[#3B5998]" />
          </a>
          <FaLinkedin className="text-2xl hover:scale-110 cursor-pointer active:scale-90 hover:text-[#00ADEF]" />
          <FaWhatsapp className="text-2xl hover:scale-110 cursor-pointer active:scale-90 hover:text-[#67C15E]" />
          <a href="mailto:pyaesonehtun969@gmail.com">
            <MdOutlineEmail className="text-2xl hover:scale-110 cursor-pointer active:scale-90 hover:text-[#EA4335]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
