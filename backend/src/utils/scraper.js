const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const scraper = async (keyword) => {
    const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;
    const dom = await axios.get(url).then(res => new JSDOM(res.data));
    const document = dom.window.document;

    const products = [];
    const items = document.querySelectorAll('.s-main-slot .s-result-item');

    items.forEach((item) => {
        const title = item.querySelector('span h2')?.textContent || 'N/A';
        const rating = item.querySelector('span .a-icon-alt')?.textContent || 'N/A';
        const reviews = item.querySelector('.a-row .a-link-normal span')?.textContent || 'N/A';
        const imageUrl = item.querySelector('.s-image')?.src || 'N/A';

        products.push({ title, rating, reviews, imageUrl });
    });

    return products;
};

module.exports = { scraper };