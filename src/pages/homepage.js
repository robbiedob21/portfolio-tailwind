import Button from "../components/button";
import heroImg from "../assets/hero-image.jpeg";
import headshot from "../assets/headshot.jpg";
import contactImg from "../assets/contact-image.jpeg";
import ContactForm from "../components/contact-form";
import ProjectCard from "../components/project-card";
import teamworkProject from "../assets/teamwork-project-desktop.png";

export default function Homepage() {
  return (
    <main>
      <section className="my-8">
        <div className="mx-auto grid max-w-screen-xl p-4 sm:grid-cols-2 sm:p-6">
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
          <img src={heroImg} className="hidden sm:block" />
        </div>
      </section>
      <section className="to-cognac-400 my-8 bg-gradient-to-r from-white from-50% to-50% md:pl-4">
        <div className="bg-cognac-400 mx-auto max-w-screen-xl p-4 md:rounded-l-full">
          <div className="flex flex-col place-items-center gap-4 md:flex-row">
            <img
              src={headshot}
              alt=""
              className="ring-cognac-700 ring-offset-cognac-400 aspect-square w-72 rounded-full object-cover shadow-lg ring ring-offset-2 md:h-96 md:w-96 md:min-w-fit"
            />
            <div className="flex max-w-prose flex-col justify-center gap-4 p-4">
              <span className="text-4xl font-medium">About Me</span>
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
      <section className="my-8 ">
        <div className="max-w-screen-xl p-4 grid gap-4 mx-auto">
            <h2 className="text-4xl font-medium">Real World Projects</h2>
            <div className=" grid gap-4 sm:grid-cols-2">
            <ProjectCard
                image={teamworkProject}
                title="Teamwork Scaffolding"
                category="Business / Trade"
                description="A simple 3 page website."
                link="https://teamworkscaffolding.co.nz/"
            />
            <ProjectCard
                image={teamworkProject}
                title="Teamwork Scaffolding"
                category="Business / Trade"
                description="A simple 3 page website."
                link="https://teamworkscaffolding.co.nz/"
                />
            </div>
            <div className="text-center my-4">
            <Button text="See More Projects" size="large" href="/projects"/>
        </div>
        </div>
      </section>
      <section className="from-cognac-400 my-8 bg-gradient-to-r from-50% to-white to-50% md:pr-4">
        <div className="bg-cognac-400 mx-auto max-w-screen-xl p-4 md:rounded-r-full">
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
      <section className="my-4">
        <div className="mx-auto grid max-w-screen-xl items-center gap-4 p-4 sm:grid-cols-2">
          <img src={contactImg} alt="" className="hidden sm:block" />
          <div className="grid gap-4">
            <span className="text-4xl font-medium">
              Let's chat about your project!
            </span>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
