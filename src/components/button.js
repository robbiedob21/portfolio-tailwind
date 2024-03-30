export default function Button({ text, size, href }) {
  switch (size) {
    case "large":
      return (
        <a
          href={href}
          className="bg-sage-700 hover:bg-sage-400 hover:text-dark hover:border-sage-700 active:bg-sage-500 my-2 max-w-fit rounded-md border-2 border-transparent px-4 py-2 text-xl text-white"
          role="button"
        >
          {text}
        </a>
      );
    case "small":
      return (
        <a
          href={href}
          className="bg-sage-700 hover:bg-sage-400 hover:text-dark hover:border-sage-700 active:bg-sage-500 my-1 max-w-fit rounded-sm border border-transparent px-2 py-1 text-lg text-white"
          role="button"
        >
          {text}
        </a>
      );
    default:
      return (
        <a
          href={href}
          className="bg-sage-700 hover:bg-sage-400 hover:text-dark hover:border-sage-700 active:bg-sage-500 my-1 max-w-fit rounded-sm border border-transparent px-2 py-1 text-white"
          role="button"
        >
          {text}
        </a>
      );
  }
}
