import express from 'express'

const app = express();

app.use(express.json());

app.post('/users', ( request, response) => {

    const users = [
        {name: "chris", idade: 20},
        {name: "chris", idade: 20}
    ];

    return response.json(users)
})

app.listen(3333)