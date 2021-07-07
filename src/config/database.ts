import mongoose from "mongoose";

mongoose
    .connect(
        "mongodb+srv://13113020:13113020@clustercarros.6saik.mongodb.net/database?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true} 
        )
    .then( () => {
        console.log("Aplicacao conectada com o banco de dados.");
    })
    .catch( (erro) => {
//      console.log("Erro ao conectar no banco de dados: ", { erro });
        console.log(`Erro ao conectar no banco de dados: ${ erro }`);
    });

export { mongoose };