import PortfolioHeader, { ProjectCard } from '../containers/portfolio';
import ProjectProps from '../types/project';

const projects: ProjectProps[] = [
  {
    id: 0,
    name: 'Elementos',
    description: 'Online interactive Periodic Table.',
    thumbnail: 'https://via.placeholder.com/700x700.jpeg',
    gitHubLink: '#',
    stack: ['react', 'redux', 'tailwindcss'],
  },
  {
    id: 1,
    name: 'Elementos',
    description: 'Online interactive Periodic Table.',
    thumbnail: 'https://via.placeholder.com/700x700.jpeg',
    gitHubLink: '#',
    stack: ['rails', 'psql'],
  },
  {
    id: 2,
    name: 'Elementos',
    description: 'Online interactive Periodic Table.',
    thumbnail: 'https://via.placeholder.com/700x700.jpeg',
    gitHubLink: '#',
    stack: ['react', 'ts'],
  },
  {
    id: 3,
    name: 'Elementos',
    description: 'Online interactive Periodic Table.',
    thumbnail: 'https://via.placeholder.com/700x700.jpeg',
    gitHubLink: '#',
    stack: ['react', 'sass'],
  },
];

function Portfolio() {
  const mapProjects = projects.map(project => (
    <li key={project.id}>
      <ProjectCard {...project} />
    </li>
  ));

  return (
    <div>
      <PortfolioHeader />
      <div className="mt-5 pt-10 px-3">
        <ul className="grid gap-5 grid-cols-1 sm:grid-cols-3 xl:grid-cols-2">{mapProjects}</ul>
      </div>
    </div>
  );
}

export default Portfolio;
