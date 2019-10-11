import * as Koa from 'koa'
import loader from './loaders'

const app = new Koa()

loader(app)

app.listen(3000)

console.log('Server running on port 3000')
