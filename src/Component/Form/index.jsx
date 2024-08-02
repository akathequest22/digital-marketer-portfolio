"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { notificationError, notificationSuccess } from "@/utils";

function Form() {
  const [state, handleSubmit] = useForm("xrbzqlvd");

  const sumbitForm = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      notificationSuccess("Thanks for joining!");
    } else {
      notificationError("Message Not Sent");
    }
  };

  return (
    <form
      className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
      onSubmit={sumbitForm}
    >
      <div className="flex flex-col items-start">
        <label
          htmlFor="email"
          className="text-gray-700 text-lg font-semibold mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8fd694] transition duration-300"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col items-start">
        <label
          htmlFor="message"
          className="text-gray-700 text-lg font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8fd694] transition duration-300"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#8fd694] text-white py-3 px-6 rounded-md hover:bg-[#8fd694] transition duration-300"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending....." : "Submit"}
      </button>
    </form>
  );
}

export default Form;
