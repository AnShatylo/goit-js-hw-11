export function searchImage(query) {
  const pixabayAPI = {
    url: 'https://pixabay.com/api/',
    key: '44811580-9eab9f49684dd01a2a36a0ef4',
    imageType: 'photo',
    orient: 'horizontal',
    safeSearch: true,
  };
  const baseUrl = `${pixabayAPI.url}?key=${pixabayAPI.key}&q=${query}&image_type=${pixabayAPI.imageType}&orientation=${pixabayAPI.orient}&safesearch=${pixabayAPI.safeSearch}`;

  return fetch(baseUrl).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
