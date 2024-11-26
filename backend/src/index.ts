import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

const PORT = 5000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
