import Link from 'next/link'

export default function NewProjectPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/dashboard" className="text-primary hover:text-primary/80 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">Create New Project</h1>
            <p className="mt-1 text-sm text-gray-500">
              Start designing your new architectural project
            </p>
          </div>
          
          <div className="px-4 py-5 sm:p-6">
            <form className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="My Dream House"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="interior">Interior Design</option>
                    <option value="landscape">Landscape</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Describe your project and its requirements..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Project Template</label>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {[
                      { id: 'blank', name: 'Blank Project', description: 'Start from scratch' },
                      { id: 'house', name: 'House Template', description: 'Basic house layout' },
                      { id: 'apartment', name: 'Apartment Template', description: 'Apartment floor plan' },
                    ].map((template) => (
                      <div
                        key={template.id}
                        className="relative border rounded-lg p-4 flex flex-col cursor-pointer hover:border-primary"
                      >
                        <div className="flex items-center h-12 w-12 rounded-md bg-primary/10 mb-4">
                          <span className="mx-auto text-xl">🏠</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-900">{template.name}</h3>
                          <p className="mt-1 text-xs text-gray-500">{template.description}</p>
                        </div>
                        <div className="mt-4">
                          <input
                            type="radio"
                            id={`template-${template.id}`}
                            name="projectTemplate"
                            value={template.id}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Privacy Settings</label>
                  <div className="mt-2 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="private"
                          name="privacy"
                          type="radio"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="private" className="font-medium text-gray-700">
                          Private
                        </label>
                        <p className="text-gray-500">Only you can access this project</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="shared"
                          name="privacy"
                          type="radio"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="shared" className="font-medium text-gray-700">
                          Shared
                        </label>
                        <p className="text-gray-500">You can invite specific people to collaborate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <Link
                  href="/dashboard"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 