// import { restart } from "nodemon";
// import {getConnection} from "./../database/database"

// const getLanguages = async (req, res)=>{
//     try {
//         const connection = await getConnection()
//         const result = await connection.query("SELECT id, name, programmers FROM language")
//         res.json(result)
//     } catch (error) {
//         res.status(500)
//         restart.send(error.message)
//     }
// };
// const getLanguage = async (req, res)=>{
//     try {
//         console.log(req.params)
//         const { id } = req.params
//         const connection = await getConnection()
//         const result = await connection.query("SELECT * FROM language WHERE id = ?",id)
//         res.json(result)
//     } catch (error) {
//         res.status(500)
//         restart.send(error.message)
//     }
// };
// const deleteLanguage = async (req, res)=>{
//     try {
//         const { id } = req.params
//         const connection = await getConnection()
//         const result = await connection.query("DELETE FROM language WHERE id = ?",id)
//         res.json(result)
//     } catch (error) {
//         res.status(500)
//         restart.send(error.message)
//     }
// };
// const updateLenguage = async (req, res)=>{
//     try {
//         const { id } = req.params
//         const { name, programmers } = req.body
//         if (name == null || programmers == null){
//             res.status(400).json({message: "Bad Request. Please fill all field."})
//         }
//         const language = { name, programmers }
//         const connection = await getConnection()
//         const result = await connection.query("UPDATE language SET ? WHERE id = ?",[language, id])
//         res.json(result)
//     } catch (error) {
//         res.status(500)
//         restart.send(error.message)
//     }
// };

// const addLanguage = async (req, res)=>{
//     try {
//         const { name, programmers } = req.body
//         if (name == null || programmers == null){
//             res.status(400).json({message: "Bad Request. Please fill all field."})
//         }
//         const language = { name, programmers }
//         const connection = await getConnection()
//         const result = await connection.query("INSERT INTO language SET ?", language )
//         res.json({message: "Language added"})
//     } catch (error) {
//         res.status(500)
//         restart.send(error.message)
//     }
// };


// export const methods = {
//     updateLenguage,
//     deleteLanguage,
//     getLanguages,
//     getLanguage,
//     addLanguage
// }


// //INSERT INTO `language` (`id`, `name`, `programmers`) VALUES (NULL, 'javaScript', '12'), (NULL, 'PHP', '4');