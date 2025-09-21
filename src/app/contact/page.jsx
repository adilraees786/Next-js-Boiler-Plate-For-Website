export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      description: "Learn the basics of Next.js and why it's so powerful.",
      date: "Sep 21, 2025",
    },
    {
      id: 2,
      title: "Using Tailwind CSS with Next.js",
      description: "Step-by-step guide to style your Next.js app with Tailwind.",
      date: "Sep 20, 2025",
    },
    {
      id: 3,
      title: "Deploying Next.js Apps",
      description: "Learn how to deploy your Next.js project easily.",
      date: "Sep 18, 2025",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-lobster text-4xl font-bold text-blue-600">My Blog</h1>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#posts" className="hover:text-blue-600">Posts</a>
            <a href="#about" className="hover:text-blue-600">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl shadow-amber-400"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to My Blog</h2>
        <p className="text-lg max-w-2xl">
          Sharing thoughts, tutorials, and guides about Next.js, Tailwind CSS, and web development.
        </p>
      </section>

      {/* Blog Posts */}
      <section id="posts" className="flex-1 max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-3">{post.description}</p>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="font-lobster font-bold text-gray-600 max-w-2xl mx-auto">
          I'm a passionate web developer who loves building modern web apps with
          Next.js, React, and Tailwind CSS. This blog is where I share tutorials,
          tips, and insights about coding and design.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 text-center text-gray-500">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </footer>
    </div>
  );
}
