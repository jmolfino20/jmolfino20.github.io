function nombre() {
    var input = document.getElementById("userInput").value;

    if (input.trim() === "") {
        document.getElementById("output").textContent = "Please enter your name!";
    } else {
        document.getElementById("output").textContent = "Hello, " + input +"! " + "Thanks for visiting my page!";
    }
}

$(document).ready(function() {

    const apiKey = '5470f0728d4b4e31ad9a162ae1feb902';
    const category = 'sports';
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pageSize=12`;
  

    function displayNews(articles) {
      const newsContainer = $('#news-container');
      newsContainer.empty();
  
      articles.slice(0, 12).forEach(article => {

        const title = article.title || 'No title';
        const source = article.source.name || 'Unknown source';
        const description = article.description || 'No description available';
        const url = article.url || '#';
        const imageUrl = article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image';
        
        const newsCard = `
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <img src="${imageUrl}" class="card-img-top" alt="${title}" onerror="this.src='https://via.placeholder.com/300x200?text=Error+Loading+Image'">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${source}</h6>
                <p class="card-text">${description}</p>
              </div>
              <div class="card-footer bg-transparent border-top-0">
                <a href="${url}" class="btn btn-primary" target="_blank">Leer más</a>
              </div>
            </div>
          </div>
        `;
        
        newsContainer.append(newsCard);
      });
    }

    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      success: function(data) {

        if (data.status === 'ok' && data.articles && data.articles.length > 0) {
          displayNews(data.articles);
        } 
      },

    });
  });