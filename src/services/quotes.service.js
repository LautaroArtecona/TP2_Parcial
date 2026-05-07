import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';

const EXTERNAL_API = 'https://zenquotes.io/api/random';
const DATA_PATH = path.resolve('./data/favorites.json');


export const fetchExternalQuote = async () => {
  try {
    const response = await fetch(EXTERNAL_API);
    
    if (!response.ok) {
      throw new Error('Service unavailable');
    }

    const data = await response.json();
    
    if (!data || data.length === 0) {
      throw new Error('Service unavailable');
    }

    return {
      quote: data[0].q,
      author: data[0].a
    };
  } catch (error) {
    throw new Error('Service unavailable');
  }
};


export const getAllFavorites = async () => {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};


export const saveFavorite = async (quote, author) => {
  const favorites = await getAllFavorites();
  
  const newFavorite = {
    id: Date.now(), 
    quote,
    author,
    createdAt: new Date().toISOString()
  };

  favorites.push(newFavorite);
  

  await fs.writeFile(DATA_PATH, JSON.stringify(favorites, null, 2));
  
  return newFavorite;
};


export const removeFavorite = async (id) => {
  const favorites = await getAllFavorites();
  
  const idToFind = parseInt(id, 10);
  const index = favorites.findIndex(f => f.id === idToFind);

  if (index === -1) {
    return false;
  }

  favorites.splice(index, 1);
  await fs.writeFile(DATA_PATH, JSON.stringify(favorites, null, 2));
  
  return true;
};