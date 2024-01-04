import React from "react";

import "./album.css";

const Album = () => {
    return (
        <div>
            <div className="spotifyHome">
                <div className="spotifyHomeTop">
                    <div className="spotifyHomeTopLeft">
                        <div>
                            <i class="fa-solid fa-circle-chevron-left fa-2xl" style={{ color: "#000000" }}></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-circle-chevron-right fa-2xl" style={{ color: "#000000" }}></i>
                        </div>
                    </div>
                    <div className="spotifyHomeTopRight">
                        <div className="circle">
                            <i class="fa-solid fa-circle fa-2xl" style={{ color: "#272727", position: "relative" }}></i>
                            <i class="fa-solid fa-users fa-sm" style={{ color: "white", position: "absolute" }}></i>
                        </div>
                        <div className="circle">
                            <i class="fa-solid fa-circle fa-2xl" style={{ color: "#272727", position: "relative" }}></i>
                            <i class="fa-solid fa-users fa-sm" style={{ color: "white", position: "absolute" }}></i>
                        </div>
                    </div>
                </div>

                <div className = "albumHero">
                    <div className="albumHeroImage">
                        a
                    </div>
                    <div className="albumHeroText">
                        <div className= "albumHeroTextMargin">
                        <p className="playlistType">Public Playlist</p>
                        <p className="playlistName">Juice Wrld</p>
                        <p className="playlistText">ululululul</p>
                        <p className="playlistDetails">Rajwi 43 songs, 2 hr 14 min</p>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Album