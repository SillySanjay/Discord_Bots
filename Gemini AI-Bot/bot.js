
require('dotenv').config();
const { Client, GatewayIntentBits, ChannelType, Partials } = require('discord.js');

// Gemini integration
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.Gemini_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction,
    ]
});

// Log in to Discord using the token from the .env file
client.login(process.env.TOKEN);

// Event for when the bot starts
client.once('ready', () => {
    console.log('Bot is online!');
});

// Handle commands
client.on('messageCreate', async (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Get the user's message as the prompt
    const userPrompt = message.content;

    try {
        // Send the user prompt to Gemini AI for generating content
        const result = await model.generateContent(userPrompt);
        
        // Send the AI's response to the Discord channel
        const aiResponse = result.response.text();
        message.channel.send(aiResponse);
    } catch (error) {
        console.error("Error generating AI response:", error);
        message.channel.send("Sorry, I couldn't process your request.");
    }
});
