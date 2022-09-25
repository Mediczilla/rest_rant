const React = require('react')
const Def = require('./default')


function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <img src="\images\lost-dunes.jpg" width="100%" height="auto" alt="infinite sand dunes"/>
      </main>
    </Def>
  )
}


module.exports = error404
