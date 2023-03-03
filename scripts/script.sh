# Print the args
echo $1 $2

# Sudo

# Create a folder with the args 
sudo mkdir instances/$1
# Copy the docker-compose.example.yml file to the folder. If the path don't exist, copy in the same folder
sudo cp scripts/docker-compose.example.yml instances/$1/docker-compose.yml

# In the docker-compose.yml file, replace $society with the args
sudo sed -i "s/\$society/$1/g" instances/$1/docker-compose.yml
# In the docker-compose.yml file, replace $port by 8123 + the number of container running
sudo sed -i "s/\$port/$2/g" instances/$1/docker-compose.yml


# Copy the nginx config file to the nginx folder
sudo cp scripts/nginx.example.conf /etc/nginx/sites-available/$1.conf
# In the nginx file, replace $society with the args
sudo sed -i "s/\$society/$1/g" /etc/nginx/sites-available/$1.conf
# In the nginx file, replace $port by 8123 + the number of container running
sudo sed -i "s/\$port/$2/g" /etc/nginx/sites-available/$1.conf

sudo docker compose -f instances/$1/docker-compose.yml up -d
sudo systemctl restart nginx



