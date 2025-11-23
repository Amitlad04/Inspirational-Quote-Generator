import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as quote from './quote_model.mjs';

const PORT = process.env.PORT || 55443;

const app = express();

app.use(express.json());

app.get('/get/quote', asyncHandler(async(req, res) => {

    const get_quote = quote.get_ran_quote();

    if(!get_quote) {
        return res.status(500).json({ message: 'Error generating quote'});
    }
    
    res.status(200).json({ message: 'Quote successfully generated', quote: get_quote});
}))

await quote.connect();

app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}...`);
})