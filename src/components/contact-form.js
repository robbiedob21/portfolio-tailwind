import { Form } from "react-router-dom";

export default function ContactForm() {
  return (
    <>
      <div className="grid gap-4">
        <Form action="/" className="grid gap-2">
          <label htmlFor="name" className="text-dark">
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Robbie"
            className="focus:border-sage-400 focus:ring-sage-400 block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:ring focus:ring-opacity-50"
            required
          />
          <label htmlFor="email" className="text-dark">
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@email.co.nz"
            className="focus:border-sage-400 focus:ring-sage-400 block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:ring focus:ring-opacity-50"
            required
          />
          <label htmlFor="phone" className="text-dark">
            Phone*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="02123456789"
            className="focus:border-sage-400 focus:ring-sage-400 block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:ring focus:ring-opacity-50"
            required
          />
          <label htmlFor="message" className="text-dark">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="I would like to get a website!"
            className="focus:border-sage-400 focus:ring-sage-400 block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:ring focus:ring-opacity-50"
            required
          />
          <input
            id="submit"
            type="submit"
            className="bg-sage-700 hover:bg-sage-400 hover:text-dark hover:border-sage-700 active:bg-sage-500 rounded-md border-2 border-transparent px-2 py-2 text-xl text-white"
          />
        </Form>
      </div>
    </>
  );
}
