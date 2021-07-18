import React from "react";
import AlbumCard from "./AlbumCard";

function ViewAlbums(props) {
  return (
    <div>
      <div style={{ textAlign: "start", margin: "10vh" }}>
        <h2 style={{ color: "black" }}>{props.artistName}</h2>
        <h6 style={{ color: "grey" }}>
          <small>Albums </small>
        </h6>
      </div>
      <div className="container">
        <div className="container justify-content-sm-center">
          <div className="row justify-content-center" style={{}}>
            {props.albums.length !== 0 &&
              props.albums.map(
                (album) =>
                  album.images.length !== 0 && (
                    <div className="col-md-3">
                      <AlbumCard
                        key={album.name}
                        artistName={props.artistName}
                        img={album.images[1].url}
                        name={album.name}
                        numberOfTracks={album.total_tracks}
                        releaseDate={album.release_date}
                        visitSpotify={album.external_urls.spotify}
                        onClick={() => {}}
                      />
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAlbums;
