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
    // start spinner
     toggleSpinner(true)

    // console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCard(data.data)
}


const displayNewsCard = news_cards => {
    // console.log(news_cards)
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = '';

    news_cards.forEach(news_card =>{
        console.log(news_card)

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('mt-4')
        cardDiv.innerHTML = `
        <div class="row p-3 border mx-3 shadow rounded"> 
        <div class="col-md-4">
            <img src="${news_card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${news_card.title}</h5>
                <p class="card-text pt-4">${news_card.details.slice(0, 200)+ "..."}</p>

                <div class="d-flex align-items-center mt-5 justify-content-between flex-wrap">

                    <div class="d-flex align-items-center ">

                        <div class="rounded-circle">
                            <img style="height: 50px; border-radius: 50%;";  class="img-fluid "  src="${news_card.author.img}" alt="">
                        </div>
                        <div class="ms-2 ">
                            <p class="fw-bold ">${news_card.author.name}</p>
                            <p> ${news_card.author.published_date}</p>
                        </div>
                    </div>

                    <div class="ms-4">
                        <p>View: ${news_card.total_view} </p>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
        cardContainer.appendChild(cardDiv)
    })
    // stop spinner
    toggleSpinner(false)
}

// spinner function
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader')
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }else{
        loaderSection.classList.add('d-none')
    }
}


loadNewsCategory()