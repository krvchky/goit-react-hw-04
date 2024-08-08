
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import s from './App.module.css';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  async function getPhotos(newPage = 1, newSearchText = searchText) {
    if (newSearchText === '') {
      setLoading(false);
      setLoadMoreLoading(false);
      return setPhotos([]);
    }

    const getParams = {
      query: newSearchText,
      client_id: '2OkJzAnsD0wp_4t3Qy_w5q6_LXRpgwyA-cf18aa4_LA',
      per_page: 12,
      page: newPage,
    };

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: getParams,
      });

      if (newPage === 1) {
        setPhotos(response.data.results);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
      }
      setMaxPage(response.data.total_pages);
      setError(null);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setError('Failed to fetch photos. Please try again.');
    } finally {
      setLoading(false);
      setLoadMoreLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    setPage(1);
    getPhotos(1, searchText);
  }, [searchText]);

  const loadMorePhotos = () => {
    setLoadMoreLoading(true);
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      getPhotos(newPage);
      return newPage;
    });
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <div className= {s.searchBar}>
        <SearchBar setSearchText={setSearchText} />
      </div>
      {loading && <Loader />}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery photos={photos} onPhotoClick={handlePhotoClick} />
          {photos.length > 0 && (
            <LoadMoreBtn loading={loadMoreLoading} onClick={loadMorePhotos} />
          )}
        </>
      )}
      {selectedPhoto && (
        <ImageModal isOpen={!!selectedPhoto} onRequestClose={closeModal} photo={selectedPhoto} />
      )}
    </>
  );
};
