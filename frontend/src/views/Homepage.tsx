
export default function Homepage() {
  return (
    <>
    {/* Header  */}
    <header className="App-header">
    <a href='/'>
    <img src="/logo_2.png" className="App-logo" alt="logo" />
    </a>
    <text> </text>

    <nav className="nav">
        <a href="/">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
    </nav>

    <div className="buttons">
        <button>Ingresar</button>
        <button>Registrarse</button>
    </div>

    <hr></hr>
    </header>

    {/* Section I */}
    <section className="hero">
    <div className="hero-text">
      <h1>Inventory management <br></br> Now Simplified <br></br> <span>For Everyone</span></h1>
        <p>With InventoryPRO it is very easy to manage your inventory</p>
        <button>Learn More</button>
    </div>
    <div className="hero-image">
        <img src="sect_I.png" alt="Hero Image" />
    </div>
    </section>

    {/* Section II */}
    <section className="features">
    <h2>Improve experience in your inventory</h2>
    <div className="feature">
        <img src="/logo_idk.png" className="img" alt="logo" />
        <h3>Multiple Inventories</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div className="feature">
        <img src="/logo_idk.png" className="img" alt="logo" />
        <h3>Update Inventories</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div className="feature">
        <img src="/logo_idk.png" className="img" alt="logo" />
        <h3>Security</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    </section>

    {/* Section III */}
    <section className="pricing">
    <h2>Prices, simple and suited for all your needs</h2>
    <p>Annual Save 20% per month</p>
    <div className="plans">
        <div className="plan free">
          <div className='plan-top'>
            <h3>FREE</h3>
            <p>$0 / month</p>
            <button className=' button-w'>Choose this plan</button>
          </div>
          <ul className="p-features">
              <li>10GB storage</li>
              <li>Basic integrations</li>
              <li>Standard Encryption</li>
              <li>Email Support</li>
          </ul>
        </div>

        <div className="plan premium">
          <div className='plan-top'>
            <h3>Premium</h3>
            <p>$99 / month</p>
            <button className=' button-w'>Choose this plan</button>
          </div>
            <ul className="p-features">
                <li>10GB storage</li>
                <li>Basic integrations</li>
                <li>Standard Encryption</li>
                <li>Email Support</li>
            </ul>
        </div>

        <div className="plan business">
          <div className='plan-top'>
            <h3>Business</h3>
            <p>$299 / month</p>
            <button className=' button-w'>Choose this plan</button>
          </div>
            <ul className="p-features">
                <li>10GB storage</li>
                <li>Basic integrations</li>
                <li>Standard Encryption</li>
                <li>Email Support</li>
            </ul>
        </div>
    </div>
    </section>

    {/* Section FAQ */}
    <div className="faq-container">
    <h2>Frequently Ask Questions</h2>

    <details open>
      <summary>Question I</summary>
      <div className="faq-answer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </details>

    <details>
      <summary>Question II</summary>
      <div className="faq-answer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </details>

    <details>
      <summary>Question III</summary>
      <div className="faq-answer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </details>

    <details>
      <summary>Question IV</summary>
      <div className="faq-answer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </details>
    </div>

    {/* Section Opinions  */}
    <div className="carousel-container">
    <div className="carousel">
        <img src="https://placehold.jp/1600x500.png" alt="Imagen 1"/>
        <img src="https://placehold.jp/1600x500.png" alt="Imagen 2"/>
        <img src="https://placehold.jp/1600x500.png" alt="Imagen 3"/>
    </div>
    <div className="c-buttons">
        <button id="prev">&#10094;</button>
        <button id="next">&#10095;</button>
    </div>
    </div>

    {/* Footer */}
    <footer className="footer">
    <div className="footer-logo">
        <img src="logo_2.png" alt="InventoryPRO Logo"/>
    </div>
    <div className="footer-columns">
        <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
                <li><a href="#">Small Business</a></li>
                <li><a href="#">Freelancers</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Taxes</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>Company</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>Learn</h3>
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">EBooks</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Templates</a></li>
            </ul>
        </div>
    </div>
    <div className="social-media">
        <h3>Follow us on</h3>
        <div className="social-icons">
            <img src="face_log.png" alt="Facebook"/>
            <img src="twi_log.png" alt="Twitter"/>
            <img src="inst_log.png" alt="Instagram"/>
        </div>
        <h3>Get the App</h3>
        <div className="app-buttons">
            <img src="google-play.png" alt="Google Play"/>
            <img src="app-store.png" alt="App Store"/>
        </div>
    </div>
    </footer>

    </>
  )
}