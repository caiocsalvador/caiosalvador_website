import ContactFormData from "@/types/contactFormData";

const sendEmail = async (formData: ContactFormData) => {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.info);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default sendEmail;
