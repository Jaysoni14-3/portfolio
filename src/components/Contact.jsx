import { LuInstagram, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
import FormComponent from "./FormComponent";

const Contact = () => {
  const contactSocialIcons = [
    {
      iconName: <LuInstagram size={24} strokeWidth={1.5} />,
      href: "https://www.instagram.com/jay14_3/",
    },
    {
      iconName: <LuLinkedin size={24} strokeWidth={1.5} />,
      href: "https://www.linkedin.com/in/jay-soni-61462a227/",
    },
    {
      iconName: <LuMail size={24} strokeWidth={1.5} />,
      href: "mailto:jaysoni998.js@gmail.com",
    },
    {
      iconName: <LuPhone size={24} strokeWidth={1.5} />,
      href: "tel:+91 8424 93 6900",
    },
  ];

  return (
    <section className="contact p-8">
      <div className="section-header mb-4">
        <h2 className="text-2xl text-primary tracking-wider font-body uppercase">
          Contact
        </h2>
      </div>
      <div className="secton-body flex flex-col md:flex-row gap-6">
        <div className="text-container md:w-1/2">
          <div className="flex flex-col">
            <h2 className="text-xl mb-4">Send me a message!</h2>
            <p>
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
          </div>
          <div className="icons-container flex gap-4 mt-6">
            {contactSocialIcons.map((socialIcon, index) => (
              <a
                key={index}
                href={socialIcon.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-primary"
              >
                {socialIcon.iconName}
              </a>
            ))}
          </div>
        </div>
        <div className=" w-full md:w-1/2 mx-auto bg-slate-950 p-4 rounded-lg">
          <FormComponent />
        </div>
      </div>
    </section>
  );
};

export default Contact;
