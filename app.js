const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewars = jsonServer.defaults()

server.use(middlewars)
server.use(router)
server.listen(3000, ()=> console.log("server online"))