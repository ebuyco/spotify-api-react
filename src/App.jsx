import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import { FormGroup , FormControl, InputGroup, Glyphicon  } from 'react-bootstrap';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: '',
            artist: null,
            
        }
    }

    search(){
        console.log('this.state: ', this.state);
       
        //var myHeaders = new Headers();
        //console.log('FETCH_URL', FETCH_URL);
    
        let myOptions = {
          method: 'GET',
          headers: {
              'Authorization':'Bearer' + accessToken
          },
          mode: 'cors',
          cache: 'default'
        };
    
        fetch(FETCH_URL, myOptions)
          .then(response => response.json())
          .then(json => console.log(json))
    
      }

    render(){
        return(
            <div className="App">
                <div className="App-title">Music Master</div>
              <FormGroup>
                  <InputGroup>
                    <FormControl 
                    type="text"
                    placeholder="Search for an Artist"
                     value = {this.state.query}
                     onChange = { event => {this.setState({query: event.target.value})}}
                     onKeyPress={event => {
                         if (event.key !== 'Enter') {
                             this.search()
                         }
                     }}
                    />
                    <InputGroup.Addon onClick= {() => this.search()}>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                  </InputGroup>
              </FormGroup>
                     <Profile
                     artist={this.state.artist}
                     />
             <div className="Gallery">Gallery

             </div>
            </div>
        )
    }
}

export default App;