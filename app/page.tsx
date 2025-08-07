"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function DogecatLanding() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background with Blur */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-sm scale-110"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-FjLQnWoWwM36oyYRxF9xsiMvDXZzEC.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header with Dark Frame */}
      <div className="relative z-10 p-2 bg-gray-900/80 backdrop-blur-sm">
        <div className="bg-gray-800/90 rounded-lg p-1">
          <header className="flex items-center justify-between px-4 py-2">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="DOGECAT Logo"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <span className="ml-2 text-xl md:text-2xl font-bold text-orange-500 drop-shadow-lg">
                DOGECAT
              </span>
            </div>

            {/* Desktop Navigation - Grouped in rounded container */}
            <nav className="hidden md:flex items-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                <button className="px-6 py-2 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  ABOUT
                </button>
                <button className="px-6 py-2 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  HOW TO BUY
                </button>
                <button className="px-6 py-2 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  TOKENOMICS
                </button>
              </div>
            </nav>

            {/* Desktop Buy Now Button - Dark container */}
            <div className="hidden md:block bg-gray-900/95 backdrop-blur-sm rounded-full px-1 py-1">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium">
                BUY NOW
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold text-orange-500 drop-shadow-2xl mb-4 transform -rotate-2">
            DOGECAT
          </h1>
          
          {/* Cat Character */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo2.png"
              alt="DOGECAT Character"
              width={300}
              height={300}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-2xl mb-8"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium text-lg">
              BUY NOW
            </Button>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <button className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors">
                <img src="/icons/telegram.svg" alt="Telegram" className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center transition-colors">
                <img src="/icons/dextools.svg" alt="DexTools" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="text-white drop-shadow-2xl">ABOUT</span><br />
              <span className="text-orange-500 drop-shadow-2xl">DOGECAT</span>
            </h2>
            
            <p className="text-white text-lg md:text-xl font-medium mb-8 max-w-lg leading-relaxed drop-shadow-lg">
              DOGECAT IS THE ULTIMATE FUSION OF MEME CULTURE, 
              COMBINING THE LOYALTY OF DOGE WITH THE INDEPENDENCE 
              OF CATS. SHE HAD A TOUGH LIFE IN THE CRYPTO STREETS 
              BEFORE, BUT NOW SHE HAS A CHANCE FOR A BETTER, 
              HAPPIER FUTURE IN THE MOON.
            </p>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg">
              BUY NOW
            </Button>
          </div>

          {/* Right Side - Character Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/img1.png"
              alt="Glamorous DOGECAT with cocktail"
              width={500}
              height={500}
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-16 min-h-screen flex items-center">
          {/* Comic Book Style Container */}
          <div className="w-full relative">
            {/* Orange Background with Speed Lines */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl overflow-hidden">
              {/* Speed Lines Effect */}
              <div className="absolute inset-0">
                {/* Radiating lines from center */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-black/20 origin-center"
                    style={{
                      width: '2px',
                      height: '100%',
                      left: '50%',
                      top: '0',
                      transform: `rotate(${i * 18}deg) translateX(-50%)`,
                      transformOrigin: '50% 50%'
                    }}
                  />
                ))}
                {/* Dots pattern */}
                <div className="absolute inset-0 opacity-30">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-black rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 lg:p-16">
              {/* Left Side - Business Cat Image */}
              <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-4 border-black">
                  <Image
                    src="/img2.png"
                    alt="Business DOGECAT with money"
                    width={400}
                    height={400}
                    className="w-80 h-80 lg:w-96 lg:h-96 drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Right Side - Instructions */}
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl p-8 border-4 border-black shadow-2xl">
                  <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                    <span className="text-orange-500">HOW TO</span>{' '}
                    <span className="text-black">BUY</span>
                  </h2>

                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div>
                      <div className="bg-black text-white px-4 py-2 rounded-lg inline-block mb-2">
                        <span className="text-orange-500 font-bold text-xl">1</span>{' '}
                        <span className="font-bold">DOWNLOAD PHANTOM WALLET</span>
                      </div>
                      <p className="text-gray-800 text-sm lg:text-base">
                        DOWNLOAD AND INSTALL PHANTOM WALLET FROM THE OFFICIAL WEBSITE. 
                        CREATE A NEW WALLET OR IMPORT AN EXISTING ONE TO GET STARTED.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div>
                      <div className="bg-black text-white px-4 py-2 rounded-lg inline-block mb-2">
                        <span className="text-orange-500 font-bold text-xl">2</span>{' '}
                        <span className="font-bold">GET SOLANA (SOL)</span>
                      </div>
                      <p className="text-gray-800 text-sm lg:text-base">
                        BUY SOLANA (SOL) FROM ANY MAJOR EXCHANGE LIKE BINANCE, 
                        COINBASE, OR DIRECTLY THROUGH PHANTOM WALLET.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div>
                      <div className="bg-black text-white px-4 py-2 rounded-lg inline-block mb-2">
                        <span className="text-orange-500 font-bold text-xl">3</span>{' '}
                        <span className="font-bold">GO TO RAYDIUM</span>
                      </div>
                      <p className="text-gray-800 text-sm lg:text-base">
                        VISIT RAYDIUM.IO AND CONNECT YOUR PHANTOM WALLET. 
                        RAYDIUM IS THE LEADING DEX ON SOLANA FOR TOKEN SWAPS.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div>
                      <div className="bg-black text-white px-4 py-2 rounded-lg inline-block mb-2">
                        <span className="text-orange-500 font-bold text-xl">4</span>{' '}
                        <span className="font-bold">SWAP SOL FOR DOGECAT</span>
                      </div>
                      <p className="text-gray-800 text-sm lg:text-base">
                        PASTE THE DOGECAT CONTRACT ADDRESS, SET YOUR SLIPPAGE, 
                        AND SWAP YOUR SOL FOR DOGECAT TOKENS. WELCOME TO THE MOON!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          
          {/* Menu Content */}
          <div className="relative z-10 p-4">
            {/* Header with Close Button */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-1 mb-4">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="DOGECAT Logo"
                    width={60}
                    height={60}
                    className="w-12 h-12"
                  />
                  <span className="ml-2 text-xl font-bold text-orange-500 drop-shadow-lg">
                    DOGECAT
                  </span>
                </div>
                <button 
                  className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mx-4">
              <div className="flex flex-col items-center space-y-6">
                <button className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                  ABOUT
                </button>
                <button className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                  HOW TO BUY
                </button>
                <button className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                  TOKENOMICS
                </button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg mt-4">
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
