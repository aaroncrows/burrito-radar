import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

const Business = new GraphQLObjectType({
  name: 'Business',
  fields: {
    id: globalIdField('Business'),
    name: {
      type: GraphQLString
    },
    url: {
      type: GraphQLString
    },
    rating: {
      type: GraphQLString
    }
  }
})


const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    business: {
      type: Business,
      args: {
        id: {
          type: GraphQLString
        }
      }
    }
  }
})

export const schema = new GraphQLSchema({
  query: Query
})

