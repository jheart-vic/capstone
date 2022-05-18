// menu
const hamBurger = document.querySelector('.hambuger');
function showMenu() {
  const div = document.createElement('div');
  div.className = 'modal';
  const img = document.createElement('img');
  img.className = 'icon-img';
  img.src = './images/close.png';
  div.appendChild(img);
  function closed() {
    div.style.display = 'none';
    document.body.style.overflow = 'unset';
  }
  img.addEventListener('click', closed);
  function resetMenu() {
    if (window.innerWidth > 768) {
      div.style.display = 'none';
    }
  }
  const ul = document.createElement('ul');
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.href = './index.html';
  li.appendChild(a);
  a.textContent = 'Home';
  a.style.textDecoration = 'none';
  a.style.color = 'white';
  a.addEventListener('click', closed);
  li.style.listStyle = 'none';
  ul.appendChild(li);
  li = document.createElement('li');
  a = document.createElement('a');
  a.href = './about.html';
  li.appendChild(a);
  a.textContent = 'About';
  a.style.textDecoration = 'none';
  a.style.color = 'white';
  a.addEventListener('click', closed);
  li.style.listStyle = 'none';
  ul.appendChild(li);
  li = document.createElement('li');
  a = document.createElement('a');
  a.href = '#';
  li.appendChild(a);
  a.textContent = 'Register';
  a.style.textDecoration = 'none';
  a.style.color = 'white';
  li.style.listStyle = 'none';
  ul.appendChild(li);
  a.addEventListener('click', closed);
  li = document.createElement('li');
  a = document.createElement('a');
  a.href = '#';
  li.appendChild(a);
  a.textContent = 'Daily Meal';
  a.style.textDecoration = 'none';
  a.style.color = 'white';
  ul.appendChild(li);
  a.addEventListener('click', closed);
  li.style.listStyle = 'none';
  ul.className = 'nav-link';
  ul.style.display = 'block';
  div.appendChild(ul);
  const wrapper = document.querySelector('.navbar');
  wrapper.appendChild(div);
  window.addEventListener('resize', resetMenu);
}

hamBurger.addEventListener('click', showMenu);

// featured speakers
const cardArr = [
  {
    id: '0',
    image: 'images/kellogg.jpg',
    name: 'W. k. Kellogg',
    line: '',
    brief: 'Industrialist in food manufacturing.',
    description: 'He found the Kellogg company with his brother in 1906 and focused on breakfast meal productions.',

  },
  {
    id: '1',
    image: 'images/robert.jpg',
    name: 'Robert C. Bake',
    line: '',
    brief: 'Cornell University professor.',
    description: 'Invented the chicken nugget as well as many other poultry-related inventions.',

  },
  {
    id: '2',
    image: 'images/frank.jpg',
    name: 'Frank Wokes',
    line: '',
    brief: 'Researcher and food scientist',
    description: 'The deficiency of Vitamin B12 which may occur in vegans was first described by Wokes in 1954',

  },
  {
    id: '3',
    image: 'images/octavio.jpg',
    name: 'Octavio Paredes López',
    line: '',
    brief: 'Mexican biochemical engineer',
    description: 'Food scientist andpast president of the Mexican Academy of Sciences.',

  },
  {
    id: '4',
    image: 'images/cesar.jpg',
    name: 'Cesar Ricardo Bressani',
    line: '',
    brief: 'Guatemalan food scientist.',
    description: 'Received a B.sc degree  in chemical engineering from the University of Dayton in 1948.',

  },
  {
    id: '5',
    image: 'images/alton.jpg',
    name: 'Alton brown',
    line: '',
    brief: 'Inventor and Cornell University professor',
    description: 'Invented the chicken nugget and other poultry-related inventions..',

  },
];

const container = document.querySelector('.features');
const bigCard = document.createElement('div');
bigCard.className = 'features-grid';

cardArr.forEach((item, i) => {
  const card1 = document.createElement('div');
  card1.className = 'flexbox1';
  const card = document.createElement('div');
  card.className = 'cardRight';
  const img = document.createElement('img');
  img.className = 'rectangle';
  img.src = cardArr[i].image;
  const title = document.createElement('h4');
  title.className = 'h4';
  title.textContent = cardArr[i].name;
  const small = document.createElement('small');
  small.className = 'small';
  small.innerText = cardArr[i].brief;
  const line = document.createElement('div');
  line.innerHTML = '<div class="line2"></div>';
  const paragraph = document.createElement('p');
  paragraph.className = 'analysis';
  paragraph.textContent = cardArr[i].description;
  card.appendChild(title);
  card.appendChild(small);
  card.appendChild(line);
  card.appendChild(paragraph);
  card1.appendChild(img);
  card1.appendChild(card);
  bigCard.appendChild(card1);
});
container.appendChild(bigCard);