import { Client, GatewayIntentBits } from "discord.js"
import Keys from "./keys.js"

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.login(Keys.clientToken)
    .catch((err) => {
        console.error('[Erro de autenticação gerado.]', err)
        process.exit(1)
    })