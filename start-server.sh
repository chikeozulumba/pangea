curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:3001"}' http://localhost:3000/subscribe/sample
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:3002"}' http://localhost:3000/subscribe/sample
curl -X POST -H "Content-Type: application/json" -d '{ "data": { "message": "hello" } }' http://localhost:3000/publish/sample