const { GraphQLNonNull, GraphQLString } = require("graphql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthPayloadType = require("../../types/authPayloadType");
const User = require("../../../models/user");

module.exports = {
  type: AuthPayloadType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    const user = await User.findOne({ email: args.email });
    if (!user) throw new Error("Invalid email");
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) throw new Error("Invalid password");
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return { token, user };
  },
};
