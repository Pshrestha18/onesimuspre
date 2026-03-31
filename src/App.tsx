import React from "react";
import VideoModal from "./components/VideoModal";

import heroImg from "./assets/DSC07548.jpeg";
import g1 from "./assets/DSC09149.jpeg";
import g2 from "./assets/DSC09427.jpg";
import g3 from "./assets/IMG_3206-Enhanced-NR.jpg";
import g4 from "./assets/Screenshot-2025-06-14-at-1.14.18-AM.jpg";
import exodusCover from "./assets/exodus-presave.png";
import aboutPhoto from "./assets/about-photo.jpg";
import shopTabsPhoto from "./assets/shop-tabs-enhanced.jpg";

/**
 * Sources (your existing site)
 * - pagesdemos.netlify.app (home/about/contact/music/media)
 *
 * Customize here if anything changes.
 */
const ARTIST = {
  name: "Onesimus Thapa",
  tagline: "",
  city: "Toronto, Canada",

  email: "Onesimusthapa860@gmail.com",

  instagramHandle: "@anisimusthapa",
  instagramUrl: "https://www.instagram.com/anisimusthapa/",

  youtubeUrl: "https://www.youtube.com/@OnesimusThapa",
  spotifyArtistUrl: "https://open.spotify.com/artist/1OiTeBlJOR5FQNtwOJzOZ5?si=ymIcZZ0iSZGtSQMzzeBNJQ",
  appleMusicUrl: "https://music.apple.com/us/artist/onesimus-thapa/1523139664",

  supportUrl: "https://drive.google.com/drive/folders/1cmhAemz39SA79_azwHSn-KLcmn-lyB5B",
  bandcampEseosaUrl: "https://onesimus860.bandcamp.com/track/eseosa",

  preSaveUrl: "https://show.co/VaE3fDF",

  exodusSpotifyUrl:
    "https://open.spotify.com/track/6YThzLVsBLdMiMXU1YNQeE?si=a71ebfe47fa9443c",

  exodusSpotifyEmbedUrl:
    "https://open.spotify.com/embed/track/6YThzLVsBLdMiMXU1YNQeE?utm_source=generator",

  tabsBundleUrl:
    "https://drive.google.com/drive/folders/1cmhAemz39SA79_azwHSn-KLcmn-lyB5B",

  paypalUrl: "https://www.paypal.me/anisimusthapa",
};

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

const gallery: GalleryItem[] = [
  { src: g3, alt: "Studio performance" },
  { src: g4, alt: "Stage shot" },
  { src: g2, alt: "By the lake with guitar" },
  { src: g1, alt: "Pedalboard detail" },
];

type Release = {
  title: string;
  artists: string;
  year: string;
  blurb: string;
  listenUrl: string;
};

const releases: Release[] = [
  {
    title: "EXODUS",
    artists: "Onesimus Thapa, Angel Subba",
    year: "2026",
    blurb: "",
    listenUrl: ARTIST.exodusSpotifyUrl,
  },
  {
    title: "ESEOSA",
    artists: "Onesimus Thapa, Angel Subba",
    year: "2025",
    blurb:
      "Progressive instrumental with shifting rhythms and layered textures.",
    listenUrl: ARTIST.spotifyArtistUrl,
  },
  {
    title: "Reminiscenes",
    artists: "Onesimus Thapa, Angel Subba",
    year: "2023",
    blurb: "Melodic instrumental driven by heavy riffs and dynamic transitions.",
    listenUrl: ARTIST.spotifyArtistUrl,
  },
  {
    title: "Joy",
    artists: "delayed.blu, Onesimus Thapa",
    year: "2024",
    blurb: "Collaborative track blending styles with a modern melodic focus.",
    listenUrl: ARTIST.spotifyArtistUrl,
  },
  {
    title: "Apura Vakya",
    artists: "Rohan Magar, Onesimus Thapa",
    year: "2024",
    blurb: "Produced by Onesimus Thapa, in collaboration with singer-songwriter Rohan Magar.",
    listenUrl: ARTIST.spotifyArtistUrl,
  },
];

type Video = {
  title: string;
  published: string;
  youtubeId: string;
};

const videos: Video[] = [
  {
    title: "ESEOSA - Onesimus Thapa & Angel Subba | Official Visualizer",
    published: "Aug 17, 2025",
    youtubeId: "7BgPeRmRhFE",
  },
  {
    title: "My Dream Guitar || Strandberg Boden",
    published: "Jul 18, 2024",
    youtubeId: "1mlfBOV9eyQ",
  },
  {
    title: "UNPROCESSED | GuitarSolo Contest",
    published: "Oct 15, 2023",
    youtubeId: "rbdkmyJnGUY",
  },
  {
    title: "Reminiscences",
    published: "Aug 22, 2023",
    youtubeId: "Jj_vxUeZLHU",
  },
  {
    title: "#thevola2024solocompetition",
    published: "Jun 10, 2024",
    youtubeId: "OHAshnmI-QE",
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type ThemeMode = "dark" | "light";

function getInitialTheme(): ThemeMode {
  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(mode: ThemeMode) {
  document.documentElement.setAttribute("data-theme", mode);
}



function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42l9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
      />
    </svg>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

function LessonsForm({ toEmail }: { toEmail: string }) {
  const [name, setName] = React.useState("");
  const [fromEmail, setFromEmail] = React.useState("");
  const [topic, setTopic] = React.useState("Lessons inquiry");
  const [message, setMessage] = React.useState("");

  function send() {
    const subject = `${topic} — ${name || "Inquiry"}`;
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${fromEmail || "-"}`,
      "",
      message || "(No message)",
    ].join("\n");

    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
    >
      <div className="field">
        <label className="small">Name</label>
        <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      </div>

      <div className="field">
        <label className="small">Your email</label>
        <input
          className="input"
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          placeholder="you@example.com"
          type="email"
        />
      </div>

      <div className="field">
        <label className="small">Topic</label>
        <input className="input" value={topic} onChange={(e) => setTopic(e.target.value)} />
      </div>

      <div className="field">
        <label className="small">Message</label>
        <textarea
          className="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me what you want to work on (goals, experience level, songs, etc.)"
        />
      </div>

      <button className="btn btnPrimary" type="submit">
        Send inquiry
      </button>
    </form>
  );
}

export default function App() {
React.useEffect(() => {
  const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("isVisible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) (e.target as HTMLElement).classList.add("isVisible");
      }
    },
    { threshold: 0.12, rootMargin: "60px" }
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}, []);

  React.useEffect(() => {
    try { applyTheme(getInitialTheme()); } catch { /* ignore */ }
  }, []);

  const [videoOpen, setVideoOpen] = React.useState<Video | null>(null);

  return (
    <>
      <header className="nav">
        <div className="container">
          <div className="navInner">
            <a
              className="brand"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("top");
              }}
              aria-label="Home"
            >
              <span className="dot" aria-hidden="true" />
              <span>{ARTIST.name}</span>
            </a>

            <nav className="navLinks" aria-label="Site">
              <a href="#music" onClick={(e) => (e.preventDefault(), scrollToId("music"))}>
                Music
              </a>
              <a href="#shop" onClick={(e) => (e.preventDefault(), scrollToId("shop"))}>
                Shop
              </a>
              <a href="#releases" onClick={(e) => (e.preventDefault(), scrollToId("releases"))}>
                Releases
              </a>
              <a href="#media" onClick={(e) => (e.preventDefault(), scrollToId("media"))}>
                Media
              </a>
              <a href="#lessons" onClick={(e) => (e.preventDefault(), scrollToId("lessons"))}>
                Lessons
              </a>
              <a href="#about" onClick={(e) => (e.preventDefault(), scrollToId("about"))}>
                About me
              </a>
              <a href="#contact" onClick={(e) => (e.preventDefault(), scrollToId("contact"))}>
                Connect
              </a>
            </nav>

            <div className="ctaRow">
              <a className="btn btnPrimary" href={ARTIST.spotifyArtistUrl} target="_blank" rel="noreferrer">
                Listen <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="container hero">
          <div>
            <h1 className="hTitle">
              {ARTIST.name}
              <span className="tagline">{ARTIST.tagline}</span>
            </h1>


            <div className="ctaRow">
              <a className="btn btnPrimary" href={ARTIST.spotifyArtistUrl} target="_blank" rel="noreferrer">
                Spotify <ExternalIcon />
              </a>
              <a className="btn" href={ARTIST.bandcampEseosaUrl} target="_blank" rel="noreferrer">
                Bandcamp <ExternalIcon />
              </a>
              <a className="btn" href={ARTIST.exodusSpotifyUrl} target="_blank" rel="noreferrer">
                New-Release <ExternalIcon />
              </a>
              <button className="btn" onClick={() => scrollToId("contact")}>
                Lessons / Contact
              </button>
            </div>

            <div className="presaveCard card">
              <img src={exodusCover} alt="EXODUS artwork" className="presaveArtwork" />
              <div className="presaveCopy">
                <div className="small">New release</div>
                <h3 className="presaveTitle">EXODUS</h3>
                <p className="presaveText">Now streaming on Spotify. Listen to the latest release in collaboration with Angel Subba.</p>
                <a className="btn btnPrimary" href={ARTIST.exodusSpotifyUrl} target="_blank" rel="noreferrer">
                  Listen to EXODUS <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="pills" aria-label="Genres">
              <span className="pill">Djent</span>
              <span className="pill">Progressive Rock</span>
              <span className="pill">Post-hardcore</span>
              <span className="pill">Math Rock</span>
            </div>
          </div>

          <div className="card heroMedia" aria-label="Hero image">
            <img src={heroImg} alt="Performance portrait" />
            <div className="heroOverlay" />
            <div className="heroCaption">
              <div>
                <div style={{ fontWeight: 650 }}>Based in {ARTIST.city}</div>
                <div className="small">Live • Studio • Collaborations</div>
              </div>
              <div className="small">Scroll ↓</div>
            </div>
          </div>
        </section>

        {/* MUSIC */}
        <section id="music" className="section reveal">
          <div className="container">
            <div className="sectionTop">
              <div>
                <h2 className="h2">Music</h2>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn" href={ARTIST.appleMusicUrl} target="_blank" rel="noreferrer">
                  Apple Music <ExternalIcon />
                </a>
                <a className="btn" href={ARTIST.spotifyArtistUrl} target="_blank" rel="noreferrer">
                  Spotify <ExternalIcon />
                </a>
                <a className="btn" href={ARTIST.bandcampEseosaUrl} target="_blank" rel="noreferrer">
                  Eseosa on Bandcamp <ExternalIcon />
                </a>
                <a className="btn" href={ARTIST.exodusSpotifyUrl} target="_blank" rel="noreferrer">
                  New release <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="grid">
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650, marginBottom: 10 }}>Spotify</div>
                <div className="spotifyPair">
                  <iframe
                   title="EXODUS - Spotify"
                   className="spotifyEmbed"
                   src={ARTIST.exodusSpotifyEmbedUrl}
                   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                   loading="lazy"
                   />
                  <iframe
                    title="ESEOSA — Spotify"
                    className="spotifyEmbed"
                    src="https://open.spotify.com/embed/track/6HwFWBdIkbZ2BKWWrp3Qfn?utm_source=generator"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                  <iframe
                    title="Reminiscenes — Spotify"
                    className="spotifyEmbed"
                    src="https://open.spotify.com/embed/track/2LaVO3JVzU3kuDHJkwJVYi?utm_source=generator"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>

              <Card>
                <div style={{ padding: 16 }}>
                  <div style={{ fontWeight: 650, marginBottom: 10 }}>Quick links</div>
                  <div style={{ display: "grid", gap: 10 }}>
                    <a className="btn" href={ARTIST.youtubeUrl} target="_blank" rel="noreferrer">
                      YouTube <ExternalIcon />
                    </a>
                    <a className="btn" href={ARTIST.instagramUrl} target="_blank" rel="noreferrer">
                      Instagram <ExternalIcon />
                    </a>
                    <a className="btn" href={ARTIST.bandcampEseosaUrl} target="_blank" rel="noreferrer">
                      Bandcamp <ExternalIcon />
                    </a>
                    <a className="btn" href={ARTIST.exodusSpotifyUrl} target="_blank" rel="noreferrer">
                       New release <ExternalIcon />
                    </a>
                  </div>

                  <div style={{ marginTop: 14, color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
                    Tabs, lessons, and music links are all available below.
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SHOP */}
        <section id="shop" className="section reveal">
          <div className="container">
            <div className="sectionTop">
              <div>
                <h2 className="h2">Shop</h2>
                <p>Get the complete Eseosa Tabs and Backing Track Bundle, including Guitar Pro files and PDF notation.</p>
              </div>
            </div>

            <div className="grid">
              <Card>
                <div className="shopCard">
                  <div className="shopImageWrap">
                    <img src={shopTabsPhoto} alt="Sheet music preview for tabs bundle" className="shopImage" />
                  </div>
                  <div className="shopCopy">
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                      <div style={{ fontWeight: 700 }}>Eseosa Tabs and Backing Track Bundle</div>
                      <div className="pill" style={{ color: "var(--text)" }}>$3</div>
                    </div>
                    <div style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                      Includes Guitar Pro files, PDF notation, and backing tracks for digital delivery.
                    </div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <a className="btn btnPrimary" href={ARTIST.paypalUrl} target="_blank" rel="noreferrer">
                        Buy with PayPal <ExternalIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* RELEASES */}
        <section id="releases" className="section reveal">
          <div className="container">
            
            <div className="sectionTop">
              <div>
                <h2 className="h2">Releases</h2>
                <p>Selected discography + collaborations.</p>
              </div>
              <a className="btn" href={ARTIST.spotifyArtistUrl} target="_blank" rel="noreferrer">
                Full discography <ExternalIcon />
              </a>
            </div>

            <div
              className="gallery"
              style={{ gridTemplateColumns: "repeat(12, 1fr)", gap: 12 }}
              aria-label="Releases"
            >
              {releases.map((r) => (
                <div
                  key={r.title}
                  className="card"
                  style={{
                    gridColumn: "span 6",
                    padding: 16,
                    display: "grid",
                    gap: 8,
                    alignContent: "start",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div style={{ fontWeight: 700, letterSpacing: 0.2 }}>{r.title}</div>
                    <div className="small">{r.year}</div>
                  </div>
                  <div className="small" style={{ color: "var(--muted)", marginBottom: 6 }}>
                    {r.artists}
                  </div>
                  {r.blurb && (
                  <div style={{ color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>{r.blurb}</div>)}
                  <div style={{ marginTop: 6 }}>
                    <a className="btn btnPrimary" href={r.listenUrl} target="_blank" rel="noreferrer">
                      Listen <ExternalIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* VISUALS */}
        

{/* MEDIA */}
<section id="media" className="section reveal">
  <div className="container">
            
    <div className="sectionTop">
      <div>
        <h2 className="h2">Media</h2>
        <p>Featured videos — click to play.</p>
      </div>
      <a className="btn" href={ARTIST.youtubeUrl} target="_blank" rel="noreferrer">
        More on YouTube <ExternalIcon />
      </a>
    </div>

    <div className="videoGrid" role="list">
      {videos.map((v) => (
        <div
          key={v.youtubeId}
          className="videoCard"
          role="listitem"
          tabIndex={0}
          onClick={() => setVideoOpen(v)}
          onKeyDown={(e) => e.key === "Enter" && setVideoOpen(v)}
          aria-label={v.title}
        >
          <img
            className="videoThumb"
            src={`https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`}
            alt={v.title}
            loading="lazy"
            onError={(e) => {
              // fallback if maxres doesn't exist
              (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`;
            }}
          />
          <div className="videoMeta">
            <div className="videoTitle">{v.title}</div>
            <div className="small">Published: {v.published}</div>
            
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* ABOUT */}
        <section id="about" className="section reveal">
          <div className="container">
            
            <div className="sectionTop">
              <div>
                <h2 className="h2">About Me</h2>
              </div>
            </div>

            <Card>
              <div className="aboutCard">
                <div className="aboutImageWrap">
                  <img src={aboutPhoto} alt="Onesimus Thapa portrait" className="aboutImage" />
                </div>
                <div className="aboutTextBlock">
                  <div style={{ fontWeight: 700 }}>Onesimus Thapa</div>

                  <p>
                    Onesimus Thapa is a Canadian guitarist blending progressive, djent, post-hardcore, and math rock influences into a refined modern sound. His music combines complex rhythmic ideas, ambient textures, and heavy progressive instrumentation to create compositions that are both technical and expressive.
                  </p>

                  <p>
                    Introduced to music at the age of 13 by his late father, Isaac Thapa, Onesimus developed a deep passion for guitar and composition, carrying that legacy forward through his work and artistic growth.
                  </p>

                  <p>
                    He holds a Bachelor of Arts in Music from Tyndale University and continues to evolve as a musician, tutor, and producer. Through his recordings, collaborations, and lessons, he aims to push creative boundaries while helping other musicians develop their own voice and technical ability.
                  </p>
                </div>
              </div>
            </Card>
            
          </div>
        </section>

{/* LESSONS */}
<section id="lessons" className="section reveal">
  <div className="container">
            
    <div className="sectionTop">
      <div>
        <h2 className="h2">Lessons</h2>
        <p>For lesson inquiries, please use the form below.</p>
      </div>
    </div>

    <div className="grid">
      <div className="card" style={{ padding: 18 }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>What you can book</div>
        <div style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: 12 }}>
          • Progressive metal and djent techniques<br />
          • Math rock phrasing and rhythm work<br />
          • Advanced guitar techniques<br />
          • Writing, tone, and arrangement
        </div>

        <div className="pills" aria-label="Lesson formats">
          <span className="pill">Online</span>
          <span className="pill">Advanced guitar</span>
          <span className="pill">Online lessons</span>
        </div>
      </div>

      <div className="card" style={{ padding: 18 }}>
        <div style={{ fontWeight: 700, marginBottom: 10 }}>Inquiry form</div>
        <LessonsForm toEmail={ARTIST.email} />
        <div className="small" style={{ marginTop: 10 }}>
          This opens your email app and sends directly to {ARTIST.email}.
        </div>
      </div>
    </div>
              
          </div>
</section>

        {/* CONNECT */}
        <section id="contact" className="section reveal">
          <div className="container">
            
            <div className="sectionTop">
              <div>
                <h2 className="h2">Connect</h2>
                <p>Collaborations, questions, bookings.</p>
              </div>
            </div>

            <div className="grid">
              <Card>
                <div style={{ padding: 18 }}>
                  <div style={{ fontWeight: 700, marginBottom: 10 }}>Email</div>
                  <a className="btn btnPrimary" href={`mailto:${ARTIST.email}`}>
                    {ARTIST.email}
                  </a>

                  <div style={{ height: 14 }} />

                  <div style={{ fontWeight: 700, marginBottom: 10 }}>Location</div>
                  <div className="small" style={{ color: "var(--muted)" }}>
                    Canada
                  </div>

                  <div style={{ height: 14 }} />

                  <div style={{ fontWeight: 700, marginBottom: 10 }}>Follow</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    <a className="btn" href={ARTIST.instagramUrl} target="_blank" rel="noreferrer">
                      Instagram <ExternalIcon />
                    </a>
                    <a className="btn" href={ARTIST.youtubeUrl} target="_blank" rel="noreferrer">
                      YouTube <ExternalIcon />
                    </a>
                    <a className="btn" href={ARTIST.spotifyArtistUrl} target="_blank" rel="noreferrer">
                      Spotify <ExternalIcon />
                    </a>
                    <a className="btn" href={ARTIST.appleMusicUrl} target="_blank" rel="noreferrer">
                      Apple Music <ExternalIcon />
                    </a>
                  </div>

                  <div style={{ marginTop: 14, color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
                    Tabs: Delivered digitally.<br />Lessons: Online lessons covering progressive metal, djent, math rock, and advanced guitar techniques.<br />Gear: Strandberg guitars, Neural DSP plugins and Quadcortex hardware for tone, Reaper for recording.
                  </div>
                </div>
              </Card>

              <Card>
                <div style={{ padding: 18, display: "grid", gap: 10 }}>
                  <div style={{ fontWeight: 700 }}>Support the Music</div>

                  <div className="small" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                    Support the music and explore the tabs bundle through the links on this site.
                  </div>

                  <a className="btn" href={ARTIST.tabsBundleUrl} target="_blank" rel="noreferrer">
                    Support the Music <ExternalIcon />
                  </a>
                </div>
              </Card>
            </div>
            
          </div>
        </section>

        <footer className="footer">
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div>© {new Date().getFullYear()} {ARTIST.name} • React + TS + Vite</div>
            <div className="small">Minimal portfolio</div>
          </div>
        </footer>
      </main>


      {videoOpen && (
        <VideoModal
          title={videoOpen.title}
          youtubeId={videoOpen.youtubeId}
          onClose={() => setVideoOpen(null)}
        />
      )}
    </>
  );
}
