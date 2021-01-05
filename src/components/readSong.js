import React from 'react';
import { Songs } from './songs';
import axios from 'axios';

export class ReadSong extends React.Component{

    constructor()
    {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        songs:[ ]
    };
    componentDidMount(){
        axios.get('http://localhost:4000/api/songs')
        .then(
            (response) => {
                this.setState({songs: response.data})
            }
        )
        .catch(
            (error) => {console.log(error)}
        );
    }

    ReloadData()
    {
        axios.get('http://localhost:4000/api/songs')
        .then(
            (response) => {
                this.setState({songs: response.data})
            }
        )
        .catch(
            (error) => {console.log(error)}
        );
    }
    render(){
        return(
            <div>
            <h3>Feel Free to add and edit!</h3>
            <Songs songs = {this.state.songs} ReloadData={this.ReloadData}></Songs>
            </div>

        )
    }
}