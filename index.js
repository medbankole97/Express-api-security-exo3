import express from 'express'

const app = express()
const api_key = '12345678';

const checkApiKey = (req, res, nex) =>{
    const apikey = req.headers['x-api-key'];
    if (apikey && apikey === api_key) {
        nex();
    }else{
        res.status(401).json({ error: 'Unauthorized: Invalid or missing API key' });
    }
}
app.get('/api/private-data',checkApiKey, function (_req, res) {
    res.json({
        message: 'Welcome to the private data!'
    });
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});