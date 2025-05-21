
import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set initial value
    handleResize()
    
    // Use event listener for better performance
    window.addEventListener("resize", handleResize)
    
    // Modern way to listen for media query changes
    try {
      mql.addEventListener("change", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
        mql.removeEventListener("change", handleResize)
      }
    } catch (e) {
      // Fallback for older browsers
      mql.addListener(handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
        mql.removeListener(handleResize)
      }
    }
  }, [])

  return isMobile
}
