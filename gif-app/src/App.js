import './App.css';
import React, {Component} from 'react';
import SearchGif from "./Components/SearchGif";
import GifCard from "./Components/GifCard";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getData = newData => {
    this.setState({data:newData});
  }
//pass the data
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Welcome to Giphy</h1>
          <p className="font">
          Find Your Favorite gif here!</p>
        </header>
        <div className="m-5 mb-3">
        
          <SearchGif update={this.getData} /><br></br>
          <div className='card'>
            {this.state.data.map((item, index) => (
              <GifCard key={index} url={item.images.original.url}/>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;