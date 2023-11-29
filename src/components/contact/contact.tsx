import ContactForm from "@/components/forms/contact-form";
import Social from "@/components/social/social";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto">
      <h2 className="mb-4 text-center font-league_spartan text-6xl font-semibold">Contact</h2>
      <h3 className="mb-20 text-center font-league_spartan text-lg">
        Please fill out the form below to get in touch with me
      </h3>
      <div className="flex justify-center">
        <div className="w-[600px]">
          <ContactForm />
        </div>
        <div className="ml-6 flex flex-col">
          <div className="rounded-xl bg-transparent_white p-4">
            <h3 className="mb-4 font-league_spartan text-lg">Or find me on here:</h3>
            <Social size={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
