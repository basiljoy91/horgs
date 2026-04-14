import { Reveal } from "./reveal";
import { TestimonialsCarousel } from "./testimonials-carousel";

const unsplashImage = (id: string, width = 1600) =>
  `https://unsplash.com/photos/${id}/download?force=true&w=${width}`;

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
    photo: unsplashImage("eZ0-0K1Bu4o", 1200),
    copy:
      "Peppery brightness for clarity and calm. It brings lift to the palette and a sense of clean morning air.",
  },
  {
    index: "02",
    title: "Vetiver",
    photo: unsplashImage("5qr75VKtikc", 1200),
    copy:
      "Smoky roots and grounded warmth. This note informs the deeper moss and bark tones across the page.",
  },
  {
    index: "03",
    title: "Neroli",
    photo: unsplashImage("QeYnt0Zsz7M", 1200),
    copy:
      "Soft radiance and floral light. It adds the creamy contrast that keeps the brand from becoming too heavy.",
  },
  {
    index: "04",
    title: "Ashwagandha",
    photo: unsplashImage("38ohDEr69QE", 1200),
    copy:
      "Restorative depth for evening rituals. It shapes the slower, more intimate scenes later in the narrative.",
  },
] as const;

const products = [
  {
    index: "01",
    title: "Signature blends",
    photo: unsplashImage("Qvazzq5rPg4", 1400),
    copy:
      "Herbal oils, teas, and room fragrances designed to anchor daily rituals in quiet confidence.",
    large: true,
  },
  {
    index: "02",
    title: "Private consultations",
    photo: unsplashImage("xny3AP6kss4", 1400),
    copy:
      "Guided sessions that translate lifestyle, scent memory, and mood into a more personal botanical routine.",
    large: false,
  },
  {
    index: "03",
    title: "Spatial styling",
    photo: unsplashImage("BU25z-gf4N4", 1400),
    copy:
      "Visual and sensory direction for boutiques, retreats, and intimate wellness experiences.",
    large: false,
  },
] as const;

const galleryItems = [
  {
    className: "gallery-card gallery-card--tall",
    sceneClass: "gallery-scene gallery-scene--leaf",
    photo: unsplashImage("cU8ubgWFaMY", 1400),
    caption: "Leaves, paper, stone, and silence.",
  },
  {
    className: "gallery-card",
    sceneClass: "gallery-scene gallery-scene--vessels",
    photo: unsplashImage("BU25z-gf4N4", 1400),
    caption: "Ceramics warmed by afternoon light.",
  },
  {
    className: "gallery-card",
    sceneClass: "gallery-scene gallery-scene--shelf",
    photo: unsplashImage("QeYnt0Zsz7M", 1400),
    caption: "Texture studies for packaging and room scent.",
  },
  {
    className: "gallery-card gallery-card--wide",
    sceneClass: "gallery-scene gallery-scene--editorial",
    photo: unsplashImage("Qvazzq5rPg4", 1600),
    caption: "Product storytelling staged like a magazine spread.",
  },
] as const;

const testimonials = [
  {
    quote:
      "The atmosphere feels like walking into a restorative ritual that has already been prepared for you.",
    author: "Creative direction client",
    imageUrl: unsplashImage("eZ0-0K1Bu4o", 1600),
  },
  {
    quote:
      "There is luxury here, but it never feels distant. The warmth is what makes the visual world memorable.",
    author: "Private consultation guest",
    imageUrl: unsplashImage("BU25z-gf4N4", 1600),
  },
  {
    quote:
      "Every section carries the same voice, so the whole website reads like one elegant presentation from start to finish.",
    author: "Brand strategy partner",
    imageUrl: unsplashImage("xny3AP6kss4", 1600),
  },
] as const;

export default function Page() {
  return (
    <>
      <div className="page-noise" aria-hidden="true" />
      <div className="page-glow page-glow--left" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />
      <div className="ambient-loop ambient-loop--light" aria-hidden="true" />
      <div className="ambient-loop ambient-loop--botanical" aria-hidden="true" />
      <div className="floating-particles" aria-hidden="true" />

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
            <Reveal delay={0.04}>
              <p className="eyebrow">Luxury herbal brand story</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1>Herbal rituals shaped like quiet cinema.</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-lede">
                Herbs Atelier turns plant intelligence into sensorial products,
                restorative consultations, and serene spaces that feel composed
                rather than decorated.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="button-row">
                <a className="btn btn--primary" href="#products">
                  Explore offerings
                </a>
                <a className="btn btn--ghost" href="#contact">
                  Book a consultation
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <dl className="hero-metrics">
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
            </Reveal>
          </div>

          <div className="hero-composition" aria-hidden="true">
            <div
              className="hero-photo-panel"
              style={{
                backgroundImage: `linear-gradient(rgba(245, 238, 228, 0.08), rgba(245, 238, 228, 0.08)), url("${unsplashImage("eZ0-0K1Bu4o", 1800)}")`,
              }}
            />
            <div className="hero-depth hero-depth--one" data-mouse-depth="18" />
            <div className="hero-depth hero-depth--two" data-mouse-depth="-12" />
            <div className="hero-depth hero-depth--three" data-mouse-depth="24" />
            <div className="hero-foreground-leaves" data-mouse-depth="30">
              <span className="hero-foreground-leaf hero-foreground-leaf--a" />
              <span className="hero-foreground-leaf hero-foreground-leaf--b" />
              <span className="hero-foreground-leaf hero-foreground-leaf--c" />
            </div>
            <article
              className="composition-card composition-card--cover"
              data-parallax="0.14"
              data-mouse-depth="10"
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
              data-mouse-depth="-8"
            >
              <div className="book-spread">
                <div className="book-page">
                  <span className="card-kicker">Contents</span>
                  <p>About the house</p>
                  <p>Philosophy</p>
                  <p>Ingredients</p>
                  <p>Products</p>
                </div>
                <div
                  className="book-page book-page--dark"
                  style={{
                    backgroundImage: `linear-gradient(145deg, rgba(76, 88, 64, 0.78), rgba(103, 117, 88, 0.58)), url("${unsplashImage("QeYnt0Zsz7M", 1000)}")`,
                  }}
                >
                  <div className="book-ornament" />
                </div>
              </div>
            </article>

            <article
              className="composition-card composition-card--note"
              data-parallax="0.08"
              data-mouse-depth="14"
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
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">About</p>
              <h2>A house of herbs designed as an elegant invitation.</h2>
              <p className="section-copy">
                This brand story starts in a quiet studio where vessels, leaves,
                oils, and paper references are arranged like a living still
                life. Every choice should feel tactile, intentional, and softly
                luxurious.
              </p>
            </div>
          </Reveal>

          <div className="about-grid">
            <article
              className="editorial-card editorial-card--statement"
              data-reveal
              data-panel-slide
            >
              <span className="panel-index">01</span>
              <span className="framed-tag">Studio note</span>
              <p className="feature-quote">
                “Herbs Atelier is not only a wellness label. It is a slower way
                of entering the room.”
              </p>
              <p className="support-copy">
                The website should feel like that first inhale: layered, calm,
                textured, and deeply considered.
              </p>
            </article>

            <article
              className="editorial-card editorial-card--studio"
              data-reveal
              data-panel-slide
            >
              <div
                className="card-scene card-scene--studio"
                style={{
                  backgroundImage: `linear-gradient(140deg, rgba(86, 102, 74, 0.66) 0%, rgba(100, 115, 84, 0.6) 48%, rgba(191, 151, 118, 0.44) 48%, rgba(191, 151, 118, 0.52) 100%), url("${unsplashImage("BU25z-gf4N4", 1600)}")`,
                }}
              >
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
                <span className="framed-tag">Composition</span>
                <h3>Editorial stillness</h3>
                <p>
                  Build every section like a styled spread, with clear focal
                  points, layered depth, and generous negative space.
                </p>
              </div>
            </article>

            <article
              className="editorial-card editorial-card--note"
              data-reveal
              data-panel-slide
            >
              <span className="panel-index">02</span>
              <span className="framed-tag">Material direction</span>
              <p>
                Large image fields should breathe beside compact text cards, so
                the eye moves slowly through the page instead of scanning it as
                a normal website grid.
              </p>
            </article>
          </div>
        </section>

        <section className="story-section section-shell" id="philosophy">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">Philosophy</p>
              <h2>Three principles guide the entire experience.</h2>
              <p className="section-copy">
                The site should move like an expensive presentation transformed
                into a living page: calm transitions, sculpted layouts, and
                details that reward a slower scroll.
              </p>
            </div>
          </Reveal>

          <div className="philosophy-stage" data-philosophy-pin>
            <div className="philosophy-frames" aria-hidden="true">
              <span className="philosophy-frame philosophy-frame--one" />
              <span className="philosophy-frame philosophy-frame--two" />
              <span className="philosophy-frame philosophy-frame--three" />
            </div>
            <div className="philosophy-grid">
              {principles.map((item) => (
                <article
                  className="principle-card"
                  data-reveal
                  data-panel-slide
                  key={item.index}
                >
                  <span className="panel-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
              <article
                className="principle-card principle-card--quote"
                data-reveal
                data-panel-slide
              >
                <span className="framed-tag">Editorial rule</span>
                <p className="principle-quote">
                  Let silence do part of the storytelling.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="story-section section-shell" id="ingredients">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <div className="ingredients-shell">
            <Reveal className="section-heading">
              <div data-reveal>
                <p className="eyebrow">Ingredients</p>
                <h2>The material palette begins with plants that hold emotion.</h2>
                <p className="section-copy">
                  Ingredient storytelling turns the brand from pretty to
                  persuasive. These hero botanicals shape the tone, color, and
                  sensory profile of the entire site.
                </p>
              </div>
            </Reveal>

            <div className="ingredient-grid">
              {ingredients.map((item) => (
                <article
                  className="ingredient-card"
                  data-reveal
                  data-panel-slide
                  key={item.index}
                  style={{
                    backgroundImage: `linear-gradient(155deg, rgba(86, 99, 72, 0.78), rgba(88, 72, 57, 0.54)), url("${item.photo}")`,
                  }}
                >
                  <span className="panel-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
              <article className="ingredient-feature" data-reveal data-panel-slide>
                <div
                  className="ingredient-feature__image"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 250, 243, 0.08), rgba(255, 250, 243, 0.08)), url("${unsplashImage("5qr75VKtikc", 1600)}")`,
                  }}
                />
                <div className="ingredient-feature__copy">
                  <span className="framed-tag">Palette study</span>
                  <h3>Each botanical changes the room around it.</h3>
                  <p>
                    Ingredients should feel spatial, almost cinematic, with one
                    anchored composition card balancing the text-driven list.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="story-section section-shell" id="ritual-story">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">Signature Scene</p>
              <h2>A ritual story told through pinned botanical layers.</h2>
              <p className="section-copy">
                One memorable interaction should feel like the heart of the
                brand. This chapter pins the page and lets vessels, leaves,
                cards, and copy drift into alignment as the ritual takes shape.
              </p>
            </div>
          </Reveal>

          <div className="ritual-stage" data-ritual-pin>
            <div className="ritual-stage__visual" aria-hidden="true">
              <div
                className="ritual-layer ritual-layer--base"
                data-ritual-layer="0"
                style={{
                  backgroundImage: `linear-gradient(rgba(244, 237, 227, 0.08), rgba(244, 237, 227, 0.08)), url("${unsplashImage("eZ0-0K1Bu4o", 1800)}")`,
                }}
              />
              <div className="ritual-layer ritual-layer--leaf-left" data-ritual-layer="1" />
              <div className="ritual-layer ritual-layer--leaf-right" data-ritual-layer="2" />
              <div
                className="ritual-layer ritual-layer--bottle"
                data-ritual-layer="3"
                style={{
                  backgroundImage: `linear-gradient(160deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02)), url("${unsplashImage("Qvazzq5rPg4", 1200)}")`,
                }}
              />
              <div className="ritual-layer ritual-layer--shadow" data-ritual-layer="4" />
            </div>

            <div className="ritual-stage__copy">
              <article className="ritual-card" data-ritual-card="0">
                <span className="framed-tag">01 Arrival</span>
                <h3>The room opens in soft grain and leaves.</h3>
                <p>
                  The first layer is atmosphere: paper, shadow, and botanical
                  forms setting the emotional temperature before any product
                  appears.
                </p>
              </article>

              <article className="ritual-card" data-ritual-card="1">
                <span className="framed-tag">02 Composition</span>
                <h3>Objects step forward like a styled editorial spread.</h3>
                <p>
                  Ceramics and vessels rise into view slowly, with overlapping
                  forms that feel composed by hand rather than dropped into a
                  grid.
                </p>
              </article>

              <article className="ritual-card" data-ritual-card="2">
                <span className="framed-tag">03 Reveal</span>
                <h3>The signature blend becomes the quiet focal point.</h3>
                <p>
                  At the end of the interaction, the product holds the center of
                  the page and the supporting layers settle around it like a
                  complete ritual.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="story-section section-shell" id="products">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">Products &amp; Services</p>
              <h2>Offerings presented as chapters of a complete ritual life.</h2>
              <p className="section-copy">
                Instead of listing services in a plain grid, present them like a
                curated collection with clear hierarchy and a strong sense of
                mood.
              </p>
            </div>
          </Reveal>

          <div className="product-grid">
            {products.map((item) => (
              <article
                className={`product-card${item.large ? " product-card--large" : ""}`}
                data-reveal
                data-panel-slide
                key={item.index}
              >
                <div
                  className="product-card__media"
                  style={{
                    backgroundImage: `linear-gradient(160deg, rgba(73, 85, 61, 0.18), rgba(255, 255, 255, 0.03)), url("${item.photo}")`,
                  }}
                />
                <span className="panel-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
            <article className="product-card product-card--frame" data-reveal data-panel-slide>
              <span className="framed-tag">Presentation</span>
              <p className="product-frame-copy">
                Services and products should sit inside a composed spread, with
                one dramatic anchor and supporting side panels.
              </p>
            </article>
          </div>
        </section>

        <section className="story-section section-shell" id="gallery">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">Gallery</p>
              <h2>A collage of objects, textures, and ritual moments.</h2>
              <p className="section-copy">
                This section gives the site its visual release: a curated mosaic
                that feels like torn pages from a refined herbal journal.
              </p>
            </div>
          </Reveal>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure className={item.className} data-reveal data-panel-slide key={item.caption}>
                <div
                  className={item.sceneClass}
                  style={{
                    backgroundImage: `linear-gradient(150deg, rgba(92, 104, 77, 0.3), rgba(215, 199, 182, 0.16)), url("${item.photo}")`,
                  }}
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
            <article className="gallery-caption-card" data-reveal data-panel-slide>
              <span className="framed-tag">Gallery note</span>
              <p>
                Mix tall still lifes, quieter object studies, and one wide
                editorial frame so the gallery feels collected rather than
                uniform.
              </p>
            </article>
          </div>
        </section>

        <section className="story-section section-shell" id="testimonials">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">Testimonials</p>
              <h2>Voices that match the softness and confidence of the brand.</h2>
              <p className="section-copy">
                Testimonials should feel like refined margin notes rather than
                loud social proof blocks. They support the mood instead of
                interrupting it.
              </p>
            </div>
          </Reveal>

          <TestimonialsCarousel items={testimonials} />
        </section>

        <section className="story-section story-section--final section-shell" id="contact">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <div
            className="contact-shell"
            data-reveal
            data-panel-slide
            style={{
              backgroundImage: `linear-gradient(145deg, rgba(255, 251, 246, 0.8), rgba(233, 224, 211, 0.58)), url("${unsplashImage("xny3AP6kss4", 1400)}")`,
            }}
          >
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
