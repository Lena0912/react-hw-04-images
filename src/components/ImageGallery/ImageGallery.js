import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List, ListItem } from "./ImageGallery.styled";


export const ImageGallery = ({ images

}) => {
    return (
      <List>
        {images.map(image => (
          <ListItem key={image.id}>
            <ImageGalleryItem image={image} />
          </ListItem>
        ))}
      </List>
    );

};