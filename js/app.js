const loadNewsCategory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCategory(data.data.news_category)
}

const displayNewsCategory =  news_categories =>{
    const newsContainer = document.getElementById('news-category');
    news_categories.forEach(news_category => {
        const newsDiv = document.createElement('div')
        newsDiv.classList.add('p-1')
        newsDiv.innerHTML= `
            <p>${news_category.category_name}</p>
        `;
        newsContainer.appendChild(newsDiv)
    })
}

loadNewsCategory()