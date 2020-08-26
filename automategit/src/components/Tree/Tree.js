import React, { useState, useEffect, Component, Fragment } from "react";

//api
import { fetchcommit } from "../../api/index";

import Tree from "react-animated-tree";
import data1 from "../../data";
import "./Tree.css";

class Tree1 extends Component {
  state = {
    values: [],
    username: null,
    reponame: null,
  };

  // async componentDidMount() {
  //   const commitdata = await fetchcommit(
  //     this.state.username,
  //     this.state.reponame
  //   );

  //   // commitdata.data.map((obj) => console.log(obj));

  //   this.setState({ values: commitdata.data });
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async () => {
    if (this.state.username == undefined || this.state.reponame == undefined) {
      return;
    }

    const commitdata = await fetchcommit(
      this.state.username,
      this.state.reponame
    );

    this.setState({ values: commitdata.data });
    // window.location = "/home";
  };

  render() {
    const treeStyles = {
      color: "white",
      fill: "white",
      width: "100%",
    };

    let val = this.state.values;
    var newval;
    if (val[0] == undefined) {
    } else {
      newval = val.map((obj, i) => (
        <Tree key={i} content={obj.commit.message}>
          <Tree content={obj.author.login}></Tree>
        </Tree>
      ));
    }

    var search = (
      <Fragment>
        <div className="search-box">
          <div>
            <input
              name="username"
              type="text"
              placeholder="Enter GitHub Username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              name="reponame"
              type="text"
              placeholder="Enter Repository name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit" onClick={this.handleSubmit}>
              Enter
            </button>
          </div>
        </div>

        {newval ? (
          <div className="window">
            <Tree
              content="Commit History"
              open
              onClick={console.log}
              className="tree"
              style={treeStyles}
            >
              {newval}
            </Tree>
          </div>
        ) : null}
      </Fragment>
    );

    return search;
  }
}

export default Tree1;
