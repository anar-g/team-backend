const { GraphQLNonNull, GraphQLID } = require("graphql");
const UserType = require("../../types/userType");
const User = require("../../../models/user");

module.exports = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return User.findByIdAndDelete(args.id);
  },
};
