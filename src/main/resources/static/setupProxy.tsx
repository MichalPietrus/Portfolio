const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: { use: (arg0: any) => void; }) {
    app.use(
        createProxyMiddleware("/api", { target: "http://localhost:8080/" })
    );
};

const some: number = 10;

console.log(some)

export {};