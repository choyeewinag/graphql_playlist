//create a schema file

const graphql = require('graphql');
const { resolve } = require('path');

//destructing aka grabbing the variable/function from the graphql object
const { GraphQlObjectType, GraphQLString } = graphql;

//define the first object type of the graph and set it to the variable called "BookType"
const BookType = new GraphQlObjectType({ //reusing line 4
    name: 'Book', //name of the object
    fields: ()=>({//fields should be functions //id, name and genre are all fields
        id: { type: GraphQLString}, //define the type such as string or int, but can't just say "string" should grab from the graphQL object refer line 4
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    }), 
});

//create a relationship between the types if we have more than one. But in this case, we only have "BookType"

//create a root query
const RootQuery = new GraphQlObjectType({
    name: 'RootQueryType',
    fields: () => ({
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}}, //for user to pass the argument along when they request. For example, what's the idea of the book?
             /* From front end, it looks like this 
             book(id:123){ //id is argument aka args
                 name
                 genre
             }
             */
            resolve(parent, args){ //parents comes into play when we have relational data
                //code to get data from db/other source
                args.id //grab that book with the id from args
            }
        }
    })
})

