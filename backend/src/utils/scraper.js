const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const scraper = async (keyword) => {
    const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;
    // Add headers to bypass Amazon's bot detection
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    };

    // Fetch the HTML content of the Amazon search results page
    const dom = await axios.get(url, { headers }).then(res => new JSDOM(res.data));
    const document = dom.window.document;

    const products = [];
    const items = document.querySelectorAll('.s-main-slot .s-result-item');

    // Extract the title, rating, reviews and image URL of each product
    items.forEach((item) => {
        const title = item.querySelector('.a-section a h2 span')?.textContent || 'N/A';
        const rating = item.querySelector('span .a-icon-alt')?.textContent || 'N/A';
        const reviews = item.querySelector('.a-row .a-link-normal span')?.textContent || 'N/A';
        const imageUrl = item.querySelector('.s-image')?.src || 'N/A';

        // Push the extracted data to the products array
        products.push({ title, rating, reviews, imageUrl });
    });

    return products;
};

module.exports = { scraper };