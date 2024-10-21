const {bubblesort,
    linearsearch,
    queue,
    quicksort,
    linkedlist,
    selectionsort,
    insertionsort,
    mergesort,
    binarysearch,
    factorial,
    fibonacci,
    stack,} = require('../Telegram Bot/codes');
require('dotenv').config();
const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Event for when the bot starts
client.once('ready', () => {
    console.log('Bot is online!');
});

// Handle commands
client.on('messageCreate', async (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;
    // Command: /start
    if (message.content === '/startingthebot') {
        return message.reply('Hello kya hall chall');
    }
    // Command: /hello
    if (message.content === '/hello') {
        return message.reply('Hello and welcome to my coding bot. Here you will find some LeetCode DSA Codes');
    }
    // Command: /arrayconcat
    if (message.content === '/arrayconcat') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/amazonalgoprep/Leetcode/Easy/ArrayConcat.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the ArrayConcat code.');
        }
    }
    // Command: /mergesortedarray
    if (message.content === '/mergesortedarray') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/amazonalgoprep/Leetcode/Easy/MergeSortedArray.cpp'
            );
            console.log(response.data);
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting
        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the MergeSortedArray code.');
        }
    }
    if (message.content === '/arrayfrompermutations') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/ArrayFromPermutations.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the arrayfrompermutations code.');
        }
    }
    if (message.content === '/BestTimeToBuyAndSellStocks') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/ArrayFromPermutations.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the BestTimeToBuyAndSellStocks code.');
        }
    }
    if (message.content === '/GoodPairs') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/GoodPairs.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the GoodPairs code.');
        }
    }
    if (message.content === '/GreatestCandies') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/GreatestCandies.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the GreatestCandies code.');
        }
    }
    if (message.content === '/HighestAltitude') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/HighestAltitude.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the HighestAltitude code.');
        }
    }
    if (message.content === '/MajorityElement') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/MajorityElement.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the MajorityElement code.');
        }
    }
    if (message.content === '/MiddleIndexInArray') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/MiddleIndexInArray.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the MiddleIndexInArray code.');
        }
    }
    if (message.content === '/MoveZero') {
        try {
            const response = await axios.get(
                'https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/MoveZero.cpp'
            );
            console.log(response.data)
            return message.reply(`\`\`\`js\n${response.data}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the MoveZero code.');
        }
    }
    if (message.content === '/bubblesort') {
        try {
            const response = bubblesort;
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the bubblesort code.');
        }
    }
    if (message.content === '/linearsearch') {
        try {
            const response = linearsearch
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the linear search code.');
        }
    }
    if (message.content === '/queue') {
        try {
            const response = queue
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the queue code.');
        }
    }
    if (message.content === '/quicksort') {
        try {
            const response = quicksort
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the quicksort code.');
        }
    }
    if (message.content === '/linkedlist') {
        try {
            const response = linkedlist
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the linkedlist code.');
        }
    }
    if (message.content === '/selectionsort') {
        try {
            const response = selectionsort
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the selectionsort code.');
        }
    }
    if (message.content === '/insertionsort') {
        try {
            const response = insertionsort
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the insertionsort code.');
        }
    }
    if (message.content === '/mergesort') {
        try {
            const response = mergesort
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the mergesort code.');
        }
    }
    if (message.content === '/binarysearch') {
        try {
            const response = binarysearch
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the binarysearch code.');
        }
    }
    if (message.content === '/factorial') {
        try {
            const response = factorial
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the factorial code.');
        }
    }
    if (message.content === '/fibonacci') {
        try {
            const response = fibonacci
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the fibonacci code.');
        }
    }
    if (message.content === '/stack') {
        try {
            const response = stack
            console.log(response)
            return message.reply(`\`\`\`js\n${response}\n\`\`\``); // Send code block with JavaScript formatting

        } catch (error) {
            console.error(error);
            return message.reply('Failed to fetch the stack code.');
        }
    }
    
    // React to stickers (in this case, any file type sent, like an attachment)
    if (message.stickers && message.stickers.size > 0) {
        return message.reply('❤️');
    }
    
});

// Log in to Discord using the token from the .env file
client.login(process.env.TOKEN);
