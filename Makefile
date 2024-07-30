build:
	docker-compose up -d --build --force-recreate

start:
	docker-compose up -d

clean:
	docker-compose down -v --remove-orphans
	docker-compose down --volumes --remove-orphans
	docker-compose rm -v
    docker image prune -af --filter "label=com.docker.compose.project=broadcast-shift-calendar-front"
	docker volume prune -f --filter "label=com.docker.compose.project=broadcast-shift-calendar-front"
	docker network prune -f --filter "label=com.docker.compose.project=broadcast-shift-calendar-front"
	docker image prune -af --filter "label=com.docker.compose.project=broadcast-shift-calendar-api"
	docker volume prune -f --filter "label=com.docker.compose.project=broadcast-shift-calendar-api"
	docker network prune -f --filter "label=com.docker.compose.project=broadcast-shift-calendar-api"

full-app-start:
	make start && cd ../broadcast-shift-calendar-api && make start

full-app-setup:
	cd ../broadcast-shift-calendar-api && make setup && cd ../broadcast-shift-calendar-front && make start

full-app-clean:
	make clean && cd ../broadcast-shift-calendar-api && make clean
