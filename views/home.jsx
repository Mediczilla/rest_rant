const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                  <img src="\images\chia-fruit-drink.jpg.jpg" width="100%" height="auto" alt="chia fruit drink" id="gummy"/>
              </div>
              <div>
                  Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
              </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
          </a>

          </main>
      </Def>
    )
  }
  

module.exports = home
  

