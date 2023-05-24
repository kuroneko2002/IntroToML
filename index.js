const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.render('landing_page', {
        layout: 'main'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
