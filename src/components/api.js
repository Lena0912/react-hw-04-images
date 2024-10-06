import axios from 'axios';


export const fetchImages = async (query, page) => {
  
  const API_KEY = '39330071-dcdd350e74b7fd54b7a09736b';
  const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(URL);
  return response.data;
};