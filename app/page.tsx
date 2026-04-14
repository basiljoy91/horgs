import { RevealEffects } from "./reveal-effects";

const navItems = [
  ["About", "#about"],
  ["Philosophy", "#philosophy"],
  ["Ingredients", "#ingredients"],
  ["Products", "#products"],
  ["Gallery", "#gallery"],
  ["Voices", "#testimonials"],
  ["Contact", "#contact"],
] as const;

const principles = [
  {
    index: "01",
    title: "Quiet luxury",
    copy:
      "Fewer elements, richer materials, and typography that carries the emotion without shouting for attention.",
  },
  {
    index: "02",
    title: "Botanical depth",
    copy:
      "Every section should feel scented by plants, with leaves, shadows, vessels, and paper textures implied throughout.",
  },
  {
    index: "03",
    title: "Flowing presentation",
    copy:
      "The story unfolds in chapters, so one section leads naturally into the next instead of feeling like stacked content blocks.",
  },
] as const;

const ingredients = [
  {
    index: "01",
    title: "Tulsi",
    copy:
      "Peppery brightness for clarity and calm. It brings lift to the palette and a sense of clean morning air.",
  },
  {
    index: "02",
    title: "Vetiver",
    copy:
      "Smoky roots and grounded warmth. This note informs the deeper moss and bark tones across the page.",
  },
  {
    index: "03",
    title: "Neroli",
    copy:
      "Soft radiance and floral light. It adds the creamy contrast that keeps the brand from becoming too heavy.",
  },
  {
    index: "04",
    title: "Ashwagandha",
    copy:
      "Restorative depth for evening rituals. It shapes the slower, more intimate scenes later in the narrative.",
  },
] as const;

const products = [
  {
    index: "01",
    title: "Signature blends",
    copy:
      "Herbal oils, teas, and room fragrances designed to anchor daily rituals in quiet confidence.",
    large: true,
  },
  {
    index: "02",
    title: "Private consultations",
    copy:
      "Guided sessions that translate lifestyle, scent memory, and mood into a more personal botanical routine.",
    large: false,
  },
  {
    index: "03",
    title: "Spatial styling",
    copy:
      "Visual and sensory direction for boutiques, retreats, and intimate wellness experiences.",
    large: false,
  },
] as const;

const testimonials = [
  {
    quote:
      "The atmosphere feels like walking into a restorative ritual that has already been prepared for you.",
    author: "Creative direction client",
  },
  {
    quote:
      "There is luxury here, but it never feels distant. The warmth is what makes the visual world memorable.",
    author: "Private consultation guest",
  },
  {
    quote:
      "Every section carries the same voice, so the whole website reads like one elegant presentation from start to finish.",
    author: "Brand strategy partner",
  },
] as const;

export default function Page() {
  return (
    <>
      <RevealEffects />
      <div className="page-noise" aria-hidden="true" />
      <div className="page-glow page-glow--left" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />

      <header className="topbar section-shell" data-reveal>
        <a className="brandmark" href="#hero">
          Herbs Atelier
        </a>
        <nav className="topnav" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="hero">
          <div className="hero-copy">
            <p className="eyebrow" data-reveal>
              Luxury herbal brand story
            </p>
            <h1 data-reveal>Herbal rituals shaped like quiet cinema.</h1>
            <p className="hero-lede" data-reveal>
              Herbs Atelier turns plant intelligence into sensorial products,
              restorative consultations, and serene spaces that feel composed
              rather than decorated.
            </p>
            <div className="button-row" data-reveal>
              <a className="btn btn--primary" href="#products">
                Explore offerings
              </a>
              <a className="btn btn--ghost" href="#contact">
                Book a consultation
              </a>
            </div>
            <dl className="hero-metrics" data-reveal>
              <div>
                <dt>Story</dt>
                <dd>From wild harvest to intimate ritual</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Botanicals, stillness, and modern care</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>Editorial presentation with a warm pulse</dd>
              </div>
            </dl>
          </div>

          <div className="hero-composition" aria-hidden="true">
            <article
              className="composition-card composition-card--cover"
              data-parallax="0.14"
            >
              <span className="card-kicker">Edition I</span>
              <h2>Rooted in fragrance, light, and leaves.</h2>
              <p>
                A brand world for people who want wellness to feel beautifully
                composed.
              </p>
              <div className="leaf-cluster leaf-cluster--cover">
                <span className="leaf" />
                <span className="leaf" />
                <span className="leaf" />
                <span className="leaf" />
              </div>
            </article>

            <article
              className="composition-card composition-card--book"
              data-parallax="0.1"
            >
              <div className="book-spread">
                <div className="book-page">
                  <span className="card-kicker">Contents</span>
                  <p>About the house</p>
                  <p>Philosophy</p>
                  <p>Ingredients</p>
                  <p>Products</p>
                </div>
                <div className="book-page book-page--dark">
                  <div className="book-ornament" />
                </div>
              </div>
            </article>

            <article
              className="composition-card composition-card--note"
              data-parallax="0.08"
            >
              <span className="mini-label">Signature mood</span>
              <p>
                Moss green, clay neutrals, luminous creams, and soft botanical
                forms held in calm motion.
              </p>
            </article>

            <div className="hero-orb hero-orb--one" />
            <div className="hero-orb hero-orb--two" />
          </div>
        </section>

        <section className="story-section section-shell" id="about">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">About</p>
            <h2>A house of herbs designed as an elegant invitation.</h2>
            <p className="section-copy">
              This brand story starts in a quiet studio where vessels, leaves,
              oils, and paper references are arranged like a living still life.
              Every choice should feel tactile, intentional, and softly
              luxurious.
            </p>
          </div>

          <div className="about-grid">
            <article className="editorial-card editorial-card--statement" data-reveal>
              <span className="panel-index">01</span>
              <p className="feature-quote">
                “Herbs Atelier is not only a wellness label. It is a slower way
                of entering the room.”
              </p>
              <p className="support-copy">
                The website should feel like that first inhale: layered, calm,
                textured, and deeply considered.
              </p>
            </article>

            <article className="editorial-card editorial-card--studio" data-reveal>
              <div className="card-scene card-scene--studio">
                <div className="scene-arch" />
                <div className="scene-vessel scene-vessel--tall" />
                <div className="scene-vessel scene-vessel--small" />
                <div className="leaf-cluster leaf-cluster--studio">
                  <span className="leaf" />
                  <span className="leaf" />
                  <span className="leaf" />
                </div>
              </div>
              <div className="card-copy">
                <h3>Editorial stillness</h3>
                <p>
                  Build every section like a styled spread, with clear focal
                  points, layered depth, and generous negative space.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="story-section section-shell" id="philosophy">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Philosophy</p>
            <h2>Three principles guide the entire experience.</h2>
            <p className="section-copy">
              The site should move like an expensive presentation transformed
              into a living page: calm transitions, sculpted layouts, and
              details that reward a slower scroll.
            </p>
          </div>

          <div className="philosophy-grid">
            {principles.map((item) => (
              <article className="principle-card" data-reveal key={item.index}>
                <span className="panel-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section section-shell" id="ingredients">
          <div className="ingredients-shell">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Ingredients</p>
              <h2>The material palette begins with plants that hold emotion.</h2>
              <p className="section-copy">
                Ingredient storytelling turns the brand from pretty to
                persuasive. These hero botanicals shape the tone, color, and
                sensory profile of the entire site.
              </p>
            </div>

            <div className="ingredient-grid">
              {ingredients.map((item) => (
                <article className="ingredient-card" data-reveal key={item.index}>
                  <span className="panel-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section section-shell" id="products">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Products &amp; Services</p>
            <h2>Offerings presented as chapters of a complete ritual life.</h2>
            <p className="section-copy">
              Instead of listing services in a plain grid, present them like a
              curated collection with clear hierarchy and a strong sense of
              mood.
            </p>
          </div>

          <div className="product-grid">
            {products.map((item) => (
              <article
                className={`product-card${item.large ? " product-card--large" : ""}`}
                data-reveal
                key={item.index}
              >
                <span className="panel-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section section-shell" id="gallery">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Gallery</p>
            <h2>A collage of objects, textures, and ritual moments.</h2>
            <p className="section-copy">
              This section gives the site its visual release: a curated mosaic
              that feels like torn pages from a refined herbal journal.
            </p>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-card gallery-card--tall" data-reveal>
              <div className="gallery-scene gallery-scene--leaf" />
              <figcaption>Leaves, paper, stone, and silence.</figcaption>
            </figure>
            <figure className="gallery-card" data-reveal>
              <div className="gallery-scene gallery-scene--vessels" />
              <figcaption>Ceramics warmed by afternoon light.</figcaption>
            </figure>
            <figure className="gallery-card" data-reveal>
              <div className="gallery-scene gallery-scene--shelf" />
              <figcaption>Texture studies for packaging and room scent.</figcaption>
            </figure>
            <figure className="gallery-card gallery-card--wide" data-reveal>
              <div className="gallery-scene gallery-scene--editorial" />
              <figcaption>Product storytelling staged like a magazine spread.</figcaption>
            </figure>
          </div>
        </section>

        <section className="story-section section-shell" id="testimonials">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Testimonials</p>
            <h2>Voices that match the softness and confidence of the brand.</h2>
            <p className="section-copy">
              Testimonials should feel like refined margin notes rather than
              loud social proof blocks. They support the mood instead of
              interrupting it.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial-card" data-reveal key={item.author}>
                <p>“{item.quote}”</p>
                <footer>{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="story-section story-section--final section-shell" id="contact">
          <div className="contact-shell" data-reveal>
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Ready to turn the full herbal world into an immersive site?</h2>
              <p className="section-copy">
                This first implementation defines the narrative foundation. From
                here we can deepen the motion, add real photography, and turn
                the page into a fully cinematic experience.
              </p>
            </div>

            <div className="contact-panel">
              <div>
                <span className="mini-label">Studio inquiries</span>
                <a href="mailto:hello@herbsatelier.com">hello@herbsatelier.com</a>
              </div>
              <div>
                <span className="mini-label">Based in</span>
                <p>Kochi, India</p>
              </div>
              <div>
                <span className="mini-label">Next milestone</span>
                <p>
                  Advance this foundation into a fully animated editorial build.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>Herbs Atelier</p>
        <p>Luxury herbal storytelling in one continuous presentation.</p>
      </footer>
    </>
  );
}
