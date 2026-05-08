(() => {
  const headerHtml = `
  <header class="header" style="margin-bottom: 262px;">
    <div id="header-container">
      <div class="premise-type-bar">
        <div class="container">
          <div class="premise-type-selection">
            <a class="active small" id="residential-button" onclick="changePremiseType('Residential')">Residential</a>
            <a class="small" id="commercial-button" onclick="changePremiseType('Commercial')">Commercial</a>
          </div>
          <div class="reviews-wrapper">
            <div class="google-review-wrapper">
              <p class="small bold" id="rating-value">4.7</p>
              <div class="desktop-only star-wrapper">
                <img id="star-1" src="../assets/header/star.png" alt="Fully filled star icon representing a rating.">
                <img id="star-2" src="../assets/header/star.png" alt="Fully filled star icon representing a rating.">
                <img id="star-3" src="../assets/header/star.png" alt="Fully filled star icon representing a rating.">
                <img id="star-4" src="../assets/header/star.png" alt="Fully filled star icon representing a rating.">
                <img id="star-5" src="../assets/header/half-star.png" alt="Half-filled star icon representing a rating.">
              </div>
              <img class="mobile-only" src="../assets/header/star.png" alt="Fully filled star icon representing a rating.">
              <p class="desktop-only small">on</p>
              <img src="../assets/header/google-icon.png" alt="Google logo icon.">
            </div>
            <div class="vertical-divider desktop-only"></div>
            <p class="small desktop-only">We've proudly served <span class="bold">446,218</span> Texas homes and businesses.</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="header-wrapper">
          <a href="https://www.energyogre.com/" style="display:block;height:100px;padding:30px 0 0 0;font-weight:bold;font-size:15px;">
            <img src="../assets/header/logo-horizontal.svg" alt="Energy Ogre">
            &nbsp;EST. 2013
          </a>
          <nav class="menu">
            <ul id="navs-list-links">
              <li id="savings">
                <a href="https://www.energyogre.com/savings" style="line-height:1.1;">
                  Savings<br>Calculator
                  <img src="../assets/header/piggy-bank.gif" alt="Animated piggy bank with coins dropping in, symbolizing savings.">
                </a>
              </li>
              <li id="how-energy-ogre-works"><a href="https://www.energyogre.com/how-energy-ogre-works" style="line-height:1.1;">How<br>It Works</a></li>
              <li id="reviews-testimonials"><a href="https://www.energyogre.com/reviews-testimonials" style="line-height:1.1;">Reviews &amp;<br>Testimonials</a></li>
              <li id="resources-header" class="has-submenu"><a href="https://www.energyogre.com/why-join-energy-ogre">Resources</a></li>
              <li id="about-header" class="has-submenu"><a href="https://www.energyogre.com/about">About Us</a></li>
            </ul>
          </nav>
          <div class="header-buttons">
            <a href="https://www.energyogre.com/connect" id="member-login-btn" class="btn btn-secondary btn-small">Member Login</a>
            <a href="https://www.energyogre.com/join/signup" class="btn btn-primary btn-small">Sign Up</a>
          </div>
          <a href="#" class="header-burger" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="12" viewBox="0 0 28 12">
              <g fill="none" fill-rule="evenodd"><g fill="#017ba4"><g><g><path d="M26.5 9c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-25C.672 12 0 11.328 0 10.5S.672 9 1.5 9h25zm0-9c.828 0 1.5.672 1.5 1.5S27.328 3 26.5 3h-25C.672 3 0 2.328 0 1.5S.672 0 1.5 0h25z" transform="translate(-774 -42) translate(32 24) translate(742 18)"></path></g></g></g></g>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="banner-container-desktop">
      <div class="alert banner-container" style="background-color:#2fb96a;display:block;" id="bannerMessageId-39" name="bannerMessage">
        <div class="message-wrapper">
          <div class="icon-message">
            <span style="color:#ffffff;">Special Spring Discount: Save 20% on your first year of membership</span>
          </div>
          <button type="button" class="close white" data-dismiss="alert" aria-hidden="true" style="display:none;" onclick="bannerDismissed(39)">×</button>
        </div>
      </div>
    </div>
    <div class="banner-container-mobile" id="banner-container-mobile">
      <div class="mobile-banner-wrapper">
        <div class="notification-wrapper">
          <div style="position:relative;">
            <img src="../assets/header/megaphone-red.png" alt="megaphone">
            <span class="banner-message-count" id="message-count">1</span>
          </div>
          <p class="large bold">Important Notification</p>
        </div>
        <div class="banner-vertical-divider"></div>
        <p class="large bold view-link" onclick="viewBanners()">View</p>
      </div>
    </div>
  </header>`;

  const footerHtml = `
  <footer class="footer">
    <div class="container">
      <h2 class="h3-seo">Hey Texans! We’re here to lower your electricity bills today and tomorrow.</h2>
      <div class="footer-wrapper">
        <div class="footer-logo mobile-logo">
          <a href="https://www.energyogre.com/" class="logo">
            <img src="../assets/logo-stacked.svg" alt="Energy Ogre's stacked logo.">&nbsp;EST. 2013
          </a>
        </div>
        <div class="col col-menu">
          <div class="menu-div">
            <ul>About
              <li><a href="https://www.energyogre.com/about">About Us</a></li>
              <li><a href="https://www.energyogre.com/community-impact">Community Impact</a></li>
              <li><a href="https://www.energyogre.com/careers">Careers</a></li>
              <li><a href="https://www.energyogre.com/press">Press</a></li>
              <li><a href="https://www.energyogre.com/team">Our Team</a></li>
            </ul>
            <ul>Resources
              <li><a href="https://www.energyogre.com/why-join-energy-ogre">Why Join Energy Ogre?</a></li>
              <li><a href="https://www.energyogre.com/can-energy-ogre-service-my-address">Can Energy Ogre Service My Address?</a></li>
              <li><a href="https://www.energyogre.com/texas-electricity-learning-center">Learning Center</a></li>
              <li><a href="https://www.energyogre.com/how-energy-ogre-works">How It Works</a></li>
              <li><a href="https://www.energyogre.com/reviews-testimonials">Reviews &amp; Testimonials</a></li>
              <li><a href="https://www.energyogre.com/posts">Blog</a></li>
              <li><a href="https://www.energyogre.com/energy-ogre-videos">Videos</a></li>
              <li><a href="https://www.energyogre.com/faq">FAQ</a></li>
              <li><a href="https://www.energyogre.com/important-texas-electricity-terms">Important Texas Electricity Terms</a></li>
            </ul>
            <ul>Tools
              <li><a href="https://www.energyogre.com/savings">Savings Calculator</a></li>
              <li><a href="https://www.energyogre.com/electricity-rates-by-zip-code">Electricity Rates<br> by ZIP Code</a></li>
              <li><a href="https://www.energyogre.com/pros-and-cons-of-solar-panels">Solar Panel<br> Pros and Cons</a></li>
              <li><a href="https://www.energyogre.com/esid-lookup-tool">ESID Lookup</a></li>
            </ul>
            <ul>Top Texas Electricity Markets
              <li><a href="https://www.energyogre.com/best-electric-company-in-dallas">Dallas</a></li>
              <li><a href="https://www.energyogre.com/find-the-best-electricity-plan-fort-worth">Fort Worth</a></li>
              <li><a href="https://www.energyogre.com/houston-electricity-guide">Houston</a></li>
              <li><a href="https://www.energyogre.com/electricity-companies-plans-arlington">Arlington</a></li>
              <li><a href="https://www.energyogre.com/electricity-companies-plans-corpus-christi">Corpus Christi</a></li>
              <li><a href="https://www.energyogre.com/galveston-electricity-guide">Galveston</a></li>
            </ul>
          </div>
        </div>
        <div class="col col-contact">
          <div class="footer-logo desktop-logo">
            <a href="https://www.energyogre.com/" class="logo">
              <img src="../assets/logo-stacked.svg" alt="Energy Ogre's stacked logo.">&nbsp;EST. 2013
            </a>
          </div>
          <div class="footer-contact">
            <h3 class="h5-seo tino-reset">Contact Us</h3>
            <div class="contact-div">
              <ul>
                <li><a href="tel:8329751000" class="tino-reset">(832) 975-1000</a></li>
                <li><a href="mailto:membercare@energyogre.com" class="tino-reset">membercare@energyogre.com</a></li>
              </ul>
              <ul>
                <li><a class="tino-reset">24 Greenway Plaza, Suite 1100</a></li>
                <li><a class="tino-reset">Houston, TX 77046, United States</a></li>
              </ul>
            </div>
            <div class="footer-social">
              <ul class="social">
                <li><a href="https://www.instagram.com/energy.ogre/">Instagram</a></li>
                <li><a href="https://twitter.com/EnergyOgre">X</a></li>
                <li><a href="https://www.facebook.com/energyogre">Facebook</a></li>
                <li><a href="https://www.linkedin.com/company/energy-ogre/mycompany/">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div class="col-buttons">
            <h3 class="h5-seo" id="download">Download Our App</h3>
            <div class="footer-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.energyogre.eoconnect&hl=en_US&gl=US" class="btn btn-dark-blue" aria-label="Google Play Store">Play</a>
              <a href="https://apps.apple.com/us/app/energy-ogre/id1321504464" class="btn btn-dark-blue" aria-label="Apple App Store">iOS</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="small" id="copyright">© Copyright Energy Ogre 2013-2026 All Rights Reserved</p>
        <div class="tos-container">
          <a href="https://www.energyogre.com/privacy" class="small">Privacy Policy</a>
          <a href="https://www.energyogre.com/terms" class="small">Terms of Service</a>
          <a href="https://www.energyogre.com/targeted-advertising-opt-out" class="small">Opt Out of Targeted Advertising</a>
        </div>
      </div>
    </div>
  </footer>`;

  const headerMount = document.querySelector('[data-shared-header]');
  const footerMount = document.querySelector('[data-shared-footer]');
  if (headerMount) headerMount.outerHTML = headerHtml;
  if (footerMount) footerMount.outerHTML = footerHtml;

  window.changePremiseType = window.changePremiseType || (() => {});
  window.viewBanners = window.viewBanners || (() => {});
  window.bannerDismissed = window.bannerDismissed || ((bannerId) => {
    const id = `bannerMessageId-${bannerId}`;
    localStorage.setItem(id, String(bannerId));
    const node = document.getElementById(id);
    if (node) node.style.display = "none";
  });
})();
