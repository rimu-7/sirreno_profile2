import React, { useState } from "react";
import emailjs from "emailjs-com";

function EmailSend() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendMessage = (event) => {
    event.preventDefault();
    const userEmail = event.target.email.value;
    const message = event.target.message.value;
    const subject = "Mail from Native Breed";

    const templateParams = {
      email: userEmail,
      message: message,
      subject: subject,
    };

    console.log("Sending email with params:", templateParams); // Debugging
    emailjs
      .send(
        "service_p48jaop",
        "template_vkx3d5a",
        templateParams,
        "6QuHppDBImHNhoo6ca9Yz"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setIsSubmitted(true);
        event.target.reset(); // Reset the form fields
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div>
      <form className="mt-8" onSubmit={handleSendMessage}>
        <div className="flex flex-col space-y-4">
          <label
            htmlFor="email"
            className="px-3 text-lg font-medium uppercase text-white"
          >
            Send email directly
          </label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Enter your message here"
            className="p-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 uppercase text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            send
          </button>
        </div>
      </form>
      {isSubmitted && (
        <p className="mt-4 text-green-500">Email sent successfully!</p>
      )}
    </div>
  );
}

export default EmailSend;