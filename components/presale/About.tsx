import LogoIcon from '../LogoIcon';

export default function About() {
  return (
    <div className="py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              <LogoIcon size={160} smooth={true} />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              BloomXChain Labs
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Pioneering the future of blockchain technology since 2023
          </p>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                <span className="text-orange-400 font-semibold">Bloomxchain Labs</span>, originally established as a foundation in 2023, has evolved into a pioneering USA-based blockchain technology company headquartered in the United States. Renowned for its innovative approach, Bloomxchain Labs is reshaping the blockchain landscape with its unique Consensus mechanism of{' '}
                <span className="text-yellow-400 font-semibold">Proof of Economy (POE)</span>.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                This cutting-edge mechanism diverges from traditional models by integrating social and economic factors to validate transactions, fostering trust and collaboration among network participants through a blend of social interactions and economic incentives.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                The company's native token, <span className="text-blue-400 font-semibold">BMXC</span>, serves as the cornerstone of its ecosystem, enabling secure, efficient, and scalable cryptocurrency transactions. Since its inception, Bloomxchain Labs has maintained a strong global presence, breaking down geographical barriers to create a seamless blockchain experience for users worldwide.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                With a focus on usability and reliability, the platform offers a user-friendly interface, making it accessible to both novice and experienced users. Bloomxchain Labs is poised to launch its own blockchain, designed to deliver unparalleled speed, security, and scalability through a{' '}
                <span className="text-cyan-400 font-semibold">multi-layered architecture</span>.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                This innovative framework, combined with the <span className="text-orange-400 font-semibold">(POE) Consensus mechanism</span>, positions Bloomxchain Labs at the forefront of blockchain technology, aiming to revolutionize digital transactions and create a dynamic socio-economic ecosystem for traders and innovators. With strategic partnerships and a commitment to driving blockchain adoption, Bloomxchain Labs is set to lead the industry into a decentralized future.
              </p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Our Key Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-6 border border-orange-400/30 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">2023</div>
              <div className="text-white font-semibold mb-2">Founded</div>
              <div className="text-gray-300 text-sm">Established as blockchain foundation</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-blue-500/20 rounded-2xl p-6 border border-yellow-400/30 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">POE</div>
              <div className="text-white font-semibold mb-2">Innovation</div>
              <div className="text-gray-300 text-sm">Proof of Economy consensus</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">USA</div>
              <div className="text-white font-semibold mb-2">Headquartered</div>
              <div className="text-gray-300 text-sm">Based in United States</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-2xl p-6 border border-cyan-400/30 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Global</div>
              <div className="text-white font-semibold mb-2">Presence</div>
              <div className="text-gray-300 text-sm">Worldwide accessibility</div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl p-8 border border-orange-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-orange-400 rounded-full mr-3"></div>
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To revolutionize the blockchain industry by creating a decentralized ecosystem that seamlessly integrates social and economic interactions, making blockchain technology accessible and beneficial for everyone worldwide.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-400 rounded-full mr-3"></div>
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To develop and deploy cutting-edge blockchain solutions that prioritize speed, security, and scalability while fostering trust and collaboration through our innovative Proof of Economy consensus mechanism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 