install: 
	npm ci

brain-games: #Запуск игры
	node bin/brain-games.js

publish:
	npm publish --dry-run

make lint: 
	npx eslint .	