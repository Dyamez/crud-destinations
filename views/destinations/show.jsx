const React = require("react");
const Def = require("../default");
const comments = require("../../models/comment");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.destination.comments.length) {
    comments = data.destination.comments.map((c) => {
      let sumRatings = data.destination.comments.reduce((tot, c) => {
        return tot + c.stars;
      }, 0);
      let averageRating = Math.round(
        sumRatings / data.destination.comments.length
      );
      let stars = "";
      for (let i = 0; i < averageRating; i++) {
        stars += "⭐️";
      }
      rating = <h3>{stars} stars</h3>;
      return (
        <div className="col-sm-4 border">
          <h2 className="rant">{c.rant ? "Rant! 🤬" : "Rave! 🎉"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form
            method="POST"
            action={`/destinations/${data.destination.id}/comment/${c.id}?_method=DELETE`}
          >
            <input
              type="submit"
              className="btn btn-danger"
              value="Delete Comment"
            />
          </form>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid"
              src={data.destination.pic}
              alt={data.destination.name}
            />
            <h3>
              Located in {data.destination.city}, {data.destination.state}{" "}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.destination.name}</h1>
            <div>
              <h2>Rating</h2>
              {rating}
              <br />
            </div>
            <div>
              <h2>Description</h2>
              <h3>{data.destination.showEstablished()}</h3>
              {/* <h4>Serving {data.destination.city}</h4> */}
            </div>
            <form>
              <a
                href={`/destinations/${data.destination.id}/edit`}
                className="btn btn-warning"
              >
                Edit
              </a>{" "}
              {""}
              <form
                method="POST"
                action={`/destinations/${data.id}?_method=DELETE`}
              >
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </form>
          </div>
          <hr />
          <div className="row">
            <h2>Comments</h2>
            {comments}
            <hr />
            <div className="rantBox">
              <h1>Tell us how you really feel.</h1>
              <form
                className="row g-3"
                method="POST"
                action={`/destinations/${data.destination.id}/comment`}
              >
                <div className="reviewForm">
                  <div className="col-12">
                    <label htmlFor="content" className="form-label">
                      Your Comment
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="content"
                      name="content"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="author" className="form-label">
                      Author
                    </label>
                    <input className="form-control" id="author" name="author" />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="stars" className="form-label">
                      Star Rating
                    </label>
                    <input
                      className="form-range"
                      type="range"
                      id="stars"
                      name="stars"
                      min="1"
                      max="5"
                      step="0.5"
                    />
                  </div>
                  <div className="col-md-2">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="rant"
                        id="rant-checkbox"
                      >
                        Not Happy?
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rant"
                        name="rant"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Add Comment"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
