import ContactFormData from "@/types/contactFormData";

const sendEmail = async (formData: ContactFormData) => {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
};

export default sendEmail;
