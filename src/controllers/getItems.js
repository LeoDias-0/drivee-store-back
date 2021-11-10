import connection from "../database.js";

export default async function getItems(req, res){
    try{
        const response = await connection.query(`SELECT * FROM items;`);
        res.status(200).send(result.rows);
    }
    catch(err){
        console.log(err);
        res.senStatus(500);
    }
}