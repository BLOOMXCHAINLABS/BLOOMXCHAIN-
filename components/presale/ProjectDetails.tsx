import LogoIcon from '../LogoIcon';

export default function ProjectDetails() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Project{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Details
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Comprehensive information about BloomXChain's technical architecture and development roadmap
          </p>
        </div>

        {/* Token Information */}
        <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl p-8 md:p-12 border border-orange-400/30 mb-20">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <LogoIcon size={80} smooth={true} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">BMXC Token Details</h2>
            <p className="text-gray-300 text-lg">The native utility token of the BloomXChain ecosystem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <h3 className="text-white font-semibold mb-2">Token Symbol</h3>
              <div className="text-2xl font-bold text-orange-400">BMXC</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <h3 className="text-white font-semibold mb-2">Total Supply</h3>
              <div className="text-2xl font-bold text-yellow-400">1B</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <h3 className="text-white font-semibold mb-2">Blockchain</h3>
              <div className="text-2xl font-bold text-blue-400">Solana</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <h3 className="text-white font-semibold mb-2">Standard</h3>
              <div className="text-2xl font-bold text-cyan-400">SPL</div>
            </div>
          </div>
        </div>

        {/* Token Distribution */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Token Distribution</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-6 border border-orange-400/30">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Public Sale</h3>
                    <p className="text-gray-400 text-sm">Available for presale participants</p>
                  </div>
                  <div className="text-2xl font-bold text-orange-400">40%</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Development</h3>
                    <p className="text-gray-400 text-sm">Platform development & improvements</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">20%</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-400/30">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Team & Advisors</h3>
                    <p className="text-gray-400 text-sm">Core team and strategic advisors</p>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">15%</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-400/30">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Marketing</h3>
                    <p className="text-gray-400 text-sm">Marketing & partnerships</p>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">10%</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-2xl p-6 border border-orange-400/30">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Reserve</h3>
                    <p className="text-gray-400 text-sm">Ecosystem development reserve</p>
                  </div>
                  <div className="text-2xl font-bold text-orange-400">15%</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Distribution Chart</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 flex-1">Public Sale (40%)</span>
                  <span className="text-white font-semibold">400M BMXC</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 flex-1">Development (20%)</span>
                  <span className="text-white font-semibold">200M BMXC</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 flex-1">Team & Advisors (15%)</span>
                  <span className="text-white font-semibold">150M BMXC</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 flex-1">Marketing (10%)</span>
                  <span className="text-white font-semibold">100M BMXC</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-300 rounded-full mr-3"></div>
                  <span className="text-gray-300 flex-1">Reserve (15%)</span>
                  <span className="text-white font-semibold">150M BMXC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Roadmap</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-yellow-400 via-blue-400 to-cyan-400"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-orange-400 rounded-full border-4 border-gray-900"></div>
                <div className="ml-16 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-6 border border-orange-400/30 flex-1">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Q1 2024</h3>
                    <span className="ml-4 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Completed</span>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Foundation establishment and team formation</li>
                    <li>• Initial concept development and whitepaper</li>
                    <li>• POE consensus mechanism design</li>
                    <li>• Community building and partnerships</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
                <div className="ml-16 bg-gradient-to-br from-yellow-500/20 to-blue-500/20 rounded-2xl p-6 border border-yellow-400/30 flex-1">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Q2 2024</h3>
                    <span className="ml-4 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">In Progress</span>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Testnet launch and validation</li>
                    <li>• Smart contract development</li>
                    <li>• Security audits and testing</li>
                    <li>• Token presale launch</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900"></div>
                <div className="ml-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30 flex-1">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Q3 2024</h3>
                    <span className="ml-4 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Upcoming</span>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Mainnet launch</li>
                    <li>• DEX listings and trading</li>
                    <li>• DApp platform beta release</li>
                    <li>• Strategic partnerships expansion</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                <div className="ml-16 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-2xl p-6 border border-cyan-400/30 flex-1">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Q4 2024</h3>
                    <span className="ml-4 px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm">Planned</span>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Full DApp ecosystem launch</li>
                    <li>• Mobile app release</li>
                    <li>• Cross-chain integration</li>
                    <li>• Global expansion and adoption</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Blockchain Features</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">Consensus Algorithm</span>
                  <span className="text-orange-400 font-semibold">Proof of Economy (POE)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">Transaction Speed</span>
                  <span className="text-yellow-400 font-semibold">100,000+ TPS</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">Block Time</span>
                  <span className="text-blue-400 font-semibold">0.4 seconds</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">Finality</span>
                  <span className="text-cyan-400 font-semibold">Instant</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Network Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">Network Type</span>
                  <span className="text-orange-400 font-semibold">Layer 1 Blockchain</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">Virtual Machine</span>
                  <span className="text-yellow-400 font-semibold">Compatible with SVM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">Smart Contracts</span>
                  <span className="text-blue-400 font-semibold">Rust & Solidity</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">Governance</span>
                  <span className="text-cyan-400 font-semibold">DAO-based</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 