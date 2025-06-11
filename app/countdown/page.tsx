import CountdownTimer from '@/components/CountdownTimer'
import LogoIcon from '@/components/LogoIcon'

export default function CountdownPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-bloom-darker via-bloom-dark to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-bloom-orange rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-bloom-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-bloom-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-bloom-yellow rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <LogoIcon size={100} className="bloom-logo-glow mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bloom-gradient">BloomXChain</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300">
            Revolutionary Blockchain Technology
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Announcement Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-gray-700 bloom-glow animate-float">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-bloom-orange via-bloom-yellow to-bloom-cyan rounded-full px-6 py-2 text-white font-semibold text-sm md:text-base mb-6">
                📢 OFFICIAL ANNOUNCEMENT
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                BloomXChain Token Presale Delay
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Dear BloomXChain Community,
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                We regret to inform you that the BloomXChain token presale, originally scheduled to go live at 7:00 PM, 
                has been delayed due to ongoing integration processes for USDT and other chain buying options. We are 
                working diligently to ensure a seamless experience and appreciate your patience.
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                We will provide an updated schedule for the presale launch as soon as possible. Stay tuned to our 
                official channels for the latest updates.
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Thank you for your understanding and continued support.
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Best regards,<br />
                <span className="font-semibold bloom-gradient">The BloomXChain Team</span>
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
            <CountdownTimer />
          </div>

          {/* Navigation to Presale */}
          <div className="text-center mt-8">
            <a 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 hover:from-orange-600 hover:via-yellow-600 hover:to-orange-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Visit BloomXChain Presale
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 