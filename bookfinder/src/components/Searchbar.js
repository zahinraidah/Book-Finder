import React from "react";
// import { useHistory } from "react-router-dom"

const Searchbar = (props) => {
  // const history = useHistory();
  return (
    <form onSubmit={props.handleSubmit}>
      <div class="ui search" style={{ marginLeft: "45%", marginTop: "1%", width: "25%", height: "50%" }}>
        <div class="ui icon input">
          <input class="prompt"
            type="text"
            placeholder="Search Books"
            onChange={props.handleChange}
          />
          <i class="search icon"></i>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;