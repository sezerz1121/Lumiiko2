import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Arrow = () => (
  <svg
    className="arrow"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
const Logo = () => (
  <svg className="logo-mark" width="96" height="20" viewBox="0 0 96 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Lumiiko">
    <path d="M4.104 16.056H9.48V19.224H-8.04663e-07V2.376H4.104V16.056ZM24.6615 5.832V19.224H20.5575V17.4C20.1415 17.992 19.5735 18.472 18.8535 18.84C18.1495 19.192 17.3655 19.368 16.5015 19.368C15.4775 19.368 14.5735 19.144 13.7895 18.696C13.0055 18.232 12.3975 17.568 11.9655 16.704C11.5335 15.84 11.3175 14.824 11.3175 13.656V5.832H15.3975V13.104C15.3975 14 15.6295 14.696 16.0935 15.192C16.5575 15.688 17.1815 15.936 17.9655 15.936C18.7655 15.936 19.3975 15.688 19.8615 15.192C20.3255 14.696 20.5575 14 20.5575 13.104V5.832H24.6615ZM44.6974 5.688C46.3614 5.688 47.6814 6.192 48.6574 7.2C49.6494 8.208 50.1454 9.608 50.1454 11.4V19.224H46.0654V11.952C46.0654 11.088 45.8334 10.424 45.3694 9.96C44.9214 9.48 44.2974 9.24 43.4974 9.24C42.6974 9.24 42.0654 9.48 41.6014 9.96C41.1534 10.424 40.9294 11.088 40.9294 11.952V19.224H36.8494V11.952C36.8494 11.088 36.6174 10.424 36.1534 9.96C35.7054 9.48 35.0814 9.24 34.2814 9.24C33.4814 9.24 32.8494 9.48 32.3854 9.96C31.9374 10.424 31.7134 11.088 31.7134 11.952V19.224H27.6094V5.832H31.7134V7.512C32.1294 6.952 32.6734 6.512 33.3454 6.192C34.0174 5.856 34.7774 5.688 35.6254 5.688C36.6334 5.688 37.5294 5.904 38.3134 6.336C39.1134 6.768 39.7374 7.384 40.1854 8.184C40.6494 7.448 41.2814 6.848 42.0814 6.384C42.8814 5.92 43.7534 5.688 44.6974 5.688ZM55.0796 4.44C54.3596 4.44 53.7676 4.232 53.3036 3.816C52.8556 3.384 52.6316 2.856 52.6316 2.232C52.6316 1.592 52.8556 1.064 53.3036 0.648C53.7676 0.216 54.3596 -4.76837e-07 55.0796 -4.76837e-07C55.7836 -4.76837e-07 56.3596 0.216 56.8076 0.648C57.2716 1.064 57.5036 1.592 57.5036 2.232C57.5036 2.856 57.2716 3.384 56.8076 3.816C56.3596 4.232 55.7836 4.44 55.0796 4.44ZM57.1196 5.832V19.224H53.0156V5.832H57.1196ZM62.1577 4.44C61.4377 4.44 60.8457 4.232 60.3817 3.816C59.9337 3.384 59.7097 2.856 59.7097 2.232C59.7097 1.592 59.9337 1.064 60.3817 0.648C60.8457 0.216 61.4377 -4.76837e-07 62.1577 -4.76837e-07C62.8617 -4.76837e-07 63.4377 0.216 63.8857 0.648C64.3497 1.064 64.5817 1.592 64.5817 2.232C64.5817 2.856 64.3497 3.384 63.8857 3.816C63.4377 4.232 62.8617 4.44 62.1577 4.44ZM64.1977 5.832V19.224H60.0937V5.832H64.1977ZM75.3559 19.224L71.2759 13.608V19.224H67.1719V1.464H71.2759V11.28L75.3319 5.832H80.3959L74.8279 12.552L80.4439 19.224H75.3559ZM88.1038 19.416C86.7918 19.416 85.6078 19.136 84.5518 18.576C83.5118 18.016 82.6878 17.216 82.0798 16.176C81.4878 15.136 81.1918 13.92 81.1918 12.528C81.1918 11.152 81.4958 9.944 82.1038 8.904C82.7118 7.848 83.5438 7.04 84.5998 6.48C85.6558 5.92 86.8398 5.64 88.1518 5.64C89.4638 5.64 90.6478 5.92 91.7038 6.48C92.7598 7.04 93.5918 7.848 94.1998 8.904C94.8078 9.944 95.1118 11.152 95.1118 12.528C95.1118 13.904 94.7998 15.12 94.1758 16.176C93.5678 17.216 92.7278 18.016 91.6558 18.576C90.5998 19.136 89.4158 19.416 88.1038 19.416ZM88.1038 15.864C88.8878 15.864 89.5518 15.576 90.0958 15C90.6558 14.424 90.9358 13.6 90.9358 12.528C90.9358 11.456 90.6638 10.632 90.1198 10.056C89.5918 9.48 88.9358 9.192 88.1518 9.192C87.3518 9.192 86.6878 9.48 86.1598 10.056C85.6318 10.616 85.3678 11.44 85.3678 12.528C85.3678 13.6 85.6238 14.424 86.1358 15C86.6638 15.576 87.3198 15.864 88.1038 15.864Z" fill="#FB744F" />
  </svg>
);

function App() {
  const root = useRef(null);
  const [formStatus, setFormStatus] = useState("idle");

  const submitContact = async (event) => {
    event.preventDefault();
    setFormStatus("sending");
    const form = event.currentTarget;
    const details = Object.fromEntries(new FormData(form).entries());

    try {
      await axios.post(import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact", details);
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const holoHandlers = [];
    const ctx = gsap.context(() => {
      gsap.from(
        ".nav, .eyebrow, .hero-title > span, .hero-copy, .hero-actions, .hero-art",
        {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        },
      );
      gsap.utils.toArray(".reveal").forEach((el) =>
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        }),
      );
      gsap.utils.toArray(".metric strong").forEach((el) => {
        const value = el.dataset.value;
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: value,
            duration: 1.4,
            snap: { textContent: 1 },
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
            onUpdate() {
              if (value === "99")
                el.textContent = Math.round(el.textContent) + "%";
            },
          },
        );
      });
      gsap.to(".orb-one", {
        y: -25,
        x: 12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".orbit", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
      gsap.utils.toArray(".scroll-route-line").forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      });
      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;
      if (canHover) {
        gsap.utils
          .toArray(".project, .service-card, .window")
          .forEach((card) => {
          const move = (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            gsap.to(card, {
              rotateY: x * 11,
              rotateX: -y * 11,
              duration: 0.35,
              ease: "power2.out",
              transformPerspective: 900,
            });
            card.style.setProperty("--px", `${((x + 0.5) * 100).toFixed(1)}%`);
            card.style.setProperty("--py", `${((y + 0.5) * 100).toFixed(1)}%`);
            card.style.setProperty("--holo-opacity", "1");
          };
          const reset = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.65,
              ease: "power3.out",
            });
            card.style.setProperty("--holo-opacity", "0");
          };
          card.addEventListener("mousemove", move);
          card.addEventListener("mouseleave", reset);
          holoHandlers.push([card, move, reset]);
          });
      }
    }, root);
    return () => {
      holoHandlers.forEach(([card, move, reset]) => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", reset);
      });
      ctx.revert();
    };
  }, []);

  return (
    <main ref={root}>
      <svg
        className="scroll-ribbon ribbon-desktop"
        viewBox="0 0 1213 2509"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="scroll-route-line"
          d="M170.762 287.444C173.974 -89.3678 1715.18 105.758 881.761 478.444C48.3461 851.13 -165.594 1564.37 507.762 1139.44C1181.12 714.521 1288.47 1750.9 425.762 2197.44C-436.944 2643.99 571.762 1061.94 854.262 2424.94"
          stroke="#FB744F"
          strokeWidth="168"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="scroll-ribbon ribbon-mobile"
        viewBox="0 0 402 7918"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="scroll-route-line"
          d="M129 37.5095C129 37.5095 -134.5 992.009 238.5 520.009C611.5 48.0095 -177 1319.51 129 1048.51C435 777.509 494.5 2314.01 129 2023.01C-236.5 1732.01 181.5 3956.51 329 3281.51C476.5 2606.51 -6.00008 3376.51 140 3904.01C286 4431.51 -103.5 4352.51 140 4698.51C383.5 5044.51 -40.4998 5924.51 129 5870.51C298.5 5816.51 487.5 6313.51 170 6695.01C-147.5 7076.51 431 8167.51 314.5 7281.51C198 6395.51 129 7880.01 129 7880.01"
          stroke="#FB744F"
          strokeWidth="75"
          strokeLinecap="round"
        />
      </svg>
      <div className="grain" />
      <section className="hero section">
        <nav className="nav">
          <a href="#top" className="logo">
            <Logo />
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
          </div>
          <a className="button small" href="#contact">
            Let's talk <Arrow />
          </a>
        </nav>
        <div className="hero-grid" id="top">
          <div className="hero-content">
            <p className="eyebrow">
              <span /> Web design for ambitious local businesses
            </p>
            <h1 className="hero-title">
              <span>Websites that make</span>
              <span>
                your phone <em>ring.</em>
              </span>
            </h1>
            <p className="hero-copy">
              Your website should bring in customers while you run your business.
              We build fast, credible websites that get you found, earn trust,
              and turn more visits into calls and bookings.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Book a free strategy call <Arrow />
              </a>
              <a className="text-link" href="#work">
                Explore our work <span>↓</span>
              </a>
            </div>
            <div className="hero-note">
              <div className="avatars">
                <b>J</b>
                <b>M</b>
                <b>K</b>
                <b>+</b>
              </div>
              <span>
                Built for ambitious businesses across the U.S.
                <br />
                and around the world.
              </span>
            </div>
          </div>
          <div className="hero-art">
            <div className="orb orb-one" />
            <div className="orbit">
              <span>✦</span>
              <span>✦</span>
            </div>
            <div className="window">
              <div className="window-top">
                <i />
                <i />
                <i />
                <span>
                  lumii<span>ko</span>.com
                </span>
              </div>
              <div className="site-preview">
                <div className="preview-nav">
                  <b>
                    north<span>star</span>
                  </b>
                  <small>Menu &nbsp; About &nbsp; Contact</small>
                </div>
                <div className="preview-body">
                  <p>
                    Fine dining,
                    <br />
                    <em>made personal.</em>
                  </p>
                  <button>Reserve a table</button>
                  <div className="dish">✳</div>
                </div>
              </div>
            </div>
            <div className="floating-card">
              <span className="pulse" /> +38% more booking requests
            </div>
            <svg className="hero-line" viewBox="0 0 560 540" fill="none">
              <path
                d="M55 405C110 280 196 490 270 338C342 188 379 285 513 124"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 12"
              />
            </svg>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Trusted by businesses that care about how they show up.</span>
          <div>
            <b>HCWRLD</b>
            <b>reliant.</b>
            <b>shaakuntal</b>
          </div>
        </div>
      </section>
      <section className="intro section reveal">
        <p className="eyebrow">
          <span /> A website is your hardest-working employee
        </p>
        <div className="intro-row">
          <h2>
            Turn more searches
            <br />
            into <em>customers who choose you.</em>
          </h2>
          <p>
            We combine sharp strategy, memorable design, and technical know-how
            to create sites that don’t just sit there looking pretty. They earn
            their keep.
          </p>
        </div>
      </section>
      <section className="services section" id="services">
        <div className="section-head reveal">
          <p className="eyebrow">
            <span /> What we do
          </p>
          <h2>
            Everything your
            <br />
            <em>online presence needs.</em>
          </h2>
          <a className="text-link" href="#contact">
            See all services <Arrow />
          </a>
        </div>
        <div className="service-grid">
          {[
            "Website design",
            "Website redesign",
            "Local SEO",
            "Landing pages",
            "Speed optimization",
            "Care & maintenance",
          ].map((item, i) => (
            <article className="service-card reveal" key={item}>
              <div className="icon">{["✦", "◌", "⌁", "↗", "ϟ", "♡"][i]}</div>
              <span>0{i + 1}</span>
              <h3>{item}</h3>
              <p>
                {
                  [
                    "A home online that makes your business feel like the obvious choice.",
                    "An overdue glow-up for a site that no longer reflects your best work.",
                    "Be the answer when your best customers are searching nearby.",
                    "Focused pages with one job: turn interest into action.",
                    "Fast, frictionless experiences that keep customers moving.",
                    "A smart, steady hand to keep every detail working beautifully.",
                  ][i]
                }
              </p>
              <a href="#contact">
                <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="work section" id="work">
        <div className="section-head reveal">
          <p className="eyebrow">
            <span /> Selected work
          </p>
          <h2>
            Made to stand out.
            <br />
            <em>Built to bring people in.</em>
          </h2>
        </div>
        <div className="work-grid">
          <article className="project reveal">
            <div className="project-image cafe">
              <div className="fake-site">
                <b>HCWRLD</b>
                <p>
                  Made for the
                  <br />
                  world in motion.
                </p>
              </div>
            </div>
            <div className="project-meta">
              <div>
                <span>Commerce · Fashion</span>
                <h3>HCWRLD</h3>
              </div>
              <a href="https://www.hcwrld.in/shop" className="round" target="_blank" rel="noreferrer" aria-label="Visit HCWRLD">
                <Arrow />
              </a>
            </div>
          </article>
          <article className="project reveal">
            <div className="project-image dental">
              <div className="fake-site">
                <b>reliant.</b>
                <p>
                  Networks built
                  <br />
                  for business growth.
                </p>
              </div>
            </div>
            <div className="project-meta">
              <div>
                <span>B2B · United Kingdom</span>
                <h3>Reliant Networks</h3>
              </div>
              <a href="https://www.reliant-networks.co.uk" className="round" target="_blank" rel="noreferrer" aria-label="Visit Reliant Networks">
                <Arrow />
              </a>
            </div>
          </article>
          <article className="project reveal">
            <div className="project-image shaakuntal"><div className="fake-site"><b>shaakuntal</b><p>Timeless elegance,<br />crafted to shine.</p></div></div>
            <div className="project-meta"><div><span>Commerce · Handloom Sarees</span><h3>Shaakuntal</h3></div><a href="https://shaakuntal.com/" className="round" target="_blank" rel="noreferrer" aria-label="Visit Shaakuntal"><Arrow /></a></div>
          </article>
        </div>
        <div className="work-cta reveal">
          <p>
            See what a clearer, more compelling online presence could do for
            your business.
          </p>
          <a className="button dark" href="#contact">
            View all projects <Arrow />
          </a>
        </div>
      </section>
      <section className="proof">
        <div className="section metrics">
          <div className="metric reveal">
            <strong data-value="150">150+</strong>
            <span>projects launched</span>
          </div>
          <div className="metric reveal">
            <strong data-value="99">99%</strong>
            <span>mobile friendly</span>
          </div>
          <div className="metric reveal">
            <strong data-value="2">2s</strong>
            <span>target load time</span>
          </div>
          <div className="metric reveal">
            <strong data-value="100">100%</strong>
            <span>made for you</span>
          </div>
        </div>
      </section>
      <section className="process section" id="process">
        <div className="section-head reveal">
          <p className="eyebrow">
            <span /> How it works
          </p>
          <h2>
            A straightforward
            <br />
            <em>path to better.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            [
              "01",
              "Discover",
              "We get close to your business, your customers, and where you want to go.",
            ],
            [
              "02",
              "Design",
              "We turn the right strategy into a site your customers want to spend time with.",
            ],
            [
              "03",
              "Develop",
              "We build it lean, responsive, and ready to work hard from day one.",
            ],
            [
              "04",
              "Launch",
              "We put it out into the world—and keep making sure it does its job.",
            ],
          ].map((s) => (
            <article className="step reveal" key={s[0]}>
              <span>{s[0]}</span>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="cta" id="contact">
        <div className="cta-orb" />
        <p className="eyebrow">
          <span /> Your next customer is already searching
        </p>
        <h2>
          Let’s build a website
          <br />
          <em>that earns its keep.</em>
        </h2>
        <p className="cta-small">
          Tell us where your business is headed. We’ll help you find the
          clearest path to more qualified calls, bookings, and customers.
        </p>
        <form className="contact-form" onSubmit={submitContact}>
          <label>
            <span>Your name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            <span>Work email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>Business / website</span>
            <input name="business" type="text" autoComplete="organization" required />
          </label>
          <label className="project-details">
            <span>What would you like to improve?</span>
            <textarea name="message" rows="3" placeholder="More calls, a stronger brand, a faster website…" />
          </label>
          <button className="button dark" type="submit" disabled={formStatus === "sending"}>
            {formStatus === "sending" ? "Sending…" : "Get your free strategy call"} <Arrow />
          </button>
        </form>
        <p className="form-status" aria-live="polite">
          {formStatus === "success" && "Thanks—your request is on its way."}
          {formStatus === "error" && "We couldn’t send that just now. Please email studio@lumiiko.in."}
        </p>
        <div className="cta-contacts">
          <a href="mailto:studio@lumiiko.in">studio@lumiiko.in</a>
          <a href="tel:+919265856366">+91 92658 56366</a>
        </div>
      </section>
      <footer className="section">
        <a className="logo" href="#top">
          <Logo />
        </a>
        <p>© 2025 Lumiiko. U.S.-focused, globally available.</p>
        <div>
          <a href="mailto:studio@lumiiko.in">studio@lumiiko.in</a>
          <a href="tel:+919265856366">+91 92658 56366</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
