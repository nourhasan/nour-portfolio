import type { PortfolioData } from '@models/portfolio'

interface Props {
  data: PortfolioData
}

export default function Education({ data }: Props) {
  return (
    <section className="fade-in-up">
      <h2 className="mb-4">Education</h2>
      
      <div className="card mb-4">
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3 pb-3 border-bottom">
            <h5 className="mb-1">{edu.degree}</h5>
            <p className="text-muted mb-1">{edu.field}</p>
            {edu.institution && <p className="text-muted mb-0"><small>{edu.institution}</small></p>}
            {edu.duration && <small className="text-muted">{edu.duration}</small>}
          </div>
        ))}
      </div>

      {data.certifications && data.certifications.length > 0 && (
        <div className="card">
          <h4 className="mb-3">Certifications</h4>
          <ul className="mb-0">
            {data.certifications.map((cert, index) => (
              <li key={index} className="mb-2">{cert}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
