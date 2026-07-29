import { useMemo, useState } from 'react'
import { projects, type Project } from './data/projects'

const ALL_CATEGORIES = 'Tutte'
type CategoryFilter = typeof ALL_CATEGORIES | Project['category']

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{project.category}</span>
        <span aria-hidden="true">·</span>
        <span>{project.format}</span>
        <span className="status-badge">{project.status}</span>
      </div>

      <h3>{project.question}</h3>
      <p className="project-card__summary">{project.summary}</p>

      <div className="project-card__takeaway">
        <span className="takeaway-label">Il punto</span>
        <p>{project.takeaway}</p>
      </div>

      <div className="project-card__actions">
        <a
          className="button button--primary"
          href={project.siteUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Apri il progetto: ${project.question}`}
        >
          Esplora il progetto <span aria-hidden="true">↗</span>
        </a>
        <a
          className="text-link"
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Apri la repository GitHub di: ${project.question}`}
        >
          Vedi il codice
        </a>
      </div>
    </article>
  )
}

export default function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(ALL_CATEGORIES)

  const categories = useMemo<CategoryFilter[]>(
    () => [ALL_CATEGORIES, ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  )

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('it')

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === ALL_CATEGORIES || project.category === activeCategory
      const searchableText = [
        project.question,
        project.summary,
        project.takeaway,
        project.category,
        project.format,
      ]
        .join(' ')
        .toLocaleLowerCase('it')

      return matchesCategory && searchableText.includes(normalizedQuery)
    })
  }, [activeCategory, query])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Domande Laterali, torna all'inizio">
          <span className="brand-mark" aria-hidden="true">?</span>
          <span>Domande Laterali</span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#progetti">Progetti</a>
          <a href="#metodo">Metodo</a>
          <a href="https://github.com/Shaos94" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">Esperimenti indipendenti, dati verificabili</p>
            <h1 id="hero-title">Domande strane. Risposte che si possono controllare.</h1>
            <p className="hero__lead">
              Una raccolta di calcolatori, simulazioni e approfondimenti costruiti per
              capire meglio problemi che sembrano semplici solo finché non si guardano i dati.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#progetti">Esplora i progetti</a>
              <a className="text-link" href="#metodo">Come vengono costruiti</a>
            </div>
          </div>
          <div className="hero__aside" aria-label="Statistiche della raccolta">
            <div>
              <strong>{projects.length}</strong>
              <span>progetti pubblicati</span>
            </div>
            <div>
              <strong>{categories.length - 1}</strong>
              <span>campi esplorati</span>
            </div>
            <p>Una domanda alla volta, con ipotesi e limiti dichiarati.</p>
          </div>
        </section>

        <section className="projects-section" id="progetti" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">La raccolta</p>
              <h2 id="projects-title">Scegli una domanda da esplorare</h2>
            </div>
            <p>{filteredProjects.length} risultati</p>
          </div>

          <div className="project-tools">
            <label className="search-field">
              <span className="sr-only">Cerca nei progetti</span>
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cerca una domanda, un tema o uno strumento"
              />
            </label>

            <div className="filters" aria-label="Filtra per categoria">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === activeCategory ? 'filter-button is-active' : 'filter-button'}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={category === activeCategory}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Nessun progetto corrisponde alla ricerca.</h3>
              <p>Prova a rimuovere un filtro o a usare parole più generali.</p>
              <button
                type="button"
                className="button button--secondary"
                onClick={() => {
                  setQuery('')
                  setActiveCategory(ALL_CATEGORIES)
                }}
              >
                Azzera i filtri
              </button>
            </div>
          )}
        </section>

        <section className="method-section" id="metodo" aria-labelledby="method-title">
          <div>
            <p className="eyebrow">Metodo</p>
            <h2 id="method-title">Non una raccolta di curiosità. Un laboratorio pubblico.</h2>
          </div>
          <ol className="method-steps">
            <li><span>01</span><div><h3>Partire dalla domanda</h3><p>Definire cosa si sta davvero confrontando e quali confini rendono la risposta utile.</p></div></li>
            <li><span>02</span><div><h3>Rendere visibili le ipotesi</h3><p>Mostrare dati, semplificazioni, intervalli e punti in cui il risultato può cambiare.</p></div></li>
            <li><span>03</span><div><h3>Lasciare esplorare</h3><p>Trasformare la ricerca in strumenti interattivi, senza nascondere l'incertezza.</p></div></li>
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <p><strong>Domande Laterali</strong> — un progetto indipendente di Stefano.</p>
        <p>Codice e progetti pubblici su <a href="https://github.com/Shaos94" target="_blank" rel="noreferrer">GitHub</a>.</p>
      </footer>
    </div>
  )
}
