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

export const methods = {
    getLanguage
}


//INSERT INTO `language` (`id`, `name`, `programmers`) VALUES (NULL, 'javaScript', '12'), (NULL, 'PHP', '4');