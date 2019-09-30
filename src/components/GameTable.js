import React, { Component } from "react";
import API from "../utils/API";
import { MDBDataTable } from "mdbreact";

class gameTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null,
      collection: []
    };
  }

  componentDidMount() {
    API.gameCollection().then(res => {
      let games = [];
      console.log(res.data);
      res.data.forEach(game => {
        const {
          owned,
          thumbnail,
          gameId,
          name,
          yearPublished,
          isExpansion,
          rank
        } = game;

        if (owned) {
          let gameData = {
            image: (
              <a
                href={`https://boardgamegeek.com/boardgame/${gameId}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='game-thumbnail'
                  src={thumbnail}
                  alt='thumbnail'
                />
              </a>
            ),
            name: name,
            yearPublished: yearPublished,
            isExpansion: isExpansion ? "Yes" : "No",
            bggRank: rank
          };
          games.push(gameData);
        }
      });

      this.setState({
        games,
        collection: res.data
      });
    });
  }

  render() {
    const { games } = this.state;

    const data = {
      columns: [
        {
          label: "Box Cover",
          field: "image",
          sort: "asc",
          width: 30,
          className: "game-thumbnail-container"
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150
        },
        {
          label: "Year Published",
          field: "yearPublished",
          sort: "asc",
          width: 50
        },
        {
          label: "Expansion",
          field: "isExpansion",
          sort: "asc",
          width: 100
        },
        {
          label: "BGG Rank",
          field: "bggRank",
          sort: "asc",
          width: 100
        }
      ],
      rows: games
    };
    return (
      <div className='games-container'>
        <h1>Game Collection</h1>
        <h5>
          *This data of my personal game collection comes from a custom
          BoardGameGeek API. This is to both demonstrate usage of an API and to
          display what games I own.
        </h5>
        {games ? (
          <MDBDataTable striped bordered hover data={data} />
        ) : (
          <div className='spinner-border text-primary'></div>
        )}
      </div>
    );
  }
}

export default gameTable;
