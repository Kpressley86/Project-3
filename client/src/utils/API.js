import axios from "axios";

export default {
  // Gets all save
  getSaves: function() {
    return axios.get("/api/save");
  },
  // Gets the save with the given id
  getSave: function(id) {
    return axios.get("/api/save/" + id);
  },
  // Deletes the save with the given id
  deleteSave: function(id) {
    return axios.delete("/api/save/" + id);
  },
  // Saves a save to the database
  saveSave: function(saveData) {
    return axios.post("/api/save", saveData);
  }
};
