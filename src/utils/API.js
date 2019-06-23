import axios from "axios";

export default {
  // Uses BoardGameGeek API to search for my personal game collection.
  gameCollection: function() {
    let username = "Merek1087";
    let url = `https://bgg-json.azurewebsites.net/collection/${username}?grouped=false`;

    return axios.get(url);
  }
};
