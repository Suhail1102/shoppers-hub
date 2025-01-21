import React from 'react'
import about from '../assets/about.png'
import profile from '../assets/profile.png'

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-3 fw-bold">Welcome to Shoppers Hub</h1>
          <p className="lead">
            Your ultimate online shopping destination for quality, variety, and unbeatable deals.
          </p>
          <a href="/" className="btn btn-light btn-lg mt-3">
            Start Shopping
          </a>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <img
                src={about}
                alt="Shoppers Hub"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Who We Are</h2>
              <p className="text-muted">
                At Shoppers Hub, we aim to redefine the shopping experience by bringing together a wide variety of
                products, exceptional customer service, and unbeatable prices.
              </p>
              <p className="text-muted">
                From fashion and electronics to home essentials, our curated collection ensures there’s something
                for everyone. We are dedicated to making your shopping journey convenient, enjoyable, and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Shoppers Hub?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box shadow-sm p-4 rounded">
                <i className="bi bi-basket-fill text-primary display-4 mb-3"></i>
                <h5>Wide Product Range</h5>
                <p className="text-muted">Everything you need, all in one place.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box shadow-sm p-4 rounded">
                <i className="bi bi-currency-dollar text-primary display-4 mb-3"></i>
                <h5>Affordable Prices</h5>
                <p className="text-muted">Shop more, save more.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box shadow-sm p-4 rounded">
                <i className="bi bi-truck text-primary display-4 mb-3"></i>
                <h5>Fast Delivery</h5>
                <p className="text-muted">Quick and reliable shipping to your doorstep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="team-card">
                <img
                  src={profile}
                  alt="Team Member"
                  className="img-fluid rounded-circle mb-3 shadow"
                />
                <h5>Alex Carter</h5>
                <p className="text-muted">Founder & CEO</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <img
                   src={profile}
                  alt="Team Member"
                  className="img-fluid rounded-circle mb-3 shadow"
                />
                <h5>Sophia Lee</h5>
                <p className="text-muted">Head of Operations</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <img
                   src={profile}
                  alt="Team Member"
                  className="img-fluid rounded-circle mb-3 shadow"
                />
                <h5>Ryan Smith</h5>
                <p className="text-muted">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section py-5 text-white text-center">
        <div className="container">
          <h2 className="fw-bold">Join the Shoppers Hub Experience</h2>
          <p className="lead">
            Enjoy exclusive offers, amazing deals, and a world-class shopping experience.
          </p>
          <a href="/signup" className="btn btn-light btn-lg mt-3">
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default About