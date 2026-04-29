'use client'

import { useEffect } from 'react'
import AOS from 'aos'

export function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
    })
  }, [])

  return null
}
