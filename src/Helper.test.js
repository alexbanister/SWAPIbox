import fetchMock from 'fetch-mock';
import {
  fetchMovieScroll,
  fetchList,
  cleanVehiclesData,
  cleanPeopleData,
  cleanPlanetsData
} from './Helper';
import {
  mockPeople,
  mockPlanets,
  mockVehicles,
  cleanedVehicleData,
  cleanedMockPeople,
  cleanedMockPlanets
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
    expect(cleanedData['Vehicle Class'])
      .toEqual(cleanedVehicleData['Vehicle Class']);
    expect(cleanedData.isFavorite).toEqual(cleanedVehicleData.isFavorite);
    expect(cleanedData.type).toEqual(cleanedVehicleData.type);
  });
});

describe('cleanPeopleData', () => {

  it('should take an arg of people and clean it', () => {

    cleanPeopleData(mockPeople);

    expect(mockPeople.results[0].name).toEqual(cleanedMockPeople.name);
    expect(mockPeople.results[0].homeworld)
      .toEqual(cleanedMockPeople.Homeworld);
    expect(mockPeople.results[0].type).toEqual(cleanedMockPeople.type);

  });
});

describe('cleanPlantesData', () => {

  it('should take an arg of planets and clean it', () => {

    cleanPlanetsData(mockPlanets);

    expect(mockPlanets.results[0].name).toEqual(cleanedMockPlanets[0].name);
    expect(mockPlanets.results[0].climate)
      .toEqual(cleanedMockPlanets[0].climate);
    expect(mockPlanets.results[0].population)
      .toEqual(cleanedMockPlanets[0].population);
    expect(mockPlanets.results[0].terrain)
      .toEqual(cleanedMockPlanets[0].terrain);

  });
});
