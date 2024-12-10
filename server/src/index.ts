import app from './server'; // Importing the Express app
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
