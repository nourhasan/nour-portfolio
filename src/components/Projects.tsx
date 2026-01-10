import type { PortfolioData } from '@models/portfolio'

interface Props {
  data: PortfolioData
}

export default function Projects({ data }: Props) {
  return (
    <section className="fade-in-up">
      <h2 className="mb-4">Key Projects & Achievements</h2>
      
      <div className="row">
        {data.projects.map((project, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <div className="card h-100">
              <h5 className="mb-3">{project.title}</h5>
              <p className="mb-0">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
