import { publicProcedure, router } from './trcp';
 import cors from 'cors';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
const appRouter = router({
    userList: publicProcedure
      .query(async () => {

        const users:string[] = ['The Data'] ;
        return users;
      }),
  });
 

const server = createHTTPServer({
    middleware: cors(),
    router: appRouter,
});

server.listen(3000);
export type AppRouter = typeof appRouter;