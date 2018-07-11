import axios from "axios";

export default {
  // Gets all books
  getAnimals: function() {
    return axios.get("/api/adopt");
  },
  // Gets the book with the given id
  getAnimal: function(id) {
    return axios.get("/api/adopt/" + id);
  },
  // Saves a book to the database
  saveAnimal: function(animalData) {
    return axios.post("/api/surrender", animalData);
  }
};
