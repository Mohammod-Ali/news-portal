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
                            <p class="fw-bold ">${news_card.author.name ? news_card.author.name : 'no data found'}</p>
                            <p> ${news_card.author.published_date}</p>
                        </div>
                    </div>

                    <div class="ms-4 d-flex">
                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"  style="width: 20px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg></p>
                        <p>
                       ${news_card.total_view ? news_card.total_view : 'no data found'} </p>
                    </div>
                    <div>
                        <button onclick="loadNewsDetails('${news_card._id}')" type="button" class="btn btn-outline-primary"  data-bs-toggle="modal" data-bs-target="#newsModal">View More</button>
                        
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


const loadNewsDetails = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    // const url = `https://openapi.programming-hero.com/api/news/2e78e5e0310c2e9adbb6efb1a263e745`
    const res = await fetch(url)
    const data = await res.json()
    displayNewsDetails(data.data[0])

}

const displayNewsDetails = news_detail =>{
    console.log(news_detail)
    
    const newsDetails = document.getElementById('news-details')
    newsDetails.innerHTML = `
        <h3>Title:${news_detail.title ? news_detail.title : 'no data found'} </h3>
        <p>Details: ${news_detail.details ? news_detail.details : 'no data found'} </p>
    `
}


loadNewsCategory()