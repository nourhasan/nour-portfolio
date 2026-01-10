import type { PortfolioData } from '@models/portfolio'

interface Props {
  data: PortfolioData
}

export default function Experience({ data }: Props) {
  return (
    <section className="fade-in-up">
      <h2 className="mb-4">Work Experience</h2>
      
      {data.experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="card">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
              <div>
                <h4 className="mb-1">{exp.role}</h4>
                <h6 className="text-muted mb-0">{exp.company}</h6>
              </div>
              <div className="mt-2 mt-md-0 text-md-end">
                <small className="text-muted d-block">{exp.duration}</small>
                <small className="text-muted d-block">{exp.location}</small>
              </div>
            </div>
            
            <ul className="mb-0">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-2">{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
