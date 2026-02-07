import { Globe, Play, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'

function CenteredClean() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 font-sans min-h-[420px] rounded-3xl shadow-xl border border-gray-200">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-cyan-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-400 blur-3xl"></div>
      </div>

      <div className="flex h-full relative">
        {/* Left Content Panel */}
        <div className="flex-1 py-16 px-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
              Future Ready
            </span>
          </div>

          <h1 className="text-gray-900 text-4xl font-bold mb-4 leading-tight">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Digital Future
            </span>
          </h1>

          <p className="text-gray-600 text-base mb-8 max-w-md leading-relaxed">
            Cutting-edge solutions engineered for modern enterprises that demand
            unprecedented speed, scalability, and reliability.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none rounded-2xl py-3.5 px-8 text-sm font-semibold cursor-pointer hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <Play className="w-4 h-4" fill="white" />
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button className="group bg-white text-gray-700 border-2 border-gray-200 rounded-2xl py-3.5 px-8 text-sm font-semibold cursor-pointer hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  <Play className="w-3 h-3 text-gray-700" />
                </div>
                <span>Watch Demo</span>
              </div>
            </button>
          </div>


        </div>

        {/* Right Visual Panel */}
        <div className="flex-1 relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center justify-center overflow-hidden">
          {/* Animated gradient orb */}
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-pulse"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 opacity-30 animate-pulse delay-75"></div>
            <div className="absolute inset-16 rounded-full bg-gradient-to-r from-cyan-200 to-blue-300 opacity-40 animate-pulse delay-150"></div>

            {/* Globe with 3D effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <Globe className="w-20 h-20 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-8 left-8 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg animate-float"></div>
            <div className="absolute bottom-12 right-10 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg animate-float-delay"></div>
          </div>

          {/* Decorative lines */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default CenteredClean