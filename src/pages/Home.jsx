import '../App.css'
import FAQ from '../components/Faq'

function Home() {
  return (
    <div className="app">
      {/* Navbar Section */}
      <nav className="navbar-section">
        <div className="navbar-container">
          <div className="logo-nav-group">
            <div className="logo">PROTEGA</div>
            <div className="nav-links">
              <a href="#merchants">FOR MERCHANTS</a>
              <a href="#customers">FOR CUSTOMERS</a>
              <a href="#login">LOGIN</a>
            </div>
          </div>
          <div className="header-buttons">
            <button className="btn-outline">File a Claim</button>
            <button className="btn-outline">Schedule a Demo</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h3 className="hero-title">IZICare Plan.</h3>
              <p className="hero-tagline">Power up your journey with IZICart Care Plan</p>
            </div>
            <div className="hero-image-container">
              <div className="background-text">ONE</div>
              {/* Hero Image - Replace with your image at: src/assets/images/hero-image.jpg */}
              <img 
                src="/images/hero-image.jpg" 
                alt="Hero" 
                className="hero-main-image" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="logo-section">
        <div className="logo-container">
          {/* IZI Logo - Replace with your image at: src/assets/images/izi-logo.png */}
          <img 
            src="/images/izi-logo.png" 
            alt="IZI Logo" 
            className="brand-logo-img" 
          />
          <div className="logo-divider"></div>
          {/* PROTEGA Logo - Replace with your image at: src/assets/images/protega-logo.png */}
          <img 
            src="/images/protega-logo.png" 
            alt="PROTEGA Logo" 
            className="brand-logo-img" 
          />
        </div>
      </section>

      {/* Accidental Damage Protection Section */}
      {/* <section className="protection-section">
        <h2 className="protection-title">Accidental Damage Protection</h2>
        <div className="protection-grid">
          <div className="protection-card">
          <img src="images/protection-physical-damage.jpg" alt="Physical Damage" />
            <p className="protection-description">
              Accidental physical damage drops, falls, collisional causing cracks, breakage, or malfunction
            </p>
          </div>
          
          <div className="protection-card">
          <img src="/images/protection-liquid-damage.jpg" alt="Liquid Damage" />

            <p className="protection-description">
              Accidental liquid damage from single-incident exposure (splashes/spills)
            </p>
          </div>
          
          <div className="protection-card">
          <img src="/images/protection-impact-damage.jpg" alt="Liquid Damage" />

            <p className="protection-description">
              Impact damage to lenses, gimbals, motors or attachments due to sudden shock
            </p>
          </div>
          
          <div className="protection-card">
          <img src="/images/protection-wearable-damage.jpg" alt="Liquid Damage" />

            <p className="protection-description">
              Damage to microphones, lights & wearables due to accidental impact
            </p>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">You depend on your product, keep it safe for the long-haul.</h2>
            <p className="cta-description">
              Peace of mind shouldn't end when your warranty does. Thanks to the IZICart Care Plan, it doesn't have to. You'll enjoy protection beyond your manufacturer's warranty
            </p>
          </div>
          <div className="cta-image-container">
          <img src="/images/cta-camera.jpg" alt="Liquid Damage" />

          </div>
        </div>
      </section>

      {/* Protection Simple Section */}
      <section className="protection-simple-section">
        <div className="protection-simple-container">
          <h2 className="protection-simple-title">Protection made simple, coverage made strong</h2>
          <div className="protection-feature">
            <span className="checkmark">✓</span>
            <p className="feature-text">Accidental Damage Coverage: from the date of plan purchase, it covers accidental damage from drops, spills, and pets.</p>
          </div>
          <h3 className="claims-title">File claims, hassle-free.</h3>
          <p className="claims-description">
            Filing a claim is quick and effortless. Just submit your request online, and our team will guide you through every step while keeping you updated until your issue is fully resolved.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="how-it-works-title">How it works</h2>
          <div className="how-it-works-content">
            <div className="how-it-works-text">
              <h3 className="easy-claims-title">Easy claims, great service</h3>
              <p className="easy-claims-description">
                Filing a claim is simple. They'll process your claim in minutes and once approved, they'll mail you details on your replacement.
              </p>
              <button className="start-claim-btn">Start a Claim</button>
            </div>
            <div className="how-it-works-image">
              {/* Phone Hand Image - Replace with your image at: src/assets/images/hand-phone.jpg */}
              <img 
                src="/images/hand-phone.jpg" 
                alt="Hand holding smartphone" 
                className="hand-phone-image" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="how-to-buy-section">
        <div className="how-to-buy-container">
          <h2 className="how-to-buy-title">How to buy the IZICart Care Plan ?</h2>
          <p className="how-to-buy-description">
            You can add IZICart Care to your cart when you buy a IZICart products on https://www.izicart.com/ Product owners who are eligible for a IZICart Care Plan can find an offer in the IZICart's website.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

export default Home

