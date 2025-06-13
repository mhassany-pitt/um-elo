# UM-Elo

base elo-rating api

## Run in dev
```
npm install
npm run start:dev
```

## Try
```
1. Add players
POST http://localhost:3000/players
{ "name": "..." }

Response: 
{
    "id": "<<player-auto_generated-id>>",
    "name": "...",
    "rating": 1000,
    "num_of_matches": 0
}

2. Record matches
POST http://localhost:3000/matches
{
    "player_id": "<<player-auto_generated-id>>",
    "opponent_id": "<<opponent-auto_generated-id>>",
    "player_score": 1|0
}

Response:
{
    "player": {
        "id": "<<player-auto_generated-id>>",
        "name": "...",
        "rating": 1016,
        "num_of_matches": 1
    },
    "opponent": {
        "id": "<<opponent-auto_generated-id>>",
        "name": "...",
        "rating": 984,
        "num_of_matches": 1
    }
}
```