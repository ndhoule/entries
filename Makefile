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

fmt:
	@node_modules/.bin/jsfmt --write $(SRCS) $(TESTS)

lint:
	@node_modules/.bin/eslint $(SRCS) $(TESTS)

test:
	@node_modules/.bin/mocha \
		--ui bdd \
		--reporter spec \
		--grep "$(GREP)" \
		$(TESTS)

test-browser:
	@node_modules/.bin/zuul -- $(TESTS)

test-browser-local:
	@node_modules/.bin/zuul --local -- $(TESTS)

#
# Phonies and default.
#

.DEFAULT_GOAL = test
.PHONY: clean fmt lint test test-browser test-browser-local
