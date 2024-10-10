import { Component } from "react";
import { Searchbar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from './api';
import { Layout } from "./Layout";
import { Loader } from "./Loader/Loader";
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value.trim();
    if (query === '') return;

    this.setState({
      query,
      page: 1,
      images: [],
      loading: true,
      error: false
    });
  };



  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  };
  
notify = () => toast('Here is your toast.');

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || 
      prevState.page !== page) {
      this.setState({ loading: true });

      try {
        const data = await fetchImages(query, page);

const filtredImages = data.hits.map(({ id, webformatURL, largeImageURL }) => ({
  id,
  webformatURL,
  largeImageURL,
}));

        this.setState(prevState => ({
          images: [...prevState.images, ...filtredImages],
          loading: false,
        }));

      } catch (error) {
        this.setState({ error: true, loading: false });
        toast.error('Something went wrong. Please try again.');
      }
    }
  }

  render() {
    const {images, loading} = this.state
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        <Toaster />       
        <ImageGallery images={images} />
        {images.length > 0 && (
          <button onClick={this.handleLoadMore}>Load more</button>
        )}
        {loading && (
          <div>
            <Loader />
          </div>
        )}
      </Layout>
    );
  }
}