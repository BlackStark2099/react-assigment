import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddPost = ({ blogs, addBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!description || !title) {
      return toast.warning("Please fill in all fields!!");
    }


    const data = {
      id: blogs.length > 0 ? blogs[blogs.length - 1].id + 1 : 0,
      description,
      title,
      image,
    };

    addBlog(data);
    toast.success("Blog added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Blog</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Blog"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogs: state,
});
const mapDispatchToProps = (dispatch) => ({
  addBlog: (data) => {
    dispatch({ type: "ADD_BLOG", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
