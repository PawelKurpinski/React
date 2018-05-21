import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDrn9xRv8sLcxUifWnmvWcEetQNTcDRrSA';


class App extends Component {
    constructor(props){
        super(props)
        
        this.state = { videos: [] }; /* videos is the name that is up to us; 
        we will get links, so this object will have an array inside of it */
       
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }   
    /*    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
           this.setState({ videos: data });
            }); It was like this but! when we have the same words as key and value we can 
            delete one of them istead leving videos: videos; This name and value is OUR CHOICE!
            it's different videos than above */
       
        render() {
            return(
            <div>
            <SearchBar />
            </div>
        );
    }    
};        

ReactDOM.render(<App />, document.querySelector('.container'));