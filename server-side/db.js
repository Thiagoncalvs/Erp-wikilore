const { MongoClient } = require('mongodb')






async function run(){

    const uri = "mongodb://127.0.0.1:27017/"



const client = new MongoClient(uri)

    
    try {
        await client.connect()

        const datebase = client.db('zerograu')
        const cardapio = datebase.collection('cardapio')


        const query = {tamanho: 'gg'}
        const produto = await cardapio.find(query)

        await produto.forEach(i =>{
            console.log(i)
        })
        

    }finally {
        await client.close()
    }
}

run().catch(console.dir)
