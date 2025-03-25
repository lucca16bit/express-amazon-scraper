const express = require('express');
const { scraper } = require('../utils/scraper');

const router = express.Router();

// Scrape Amazon search results for a given keyword
router.get('/api/scrape', async (request, response) => {
    const keyword = request.query.keyword;
    if (!keyword) {
        return response.status(400).json({ error: 'Keyword is required' });
    }

    // Call the scraper function and return the results
    try {
        const products = await scraper(keyword);
        response.json(products);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

module.exports = router;