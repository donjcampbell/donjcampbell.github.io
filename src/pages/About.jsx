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
          <p className="hero-title">Software Product Engineer At Heart</p>
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
          Welcome to my personal site. I've been around the software world a few times — enough to have some
          stories worth sharing, which I'll eventually get to in the blog. I've been lucky to work across a lot
          of industries, companies, and places, and to watch this industry change dramatically over the years —
          for better and sometimes worse. Like most of us, I'm genuinely fascinated by where the new wave of AI
          tooling takes us. This site is my starting point for figuring that out.
        </p>
      </section>

      <section className="so-what card">
        <h2>So What</h2>
        <p>
          As I look toward the back half of a full career in and around software, I keep coming back to the
          question of how I can be useful. The most satisfying part of being a development manager was always
          helping engineers grow — watching someone level up and own their work is genuinely rewarding. But
          that doesn't quite translate into what comes next.
        </p>
        <p>
          The idea that keeps sticking with me: volunteering time to help someone — anyone, really — build
          something fun or meaningful using this new generation of tools. Maybe there's something to that.
        </p>
      </section>
    </div>
  )
}
