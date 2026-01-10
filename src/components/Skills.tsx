import type { PortfolioData } from '@models/portfolio'

interface Props {
  data: PortfolioData
}

export default function Skills({ data }: Props) {
  return (
    <section className="fade-in-up">
      <h2 className="mb-4">Skills</h2>
      
      <div className="mb-5">
        <h4 className="mb-3">Technical Skills</h4>
        <div className="d-flex flex-wrap">
          {data.skills.technical.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="card mb-4">
        <h4 className="mb-3">Personal Skills</h4>
        <ul className="mb-0">
          {data.skills.personal.map((skill, index) => (
            <li key={index} className="mb-2">{skill}</li>
          ))}
        </ul>
      </div>

      {data.languages && data.languages.length > 0 && (
        <div className="card">
          <h4 className="mb-3">Languages</h4>
          <div className="row">
            {data.languages.map((lang, index) => (
              <div key={index} className="col-md-6 mb-2">
                <strong>{lang.name}:</strong> {lang.proficiency}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
