import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  const mobileText = {
    intro:
      'Hello! I am Narinder Pal Singh, an Aspiring Full Stack Developer with strong skills in React.js, Node.js, and MongoDB. Passionate about problem-solving with Data Structures & Algorithms, I have solved X+ problems on platforms like LeetCode and CodeChef.',
    skills:
      'I have developed multiple projects, including a Hotel Management System and interactive JavaScript games. My expertise includes REST APIs, Git, and database management. I hold a BSc in IT with 72% marks from Hindu College and am always eager to learn and build scalable solutions.',
  };

  const desktopText = {
    intro:
      'Hello! I am Narinder Pal Singh, an Aspiring Full Stack Developer with expertise in React.js, Node.js, and MongoDB. Passionate about solving complex problems using Data Structures & Algorithms, I have tackled X+ coding challenges on platforms like LeetCode and CodeChef.',
    skills:
      'I have built and deployed various projects, including a Hotel Management System and interactive JavaScript games. With a strong understanding of REST APIs, Git, and database management, I aim to develop high-performance applications. I hold a BSc in IT with 72% marks from Hindu College, and I am dedicated to continuous learning and innovation.',
  };

  return (
    <motion.div
      className="about"
      id="about"
      ref={ref}
      style={{ paddingTop: isMobile ? '150px' : '250px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.skills : desktopText.skills}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">Git & GitHub</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/etc/image.webp"
              alt="profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;