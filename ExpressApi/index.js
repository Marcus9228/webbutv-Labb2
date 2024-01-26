const express = require('express');
const cors = require('cors');
const axios = require('axios');
const https = require('https');
const app = express();
const port = 3000;

// Define httpsAgent here
const httpsAgent = new https.Agent({  
    rejectUnauthorized: false
});

app.use(cors());
app.use(express.json());


//-------------------------------------POKEMON CRUD----------------------------------------------

//READ ALL POKEMONS
app.get("/pokemons", async (req, res) => {
    try {
        const response = await axios.get("https://msn-labb2-webbutv-netap.azurewebsites.net/pokemons", { httpsAgent });
        res.json(response.data);
    } catch {
        res.status(500).send('Error when calling .NET API');
    }
});

//READ POKEMON BY ID
app.get("/pokemon/:id", async (req, res) => {
    const pokemonId = req.params.id;
    try {
        const response = await axios.get(`https://msn-labb2-webbutv-netap.azurewebsites.net/pokemon/${pokemonId}`, { httpsAgent });
        res.json(response.data);
    } catch (error) {
        console.error("Error when calling .NET API:", error);
        res.status(500).send("Error when calling .NET API");
    }
});

//ADD NEW POKEMON
app.post("/pokemon", async (req, res) => {
    const { pokemonId, name, type, experience } = req.body;
    try {
        const response = await axios.post("https://msn-labb2-webbutv-netap.azurewebsites.net/pokemon", { 
            pokemonId, 
            name, 
            type, 
            experience 
        }, { httpsAgent });
        res.json(response.data);
    } catch (error) {
        console.error("Error when calling .NET API:", error);
        res.status(500).send("Error when calling .NET API");
    }
});

//UPDATE POKEMON
app.put('/pokemon/:id', async (req, res) => {
    const id = req.params.id;
    const pokemonData = req.body;
    try {
        const response = await axios.put(`https://msn-labb2-webbutv-netap.azurewebsites.net/pokemon/${id}`, pokemonData, { httpsAgent });
        res.json(response.data);
    } catch (error) {
        console.error('Error when calling .NET API:', error);
        res.status(500).send('Error when calling .NET API');
    }
});

//DELETE POKEMON
app.delete('/pokemon/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.delete(`https://msn-labb2-webbutv-netap.azurewebsites.net/pokemon/${id}`, { httpsAgent });
        res.json(response.data);
    } catch (error) {
        console.error('Error when calling .NET API:', error);
        res.status(500).send('Error when calling .NET API');
    }
});

//-------------------------------------ITEMS CRUD----------------------------------------------


//READ ALL ITEMS
app.get("/items", async (req, res) => {
    try {
        const response = await axios.get("https://msn-labb2-webbutv-netap.azurewebsites.net/items", { httpsAgent });
        res.json(response.data);
    } catch {
        res.status(500).send('Error when calling .NET API');
    }
});

//READ ITEM BY ID
app.get("/item/:id", async (req, res) => {
    const itemId = req.params.id;
    try {
        const response = await axios.get(`https://msn-labb2-webbutv-netap.azurewebsites.net/item/${itemId}`, { httpsAgent });
        res.json(response.data);
    } catch (error) {
        console.error("Error when calling .NET API:", error);
        res.status(500).send("Error when calling .NET API");
    }
});

//ADD NEW ITEM
app.post("/item", async (req, res) => {
    const { name, description } = req.body;
    try {
        const response = await axios.post("https://msn-labb2-webbutv-netap.azurewebsites.net/item", { 
            name, 
            description, 
        }, { httpsAgent });
        res.json(response.data);
    } catch (error) {
        console.error("Error when calling .NET API:", error);
        res.status(500).send("Error when calling .NET API");
    }
});

//UPDATE ITEM
app.put("/item/:id", async (req, res) => {
    const id = req.params.id;
    const itemData = req.body;
    try {
        const response = await axios.put(`https://msn-labb2-webbutv-netap.azurewebsites.net/item/${id}`, itemData, { httpsAgent });
        res.json(response.data);
    } catch (error) {
        console.error("Error when calling .NET API:", error);
        res.status(500).send("Error when calling .NET API");
    }
});

//DELETE ITEM
app.delete("/item/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.delete(`https://msn-labb2-webbutv-netap.azurewebsites.net/item/${id}`, { httpsAgent });
        res.json(response.data);
    } catch (error) {
        console.error("Error when calling .NET API:", error);
        res.status(500).send("Error when calling .NET API");
    }
});



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});