import React from "react";

import "./gallery.styles.scss";

const GalleryItem = ({
  src,
  title,
  subtitle,
  category,
  updateActiveImage,
  index,
}) => {
  return (
    <section className="gallery-item-wrapper is-reveal">
        <div />
      <div className="gallery-item ">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h6 className="gallery-info-subtitle">{subtitle}</h6>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <div />
      </div>
    </section>
  );
};

const Gallery = () => {
  const [activeImage, setActiveImage] = React.useState(1);

  const galleryPhotos = [
    {
      src: "https://images.unsplash.com/photo-1604325359319-a4acb8e74c40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG5pZ2VyaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Protest",
      subtitle: "Freedom of speech",
      category: "shooting",
    },
    {
      src: "https://images.unsplash.com/photo-1617465750457-414c26139d16?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxuaWdlcmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Triving",
      subtitle: "Younger generation",
      category: "shooting",
    },
    {
      src: "https://images.unsplash.com/photo-1564552799633-00c6f624804d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxuaWdlcmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Kunle",
      subtitle: "Live the beauty",
      category: "shooting",
    },
    {
      src: " https://images.unsplash.com/photo-1531300185372-b7cbe2eddf0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxuaWdlcmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "No words",
      subtitle: "Drip",
      category: "shooting",
    },
  ];
  return (
    <section className="gallery-wrap" data-scroll-section>
      <div className="gallery">
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider"></span>
          <span>{galleryPhotos.length}</span>
        </div>
        {galleryPhotos.map((galleryPhoto, index) => (
          <GalleryItem
            key={index}
            index={index}
            {...galleryPhoto}
            updateActiveImage={(image) => setActiveImage(image + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
