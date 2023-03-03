# Print the args
echo $1 $2


# Create a folder with the args 
mkdir instances/$1
# Copy the docker-compose.example.yml file to the folder. If the path don't exist, copy in the same folder
cp scripts/docker-compose.example.yml instances/$1/docker-compose.yml

# In the docker-compose.yml file, replace $society with the args
sed -i "s/\$society/$1/g" instances/$1/docker-compose.yml
# In the docker-compose.yml file, replace $port by 8123 + the number of container running
sed -i "s/\$port/$2/g" instances/$1/docker-compose.yml


# Copy the nginx config file to the nginx folder
cp scripts/nginx.conf /etc/nginx/sites-available/$1.conf
# In the nginx file, replace $society with the args
sed -i "s/\$society/$1/g" /etc/nginx/sites-available/$1.conf
# In the nginx file, replace $port by 8123 + the number of container running
sed -i "s/\$port/$2/g" /etc/nginx/sites-available/$1.conf



