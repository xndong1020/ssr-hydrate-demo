import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from '../../client/src/components/Home'

const app = express()

app.get('/', (req, res) => {
    /**
     * rather than mounting React components to some DOM node
       it renders all those components exactly one time
       converts the output of them to raw HTML, and returns it as a string
     */
    const content = renderToString(<Home />)
    res.send(content)
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})

