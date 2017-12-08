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

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'Business') {
      return {business: {name: 'from schema'}}
    }

    return null;
  },
  (obj) => {
    if (obj instanceof Business) {
      return Business
    }
    return null
  }
)

const Business = new GraphQLObjectType({
  name: 'Business',
  fields: {
    id: globalIdField('Business'),
    name: {
      type: GraphQLString
    }
  },
  interfaces: [nodeInterface]
})


const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    business: {
      type: Business
    }
  }
})

export const schema = new GraphQLSchema({
  query: Query
})

