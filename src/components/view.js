import { render } from '@testing-library/react';
import React from 'react';
import { Songs } from './songs';


export class View extends React.Component{

    state = {
        
        songs:[
        {"title":"1904","artist":"The Tallest Man on Earth","year":"2012","web_url":"http://www.songnotes.cc/songs/78-the-tallest-man-on-earth-1904","img_url":"http://fireflygrove.com/songnotes/images/artists/TheTallestManOnEarth.jpg"},
        {"title":"#40","artist":"Dave Matthews","year":"1999","web_url":"http://www.songnotes.cc/songs/119-dave-matthews-40","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg"},
        {"title":"40oz to Freedom","artist":"Sublime","year":"1996","web_url":"http://www.songnotes.cc/songs/45-sublime-40oz-to-freedom","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png"},
        {"title":"#41","artist":"Dave Matthews","year":"1996","web_url":"http://www.songnotes.cc/songs/46-dave-matthews-band-41","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg"},
        {"title":"American Girl","artist":"Tom Petty","year":"1977","web_url":"http://www.songnotes.cc/songs/86-tom-petty-american-girl","img_url":"http://fireflygrove.com/songnotes/images/artists/TomPetty.png"},
        {"title":"American Music","artist":"Violent Femmes","year":"1991","web_url":"http://www.songnotes.cc/songs/123-violent-femmes-american-music","img_url":"http://fireflygrove.com/songnotes/images/artists/ViolentFemmes.jpg"},
        {"title":"American Pie","artist":"Don McLean","year":"1972","web_url":"http://www.songnotes.cc/songs/132-don-mclean-american-pie","img_url":"http://fireflygrove.com/songnotes/images/artists/DonMcLean.jpg"},
        {"title":"And it Stoned Me","artist":"Van Morrison","year":"1970","web_url":"http://www.songnotes.cc/songs/27-van-morrison-and-it-stoned-me","img_url":"http://fireflygrove.com/songnotes/images/artists/VanMorrison.jpg"},
        {"title":"A Sailor's Christmas","artist":"Jimmy Buffett","year":"1996","web_url":"http://www.songnotes.cc/songs/11-jimmy-buffett-a-sailors-christmas","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png"},
        {"title":"Badfish","artist":"Sublime","year":"1996","web_url":"http://www.songnotes.cc/songs/21-sublime-badfish","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png"},
        {"title":"Banana Pancakes","artist":"Jack Johnson","year":"2005","web_url":"http://www.songnotes.cc/songs/102-jack-johnson-banana-pancakes","img_url":"http://fireflygrove.com/songnotes/images/artists/JackJohnson.png"},
        {"title":"Barefoot Children","artist":"Jimmy Buffett","year":"1995","web_url":"http://www.songnotes.cc/songs/9-jimmy-buffett-barefoot-children","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png"},
        {"title":"Big Parade","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/63-the-lumineers-big-parade","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png"},
        {"title":"Brown Eyed Girl","artist":"Van Morrison","year":"1967","web_url":"http://www.songnotes.cc/songs/69-van-morrison-brown-eyed-girl","img_url":"http://fireflygrove.com/songnotes/images/artists/VanMorrison.jpg"},
        {"title":"Cape Canaveral","artist":"Conor Oberst","year":"2008","web_url":"http://www.songnotes.cc/songs/75-conor-oberst-cape-canaveral","img_url":"http://fireflygrove.com/songnotes/images/artists/ConorOberst.jpg"},
        {"title":"Carry On","artist":"fun.","year":"2012","web_url":"http://www.songnotes.cc/songs/122-fun-carry-on","img_url":"http://fireflygrove.com/songnotes/images/artists/Fun.png"},
        {"title":"Catch the Wind","artist":"Donovan","year":"1965","web_url":"http://www.songnotes.cc/songs/131-donovan-catch-the-wind","img_url":"http://fireflygrove.com/songnotes/images/artists/Donovan.jpg"},
        ]
    }


render()
{
    return(
        <div className="App">
            <h1>Read Component</h1>
        <Songs songs = {this.state.songs}></Songs>
        
        </div>
    );
}
}