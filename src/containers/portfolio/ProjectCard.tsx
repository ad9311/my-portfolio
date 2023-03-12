import appIcons from '../../assets/img/icons';
import ProjectProps from '../../types/project';

function ProjectCard(props: ProjectProps) {
  return (
    <article className="rounded-md bg-neutral-100 border border-slate-200">
      <div className="flex flex-col xl:flex-row lxl:items-center">
        <div
          className="h-52 w-full relative xl:w-1/2 rounded-t-md xl:rounded-tr-none xl:rounded-bl-md bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${props.thumbnail})` }}
        >
          <a href={props.gitHubLink} className="absolute top-0 bottom-0 w-full" />
        </div>
        <div className="p-2 relative">
          <div className="leading-4">
            <a href={props.gitHubLink}>
              <h3 className="mt-2 text-xl font-bold hover:underline">{props.name}</h3>
            </a>
            <p>{props.description}</p>
          </div>
          <div className="w-fit mt-3 xl:m-0 xl:absolute bottom-3">
            <a href={props.gitHubLink}>
              <img className="w-5" src={appIcons.github} alt="github-source-code" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
