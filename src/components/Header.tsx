import type { PortfolioData } from '@models/portfolio'

interface Props {
  data: PortfolioData
}

export default function Header({ data }: Props) {
  return (
    <section className="header-section fade-in-up">
      <img src={data.dp} className="avatar mb-4" alt={data.name} />
      <h1 className="mb-3">{data.name}</h1>
      <p className="role">{data.role}</p>
    </section>
  )
}
