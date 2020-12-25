import React from "react";
import DropdownButton from "./DropdownButton";
// import { useHistory } from "react-router-dom"

const Searchbar = (props) => {
  // const history = useHistory();
  return (
    <div className="container">
      <div className="row" style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}>
        <section className="col s6 offset-s4">
          <form
            action=""
            onSubmit={props.handleSubmit}
            style={{ width: '100%' }}>
            <div className="input-field">
              <input
                placeholder="Search for books"
                type="text"
                onChange={props.handleChange}
              />
              <DropdownButton />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Searchbar;
