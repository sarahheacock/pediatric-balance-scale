import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Carousel } from 'react-bootstrap';
import moment from 'moment';

class Publications extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchBlog: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.fetchBlog("publications");
  }

  render(){
    const pubs = (this.props.data === undefined) ?
      <div>Loading</div> :
      this.props.data.map((article, index) => (
        <div key={`article${index}`}>
          <a href={article.link}>
            {(article.authors === undefined) ?
              <div>Loading</div>:
              <div className="well well-option content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p><b>{article.authors.join(', ')}</b></p>
                <p><b>{moment(article.date).format('LL')}</b></p>
              </div>}
          </a>
        </div>
      ));

    return (
      <div className="main-content">
        <PageHeader>Publications and Presentations</PageHeader>
        {pubs}
      </div>
    );
  }
}

export default Publications;
