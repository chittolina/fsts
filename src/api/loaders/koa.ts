import * as bodyParser from 'koa-bodyparser'
import * as Koa from 'koa'

export default function(app: Koa): void {
  app.use(bodyParser())
}
