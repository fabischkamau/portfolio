import { CardContent, CardFooter, CardHeader, Card } from '../ui/card'

const CardDemo = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Glassmorphism Cards for Dark Backgrounds
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card variant="default">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">John Doe</h3>
                  <p className="text-gray-300 text-sm">Software Developer</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-sm mb-4">
                Passionate about creating beautiful user interfaces and
                experiences. Love working with React and modern web
                technologies.
              </p>
              <div className="flex space-x-2">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                  React
                </span>
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                  Node.js
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                  TypeScript
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between items-center">
                <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  View Profile
                </button>
                <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg text-sm transition-colors">
                  Connect
                </button>
              </div>
            </CardFooter>
          </Card>

          {/* Stats Card */}
          <Card variant="default">
            <CardHeader>
              <h3 className="text-white font-semibold text-lg">
                Project Analytics
              </h3>
              <p className="text-gray-400 text-sm">Last 30 days</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Views</span>
                  <span className="text-white font-bold">12,453</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-3/4"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Conversions</span>
                  <span className="text-green-400 font-bold">+23%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Revenue</span>
                  <span className="text-white font-bold">$8,432</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <button className="w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white py-2 rounded-lg transition-all">
                View Details
              </button>
            </CardFooter>
          </Card>

          {/* Notification Card */}
          <Card variant="solid">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Notifications</h3>
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs">
                  3 new
                </span>
              </div>
            </CardHeader>
            <CardContent className="py-2">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">
                      New comment on your post
                    </p>
                    <p className="text-gray-400 text-xs">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">
                      Project deployment successful
                    </p>
                    <p className="text-gray-400 text-xs">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">
                      System maintenance scheduled
                    </p>
                    <p className="text-gray-400 text-xs">3 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between">
                <button className="text-gray-400 hover:text-white text-sm transition-colors">
                  Mark all as read
                </button>
                <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  See all
                </button>
              </div>
            </CardFooter>
          </Card>

          {/* Feature Card */}
          <Card variant="default" className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl">Premium Plan</h3>
                <p className="text-gray-300 text-sm">
                  Everything you need to grow
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-200 text-sm">
                  <svg
                    className="w-4 h-4 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited projects
                </li>
                <li className="flex items-center text-gray-200 text-sm">
                  <svg
                    className="w-4 h-4 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-200 text-sm">
                  <svg
                    className="w-4 h-4 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Priority support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all">
                Get Started
              </button>
            </CardFooter>
          </Card>

          {/* Simple Content Card */}
          <Card variant="default" className="md:col-span-2">
            <CardHeader>
              <h3 className="text-white font-semibold text-lg">
                Usage Example
              </h3>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="text-blue-300">
                  &lt;Card variant="default"&gt;
                </div>
                <div className="ml-4">
                  <div className="text-green-300">&lt;CardHeader&gt;</div>
                  <div className="ml-4 text-gray-300">Your header content</div>
                  <div className="text-green-300">&lt;/CardHeader&gt;</div>
                  <div className="text-yellow-300">&lt;CardContent&gt;</div>
                  <div className="ml-4 text-gray-300">Your main content</div>
                  <div className="text-yellow-300">&lt;/CardContent&gt;</div>
                  <div className="text-purple-300">&lt;CardFooter&gt;</div>
                  <div className="ml-4 text-gray-300">Your footer content</div>
                  <div className="text-purple-300">&lt;/CardFooter&gt;</div>
                </div>
                <div className="text-blue-300">&lt;/Card&gt;</div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-gray-400 text-sm">
                Variants: 'default', 'subtle', 'medium', 'strong'
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CardDemo
