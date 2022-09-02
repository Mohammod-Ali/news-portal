const loadNewsCategory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCategory(data.data.news_category)
}

const displayNewsCategory =  news_categories => {

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
    // console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCard(data.data)
}

const displayNewsCard = news_cards => {
    console.log(news_cards)
    const cardContainer = document.getElementById('card-container')

    news_cards.forEach(news_card =>{
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        cardContainer.appendChild(cardDiv)
    })

}

// const displayNews = newsCards => {

//     const newsSection = document.getElementById('news-section')
    
//     newsCards.forEach(newsCard => {
//         console.log(newsCard)
//     const cardDiv = document.createElement('div')
//     cardDiv.classList.add('row g-0')

//     cardDiv.innerHTML = `
//     <div class="col-md-4">
//         <img src="..." class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-8">
//         <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//         </div>
//     </div>
//     `;
//     })
    
//     newsSection.appendChild(cardDiv)
// }


loadNewsCategory()