import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import {
  mockFilms,
  mockPeople,
  mockPlanets,
  mockVehicles,
  mockSpecies
} from '../_mock/mockData';


describe('User intergration test', () => {
  beforeEach(() => {
    fetchMock.get('https://swapi.co/api/films/1', {
      status: 200,
      body: mockFilms
    });
    fetchMock.get('https://swapi.co/api/films/2', {
      status: 200,
      body: mockFilms
    });
    fetchMock.get('https://swapi.co/api/films/3', {
      status: 200,
      body: mockFilms
    });
    fetchMock.get('https://swapi.co/api/films/4', {
      status: 200,
      body: mockFilms
    });
    fetchMock.get('https://swapi.co/api/films/5', {
      status: 200,
      body: mockFilms
    });
    fetchMock.get('https://swapi.co/api/films/6', {
      status: 200,
      body: mockFilms
    });
    fetchMock.get('https://swapi.co/api/films/7', {
      status: 200,
      body: mockFilms
    });
    // planets
    fetchMock.get('https://swapi.co/api/planets/', {
      status: 200,
      body: mockPlanets
    });
    // people
    fetchMock.get('https://swapi.co/api/people/5/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/68/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/81/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/26/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/30/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/3/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/34/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/55/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/74/', {
       status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/74/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/72/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/73/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/people/63/', {
      status: 200,
      body: mockPeople
    });
    // vehicles
    fetchMock.get('https://swapi.co/api/vehicles/', {
      status: 200,
      body: mockVehicles
    });
    fetchMock.get('https://swapi.co/api/people/', {
      status: 200,
      body: mockPeople
    });
    //planets
    fetchMock.get('https://swapi.co/api/planets/1/', {
      status: 200,
      body: mockPlanets
    });
    fetchMock.get('https://swapi.co/api/species/1/', {
      status: 200,
      body: mockSpecies
    });
    fetchMock.get('https://swapi.co/api/species/2/', {
      status: 200,
      body: mockSpecies
    });
    fetchMock.get('https://swapi.co/api/planets/8/', {
      status: 200,
      body: mockPlanets
    });
    fetchMock.get('https://swapi.co/api/planets/20/', {
      status: 200,
      body: mockPlanets
    });
  });
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  it('should render Header and Welcome components', () => {
    const wrapper = shallow(<Router><App /></Router>);

    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

});
