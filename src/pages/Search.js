import React from "react";
import "./search.css";
const Search = () => {
    return (
        <div>
            <div className="spotifySearch">
                <div className="spotifyHomeTop">
                    <div className="spotifyHomeTopLeft">
                        <div>
                            <i class="fa-solid fa-circle-chevron-left fa-2xl" style={{ color: "#000000" }}></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-circle-chevron-right fa-2xl" style={{ color: "#000000" }}></i>
                        </div>
                    </div>
                    <div className="spotifySearchInput">       
                            <input type="text" className="spotifySearchForm" placeholder="What do you want to listen to?"/>
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
                    <p className="spotifySearchHeader">Browse all</p>
                </div>
                <div className="spotifySearchContent" >
                    <div className="spotifySearchContentItems">
                            <p className="spotifySearchContentTitle">Podcasts</p>
                            <p className="spotifySearchContentImage">Image</p>
                    </div>
                    <div className="spotifySearchContentItems">
                    <p className="spotifySearchContentTitle">Audiobooks</p>
                            <p className="spotifySearchContentImage">Image</p>
                    </div>
                    <div className="spotifySearchContentItems">
                    <p className="spotifySearchContentTitle">Live Events</p>
                            <p className="spotifySearchContentImage">Image</p>
                    </div>
                    <div className="spotifySearchContentItems">
                    <p className="spotifySearchContentTitle">Made For You</p>
                            <p className="spotifySearchContentImage">Image</p>
                    </div>
                    <div className="spotifySearchContentItems">
                    <p className="spotifySearchContentTitle">New Releases</p>
                            <p className="spotifySearchContentImage">Image</p>
                    </div>
                    <div className="spotifySearchContentItems">
                    <p className="spotifySearchContentTitle">2023 in Music</p>
                            <p className="spotifySearchContentImage">Image</p>
                    </div>
                    <div className="spotifySearchContentItems">
                    <p className="spotifySearchContentTitle">2023 in Podcasts</p>
                            <p className="spotifySearchContentImage">Image</p>
                    </div>
                    <div className="spotifySearchContentItems">
                    <p className="spotifySearchContentTitle">Hip-Hop</p>
                            <p className="spotifySearchContentImage">Image</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Search