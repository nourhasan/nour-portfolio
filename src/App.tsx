import { useEffect, useState } from 'react'
import Header from '@components/Header'
import About from '@components/About'
import Experience from '@components/Experience'
import Skills from '@components/Skills'
import Education from '@components/Education'
import Projects from '@components/Projects'
import ThemeToggle from '@components/ThemeToggle'
import type { PortfolioData } from '@models/portfolio'

export default function App() {
  const [data, setData] = useState<PortfolioData | null>(null)

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(setData)
  }, [])

  if (!data) return null

  return (
    <>
      <ThemeToggle />
      <div className="portfolio-container">
        <Header data={data} />
        <hr className="section-divider" />
        <About data={data} />
        <hr className="section-divider" />
        <Experience data={data} />
        <hr className="section-divider" />
        <Skills data={data} />
        <hr className="section-divider" />
        <Projects data={data} />
        <hr className="section-divider" />
        <Education data={data} />
      </div>
    </>
  )
}
