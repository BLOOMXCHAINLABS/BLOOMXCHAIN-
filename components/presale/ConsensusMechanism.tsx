export default function ConsensusMechanism() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Proof of Economy
            </span>
            <span className="block text-3xl sm:text-4xl mt-2">Consensus Mechanism</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Revolutionary consensus that integrates social and economic factors for enhanced blockchain validation
          </p>
        </div>

        {/* POE Overview */}
        <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl p-8 md:p-12 border border-orange-400/30 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is Proof of Economy?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Proof of Economy (POE) is BloomXChain's groundbreaking consensus mechanism that revolutionizes how blockchain networks validate transactions. Unlike traditional models that rely solely on computational power or stake amounts, POE integrates social interactions and economic incentives to create a more dynamic and efficient validation process.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This innovative approach fosters trust and collaboration among network participants while maintaining the highest levels of security and decentralization.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl p-8 border border-yellow-400/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">Social</div>
                    <div className="text-gray-300 text-sm">Interactions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Economic</div>
                    <div className="text-gray-300 text-sm">Incentives</div>
                  </div>
                  <div className="text-center col-span-2">
                    <div className="text-2xl font-bold text-white mb-2">+</div>
                    <div className="text-lg font-semibold text-cyan-400">Enhanced Validation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features of POE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
              <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Social Validation</h3>
              <p className="text-gray-300 text-sm">
                Incorporates community reputation and social interactions to enhance transaction validation accuracy and network security.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-400/30">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Economic Incentives</h3>
              <p className="text-gray-300 text-sm">
                Dynamic reward system that incentivizes positive network behavior while penalizing malicious activities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
              <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-300 text-sm">
                Multi-layered validation process that significantly reduces the risk of attacks and fraudulent transactions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 border border-orange-400/30">
              <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Energy Efficient</h3>
              <p className="text-gray-300 text-sm">
                Reduces energy consumption compared to traditional Proof of Work systems while maintaining high performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
              <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
              <p className="text-gray-300 text-sm">
                Empowers community members to actively participate in network governance and consensus decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-2xl p-8 border border-cyan-400/30">
              <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalable</h3>
              <p className="text-gray-300 text-sm">
                Designed to handle increasing network demands while maintaining optimal performance and security.
              </p>
            </div>
          </div>
        </div>

        {/* How POE Works */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How POE Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-white mb-4">Social Assessment</h3>
              <p className="text-gray-300 text-sm">
                Network participants build reputation through positive interactions and contribute to community trust scores.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-white mb-4">Economic Evaluation</h3>
              <p className="text-gray-300 text-sm">
                Economic factors including stake amount, transaction history, and network contribution are analyzed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-white mb-4">Consensus Formation</h3>
              <p className="text-gray-300 text-sm">
                Combined social and economic scores determine validator selection and transaction validation rights.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Comparison */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">POE vs Traditional Consensus</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-left text-white font-semibold">Feature</th>
                  <th className="p-6 text-center text-orange-400 font-semibold">Proof of Economy</th>
                  <th className="p-6 text-center text-gray-400 font-semibold">Proof of Work</th>
                  <th className="p-6 text-center text-gray-400 font-semibold">Proof of Stake</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-gray-300">Energy Efficiency</td>
                  <td className="p-6 text-center text-green-400">High</td>
                  <td className="p-6 text-center text-red-400">Low</td>
                  <td className="p-6 text-center text-yellow-400">Medium</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-gray-300">Decentralization</td>
                  <td className="p-6 text-center text-green-400">High</td>
                  <td className="p-6 text-center text-yellow-400">Medium</td>
                  <td className="p-6 text-center text-yellow-400">Medium</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-gray-300">Security</td>
                  <td className="p-6 text-center text-green-400">Enhanced</td>
                  <td className="p-6 text-center text-green-400">High</td>
                  <td className="p-6 text-center text-green-400">High</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-gray-300">Scalability</td>
                  <td className="p-6 text-center text-green-400">High</td>
                  <td className="p-6 text-center text-red-400">Low</td>
                  <td className="p-6 text-center text-yellow-400">Medium</td>
                </tr>
                <tr>
                  <td className="p-6 text-gray-300">Community Engagement</td>
                  <td className="p-6 text-center text-green-400">Very High</td>
                  <td className="p-6 text-center text-red-400">Low</td>
                  <td className="p-6 text-center text-yellow-400">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 