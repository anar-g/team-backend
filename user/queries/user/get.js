const { GraphQLID } = require("graphql");
const UserType = require("../../types/userType");
const User = require("../../../models/user");

module.exports = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return User.findById(args.id);
  },
};
