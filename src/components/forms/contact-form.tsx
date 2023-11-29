"use client";
import { useForm } from "react-hook-form";
import sendEmail from "@/utils/send-email";
import ContactFormData from "@/types/contactFormData";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendEmail(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="border-gray-300 line-height-10 color-white mb-5 h-10 w-full rounded-lg border border-blue bg-transparent_white px-4 focus:border-purple focus:outline-none focus:ring-1"
          {...register("name", { required: true })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-gray-300 line-height-10 color-white mb-5 h-10 w-full rounded-lg border border-blue bg-transparent_white px-4 focus:border-purple focus:outline-none focus:ring-1"
          {...register("email", { required: true })}
        />
      </div>
      <textarea
        placeholder="Message"
        className="border-gray-300 line-height-10 color-white mb-5 h-[200px] w-full resize-none rounded-lg border border-blue bg-transparent_white px-4 py-2 focus:border-purple focus:outline-none focus:ring-1"
        {...register("message", { required: true })}
      />
      <button
        type="submit"
        className="upp ml-auto inline-block rounded-lg bg-blue px-6 py-2 text-lg text-white transition-all hover:bg-blueTint"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
