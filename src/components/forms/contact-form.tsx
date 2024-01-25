"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { useForm } from "react-hook-form";
import sendEmail from "@/utils/send-email";
import ContactFormData from "@/types/contactFormData";
import Social from "@/components/social/social";
import { useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactForm = () => {
  // Animations
  const formContainer = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".animateInput", {
        scrollTrigger: {
          trigger: formContainer.current,
          start: "top 80%",
        },
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "back",
      });
    },
    { scope: formContainer }
  );
  // Form Logic
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendEmail(data);
      setFormSubmitted(true);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  if (formSubmitted) {
    return (
      <div className="flex flex-col items-center rounded-lg bg-transparent_white p-6">
        <h3 className="mb-4 font-league_spartan text-3xl">Thanks for reaching out!</h3>
        <p className="text-lg">I&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form ref={formContainer} className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="animateInput border-gray-300 line-height-10 color-white mb-5 h-10 w-full rounded-lg border border-blue bg-transparent_white px-4 focus:border-purple focus:outline-none focus:ring-1"
            {...register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.name && <p className="mb-2 mt-[-12px] w-full text-sm text-rose-500">{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="animateInput border-gray-300 line-height-10 color-white mb-5 h-10 w-full rounded-lg border border-blue bg-transparent_white px-4 focus:border-purple focus:outline-none focus:ring-1"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && <p className="mb-2 mt-[-12px] w-full text-sm text-rose-500">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <textarea
          placeholder="Message"
          className="animateInput border-gray-300 line-height-10 color-white mb-5 h-[200px] w-full resize-none rounded-lg border border-blue bg-transparent_white px-4 py-2 focus:border-purple focus:outline-none focus:ring-1"
          {...register("message", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
        />
        {errors.message && <p className="mb-2 mt-[-14px] w-full text-sm text-rose-500">This is required.</p>}
      </div>

      <div className="animateInput flex">
        <div className="flex rounded-xl p-2">
          <h3 className="mr-4 text-xs sm:text-lg">Or find me here:</h3>
          <Social />
        </div>
        <button
          type="submit"
          className="ml-auto inline-block rounded-lg bg-blue px-6 py-2 text-lg text-white transition-all hover:bg-blueTint"
          onClick={() => sendGAEvent({ event: "formSubmitted" })}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
