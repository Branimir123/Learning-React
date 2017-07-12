//Importing react library
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Youtube searchbar
import YTSearch from 'youtube-api-search';

//Importing react components
import SearchBar from './components/search-bar';
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

const API_KEY = require('../config.js').API_KEY;

//Main app component
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        this.videoSearch('surfboards');
     
    }
    
    videoSearch(term){
        YTSearch(
                {
                    key: API_KEY,
                    term 
                },
                (videos) => 
                {
                    this.setState({
                    videos: videos,
                    selectedVideo: videos[0] 
                });
                //this.setState({ videos: videos})
            }
        );
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch() }, 300);

        return (
        <div>
            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                 videos={this.state.videos} />
        </div>
        );   
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));