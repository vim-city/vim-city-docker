say_hello:
	@echo "Hello World"

image = "cavalos/vim-city1-docker"

build:
	docker build -t ${image} --no-cache .

run:
	docker run -p 49160:8080 -d ${image}

deploy:
	heroku container:login
	heroku container:push web
	heroku container:release web

logs:
	heroku logs --tail