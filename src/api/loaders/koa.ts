import * as bodyParser from 'koa-bodyparser'
import * as Koa from 'koa'

export default function(app: Koa) {
  app.use(bodyParser())
}
