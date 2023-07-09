"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trcp_1 = require("./trcp");
const cors_1 = __importDefault(require("cors"));
const standalone_1 = require("@trpc/server/adapters/standalone");
const appRouter = (0, trcp_1.router)({
    userList: trcp_1.publicProcedure
        .query(async () => {
        const users = ['The Data'];
        return users;
    }),
});
const server = (0, standalone_1.createHTTPServer)({
    middleware: (0, cors_1.default)(),
    router: appRouter,
});
server.listen(3000);
