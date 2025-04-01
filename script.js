
const glitchElements = document.querySelectorAll('.glitch'); /* Получаем все элементы с классом "glitch" */
glitchElements.forEach(element => { /* Для каждого элемента */
  element.setAttribute('data-text', element.textContent); /* Копируем текст в атрибут data-text */
});
window.addEventListener('scroll', function() {
  const parallaxContainer = document.querySelector('.parallax-background');
  const scrollPosition = window.pageYOffset;
  parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`; // 0.5 - скорость параллакса
});
const customCursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
window.addEventListener('scroll', function() {
  const scrollElement = document.querySelector('.scroll-transform-element');
  const scrollPosition = window.scrollY;
  const scaleFactor = Math.max(1, 1 + scrollPosition * 0.001);
  const rotation = scrollPosition * 0.1;
  scrollElement.style.transform = `scale(${scaleFactor}) rotate(${rotation}deg)`;


  if (scrollPosition <= 50) {
    scrollElement.style.transform = 'scale(1) rotate(0deg)';
  }
});
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
     this.parentElement.classList.toggle('active');
 });
});
 // Плавная прокрутка
 document.querySelectorAll('.hex-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимация при скролле
window.addEventListener('scroll', () => {
  const menu = document.querySelector('.hexagon-menu');
  if (window.scrollY > 100) {
    menu.style.opacity = '1';
  }
});
const openModalBtn = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const wishText = document.getElementById('wish-text');

const wishes = [
  "Выпрямись!!!Улыбнись!!!Хорошего настроения и приятного чтения😊",
  "Пусть каждый день будет наполнен вдохновением и радостью!💖",
  "Верь в себя и свои мечты, и все обязательно получится!🔥",
  "Наслаждайся каждым моментом жизни!💫",
    "Лёд ждёт твоего великолепия! Покажи им, на что ты способна! ⛸💫",
    "Каждый прыжок — шаг к мечте. Лети смело! ✨",
    "Пусть лёд будет мягким, а вращения — безупречными! 🌟",
    "Ты и музыка — одно целое. Танцуй, как никто другой! 🎶",
    "Сегодня твой день! Оставь след на этом льду! ❄️",
    "Помни: даже чемпионы начинали с первого шага. Ты на верном пути! 🏆",
    "Пусть сегодня каждая тройка получится чистой! 🔥",
    "Улыбнись — и лёд растает от твоего тепла! 😊",
    "Ты — воплощение грации и силы. Не сомневайся в себе! 💪",
    "Лёд — твой холст. Нарисуй на нём шедевр! 🎨",
    "Пусть сегодняшняя тренировка принесёт новые рекорды! 🚀",
    "Ты создана для больших побед. Вперёд! 🌠",
    "Каждый падение — шанс подняться ещё выше. Не останавливайся! ⛸",
    "Пусть твои спирали завораживают, а прыжки восхищают! 💫",
    "Сегодня ты почувствуешь, как лёд становится твоим другом! ❄️",
    "Твой труд превращается в волшебство. Продолжай! ✨",
    "Пусть судьи увидят сегодня твой лучший прокат! 🌟",
    "Ты — звезда, которая светит даже без софитов! 🌌",
    "Верь в себя, и зрители поверят в тебя! 💖",
    "Сегодня твой выходной? Нет, выходной у льда — от твоих скоростей! 😉",
    "Пусть сегодня каждая дорожка шагов будет идеальной! 🏅",
    "Ты — буря эмоций на льду. Покажи им всё! 🌪️",
    "Лёд боится только тех, кто не выходит на тренировку. Ты не из таких! ❄️",
    "Пусть сегодняшний прокат запомнится как самый вдохновляющий! 🌟",
    "Ты — огонь, а лёд — твоя стихия. Гори ярче! 🔥",
    "Помни: даже лутц когда-то был сложным. Ты справишься! 💫",
    "Сегодня ты сделаешь то, что вчера казалось невозможным! 🚀",
    "Пусть твой каскад будет чётким, как алмаз! 💎",
    "Ты — воплощение элегантности. Неси это в мир! 🦢",
    "Лёд чувствует твою страсть. Отдай ему всё! ❤️",
    "Сегодня ты будешь лучше, чем вчера. Это главное! 🌱",
    "Пусть твои вращения закружат всех вокруг! 🌪️",
    "Ты — автор своей истории. Напиши сегодня красивую главу! 📖",
    "Помни: даже олимпийские чемпионы когда-то боялись первого прыжка. Ты не одна! ⛸",
    "Пусть сегодня музыка поведёт тебя за собой! 🎵",
    "Ты — сила. Ты — грация. Ты — фигуристка! 💃",
    "Сегодня лёд станет твоим зеркалом — пусть он отражает только лучшее! ✨",
    "Пусть твой Axel будет таким же ярким, как твоя улыбка! 😊",
    "Ты не просто скользишь — ты создаёшь искусство! 🎭",
    "Сегодня ты почувствуешь: лёд — это твой дом. 🏠",
    "Пусть сегодняшний прокат принесёт тебе радость, а не просто баллы! 🌈",
    "Ты — вдохновение для тех, кто ещё только мечтает выйти на лёд. 💫",
    "Помни: даже если не всё получится — ты уже победила, потому что стараешься! 💪",
    "Пусть твоя программа расскажет историю, которую запомнят все! 📜",
    "Ты — волшебница, превращающая лёд в эмоции. ✨",
    "Сегодня ты напомнишь себе, почему начала кататься. ❤️⛸",
    "Пусть твои пальцы чувствуют лёд, а сердце — музыку! 🎶",
    "Ты — неповторима. Не сравнивай себя ни с кем! 🌟",
    "Сегодня ты сделаешь шаг к мечте. Гордись этим! 🚀",
    "Фигурное катание — это не спорт. Это твоя жизнь. Наслаждайся! ⛸💖"
  ];
  // ... остальные ваши пожелания ...

function getRandomWish() {
  const randomIndex = Math.floor(Math.random() * wishes.length);
  return wishes[randomIndex];
}
openModalBtn.addEventListener('click', () => {
  wishText.textContent = getRandomWish(); // Устанавливаем случайное пожелание
  modal.style.display = 'flex'; // Показываем модальное окно
});


closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('load', () => {
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = '100%';
});

const wavyText = document.querySelector('.wavy-text'); /* Получаем элемент с текстом */
wavyText.querySelectorAll('span').forEach((span, index) => { /* Для каждой буквы */
  span.style.setProperty('--index', index); /* Устанавливаем переменную --index */
});

const skaterImage = document.querySelector('#bio img');

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelectorAll('.parallax').forEach(skater => {
    const depth = parseFloat(skater.dataset.depth);
    const moveX = x * 100 * depth;
    const moveY = y * 100 * depth;
    skater.style.transform = 'translate(${moveX}px, ${moveY}px)';
  });
});
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
let currentIndex1 = 0;
     const images = document.querySelectorAll('.lightbox-gallery img');
     
     function changeImage(n) {
       currentIndex1 += n;
       if (currentIndex1 >= images.length) currentIndex1 = 0;
       if (currentIndex1 < 0) currentIndex1 = images.length - 1;
       document.getElementById('lightbox-img').src = images[currentIndex1].src;
     }
     
const starButton = document.getElementById('starButton');
const starContainer = document.getElementById('starContainer');

starButton.addEventListener('click', createStar);

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Фиксированная позиция и простая анимация
  star.style.left = '50%';
  star.style.top = '50%';
  star.style.animation = 'flyRight 2s linear forwards'; // Изменено

  starContainer.appendChild(star);

  star.addEventListener('animationend', () => {
    star.remove();
  });
}        
skaterImage.addEventListener('mouseover', () => {
  skaterImage.style.transform = 'rotate(360deg)';
  skaterImage.style.transition = 'transform 2s ease-in-out';
});  

skaterImage.addEventListener('mouseout', () => {
  skaterImage.style.transform = 'rotate(0deg)';
});
const filmStrip = document.querySelector('.film-strip');
let scrollPos = 0;

function autoScroll() {
  scrollPos += 1;
  if (scrollPos > filmStrip.scrollWidth / 2) {
    scrollPos = 0;
  }
  filmStrip.style.transform = 'translateX(-${scrollPos}px)';
  requestAnimationFrame(autoScroll);
}

// Запустить анимацию (можно отключить для ручной прокрутки)
autoScroll();
function setBackground() {
  const now = new Date();
  const hour = now.getHours();
  const body = document.body;

  if (hour >= 6 && hour < 10) { // Утро (6:00 - 10:00)
      body.className = 'morning';
  } else if (hour >= 10 && hour < 12) { // День (10:00 - 12:00)
    body.className = 'mornin';
  } else if (hour >= 12 && hour < 16) { // День (12:00 - 16:00)
      body.className = 'afternoon';
  } else if (hour >= 16 && hour < 18) { // День (16:00 - 18:00)
    body.className = 'afternoo';
  } else if (hour >= 18 && hour < 20) { // Вечер (18:00 - 20:00)
      body.className = 'evening';
  } else if (hour >= 20 && hour < 22) { // День (20:00 - 22:00)
    body.className = 'evenin';
 } else if (hour >= 22 && hour < 6) { // День (22:00 - 6:00)
      body.className = 'night';
  }
}

// Вызываем функцию при загрузке страницы
setBackground();

// Обновляем фон каждую минуту
setInterval(setBackground, 60000);
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / documentHeight) * 100;
  document.querySelector('.scroll-indicator').style.width = `${scrollPercent}%`;
});

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function createParticle() {
  const particle = {
     x: Math.random() * canvas.width,
     y: Math.random() * canvas.height,
     radius: Math.random() * 5 + 2,
     speedX: Math.random() * 1 - 0.5,
     speedY: Math.random() * 1 - 0.5,
     color: 'rgba(255, 255, 255, 0.6)'
   };
   particles.push(particle);
}
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar');
  const containerWidth = document.querySelector('.achievements').offsetWidth;
  const barCount = bars.length;
  const barSpacing = 20; // Расстояние между барами
  const barWidth = (containerWidth - (barCount - 1) * barSpacing) / barCount; // Вычисляем ширину бара

  bars.forEach((bar, index) => {
      const value = parseInt(bar.dataset.value);
      const label = bar.dataset.label;

      //Вычисляем позицию и ширину
      bar.style.width = `${barWidth}px`;
      bar.style.left = `${index * (barWidth + barSpacing)}px`;
      bar.style.height = `${value}%`;
      bar.innerText = label;

      //Tooltip при наведении
      bar.addEventListener('mouseover', (event) => {
          const tooltip = document.createElement('div');
          tooltip.classList.add('tooltip');
          tooltip.innerText = `Достижение: ${label}, Значение: ${value}%`;
          tooltip.style.position = 'absolute';
          tooltip.style.backgroundColor = 'black';
          tooltip.style.color = 'white';
          tooltip.style.padding = '5px';
          tooltip.style.borderRadius = '5px';
          tooltip.style.top = `${event.clientY - 50}px`; // Над курсором
          tooltip.style.left = `${event.clientX + 10}px`;// Справа от курсора
          tooltip.style.zIndex = 10;
          document.body.appendChild(tooltip);

          bar.addEventListener('mouseout', () => {
              tooltip.remove();
          });
      });
  });
});

const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const updateCount = () => {
    const increment = target / 200; // Скорость анимации
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      setTimeout(updateCount, 1); // Интервал
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
const photoButton = document.getElementById('photoButton');
const photoOverlay = document.getElementById('photoOverlay');

photoButton.addEventListener('click', () => {
  photoOverlay.style.display = 'flex'; // Показать перекрытие
});

photoOverlay.addEventListener('click', (event) => {
  if (event.target === photoOverlay) { // Закрыть, если кликнули вне фотографии
    photoOverlay.style.display = 'none';
  }
});
function changeCursor(type) {
  if (type === 'star') {
      document.body.classList.add('star-cursor');
      document.body.classList.remove('skate-cursor');
  } else if (type === 'skate') {
      document.body.classList.add('skate-cursor');
      document.body.classList.remove('star-cursor');
  } else {
      document.body.classList.remove('star-cursor');
      document.body.classList.remove('skate-cursor');
  }
}
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, carouselItems.length - 1);
  updateCarousel();
});
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filters button');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Убираем класс "active" у всех кнопок
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Добавляем класс "active" к нажатой кнопке
      button.classList.add('active');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});

for (let i = 0; i < 100; i++) {
   createParticle();
}

const clickRevealButton = document.querySelector('.click-reveal-button'); /* Получаем кнопку */
const hiddenText = document.querySelector('.hidden-text'); /* Получаем текст */

clickRevealButton.addEventListener('click', () => { /* При клике на кнопку */
  hiddenText.style.display = hiddenText.style.display === 'block' ? 'none' : 'block'; /* Показываем/скрываем текст */
});
function draw() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);

 particles.forEach(particle => {
   ctx.beginPath();
   ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
   ctx.fillStyle = particle.color;
   ctx.fill();

   particle.x += particle.speedX;
   particle.y += particle.speedY;

   if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
   }

    if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
    }
 });
requestAnimationFrame(draw);
}
draw();
const typingTextElement = document.querySelector('.typing-text');
const text = typingTextElement.dataset.text;
let charIndex = 0;

function typeText() {
   if(charIndex < text.length) {
       typingTextElement.textContent += text.charAt(charIndex);
       charIndex++;
       setTimeout(typeText, 250);
  }
}
typeText();
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
toggleButton.addEventListener('click', function() {
   sidebar.classList.toggle('open');
});
document.querySelectorAll('.animated-text span').forEach((span, i) => {
  span.style.setProperty('--i', i);
});
   //Achievements:
document.addEventListener('DOMContentLoaded', function () {
  const achievements = [
    { year: 2018, description: 'Начала заниматься фигурным катанием' },
    { year: 2020, description: 'Первое место на городских соревнованиях' },
    { year: 2022, description: 'Участие в чемпионате области' },
    { year: 2024, description: 'Присвоение звания кандидата в мастера спорта' }
  ];

  const timeline = document.querySelector('.timeline');

  achievements.forEach(achievement => {
    const item = document.createElement('div');
    item.classList.add('timeline-item');

    const year = document.createElement('h3');
    year.textContent = achievement.year;
    item.appendChild(year);

    const description = document.createElement('p');
    description.textContent = achievement.description;
    item.appendChild(description);

    timeline.appendChild(item);
  });
});
 // Load More Gallery
 const loadMoreButton = document.getElementById('load-more-gallery');
 const galleryGrid = document.querySelector('.gallery-grid');
 let loadedImages = 4;
 loadMoreButton.addEventListener('click', function() {
     for (let i = 0; i < 4; i++) {
         loadedImages++;
         if (loadedImages > 12) {
             loadMoreButton.style.display = 'none';
             break;
         }
         const galleryItem = document.createElement('div');
         galleryItem.classList.add('gallery-item', 'flip-card');
         galleryItem.innerHTML = `
             <div class="flip-card-inner">
                 <div class="flip-card-front">
                     <img src="img/gallery${loadedImages}.jpg" alt="Фото ${loadedImages}">
                 </div>
                 <div class="flip-card-back">
                     <h3>Фото ${loadedImages}</h3>
                                             <p>Описание фото ${loadedImages}</p>
                 </div>
             </div>
         `;
         galleryGrid.appendChild(galleryItem);
     }
 });
    
    

console.log("Кнопка:", starButton);
console.log("Контейнер:", starContainer);


