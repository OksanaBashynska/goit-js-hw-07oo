const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('ul');
galleryListEl.style.display = 'flex';

const elements = images.map(({ url, alt }) => {
    const galleryItemEl = document.createElement('li');
  
    const galleryImageEl = document.createElement('img');
    galleryImageEl.src = url;
    galleryImageEl.alt = alt;
    galleryImageEl.style.width = '100%';
    galleryImageEl.style.height = '100%';
    galleryItemEl.appendChild(galleryImageEl);

    return galleryItemEl;
});

galleryListEl.append(...elements);