function getWeatherAndSetBackground() {
    const city = prompt("Пожалуйста, введите название вашего города:");
    if (!city) return;
  
    const apiKey = '5b3f76b4843b771b900c36e018e9fbd9'; // **Замени на свой API ключ OpenWeatherMap!**
    const url = `https://home.openweathermap.org/api_keys`;
    https://home.openweathermap.org/api_keys
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = data.weather[0].main; // "Rain", "Clear", "Clouds" и т.д.
        const body = document.body;
  
        // Удаляем все анимации
        while (body.firstChild) {
          body.removeChild(body.firstChild);
        }
  
        if (weather === 'Rain') {
          body.style.backgroundColor = '#ADD8E6'; // Светло-голубой
          for (let i = 0; i < 100; i++) {
            const rainDrop = document.createElement('div');
            rainDrop.classList.add('rain');
            rainDrop.style.left = Math.random() * 100 + 'vw';
            rainDrop.style.animationDelay = Math.random() * -5 + 's';
            body.appendChild(rainDrop);
          }
        } else if (weather === 'Clear') {
          body.style.backgroundColor = '#87CEEB'; // Небесно-голубой
          const sun = document.createElement('div');
          sun.classList.add('sun');
          body.appendChild(sun);
        } else if (weather === 'Clouds') {
          body.style.backgroundColor = '#D3D3D3'; // Светло-серый
          for (let i = 0; i < 5; i++) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud');
            cloud.style.top = Math.random() * 50 + 'vh';
            cloud.style.left = Math.random() * 100 + 'vw';
            cloud.style.animationDelay = Math.random() * -30 + 's';
            body.appendChild(cloud);
          }
        } else {
          body.style.backgroundColor = '#FFFFFF'; // Белый фон по умолчанию
        }
      })
      .catch(error => {
        console.error('Ошибка при получении данных о погоде:', error);
        alert('Не удалось получить данные о погоде для этого города.');
      });
  }
  
  getWeatherAndSetBackground();