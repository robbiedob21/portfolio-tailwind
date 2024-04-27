export default function ContactForm() {
  return (
    <>
      <div className="grid gap-4">
        <form
          className="grid gap-2"
          name="contact"
          netlify
        >
          <label htmlFor="name" className="text-dark">
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Robbie"
            className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50"
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
            className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50"
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
            className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50"
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
            className="block w-full rounded-md border-gray-300 shadow-sm placeholder:opacity-50 focus:border-sage-400 focus:ring focus:ring-sage-400 focus:ring-opacity-50"
            required
          />
          <button
            id="submit"
            type="submit"
            className="rounded-md border-2 border-transparent bg-sage-700 px-2 py-2 text-xl text-white hover:border-sage-700 hover:bg-sage-400 hover:text-dark active:bg-sage-500"
          >Submit</button>
        </form>
      </div>
    </>
  );
}
