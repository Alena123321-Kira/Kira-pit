/**
 * Основной модуль приложения
 * @module Main
 */

// Конфигурация частиц для фона
const PARTICLE_CONFIG = {
  count: 100,
  colors: ['rgba(255, 255, 255, 0.6)', 'rgba(176, 224, 230, 0.7)'],
  minRadius: 2,
  maxRadius: 5,
  maxSpeed: 0.5
};

/**
 * Инициализация приложения
 */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  setupModal();
  setupScrollIndicator();
  setupAchievements();
  setupGallery();
  setupTimeBasedStyles();
  setupTypewriterEffect();
  setupCustomCursor();
  setupTooltips();
  setupAnimations();
});

/**
 * Инициализация частиц фона
 */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: PARTICLE_CONFIG.count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * (PARTICLE_CONFIG.maxRadius - PARTICLE_CONFIG.minRadius) + PARTICLE_CONFIG.minRadius,
    speedX: Math.random() * PARTICLE_CONFIG.maxSpeed * 2 - PARTICLE_CONFIG.maxSpeed,
    speedY: Math.random() * PARTICLE_CONFIG.maxSpeed * 2 - PARTICLE_CONFIG.maxSpeed,
    color: PARTICLE_CONFIG.colors[Math.floor(Math.random() * PARTICLE_CONFIG.colors.length)]
  }));

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Обновление позиции
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Отскок от границ
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}

/**
 * Настройка модального окна с пожеланиями
 */
function setupModal() {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('open-modal');
  const closeBtn = document.getElementById('close-modal');
  const wishText = document.getElementById('wish-text');

  if (!modal || !openBtn || !closeBtn || !wishText) return;

  const wishes = [
    "Выпрямись!!!Улыбнись!!!Хорошего настроения и приятного чтения😊",
    "Пусть каждый день будет наполнен вдохновением и радостью!💖",
    // ... остальные пожелания
  ];

  function getRandomWish() {
    return wishes[Math.floor(Math.random() * wishes.length)];
  }

  openBtn.addEventListener('click', () => {
    wishText.textContent = getRandomWish();
    modal.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
}

/**
 * Настройка индикатора прокрутки
 */
function setupScrollIndicator() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    indicator.style.width = `${scrollPercent}%`;
  });
}
/**
 * Настройка блока достижений
 */
function setupAchievements() {
  const achievementsData = [
    {
      year: 2018,
      description: 'Начала заниматься фигурным катанием',
      image: 'груша10.jpg',
      score: '189.45',
      medal: '🥇'
    },
    {
      year: 2020,
      description: 'Первое место на городских соревнованиях',
      image: 'груша18.png',
      score: '178.30',
      medal: '🥈'
    }
    // ... остальные достижения
  ];

  const ribbonTrack = document.querySelector('.ribbon-track');
  if (!ribbonTrack) return;

  // Очистка перед рендерингом (если нужно)
  ribbonTrack.innerHTML = '';

  achievementsData.forEach(achievement => {
    const achievementCard = document.createElement('div');
    achievementCard.className = 'achievement-card';
    achievementCard.innerHTML = `
      <div class="medal-icon">${achievement.medal}</div>
      <img src="${achievement.image}" alt="Достижение ${achievement.year}" loading="lazy">
      <div class="ribbon-content">
        <h3>${achievement.year}</h3>
        <p>${achievement.description}</p>
        <p class="score">${achievement.score} баллов</p>
      </div>
      <div class="ribbon-tail"></div>
    `;
    ribbonTrack.appendChild(achievementCard);
  });

  // Инициализация горизонтальной прокрутки
  setupHorizontalScroll('.achievements-ribbon');
}

/**
 * Настройка горизонтальной прокрутки
 */
function setupHorizontalScroll(selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });
}

/**
 * Настройка галереи
 */
function setupGallery() {
  // Инициализация SimpleLightbox
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });

  // Настройка карусели
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Обработка кликов на элементы галереи
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
}

/**
 * Настройка временных стилей (утро/день/вечер/ночь)
 */
function setupTimeBasedStyles() {
  function updateStyles() {
    const now = new Date();
    const hour = now.getHours();
    const body = document.body;

    // Очищаем предыдущие классы
    body.className = '';

    if (hour >= 6 && hour < 10) {
      body.classList.add('morning');
    } else if (hour >= 10 && hour < 12) {
      body.classList.add('mornin');
    } else if (hour >= 12 && hour < 16) {
      body.classList.add('afternoon');
    } else if (hour >= 16 && hour < 18) {
      body.classList.add('afternoo');
    } else if (hour >= 18 && hour < 20) {
      body.classList.add('evening');
    } else if (hour >= 20 && hour < 22) {
      body.classList.add('evenin');
    } else {
      body.classList.add('night');
    }
  }

  // Обновляем при загрузке и каждую минуту
  updateStyles();
  setInterval(updateStyles, 60000);
}

/**
 * Эффект печатающегося текста
 */
function setupTypewriterEffect() {
  const elements = document.querySelectorAll('.typing-text');

  elements.forEach(el => {
    const text = el.dataset.text;
    let charIndex = 0;

    function type() {
      if (charIndex < text.length) {
        el.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, Math.random() * 100 + 150);
      }
    }

    // Очищаем текст перед началом анимации
    el.textContent = '';
    type();
  });
}
/**
 * Настройка кастомного курсора
 */
function setupCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) return;

  // Показываем кастомный курсор только на desktop
  if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Интерактивные элементы
    const interactiveElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'VIDEO'];

    document.querySelectorAll(interactiveElements.join(',')).forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
      });
    });
  } else {
    cursor.style.display = 'none';
  }
}

/**
 * Изменение стиля курсора
 */
function changeCursor(type) {
  const cursorClasses = ['star-cursor', 'skate-cursor', 'snowflake-cursor'];

  // Удаляем все классы курсора
  document.body.classList.remove(...cursorClasses);

  // Добавляем нужный класс
  if (type === 'star') {
    document.body.classList.add('star-cursor');
  } else if (type === 'skate') {
    document.body.classList.add('skate-cursor');
  }
  // По умолчанию - снежинка (уже в CSS)
}

/**
 * Настройка всплывающих подсказок
 */
function setupTooltips() {
  const tooltip = document.createElement('div');
  tooltip.className = 'global-tooltip';
  document.body.appendChild(tooltip);

  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      const text = el.getAttribute('data-tooltip');
      const rect = el.getBoundingClientRect();

      tooltip.textContent = text;
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.top = `${rect.top - 10}px`;
      tooltip.style.transform = 'translate(-50%, -100%)';
      tooltip.classList.add('show');
    });

    el.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
    });
  });
}

/**
 * Настройка анимаций GSAP
 */
function setupAnimations() {
  // Анимация появления карточек истории
  gsap.utils.toArray(".history-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.2,
      ease: "power2.out"
    });
  });

  // Анимация элементов временной линии
  gsap.utils.toArray(".timeline-event").forEach(event => {
    ScrollTrigger.create({
      trigger: event,
      start: "top 70%",
      onEnter: () => {
        gsap.to(event, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        });

        // Анимация кристалла
        gsap.from(event.querySelector(".event-ice-crystal"), {
          scale: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "elastic.out(1, 0.5)"
        });
      }
    });
  });

  // Анимация статистики
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.getAttribute('data-count');
    animateValue(el, 0, target, 2000);
  });
}

/**
 * Анимация чисел
 */
/**
 * Анимация числовых значений
 * @param {HTMLElement} element - DOM элемент для анимации
 * @param {number} start - Начальное значение
 * @param {number} end - Конечное значение
 * @param {number} duration - Длительность анимации в миллисекундах
 */
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

/**
 * Настройка аккордеона
 */
function setupAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');

      // Закрываем все элементы
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
      });

      // Открываем текущий, если был закрыт
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Обработчик изменения размера окна
 */
function handleResize() {
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

// Инициализация
window.addEventListener('resize', handleResize);
setupAccordion();
