# UM-Elo

base elo-rating api

## Run in dev

```
npm install
npm run start:dev
```

## Try

```
1. Create a pool
POST http://localhost:3000/api/pools
{
    "name": "<<pool-name>>"
}

Response:
{
    "id": "<<pool-auto_generated-id>>",
    "name": "<<pool-name>>"
}


2. Add players
POST http://localhost:3000/api/players
{
    "pool_id": "<<pool-id>>",
    "name": "<<player-name>>"
}

Response:
{
    "id": "<<player-auto_generated-id>>",
    "pool_id": "<<pool-id>>",
    "name": "<<player-name>>",
    "rating": 1000,
    "num_of_matches": 0
}

3. Record matches
POST http://localhost:3000/api/matches
{
    "pool_id": "<<pool-id>>",
    "datetime": "<<ISO-date-string>>",
    "player_id": "<<player-id>>",
    "opponent_id": "<<opponent-id>>",
    "player_score": 1|0
}

Response:
{
    "player": {
        "id": "<<player-id>>",
        "pool_id": "<<pool-id>>",
        "name": "<<player-name>>",
        "rating": 1016,
        "num_of_matches": 1
    },
    "opponent": {
        "id": "<<opponent-id>>",
        "pool_id": "<<pool-id>>",
        "name": "<<opponent-name>>",
        "rating": 984,
        "num_of_matches": 1
    }
}
```
