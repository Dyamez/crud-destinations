const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit Destination</h1>
        <form
          method="POST"
          action={`/destinations/${data.destination.id}?_method=PUT`}
        >
          <div className="row">
            <div className="form-group col-sm-6" col-md-4 col-lg-3>
              <label htmlFor="name">Destination Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                value={data.destination.name}
                required
              />
            </div>
            <div className="form-group col-sm-6" col-md-4 col-lg-3>
              <label htmlFor="pic">Destination Picture</label>
              <input className="form-control" type="url" id="pic" name="pic" />
            </div>
            <div className="form-group col-sm-6" col-md-4 col-lg-3>
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" />
            </div>
            <div className="form-group col-sm-6" col-md-4 col-lg-3>
              <label htmlFor="state">State</label>
              <input className="form-control" id="state" name="state" />
            </div>
          </div>

          <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded</label>
            <input
              className="form-control"
              id="founded"
              name="founded"
              value={data.destination.founded}
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit Changes"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
