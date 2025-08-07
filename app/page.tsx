"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function DogecatLanding() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader for 1 second
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current && !isLoading) {
      videoRef.current.play()
    }
  }, [isLoading])

  // Social media links
  const socialLinks = {
    twitter: "https://twitter.com",
    telegram: "https://telegram.org",
    dextools: "https://dextools.io",
    dexscreener: "https://dexscreener.com"
  }

  // Show loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/loader.gif"
            alt="Loading..."
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    )
  }

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
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => document.getElementById('how-to-buy')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  HOW TO BUY
                </button>
                <button 
                  onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  TOKENOMICS
                </button>
              </div>
            </nav>

            {/* Desktop Buy Now Button - Dark container */}
            <div className="hidden md:block bg-gray-900/95 backdrop-blur-sm rounded-full px-1 py-1">
              <Button 
                onClick={() => window.open('https://raydium.io', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium"
              >
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
            <Button 
              onClick={() => window.open('https://raydium.io', '_blank')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium text-lg"
            >
              BUY NOW
            </Button>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.open(socialLinks.twitter, '_blank')}
                className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} className="w-6 h-6" />
              </button>
              <button 
                onClick={() => window.open(socialLinks.telegram, '_blank')}
                className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} className="w-6 h-6" />
              </button>
              <button 
                onClick={() => window.open(socialLinks.dextools, '_blank')}
                className="w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Image src="/icons/dextools.svg" alt="DexTools" width={24} height={24} className="w-6 h-6" />
              </button>
              <button 
                onClick={() => window.open(socialLinks.dexscreener, '_blank')}
                className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Image src="/icons/dexscreener.svg" alt="DexScreener" width={24} height={24} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="relative z-10 min-h-screen">
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

            <Button 
              onClick={() => window.open('https://raydium.io', '_blank')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg"
            >
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
      <section id="how-to-buy" className="relative z-10 min-h-screen">
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

      {/* Join Us Section */}
      <section className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-16 min-h-screen flex items-center">
          <div className="w-full relative">
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16 min-h-[600px]">
              {/* Large JOIN US Text */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-orange-500 drop-shadow-2xl tracking-wider">
                  JOIN US
                </h2>
              </div>

              {/* Left Side - DOGECAT Character */}
              <div className="lg:w-1/2 flex justify-center lg:justify-start mt-20 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img3.png"
                    alt="Happy DOGECAT with colorful clips and sports jersey"
                    width={400}
                    height={400}
                    className="w-80 h-80 lg:w-96 lg:h-96 drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Right Side - Call to Action */}
              <div className="lg:w-1/2 flex flex-col items-center lg:items-end justify-center mt-8 lg:mt-0">
                {/* Action Buttons */}
                <div className="flex flex-col items-center space-y-4">
                  <Button 
                    onClick={() => window.open('https://raydium.io', '_blank')}
                    className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full font-bold text-xl shadow-2xl"
                  >
                    BUY NOW
                  </Button>
                  
                  {/* Social Media Buttons */}
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => window.open(socialLinks.twitter, '_blank')}
                      className="w-16 h-16 bg-black hover:bg-gray-800 text-white rounded-2xl flex items-center justify-center transition-colors shadow-xl"
                    >
                      <Image src="/icons/twitter.svg" alt="Twitter" width={32} height={32} className="w-8 h-8" />
                    </button>
                    <button 
                      onClick={() => window.open(socialLinks.telegram, '_blank')}
                      className="w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl flex items-center justify-center transition-colors shadow-xl"
                    >
                      <Image src="/icons/telegram.svg" alt="Telegram" width={32} height={32} className="w-8 h-8" />
                    </button>
                    <button 
                      onClick={() => window.open(socialLinks.dextools, '_blank')}
                      className="w-16 h-16 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl flex items-center justify-center transition-colors shadow-xl"
                    >
                      <Image src="/icons/dextools.svg" alt="DexTools" width={32} height={32} className="w-8 h-8" />
                    </button>
                    <button 
                      onClick={() => window.open(socialLinks.dexscreener, '_blank')}
                      className="w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center transition-colors shadow-xl"
                    >
                      <Image src="/icons/dexscreener.svg" alt="DexScreener" width={32} height={32} className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="relative z-10">
        <div className="w-full relative overflow-hidden">
          {/* Orange Gradient Background */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 relative">
            {/* Paw Print Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              {/* Large paw prints scattered across the background */}
              <div className="absolute top-8 left-16 w-16 h-16 opacity-30">
                <div className="relative">
                  {/* Main pad */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-orange-600 rounded-full"></div>
                  {/* Toes */}
                  <div className="absolute top-0 left-2 w-3 h-4 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-1 left-6 w-3 h-4 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-1 right-6 w-3 h-4 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-0 right-2 w-3 h-4 bg-orange-600 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-20 right-20 w-12 h-12 opacity-25">
                <div className="relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-5 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-0 left-1 w-2 h-3 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-1 left-4 w-2 h-3 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-1 right-4 w-2 h-3 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-0 right-1 w-2 h-3 bg-orange-600 rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-16 left-1/3 w-14 h-14 opacity-20">
                <div className="relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-7 h-5 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-0 left-2 w-2.5 h-3.5 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-1 left-5 w-2.5 h-3.5 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-1 right-5 w-2.5 h-3.5 bg-orange-600 rounded-full"></div>
                  <div className="absolute top-0 right-2 w-2.5 h-3.5 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12">
              {/* Left Side - Navigation Links */}
              <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
                {/* Navigation Text */}
                <div className="text-center lg:text-left mb-6">
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-4xl lg:text-6xl font-black text-white mb-2 hover:text-gray-200 transition-colors cursor-pointer"
                    style={{
                      textShadow: '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000'
                    }}
                  >
                    ABOUT
                  </button>
                  <button
                    onClick={() => document.getElementById('how-to-buy')?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-4xl lg:text-6xl font-black text-white mb-2 hover:text-gray-200 transition-colors cursor-pointer"
                    style={{
                      textShadow: '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000'
                    }}
                  >
                    HOW TO BUY
                  </button>
                  <h3 className="text-4xl lg:text-6xl font-black text-white" style={{
                    textShadow: '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000'
                  }}>
                    TOKENOMICS
                  </h3>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => window.open(socialLinks.twitter, '_blank')}
                    className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => window.open(socialLinks.telegram, '_blank')}
                    className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => window.open(socialLinks.dextools, '_blank')}
                    className="w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Image src="/icons/dextools.svg" alt="DexTools" width={24} height={24} className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => window.open(socialLinks.dexscreener, '_blank')}
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Image src="/icons/dexscreener.svg" alt="DexScreener" width={24} height={24} className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Right Side - Firefighter DOGECAT */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/img4.png"
                  alt="DOGECAT Firefighter with helmet and uniform"
                  width={400}
                  height={400}
                  className="w-64 h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Black Bottom Bar */}
          <div className="bg-black h-4 w-full"></div>
        </div>
      </footer>

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
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    document.getElementById('how-to-buy')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
                >
                  HOW TO BUY
                </button>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
                >
                  TOKENOMICS
                </button>
                <Button 
                  onClick={() => window.open('https://raydium.io', '_blank')}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg mt-4"
                >
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
