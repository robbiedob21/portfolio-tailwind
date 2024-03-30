import portrait from "../assets/portrait.jpg";
import landscape from "../assets/landscape.jpg"
import Button from "../components/button";

export default function AboutMe() {
  return (
    <main className="my-8">
      <section className="mx-auto max-w-prose text-pretty leading-loose px-4">
        <img
          src={portrait}
          alt=""
          className="max-h-96 rounded-full float-right ml-4 ring-cognac-700 ring-offset-white object-cover ring ring-offset-2 shadow-lg hidden sm:block"
        />
        <h1 className="text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <hr className="border-sage-400 w-24 border my-4"></hr>
        <p className="font-semibold text-lg my-4">
          Hi there! I'm Robbie, a web developer with a burning passion for
          helping small businesses thrive online. While I'm new to the
          professional web development scene, my enthusiasm and eagerness to
          learn are unmatched.
        </p>
        <img
          src={landscape}
          alt=""
          className="max-h-64 mx-auto rounded-full my-4 ring-cognac-700 ring-offset-white object-cover ring ring-offset-2 shadow-lg sm:hidden"
        />
        <p className="my-4">
          Witnessing the power of a well-designed website for small businesses
          truly excites me. I believe every small business deserves a digital
          storefront that reflects their brand and attracts new customers.
          That's why I'm dedicated to creating affordable, user-friendly
          websites that pack a punch.
        </p>
        <p className="my-4">
          I bring a fresh perspective and a commitment to staying ahead of the
          curve in web development trends. I relish the
          opportunity to partner with small businesses and help them unlock
          their full online potential.
        </p>
        <p className="my-4">
          Ready to join forces and take your small business online? Let's chat
          about your project!
        </p>
        <div className="text-center my-4">
            <Button text="Ready to Chat?" size="large" href="/contact"/>
        </div>
      </section>
    </main>
  );
}
