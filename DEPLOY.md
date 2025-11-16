# Инструкция по обновлению сайта MetaForgeVerse

## Текущее состояние (17 ноября 2024)
✅ Сайт работает корректно
✅ React плагин настроен с automatic JSX runtime
✅ Git репозиторий инициализирован
✅ GitHub Actions настроен для автодеплоя

## Рабочая конфигурация

### Версии
- Vite: 6.3.5
- React: 18.x
- Node.js: v20+

### Сервер
- IP: 34.6.141.132
- User: tarlannuriyev20
- SSH Key: ~/.ssh/id_ed25519_new_server
- Путь: ~/tettra-project/website/

## Процесс внесения изменений (ЧЕРЕЗ GIT)

### 1. Внесение изменений в код
```bash
cd ~/tettra-project/website
# Редактируй файлы в src/
```

### 2. Коммит и пуш
```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

### 3. Автоматический деплой
- GitHub Actions автоматически:
  - Соберёт проект
  - Загрузит на сервер
  - Удалит старые версии (оставит последние 2)
  - Сохранит бэкап

### 4. Проверка
- Открой https://metaforgeverse.com/
- Проверь что изменения применились
- Очисти кеш браузера если нужно (Cmd+Shift+R)

## Ручной деплой (если нужен)

Если GitHub Actions не работает, используй ручной деплой:

```bash
# 1. Собери проект
cd ~/tettra-project/website
npm run build

# 2. Загрузи на сервер
scp -i ~/.ssh/id_ed25519_new_server dist/assets/index-*.js tarlannuriyev20@34.6.141.132:~/tettra-project/website/assets/
scp -i ~/.ssh/id_ed25519_new_server dist/assets/index-*.css tarlannuriyev20@34.6.141.132:~/tettra-project/website/assets/
scp -i ~/.ssh/id_ed25519_new_server dist/index.html tarlannuriyev20@34.6.141.132:~/tettra-project/website/

# 3. Удали старые версии
ssh -i ~/.ssh/id_ed25519_new_server tarlannuriyev20@34.6.141.132 \
  "cd ~/tettra-project/website/assets && ls -t index-*.js | tail -n +3 | xargs -r rm"
```

## Настройка GitHub (первый раз)

### 1. Создай репозиторий на GitHub
- Зайди на https://github.com/new
- Название: `metaforgeverse-website`
- Сделай приватным или публичным

### 2. Добавь Secrets в GitHub
Зайди в Settings → Secrets and variables → Actions:

- `SERVER_HOST`: `34.6.141.132`
- `SERVER_USER`: `tarlannuriyev20`
- `SSH_PRIVATE_KEY`: содержимое `~/.ssh/id_ed25519_new_server`

Получить приватный ключ:
```bash
cat ~/.ssh/id_ed25519_new_server
```

### 3. Подключи репозиторий
```bash
cd ~/tettra-project/website
git remote add origin https://github.com/YOUR_USERNAME/metaforgeverse-website.git
git push -u origin main
```

## Важные правила

### ❌ НЕ ДЕЛАЙ:
1. **НЕ** копируй файлы из dist/ командой `cp -r dist/* .`
2. **НЕ** загружай файлы в корень сервера
3. **НЕ** редактируй vite.config.ts без причины
4. **НЕ** добавляй `import React` в файлы
5. **НЕ** коммить node_modules или dist/

### ✅ ДЕЛАЙ:
1. **ВСЕГДА** делай git commit с понятным сообщением
2. **ВСЕГДА** проверяй сайт после деплоя
3. **ВСЕГДА** используй Git для изменений
4. **ВСЕГДА** пуши в main для автодеплоя

## Структура компонентов

```
src/
├── main.tsx           # Точка входа
├── App.tsx            # Главный компонент
└── components/
    ├── Header.tsx
    ├── HeroSection.tsx        # Баннер с заголовком + scroll down
    ├── BenefitsSection.tsx
    ├── GamesSection.tsx       # Наши игры (scroll target)
    ├── EcosystemSection.tsx
    ├── MissionSection.tsx
    ├── RoadmapSection.tsx
    └── ContactSection.tsx     # Форма контактов
```

## Типичные проблемы и решения

### GitHub Actions не запускается
- Проверь что Secrets добавлены в GitHub
- Проверь что SSH ключ корректный
- Проверь логи в Actions tab на GitHub

### Белый экран после деплоя
- Проверь консоль браузера (F12)
- Убедись что файлы в `/assets/` на сервере
- Проверь что index.html обновлён

### React is not defined
- Убедись что `@vitejs/plugin-react` установлен
- Проверь vite.config.ts - должен быть `jsxRuntime: 'automatic'`

### Старый контент в браузере
- Очисти кеш браузера (Cmd+Shift+R)
- Проверь что index.html ссылается на новый хеш
- Подожди 1-2 минуты для CDN/кеша

## Быстрые команды

```bash
# Проверить статус
git status

# Посмотреть изменения
git diff

# Отменить изменения в файле
git checkout -- filename

# Посмотреть историю
git log --oneline

# Проверить что на сервере
ssh -i ~/.ssh/id_ed25519_new_server tarlannuriyev20@34.6.141.132 \
  "ls -lh ~/tettra-project/website/assets/"
```

## Список исправленных багов

✅ Стрелка scroll down теперь работает и ведёт к "Our Games"
✅ Исправлена ошибка React.Children.only (убран asChild)
✅ Логотип и название правильные
✅ Build system работает корректно
