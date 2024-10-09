import { Component } from "react";
import { Searchbar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from './api';
import { Layout } from "./Layout";


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
  
  // async componentDidMount() {
  //   const { query, page } = this.state;
  //   this.setState({ loading: true });
  //   try {
  //     const data = await fetchImages(query, page);

  //     const filtredImages = data.hits.map(
  //       ({ id, webformatURL, largeformatURL }) => ({
  //         id,
  //         webformatURL,
  //         largeformatURL
  //       })
  //     );

  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...data.hits],
  //       loading: false,
  //     }))
  //     ;
  //   } catch (error) {
  //     this.setState({ error: true, loading: false });
  //   }
  // }

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
      }
    }
  }

  render() {
    const {images, loading, error} = this.state
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <div>Error loading...</div>}
        <ImageGallery images={images} />

        {images.length > 0 && (
          <button onClick={this.handeLoadMore}>Load more</button>
        )}
        {loading && <div>Loader...</div>}
      </Layout>
    );
  }
}