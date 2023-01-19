import { restart } from "nodemon";
import {getConnection} from "./../database/database"

const getLanguage = async (req, res)=>{
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT id, name, programmers FROM language")
        res.json(result)
    } catch (error) {
        res.status(500)
        restart.send(error.message)
    }
    
};

const addLanguage = async (req, res)=>{
    try {
        const { name, programmers } = req.body
        const language = { name, programmers }
        const connection = await getConnection()
        const result = await connection.query("INSERT INTO language SET ?", language )
        res.json(result)
    } catch (error) {
        res.status(500)
        restart.send(error.message)
    }
    
};


export const methods = {
    getLanguage,
    addLanguage
}


//INSERT INTO `language` (`id`, `name`, `programmers`) VALUES (NULL, 'javaScript', '12'), (NULL, 'PHP', '4');