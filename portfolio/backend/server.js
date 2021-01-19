const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/public"));
};

const URI = "mongodb+srv://skypalace-desktop:mongoPASS321@cluster0.7scgu.mongodb.net/react-portfolio?retryWrites=true&w=majority";

mongoose.connect(
    URI,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

app.use(routes);
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../../client/public/index.html"))
});

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));