import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  const projectsData = [
    {
      image: '/projects/employeeManagementSystem.webp',
      projectName: 'Employee Management System',
      projectLink: 'https://npsingh12.github.io/employee-management-system/',
      projectDescription: 'Developed a web-based Employee Management System using React.js, Tailwind CSS, Context API, and Local Storage. Implemented authentication, employee record management, and role-based access.',
      projectTech: ['React.js', 'Tailwind CSS', 'Context API', 'Local Storage'],
      projectExternalLinks: {
        github: 'https://github.com/NpSingh12/employee-management-system',
        externalLink: 'https://npsingh12.github.io/employee-management-system/',
      },
    },
    {
      image: '/projects/hotelManagementSystem.webp',
      projectName: 'Hotel Management System',
      projectLink: 'https://npsingh12.github.io/Hotel-management/',
      projectDescription: 'Developed a full-stack hotel booking system using PHP, MySQL, HTML, CSS, and JavaScript. Implemented room booking, customer management, and automated billing.',
      projectTech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      projectExternalLinks: {
        github: 'https://github.com/NpSingh12/Hotel-management',
        externalLink: 'https://npsingh12.github.io/Hotel-management/',
      },
    },
    {
      image: '/projects/gymWebsite.webp',
      projectName: 'Gym Website',
      projectLink: 'https://npsingh12.github.io/GYM-PROJECT/',
      projectDescription: 'Built a responsive Gym Website using HTML, CSS, and JavaScript. Designed a modern UI with interactive animations for an engaging user experience.',
      projectTech: ['HTML', 'CSS', 'JavaScript'],
      projectExternalLinks: {
        github: 'https://github.com/NpSingh12/GYM-PROJECT',
        externalLink: 'https://npsingh12.github.io/GYM-PROJECT/',
      },
    },
    {
      image: '/projects/cricketGame.webp',
      projectName: 'Cricket Game (Bat Ball Game)',
      projectLink: 'https://npsingh12.github.io/BatBall-Game/',
      projectDescription: 'Developed a JavaScript-based cricket game with dynamic scoring and interactive mechanics. Used CSS animations for enhanced gameplay.',
      projectTech: ['JavaScript', 'CSS'],
      projectExternalLinks: {
        github: 'https://github.com/NpSingh12/BatBall-Game',
        externalLink: 'https://npsingh12.github.io/BatBall-Game/',
      },
    },
    {
      image: '/projects/dsaPractice.webp',
      projectName: 'Data Structures and Algorithms Practice',
      projectLink: 'https://github.com/NpSingh12/DSA',
      projectDescription: 'Maintained a GitHub repository showcasing solutions to X+ DSA problems on LeetCode and CodeChef. Focused on arrays, recursion, sorting algorithms, and problem-solving techniques.',
      projectTech: ['DSA', 'LeetCode', 'CodeChef'],
      projectExternalLinks: {
        github: 'https://github.com/NpSingh12/DSA-Practice-Repository',
        externalLink: 'https://github.com/NpSingh12/DSA',
      },
    },
  ];

  return (
    <div id="work" className="projects" style={{ paddingTop: '170px' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image" onClick={() => window.open(projectLink, '_blank')}>
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" alt={projectName} quality={100} />
                  </div>
                </div>
                <motion.div
                  className="project-info"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="project-info-title">
                    <span
                      className="cursor-pointer"
                      onClick={() => window.open(projectLink, '_blank')}
                    >
                      {projectName}
                    </span>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <motion.li
                        className="project-info-tech-list-item"
                        key={tech}
                        whileHover={{ y: -2, color: 'var(--theme-color)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <Github />
                      </Link>
                    </motion.li>
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <ExternalLink />
                      </Link>
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
