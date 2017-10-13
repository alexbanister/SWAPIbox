import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';


const CardContainer = ({ cardData, toggleFavorite, handleLoadMore } ) => {
  const allCards = cardData.map( (cardDataObj, index) => {
    return <Card
      key={index}
      cardData={cardDataObj}
      toggleFavorite={toggleFavorite}
    />;
  });

  return (
    <div className='cardContainer'>
      {allCards}
    </div>
  );
  
};

CardContainer.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object),
  handleLoadMore: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default CardContainer;
