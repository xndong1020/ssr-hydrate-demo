import express, { Request, Response } from 'express'

import renderer from './utils/renderer'

const app = express()

/**
 * open up the 'public' directory to the outside world, 
 * by telling Express.js to treat this public directory as a freely available public directory.
 */
app.use(express.static('public'))

app.get('/favicon.ico', (req, res) => res.status(204))

app.get('*', (req: Request, res: Response) => {
  res.send(renderer(req.url))
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})
