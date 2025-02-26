import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to ArchitectAI</h1>
        <p className="text-xl mb-8">
          The intelligent architectural design platform powered by AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-6 py-3 bg-white text-primary border border-primary rounded-md hover:bg-gray-50 transition-colors"
          >
            Register
          </Link>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Transform Your Architectural Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-medium mb-2">Intelligent Floor Plans</h3>
              <p className="text-gray-600">
                Create and modify floor plans with AI assistance that understands spatial relationships.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-medium mb-2">Stunning Renderings</h3>
              <p className="text-gray-600">
                Generate photorealistic 3D renderings of your designs with just a few clicks.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-medium mb-2">Smart Analytics</h3>
              <p className="text-gray-600">
                Analyze your designs for efficiency, sustainability, and compliance with building codes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 