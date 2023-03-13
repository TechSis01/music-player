import { FiSearch } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { useState, useEffect } from "react";



const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;


function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [currentTrack, setCurrentTrack] = useState("");
  const [tracks, setTracks] = useState([]);
  const [trackImage, setTrackImage] = useState("")
  useEffect(() => {
    // Get request to Spotify Access token

    let authparameter = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authparameter)
      .then((response) => response.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);
  // SEARCH FUNCTION
  async function search() {
    // Get request using search to get Track ID
    let trackParameter = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    let trackID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
      trackParameter
    )
      .then((response) => response.json())
      .then((data) => setTracks(data.tracks.items.splice(0, 4)));
    console.log(tracks[0].album.images[1].url);
    // .then(data => console.log(data.tracks.items[0].preview_url))

    // display the albums
    // console.log(`search for ${searchInput}`)
  }
  const SearchSongs = (e) => {
    setSearchInput(e.target.value);
  };

  const realSearch = (e) => {
    if (e.key == "Enter") {
      console.log("pressed enter");
      search();
    }
  };

  function handlePlay(preview,image) {
    setCurrentTrack(preview)
    setTrackImage(image)
  }
  return (
    <section>
      <div className="search-bar-container">
        <div>
          <FiArrowLeft className="arrow" />
        </div>
        <div>
          <FiArrowRight className="arrow" />
        </div>
        <div></div>
        <div className="input-box">
          <FiSearch />
          <input
            type="text"
            placeholder="search for songs..."
            onChange={SearchSongs}
            onKeyDown={realSearch}
          ></input>
        </div>
      </div>
      <p className="whats-hot-p">What's hot &#x1F525;</p>
      <h2>Trending</h2>
      {tracks.map((track) => (
        <div
          className="track-container"
          onClick={() => handlePlay(track.preview_url,track.album.images[1].url)}
        >
          <img
            src={track.album.images[1].url}
            alt="track image"
            width="100"
          ></img>
          <div>
            <p>{track.name}</p>
            <p>{track.artists[0].name}</p>
          </div>
        </div>
      ))}
      <div className="audio-container">
        {/* <img src={trackImage} alt="track-image"></img> */}
        <audio src={currentTrack} controls className="audio-container"></audio>
      </div>
    </section>
  );
}

export default SearchBar;
