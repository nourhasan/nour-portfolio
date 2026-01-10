import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useTheme(): [Theme, (t: Theme) => void] {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) || (prefersDark ? 'dark' : 'light')
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, setTheme]
}
