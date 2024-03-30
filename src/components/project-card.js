import Button from "./button";

export default function ProjectCard({
  image,
  category,
  title,
  description,
  link,
}) {
  return (
    <div className="group/card relative rounded-lg shadow-md">
      <img
        src={image}
        alt=""
        className="rounded-lg transition duration-300 group-hover/card:brightness-50"
      />
      <div className="bg-sage-400 text-dark absolute inset-x-2 bottom-2 grid translate-y-2 gap-1 rounded-md px-4 py-2 opacity-0 shadow-sm transition duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
        <span className="text-sm uppercase ">{category}</span>
        <h3 className="text-xl font-medium">{title}</h3>
        <p>{description}</p>
        <Button href={link} text="View Site" />
      </div>
    </div>
  );
}
