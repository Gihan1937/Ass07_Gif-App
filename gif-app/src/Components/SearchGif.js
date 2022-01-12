import React, { Component } from "react";
import GifCard from "./GifCard";


class SearchGif extends Component {

    constructor(props) {     
        super(props);
        this.state = {
        userInput: "",
        data: [],
        };
    }

    getUserInput = (event) => {
        this.setState({ userInput: event.target.value });
    };

  
    getSearch = (ev) => {
       
        let url = `http://api.giphy.com/v1/gifs/search?q=${ev.target.value}&api_key=ruysAGzkc2xxGKaqLPIArAL8QNoBx8eZ`;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                this.setState({ data: response.data });
                this.props.update(response.data);
            })
        
    };

  
    getTrending = () => {

        const API_Key = "ruysAGzkc2xxGKaqLPIArAL8QNoBx8eZ"
        let url = "http://api.giphy.com/v1/gifs/trending?api_key=" + API_Key;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                this.props.update(response.data);
            })
        console.log('error');
    };

    getRandom = () => {
        const API_Key = "ruysAGzkc2xxGKaqLPIArAL8QNoBx8eZ"
        let url =
            "http://api.giphy.com/v1/gifs/random?api_key=" + API_Key;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
            this.setState({ data: response.data });
            this.props.update([response.data]);
            })
        console.log('error');
    };
    
  render() {
      return (
        <div className="images">
            <div className="sBar">
                <input
                    type="text"
                    placeholder="Search Here"
                    onChange={this.getUserInput}
                    id="bar"
                />
            </div>
  
            <div className = "buttons">
                <button onClick={this.getSearch} value={this.state.userInput}>Search</button>
                <button onClick={this.getTrending}>Trending</button>
                <button onClick={this.getRandom}>Random</button>
            </div>
        </div>
    );
  }
}

export default SearchGif;