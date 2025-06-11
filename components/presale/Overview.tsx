import LogoIcon from '../LogoIcon';

export default function Overview() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Project{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Overview
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Comprehensive overview of BloomXChain's revolutionary blockchain ecosystem
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 border border-orange-400/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Lightning Speed</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our multi-layered architecture enables transaction processing at unprecedented speeds, 
                handling thousands of transactions per second with minimal latency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Enhanced Security</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Advanced cryptographic protocols and our unique POE consensus mechanism ensure 
                maximum security for all transactions and user data.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-400/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Global Reach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Borderless blockchain experience with seamless integration across different 
                regions and regulatory environments worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">User-Friendly</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Intuitive interface designed for both novice and experienced users, 
                making blockchain technology accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100,000+</div>
              <div className="text-white font-semibold mb-1">TPS</div>
              <div className="text-gray-400 text-sm">Transactions Per Second</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">&lt;1s</div>
              <div className="text-white font-semibold mb-1">Finality</div>
              <div className="text-gray-400 text-sm">Transaction Confirmation</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$0.001</div>
              <div className="text-white font-semibold mb-1">Gas Fee</div>
              <div className="text-gray-400 text-sm">Average Transaction Cost</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-white font-semibold mb-1">Uptime</div>
              <div className="text-gray-400 text-sm">Network Availability</div>
            </div>
          </div>
        </div>

        {/* Ecosystem Components */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Ecosystem Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl p-6 border border-orange-400/20 text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <LogoIcon size={32} smooth={true} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">BMXC Token</h3>
              <p className="text-gray-300 text-sm">
                Native utility token powering the entire BloomXChain ecosystem with governance and staking capabilities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-400/20 text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DApp Platform</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive platform for building and deploying decentralized applications with ease.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-orange-500/10 rounded-2xl p-6 border border-cyan-400/20 text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Hub</h3>
              <p className="text-gray-300 text-sm">
                Vibrant community space for collaboration, governance, and social interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 