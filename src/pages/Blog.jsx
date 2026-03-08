import './Blog.css'

const posts = [
  {
    title: 'Getting Started with Vite and React',
    date: 'February 20, 2026',
    excerpt:
      'Vite has become my go-to build tool for React projects. In this post I explore why it\'s faster than traditional bundlers and how to set up a project from scratch.',
    slug: 'getting-started-with-vite-and-react',
  },
  {
    title: 'Thoughts on TypeScript in 2026',
    date: 'January 15, 2026',
    excerpt:
      'TypeScript continues to evolve rapidly. Here\'s how I think about type safety in large codebases and some patterns I\'ve found useful over the past year.',
    slug: 'thoughts-on-typescript-2026',
  },
  {
    title: 'Deploying React Apps to GitHub Pages',
    date: 'December 5, 2025',
    excerpt:
      'A walkthrough of the simplest way to host a React app on GitHub Pages using the gh-pages package and HashRouter for client-side routing.',
    slug: 'deploying-react-to-github-pages',
  },
]

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts on software engineering, tools, and technology.</p>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <article key={post.slug} className="post-card card">
            <div className="post-date">{post.date}</div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <a
              href="#"
              className="post-read-more"
              onClick={e => e.preventDefault()}
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
