var express=require('express');
var { graphqlHTTP } =require('express-graphql');
var { buildSchema } = require('graphql');

//Construction of schema using GraphQL schema language
var schema= buildSchema(`
    type Query{
        hello:String
    }
`);

// root providing resolver function for each API endpoint
var root={
    hello:()=>{
        return 'Hello World!';
    }
}

var app=express();
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true,
}));

app.listen(4000);
console.log('Running a Graph API server at http://localhost:4000/graphql');
