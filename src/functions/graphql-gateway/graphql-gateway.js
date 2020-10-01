const { ApolloServer } = require("apollo-server-lambda");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
    serviceList: [
        {
            name: "user",
            url: `${process.env.URL}/.netlify/functions/user`,
        },
    ],
});

exports.handler = async function (event, context) {
    const server = new ApolloServer({
        gateway,
        playground: true,
        introspection: true,
        subscriptions: false,
        context: (e) => {},
    });

    return new Promise((resolve, reject) => {
        const callback = (err, args) => (err ? reject(err) : resolve(args));
        server.createHandler()(event, context, callback);
    });
};
