
"use client"
import React, { useRef, useState, useCallback, useEffect } from 'react';
import LightGallery from 'lightgallery/react';

// Import lightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import lightGallery plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';
import project1 from '../../../public/my-project-img/pr1.png';
import Container from '../Container';


const Gallery = () => {
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
    {
      id: '1',
      size: '1400-800',
      src: project1,
      thumb: project1,
    },
    {
      id: '2',
      size: '1400-800',
      src: project1,
      thumb: project1,
    },
    {
      id: '1',
      size: '1400-800',
      src: project1,
      thumb: project1,
    },
    {
      id: '2',
      size: '1400-800',
      src: project1,
      thumb: project1,
    },
    {
      id: '1',
      size: '1400-800',
      src: project1,
      thumb: project1,
    },
    {
      id: '2',
      size: '1400-800',
      src: project1,
      thumb: project1,
    },
    // Add more items as needed
  ]);

  const addItem = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: (prevItems.length + 1).toString(),
        size: '1400-800',
        src: `img/img${prevItems.length + 1}.jpg`,
        thumb: `img/thumb${prevItems.length + 1}.jpg`,
      },
    ]);
  }, []);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item) => (
      <a key={item.id} href={item.src} data-lg-size={item.size}>
        <Image className="img-responsive" src={item.thumb} alt={`img${item.id}`} />
      </a>
    ));
  }, [items]);

  useEffect(() => {
    if (lightGallery.current) {
      lightGallery.current.refresh();
    }
  }, [items]);

  return (
    <Container>

    <div className="App">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        onClick={addItem}
      >
        Add new item
      </button>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="custom-wrapper-class"
      >
        {getItems()}
      </LightGallery>
    </div>
    </Container>

  );
};

export default Gallery;
