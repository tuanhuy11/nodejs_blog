const newRouter = require('./news');
const siteRouter = require('./site');


function route(app) {
    
    // app.get('/news', (req, res) => {
    //     res.render('news')
    // })

    app.use('/news', newRouter);

    app.use('/', siteRouter)

    // app.get('/', (req, res) => {
    //     res.render('home');
    // })
        
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })

    // app.post('/search', (req, res) => {
    //     res.send('');
    // })
}

module.exports = route;
