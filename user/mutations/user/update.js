const { GraphQLNonNull, GraphQLID, GraphQLString } = require("graphql");
const UserType = require("../../types/userType");
const User = require("../../../models/user");

module.exports = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  resolve(parent, args) {
    return User.findByIdAndUpdate(
      args.id,
      { $set: { name: args.name, email: args.email } },
      { new: true }
    );
  },
};
