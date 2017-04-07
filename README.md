## Gif-Gallery-Player

Author: Sam Clements

#### About
This projects is designed to allow users to Search, upload via drag n drop, gifs and export them
as lists to share or play around with. More in App tools to come:


##### Resources

Main tools & Frameworks:
Express with React 
-----
Node.js
Firebase NoSQL DB

Dependencies:
    "bootstrap": 
    "classnames"
    "express"
    "firebase"
    "jquery"
    "morgan"
    "react"
    "react-bootstrap"
    "react-dom"
    "react-dropzone"
    "react-gif-player"
    "react-router"
    "react-router-bootstrap"
    "react-router-dom"
    "reactfire"

#### firebase info


###Last thought:
  let allGif = this.gifList.map((gif, index) =>{
        return(
            <li key={index + 1} >
                {gif.url}
            </li>
        )
        }
    )

