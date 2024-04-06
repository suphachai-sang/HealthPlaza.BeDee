# HealthPlaza.BeDee

 
# npm init -y
# npm install express --save



# run 
# node server.js


## Get todos
curl --location 'http://localhost:3000/todos'

## Post todos
curl --location 'http://localhost:3000/todos' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Backend Test",
    "description": "This is Backend Test"
}'

## Update todos
curl --location --request PUT 'http://localhost:3000/todos/0' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Backend Test Updated",
    "description": "This is Backend Test : Updated"
}'

## Delete todos
curl --location --request DELETE 'http://localhost:3000/todos/0'