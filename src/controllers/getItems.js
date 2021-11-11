import connection from "../database.js";

export default async function getItems(req, res){
    try{
        const result = await connection.query(`SELECT * FROM items;`);
        res.status(200).send(result.rows);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}