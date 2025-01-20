import React from 'react';
import comics from '../comics';

const Main = () => {
  return (
    <>

      <div className='jumbo'></div>

      <main className="comics-container">
        <div className="comics-grid">
          {comics.map((comic) => (
            <div className="comic-card" key={comic.id}>
              <img src={comic.thumb} alt={comic.title} />
              <h4>{comic.series}</h4>
            </div>
          ))}
        </div>

        <button className="load-more">
          LOAD MORE
        </button>
      </main>

      <section className="dc-banner dc-banner--blue">
        <div className="dc-banner__item">
          <span className="icon icon-digital-comics" />
          <p>Digital Comics</p>
        </div>
        <div className="dc-banner__item">
          <span className="icon icon-merchandise" />
          <p>DC Merchandise</p>
        </div>
        <div className="dc-banner__item">
          <span className="icon icon-subscription" />
          <p>Subscription</p>
        </div>
        <div className="dc-banner__item">
          <span className="icon icon-shop-locator" />
          <p>Comic Shop Locator</p>
        </div>
        <div className="dc-banner__item">
          <span className="icon icon-power-visa" />
          <p>DC Power Visa</p>
        </div>
      </section>

    </>
  )
}

export default Main;






