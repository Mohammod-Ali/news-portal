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
        newsDiv.classList.add('p-2')

        newsDiv.innerHTML= `
            <p onclick="loadNewsApi('${news_category.category_id}')"> ${news_category.category_name}</p>
        `;

        newsContainer.appendChild(newsDiv)
    })
}

const loadNewsApi = async(category_id)=>{
    console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)
}



loadNewsCategory()