import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res)
    .catch(err => console.log(err.message))
}


class App extends React.Component {
    constructor(){
      super();
       this.state = {
        doggos: [],
        breed: 'husky'
       }
   
    }

    componentDidMount() {
        fetchDogs(this.state.breed)
        .then( res => {
            this.setState( {doggos: res.data.message})
        })
    }

    componentDidUpdate(prevProps, prevState) {
    if(prevState.doggos !== this.state.doggos){
        console.log('The dogs have changed')
        if(this.state.breed === 'chihuahua') {
           fetchDogs('husky').then(res=> {
            this.setState({doggos: res.data.message, breed: 'husky'})
           }) 
        }
    }
    }

    searchDogs = dogName => {
        fetchDogs(dogName)
        .then(res => {
           
            this.setState({doggos: res.data.message, breed: dogName});
        })
    }

    render(){
        return (
          <>
            <h1>My app</h1>
            <SearchForm  searchDogs={this.searchDogs}/>
            {this.state.doggos.map((dog, index) => (
              <img width='200px' src={dog} key={index} alt={dog}></img>   
            ))}
           
         </>
        )
    }


}

export default App;