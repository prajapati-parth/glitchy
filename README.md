# glitchy
The JIRA tool

## to start contributing follow the following steps:
- install dependencies: npm install
- convert less to css: lessc styles/styles.less src/css/styles.css
- bundle js files: ./node_modules/.bin/webpack -d

Note: to run bundling as watcher
####run 
	./node_modules/.bin/webpack -d --watch
####or
	npm run dev