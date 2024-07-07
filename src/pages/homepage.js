import Button from "../components/button";
import heroImg from "../assets/hero-image.webp";
import headshot from "../assets/headshot.webp";
import contactImg from "../assets/contact-image.webp";
import teamworkProject from "../assets/teamwork-scaffolding.webp";
import forSal from "../assets/runningforsal.png";
import ContactForm from "../components/contact-form";
import ProjectCard from "../components/project-card";

export default function Homepage() {
  return (
    <>
      <section className="mb-16 mt-12 px-4 sm:px-6">
        <div className="mx-auto grid max-w-screen-xl items-center gap-8 md:grid-cols-2">
          <div className="grid place-items-center">
            <div className="grid items-center justify-items-center gap-4 sm:justify-items-start">
              <span className="text-balance text-center text-4xl font-bold tracking-tight sm:text-wrap sm:text-left sm:text-5xl lg:text-6xl">
                Get Online Without Breaking the Bank
              </span>
              <p className="text-pretty text-center text-xl sm:text-left sm:text-2xl">
                Helping small businesses thrive online in a digital age
              </p>
              <Button
                text="Grow your online presence"
                size="large"
                href="/contact"
              />
            </div>
          </div>
          <img src={heroImg} className="hidden md:block" alt="" />
        </div>
      </section>
      <section className="my-16 bg-gradient-to-r from-white from-50% to-cognac-400 to-50% md:pl-6">
        <div className="mx-auto max-w-screen-xl bg-cognac-400 p-8 md:rounded-l-full">
          <div className="flex flex-col place-items-center gap-4 sm:gap-8 md:flex-row">
            <img
              src={headshot}
              alt=""
              className="aspect-square w-72 rounded-full object-cover shadow-lg ring ring-cognac-700 ring-offset-2 ring-offset-cognac-400 md:h-96 md:w-96 md:min-w-fit"
            />
            <div className="flex max-w-prose flex-col justify-center gap-4">
              <div>
                <h2 className="text-3xl font-medium sm:text-4xl">About Me</h2>
                <hr className="my-2 w-24 border border-cognac-700"></hr>
              </div>
              <p className="text-pretty text-xl font-bold">
                I'm Robbie, a passionate web developer dedicated to helping
                small businesses launch their online presence.
              </p>
              <p className="text-pretty text-xl">
                I believe every small business deserves a professional and
                effective website, regardless of budget. I design websites that
                are easy to navigate and leave a great first impression on your
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-16 px-4 sm:px-6">
        <div className="mx-auto grid max-w-screen-xl gap-4">
          <div>
            <h2 className="text-4xl font-medium">Featured Projects</h2>
            <hr className="my-2 w-24 border border-sage-400"></hr>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <ProjectCard
              image={teamworkProject}
              title="Teamwork Scaffolding"
              category="Business / Trade"
              description="A clean, 3-page website for this local scaffolding company, prioritizing clear service communication and easy contact."
              link="https://teamworkscaffolding.co.nz/"
            />
            <ProjectCard
                image={forSal}
                title="Running For Sal"
                category="Influencer"
                description="A modern grid layout with animations for a local runner who fundraises for mental health charities."
                link="https://runningforsal.netlify.app/"
              />
          </div>
          <div className="my-4 text-center">
            <Button text="See More Projects" size="large" href="/projects" />
          </div>
        </div>
      </section>
      <section className="my-16 bg-gradient-to-r from-cognac-400 from-50% to-white to-50% md:pr-6">
        <div className="mx-auto max-w-screen-xl bg-cognac-400 px-4 py-8 sm:px-6 md:rounded-r-full">
          <blockquote className="mx-auto grid max-w-prose gap-4 p-4">
            <span className="text-pretty text-2xl font-medium">
              “Robbie listened carefully to our needs and designed a website
              that exceeded our expectations. We've already seen an increase in
              enquiries!”
            </span>
            <p className="text-pretty text-lg">
              John Drakeley, Owner of Teamwork Scaffolding
            </p>
          </blockquote>
        </div>
      </section>
      <section className="my-16 px-4 sm:px-6">
        <div className="mx-auto grid max-w-screen-xl items-center gap-8 md:grid-cols-2">
          <img src={contactImg} alt="" className="hidden md:block" />
          <div className="grid gap-4">
            <div>
              <h2 className="text-3xl font-medium sm:text-4xl">
                Let's chat about your project!
              </h2>
              <hr className="my-2 w-24 border border-sage-400"></hr>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
