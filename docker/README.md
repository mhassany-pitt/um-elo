# UM-Elo Docker

## Run the App

- clone the repo: _`git clone https://github.com/mhassany-pitt/um-elo.git`_
- in _`./docker`_ directory,
  - create _`.env.production`_ from _`.env.production.example`_ (set a value for **SESSION_SECRET**)
  - create _`docker-compose.yml`_ from _`docker-compose.example.yml`_ (apply changes if required)
  - run _`docker-compose up`_ to spin up the containers
