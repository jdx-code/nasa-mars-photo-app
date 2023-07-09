const { default: axios } = require("axios")

module.exports = {
    getIndex: (req, res) => {        
        res.render('index')
    },
    getMarsPhoto: async (req, res) => {
        try{
            const {sol, camera} = req.query 
            
            let filterParams
            if(sol !== '' && camera == ''){
                filterParams = `sol=${sol}`
            } else if(camera !== '' && sol == ''){    
                filterParams = `camera=${camera}`
            } else if(sol !== '' && camera !== '') {
                filterParams = `sol=${sol}&camera=${camera}`
            }

            axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.NASA_API_KEY}&${filterParams}`)
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