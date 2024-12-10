import { Router } from 'express';
import { getFlag, getHints } from '../controllers/countryController';

const router = Router();

// Route to get the flag for a country
router.get('/flag/:country', async (req, res) => {
  const { country } = req.params;
  try {
    const flagURL = await getFlag(country);
    res.json({ flagURL });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flag.' });
  }
});

// Route to get hints for a country
router.get('/hints/:country', async (req, res) => {
  const { country } = req.params;
  try {
    const hints = await getHints(country);
    res.json({ hints });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate hints.' });
  }
});

export default router;
     