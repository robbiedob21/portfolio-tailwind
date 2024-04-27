import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("Submit");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f83095cb-c544-4168-8de6-8e000b2eb92e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="grid gap-4">
      <form onSubmit={onSubmit} className="grid gap-2">
        <input type="hidden" name="access_key" value="f83095cb-c544-4168-8de6-8e000b2eb92e"/>
        <label htmlFor="name" className="text-dark">Name*</label>
        <input type="text" name="name" id="name" placeholder="Robbie" className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50" required/>
        <label htmlFor="email" className="text-dark">Email*</label>
        <input type="email" name="email" id="email" placeholder="robbie@email.co.nz" className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50" required/>
        <label htmlFor="phone" className="text-dark">Phone*</label>
        <input type="tel" name="phone" id="phone" placeholder="02123456789" className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50" required/>
        <label htmlFor="message" className="text-dark">Message*</label>
        <textarea name="message" id="message" rows={5} placeholder="I would like to get a website!" className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50" required></textarea>

        <button type="submit" className="rounded-md border-2 border-transparent bg-sage-700 px-2 py-2 text-xl text-white hover:border-sage-700 hover:bg-sage-400 hover:text-dark active:bg-sage-500">{result}</button>

      </form>
    </div>
  );
  
  /* FORM SPARK */

  // return (
  //   <>
  //     <div className="grid gap-4">
  //       <form
  //         action="https://submit-form.com/59H6glmgi"
  //         className="grid gap-2"
  //         name="contact"
  //       >
  //         <input
  //           type="hidden"
  //           name="_redirect"
  //           value="http://localhost:3000/"
  //         />
  //         <input type="hidden" name="_append" value="false" />
  //         <label htmlFor="name" className="text-dark">
  //           Name*
  //         </label>
  //         <input
  //           id="name"
  //           name="name"
  //           type="text"
  //           placeholder="Robbie"
  //           className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50"
  //           required
  //         />
  //         <label htmlFor="email" className="text-dark">
  //           Email*
  //         </label>
  //         <input
  //           id="email"
  //           name="email"
  //           type="email"
  //           placeholder="name@email.co.nz"
  //           className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50"
  //           required
  //         />
  //         <label htmlFor="phone" className="text-dark">
  //           Phone*
  //         </label>
  //         <input
  //           id="phone"
  //           name="phone"
  //           type="tel"
  //           placeholder="02123456789"
  //           className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50"
  //           required
  //         />
  //         <label htmlFor="message" className="text-dark">
  //           Message*
  //         </label>
  //         <textarea
  //           id="message"
  //           name="message"
  //           rows={5}
  //           placeholder="I would like to get a website!"
  //           className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50"
  //           required
  //         />
  //         <button
  //           id="submit"
  //           type="submit"
  //           className="rounded-md border-2 border-transparent bg-sage-700 px-2 py-2 text-xl text-white hover:border-sage-700 hover:bg-sage-400 hover:text-dark active:bg-sage-500"
  //         >
  //           Submit
  //         </button>
  //       </form>
  //     </div>
  //   </>
  // );
}
