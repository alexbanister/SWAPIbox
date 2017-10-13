import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardData, toggleFavorite } ) => {
  const rowInfoData = {...cardData};
  delete rowInfoData.name;
  delete rowInfoData.type;
  delete rowInfoData.isFavorite;
  delete rowInfoData.id;
  let favText = 'Add Fav';
  if (cardData.isFavorite) {
    favText = 'Remove Fav';
  }
  const displayRows = Object.keys(rowInfoData).map( (rowName, index) => {
    let arrayData = rowInfoData[rowName];
    if (Array.isArray(rowInfoData[rowName])) {
      arrayData = rowInfoData[rowName].map(personPlaceOrThing => {
        //check this key
        return <p key={index}>{personPlaceOrThing}</p>;
      });
    }
    return (
      <tr key={`${cardData.name}-${index}`}>
        <td className='section'>
          {rowName}
        </td>
        <td>
          {arrayData}
        </td>
      </tr>
    );
  });

  const cardStyle = cardData.isFavorite ? 'selected-card card' : 'card';

  return (
    <div className={cardStyle}>
      <h2>{cardData.name}</h2>
      <div className='table-container'>
        <table>
          <tbody>
            {displayRows}
          </tbody>
        </table>
      </div>
      <h5 onClick={()=>{
        toggleFavorite(cardData.id);
      }}>{favText}</h5>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
  toggleFavorite: PropTypes.func
};

export default Card;
