const graphql = require('graphql');

//destructing aka grabbing the variable/function from the graphql object
const { GraphQlObjectType, GraphQLString } = graphql;

//type
const BookType = new GraphQlObjectType( //reusing line 4
    {
        name: 'Book', //name of the object
        fields: ()=>({//fields should be functions //id, name and genre are all fields
            id: { type: GraphQLString}, //define the type such as string or int, but can't just say "string" should grab from the graphQL object refer line 4
            name: {type: GraphQLString},
            genre: {type: GraphQLString}

        }), 
    }
);