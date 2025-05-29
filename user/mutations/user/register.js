const { GraphQLNonNull, GraphQLString } = require("graphql");
const bcrypt = require("bcryptjs");
const UserType = require("../../types/userType");
const User = require("../../../models/user");

module.exports = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    const exist = await User.findOne({ email: args.email });
    if (exist) throw new Error("Email already registered");
    const hashed = await bcrypt.hash(args.password, 10);
    const user = new User({
      name: args.name,
      email: args.email,
      password: hashed,
    });
    return user.save();
  },
};
