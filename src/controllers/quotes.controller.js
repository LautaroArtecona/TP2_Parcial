import { fetchExternalQuote, getAllFavorites, saveFavorite, removeFavorite } from '../services/quotes.service.js';

export const getRandomQuote = async (req, res) => {
  try {
    const quote = await fetchExternalQuote();
    res.json(quote); 
  } catch (error) {
    res.status(503).json({ message: 'Service Unavailable' });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const favorites = await getAllFavorites();
    res.json({ favorites }); 
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createFavorite = async (req, res) => {
  const { quote, author } = req.body;

  if (!quote || !author) {
    return res.status(400).json({ message: 'Missing quote or author' });
  }

  try {
    const newFavorite = await saveFavorite(quote, author);
    res.status(201).json({ 
      message: 'Favorite added', 
      favorite: newFavorite 
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteFavorite = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await removeFavorite(id);
    
    if (!deleted) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    res.json({ message: 'Favorite deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};