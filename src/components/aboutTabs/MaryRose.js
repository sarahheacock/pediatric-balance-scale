import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const MaryRose = (props) => {
  return (
    <div className="main-content">
      <Row className="clearfix content">
        <Col sm={8}>
          {(props.data === undefined) ?
            <div>Loading</div> :
            <div className="about">
              <h3>{props.data.name}</h3>
              <p><b>{props.data.education}</b></p>
              <p>{props.data.summary}</p>
            </div>
          }
        </Col>
        <Col sm={4}>
          {(props.data === undefined) ? <div>Loading</div> : <img src={props.data.image}/>}
        </Col>
      </Row>
    </div>
  );
};
export default MaryRose;

MaryRose.propTypes = {
  data: PropTypes.object.isRequired
}
