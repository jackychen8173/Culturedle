import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

const PORT = 5000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('/api/countries', async (req, res) => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();  // Parse the response as JSON
    res.json(countries);  // Send the JSON data as a response
});


app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
