import { ExtentedClient } from './structs/ExtendedClient.js'
export * from 'colors'

const client = new ExtentedClient();

client.start();

export { client }

client.on('connection', (stream) => console.log('connected!'.green))
