
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [windowWidth, setWindowWidth] = React.useState<number | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const handleChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      setWindowWidth(window.innerWidth)
    }
    
    // Initial check
    handleChange()
    
    // Listen for changes
    mql.addEventListener("change", handleChange)
    window.addEventListener("resize", handleChange)
    
    return () => {
      mql.removeEventListener("change", handleChange)
      window.removeEventListener("resize", handleChange)
    }
  }, [])

  // For backward compatibility, ensure the hook can be used as a boolean
  const result = {
    isMobile: !!isMobile, 
    windowWidth,
    isTablet: windowWidth !== undefined && windowWidth >= MOBILE_BREAKPOINT && windowWidth < 1024,
    isDesktop: windowWidth !== undefined && windowWidth >= 1024
  }

  // Add the ability to be used as a boolean directly
  Object.defineProperty(result, 'valueOf', {
    value: function() { return this.isMobile; }
  })

  return result as typeof result & { valueOf(): boolean }
}
