import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ movie }) => {

  const romanArray = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

  return (
    <div className='welcome-body'>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>{ romanArray[movie.EpisodeId] }</p>
            <h1>{ movie.title }</h1>
          </div>
          <p>{ movie.openingCrawl }</p>
        </div>
      </section>
    </div>
  );
};

Welcome.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func,
  movie: PropTypes.object
};

export default Welcome;
