const NavBar = () => {
  return (
    <navbar>
      <header className="dc-header">
        {/* Logo e menù in alto */}
        <div className="dc-header__logo">
          {/* Sostituisci l’immagine con quella ufficiale DC o un link a tua scelta */}
          <img
            src="/src/assets/img/dc-logo.png"
            alt="DC Logo"
          />
        </div>
        <nav className="dc-header__nav">
          <ul>
            <li><a href="#characters">Characters</a></li>
            <li><a href="#comics">Comics</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#tv">TV</a></li>
            <li><a href="#games">Games</a></li>
            <li><a href="#collectibles">Collectibles</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#fans">Fans</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#shop">Shop</a></li>
          </ul>
        </nav>
      </header>
    </navbar>
  )
}

export default NavBar;