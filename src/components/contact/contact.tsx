import ContactForm from "@/components/forms/contact-form";

const Contact = () => {
  return (
    <div className="container relative mx-auto">
      <div id="contact" className="absolute left-0 top-[-100px]"></div>
      <h2 className="mb-4 text-center font-league_spartan text-5xl font-semibold xl:text-6xl">Contact</h2>
      <h3 className="mb-20 text-center font-league_spartan text-lg">
        Please fill out the form below to get in touch with me
      </h3>
      <div className="flex justify-center">
        <div className="w-[700px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
