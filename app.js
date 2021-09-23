const express = require('express')
const {google} = require('googleapis');
const app = express()
const port = 3300

app.post("/", async (req, res) => {
    const { request, name } = req.body;
})

const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets", 
});

const authClientObject = await auth.getClient();

const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });

const spreadsheetId = "YOUR SPREADSHEET ID";


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))