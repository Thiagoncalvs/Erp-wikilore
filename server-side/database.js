const { MongoClient } = require('mongodb')

async function main(){
    
    const uri = "mongodb://127.0.0.1:27017/"

    const client = new MongoClient(uri)

    try {
        await client.connect()

        await listDatabases(client)

    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// main().catch(console.error)

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases()

    console.log('Databases:')
    databasesList.databases.forEach(db =>{
        console.log(`- ${db.name}`)
    })

    console.log(databasesList.databases[4])
}

module.exports = main()