const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
     graphiql: true //error message: {"errors":[{"message":"Must provide query string."}]}
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});