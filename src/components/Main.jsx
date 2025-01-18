const Main = () => {
  return (
    <main>
      <section className="dc-banner dc-banner--black">
        <h2>--&gt; Content goes here &lt;--</h2>
      </section>

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
    </main>
  )
}

export default Main;

