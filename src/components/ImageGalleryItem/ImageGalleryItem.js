
import Modal from 'react-modal';
import { StyledImageItem } from './ImageGalleryItem.styled';
import { useState } from 'react';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '900px',
    height: 'auto',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '1000',
  },
};

Modal.setAppElement('#root');

export const ImageGalleryItem = ({ image: { webformatURL, largeImageURL, tags }, }) => {
 const [isModalOpen, setIsModalOpen] = useState(false)   

 const openModal = () => {
    setIsModalOpen(true);
  };

 const closeModal = () => {
    setIsModalOpen(false);
  };
 
    return (
      <div>
        <StyledImageItem
          src={webformatURL}
          alt={tags}
          onClick={openModal}
          style={{ cursor: 'pointer' }}
        />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Large image"
        >
          <img src={largeImageURL} alt={tags} />
          
        </Modal>
      </div>
    );
  }

