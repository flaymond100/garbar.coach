# GARBAR — Triathlon Coach Landing

Многоязычный лендинг (RU / UA) для триатлон-коуча Кости Гарбара.
Vite + React + React Router.

## Запуск

```bash
npm install
npm run dev
```

Откроется `http://localhost:5173/ru` (русская версия).
Украинская версия — `http://localhost:5173/ua`.
Корень `/` редиректит на `/ru` по умолчанию.

## Сборка

```bash
npm run build      # сборка в dist/
npm run preview    # локальный просмотр сборки
```

## Деплой на garbar.coach

Загрузите содержимое `dist/` на хостинг.
Настройте SPA fallback — любой путь, не являющийся файлом, должен отдавать `index.html`.
Это нужно, чтобы `/ru` и `/ua` корректно открывались по прямой ссылке.

Примеры:

**Nginx**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Netlify** — в `_redirects`:
```
/*    /index.html   200
```

**Vercel** — `vercel.json`:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Структура

```
src/
  i18n/
    ru.js          ← русский словарь
    ua.js          ← украинский словарь
    index.js       ← хук useT()
  components/      ← все секции лендинга
  styles.css
  main.jsx         ← роутер: /ru, /ua
public/
  assets/          ← фото
```

## Добавить язык

1. Скопируйте `src/i18n/ru.js` → `src/i18n/en.js`, переведите.
2. Подключите в `src/i18n/index.js`.
3. Добавьте маршрут `/en` в `src/main.jsx`.
