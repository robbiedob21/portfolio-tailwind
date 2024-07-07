import ProjectCard from "../components/project-card";
import teamworkProject from "../assets/teamwork-scaffolding.webp";
import forSal from "../assets/runningforsal.png";
import socialLinks from "../assets/social-links.webp";
import recipe from "../assets/recipe.webp";
import faqAccordion from "../assets/faq-accordion.webp";

export default function ProjectPage() {
  return (
    <>
      <section className="my-8 px-4 sm:my-12 sm:px-6">
        <div className="mx-auto grid max-w-screen-xl gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My Projects
            </h1>
            <hr className="mb-6 mt-2 w-24 border border-sage-400"></hr>
            <p className="leading-relaxed">
              Here, you'll find a wide range of websites I've built,
              encompassing both real-world client projects and personal demo
              websites. These projects showcase my know-how in web
              development and my commitment to crafting user-friendly websites
              that will suit your needs. Dive in and explore the variety of
              websites I've brought to life, from functional business solutions
              to creative explorations!
            </p>
          </div>
          <div className="">
            <h2 className="mb-4 text-2xl font-medium">Real World Projects</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                image={teamworkProject}
                title="Teamwork Scaffolding"
                category="Business / Trade"
                description="A simple 3 page website."
                link="https://teamworkscaffolding.co.nz/"
              />
              <ProjectCard
                image={forSal}
                title="Running For Sal"
                category="Influencer"
                description="A simple 3 page website."
                link="https://runningforsal.netlify.app/"
              />
            </div>
          </div>
          <hr className="" />
          <div>
            <h2 className="mb-4 text-2xl font-medium">Demo Projects</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                image={socialLinks}
                title="Social Links"
                category="Demo"
                description="In this small project, a social link-sharing profile was build for Jessica Randall."
                link="https://robbiekiwi-social-links.netlify.app/"
              />
              <ProjectCard
                image={recipe}
                title="Omelette Recipe Page"
                category="Demo"
                description="Building out a recipe card for an Omelette recipe."
                link="https://robbiekiwi-recipe.netlify.app/"
              />
              <ProjectCard
                image={faqAccordion}
                title="FAQ Accordion"
                category="Demo"
                description="Most website will likely need this sort of FAQ section"
                link="https://robbiekiwi-accordion.netlify.app/"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
