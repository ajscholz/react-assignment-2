import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent/ValidationComponent.js'
import CharComponent from './components/CharComponent/CharComponent.js'
import './App.css';

class App extends Component {
  state = {
    inputLength: 0,
    userInput: '',
  }

  userInputChange = event => {
    this.setState({
      inputLength: event.target.value.length,
      userInput: event.target.value,
    });
  }

  deleteCharBox = (charIndex) => {
    const newArray = [...this.state.userInput];
    newArray.splice(charIndex, 1);
    const newString = newArray.toString().replace(/,/g, '');
    this.setState({userInput: newString, inputLength: newString.length});
  }

  render() {

    const renderCharacterComponents =
      <div>
        {
          this.state.userInput.split('').map((char, index) => {
            return <CharComponent
              click={() => this.deleteCharBox(index)}
              input={char}
              key={index} />
          })
        }
      </div>

    return (
      <div style={{padding: 25}}>
        <h3 style={{display: 'inline-block'}}>Enter Text Here:  </h3>
        <input
          style={{
              marginLeft: 10,
              padding: 4,
              fontSize: 16,
            }}
          type='text'
          onChange={this.userInputChange}
          value={this.state.userInput} />
        <p>Input length is: {this.state.inputLength}</p>
        <ValidationComponent length={this.state.inputLength} />
        {renderCharacterComponents}
      </div>
    );
  }
}

export default App;
