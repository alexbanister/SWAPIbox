import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import Welcome from '../Welcome/Welcome';
// import Helper from '../Helper';
import { Route } from 'react-router';
import { fetchList } from '../Helper.js';

class App extends Component {
  constructor() {
    super();
    this.state= {
      appArray: [],
      favCount: 0
    };
    this.getDataForRoute = this.getDataForRoute.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.getFavs = this.getFavs.bind(this);
  }

  increaseFavorite() {
    console.log('Increase!')
    const prevFavCount = this.state.favCount * 1;
    console.log(prevFavCount)
    const newFavCount = prevFavCount + 1;
    this.setState({favCount: newFavCount});
  }

  decreaseFavorite() {
    console.log('Decrease!')
    const prevFavCount = this.state.favCount * 1;
    const newFavCount = prevFavCount - 1;
    this.setState({ favCount: newFavCount });
  }

  toggleFavorite(id) {
    const oldState = [...this.state.appArray];
    const newState = oldState.map(item => {
      if (item.id === id) {
        console.log('fav?: ', item.isFavorite)
        item.isFavorite ? this.decreaseFavorite() : this.increaseFavorite();
        item.isFavorite = !item.isFavorite
      }
      return item
    })
    this.setState({appArray: newState})
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

  componentDidMount() {
    this.updateState();
  }

  getDataForRoute(route) {
    return this.state.appArray.filter( personPlaceOrThing => {
      return personPlaceOrThing.type === route;
    });
  }

  getFavs() {
    const Favorites = [...this.state.appArray].filter(item=> item.isFavorite )
    return Favorites;
  }

  render() {
    return (
      
        
      <div className="App">
        <Header favCount={this.state.favCount}/>

        <Route exact path="/"
          render={() =>
            <Welcome scroll='' />
          }
        />
        <Route exact path="/people"
          render={() =>
            <CardContainer cardData={this.getDataForRoute('people')} toggleFavorite={this.toggleFavorite}/>
          }
        />
        <Route exact path="/planets"
          render={() =>
            <CardContainer cardData={this.getDataForRoute('planets')} toggleFavorite={this.toggleFavorite}/>
          }
        />
        <Route exact path="/vehicles"
          render={() =>
            <CardContainer cardData={this.getDataForRoute('vehicles')} toggleFavorite={this.toggleFavorite}/>
          }
        />
        <Route exact path="/favorites"
          render={() =>
            <CardContainer cardData={this.getFavs()} toggleFavorite={this.toggleFavorite} />
          }
        />
      </div>
      
      
    );
  }
}

export default App;
