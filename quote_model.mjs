import 'dotenv/config';
import fs from 'fs/promises';

let quotes = null;

async function connect() {
    try {
        const data = await fs.readFile('./data/quotes.json', 'utf8');
        quotes = JSON.parse(data);
        console.log(`Loaded ${quotes.length} quotes`);
    } catch (error) {
        console.error('Error loading quotes:', error);
        quotes = []; // Fallback to empty array
    }
}

function get_ran_quote() {

    if (!quotes || quotes.length === 0) {
        return null;
    }

    const ran_quote = Math.floor(Math.random() * quotes.length);
    return quotes[ran_quote];
}

//Possibly add random quote

export {connect, get_ran_quote};