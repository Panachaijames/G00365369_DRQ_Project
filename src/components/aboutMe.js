import React from 'react';
import { Songs } from './songs';

export class AboutMe extends React.Component
{
    state = {
        
        songs:[
        {"title":"PayPhone","artist":"Maroon5","year":"2012","webUrl":"https://genius.com/Maroon-5-payphone-lyrics","songImg":"https://i.pinimg.com/originals/46/d0/2b/46d02b591d76081a15226c1ce6ce0649.png"},
        {"title":"Without you","artist":"the kid LAROI","year":"2020","webUrl":"https://genius.com/The-kid-laroi-without-you-lyrics","songImg":"https://images.genius.com/9e771bea31ca7137da947ccb37a9266e.1000x1000x1.png"},
        {"title":"Silence","artist":"Mashmellow feat. Khalid","year":"2017","webUrl":"https://genius.com/a/khalid-struggles-with-his-loneliness-on-marshmello-s-new-single-silence","songImg":"https://upload.wikimedia.org/wikipedia/en/c/c4/Marshmello_Silence.jpg"},
        {"title":"Angle With a Shotgun","artist":"The Cab","year":"2011","webUrl":"https://genius.com/The-cab-angel-with-a-shotgun-lyrics","songImg":"https://images-na.ssl-images-amazon.com/images/I/61uHyqPvYbL._AC_UL600_SR600,600_.jpg"},
        {"title":"Riptide","artist":"Vance Joy","year":"2013","webUrl":"https://genius.com/Vance-joy-riptide-lyrics","songImg":"https://images.genius.com/b39eaa9c17c400ae055e90a5a7a8e7b3.1000x1000x1.jpg"},
          ]
    }


    render()
    {
        return(
            <div className="App">
                <h1>My name is Panachai thongvinit</h1>
                <h1>Below is my top 5 song on my playlist</h1>
                <h1>Hope you like it!</h1>
            <Songs songs = {this.state.songs}></Songs>
            
            </div>
        );
    }

}