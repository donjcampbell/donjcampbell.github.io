import './Resume.css'

const summary = [
  'Software product engineering leader with experience spanning analysis, design, development, and deployment across multiple industries.',
  'Built and led multi-team engineering organizations while driving technical strategy, product architecture, and delivery process improvements.',
  'Hands-on background across the full software engineering lifecycle with strong customer interaction, agile execution, and platform modernization experience.',
]

const experience = [
  {
    title: 'Director, Software Engineering',
    company: 'Workday, Pleasanton, CA',
    focus: 'Framework Architecture',
    period: 'Jan 2020 - Present',
    bullets: [
      'Lead principal engineers providing targeted technical expertise across the framework group and ad hoc management support.',
      'Drive group initiatives including memory management, framework evolution, and business process re-architecture.',
    ],
  },
  {
    title: 'Director, Software Engineering',
    company: 'Workday, Pleasanton, CA',
    focus: 'Enterprise Frameworks',
    period: 'Mar 2018 - Jan 2020',
    bullets: [
      'Sponsored research and proof-of-concept work that produced Org Studio and Orchestrate frameworks used across multiple product lines and Workday Extend.',
      'Scaled framework engineering teams in Pleasanton and Munich while managing associated budget functions.',
      'Oversaw product decisions, delivery process, and continuous improvement during a period of rapid customer growth and increasingly complex delivery demands.',
    ],
  },
  {
    title: 'Director, Application Engineering',
    company: 'Workday, Pleasanton, CA',
    focus: 'Total Rewards',
    period: 'Sept 2015 - Mar 2018',
    bullets: [
      'Progressed from manager to director overseeing four engineering teams delivering compensation and benefits products.',
      'Hired engineers, managers, and students during a highly competitive growth phase while managing budget responsibilities.',
      'Led cross-pillar technical and process initiatives, including continuous planning adoption and pre-commit queue improvements.',
    ],
  },
  {
    title: 'Principal Software Engineer',
    company: 'Workday, Pleasanton, CA',
    focus: 'Total Rewards',
    period: 'May 2009 - Sept 2015',
    bullets: [
      'Helped build Workday’s compensation product from the ground up to support complex enterprise configurations across a broad set of countries.',
      'Designed and delivered compensation planning capabilities for budgeting distribution, automated recommendations, and administrative oversight.',
      'Created the foundation for a patented compensation methodology used by organizations with complex compensation calculations.',
    ],
  },
  {
    title: 'Principal Engineer',
    company: 'Oracle Corporation, Redwood Shores, CA',
    focus: 'Fusion Financial Applications',
    period: '2006 - May 2009',
    bullets: [
      'Led design and implementation of a Java-based processing engine delivering budgetary control services.',
      'Used a flexible component-driven architecture that could switch between in-memory data handling and permanent or transient work tables with minimal code changes.',
    ],
  },
  {
    title: 'Technical Architect',
    company: 'AT&T, San Ramon, CA',
    focus: 'IT Services',
    period: '2003 - 2006',
    bullets: [
      'Served as one of two lead engineers defining architecture and detailed design for a network equipment pricing and ordering system.',
      'Delivered software used by internal sales representatives to support high-volume ordering workflows.',
    ],
  },
  {
    title: 'Technical Lead',
    company: 'Commerce One, Pleasanton, CA',
    focus: 'Engineering',
    period: '2000 - 2003',
    bullets: [
      'Built key components of a web-based procurement platform that lowered average purchase order processing costs.',
      'Enabled XML-based document exchange between buyers and suppliers for enterprise customers including GM, Shell, Exostar, and Schlumberger.',
    ],
  },
  {
    title: 'Senior Consultant',
    company: 'Magenic Technologies, Oakland, CA',
    period: '1999 - 2000',
    bullets: [
      'Delivered a customer registration and auction portal in a compressed two-month schedule for DoveBid.com’s first webcast-augmented live auction.',
    ],
  },
  {
    title: 'Senior Software Engineer and Analyst',
    company: 'Deutsche Bank, Irvine, CA',
    period: '1998 - 1999',
    bullets: [
      'Designed, developed, and deployed a client-server loan evaluation system that reduced rental and staffing costs.',
      'Built a secure web workflow for viewing and releasing loan documents and evaluations.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Cognitive Software, Calgary, AB',
    focus: 'Contract with Gibson Petroleum',
    period: '1995 - 1997',
    bullets: [
      'Created a truck scheduling and hydrocarbon volume tracking product that supported growth without increasing clerical staffing.',
      'Handled installation and training for remote field office deployments.',
    ],
  },
  {
    title: 'Senior Software Developer and Analyst',
    company: 'Minerva Technology, Calgary, AB',
    focus: 'Contract with Nova Corporation',
    period: '1993 - 1995',
    bullets: [
      'Contributed UI components to an early consolidated gas supply forecasting and reservoir modeling application suite.',
    ],
  },
  {
    title: 'Systems Analyst, Database Administrator',
    company: 'Chevron Canada Resources, Calgary, AB',
    period: '1992 - 1993',
    bullets: [
      'Provided technical leadership and training while helping build the organization’s first relational and client-server in-house applications.',
    ],
  },
]

const education = [
  {
    degree: 'B.Sc. Computer Science, Honors Program',
    school: 'University of Alberta, Edmonton, AB, Canada',
  },
]

const skills = {
  Leadership: [
    'Engineering Management',
    'Technical Strategy',
    'Hiring & Talent Development',
    'Budget Management',
    'Agile / Scrum',
    'Process Improvement',
    'Cross-functional Leadership',
    'Research Incubation',
  ],
  Architecture: [
    'Enterprise Frameworks',
    'Platform Modernization',
    'Product Architecture',
    'Business Process Re-architecture',
    'Component-Driven Design',
    'UML / MDA',
  ],
  Languages: [
    'Java',
    'JavaScript',
    'C / C++',
    'SQL',
    'XML / XSD / XSLT',
    'PL/SQL',
    'JSP',
  ],
  'Frameworks & Platforms': [
    'JEE / J2EE',
    'Spring',
    'Hibernate',
    'Struts',
    'ADF',
    'WebLogic',
    'WebSphere',
    'ASP / IIS',
  ],
  Databases: [
    'Oracle DBMS',
    'SQL Server',
    'Sybase',
    'DB2',
    'PowerBuilder',
  ],
}

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1>Resume</h1>
      </div>

      <section className="card resume-section">
        <h2>Summary</h2>
        <div className="resume-summary">
          {summary.map(item => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="skills-bubbles">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bubble-group">
              <span className="bubble-category">{category}</span>
              <div className="bubble-list">
                {items.map(item => (
                  <span key={item} className="bubble">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card resume-section">
        <h2>Experience</h2>
        {experience.map(job => (
          <div key={`${job.company}-${job.title}-${job.period}`} className="resume-entry">
            <div className="entry-header">
              <div>
                <div className="entry-title">{job.title}</div>
                <div className="entry-subtitle">
                  {job.company}
                  {job.focus ? ` • ${job.focus}` : ''}
                </div>
              </div>
              <span className="entry-period">{job.period}</span>
            </div>
            <ul className="entry-bullets">
              {job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="card resume-section">
        <h2>Education</h2>
        {education.map(edu => (
          <div key={edu.degree} className="resume-entry">
            <div className="entry-header">
              <div>
                <div className="entry-title">{edu.degree}</div>
                <div className="entry-subtitle">{edu.school}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}
