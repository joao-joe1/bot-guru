import { ExtentedClient } from './structs/ExtendedClient.js'
export * from 'colors'

const client = new ExtentedClient();

client.start();

export { client }

client.on('ready', () => console.log('connected!'.green))