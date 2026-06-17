export default function Hero() {
  return (
    <header className="hero" id="top">
      <svg className="baton" viewBox="0 0 520 520" fill="none" aria-hidden="true">
        <g stroke="#0E5C55" strokeWidth="1.1" opacity="0.55">
          <path d="M40 470 C 180 360, 300 360, 470 70" />
          <path d="M40 470 C 200 380, 320 380, 470 130" />
          <path d="M40 470 C 220 400, 340 400, 470 190" />
          <path d="M40 470 C 240 420, 360 420, 470 250" />
        </g>
        <circle cx="470" cy="70" r="4.5" fill="#A9803A" />
      </svg>
      <div className="wrap">
        <p className="eyebrow rev">Product Design Leadership</p>
        <h1 className="rev">
          I bring clarity to complex,
          <br />
          cross-team design —
          <br />
          and keep it <em>human</em>.
        </h1>
        <p className="lede rev">
          Senior Manager of Product Design at ServiceNow. Fifteen years turning ambiguity into
          shipped experiences, leading designers across business units and time zones, and building
          teams that feel safe enough to do their best work.
        </p>
        <div className="hero-meta rev">
          <span>
            <span className="dot" />
            Sr. Manager, Product Design · ServiceNow
          </span>
          <span>
            <span className="dot" />
            ITSM &amp; AI-native experiences
          </span>
          <span>
            <span className="dot" />
            California
          </span>
        </div>
        <div className="hero-cta rev">
          <a className="btn btn-solid" href="#work">
            See the work
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/adamarmstead/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
