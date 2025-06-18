# put this file outside the um-elo folder
# then use it to update the um-elo and rebuild/run the docker containers
sudo rm -rf um-elo
git clone https://github.com/mhassany-pitt/um-elo.git
sudo docker-compose build --no-cache
sudo docker-compose down
sudo docker-compose up -d