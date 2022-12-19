install: #установить зависимости
    npm ci


brain-games: #быстрый запуск игры
    node bin/brain-games.js


publish:
    npm publish --dry-run
