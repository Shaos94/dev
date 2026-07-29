export type ProjectCategory = 'Ambiente' | 'Economia'

export type Project = {
  id: string
  question: string
  summary: string
  takeaway: string
  category: ProjectCategory
  format: 'Calcolatore' | 'Simulatore'
  siteUrl: string
  repositoryUrl: string
  status: 'Pubblicato'
}

export const projects: Project[] = [
  {
    id: 'co2-entertainment-impact',
    question: 'Quanto pesa davvero il tempo libero sul clima?',
    summary:
      'Un confronto interattivo tra dieta, gaming, attività outdoor, festival e viaggi, espresso in kg di CO₂e.',
    takeaway:
      'Durata, trasporti e confini della stima cambiano il risultato più del nome dell’attività.',
    category: 'Ambiente',
    format: 'Calcolatore',
    siteUrl: 'https://shaos94.github.io/co2-entertainment-impact/',
    repositoryUrl: 'https://github.com/Shaos94/co2-entertainment-impact',
    status: 'Pubblicato',
  },
  {
    id: 'mcpassiveetfvstrader',
    question: 'Quanto devi essere bravo perché il trading batta un ETF?',
    summary:
      'Una simulazione Monte Carlo appaiata confronta investimento passivo e trading attivo, includendo costi, fiscalità e abbandono.',
    takeaway:
      'Non basta guardare il rendimento lordo: costi, tasse e comportamento cambiano la probabilità di successo.',
    category: 'Economia',
    format: 'Simulatore',
    siteUrl: 'https://shaos94.github.io/mcpassiveetfvstrader/',
    repositoryUrl: 'https://github.com/Shaos94/mcpassiveetfvstrader',
    status: 'Pubblicato',
  },
]
