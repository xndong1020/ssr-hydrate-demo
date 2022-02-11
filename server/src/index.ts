import express, { Request, Response } from 'express'

import configureStore from './_store/configureStore'
import renderer from './utils/renderer'

const app = express()

/**
 * open up the 'public' directory to the outside world, 
 * by telling Express.js to treat this public directory as a freely available public directory.
 */
app.use(express.static('public'))

app.get('/favicon.ico', (req, res) => res.status(204))

app.get('*', (req: Request, res: Response) => {
  const store = configureStore()
  /**
   * Some logic to initialize and load data into the store
   */
  res.send(renderer(req.url, store))
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})

