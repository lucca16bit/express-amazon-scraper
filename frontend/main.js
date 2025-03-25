const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', async () => {
    const keyword = document.getElementById('search-input').value;
    const results = document.querySelector('.results');

    if (!keyword) {
        console.log('Please enter a keyword');
    }

    try {
        const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);

        if (!response.ok) {
            throw new Error('Failed to fetch data from the backend');
        }

        const products = await response.json();
        results.innerHTML = '';

        products.forEach(prod => {
            if (prod.title === 'N/A' || prod.rating === 'N/A' || prod.reviews === 'N/A' || prod.imageUrl === 'N/A') {
                return;
            }

            const cards = document.createElement('div');
            cards.classList.add('card');

            cards.innerHTML = `
                <img src="${prod.imageUrl}" alt="${prod.title}" />
                <h2>${prod.title}</h2>
                <div class="card-rating">
                    <p id="rating">${prod.rating}</p>
                    <p id="reviews">${prod.reviews}</p>
                </div>
            `;
            results.appendChild(cards);
        });

    } catch (error) {
        console.log(error);
    }
});