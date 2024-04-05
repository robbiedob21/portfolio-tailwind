// export default function Button({ text, size, href }) {
//   switch (size) {
//     case "large":
//       return (
//         <a
//           href={href}
//           className="my-2 max-w-fit rounded-md border-2 border-transparent bg-sage-700 px-4 py-2 text-xl text-white hover:border-sage-700 hover:bg-sage-400 hover:text-dark active:bg-sage-500"
//           role="button"
//         >
//           {text}
//         </a>
//       );
//     case "small":
//       return (
//         <a
//           href={href}
//           className="my-1 max-w-fit rounded-sm border border-transparent bg-sage-700 px-2 py-1 text-lg text-white hover:border-sage-700 hover:bg-sage-400 hover:text-dark active:bg-sage-500"
//           role="button"
//         >
//           {text}
//         </a>
//       );
//     default:
//       return (
//         <a
//           href={href}
//           className="my-1 max-w-fit rounded-sm border border-transparent bg-sage-700 px-2 py-1 text-white hover:border-sage-700 hover:bg-sage-400 hover:text-dark active:bg-sage-500"
//           role="button"
//         >
//           {text}
//         </a>
//       );
//   }
// }

export default function Button({ text, size, href }) {
  return (
    <a  
      href={href}
    className={`${size === "large" ? "my-2 rounded-md border-2 px-4 py-2 text-xl" : "my-1 rounded-sm border px-2 py-1 text-lg"} max-w-fit border-transparent bg-sage-700 text-white hover:border-sage-700 hover:bg-sage-400 hover:text-dark active:bg-sage-500`}
      role="button"
    >
      {text}
    </a>
  );
}
