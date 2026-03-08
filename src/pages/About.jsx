import './About.css'

export default function About() {
  const profileImageUrl = `${import.meta.env.BASE_URL}2021-don-profile.jpg`

  return (
    <div className="about-page">
      <section className="hero">
        <img
          src={profileImageUrl}
          alt="Don Campbell"
          className="hero-avatar"
        />
        <div className="hero-text">
          <h1 className="hero-name">Don Campbell</h1>
          <p className="hero-title">Software Engineer</p>
          <div className="hero-links">
            <a
              href="https://github.com/donjcampbell"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/donjcampbell"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="bio card">
        <h2>About Me</h2>
        <p>
          Welcome to my personal site. I'm a software engineer with a passion for building
          clean, reliable software. I enjoy working across the full stack and have experience
          with modern web technologies, cloud infrastructure, and developer tooling.
        </p>
        <p>
          Outside of work, I enjoy exploring new programming languages, contributing to
          open source, and staying current with the evolving tech landscape. Feel free to
          explore my resume and check out my blog where I share thoughts on software
          engineering and technology.
        </p>
      </section>

      <section className="skills-overview card">
        <h2>What I Work With</h2>
        <div className="tag-list">
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL',
            'AWS', 'Docker', 'Git', 'REST APIs'].map(skill => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
