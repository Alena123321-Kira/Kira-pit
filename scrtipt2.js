const showAchievementButton = document.getElementById('showAchievementButton');
const achievement = document.getElementById('achievement1'); // Или любой другой ID достижения

showAchievementButton.addEventListener('click', () => {
  achievement.classList.add('show'); // Показываем достижение

  // Скрываем достижение через 3 секунды
  setTimeout(() => {
    achievement.classList.remove('show');
  }, 3000);
});