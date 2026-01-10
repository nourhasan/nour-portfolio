export interface Experience {
  company: string
  role: string
  duration: string
  location: string
  responsibilities: string[]
}

export interface Project {
  title: string
  description: string
}

export interface Education {
  degree: string
  field: string
  institution?: string
  duration?: string
}

export interface Language {
  name: string
  proficiency: string
}

export interface ContactInfo {
  email: string
  location: string
  linkedin: string
  github: string
}

export interface PortfolioData {
  dp: string
  name: string
  role: string
  objective: string
  contact: ContactInfo
  experience: Experience[]
  skills: {
    technical: string[]
    personal: string[]
  }
  education: Education[]
  projects: Project[]
  certifications: string[]
  languages: Language[]
}
