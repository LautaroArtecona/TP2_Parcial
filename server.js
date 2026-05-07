import morgan from 'morgan';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});