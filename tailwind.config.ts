
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1EAEDB',
					50: '#F0F9FF',
					100: '#E0F2FE',
					200: '#BAE6FD',
					300: '#7DD3FC',
					400: '#38BDF8',
					500: '#1EAEDB',
					600: '#0891B2',
					700: '#0E7490',
					800: '#155E75',
					900: '#164E63',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F97316',
					50: '#FFF7ED',
					100: '#FFEDD5',
					200: '#FED7AA',
					300: '#FDBA74',
					400: '#FB923C',
					500: '#F97316',
					600: '#EA580C',
					700: '#C2410C',
					800: '#9A3412',
					900: '#7C2D12',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#8B5CF6',
					50: '#F5F3FF',
					100: '#EDE9FE',
					200: '#DDD6FE',
					300: '#C4B5FD',
					400: '#A78BFA',
					500: '#8B5CF6',
					600: '#7C3AED',
					700: '#6D28D9',
					800: '#5B21B6',
					900: '#4C1D95',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				navbar: {
					bg: 'rgba(255, 255, 255, 0.95)',
					scrolled: 'rgba(255, 255, 255, 0.98)',
					border: '#E2E8F0'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(20px)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'nav-indicator': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'nav-indicator': 'nav-indicator 0.3s ease-out forwards',
				'shimmer': 'shimmer 2s linear infinite',
				'float': 'float 3s ease-in-out infinite'
			},
			boxShadow: {
				'navbar': '0 2px 8px rgba(0, 0, 0, 0.05)',
				'navbar-scrolled': '0 4px 12px rgba(0, 0, 0, 0.08)',
				'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
			},
			backdropBlur: {
				'xs': '2px',
				'sm': '4px',
				'md': '8px',
				'lg': '12px',
				'xl': '16px',
				'2xl': '24px',
				'3xl': '40px'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
