import express from 'express';
import { getRandomQuote, getFavorites, createFavorite, deleteFavorite } from '../controllers/quotes.controller.js';

const router = express.Router();

router.get('/random', getRandomQuote);
router.get('/favorites', getFavorites);
router.post('/favorites', createFavorite);
router.delete('/favorites/:id', deleteFavorite);

export default router;