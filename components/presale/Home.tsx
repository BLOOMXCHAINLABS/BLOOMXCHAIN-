import LogoIcon from '../LogoIcon';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-24 sm:py-12 lg:py-20">
          <div className="text-center">
            {/* Logo Animation */}
            <div className="flex justify-center">
              <div className="flex items-center justify-center">
                <LogoIcon size={180} smooth={true} />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block">Welcome to</span>
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                BloomXChain
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">
                Token Presale
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
              Revolutionary blockchain technology powered by our innovative{' '}
              <span className="text-orange-400 font-semibold">Proof of Economy (POE)</span>{' '}
              consensus mechanism. Join the future of decentralized finance with BMXC tokens.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Buy BMXC Now
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-orange-400">$2.5M+</div>
                <div className="text-gray-300 mt-2">Total Raised</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-blue-400">10K+</div>
                <div className="text-gray-300 mt-2">Token Holders</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">150+</div>
                <div className="text-gray-300 mt-2">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Choose BloomXChain?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Experience the next generation of blockchain technology with unprecedented features and benefits.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-5 w-5 bg-orange-400 rounded-full"></div>
                  Proof of Economy (POE)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Revolutionary consensus mechanism that integrates social and economic factors for enhanced security and efficiency.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-5 w-5 bg-blue-400 rounded-full"></div>
                  Lightning Fast Transactions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Multi-layered architecture delivering unparalleled speed and scalability for all your transactions.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-5 w-5 bg-cyan-400 rounded-full"></div>
                  Global Accessibility
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Breaking down geographical barriers to create a seamless blockchain experience worldwide.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Presale Info */}
      <div className="relative bg-white/5 backdrop-blur-lg border-y border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              BMXC Token Presale
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Secure your BMXC tokens at presale prices before public launch
            </p>
          </div>
          
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 border border-orange-400/30">
              <h3 className="text-xl font-semibold text-white mb-4">Current Price</h3>
              <div className="text-4xl font-bold text-orange-400">$0.16</div>
              <div className="text-sm text-gray-300 mt-2">per BMXC token (Days 1-7)</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
              <h3 className="text-xl font-semibold text-white mb-4">Next Phase</h3>
              <div className="text-4xl font-bold text-blue-400">$0.25</div>
              <div className="text-sm text-gray-300 mt-2">Days 8-48: $0.34 (Days 49-70)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 