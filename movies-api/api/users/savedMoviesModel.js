import mongoose from 'mongoose';

//Favourites and Watchlist Schema

  const savedMovieSchema = new Schema({
  favorites: [{
    movieId: { type: Number, required: true}
  }],
  watchlist: [{
    movieId: { type: Number, required: true}
  }]
});

export default mongoose.model('Saved', savedMovieSchema);