import { settings } from "@/settings";
import { brBuilder, createEmbedAuthor, hexToRgb } from "@magicyan/discord";
import { ApplicationCommandType, EmbedBuilder, hyperlink } from "discord.js";
import { Command } from "../base";

new Command({
    name: "test", dmPermission,
    description: "Test command",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const { user } = interaction;

        interaction.reply({
            ephemeral, embeds: [new EmbedBuilder({
                author: createEmbedAuthor({ user }),
                color: hexToRgb(settings.colors.theme.success),
                description: brBuilder(
                    "## Isto é um comando de teste.",
                    "Se você está vendo isso, é porque não ocorreu nenhum problema no sistema.",
                )
            })]
        });
    },
});