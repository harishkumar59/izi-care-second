import { useEffect } from 'react'
import '../App.css'

function TermsAndConditions() {
  // Scroll to top when component mounts
  useEffect(() => {
    // Scroll to top immediately when page loads
    window.scrollTo(0, 0)
    // Also try scrollIntoView for better browser compatibility
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <div className="terms-page-wrapper">
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

      {/* Main Content */}
      <div className="terms-content">
        <div className="terms-header">
          <h1 className="terms-main-title">Protega Accidental Damage Protection Plan</h1>
          <h2 className="terms-subtitle">Terms and Conditions</h2>
        </div>

        <div className="terms-body">
          {/* Section 1: Introduction */}
          <section className="terms-section">
            <h3 className="terms-section-title">1. Introduction</h3>
            <div className="terms-text">
              <p className="terms-numbered-item">
                <strong>1.</strong> The Protega x IZICART Product Protection (Accidental Damage from Handling, ADH) Plan safeguards eligible IZICART products from unforeseen physical damage arising during normal household use.
              </p>
              <p className="terms-numbered-item">
                <strong>2.</strong> This Plan is a service contract administered by Protega India Pvt. Ltd. on behalf of IZICART. It is not an insurance policy and does not extend or replace the manufacturer's standard warranty.
              </p>
              <p className="terms-numbered-item">
                <strong>3.</strong> The Plan covers accidental damage such as:
              </p>
              <ul className="terms-bullet-list">
                <li>Drops, falls, or collisions resulting in functional or structural damage.</li>
                <li>Screen or lens cracks due to impact.</li>
                <li>Gimbal or motor misalignment after impact.</li>
                <li>Liquid or moisture damage due to accidental exposure.</li>
                <li>Connector or internal component failure due to mishandling.</li>
              </ul>
              <p className="terms-numbered-item">
                <strong>4.</strong> Coverage begins on the date of delivery or activation (whichever is later) and is valid for 12 or 24 months as per the purchased plan.
              </p>
              <p className="terms-numbered-item">
                <strong>5.</strong> The Plan is applicable within India only and all claims are serviced via Protega's authorized repair network.
              </p>
              <p className="terms-numbered-item">
                <strong>6.</strong> A deductible of 10% of product value or ₹500 (whichever is lower) applies per approved claim.
              </p>
              <p className="terms-numbered-item">
                <strong>7.</strong> The Plan applies to IZICART products such as Cameras, Gimbals, Microphones, Audio Devices, Ring Lights, Smartwatches, Dash Cameras, and similar lifestyle gadgets intended for personal use.
              </p>
            </div>
          </section>

          {/* Section 2: Customer Responsibilities */}
          <section className="terms-section">
            <h3 className="terms-section-title">2. Customer Responsibilities</h3>
            <ul className="terms-bullet-list">
              <li>Retain proof of purchase, ADP certificate, and payment confirmation.</li>
              <li>Report incidents within 72 hours of occurrence with full details and evidence.</li>
              <li>Avoid unauthorized repairs or third-party service attempts.</li>
              <li>Follow manufacturer's maintenance and care guidelines.</li>
              <li>Remove or back up all personal data before service.</li>
              <li>Cooperate during inspection, pickup, and claim validation.</li>
            </ul>
          </section>

          {/* Section 3: How to File a Claim */}
          <section className="terms-section">
            <h3 className="terms-section-title">3. How to File a Claim</h3>
            <div className="terms-text">
              <p className="terms-numbered-item">
                <strong>Step 1: Contact Support</strong> Email: support@protega.ai | Portal: www.protega.ai/customer-login | WhatsApp: Protega Official Support
              </p>
              <p className="terms-numbered-item">
                <strong>Step 2: Submit Documentation</strong>
              </p>
              <ul className="terms-bullet-list">
                <li>Purchase Invoice and ADP Certificate</li>
                <li>Photos or videos clearly showing the damage</li>
                <li>Detailed description of the accident (time, place, and cause)</li>
              </ul>
              <p className="terms-numbered-item">
                <strong>Step 3: Claim Verification</strong> Protega validates claim eligibility and coverage scope within 24 hours.
              </p>
              <p className="terms-numbered-item">
                <strong>Step 4: Deductible Payment</strong> A secure payment link is sent for the applicable deductible (10% or ₹500, whichever is lower).
              </p>
              <p className="terms-numbered-item">
                <strong>Step 5: RMA & Pickup</strong> Once payment is complete, Return Merchandise Authorization (RMA) is generated and pickup is scheduled.
              </p>
              <p className="terms-numbered-item">
                <strong>Step 6: Resolution</strong> Product is repaired, replaced, or settled via store credit based on severity, typically within 7–10 working days.
              </p>
            </div>
          </section>

          {/* Section 4: Definitions */}
          <section className="terms-section">
            <h3 className="terms-section-title">4. Definitions</h3>
            <div className="terms-text">
              <p className="terms-numbered-item">
                <strong>Customer:</strong> Individual purchasing the eligible IZICART product and protection plan.
              </p>
              <p className="terms-numbered-item">
                <strong>Merchant:</strong> IZICART or its authorized retail partner.
              </p>
              <p className="terms-numbered-item">
                <strong>Administrator:</strong> Protega India Pvt. Ltd.
              </p>
              <p className="terms-numbered-item">
                <strong>Covered Product:</strong> Eligible IZICART product under this Plan (non-drone category).
              </p>
              <p className="terms-numbered-item">
                <strong>Accidental Damage:</strong> Physical, sudden, and unintentional damage caused by external force or mishandling.
              </p>
              <p className="terms-numbered-item">
                <strong>Policy Term:</strong> 12 or 24 months as mentioned in the Certificate.
              </p>
              <p className="terms-numbered-item">
                <strong>Deductible:</strong> 10% of product value or ₹500, whichever is lower, payable per approved claim.
              </p>
              <p className="terms-numbered-item">
                <strong>Sum Insured:</strong> Original invoice value of the product (excluding taxes).
              </p>
              <p className="terms-numbered-item">
                <strong>RMA:</strong> Return Merchandise Authorization issued after claim approval.
              </p>
            </div>
          </section>

          {/* Section 5: Eligibility */}
          <section className="terms-section">
            <h3 className="terms-section-title">5. Eligibility</h3>
            <ul className="terms-bullet-list">
              <li>Applies to all non-drone IZICART products purchased via authorized channels in India.</li>
              <li>Plan must be purchased at checkout or within the eligible post-purchase window.</li>
              <li>Product must be operational and undamaged at the time of Plan activation.</li>
              <li>Valid for personal use only (commercial/rental usage excluded).</li>
            </ul>
          </section>

          {/* Section 6: What is Covered */}
          <section className="terms-section">
            <h3 className="terms-section-title">6. What is Covered</h3>
            <ul className="terms-bullet-list">
              <li>Accidental drop or impact leading to breakage, cracks, or malfunction.</li>
              <li>Lens, gimbal, or motor damage from falls or collisions.</li>
              <li>Liquid or moisture damage from accidental exposure.</li>
              <li>Electrical or component damage caused by mishandling.</li>
              <li>Connector or internal part breakage due to shock or pressure.</li>
              <li>Ring light, microphone, or wearable breakage caused by sudden impact.</li>
              <li>Dash camera or audio device failure following physical damage.</li>
            </ul>
          </section>

          {/* Section 7: What is Not Covered */}
          <section className="terms-section">
            <h3 className="terms-section-title">7. What is Not Covered</h3>
            <ul className="terms-bullet-list">
              <li>Manufacturing or performance defects (covered under OEM warranty).</li>
              <li>Cosmetic wear, scratches, fading, or normal aging.</li>
              <li>Theft, loss, or disappearance of the product.</li>
              <li>Commercial or rental use, or continuous professional operation.</li>
              <li>Damage from fire, flood, pest infestation, or natural calamity.</li>
              <li>Electrical surges not associated with external accident.</li>
              <li>Unauthorized repair, disassembly, or firmware alteration.</li>
              <li>Claims made after Plan expiry or without required documentation.</li>
            </ul>
          </section>

          {/* Section 8: Service Procedure and Limit of Liability */}
          <section className="terms-section">
            <h3 className="terms-section-title">8. Service Procedure and Limit of Liability</h3>
            <ul className="terms-bullet-list">
              <li>Deductible: 10% of product value or ₹500 (whichever is lower) per approved claim.</li>
              <li>Only one valid claim per product per Plan term.</li>
              <li>Maximum Protega liability equals the product invoice value.</li>
              <li>Plan terminates once replacement or full credit is issued.</li>
              <li>Protega may retain defective components for inspection or disposal.</li>
            </ul>
          </section>

          {/* Section 9: Cancellation */}
          <section className="terms-section">
            <h3 className="terms-section-title">9. Cancellation</h3>
            <ul className="terms-bullet-list">
              <li>Free-look cancellation allowed within 7 days of purchase (if no claim made) for full refund.</li>
              <li>Non-refundable after claim approval or post 7-day window.</li>
              <li>Protega may cancel coverage in cases of fraud, misrepresentation, or non-payment.</li>
            </ul>
          </section>

          {/* Section 10: Conditions */}
          <section className="terms-section">
            <h3 className="terms-section-title">10. Conditions</h3>
            <ul className="terms-bullet-list">
              <li>Renewal not available; new plan must be purchased after expiry</li>
              <li>This Plan is non-transferable.</li>
              <li>Valid within India only.</li>
              <li>Continuous guidance provided to customers to understand coverage.</li>
              <li>Protega reserves rights to recover costs from third parties responsible for damage.</li>
            </ul>
          </section>

          {/* Section 11: Legal Disclosures */}
          <section className="terms-section">
            <h3 className="terms-section-title">11. Legal Disclosures</h3>
            <ul className="terms-bullet-list">
              <li>Disputes resolved via arbitration under Arbitration & Conciliation Act, 1996</li>
              <li>Plan and purchase confirmation constitute the entire agreement</li>
              <li>Severability ensures invalid clauses do not affect other terms</li>
              <li>Customer data processed as per Protega Privacy Policy</li>
              <li>Protega and IZI Cart not liable for indirect, incidental, or consequential losses</li>
              <li>Protega may amend policies as needed, following regulatory requirements</li>
            </ul>
          </section>

          {/* Section 12: Frequently Asked Questions (FAQ) */}
          <section className="terms-section">
            <h3 className="terms-section-title">12. Frequently Asked Questions (FAQ)</h3>
            <div className="terms-text">
              <p className="terms-numbered-item">
                <strong>Q: How many claims can I make?</strong>
              </p>
              <p className="terms-numbered-item">
                A: One approved claim per product per plan term.
              </p>
              <p className="terms-numbered-item">
                <strong>Q: Is water damage covered?</strong>
              </p>
              <p className="terms-numbered-item">
                A: Yes, for single-incident accidental exposure.
              </p>
              <p className="terms-numbered-item">
                <strong>Q: What happens if repair is not possible?</strong>
              </p>
              <p className="terms-numbered-item">
                A: A replacement or store credit equal to the invoice value is provided.
              </p>
              <p className="terms-numbered-item">
                <strong>Q: How long does claim resolution take?</strong>
              </p>
              <p className="terms-numbered-item">
                A: Typically 7–10 working days post-approval.
              </p>
              <p className="terms-numbered-item">
                <strong>Q: Can I cancel my plan?</strong>
              </p>
              <p className="terms-numbered-item">
                A: Yes, within 7 days if no claim has been made
              </p>
            </div>
          </section>

          {/* Section 13: Service Commitment */}
          <section className="terms-section">
            <h3 className="terms-section-title">13. Service Commitment</h3>
            <ul className="terms-bullet-list">
              <li>Policy certificate emailed within 24 hrs of purchase</li>
              <li>Claims acknowledged within 24 hrs</li>
              <li>Inspection & verification completed promptly</li>
              <li>Pickup arranged within 48 hrs post-approval</li>
              <li>Repair/replacement completed within 7–10 working days</li>
              <li>Replacement units delivered with tracking updates</li>
              <li>SMS/email updates at every claim stage</li>
              <li>Dedicated support team for queries and guidance</li>
            </ul>
          </section>

          {/* Section 14: Contact Us */}
          <section className="terms-section">
            <h3 className="terms-section-title">14. Contact Us</h3>
            <div className="terms-text">
              <p className="terms-numbered-item">
                <strong>Email:</strong> support@protega.ai
              </p>
              <p className="terms-numbered-item">
                <strong>Web:</strong> www.protega.ai/customer-login
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
