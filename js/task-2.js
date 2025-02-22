const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  const gallery = document.querySelector(".gallery");
  
  const galleryMarkup = images
    .map(({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-img"></li>`)
    .join("");
  
  gallery.insertAdjacentHTML("beforeend", galleryMarkup);
  
  const style = document.createElement("style");
  style.textContent = `
    .gallery {
      display: flex;
      gap: 15px;
      list-style: none;
      padding: 0;
      justify-content: center;
    }
    .gallery-item {
      flex-shrink: 0;
    }
    .gallery-img {
      width: 300px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }
    .gallery-img:hover {
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(style);