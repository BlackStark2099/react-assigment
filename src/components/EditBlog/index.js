import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditBlog = ({ blogs, updateBlog }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentBlog = blogs.find(
    (blog) => blog.id === parseInt(id)
  );

  useEffect(() => {
    setTitle(currentBlog.title);
    setDescription(currentBlog.description);
    setImage(currentBlog.image);
  }, [currentBlog]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !title) {
      return toast.warning("Please fill in all fields!!");
    }


    const data = {
      id: currentBlog.id,
      description,
      title,
      image,
    };

    updateBlog(data);
    toast.success("Blog updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          <h2 className="text-center">Edit Your Blog </h2>
          {currentBlog ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h4>Title</h4>
                <input
                  className="form-control"
                  value={title}
                  placeholder={"Title"}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <h4>Description</h4>
                <textarea
                  className="form-control "
                  rows="5"
                  value={description}
                  placeholder={"Description"}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <h4>Image URL</h4>
                <input
                  className="form-control"
                  value={image}
                  placeholder={"Image URL"}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Blog Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogs: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateBlog: (data) => {
    dispatch({ type: "UPDATE_BLOG", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog);
