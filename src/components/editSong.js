import React from 'react';
import axios from 'axios';

export class editSong extends React.Component
{
    //define the variable(method) 
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeSongImg = this.onChangeSongImg.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeWebUrl = this.onChangeWebUrl.bind(this)
        this.state = {
            Title: '',
            Artist: '',
            SongImg: '',
            Year: '',
            WebUrl: ''
        }
    }
    componentDidMount()
    {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/songs/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Artist:response.data.artist,
                SongImg:response.data.songImg,
                Year:response.data.year,
                WebUrl:response.data.webUrl
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    onChangeArtist(e)
    {
        this.setState({
            Artist:e.target.value
        });
    }
    onChangeYear(e)
    {
        this.setState({
            Year:e.target.value
        });
    }
    onChangeSongImg(e)
    {
        this.setState({
            SongImg:e.target.value
        });
    }
    onChangeWebUrl(e)
    {
        this.setState({
            WebUrl:e.target.value
        });
    }
    onChangeTitle(e) {
        this.setState({
            Title:e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        alert("Song: " + this.state.Title + " " +
         this.state.Artist + " "+ this.state.SongImg+ " " + 
         this.state.Year+" "+this.state.WebUrl);

        const newSong = {
            title:this.state.Title,
            artist:this.state.Artist,
            songImg:this.state.SongImg,
            year:this.state.Year,
            webUrl:this.state.WebUrl,
            _id:this.state._id
        }

        axios.put('http://localhost:4000/api/songs/'+this.state._id, newSong)
        .then(res => {
            console.log(res.data)
        })
        .catch();
        
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Add song Title: </label>
                    <input type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.onChangeTitle}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Add Song Artist:</label>
                    <input type='text'
                    className='form-control'
                    value={this.state.Artist}
                    onChange={this.onChangeArtist}>

                    </input>
                </div>
                <div className="form-group">
                    <label>Add Song IMG:</label>
                    <input type='text'
                    className='form-control'
                    value={this.state.SongImg}
                    onChange={this.onChangeSongImg}>

                    </input>
                </div>
                <div className="form-group">
                    <label>Add Song Year:</label>
                    <input type='text'
                    className='form-control'
                    value={this.state.Year}
                    onChange={this.onChangeYear}>

                    </input>
                </div>
                <div className="form-group">
                    <label>Add Song webUrl:</label>
                    <input type='text'
                    className='form-control'
                    value={this.state.WebUrl}
                    onChange={this.onChangeWebUrl}>

                    </input>
                </div>
                <div className="form-group">
                    <input type='submit'
                        value='Add Song'
                        className='btn btn-primary'>

                    </input>

                </div>
                </form>
            </div>
        );
    }
}