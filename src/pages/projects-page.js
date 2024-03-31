import ProjectCard from "../components/project-card";
import teamworkProject from "../assets/teamwork-project-desktop.png";

export default function ProjectPage() {
  return (
    <main>
      <section className="my-8 px-4 sm:my-12 sm:px-6">
        <div className="mx-auto grid max-w-screen-xl gap-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Projects
          </h1>
          <hr className="my-4 w-24 border border-sage-400"></hr>
          <h2 className="text-2xl font-medium">Real World Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            <ProjectCard
              image={teamworkProject}
              title="Teamwork Scaffolding"
              category="Business / Trade"
              description="A simple 3 page website."
              link="https://teamworkscaffolding.co.nz/"
            />
          </div>
          <h2 className="text-2xl font-medium">Demo Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            <ProjectCard
              image={teamworkProject}
              title="Teamwork Scaffolding"
              category="Business / Trade"
              description="A simple 3 page website."
              link="https://teamworkscaffolding.co.nz/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
