import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryBox, ImageContainer } from './ImageGallery.styled';


export const ImageGallery = ({ images}) => {
    return (
      <ImageGalleryBox>
        {images.map(image => (
          <ImageContainer key={image.id}>
            <ImageGalleryItem image={image} />
          </ImageContainer>
        ))}
      </ImageGalleryBox>
    );

};