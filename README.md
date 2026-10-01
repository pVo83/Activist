# Activist — Legal Services Landing

Адаптивный лендинг юридической компании. Pet-project для портфолио.

## Demo

https://pvo83.github.io/Activist/

## Стек

HTML · SCSS (BEM) · JavaScript · Gulp · Webpack · Swiper · Smooth Scroll

## Реализовано

- Адаптивная вёрстка основных секций лендинга
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
npm run lint        # Stylelint (SCSS) + HTMLHint после build
npm run lint:scss
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
app/              # Сборка (не в git, появляется после build)
```

## Деплой

После `git push` в `main` проект собирается и публикуется на GitHub Pages через GitHub Actions.

## Примечание

Отправка формы работает в демо-режиме на клиенте (без бэкенда), чтобы сайт корректно жил на GitHub Pages.
