'use client'

import { useState, useEffect, createContext, useContext } from 'react'

const IntroContext = createContext<{
  isIntroComplete: boolean
}>({
  isIntroComplete: false
})

export function useIntro() {
  return useContext(IntroContext)
}

export function IntroOverlay({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isIntroComplete, setIsIntroComplete] = useState(false)

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true)
    }, 3000) // Start fading at 3 seconds

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      setIsIntroComplete(true)
    }, 3500) // Complete hide at 3.5 seconds

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <IntroContext.Provider value={{ isIntroComplete }}>
      {isVisible && (
        <div className={`fixed inset-0 z-50 flex flex-col justify-center bg-black transition-opacity duration-500 ${
          isFadingOut ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="space-y-16 text-center">
            <div className="animate-slide-from-top">
              <h1 className="text-6xl md:text-8xl font-serif text-primary tracking-wider">
                ALI ZOKAEI
              </h1>
            </div>
            <div className="animate-slide-from-bottom">
              <p className="text-2xl md:text-3xl font-light text-white tracking-widest uppercase">
                by
              </p>
            </div>
          </div>
          
          <style jsx>{`
            @keyframes slideFromTop {
              from {
                opacity: 0;
                transform: translateY(-200px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes slideFromBottom {
              from {
                opacity: 0;
                transform: translateY(200px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .animate-slide-from-top {
              animation: slideFromTop 1.2s ease-out forwards;
              opacity: 0;
            }
            
            .animate-slide-from-bottom {
              animation: slideFromBottom 1.2s ease-out 0.5s forwards;
              opacity: 0;
            }
          `}</style>
        </div>
      )}
      <div className={`${isIntroComplete ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </IntroContext.Provider>
  )
}
