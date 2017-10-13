const mockFilms = {
  "results": [
    {
      "title": "A New Hope",
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "release_date": "1977-05-25"
    }
  ]
};

const mockPeople = {
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://enzymeSucks.com/mockData/api/planets/1/",
      "species": ["https://enzymeSucks.com/mockData/api/species/1/"]
    }
  ]
};

const mockPlanets = {
  "results": [
    {
      "name": "Alderaan",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grasslands, mountains",
      "surface_water": "40",
      "population": "2000000000",
      "residents": ["https://enzymeSucks.com/mockData/api/people/5/"]
    }
  ]
};

const mockVehicles = {
  "results": [
    {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "manufacturer": "Corellia Mining Corporation",
      "cost_in_credits": "150000",
      "length": "36.8",
      "max_atmosphering_speed": "30",
      "crew": "46",
      "passengers": "30",
      "cargo_capacity": "50000",
      "consumables": "2 months",
      "vehicle_class": "wheeled"
    }
  ]
};

const mockSpecies = {
  "name": "Human"
};

const mockPerson = {
  "name": "Luke Skywalker"
};

const mockPlanet = {
  "name": "Tatooine"
};

const mockCardDataObj = {
  Homeworld: "Tatooine",
  Population: "200000",
  Species: "Human",
  id: 1507831320587,
  isFavorite: false,
  name: "Luke Skywalker",
  type: "people"
};

module.exports = {
  mockFilms,
  mockPeople,
  mockPerson,
  mockPlanets,
  mockPlanet,
  mockVehicles,
  mockSpecies,
  mockCardDataObj
};
