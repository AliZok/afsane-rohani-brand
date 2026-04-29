'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'slide-up'
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export function ScrollAnimation({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${delay}ms`,
    }

    const hiddenStyles = {
      opacity: 0,
      transform: getTransform(animation),
    }

    const visibleStyles = {
      opacity: 1,
      transform: 'translate(0, 0) scale(1)',
    }

    return {
      ...baseStyles,
      ...(isVisible ? visibleStyles : hiddenStyles),
    }
  }

  const getTransform = (anim: string) => {
    switch (anim) {
      case 'fade-up':
        return 'translateY(30px)'
      case 'fade-down':
        return 'translateY(-30px)'
      case 'fade-left':
        return 'translateX(30px)'
      case 'fade-right':
        return 'translateX(-30px)'
      case 'zoom-in':
        return 'scale(0.9)'
      case 'slide-up':
        return 'translateY(50px)'
      default:
        return 'translateY(30px)'
    }
  }

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  )
}
