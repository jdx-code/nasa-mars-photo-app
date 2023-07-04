module.exports = {
    getIndex: (req, res) => {        
        res.render('index')
    },
    getApiKey: (req, res) => {
        console.log('API KEY here..')
    }
}