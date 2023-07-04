const getMarsPhotos = () => {
    let rowData = '';
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=5z4oJhcu3SZxa1MjzjS1dSBBVgEokAXqwIEsb2yx')
    .then(res => res.json())
    .then(data => {
        console.log(data.photos);
        const img = document.querySelector('img')                
        img.src = data.photos[0].img_src
    })
}

getMarsPhotos();