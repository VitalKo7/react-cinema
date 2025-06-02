import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  films: [],
  status: null,
  errors: null,
};

export const fetchMovies = createAsyncThunk('movie/fetchmovies', async () => {
  try {
    const movies = await fetch(
      'https://676c1c82bc36a202bb86c01d.mockapi.io/movies'
    );

    if (!movies.ok) {
      throw new Error('Error on server, sorry');
    }

    return movies.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
// export const {  } = moviesSlice.actions;
