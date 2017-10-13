const fetchMovieScroll = () => {
  return fetch('https://swapi.co/api/films/')
    .then(returnedData => returnedData.json())
    .then(moviesData => moviesData.results.map(movie => {
      const newMovieObj = {
        title: movie.title,
        releaseDate: movie.release_date,
        openingCrawl: movie.opening_crawl,
        EpisodeId: movie.episode_id
      };
      return newMovieObj;
    }));
};


const fetchList = (type) => {
  return fetch(`https://swapi.co/api/${type}/`)
    .then(returnedData => returnedData.json())
    .then(group => setType(group, type))
    .then(returnData => returnData.map(personPlaceOrThing => {
      if (type === 'people'){
        fetch(personPlaceOrThing.Homeworld)
          .then(response => response.json())
          .then(world => {
            personPlaceOrThing.Homeworld = world.name;
            personPlaceOrThing.Population = world.population;
            return personPlaceOrThing;
          })
          .then(personPlaceOrThing => {
            fetch(personPlaceOrThing.Species)
              .then(response => response.json())
              .then(species => {
                personPlaceOrThing.Species = species.name;
                return personPlaceOrThing;
              });
          });
      }
      if (type === 'planets') {
        const allResidents = personPlaceOrThing.Residents.map(residentAPI => {
          return fetch(residentAPI)
            .then(response => response.json());
        });
        Promise.all(allResidents)
          .then(residents => {
            personPlaceOrThing.Residents = residents.map(
              resident => resident.name
            );
            return personPlaceOrThing;
          });
      }
      return personPlaceOrThing;
    }));
};

const setType = (group, type) => {
  let newGroup = [];
  if (type === 'people') {
    newGroup = cleanPeopleData(group);
  }
  if (type === 'planets') {
    newGroup = cleanPlanetsData(group);
  }
  if (type === 'vehicles') {
    newGroup = cleanVehiclesData(group);
  }
  return newGroup;
};

const cleanVehiclesData = (arrayOfVehicles) => {
  const rawArray = arrayOfVehicles.results;
  const cleanArray = rawArray.map((vehicle, index) => {
    const newVehicle = {
      name: vehicle.name,
      'Model': vehicle.model,
      'Vehicle Class': vehicle.vehicle_class,
      'Passengers': vehicle.passengers,
      isFavorite: false,
      type: 'vehicles',
      id: generateId()
    };
    return newVehicle;
  });
  return cleanArray;
};

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

const cleanPeopleData = (arrayOfPeople) => {
  const rawArray = arrayOfPeople.results;
  const cleanArray = rawArray.map((person, index )=> {
    const newPerson = {
      name: person.name,
      'Homeworld': person.homeworld,
      'Species': person.species[0],
      'Population': 0,
      isFavorite: false,
      type: 'people',
      id: generateId()
    };
    return newPerson;
  });
  return cleanArray;
};




const cleanPlanetsData = (arrayOfPlanets) => {
  const rawArray = arrayOfPlanets.results;
  const cleanArray = rawArray.map((planet, index) => {
    const newPlanet = {
      name: planet.name,
      'Terrain': planet.terrain,
      'Poplulation': planet.population,
      'Climate': planet.climate,
      'Residents': planet.residents,
      isFavorite: false,
      type: 'planets',
      id: generateId()
    };
    return newPlanet;
  });
  return cleanArray;
};


module.exports = {
  fetchList,
  cleanVehiclesData,
  cleanPeopleData,
  cleanPlanetsData,
  fetchMovieScroll
};
