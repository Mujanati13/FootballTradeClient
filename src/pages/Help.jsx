import { useState } from 'react';
import './Help.css';

function Help() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const faqData = [
    {
      id: 'account',
      title: 'Account & Registration',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click on the "Sign Up" button and fill in your details. You\'ll receive a confirmation email to verify your account.'
        },
        {
          q: 'I forgot my password. How can I reset it?',
          a: 'Click on "Forgot Password" on the login page and enter your email. We\'ll send you a reset link.'
        },
        {
          q: 'Can I change my username?',
          a: 'Yes, you can change your username in your account settings under "Profile Information".'
        }
      ]
    },
    {
      id: 'trading',
      title: 'Trading & Marketplace',
      questions: [
        {
          q: 'How do I list an item for sale?',
          a: 'Go to "My Dashboard" and click "Add New Listing". Fill in the item details, upload photos, and set your price.'
        },
        {
          q: 'What payment methods are accepted?',
          a: 'We accept PayPal, credit cards, and bank transfers. All payments are processed securely.'
        },
        {
          q: 'How do I contact a seller?',
          a: 'Click on any listing and use the "Contact Seller" button to send a direct message.'
        }
      ]
    },
    {
      id: 'teams',
      title: 'Teams & Community',
      questions: [
        {
          q: 'How do I join a team?',
          a: 'Browse teams in your area using the "Find Teams" feature and send a join request to team managers.'
        },
        {
          q: 'Can I create my own team?',
          a: 'Yes! Go to "Teams" section and click "Create Team". You\'ll be able to invite players and manage your roster.'
        },
        {
          q: 'How do I schedule matches?',
          a: 'Team managers can schedule matches through the team dashboard. All team members will be notified.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      questions: [
        {
          q: 'The app is running slowly. What should I do?',
          a: 'Try clearing your browser cache, check your internet connection, and make sure you\'re using an updated browser.'
        },
        {
          q: 'I can\'t upload photos. Help!',
          a: 'Make sure your photos are under 5MB and in JPG, PNG, or GIF format. Try refreshing the page and uploading again.'
        },
        {
          q: 'How do I report a bug?',
          a: 'Use our contact form or email tech@footballmarketplace.com with details about the issue and your device/browser information.'
        }
      ]
    }
  ];

  return (
    <div className="help">
      <div className="help-hero">
        <div className="container">
          <h1>Help Center</h1>
          <p>Find answers to common questions and learn how to make the most of Football Marketplace</p>
        </div>
      </div>
      
      <div className="help-content">
        <div className="container">
          <div className="help-grid">
            <div className="quick-links">
              <h2>Quick Links</h2>
              <div className="link-cards">
                <div className="link-card">
                  <h3>🚀 Getting Started</h3>
                  <p>New to Football Marketplace? Start here for a quick overview.</p>
                </div>
                <div className="link-card">
                  <h3>📱 Mobile App</h3>
                  <p>Download our mobile app for iOS and Android devices.</p>
                </div>
                <div className="link-card">
                  <h3>🔒 Safety & Security</h3>
                  <p>Learn about our safety measures and how to trade securely.</p>
                </div>
                <div className="link-card">
                  <h3>💬 Community Guidelines</h3>
                  <p>Read our community rules and best practices for interaction.</p>
                </div>
              </div>
            </div>
            
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-categories">
                {faqData.map((category) => (
                  <div key={category.id} className="faq-category">
                    <button
                      className={`category-header ${activeSection === category.id ? 'active' : ''}`}
                      onClick={() => toggleSection(category.id)}
                    >
                      <span>{category.title}</span>
                      <span className="toggle-icon">
                        {activeSection === category.id ? '−' : '+'}
                      </span>
                    </button>
                    
                    {activeSection === category.id && (
                      <div className="category-content">
                        {category.questions.map((qa, index) => (
                          <div key={index} className="qa-item">
                            <h4>{qa.q}</h4>
                            <p>{qa.a}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="help-footer">
            <div className="help-card">
              <h3>Still Need Help?</h3>
              <p>
                Can't find what you're looking for? Our support team is ready to help you.
                Get in touch with us through our contact page.
              </p>
              <button className="btn btn-primary">Contact Support</button>
            </div>
            
            <div className="help-card">
              <h3>Feature Requests</h3>
              <p>
                Have an idea for a new feature? We'd love to hear from you!
                Send us your suggestions and help make Football Marketplace even better.
              </p>
              <button className="btn btn-secondary">Submit Idea</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
