const ContactDetail = ({ icon, text, href }) => (
    <a
      href={href || "#"}
      className="flex items-center mb-6"
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
     <span> {icon}</span>
      <h5 className="text-black text-base font-normal leading-6 ml-5">{text}</h5>
    </a>
  );
  export default ContactDetail