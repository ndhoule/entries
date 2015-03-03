#
# Files.
#

SRCS = index.js
TESTS = test/index.js

#
# Options.
#

GREP ?=.

#
# Tasks.
#

node_modules: $(wildcard package.json node_modules/**/package.json)
	@npm install

clean:
	@rm -rf node_modules *.log
.PHONY: clean

fmt:
	@node_modules/.bin/jsfmt --write $(SRCS) $(TESTS)
.PHONY: fmt

lint:
	@node_modules/.bin/eslint $(SRCS) $(TESTS)
.PHONY: lint

test:
	@if [ -z "$(BROWSER_NAME)" ] && [ -z "$(BROWSER_VERSION)" ]; then make test-node; else make test-browser; fi
.PHONY: test
.DEFAULT_GOAL = test

test-node:
	@node_modules/.bin/mocha \
		--ui bdd \
		--reporter spec \
		--grep "$(GREP)" \
		$(TESTS)
.PHONY: test-node

test-browser:
	@node_modules/.bin/zuul \
		--browser-version "$(BROWSER_VERSION)" \
		--browser-name "$(BROWSER_NAME)" \
		-- $(TESTS)
.PHONY: test-browser
