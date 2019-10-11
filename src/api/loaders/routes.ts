import * as Koa from 'koa'
import { musicRouter, eventRouter } from '../routes'

export default function(app: Koa) {
  app.use(musicRouter.routes())
  app.use(eventRouter.routes())
}
