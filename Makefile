DUO = ./node_modules/.bin/duo
DUO_TEST = ./node_modules/.bin/duo-test

tests = ./test

node_modules: package.json
	@npm install

clean:
	@rm -rf node_modules components build.js

build.js: test/index.js | node_modules
	@$(DUO) --stdout $< > build.js

test: test-phantomjs

test-phantomjs: build.js
	@$(DUO_TEST) -R spec -P 3000 phantomjs

test-browser: build.js
	@$(DUO_TEST) -R spec -P 3000 browser

.DEFAULT_GOAL = build.js
.PHONY: build.js test
