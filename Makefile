install: 
	npm ci

brain-games: #Запуск игры
	node bin/brain-games.js

brain-even: 
	node bin/brain-even.js
publish:
	npm publish --dry-run

make lint: 
	npx eslint .	