import connection from "../database.js";

export default async function getItem(req, res){
    const {id} = req.params;
    try{
        const result = await connection.query(`SELECT * FROM items WHERE id=$1;`, [id]);
        if(result.rows.length) return res.status(200).send(result.rows)
        else return res.sendStatus(404)
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}