import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from "react-icons/bs";

const ReadMore = ({ blogs }) => {
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

  return (
    <div className="container">
      <div className="row d-flex flex-column">

        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-10 mx-auto shadow p-5">
          {currentBlog ? (
            <div >
              <div class="form-check-inline">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <h3><BsFillHandThumbsUpFill /></h3>
              </div>
              <div class="form-check-inline">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <h3><BsFillHandThumbsDownFill /></h3>
              </div>
              <div className="card border-0 my-2 h-20">
                <img src={image} />
              </div>
              <div className="card p-2">
                <h4 className="card-title text-center mb-5" >
                  {title}
                </h4>

                <div className="card-text " >
                  {description}
                </div>
              </div>
            </div>
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


export default connect(mapStateToProps)(ReadMore);
