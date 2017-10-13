import React from 'react';
import fetchMock from 'fetch-mock';
import {shallow} from 'enzyme';
import {
  fetchMovieScroll,
  fetchList,
  cleanVehiclesData
} from './Helper';
import {
  mockFilms,
  mockPeople,
  mockPlanets,
  mockVehicles,
  mockSpecies,
  mockCardDataObj,
  cleanedVehicleData
} from './_mock/mockData';

describe('fetch movie scroll', () => {
  const mockFilms = {
    results: [
      {
        title: "filmName",
        scroll: "hi",
        date: "10/12/17"
      }
    ]
  };

  const mockFilmsReturnData = {
    title: "filmName",
    scroll: "hi",
    date: "10/12/17"
  };

  it('should return an object of values', () => {
    fetchMock.get('https://swapi.co/api/films/', {
      status: 200,
      body: mockFilms
    });

    fetchMovieScroll();

    expect(mockFilmsReturnData.title).toEqual("filmName");
    expect(mockFilmsReturnData.scroll).toEqual("hi");
    expect(mockFilmsReturnData.date).toEqual("10/12/17");
  });

});

describe('fetchList', () => {
  const mockPlanetsJson = {
    results: [
      {
        name: "alex",
        terrain: "bumpy",
        population: "lots and lots",
        climate: "slightly cold",
        residents: []
      }
    ]
  };

  const mockPlanetsReturnData = {
    name: "planet name",
    scroll: "hi",
    date: "10/12/17"
  };

  it('should take in an arg (type) of planets and return planet data', () => {
    fetchMock.get('https://swapi.co/api/planets/', {
      status: 200,
      body: mockPlanetsJson
    });
    fetchMock.get('https://swapi.co/api/people/5/', {
      status: 200,
      body: {
        name: "john michael"
      }
    });
    fetchMock.get('https://swapi.co/api/people/68/', {
      status: 200,
      body: {
        name: "nick b"
      }
    });
    fetchMock.get('https://swapi.co/api/people/81/', {
      status: 200,
      body: {
        name: "nick T"
      }
    });

    fetchList('planets');

    expect(mockPlanetsReturnData.name).toEqual("planet name");
    expect(mockPlanetsReturnData.scroll).toEqual("hi");
    expect(mockPlanetsReturnData.date).toEqual("10/12/17");
  });
});

describe('cleanVehiclesData', () => {

  it('should take an array of vehicles and clean it', () => {

    const cleanedData = cleanVehiclesData(mockVehicles);
    expect(cleanedData.name).toEqual(cleanedVehicleData.name);
    expect(cleanedData.Model).toEqual(cleanedVehicleData.Model);
    expect(cleanedData['Vehicle Class']).toEqual(cleanedVehicleData['Vehicle Class']);
    expect(cleanedData.isFavorite).toEqual(cleanedVehicleData.isFavorite);
    expect(cleanedData.type).toEqual(cleanedVehicleData.type);
  });
});

describe('cleanPeopleData', () => {

  it('should take an array of people and clean it', () => {

    const cleanedData = cleanPeopleData(mockPeople);
    expect(cleanedData.name).toEqual(cleanedPeopleData.name);
    expect(cleanedData.Model).toEqual(cleanedPeopleData.Model);
    expect(cleanedData['Vehicle Class']).toEqual(cleanedPeopleData['Vehicle Class']);
    expect(cleanedData.isFavorite).toEqual(cleanedPeopleData.isFavorite);
    expect(cleanedData.type).toEqual(cleanedPeopleData.type);
  });
});
