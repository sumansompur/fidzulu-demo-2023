const model = require('../configs/model')

module.exports = {
    getBikeDetails : async() => {
        const query = 'SELECT b.bikeid, b.manufacturer, b.modelname, b.enginecc, b.colour, p.price, p.rating, p.imageurl FROM fzbike b JOIN fzproduct p ON b.bikeid = p.productid';
        let rows =  await model(query);
        let bikeArr = [];
        for(let row of rows){
            const bikeObj = {
                BikeId: row[0],
                Manufacturer: row[1],
                ModelName: row[2],
                EngineCC: row[3],
                Colour: row[4],
                price: row[5],
                Ratings : row[6],
                ImageUrl : row[7]
            }
            bikeArr.push(bikeObj);
        }
        return bikeArr;
    }
}