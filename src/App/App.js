import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import Button from '../Button/Button';
import Welcome from '../Welcome/Welcome';
import { Route } from 'react-router';
import { fetchList, fetchMovieScroll } from '../Helper.js';

class App extends Component {
  constructor() {
    super();
    this.state= {
      appArray: [],
      pageNumber: 1,
      movieArray: []
    };
    this.getDataForRoute = this.getDataForRoute.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.getRandomMovie = this.getRandomMovie.bind(this);
  }

  toggleFavorite(id) {
    const oldState = [...this.state.appArray];
    const newState = oldState.map(item => {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite;
      }
      return item;
    });
    this.setState({appArray: newState});
  }

  handleLoadMore() {
    this.updateState(this.state.pageNumber + 1);
    this.setState({
      pageNumber: this.state.pageNumber + 1
    });
  }

  updateState() {
    const daStuffs = [
      fetchList('people'),
      fetchList('planets'),
      fetchList('vehicles')
    ];
    Promise.all(daStuffs)
      .then(everything => {
        const newEverything = everything.reduce( (accum, aThingOfThings) => {
          return [...accum, ...aThingOfThings];
        }, []);
        const newState = [...this.state.appArray, ...newEverything];
        this.setState({
          appArray: newState
        });
      });
  }

  updateMovieArray() {
    fetchMovieScroll()
      .then(movies => this.setState({
        movieArray: movies
      }, () => this.getRandomMovie()));
  }

  componentDidMount() {
    this.updateState();
    this.updateMovieArray();
  }

  getDataForRoute(route) {
    return this.state.appArray.filter( personPlaceOrThing => {
      return personPlaceOrThing.type === route;
    });
  }

  getFavorites() {
    return this.state.appArray.filter( personPlaceOrThing => {
      return personPlaceOrThing.isFavorite;
    });
  }

  getRandomMovie() {
    const movieIndex = Math.floor(Math.random() * ((7 - 1) + 1)) + 1;
    if (this.state.movieArray[movieIndex]){
      return this.state.movieArray[movieIndex];
    }
    return this.getRandomMovie;
  }

  render() {

    return (
      <div className="App">
        <Header favCount={this.getFavorites().length}/>

        {
          this.state.movieArray.length < 7 &&
          <h3>Loading</h3>
        }

        {
          this.state.movieArray.length === 7 &&
        <Route exact path="/"
          render={() =>
            <Welcome movie={this.getRandomMovie()} />
          }
        />
        }

        <Route exact path="/people"
          render={() =>
            <div>
              <CardContainer
                cardData={this.getDataForRoute('people')}
                toggleFavorite={this.toggleFavorite}/>
              <Button label='Load More' onClick={this.handleLoadMore} />
            </div>
          }
        />

        <Route exact path="/planets"
          render={() =>
            <div>
              <CardContainer
                cardData={this.getDataForRoute('planets')}
                toggleFavorite={this.toggleFavorite}/>
              <Button label='Load More' onClick={this.handleLoadMore} />
            </div>
          }
        />
        <Route exact path="/vehicles"
          render={() =>
            <div>
              <CardContainer
                cardData={this.getDataForRoute('vehicles')}
                toggleFavorite={this.toggleFavorite}/>
              <Button label='Load More' onClick={this.handleLoadMore} />
            </div>
          }
        />
        <Route exact path="/favorites"
          render={() =>
            <CardContainer
              cardData={this.getFavorites()}
              toggleFavorite={this.toggleFavorite}/>
          }
        />
      </div>


    );
  }
}

export default App;
