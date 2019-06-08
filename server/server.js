const express = require('express')
const next = require('next')
const routes = require('../routes')
// Services 
const authService = require('../server/services/auth')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);

const secretData = [
  {
    title: 'SecretData1',
    description: 'dadfssdasd232'
  },
  {
    title: 'SecretData1',
    description: 'dadfssdasd232'
  }
]


app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
      console.log('---------CONSOLE LOGGING----------')
      console.log(req.user)
      
        return res.json(secretData)
    } )

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.use(function (err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send({title: 'Unawthorized', detail: 'Unauthorized Access'});
      }
    });

    server.use(handle).listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })