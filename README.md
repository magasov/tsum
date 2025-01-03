# Клон Tsum

Добро пожаловать в проект Tsum Clone! Это клон популярного магазина Tsum, созданный с использованием React.js. Включает в себя разнообразные товары с плавным UI/UX, позволяя пользователю просматривать, фильтровать и взаимодействовать с товарами в удобном интерфейсе.

## Особенности

- **Отображение товаров:** Товары Tsum отображаются в виде сетки.
- **Адаптивный дизайн:** Сайт адаптируется под различные размеры экрана.
- **Функционал фильтрации:** Фильтрация товаров по категориям.
- **Плавная навигация:** Удобная навигация с простым и чистым интерфейсом.
- **Добавление в корзину:** Пользователи могут добавлять товары в корзину для удобного покупательского опыта.

## 🚀 Используемые технологии:

- React.js 🧩
- React Router 🔀
- React Bootstrap ⚙️
- Bootstrap 🌐
- CSS 🎨
- Sass 💅
- Swiper 🌀
- Axios 🌍
- @mui/material ⚛️
- @mui/icons-material 🔲
- @emotion/react 🎨
- @emotion/styled ✍️
- React Content Loader ⌛
- Web Vitals 📊
- Jest 🧪
- @testing-library/react 🔍
- @testing-library/jest-dom 🔒
- React Scripts ⚡
- React DOM 🖥️

## Как начать

Убедитесь, что у вас установлен `Node.js`. Если нет, скачайте его с [официального сайта](https://nodejs.org/).

### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/magasov/tsum-magasov.git
   ```
   ```bash
    cd tsum-magasov
   ```
2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запуск приложения
   ```bash
   npm run start
   ```

## Роуты

В приложении используются следующие маршруты:

- **`/`** - Главная страница, компонент.
- **`/man`** - Страница для мужчин, компонент.
- **`/cart`** - Страница корзины, компонент.
- **`/favourites`** - Страница избранного, компонент.
- **`/basket`** - Страница с корзиной, компонент.
- **`/products/:id`** - Страница товара с динамическим идентификатором, компонент.

Каждый маршрут отображает соответствующий компонент в зависимости от пути.
