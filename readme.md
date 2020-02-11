![code.png](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/320px-Nextjs-logo.svg.png)

# NextJs Prisma Web Shop ![GitHub][li-badge]

> A simpel b2b webshop made with Nextjs, GraphQL YOGA, Prisma

## Highlights
  - Docker Prostgres
  - USER self verification
  - Easy to mod
  - company check with [INSEE API](https://api.insee.fr/)
  - Mapbox API

## Install

Get Prisma CLI on your machine

```bash
# with npm
npm install -g prisma@1.30.1
# or with yarn
yarn global add prisma@1.30.1
```

Get yourself a token for [INSEE API](https://api.insee.fr/)
copy that one inside `backend/env > API_INSEE_TOKEN`

Get yourself a [Mapbox token](https://www.mapbox.com/)
copy that one inside `frontend/config.js > mapboxApiAccessToken`

Install all dependencies

```bash
cd backend 
npm install
cd frontend 
npm install
```

> On the backend
Remane the file `env` as `.env` and update it with your informations

> On the frontend
Review the `config.js` file

## Usage
```bash
# launch the postgres sql with Docker
cd backend
sudo docker-composer up -d

# launch the Yoga backend
npm run dev

# launch the NextJs frontend
cd frontend
npm run dev
```

> On the backend
At first launch or If you mod the `prisma/datamodel.prisma` you need to update it afterwards

```bash
prisma generate
prisma deploy
```

If you need to navigate inside the database in cli

```bash
#connect with docker id
sudo docker container ls -a
docker exec -it <container-id> psql -U prisma
```

Open the Prisma Admin Panel

```bash
prisma admin
```

Seed some data directly to Prisma, update the `prisma/seed.js`

```bash
# update the prisma/seed.js
prisma seed
# to reset everythings 
# prisma seed --reset
```

Get the french company number and infos from INSEE API

```bash
curl -i  \
  -H "Accept: application/json"  \
  -H "Content-Type: application/json"  \
  -H "Authorization: Bearer ${API_INSEE_TOKEN}"  \
  https://api.insee.fr/entreprises/sirene/V3/siret/{siret}
```

## Build Docker image

`sudo docker build -t backendName . `

## Contributing
Pull requests are welcome.


## Maintainers

- [Roby Remzy][me]


[me]: https://github.com/RobyRemzy
[li-badge]: https://img.shields.io/github/license/RobyRemzy/NextJsShop