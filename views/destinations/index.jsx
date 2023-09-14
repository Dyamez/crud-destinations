const React = require("react");
const Def = require("../default");

function index(data) {
  let destinationsFormatted = data.destinations.map((destination, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/destinations/${destination.id}`}>{destination.name}</a>
        </h2>

        <img src={destination.pic} alt={destination.name} />
        <p className="text-center">
          Located in {destination.city}, {destination.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Adventure to be Happy or Dance About</h1>
        <div className="row">{destinationsFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
