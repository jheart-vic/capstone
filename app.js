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