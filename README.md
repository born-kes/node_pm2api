# RestAPI Proxy OpenAI


[--> CHANGELOG](./CHANGELOG.md) <br>
[--> doc/CONVENTIONS.md](./doc/CONVENTIONS.md) <br>
[--> doc/STATUS_CODE.md](./doc/STATUS_CODE.md) <br>
[--> doc/ADRS](./doc/adrs) <br>

---


## TECHNOLOGIES

- Docker
- Node.js
- PM2
- hapi
- Swagger
- OpenAI
- Axios
- Eslint
- Prettier
- TypeScript
- Jest

## INSTALLATION

You need install components, and use config files.

1) Look Dockerfile

2) If you use Docker-compose.yml add this code:

```yml
services:
  node_pm2api:
    build: ./pm2api
    ports:
      - "9018:9018"
    volumes:
      - "./pm2api:/mnt/pm2api"
      - "~/.ssh:/root/.ssh"
    tty: true
    networks:
      default:
        ipv4_address: 172.37.0.7
```

## CONFIGURATION

ip: 172.37.0.7

port: 9018

url: http://172.37.0.7:9018/documentation

url: http://localhost:9018/documentation

### CONFIG FILES

/pm2.config.json
/pm2api/src/config/config.dev.json

## USAGE

0. First you set up the configuration files.

1. Build and run containers:

```bash 
docker-compose build
docker-compose up -d
```

2. Install dependencies and run server

```bash 
docker-compose exec node_pm2api bash -c "cd /mnt/pm2api/pm2api && yarn install && cd /mnt/pm2api && pm2 start pm2.config.json && pm2 log"
```

3. Run list of servers pm2 and status

```bash
docker-compose exec node_pm2api bash -c "pm2 list"
```

4. Kill / STOP PM2

```bash
docker-compose exec node_pm2api bash -c "pm2 kill"
```

## RUN TESTS

```bash
docker-compose exec node_pm2api bash -c "cd pm2api && yarn run test"
```

If you run tests in IDE, remember to set node from docker, not local.


<details>
  <summary>[EN]</summary>
  <p>

## DESCRIPTION

The project is to handle the connection with the openAI API.
Additionally, it exposes a REST API handled by swagger.
The project can be run in a docker container.
  </p>
</details>
<details>
  <summary>[PL]</summary>

## Opis projektu

Projekt ma na celu obsługiwać połączenie z API openAI.
Dodatkowo wystawia REST API obsługiwane przez swagger'a.
Prjekt można uruchomić w kontenerze docker'a.

### Instalacja/uruchomienie

komendy do instalacji bez dockera

0. Przed uruchomieniem instalacji ustaw pliki configuracyjne.
1. Budujemy i uruchamiamy kontenery

```bash
npm i -g pm2
```

2. Instalujemy zależności i uruchamiamy serwer

```bash
cd pm2api && yarn install && pm2 start pm2.config.json && pm2 log
```

3. Sprawdzamy listę uruchomionych serwerów pm2 i podgląd statusu

```bash
pm2 list
```

4. Lokalnie używam **Kill** zamiast **STOP** PM2

```bash 
pm2 kill
```

### Uruchomienie Testó

```bash 
cd pm2api && yarn run test
```

Jeśli odpalasz testy w IDE, pamiętaj by ustawić node z dockera, a nie lokalne.

## Konwencja nazewnicza

[Link do CONVENTIONS.md](./pm2api/doc/CONVENTIONS.md)

## Error Code

[Link do STATUS_CODE.md](./pm2api/doc/STATUS_CODE.md)


</details>
