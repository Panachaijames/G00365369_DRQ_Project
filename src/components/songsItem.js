//all import
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class SongsItem extends React.Component
{
    constructor()
    {
        super();

        this.DeleteSong = this.DeleteSong.bind(this);
    }
    //delete the song+ call the reloadData function(), to immidiate update the page
    DeleteSong(e){
        e.preventDefault();
        
        console.log("Delete: "+this.props.song._id);
        axios.delete("http://localhost:4000/api/songs/"+this.props.song._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }
    //structure for readSong + aboutMe
    render(){
        return(
            <div>
                <Card>
                    <Card.Header>{this.props.song.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.song.songImg} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                            <p>{this.props.song.artist}</p>
                                <p>{this.props.song.year}</p>
                                <p>{this.props.song.webUrl}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/editSong/"+ this.props.song._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteSong}>Delete</Button>
                </Card>
                </div>
        );

     }
 }                                                                      