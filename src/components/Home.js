import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Carousel } from 'react-bootstrap';

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchBlog: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.fetchBlog("home")
  }

  render(){
    const homeImg = this.props.data[0];
    const carouselImg = (homeImg === undefined) ?
      <div>loading</div>:
      (homeImg["carousel"] === undefined) ?
        <div>Loading</div>:
        homeImg["carousel"].map((image, index) => (
          <Carousel.Item key={image}>
            <img className="carouselImg" alt="900x500" src={image}/>
          </Carousel.Item>
        ));

    return (
      <div>
        <header>
          <Carousel className="carousel-content">
            {carouselImg}
          </Carousel>
        </header>
        <div className="lower-content">
          <div className="main-content">
            <PageHeader>Home</PageHeader>
            <div className="content">
              {(this.props.data[0] === undefined) ? <p>Loading</p> : <p className="summary">{this.props.data[0]["summary"]}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
