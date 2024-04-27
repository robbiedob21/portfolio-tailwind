import portrait from "../assets/portrait.webp";
import landscape from "../assets/landscape.webp";
import Button from "../components/button";

export default function AboutMe() {
  return (
    <>
      <article className="my-8 px-4 sm:my-12 sm:px-6">
        <div className="mx-auto max-w-prose text-pretty leading-loose">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h1>
            <hr className="mt-2 mb-6 w-24 border border-sage-400"></hr>
          </div>
          <img
            src={portrait}
            alt=""
            className="float-right ml-4 hidden max-h-96 rounded-full object-cover shadow-lg ring ring-cognac-700 ring-offset-2 ring-offset-white sm:block"
          />
          <p className="my-4 text-lg font-semibold">
            Hi there! I'm Robbie, a web developer with a passion for
            helping small businesses thrive online. While I'm new to the
            professional web development scene, my enthusiasm and eagerness to
            learn are unmatched.
          </p>
          <img
            src={landscape}
            alt=""
            className="mx-auto my-4 max-w-full rounded-full object-cover shadow-lg ring ring-cognac-700 ring-offset-2 ring-offset-white sm:hidden"
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
            curve in web development trends. I relish the opportunity to partner
            with small businesses and help them unlock their full online
            potential.
          </p>
          <div className="my-8 text-center">
            <Button
              text="Let's chat
            about your project!"
              size="large"
              href="/contact"
            />
          </div>
        </div>
      </article>
    </>
  );
}
