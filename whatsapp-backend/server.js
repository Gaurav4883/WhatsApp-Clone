// importing
import express from "express";
import mongoose, { mongo } from "mongoose";
import Messages from "./dbMessages.js"
import Pusher from "pusher";

// app configuration
const app = express()
const port = process.env.PORT || 9000;

mongoose.set('strictQuery', false);

const pusher = new Pusher({
    appId: "1544096",
    key: "63b17bf132a3fe0cdba6",
    secret: "6074e35f4eff8bcca894",
    cluster: "eu",
    useTLS: true
});

// middlewares
app.use(express.json())


// DB configuration
const connection_url = "mongodb+srv://admin:deTYDKyDljy9vXXR@cluster0.cnmd6bg.mongodb.net/whatsappdb?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', () => {
    console.log("db connected");

    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log(change);
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.user,
                message: messageDetails.message,
            })
        } else {
            console.log("Error triggering pusher");
        }

    })

})


// api routes
app.get('/', (req, res) => res.status(200).send("hello"))

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data);
        }
    })
})

// listeners 
app.listen(port, () => console.log("Listening on :", port)) 