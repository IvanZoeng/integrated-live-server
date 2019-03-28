const Koa = require('koa');
const app = new Koa();
const bodyParser = require('body-parser');
import router from './controller'

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// app.all('*', (ctx, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS,PATCH");
//     next()
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('listen on port 3000')
});