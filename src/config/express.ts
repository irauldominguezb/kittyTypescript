import  express  from "express"
import cors from "cors"
import categoryRouter from "../modules/category/adapters/category.controller"
const app = express()

app.set('port', process.env.PORT || 3000)
app.use(cors({origin: '*'}))
app.use(express.json())

app.get('/', (req: express.Request, res: express.Response) =>{
    res.send('Welcome to kittycafe server')
})

app.use('/category', categoryRouter)

export default app;