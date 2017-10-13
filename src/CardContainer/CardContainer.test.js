import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import {
  mockFilms,
  mockPeople,
  mockPlanets,
  mockVehicles,
  mockSpecies,
  mockPerson,
  mockPlanet,
  mockCardDataObj
} from '../_mock/mockData';

describe('CardContainer', () => {
  it('should render correctly and match the snapshot', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(< CardContainer
      handleLoadMore={mockFunc}
      cardData={[mockCardDataObj]}
      toggleFavorite={mockFunc} />);

    expect(wrapper).toMatchSnapshot();
  });
});
