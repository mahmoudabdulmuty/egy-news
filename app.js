function createArticle({
	apiLink = 'https://newsapi.org/v2/top-headlines?country=eg',
	category = ''
}) {
	const apiKey = '&apiKey=a94d31166e044e38b8a83507ca9942a3';
	document.querySelector('.main').textContent = '';

	const xhr = new XMLHttpRequest();
	xhr.open('GET', apiLink + category + apiKey);
	xhr.onload = function () {
		const articles = JSON.parse(this.response).articles;
		if (articles.length === 0)
			document.querySelector('.main').innerHTML = 'No data Found';
		else if (this.status === 200) {
			articles.forEach((article) => {
				const { title, description, url, urlToImage } = article;
				document.querySelector('.main').innerHTML += `
        <article class="article">
        <div class="article-img">
          <img src="${urlToImage || ''}"/>
        </div>
        <div class="article-heading">
          <h2 class="article-title">${title}</h2>
          <p class="article-description">${description || ''}</p>
          <a class="article-link" target="_blank" href="${url}">قراءة المزيد</a>
        </div>
      </article>`;
			});
		}
	};
	xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
	createArticle({});
});

document.querySelector('.header-title').addEventListener('click', function () {
	createArticle({});
});

document.querySelector('.business').addEventListener('click', function () {
	createArticle({
		category: '&category=business'
	});
});

document.querySelector('.entertainment').addEventListener('click', function () {
	createArticle({
		category: '&category=entertainment'
	});
});

document.querySelector('.health').addEventListener('click', function () {
	createArticle({
		category: '&category=health'
	});
});

document.querySelector('.science').addEventListener('click', function () {
	createArticle({
		category: '&category=science'
	});
});

document.querySelector('.sports').addEventListener('click', function () {
	createArticle({
		category: '&category=sports'
	});
});

document.querySelector('.technology').addEventListener('click', function () {
	createArticle({
		category: '&category=technology'
	});
});

// Search Query Function
function searchQuery() {
	const query = document.querySelector('.search-input').value;
	createArticle({
		apiLink: 'https://newsapi.org/v2/everything?q=',
		category: query
	});
}

document.querySelector('.search-button').addEventListener('click', function () {
	if (document.querySelector('.search-input').value.length > 0) searchQuery();
});

document
	.querySelector('.search-input')
	.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') searchQuery();
	});
