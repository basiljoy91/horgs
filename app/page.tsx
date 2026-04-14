import { Reveal, TextReveal, StaggerChildren, StaggerItem } from "./reveal";
import { TestimonialsCarousel } from "./testimonials-carousel";
import { MobileNav } from "./mobile-nav";
import { PremiumMedia } from "./premium-media";

const photos = {
  heroStillLife: "/assets/curated/hero-still-life.jpg",
  herbJarMacro: "/assets/curated/herb-jar-macro.jpg",
  leafFlatlay: "/assets/curated/leaf-flatlay.jpg",
  ceramics: "/assets/curated/ceramics.jpg",
  perfumeSheet: "/assets/curated/perfume-sheet.jpg",
  perfumeBottle: "/assets/curated/perfume-bottle.jpg",
  plantShadow: "/assets/curated/plant-shadow.jpg",
  leafShadowWall: "/assets/curated/leaf-shadow-wall.jpg",
  windowPlant: "/assets/curated/window-plant.jpg",
  afternoonRoom: "/assets/curated/afternoon-room.jpg",
  shadowLeavesTan: "/assets/curated/shadow-leaves-tan.jpg",
} as const;

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
      "We keep the gesture restrained so texture, scent, and light can speak with confidence.",
  },
  {
    index: "02",
    title: "Botanical depth",
    copy:
      "Every formula begins in the character of a plant, then opens into mood, color, and ritual.",
  },
  {
    index: "03",
    title: "Flowing ritual",
    copy:
      "Our world unfolds in measured chapters so each moment leads naturally into the next.",
  },
] as const;

const ingredients = [
  {
    index: "01",
    title: "Tulsi",
    photo: photos.heroStillLife,
    copy:
      "Green, peppery, and bright. Tulsi brings clarity to the opening notes and a feeling of morning air.",
  },
  {
    index: "02",
    title: "Vetiver",
    photo: photos.herbJarMacro,
    copy:
      "Earth-rooted and quietly smoky. Vetiver grounds the collection with depth, bark, and soft shadow.",
  },
  {
    index: "03",
    title: "Neroli",
    photo: photos.leafFlatlay,
    copy:
      "Luminous and floral. Neroli lifts the heart with light, softness, and a cream-toned glow.",
  },
  {
    index: "04",
    title: "Ashwagandha",
    photo: photos.shadowLeavesTan,
    copy:
      "Restorative and velvety. Ashwagandha shapes the slower evening ritual and the deeper warmth beneath it.",
  },
] as const;

const products = [
  {
    index: "01",
    title: "Signature blends",
    photo: photos.perfumeBottle,
    copy:
      "Botanical oils, room fragrances, and steeping blends composed for daily ritual and lasting calm.",
    large: true,
  },
  {
    index: "02",
    title: "Private consultations",
    photo: photos.windowPlant,
    copy:
      "Personal sessions that translate memory, routine, and atmosphere into a botanical practice of your own.",
    large: false,
  },
  {
    index: "03",
    title: "Spatial styling",
    photo: photos.ceramics,
    copy:
      "Sensory direction for boutiques, retreats, and rooms that want to feel restorative from the first step in.",
    large: false,
  },
] as const;

const galleryItems = [
  {
    className: "gallery-card gallery-card--tall",
    sceneClass: "gallery-scene gallery-scene--leaf",
    photo: photos.heroStillLife,
    tag: "Hero still life",
    caption: "The house palette begins in leaves, clay, paper, and softened afternoon light.",
  },
  {
    className: "gallery-card gallery-card--wide",
    sceneClass: "gallery-scene gallery-scene--editorial",
    photo: photos.perfumeBottle,
    tag: "Cinematic spread",
    caption: "The signature blend appears in a wider frame like a printed editorial opening.",
  },
  {
    className: "gallery-card gallery-card--portrait",
    sceneClass: "gallery-scene gallery-scene--portrait",
    photo: photos.perfumeSheet,
    tag: "Object study",
    caption: "A narrow study of linen, vessel, and surface glow.",
  },
  {
    className: "gallery-card",
    sceneClass: "gallery-scene gallery-scene--vessels",
    photo: photos.ceramics,
    tag: "Ceramics",
    caption: "Ceramics held in warm neutrals and quiet shadow.",
  },
  {
    className: "gallery-card",
    sceneClass: "gallery-scene gallery-scene--shadow",
    photo: photos.leafShadowWall,
    tag: "Detail crop",
    caption: "Leaf silhouettes soften the room into atmosphere.",
  },
  {
    className: "gallery-card",
    sceneClass: "gallery-scene gallery-scene--window",
    photo: photos.afternoonRoom,
    tag: "Closing mood",
    caption: "A final room note of window light, calm air, and negative space.",
  },
  {
    className: "gallery-card",
    sceneClass: "gallery-scene gallery-scene--detail",
    photo: photos.plantShadow,
    tag: "Light study",
    caption: "Shadow across surface becomes part of the composition.",
  },
] as const;

const testimonials = [
  {
    quote:
      "The atmosphere feels like walking into a restorative ritual that has already been prepared for you.",
    author: "Creative direction client",
    imageUrl: photos.heroStillLife,
  },
  {
    quote:
      "There is luxury here, but it never feels distant. The warmth is what makes the visual world memorable.",
    author: "Private consultation guest",
    imageUrl: photos.ceramics,
  },
  {
    quote:
      "Every section carries the same voice, so the whole website reads like one elegant presentation from start to finish.",
    author: "Brand strategy partner",
    imageUrl: photos.windowPlant,
  },
] as const;

export default function Page() {
  return (
    <>
      <div className="page-noise" aria-hidden="true" />
      <div className="page-glow page-glow--left" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />
      <div className="page-glow page-glow--center" aria-hidden="true" />
      <div className="ambient-loop ambient-loop--light" aria-hidden="true" />
      <div className="ambient-loop ambient-loop--botanical" aria-hidden="true" />
      <div className="floating-particles" aria-hidden="true" />

      {/* ─── TOPBAR ─── */}
      <header className="topbar section-shell" data-reveal>
        <a className="brandmark" href="#hero">
          <span className="brandmark__icon" aria-hidden="true">✦</span>
          Herbs Atelier
        </a>
        <nav className="topnav" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <MobileNav />
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section className="hero section-shell" id="hero">
          <div className="hero-copy">
            <Reveal delay={0.04}>
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Luxury herbal brand story
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <TextReveal
                text="Herbal rituals shaped like quiet cinema."
                tag="h1"
                delay={0.12}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-lede">
                Herbs Atelier composes botanical fragrance, restorative blends,
                and quietly sensorial spaces for people who want wellness to
                feel intimate, cultivated, and beautifully lived in.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="button-row">
                <a className="btn btn--primary" href="#products">
                  <span className="btn__text">Explore offerings</span>
                  <span className="btn__shine" aria-hidden="true" />
                </a>
                <a className="btn btn--ghost" href="#contact">
                  <span className="btn__text">Book a consultation</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <dl className="hero-metrics">
                <div className="hero-metric">
                  <dt>Story</dt>
                  <dd>From wild harvest to intimate ritual</dd>
                </div>
                <div className="hero-metric">
                  <dt>Focus</dt>
                  <dd>Botanicals, stillness, and atmospheric care</dd>
                </div>
                <div className="hero-metric">
                  <dt>Approach</dt>
                  <dd>Fragrance, ritual, and rooms in balance</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="hero-composition" aria-hidden="true">
            <PremiumMedia
              className="hero-photo-panel"
              src={photos.heroStillLife}
              alt="Botanical still life with herbs, ceramic vessels, and warm natural light."
              ratio="hero"
              priority
              quality={84}
              sizes="(max-width: 1080px) 100vw, 42vw"
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
                A quieter house of herbs where ritual is styled with warmth,
                restraint, and natural depth.
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
                    backgroundImage: `linear-gradient(145deg, rgba(76, 88, 64, 0.78), rgba(103, 117, 88, 0.58)), url("${photos.leafFlatlay}")`,
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
                Moss greens, clay neutrals, luminous creams, and the hush of
                leaf-shadow moving across paper.
              </p>
            </article>

            <PremiumMedia
              className="hero-photo-chip hero-photo-chip--shadow"
              data-parallax="0.06"
              data-mouse-depth="-10"
              src={photos.plantShadow}
              alt=""
              ratio="portrait"
              sizes="(max-width: 800px) 120px, 132px"
            />
            <PremiumMedia
              className="hero-photo-chip hero-photo-chip--bottle"
              data-parallax="0.09"
              data-mouse-depth="8"
              src={photos.perfumeSheet}
              alt=""
              ratio="portrait"
              sizes="(max-width: 800px) 110px, 120px"
            />

            <div className="hero-orb hero-orb--one" />
            <div className="hero-orb hero-orb--two" />
          </div>
        </section>

        {/* ─── MARQUEE ─── */}
        <div className="marquee-strip" aria-hidden="true">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <div className="marquee-content" key={i}>
                <span>Botanical elegance</span>
                <span className="marquee-dot">✦</span>
                <span>Quiet luxury</span>
                <span className="marquee-dot">✦</span>
                <span>Herbal rituals</span>
                <span className="marquee-dot">✦</span>
                <span>Sensorial depth</span>
                <span className="marquee-dot">✦</span>
                <span>Rooted in nature</span>
                <span className="marquee-dot">✦</span>
                <span>Composed beauty</span>
                <span className="marquee-dot">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── ABOUT ─── */}
        <section className="story-section story-section--split section-shell" id="about">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                About
              </p>
              <TextReveal
                text="A house of herbs designed as an elegant invitation."
                delay={0.1}
              />
              <p className="section-copy">
                Herbs Atelier began as a studio practice in arranging plants,
                vessels, oils, and paper until they felt like a complete
                atmosphere. What emerged is a house devoted to ritual beauty,
                botanical intelligence, and rooms that exhale softly.
              </p>
            </div>
          </Reveal>

          <StaggerChildren className="about-grid" stagger={0.12}>
            <StaggerItem>
              <article
                className="editorial-card editorial-card--statement"
                data-panel-slide
              >
                <span className="panel-index">01</span>
                <span className="framed-tag">Origin</span>
                <p className="feature-quote">
                  "We began by styling rituals the way others style a room:
                  patiently, materially, and with light in mind."
                </p>
                <p className="support-copy">
                  Every object, blend, and fragrance is composed to slow the
                  pace of entry and make care feel more ceremonial.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article
                className="editorial-card editorial-card--studio"
                data-panel-slide
              >
                <div
                  className="card-scene card-scene--studio"
                  style={{
                    backgroundImage: `linear-gradient(140deg, rgba(86, 102, 74, 0.66) 0%, rgba(100, 115, 84, 0.6) 48%, rgba(191, 151, 118, 0.44) 48%, rgba(191, 151, 118, 0.52) 100%), url("${photos.ceramics}")`,
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
                    Our visual language is shaped by still-life composition:
                    clear focal points, generous negative space, and materials
                    that invite a second look.
                  </p>
                </div>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article
                className="editorial-card editorial-card--note"
                data-panel-slide
              >
                <span className="panel-index">02</span>
                <span className="framed-tag">House note</span>
                <PremiumMedia
                  className="editorial-card__thumb"
                  src={photos.windowPlant}
                  alt=""
                  ratio="landscape"
                  sizes="(max-width: 800px) 100vw, 240px"
                />
                <p>
                  We favour slower pacing over excess. Images are given room to
                  breathe, and words arrive as measured notes rather than noise.
                </p>
              </article>
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* ─── PHILOSOPHY ─── */}
        <section className="story-section story-section--text-led section-shell" id="philosophy">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Philosophy
              </p>
              <TextReveal
                text="Three principles guide the entire experience."
                delay={0.1}
              />
              <p className="section-copy">
                Our philosophy is simple: care should feel grounded, beautiful,
                and unforced. The house moves in calm gestures, natural texture,
                and a sense of quiet abundance.
              </p>
            </div>
          </Reveal>

          <div className="philosophy-stage" data-philosophy-pin>
            <div className="philosophy-frames" aria-hidden="true">
              <div
                className="philosophy-frame philosophy-frame--one"
                style={{
                  backgroundImage: `linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04)), url("${photos.leafShadowWall}")`,
                }}
              />
              <span className="philosophy-frame philosophy-frame--two" />
              <div
                className="philosophy-frame philosophy-frame--three"
                style={{
                  backgroundImage: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)), url("${photos.afternoonRoom}")`,
                }}
              />
            </div>
            <StaggerChildren className="philosophy-grid" stagger={0.1}>
              {principles.map((item) => (
                <StaggerItem key={item.index}>
                  <article
                    className="principle-card"
                    data-panel-slide
                  >
                    <span className="panel-index">{item.index}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                </StaggerItem>
              ))}
              <StaggerItem>
                <article
                  className="principle-card principle-card--quote"
                  data-panel-slide
                >
                  <span className="framed-tag">Editorial rule</span>
                  <p className="principle-quote">
                    Let stillness carry part of the ritual.
                  </p>
                </article>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* ─── INGREDIENTS ─── */}
        <section className="story-section story-section--image-led section-shell" id="ingredients">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <div className="ingredients-shell">
            <Reveal className="section-heading">
              <div data-reveal>
                <p className="eyebrow">
                  <span className="eyebrow__dot" aria-hidden="true" />
                  Ingredients
                </p>
                <TextReveal
                  text="The material palette begins with plants that hold emotion."
                  delay={0.1}
                />
                <p className="section-copy">
                  Each formula begins with a plant chosen not only for benefit,
                  but for character. Together these botanicals define the tone,
                  scent memory, and emotional temperature of the collection.
                </p>
              </div>
            </Reveal>

            <StaggerChildren className="ingredient-grid" stagger={0.1}>
              {ingredients.map((item) => (
                <StaggerItem key={item.index}>
                  <article
                    className="ingredient-card"
                    data-panel-slide
                    style={{
                      backgroundImage: `linear-gradient(155deg, rgba(86, 99, 72, 0.78), rgba(88, 72, 57, 0.54)), url("${item.photo}")`,
                    }}
                    >
                    <span className="panel-index">{item.index}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                </StaggerItem>
              ))}
              <StaggerItem>
                <article className="ingredient-feature" data-panel-slide>
                  <PremiumMedia
                    className="ingredient-feature__image"
                    src={photos.herbJarMacro}
                    alt="Close-up herb and vessel study used for the ingredient palette."
                    ratio="hero"
                    sizes="(max-width: 1080px) 100vw, 36vw"
                  />
                  <div className="ingredient-feature__copy">
                    <span className="framed-tag">Palette study</span>
                    <h3>Each botanical changes the room around it.</h3>
                    <p>
                      We think of ingredients spatially. A root can deepen the
                      room, a flower can lift its air, and a leaf can sharpen
                      the edge of calm.
                    </p>
                  </div>
                </article>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* ─── RITUAL STORY ─── */}
        <section className="story-section story-section--cinematic section-shell" id="ritual-story">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Signature Scene
              </p>
              <TextReveal
                text="A ritual story told through pinned botanical layers."
                delay={0.1}
              />
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
                  backgroundImage: `linear-gradient(rgba(244, 237, 227, 0.08), rgba(244, 237, 227, 0.08)), url("${photos.heroStillLife}")`,
                }}
              />
              <div className="ritual-layer ritual-layer--leaf-left" data-ritual-layer="1" />
              <div className="ritual-layer ritual-layer--leaf-right" data-ritual-layer="2" />
              <div
                className="ritual-layer ritual-layer--bottle"
                data-ritual-layer="3"
                style={{
                  backgroundImage: `linear-gradient(160deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02)), url("${photos.perfumeBottle}")`,
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

        {/* ─── PRODUCTS ─── */}
        <section className="story-section story-section--split section-shell" id="products">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Products &amp; Services
              </p>
              <TextReveal
                text="Offerings presented as chapters of a complete ritual life."
                delay={0.1}
              />
              <p className="section-copy">
                Our offerings are designed to live together: what is worn on the
                skin, steeped into the evening, and felt in the room all belong
                to one continuous ritual language.
              </p>
            </div>
          </Reveal>

          <StaggerChildren className="product-grid" stagger={0.12}>
            {products.map((item) => (
              <StaggerItem key={item.index}>
                <article
                  className={`product-card${item.large ? " product-card--large" : ""}`}
                  data-panel-slide
                >
                  <PremiumMedia
                    className="product-card__media"
                    src={item.photo}
                    alt={`${item.title} visual still life`}
                    ratio={item.large ? "hero" : "landscape"}
                    sizes="(max-width: 1080px) 100vw, 28vw"
                  />
                  <span className="panel-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </StaggerItem>
            ))}
            <StaggerItem>
              <article className="product-card product-card--frame" data-panel-slide>
                <span className="framed-tag">Presentation</span>
                <p className="product-frame-copy">
                  Blends, consultation, and spatial styling are composed as one
                  house signature rather than separate services.
                </p>
                <div className="product-micro-gallery" aria-hidden="true">
                  <PremiumMedia
                    src={photos.perfumeSheet}
                    alt=""
                    ratio="thumb"
                    sizes="120px"
                  />
                  <PremiumMedia
                    src={photos.ceramics}
                    alt=""
                    ratio="thumb"
                    sizes="120px"
                  />
                  <PremiumMedia
                    src={photos.plantShadow}
                    alt=""
                    ratio="thumb"
                    sizes="120px"
                  />
                </div>
              </article>
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* ─── SECOND MARQUEE ─── */}
        <div className="marquee-strip marquee-strip--reverse" aria-hidden="true">
          <div className="marquee-track marquee-track--reverse">
            {[...Array(2)].map((_, i) => (
              <div className="marquee-content" key={i}>
                <span>Tulsi</span>
                <span className="marquee-dot">◆</span>
                <span>Vetiver</span>
                <span className="marquee-dot">◆</span>
                <span>Neroli</span>
                <span className="marquee-dot">◆</span>
                <span>Ashwagandha</span>
                <span className="marquee-dot">◆</span>
                <span>Cedarwood</span>
                <span className="marquee-dot">◆</span>
                <span>Sandalwood</span>
                <span className="marquee-dot">◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── GALLERY ─── */}
        <section className="story-section story-section--image-led section-shell" id="gallery">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Gallery
              </p>
              <TextReveal
                text="An editorial archive of still life, shadow, and ritual."
                delay={0.1}
              />
              <p className="section-copy">
                Gathered like pages from the atelier journal, these images move
                from one dominant still life into quieter object studies, wider
                room notes, and smaller details that let the atmosphere linger.
              </p>
            </div>
          </Reveal>

          <StaggerChildren className="gallery-grid" stagger={0.08}>
            {galleryItems.map((item) => (
              <StaggerItem key={item.caption}>
                <figure className={item.className} data-panel-slide>
                  <PremiumMedia
                    className={item.sceneClass}
                    src={item.photo}
                    alt={item.caption}
                    ratio={
                      item.className.includes("gallery-card--tall")
                        ? "hero"
                        : item.className.includes("gallery-card--portrait")
                          ? "portrait"
                          : item.className.includes("gallery-card--wide")
                            ? "wide"
                            : "landscape"
                    }
                    sizes="(max-width: 800px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  >
                    <span className="gallery-scene__tag">{item.tag}</span>
                  </PremiumMedia>
                  <figcaption>
                    <span className="gallery-card__index">
                      {String(galleryItems.indexOf(item) + 1).padStart(2, "0")}
                    </span>
                    <span>{item.caption}</span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
            <StaggerItem>
              <article className="gallery-caption-card" data-panel-slide>
                <span className="framed-tag">Gallery note</span>
                <p>
                  One commanding still life leads the sequence, followed by a
                  portrait study, a wider cinematic frame, and a few quieter
                  crops that let texture and light finish the story.
                </p>
                <div className="gallery-caption-card__stack" aria-hidden="true">
                  <PremiumMedia
                    src={photos.heroStillLife}
                    alt=""
                    ratio="thumb"
                    sizes="160px"
                  />
                  <PremiumMedia
                    src={photos.perfumeSheet}
                    alt=""
                    ratio="thumb"
                    sizes="160px"
                  />
                </div>
              </article>
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="story-section story-section--text-led section-shell" id="testimonials">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <Reveal className="section-heading">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Testimonials
              </p>
              <TextReveal
                text="Voices that match the softness and confidence of the brand."
                delay={0.1}
              />
              <p className="section-copy">
                Notes from clients, collaborators, and guests who have lived
                with the house and carried its rituals into their own spaces.
              </p>
            </div>
          </Reveal>

          <TestimonialsCarousel items={testimonials} />
        </section>

        {/* ─── CONTACT ─── */}
        <section className="story-section story-section--final story-section--conversion section-shell" id="contact">
          <div className="section-divider" aria-hidden="true">
            <span />
            <span className="section-divider__leaf" />
            <span />
          </div>
          <div
            className="contact-shell contact-shell--atmosphere"
            data-reveal
            data-panel-slide
            style={{
              backgroundImage: `linear-gradient(145deg, rgba(255, 251, 246, 0.8), rgba(233, 224, 211, 0.58)), url("${photos.windowPlant}")`,
            }}
          >
            <div className="contact-atmosphere" aria-hidden="true">
              <span className="contact-atmosphere__wash" />
              <span className="contact-atmosphere__orb" />
            </div>
            <div className="contact-copy">
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Inquiry
              </p>
              <h2>Bring the house into a private ritual, boutique shelf, or hospitality space.</h2>
              <p className="section-copy">
                We welcome inquiries from people, boutiques, and hospitality
                spaces that want ritual, fragrance, and visual atmosphere to
                feel considered from the first impression to the final detail.
              </p>
              <div className="contact-actions">
                <a className="btn btn--primary" href="mailto:hello@herbsatelier.com">
                  <span className="btn__text">Begin an inquiry</span>
                  <span className="btn__shine" aria-hidden="true" />
                </a>
              </div>
              <div className="contact-photo-row" aria-hidden="true">
                <PremiumMedia
                  src={photos.perfumeBottle}
                  alt=""
                  ratio="thumb"
                  sizes="(max-width: 800px) 120px, 180px"
                />
                <PremiumMedia
                  src={photos.ceramics}
                  alt=""
                  ratio="thumb"
                  sizes="(max-width: 800px) 120px, 180px"
                />
                <PremiumMedia
                  src={photos.leafShadowWall}
                  alt=""
                  ratio="thumb"
                  sizes="(max-width: 800px) 120px, 180px"
                />
              </div>
            </div>

            <div className="contact-panel">
              <div>
                <span className="mini-label">Studio inquiries</span>
                <a href="mailto:hello@herbsatelier.com">hello@herbsatelier.com</a>
              </div>
              <div>
                <span className="mini-label">Availability</span>
                <p>Private commissions, boutique placements, and spatial styling.</p>
              </div>
              <div>
                <span className="mini-label">Based in</span>
                <p>
                  Kochi, India. Working with select partners worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="site-footer section-shell">
        <div className="footer-brand">
          <span className="footer-brand__icon" aria-hidden="true">✦</span>
          <span className="footer-brand__name">Herbs Atelier</span>
        </div>
        <p className="footer-tagline">Botanical fragrance, ritual objects, and atmospheric spaces composed with restraint.</p>
        <div className="footer-links">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Herbs Atelier.</p>
      </footer>
    </>
  );
}
