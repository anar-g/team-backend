const { GraphQLList } = require("graphql");
const UserType = require("../../types/userType");
const User = require("../../../models/user");

module.exports = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find();
  },
};
