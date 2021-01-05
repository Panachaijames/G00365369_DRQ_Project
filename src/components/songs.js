import React from 'react';
import {SongsItem} from './songsItem';

export class Songs extends React.Component
{
    render(){
        return(
            this.props.songs.map((song)=>{
                return <SongsItem song={song} ReloadData={this.props.ReloadData}></SongsItem>
            })
        );

    }
}