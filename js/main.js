const fon = document.querySelector('.fon');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const btn3d = document.getElementById('btn-3d');
const btnModeling = document.getElementById('btn-modeling');
const btnAnimation = document.getElementById('btn-animation');
const btnAnotherButton = document.getElementById('btn-another-button');

btn3d.addEventListener('click', () => { 
  btn3d.classList.add('btn--active');
  btnModeling.classList.remove('btn--active');
  btnAnimation.classList.remove('btn--active');
  btnAnotherButton.classList.remove('btn--active');
  fon.style.backgroundImage = "url(images/slide-1.jpg)";
  title.textContent = 'Заголовок1';
  text.textContent = 'Какой-то текст 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit, omnis, laudantium laboriosam facere aliquid nobis commodi tempore soluta accusantium harum distinctio voluptate vero  repellendus quisquam explicabo voluptatibus vel itaque.';
});
btnModeling.addEventListener('click', () => { 
  btn3d.classList.remove('btn--active');
  btnModeling.classList.add('btn--active');
  btnAnimation.classList.remove('btn--active');
  btnAnotherButton.classList.remove('btn--active');
  fon.style.backgroundImage = "url(images/slide-2.jpg)";
  title.textContent = 'Заголовок2';
  text.textContent = 'Tекст 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit, omnis, laudantium laboriosam facere aliquid nobis commodi tempore soluta accusantium harum distinctio voluptate vero  repellendus quisquam explicabo voluptatibus vel itaque.';
});
btnAnimation.addEventListener('click', () => { 
  btn3d.classList.remove('btn--active');
  btnModeling.classList.remove('btn--active');
  btnAnimation.classList.add('btn--active');
  btnAnotherButton.classList.remove('btn--active');
  fon.style.backgroundImage = "url(images/slide-3.jpg)";
  title.textContent = 'Заголовок3';
  text.textContent = 'Еще текст 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit, omnis, laudantium laboriosam facere aliquid nobis commodi tempore soluta accusantium harum distinctio voluptate vero  repellendus quisquam explicabo voluptatibus vel itaque.';
});
btnAnotherButton.addEventListener('click', () => { 
  btn3d.classList.remove('btn--active');
  btnModeling.classList.remove('btn--active');
  btnAnimation.classList.remove('btn--active');
  btnAnotherButton.classList.add('btn--active');
  fon.style.backgroundImage = "url(images/slide-4.jpg)";
  title.textContent = 'Заголовок4';
  text.textContent = 'Какой-то еще текст 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit, omnis, laudantium laboriosam facere aliquid nobis commodi tempore soluta accusantium harum distinctio voluptate vero  repellendus quisquam explicabo voluptatibus vel itaque.';
});
