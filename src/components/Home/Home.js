import React, { Fragment } from 'react';
import './home.css';
import 'animate.css';


const Home = (props) => {

  const {greeting} = props;

  return (
    <Fragment>
      <div className="container-greeting">
        <h6 className="greeting-home animate__animated animate__zoomIn">{greeting}<span>&#160;</span></h6>
      </div>
    </Fragment >
  )
}

export default Home