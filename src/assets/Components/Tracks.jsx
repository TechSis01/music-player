// import React from "react";
// import { useEffect,useState } from "react";

// const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
// const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

// function Tracks({token}) {
//  const [albums,setAlbums] = useState([])
//   let trackParameter;
//   useEffect(()=>{
    
//     trackParameter = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//   //  fetch(
//   //     `https://api.spotify.com/v1/browse/new-releases`,
//   //     trackParameter
//   //   )
//   //     .then((response) => response.json())
//   //     .then((data) => setAlbums(data));
//       // .then((data) => setAlbums(data.albums.items.splice(0,5)));
//   },[])
  
 
//   return <div>tracks</div>;
// }

// export default Tracks;
