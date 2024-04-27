import Button from "./button";

export default function ProjectCard({
  image,
  category,
  title,
  description,
  link,
}) {
  return (
    <a href={link}>
      <div className="group/card relative rounded-lg shadow-md">
        <img
          src={image}
          alt={`Screenshot of the ${title} website`}
          className="rounded-lg transition duration-300 group-focus-within/card:brightness-50 group-hover/card:brightness-50"
        />
        <div className="absolute inset-x-2 bottom-2 grid translate-y-2 gap-1 rounded-md bg-sage-400 px-4 py-2 text-dark opacity-0 shadow-sm transition duration-300 group-focus-within/card:translate-y-0 group-focus-within/card:opacity-100 group-hover/card:translate-y-0 group-hover/card:opacity-100">
          <span className="text-sm uppercase ">{category}</span>
          <h3 className="text-xl font-medium">{title}</h3>
          <p>{description}</p>
          <Button href={link} text="View Site" />
        </div>
      </div>
    </a>
  );
}
