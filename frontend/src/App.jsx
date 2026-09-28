function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black font-bold">
              C
            </div>

            <span className="text-lg font-semibold">
              CodeLens AI
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white">
              Features
            </a>

            <a href="#how-it-works" className="hover:text-white">
              How It Works
            </a>

            <button className="rounded-lg border border-zinc-700 px-4 py-2 text-white hover:bg-zinc-800">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
              AI-Powered Developer Tool
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              AI Code Review That Thinks Like a Senior Engineer.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Analyze, improve and understand your code with
              AI-powered security, performance and maintainability
              reviews.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-zinc-200">
                Start Free Review
              </button>

              <button className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-white hover:bg-zinc-800">
                View Demo
              </button>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-y border-zinc-800 bg-zinc-900/40"
        >
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-zinc-500">
                FEATURES
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Understand your code better.
              </h2>

              <p className="mt-4 text-zinc-400">
                CodeLens AI analyzes your code across multiple
                dimensions and provides actionable recommendations.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <FeatureCard
                title="Security Analysis"
                description="Identify potential vulnerabilities, insecure patterns and sensitive information exposure."
              />

              <FeatureCard
                title="Performance"
                description="Understand algorithmic complexity, repeated operations and potential performance problems."
              />

              <FeatureCard
                title="Maintainability"
                description="Find code smells, duplication, readability problems and refactoring opportunities."
              />
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-zinc-500">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              From code to actionable feedback.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <StepCard
              number="01"
              title="Paste your code"
              description="Choose your programming language and submit your code."
            />

            <StepCard
              number="02"
              title="AI analyzes it"
              description="CodeLens AI examines security, performance, maintainability and best practices."
            />

            <StepCard
              number="03"
              title="Improve your code"
              description="Receive prioritized issues, explanations and suggested fixes."
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto max-w-7xl text-sm text-zinc-500">
          © 2026 CodeLens AI. Built as a developer portfolio project.
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="rounded-xl border border-zinc-800 p-6">
      <div className="text-sm font-semibold text-zinc-500">
        {number}
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  )
}

export default App