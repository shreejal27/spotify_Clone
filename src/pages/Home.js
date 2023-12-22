import React from "react";

import "./home.css";

const Home = () => {
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
                <div>
                    <p className="greetings">Good afternoon</p>
                </div>
                <div className="spotifyFavAlbums">
                    <div className="spotifyFavAlbumsItem">
                        <div className="spotifyFavAlbumsImage">Img</div>
                        <div className="spotifyFavAlbumsText">Chill</div>
                    </div>
                    <div className="spotifyFavAlbumsItem">
                        <div className="spotifyFavAlbumsImage">Img</div>
                        <div className="spotifyFavAlbumsText">Chill</div>
                    </div>
                    <div className="spotifyFavAlbumsItem">
                        <div className="spotifyFavAlbumsImage">Img</div>
                        <div className="spotifyFavAlbumsText">Chill</div>
                    </div>
                    <div className="spotifyFavAlbumsItem">
                        <div className="spotifyFavAlbumsImage">Img</div>
                        <div className="spotifyFavAlbumsText">Chill</div>
                    </div>
                    <div className="spotifyFavAlbumsItem">
                        <div className="spotifyFavAlbumsImage">Img</div>
                        <div className="spotifyFavAlbumsText">Chill</div>
                    </div>
                    <div className="spotifyFavAlbumsItem">
                        <div className="spotifyFavAlbumsImage">Img</div>
                        <div className="spotifyFavAlbumsText">Chill</div>
                    </div>
                </div>
            </div>
            <div className="spotifyPlaylists">
                <h1>Made For Rajwi</h1>
            </div>
        </div>
    )
}

export default Home