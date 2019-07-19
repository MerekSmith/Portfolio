import React, { Component } from "react";
import API from "../utils/API";
import { MDBDataTable } from "mdbreact";

class gameTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      collection: []
    };
  }

  componentDidMount() {
    API.gameCollection().then(res => {
      let games = [];

      res.data.forEach(game => {
        if (game.owned) {
          let gameData = {
            name: game.name,
            yearPublished: game.yearPublished,
            isExpansion: game.isExpansion ? "Yes" : "No",
            bggRank: game.rank
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
    const data = {
      columns: [
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
      rows: this.state.games
    };
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Game Collection</h1>
        <h5 style={{ textAlign: "center" }}>
          *This data of my personal game collection comes from a custom
          BoardGameGeek API. This is to both demonstrate usage of an API and to
          display what games I own.
        </h5>
        <MDBDataTable striped bordered hover data={data} />
      </div>
    );
  }
}

export default gameTable;
