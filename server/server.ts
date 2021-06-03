import * as express from 'express';
import * as cors from 'cors';
import vmModule from './vm/vm';
import acModule from './ac/ac';


let app = express();

app.use(cors());

app.use("/ac",acModule);
app.use("/vm",vmModule);

let port = process.env.PORT || 8090;

app.listen(port,()=>{
    console.log("server started... ")
})