import pg from 'pg'

const connection = {
    user: 'raulDominguez',
    host: 'localhost',
    database:'kittyDB',
    password: '121003',
    port: 5432,
}

const client = new pg.Client(connection)
client.connect();

export default client