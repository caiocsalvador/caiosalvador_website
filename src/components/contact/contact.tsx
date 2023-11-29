import ContactForm from "@/components/forms/contact-form";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto">
      <h2 className="mb-4 text-center font-league_spartan text-6xl font-semibold">Contact</h2>
      <h3 className="mb-20 text-center font-league_spartan text-lg">
        Please fill out the form below to get in touch with me
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <ContactForm />
        </div>
        <div>
          <p>Map</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
