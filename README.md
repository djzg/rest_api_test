# rest_api_test
Following the Net Ninja course on Youtube
https://www.youtube.com/watch?v=BRdcRFvuqsE&list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8

git-repo: https://github.com/djzg/rest_api_test.git



API:
Application Programming Interface

REST:
REpresented State Transfer
  - Architectural style of the web
  - A standard/set of guidelines by which we can structure and create API's
  - REST API's have identifiable properties...

REST properties

They make use of resource-based URL's
  Webpage - http://www.football.com/scores
          - http://www.football.com/teams/arsenal
  JSON    - http://www.foootbal.com/api/scores
          - http://www.football.com/api/teams/arsenal

They make use of HTTP methods
  - GET - used to retrieve data from the server
  - POST - used to send data to the server
  - PUT - used to update data
  - DELETE - used to delete data

They make use of HTTP status codes
  Examples:
  200 means OK
  404 means resource not found
  500 means server error



In this playlist

- Learn about HTTP methods and what they're for
- Create an API using Node.js, Express & MongoDB
- Test our API platform
- Create a simple front-end to interact with our api


Our API routes

- GET - http://www.ninjago.com/api/ninjas
- POST - http://www.ninjago.com/api/ninjas
- PUT - http://www.ninjago.com/api/ninjas/id
- DELETE - http://www.ninjago.com/api/ninjas/id

Example using jQuery

$.ajax({
  method:"POST",
  url:"http://www.ninjago.com/api/ninjas",
  data: {name: "Ganash", rank: "Red belt"}
  })

$.ajax({
  method:"GET",
  url:"http://www.ninjago.com/api/ninjas"
})
