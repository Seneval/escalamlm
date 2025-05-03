"use client"; // Add this directive for client-side functionality
import React, { FormEvent } from 'react'; // Import FormEvent

const ContactPage = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => { // Explicitly type event
    event.preventDefault();
    const form = event.target as HTMLFormElement; // Cast event.target to HTMLFormElement
    const formData = new FormData(form);
    const urlSearchParams = new URLSearchParams(); // Create a new URLSearchParams object

    // Iterate over formData and append to urlSearchParams
    formData.forEach((value, key) => {
      urlSearchParams.append(key, value as string); // Append each key-value pair
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlSearchParams.toString(), // Use the converted URLSearchParams
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // Optionally, redirect to a thank you page or show a success message
        alert("Diagnosis request sent successfully!");
        form.reset(); // Use the casted form to call reset()
      } else {
        console.error("Form submission failed:", response.statusText);
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred during form submission. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Free Diagnosis</h1>
      <p className="mb-8">Contact us for a free diagnosis of your business.</p>

      <form name="contact" onSubmit={handleSubmit}> {/* Use onSubmit handler */}
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input type="email" name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="business" className="block text-gray-700 text-sm font-bold mb-2">
            Business Type:
          </label>
          <input type="text" name="business" id="business" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea name="message" id="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send Diagnosis Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
