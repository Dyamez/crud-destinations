const React = require('react');
const Def = require('./default');

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/zenitsu.jpg" alt="zenitsu demon slayer surprised" />
                <div>
                  <p><a href="https://kimetsu-no-yaiba.fandom.com/wiki/Zenitsu_Agatsuma">Zenitsu Agatsuma</a></p>
                  image from <a href="https://i.pinimg.com/originals/38/08/b6/3808b6d5efcd959522213a8c730d8044.png">pinterest</a>
                </div>
              </div>
          </main>
      </Def>
    )
  };
  
module.exports = error404