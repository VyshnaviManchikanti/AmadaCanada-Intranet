const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("🚀 Amada Canada Intranet is running!");
});

app.get("/status", (req, res) => {
    res.json({ status: "OK", time: new Date() });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});