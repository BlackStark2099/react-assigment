import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const Home = ({ blogs, deleteBlog }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Blog
        </Link>
        <div className="col-md-8 mx-auto my-auto">
          <card className="card p-auto m-auto">
            <div className="card-body">
              {blogs.length > 0 ? (
                blogs.map((blog, id) => (
                  <div className="card bg-light p-2 my-2" key={id}>
                    <h4 className="card-title">{blog.title}</h4>
                    <td>
                      <Link
                        to={`/edit/${blog.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteBlog(blog.id)}
                        className="btn btn-sm btn-danger mr-1"
                      >
                        Delete
                      </button>
                      <Link
                        to={`/read_more/${blog.id}`}
                        className="btn btn-sm btn-success"
                      >
                        Read More
                      </Link>
                    </td>
                  </div>
                ))
              ) : (
                <tr>
                  <th>No Blog found</th>
                </tr>
              )}
            </div>
          </card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogs: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBlog: (id) => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


