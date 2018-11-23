const express = require('express')
const session = require('express-session')
const app = express()
const UserRouter = require('./routes/user')
const ItemRouter = require('./routes/item')
const AdminRouter = require('./routes/admin')
const TransactionRouter = require('./routes/transaction')
const helper = require('./helper/helper')
// const port = 3000
const PORT = process.env.PORT || 3300

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: 'kuda lumping'
}))

app.get('/home', helper.loginCheck, (req, res) => {
    res.render('pages/home', {status: false, info: req.query.info})
})

app.use('/item', ItemRouter)

app.use('/user', UserRouter)

app.use('/admin', AdminRouter)

app.use('/transaction', TransactionRouter)

app.get('/*', (req, res) => {
    res.redirect('/home')
})

// app.listen(PORT)
app.listen(process.env.PORT || 3000, function(){
    console.log('running');
  });
