import { animeSeasonNow } from "./api";

const MAX_POPULARITY_RANK = 3000;
const MIN_SCORE = 7.5;

(async () => {
	let recentAnime = await animeSeasonNow();
	recentAnime = recentAnime.data.sort((a, b) => b.score - a.score);
	recentAnime = recentAnime.filter(anime => anime.popularity < MAX_POPULARITY_RANK);
	recentAnime = recentAnime.filter(anime => anime.score > MIN_SCORE);
	let recentAnimeHtml = "";
	for(const { title, synopsis, images, url, score, popularity } of recentAnime) {
		recentAnimeHtml += `
			<div class="card">
				<img src="${images.webp.large_image_url}"/>
				<h3>${title}</h3>
				<p>${synopsis}</p>
				<span>${score}</span>
				<span>${popularity}</span>
				<a href="${url}">Go to myanimelist</a>
			</div>
		`
	}
	const recentAnimeEl = document.querySelector("#recent_anime");
	recentAnimeEl.innerHTML = recentAnimeHtml;
})();