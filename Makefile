.PHONY: build clean force-build run test lint preview deploy

build:
	npm run build

clean:
	rm -rf dist
	rm -rf .angular/cache

force-build: clean build

run:
	npm start

test:
	npm test

lint:
	npm run lint

preview: build
	cd dist/chinto-fr/browser && python3 -m http.server 8080

version:
	npm version $(VERSION) --no-git-tag-version

release: version
ifndef VERSION
	$(error VERSION is required. Usage: make deploy VERSION=0.2.0)
endif
	git add package.json package-lock.json
	git commit -m "chore(release): Release v$(VERSION)"
	git tag -a v$(VERSION) -m "v$(VERSION)"

deploy: build
ifndef VERSION
	$(error VERSION is required. Usage: make deploy VERSION=0.2.0)
endif
	git checkout master
	git merge --no-ff v$(VERSION) -m "Merge tag 'v$(VERSION)'"
	./scripts/deploy.sh
	git checkout -

hotfix:
ifndef VERSION
	$(error VERSION is required. Usage: make hotfix VERSION=0.2.1)
endif
	git checkout -b hotfix/v$(VERSION) master

