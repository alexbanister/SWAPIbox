import React from 'react';
import createRouterContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';
import {
  mockFilms,
  mockPeople,
  mockPlanets,
  mockVehicles,
  mockSpecies,
  mockPerson,
  mockPlanet
} from '../_mock/mockData';

describe('User intergration test', () => {

  beforeEach(() => {
    fetchMock.get('https://swapi.co/api/films/', {
      status: 200,
      body: mockFilms
    });
    fetchMock.get('https://swapi.co/api/people/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/planets/', {
      status: 200,
      body: mockPlanets
    });
    fetchMock.get('https://swapi.co/api/vehicles/', {
      status: 200,
      body: mockVehicles
    });

    fetchMock.get('https://enzymeSucks.com/mockData/api/planets/1/', {
      status: 200,
      body: mockPlanet
    });
    fetchMock.get('https://enzymeSucks.com/mockData/api/species/1/', {
      status: 200,
      body: mockSpecies
    });
    fetchMock.get('https://enzymeSucks.com/mockData/api/people/5/', {
      status: 200,
      body: mockPerson
    });
  });
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  it('should render Header and Welcome components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Welcome').length).toEqual(1);
  });
  it.skip('should render CardContainer components on a route', () => {
    const context = createRouterContext();
    // const wrapper = shallow(<MyComponent />, { context })
    const wrapper = mount(<App />, { context });

    const peopleLink = wrapper.find('/people');
    peopleLink.simulate('click');

    let peopleCards = wrapper.find('Card').length;

    expect(peopleCards).toEqual(10);

    const loadMore = wrapper.find('.button');
    loadMore.simulate('click');

    peopleCards = wrapper.find('Card').length;
    expect(peopleCards).toEqual(20);
  });

});
