import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import {
  mockCardDataObj
} from '../_mock/mockData';

describe('card', () => {
  it('should render correctly and match the snapshot', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Card
      key="1"
      cardData={mockCardDataObj}
      toggleFavorite={ mockFunc }/>);

    expect(wrapper).toMatchSnapshot();
  });
});
