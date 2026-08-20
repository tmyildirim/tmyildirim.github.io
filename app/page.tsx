import {
  booksAndChapters,
  datasets,
  publications,
  researchThemes,
  selectedTalks,
  teaching,
} from "./content";

const publicationYears = Array.from(new Set(publications.map((item) => item.year)));
const featuredPublications = publications.filter(
  (item, index) =>
    (index < 6 &&
      !item.title.startsWith("Taking Parenthood Seriously") &&
      !item.title.startsWith("District-Level Drivers of Voter Turnout") &&
      !item.title.startsWith("Problem Importance across Time and Space")) ||
    item.title.startsWith("Emotions in the Aisles") ||
    item.title.startsWith("Electoral Systems and Gender Inequality in Political News") ||
    item.title ===
      "The Determinants of the Media Coverage of Politicians: The Role of Parliamentary Activities",
);
export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#data">Data</a>
          <a href="#teaching">Teaching</a>
        </nav>
        <a className="nav-cv" href="/Tevfik-Murat-Yildirim-CV.pdf">Download CV</a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Political scientist · Stavanger, Norway</p>
            <h1 id="hero-title">Tevfik Murat Yildirim</h1>
            <p className="hero-role">
              Professor of Political Science
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#publications">Explore my work</a>
              <span className="email-text">murat.yildirim [at] uis.no</span>
            </div>
          </div>
          <figure className="portrait-wrap">
            {/* The source is already compressed and static-exported for GitHub Pages. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tevfik-murat-yildirim.jpg"
              alt="Tevfik Murat Yildirim outdoors"
              width={1800}
              height={1350}
              fetchPriority="high"
            />
            <figcaption>University of Stavanger</figcaption>
          </figure>
        </section>

        <section className="about-grid section" id="about">
          <div className="sticky-heading">
            <p className="section-kicker">About</p>
            <h2>About me.</h2>
            <a className="inline-action" href="/Tevfik-Murat-Yildirim-CV.pdf">Full curriculum vitae <span>↓</span></a>
          </div>
          <div className="about-copy">
            <p>
              I am Professor of Political Science in the Department of Media and Social Sciences at the
              University of Stavanger, Norway, where I serve as Director of Graduate Studies. I received
              my Ph.D. in Political Science from the University of Missouri, specializing in comparative
              politics and public policy.
            </p>
            <p>
              My research lies at the intersection of political behavior, legislative politics, and
              identity politics. I am especially interested in whose priorities are heard, how
              representatives communicate, and how citizens and institutions process political information.
              Beyond these areas of research, I occasionally write about higher education. So far, my
              article-length work has been published in various journals including the
              <em> American Political Science Review</em>, <em>British Journal of Political Science</em>,
              <em> European Journal of Political Research</em>, <em>Journal of European Public Policy</em>,
              <em> Legislative Studies Quarterly</em>, <em>Party Politics</em>, <em>Political Behavior</em>,
              <em> Political Communication</em>, <em>Political Science Research and Methods</em>, and
              <em> Public Opinion Quarterly</em>, among others.
            </p>
            <p>
              My research has been featured, discussed, or summarized for broader audiences by outlets
              including <em>The Washington Post</em>, the LSE Phelan United States Centre,
              <em> The Conversation</em>, the Roper Center, PsyPost, and the John Smith Centre. It has
              also been cited in policy reports produced by the World Bank, the European Union, and the
              Research Council of Norway.
            </p>
            <div className="visit-list" aria-label="Visiting appointments">
              <p className="mini-label">Visiting appointments</p>
              <p>
                I have held visiting appointments at Sciences Po
                (2024–2025), Collegio Carlo Alberto (2024 and 2026), the University of
                Konstanz (2023), the University of Southampton (2022), and the University
                of Texas at Austin (2014).
              </p>
            </div>
          </div>
        </section>

        <section className="research-section section" id="research">
          <p className="section-kicker research-label">Research</p>
          <div className="theme-grid">
            {researchThemes.map((theme) => (
              <article className="theme-card" key={theme.number}>
                <span>{theme.number}</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="publications-section section" id="publications">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Publications</p>
              <h2>Books and articles</h2>
            </div>
            <p>
              My work spans political behavior, representation, public policy, identity politics,
              legislative studies, and political communication.
            </p>
          </div>

          <div className="featured-publications">
            {featuredPublications.map((item, index) => (
              <article className="featured-publication" key={item.title}>
                <div className="publication-index">0{index + 1}</div>
                <p className="publication-meta">{item.venue} · {item.year}</p>
                <h3>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.title} <span className="external-mark" aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="authors">{item.authors}</p>
                {item.note && <p className="publication-note">{item.note}</p>}
              </article>
            ))}
          </div>

          <details className="publication-archive">
            <summary>
              <span>Complete peer-reviewed article list</span>
              <span>Expand</span>
            </summary>
            <div className="archive-content">
              {publicationYears.map((year) => (
                <section className="year-group" key={year} aria-labelledby={`year-${year}`}>
                  <h3 id={`year-${year}`}>{year}</h3>
                  <div>
                    {publications.filter((item) => item.year === year).map((item) => (
                      <article className="archive-item" key={item.title}>
                        <p className="archive-venue">{item.venue}</p>
                        <h4>
                          <a href={item.href} target="_blank" rel="noreferrer">
                            {item.title} <span className="external-mark" aria-hidden="true">↗</span>
                          </a>
                        </h4>
                        <p>{item.authors}</p>
                        {item.note && <p className="archive-note">{item.note}</p>}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </details>

          <div className="books-block">
            <p className="section-kicker">Book & chapters</p>
            <div className="book-list">
              {booksAndChapters.map((item) => (
                <article key={item.title}>
                  <p>{item.type} · {item.year}</p>
                  <h3>{item.title}</h3>
                  <span>{item.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="data-section section" id="data">
          <div className="data-heading">
            <p className="section-kicker">Open research</p>
            <h2>Datasets built for questions across time and place.</h2>
          </div>
          <div className="data-grid">
            {datasets.map((dataset, index) => (
              <article className="data-card" key={dataset.title}>
                <span>0{index + 1}</span>
                <p className="data-meta">{dataset.meta}</p>
                <h3>
                  <a href={dataset.href} target="_blank" rel="noreferrer">
                    {dataset.title} <span className="external-mark" aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p>{dataset.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="teaching-section section" id="teaching">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Teaching</p>
              <h2>Methods, comparative politics, and political elites.</h2>
            </div>
            <p>
              My teaching ranges from introductory comparative politics to quantitative methods and
              advanced courses on elites, elections, and the public.
            </p>
          </div>
          <div className="teaching-grid">
            {teaching.map((group) => (
              <article key={group.institution}>
                <h3>{group.institution}</h3>
                <ul>
                  {group.courses.map((course) => <li key={course}>{course}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="talks-section section" id="talks">
          <div>
            <p className="section-kicker">Selected talks</p>
            <h2>Recent invited presentations</h2>
          </div>
          <div className="talk-list">
            {selectedTalks.map((talk) => (
              <article key={`${talk.title}-${talk.host}`}>
                <span>{talk.year}</span>
                <h3>{talk.title}</h3>
                <p>{talk.host}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="public-section section">
          <p className="section-kicker">Beyond journals</p>
          <h2>Research for public debate.</h2>
          <p>
            I contribute to public-facing discussions of politics, and my work has reached readers
            through research features, interviews, essays, and reviews.
          </p>
          <div className="outlet-cloud" aria-label="Media and public scholarship outlets">
            {["The Washington Post", "LSE", "The Conversation", "Roper Center", "PsyPost", "John Smith Centre", "Journalisten", "Forskning.no"].map((outlet) => (
              <span key={outlet}>{outlet}</span>
            ))}
          </div>
        </section>

      </main>

      <footer>
        <p>© 2026 Tevfik Murat Yildirim</p>
        <span className="footer-email">murat.yildirim [at] uis.no</span>
        <p>Stavanger, Norway</p>
      </footer>
    </div>
  );
}
