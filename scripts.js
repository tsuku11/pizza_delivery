// Получаем элементы
const modal = document.getElementById('pizzaModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const modalComposition = document.getElementById('modalComposition');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.querySelector('.close');

// Прослушка на нажатие элемента
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Получаем значения элементы
        const name = card.getAttribute('data-name');
        const description = card.getAttribute('data-description');
        const composition = card.getAttribute('data-composition');
        const smallPrice = card.getAttribute('data-small-price');
        const mediumPrice = card.getAttribute('data-medium-price');
        const largePrice = card.getAttribute('data-large-price');
        const image = card.querySelector('img').src;

        modalName.textContent = name;
        modalDescription.textContent = description;
        modalComposition.textContent = `Состав: ${composition}`;
        document.getElementById('smallPrice').textContent = `${smallPrice} ₽`;
        document.getElementById('mediumPrice').textContent = `${mediumPrice} ₽`;
        document.getElementById('largePrice').textContent = `${largePrice} ₽`;
        modalPrice.textContent = `${smallPrice} ₽`; // Ставим стандартную цену
        modalImage.src = image;

        // Показываем окно
        modal.classList.add('show');

        // Обновляем цену товара в зависимости от выбранного размера
        document.querySelectorAll('input[name="size"]').forEach(input => {
            input.addEventListener('change', event => {
                const size = event.target.value;
                if (size === 'small') modalPrice.textContent = `${smallPrice} ₽`;
                else if (size === 'medium') modalPrice.textContent = `${mediumPrice} ₽`;
                else if (size === 'large') modalPrice.textContent = `${largePrice} ₽`;
            });
        });
    });
});

// Закрываем окно при нажатии крестика
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Закрываем окно при нажатии в пустое место
window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

document.querySelectorAll('input[name="size"]').forEach(input => {
    input.addEventListener('change', event => {
        const size = event.target.value;
        if (size === 'small') modalPrice.textContent = `${smallPrice} ₽`;
        else if (size === 'medium') modalPrice.textContent = `${mediumPrice} ₽`;
        else if (size === 'large') modalPrice.textContent = `${largePrice} ₽`;
    });
});

// Настройка плавного перемещения между страниц
document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        const href = link.getAttribute('href');
        const transition = document.getElementById('transition');

        transition.classList.add('active');

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});