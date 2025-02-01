import emailjs from "@emailjs/browser";
const sendMail = async (fromName, toName, body) => {
  const templateParams = {
    from_name: fromName,
    user_email: toName,
    message: body,
  };

  return await emailjs.send(
    "service_k08s9bf",
    "template_uscacp3",
    templateParams,
    "7kWpCf-O6ZDpbMJCL"
  );
};
export default sendMail