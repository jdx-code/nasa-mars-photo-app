const { default: axios } = require("axios")

module.exports = {
    getIndex: (req, res) => {        
        res.render('index')
    },
    getMarsPhoto: async (req, res) => {
        try{
            const {sol, cam} = req.query
            await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${cam}&api_key=${process.env.NASA_API_KEY}`)
            .then((response) => {
                const photos = response.data.photos                                
                res.render('index', {
                    photos
                })
            })            
        } catch(err) {
            console.error(err)
        }
    }       
}