import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// https://neptunian.github.io/react-photo-gallery/

const photos = [
  {
    src: require("../photos/RoulageLedenon/MG_6774.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/RoulageLedenon/MG_6874.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/RoulageLedenon/MG_6857.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6809.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6777.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6755.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6775.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6765.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6811.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6763.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6813.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/RoulageLedenon/MG_6864.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/RoulageLedenon/MG_6782.jpg"),
    width: 1300,
    height: 867
  },
];

export default function Ledenon() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}