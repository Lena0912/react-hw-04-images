import {  useEffect, useState } from "react";
import { Searchbar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from './api';
import { Layout, LoadMoreBtn } from "./Layout";
import { Loader } from "./Loader/Loader";
import toast, { Toaster } from 'react-hot-toast';


export const App = () => {
  const [query, setQuery] = useState();
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

const handleLoadMore = () => {
    setPage(prevState => prevState + 1);    
  };

const handleSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.target.elements.query.value.trim();
  if (newQuery === '') {
    toast.error('Please enter a search term.')
 return;
  }
  setQuery(newQuery);
  setPage(1);
  setImages([]);
  setError(false);
  };

  useEffect(() => { 
if (!query) return; 

    const loadImages = async () => {
  setLoading(true);    
  
      try {
        const data = await fetchImages(query, page);

const filtredImages = data.hits.map(({ id, webformatURL, largeImageURL }) => ({
  id,
  webformatURL,
  largeImageURL,
}));
        setImages(prevState => [...prevState, ...filtredImages]);
        
      } catch (error) {
        setError(true);            
        toast.error('Something went wrong. Please try again.');
      } finally {
        setLoading(false);    
      }
};
  
loadImages();
}, [query, page]);
  
    return (
      <Layout>
        <Searchbar onSubmit={handleSubmit} />
        <Toaster />
        <ImageGallery images={images} />
        {images.length > 0 && (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        )}
        {loading && (
          <div>
            <Loader />
          </div>
        )}
        {error && <p>Something went wrong. Please try again later.</p>}
      </Layout>
    );
};

  