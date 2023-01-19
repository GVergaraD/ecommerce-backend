import app from "./app";
// se encarga de arracancar la funcion principal

const main = () => {
 app.listen(app.get("port"));
 console.log(`Server on port ${app.get("port")}`);

};

main();