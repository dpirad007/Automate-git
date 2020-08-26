import React, { Component } from "react";

import styles from "../home/home.styles.css";

import Tree1 from "../../components/Tree/Tree";

class home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Tree1 />
      </div>
    );
  }
}

export default home;
