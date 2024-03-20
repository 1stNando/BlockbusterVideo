import React from 'react'
import 'bulma/css/bulma.css'

export function App() {
  return (
    <body>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              <figure className="image center">
                LOGO
                {/* <img src="/ClientApp/images/Bulma Logo Black.png" /> */}
              </figure>
            </p>
          </div>
        </div>
      </section>

      {/* <!-- .section --> */}
      <section className="section has-background-light">
        <div className="container">
          <div className="columns">
            <div className="column">
              <article className="media notification is-info">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Bulma?</h1>
                    <p className="is-size-5">
                      Bulma is a modern CSS framework from @jgthms, based on
                      Flexbox. Using Bulma, we can describe our website's design
                      using just classNamees.{' '}
                      <span className="emoticon">ᕕ( ᐛ )ᕗ</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column">
              <article className="media notification is-primary">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fas fa-2x fa-align-justify"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">…Flexbox?</h1>
                    <p className="is-size-5">
                      Flexbox is a CSS spec that makes sectioning and aligning
                      more natural. We don't need to know Flexbox but it's how
                      Bulma works behind-the-scenes.{' '}
                      <span className="emoticon">⦤(^ー^)⦥</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column">
              <article className="media notification is-warning">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fas fa-2x fa-shield-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">…classNamees?</h1>
                    <p className="is-size-5">
                      Instead of writing our CSS per-element, we can use
                      predefined classNamees. With enough classNamees, we can
                      describe our website design using semantics.{' '}
                      <span className="emoticon">٩(^ᴗ^)۶</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /.section --> */}

      {/* <!-- .section --> */}
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon">
                    <i className="fas fa-lg fa-columns has-text-warning"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Columns</h1>
                    <p className="subtitle is-size-5">
                      The power of <strong>Flexbox</strong> in a simple
                      interface
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-info">
                    <i className="fab fa-lg fa-wpforms"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Form</h1>
                    <p className="subtitle is-size-5">
                      The indispensable <strong>form controls</strong>, designed
                      for maximum clarity
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-danger">
                    <i className="fas fa-lg fa-cubes"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Components</h1>
                    <p className="subtitle is-size-5">
                      Advanced multi-part components with lots of possibilities
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-grey">
                    <i className="fas fa-lg fa-cogs"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Modifiers</h1>
                    <p className="subtitle is-size-5">
                      An <strong>easy-to-read</strong> naming system designed
                      for humans
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-primary">
                    <i className="fas fa-lg fa-warehouse"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Layout</h1>
                    <p className="subtitle is-size-5">
                      Design the <strong>structure</strong> of your webpage with
                      these CSS classNamees
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-danger">
                    <i className="fas fa-lg fa-cube"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Elements</h1>
                    <p className="subtitle is-size-5">
                      Essential interface elements that only require a{' '}
                      <strong>single CSS className</strong>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /.section --> */}
    </body>
  )
}
