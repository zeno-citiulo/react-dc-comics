const Footer = () => {
  return (

    <>
      {/* FOOTER CON COLONNE E BOTTONI */}
      <footer className="dc-footer">
        <div className="dc-footer__top">
          {/* Colonna DC COMICS */}
          <div className="dc-footer__column">
            <h3>DC COMICS</h3>
            <ul>
              <li><a href="#characters">Characters</a></li>
              <li><a href="#comics">Comics</a></li>
              <li><a href="#movies">Movies</a></li>
              <li><a href="#tv">TV</a></li>
              <li><a href="#games">Games</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#news">News</a></li>
            </ul>
          </div>

          {/* Colonna SHOP */}
          <div className="dc-footer__column">
            <h3>SHOP</h3>
            <ul>
              <li><a href="#shop-dc">Shop DC</a></li>
              <li><a href="#shop-collectibles">Shop DC Collectibles</a></li>
            </ul>
          </div>

          {/* Colonna DC */}
          <div className="dc-footer__column">
            <h3>DC</h3>
            <ul>
              <li><a href="#terms">Terms Of Use</a></li>
              <li><a href="#privacy">Privacy policy (New)</a></li>
              <li><a href="#choices">Ad Choices</a></li>
              <li><a href="#advertising">Advertising</a></li>
              <li><a href="#jobs">Jobs</a></li>
              <li><a href="#subscriptions">Subscriptions</a></li>
              <li><a href="#talent-workshops">Talent Workshops</a></li>
              <li><a href="#cpsc">CPSC Certificates</a></li>
              <li><a href="#ratings">Ratings</a></li>
              <li><a href="#shop-help">Shop Help</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Colonna SITES */}
          <div className="dc-footer__column">
            <h3>SITES</h3>
            <ul>
              <li><a href="#dc">DC</a></li>
              <li><a href="#mad-magazine">MAD Magazine</a></li>
              <li><a href="#dc-kids">DC Kids</a></li>
              <li><a href="#dc-universe">DC Universe</a></li>
              <li><a href="#dc-power-visa">DC Power Visa</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-footer">
          <div className="dc-footer__bottom">
            <button className="dc-footer__signup">SIGN-UP NOW!</button>
            <div>
              <span className="bg-dc-footer" />
            </div>
            <div className="dc-footer__social">
              <span>FOLLOW US</span>
              <a href="#facebook" className="icon icon-facebook" />
              <a href="#twitter" className="icon icon-twitter" />
              <a href="#youtube" className="icon icon-youtube" />
              <a href="#pinterest" className="icon icon-pinterest" />
              <a href="#periscope" className="icon icon-periscope" />
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
export default Footer;