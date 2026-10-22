import server from "./server";

const port = process.env.PORT;

server.listen(port, () =>{
    console.log(`${server.name} listening on port ${port}`);
});