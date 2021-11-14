import app from '../src/app.js'
import supertest from 'supertest';
import generateFakeItem from './factories/itemFactory'
import connection from '../src/database/database.js'

describe("GET /items", ()=>{
    let items;

    beforeAll(async ()=>{
        items = generateFakeItem();
        await connection.query(`INSERT INTO items (name,description,price,img) VALUES ($1,$2,$3,$4)`
        ,[items.name, items.description, items.price, items.img])
        
    })
    afterAll(async ()=>{
        await connection.query('DELETE FROM items;')
        connection.end();
    }
        
    )
    it('should return an object', async()=>{
        const result = await supertest(app).get('/items');
        const desiredResult = [{
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number),
            img: expect.any(String)
        }]
        console.log(result)
        expect(result.body).toMatchObject(desiredResult);
    })
})