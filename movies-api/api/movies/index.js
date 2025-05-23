
import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getGenres, getUpcomingMovies, getPopularMovies, getTopRatedMovies,getTNowPlayingMovies} from '../tmdb-api'; 


const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/genre', asyncHandler(async (req, res) => {
    const getMovieGenre = await getGenres();
    res.status(200).json(getMovieGenre);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));

router.get('/top_rated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/now_playing', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getTNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));


export default router;
