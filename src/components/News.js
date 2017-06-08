import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Carousel, Col, Row } from 'react-bootstrap';
import moment from 'moment';

class News extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchBlog: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.fetchBlog("news");
  }

  render(){
    const events = (this.props.data === undefined) ?
      <div>Loading</div> :
      this.props.data.map((event, index) => (
        <div key={`news${index}`}>
          <div className="content">
            <Row className="clearfix">
              <Col sm={9}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p><b>{moment(event.createdAt).format('LL')}</b></p>
              </Col>
              <Col sm={3}>
                <img src={event.image}/>
              </Col>
            </Row>
          </div>
        </div>
      ));

    return (
      <div className="main-content">
        <PageHeader>News and Events</PageHeader>
        {events}
      </div>
    );
  }
}

export default News;
