import pg from 'pg'

const connection = {
    user: 'postgres',
    host: 'localhost',
    database:'kitty',
    password: 'root',
    port: 5432,
}

const client = new pg.Client(connection)
client.connect();

export default client