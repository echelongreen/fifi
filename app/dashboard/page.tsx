export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90">
              New Project
            </button>
            <div className="relative">
              <button className="flex items-center text-sm focus:outline-none">
                <span className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs font-medium">JD</span>
                </span>
                <span className="ml-2 text-gray-700">John Doe</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Recent Projects */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Recent Projects</h3>
                <div className="mt-4 space-y-4">
                  {[1, 2, 3].map((project) => (
                    <div key={project} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-md font-medium">Modern House Design {project}</h4>
                          <p className="text-sm text-gray-500">Last edited 2 days ago</p>
                        </div>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                    View all projects →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    { name: 'Create Floor Plan', icon: '📐' },
                    { name: 'Design Interior', icon: '🛋️' },
                    { name: 'Exterior Rendering', icon: '🏠' },
                    { name: 'Material Selection', icon: '🎨' },
                  ].map((action) => (
                    <button
                      key={action.name}
                      className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <span className="text-2xl mb-2">{action.icon}</span>
                      <span className="text-sm font-medium text-gray-900">{action.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Usage Stats */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Usage Statistics</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Storage</span>
                      <span className="text-sm font-medium text-gray-900">65% used</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">AI Credits</span>
                      <span className="text-sm font-medium text-gray-900">120/200 remaining</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Projects</span>
                      <span className="text-sm font-medium text-gray-900">3/10 active</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                    Upgrade plan →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 