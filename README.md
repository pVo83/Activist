# Activist — Legal Services Landing

Адаптивный лендинг юридической компании. Pet-project для портфолио.

## Стек

HTML · SCSS (BEM) · Gulp · Webpack · Swiper · Smooth Scroll

## Реализовано

- Адаптивная верстка основных секций лендинга
- Бургер-меню с `aria-expanded` и закрытием по клику на ссылку или overlay
- Слайдеры hero и отзывов с кнопками навигации
- Карточки команды с доступным состоянием раскрытия
- Осмысленные тексты, контактные ссылки и `alt` для значимых изображений
- SVG-спрайт, WebP-изображения, автопрефиксер и минификация для production-сборки

## Запуск локально

```bash
npm install
npm run dev    # dev-сервер с hot reload
npm run build  # production-сборка в папку app/
```

## Проверки

```bash
npm run lint
npm run lint:scss
npm run lint:js
npm run lint:html
```

## Структура проекта

```
src/
├── partials/     # HTML-компоненты (gulp-file-include)
├── scss/         # Стили (BEM)
├── js/           # Скрипты
├── img/          # Изображения и SVG-иконки
└── resources/    # Шрифты, favicon, данные
app/              # Сборка (не коммитится, генерируется при build)
```
