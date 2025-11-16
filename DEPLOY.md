# Инструкция по обновлению сайта MetaForgeVerse

## Текущее состояние (16 ноября 2024)
✅ Сайт работает корректно
✅ React плагин настроен с automatic JSX runtime
✅ Все старые версии очищены

## Рабочая конфигурация

### Версии
- Vite: 6.3.5
- React: 18.x
- Node.js: v23.x

### Активные файлы на сервере
- `index-b5NrEU2x.js` - главный бандл
- `index-B5YQxu1k.css` - стили
- `index.html` - точка входа

## Процесс внесения изменений

### 1. Внесение изменений в код
```bash
cd ~/tettra-project/website
# Редактируй файлы в src/
```

### 2. Сборка
```bash
npm run build
# Создаст новые файлы в dist/ с новыми хешами
```

### 3. Загрузка на сервер
```bash
# JS файл
scp -i ~/.ssh/id_ed25519_new_server dist/assets/index-*.js tarlannuriyev20@34.6.141.132:~/tettra-project/website/assets/

# CSS файл (если изменился)
scp -i ~/.ssh/id_ed25519_new_server dist/assets/index-*.css tarlannuriyev20@34.6.141.132:~/tettra-project/website/assets/

# index.html (всегда)
scp -i ~/.ssh/id_ed25519_new_server dist/index.html tarlannuriyev20@34.6.141.132:~/tettra-project/website/
```

### 4. Очистка старых версий
```bash
# Удали старые файлы на сервере
ssh -i ~/.ssh/id_ed25519_new_server tarlannuriyev20@34.6.141.132 \
  "cd ~/tettra-project/website/assets && rm -f index-<старый-хеш>.js index-<старый-хеш>.css"
```

## Важные правила

### ❌ НЕ ДЕЛАЙ:
1. **НЕ** копируй файлы из dist/ командой `cp -r dist/* .` - это перезаписывает index.html!
2. **НЕ** загружай файлы в корень сервера - только в `/assets/`
3. **НЕ** редактируй vite.config.ts без причины
4. **НЕ** добавляй `import React` в файлы - automatic runtime делает это сам

### ✅ ДЕЛАЙ:
1. **ВСЕГДА** удаляй старые версии после успешного деплоя
2. **ВСЕГДА** проверяй сайт в браузере после деплоя
3. **ВСЕГДА** очищай кеш Vite при странных ошибках: `rm -rf .vite`
4. **ВСЕГДА** загружай index.html вместе с новыми бандлами

## Структура компонентов

```
src/
├── main.tsx           # Точка входа
├── App.tsx            # Главный компонент
└── components/
    ├── Header.tsx
    ├── HeroSection.tsx        # Баннер с заголовком
    ├── BenefitsSection.tsx
    ├── GamesSection.tsx
    ├── EcosystemSection.tsx
    ├── MissionSection.tsx
    ├── RoadmapSection.tsx
    └── ContactSection.tsx     # Форма контактов
```

## Типичные проблемы и решения

### Белый экран
- Проверь консоль браузера (F12)
- Убедись что файлы в `/assets/` на сервере
- Проверь что index.html ссылается на правильные хеши

### React is not defined
- Убедись что `@vitejs/plugin-react` установлен
- Проверь vite.config.ts - должен быть `jsxRuntime: 'automatic'`
- Удали все `import React from 'react'` из компонентов

### Старый текст/логотип в браузере
- Очисти кеш браузера (Cmd+Shift+R)
- Проверь что index.html обновлён и ссылается на новый хеш
- Убедись что старые бандлы удалены с сервера

## Контакты сервера

- IP: 34.6.141.132
- User: tarlannuriyev20
- SSH Key: ~/.ssh/id_ed25519_new_server
- Путь к проекту: ~/tettra-project/website/
