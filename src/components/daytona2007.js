import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// https://neptunian.github.io/react-photo-gallery/

const photos = [
  {
    src: require("../photos/daytona2007/MG_0577.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/daytona2007/MG_0600.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/daytona2007/MG_0635.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/daytona2007/MG_0650.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/daytona2007/MG_0665.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/daytona2007/MG_0673.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/daytona2007/MG_0681-2.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/daytona2007/MG_0688.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/daytona2007/MG_0692.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/daytona2007/MG_0701.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/daytona2007/MG_0713.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/daytona2007/MG_0720.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/daytona2007/MG_0639.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/daytona2007/MG_0735.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/daytona2007/MG_0747.jpg"),
    width: 800,
    height: 533
  },
];

export default function Daytona2007() {
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