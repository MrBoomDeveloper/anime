const apiUrl = "https://api.jikan.moe/v4";

export async function home() {
	return await get(`${apiUrl}/anime/3/full`);
}

export async function animeSeasonNow() {
	return await get(`${apiUrl}/seasons/now`);
}

export async function animeInfo(id) {
	return await get(`${apiUrl}/anime/${id}/full`);
}

export async function animeEpisodes(id) {
	return await get(`${apiUrl}/anime/${id}/episodes`)
}

export async function animeEpisode(id, episode) {
	return await get(`${apiUrl}/anime/${id}/episodes/${episode}`);
}

export async function animePictures(id) {
	return await get(`${apiUrl}/anime/${id}/pictures`);
}

export async function animeCharacters(id) {
	return await get(`${apiUrl}/anime/${id}/characters`);
}

export async function animeVideos(id) {
	return await get(`${apiUrl}/anime/${id}/videos`)
}

export async function animeNews(id) {
	return await get(`${apiUrl}/anime/${id}/news`);
}

export async function animeSearch(query) {
	return await get(`${apiUrl}/anime?${arrayToParams(query)}`);
}

export async function animeTop() {
	return await get(`${apiUrl}/top/anime`)
}

export function character(id) {
	return null
}

export function manga(id) {
	return null
}

function arrayToParams(array) {
	let result = "";
	for(const key in array) {
		result += `${key}=${array[key]}&`;
	}
	return result;
}

async function get(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}