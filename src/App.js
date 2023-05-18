import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddBlog";
import EditContact from "./components/EditBlog";
import ReadMore from "./components/ReadMore";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
      <Route exact path="/read_more/:id" component={() => <ReadMore />} />
    </div>
  );
};
export default App;
