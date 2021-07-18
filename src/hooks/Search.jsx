import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "./Card";
import ViewAlbums from "./ViewAlbums";

const searchForArtistUrl = "https://api.spotify.com/v1/search";
const viewAlbumsURL =
  "https://api.spotify.com/v1/artists/ID/albums?include_groups=single";

function Search(props) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState("");
  const [theArtist, setTheArtist] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
      //console.log("Hello World: " + token);
      if (search != "") getArtist(search);
    }
  }, [token, search]);

  useEffect(() => {
    if (Object.keys(theArtist).length !== 0) getAlbums(theArtist);
  }, [theArtist]);

  const getArtist = (value) => {
    //console.log(searchForArtistUrl.concat("?q=" + value));

    async function searchForArtist() {
      try {
        const result = await axios.get(
          searchForArtistUrl.concat("?type=artist&q=" + value),
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setSearchResults(result.data.artists.items);
        //console.log(result.data.artists.items);
        //console.log(searchResults);
        //console.log(searchResults.length);
      } catch (e) {
        console.log(e);
        localStorage.clear();
      }
    }
    searchForArtist();
    //console.log(value);
  };

  const getAlbums = (artist) => {
    const id = artist.id;
    //console.log(viewAlbumsURL.replace("ID", id));

    async function searchForAlbums() {
      try {
        const result = await axios.get(viewAlbumsURL.replace("ID", id), {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        //setSearchResults(result.data.artists.items);
        setAlbums(result.data.items);
        console.log(result.data.items);
      } catch (e) {
        console.log(e);
        localStorage.clear();
      }
    }
    searchForAlbums();
  };

  if (Object.keys(theArtist).length === 0) {
    return (
      <div>
        <Container
          className="d-flex flex-column py-2"
          style={{ height: "20vh", marginTop: "10vh", width: "70%" }}
        >
          <Form.Control
            key="abc"
            type="search"
            placeholder="Search for Artists"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></Form.Control>
        </Container>

        {
          <div className="container justify-content-sm-center">
            <div className="row justify-content-center" style={{}}>
              {searchResults.length !== 0 &&
                searchResults.map(
                  (artist) =>
                    artist.images.length !== 0 && (
                      <div className="col-md-3">
                        <Card
                          key={artist.name}
                          img={artist.images[1].url}
                          name={artist.name}
                          numberOfFollowers={artist.followers.total.toLocaleString()}
                          rating={artist.popularity}
                          onClick={() => {
                            setTheArtist(artist);
                          }}
                        />
                      </div>
                    )
                )}
            </div>
          </div>
        }
      </div>
    );
  } else {
    return (
      <div>
        <ViewAlbums artistName={theArtist.name} albums={albums}></ViewAlbums>
      </div>
    );
  }
}

export default Search;
