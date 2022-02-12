import express, { Request, Response } from 'express'
import configureStore from './_store/configureStore'
import renderer from './utils/renderer'
import { routes } from '../../shared/src/Routes'

const app = express()

/**
 * open up the 'public' directory to the outside world, 
 * by telling Express.js to treat this public directory as a freely available public directory.
 */
app.use(express.static('public'))

app.get('/favicon.ico', (req, res) => res.status(204))

app.get('*', (req: Request, res: Response) => {
  const activeRoute = routes.find(route => route.path === req.url)
  const store = configureStore()
  if (activeRoute && activeRoute.loadData) {
    activeRoute.loadData(store.dispatch).then(() => {
      console.log('store', store)
      res.send(renderer(req.url, store))
    })
  }
 
    
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})

