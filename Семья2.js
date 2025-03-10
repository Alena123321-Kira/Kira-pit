// Плавная прокрутка к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Функция для расчета результата теста
function calculateTestResult() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    let score = 0;
    if (q1 && q1.value === 'yes') score++;
    if (q2 && q2.value === 'yes') score++;
    if (q3 && q3.value === 'yes') score++;

    let resultText = "";
    if (score === 3) {
        resultText = "Поздравляем! В вашей семье царит взаимопонимание и гармония.";
    } else if (score === 2) {
        resultText = "В вашей семье есть хорошие моменты, но есть и над чем поработать.";
    } else {
        resultText = "Стоит уделить больше внимания общению и взаимоподдержке в вашей семье.";
    }

    document.getElementById('result').innerText = resultText;
}

// Обработчик клика на кнопку "Рассчитать результат"
document.getElementById('calculate-button').addEventListener('click', function(e) {
    e.preventDefault();
    calculateTestResult();
});

// Обработка отправки формы обратной связи
document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Получаем данные формы
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Простая валидация (можно добавить более сложную)
    if (name && email && message) {
        // Отправляем данные (здесь можно добавить AJAX-запрос на сервер)
        console.log('Имя:', name);
        console.log('Email:', email);
        console.log('Сообщение:', message);

        // Выводим сообщение об успешной отправке
        document.getElementById('form-message').innerText = "Сообщение успешно отправлено!";

        // Очищаем форму
        document.getElementById('feedback-form').reset();

        // Скрываем сообщение через 3 секунды
        setTimeout(function() {
            document.getElementById('form-message').innerText = "";
        }, 3000);
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});