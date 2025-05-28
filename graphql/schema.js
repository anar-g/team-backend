// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLSchema,
//   GraphQLID,
//   GraphQLList,
//   GraphQLNonNull,
// } = require("graphql");
// const User = require("../models/user");

// const UserType = new GraphQLObjectType({
//   name: "User",
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//   }),
// });

// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     users: {
//       type: new GraphQLList(UserType),
//       resolve(parent, args) {
//         return User.find();
//       },
//     },
//     user: {
//       type: UserType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return User.findById(args.id);
//       },
//     },
//   },
// });

// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addUser: {
//       type: UserType,
//       args: {
//         name: { type: new GraphQLNonNull(GraphQLString) },
//         email: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, args) {
//         const user = new User({ name: args.name, email: args.email });
//         return user.save();
//       },
//     },
//     updateUser: {
//       type: UserType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLID) },
//         name: { type: GraphQLString },
//         email: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         return User.findByIdAndUpdate(
//           args.id,
//           { $set: { name: args.name, email: args.email } },
//           { new: true }
//         );
//       },
//     },
//     deleteUser: {
//       type: UserType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLID) },
//       },
//       resolve(parent, args) {
//         return User.findByIdAndRemove(args.id);
//       },
//     },
//   },
// });

// module.exports = new GraphQLSchema({
//   query: RootQuery,
//   mutation: Mutation,
// });
