  import { useState } from 'react'
  import { Link } from 'react-router-dom'
  import '../App.css'

  function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
      {
        question: "What is  IZICart Care Plan?",
        answer: "IZICart Care provides accidental damage coverage, extended warranty coverage and peace of mind. We get that accidents happen. That's why with IZICart Care, we'll provide you with a replacement product should you need one. The enhanced coverage begins at the time of purchase, and covers until the end of the IZICart Plan term length. See Terms and Conditions for additional details."
      },
      {
        question: "Why should I add an Protega Product Protection?",
        answer: "Protega provides coverage for accidental damage not covered by our manufacturer's warranty starting on day one. After your manufacturer warranty expires, you're still covered in case of Rips & Tears for the remainder of your Protega coverage term."
      },
      {
        question: "What happens if I return my product?",
        answer: "If you return your product, IZICart returns the amount you paid for your product protection. Depending on how much time has passed since your purchase, you may receive a prorated refund, less any paid service."
      },
      {
        question: "I haven't received a refund for my protection even though I returned my product.",
        answer: "IZICart Flux handles all transactions for product protection sales and refunds. For assistance with refunds, contact our Customer Care."
      },
      {
        question: "Is this plan the same as warranty or insurance?",
        answer: "No. It is an optional protection plan for accidental events, separate from any manufacturer warranty or insurance."
      }
    ]

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index)
    }

    return (
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">IZICart Care FAQs</h2>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question-wrapper"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-icon">
                    {openIndex === index ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="faq-footer">
            <Link to="/terms-and-conditions" className="terms-link">Terms and Conditions</Link>
          </div>
        </div>
      </section>
    )
  }

  export default FAQ