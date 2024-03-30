import ProjectCard from "../components/project-card";
import teamworkProject from "../assets/teamwork-project-desktop.png";

export default function ProjectPage() {
  return (
    <main>
      <section>
        <div className="mx-auto grid max-w-screen-xl gap-4 px-4">
          <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
          <hr className="border-sage-400 w-24 border my-4"></hr>
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
