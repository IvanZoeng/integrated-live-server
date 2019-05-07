const Koa = require('koa');
const app = new Koa();
const bodyParser = require('body-parser');
const cors = require('koa2-cors')
import router from './controller'

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('listen on port 3000')
});