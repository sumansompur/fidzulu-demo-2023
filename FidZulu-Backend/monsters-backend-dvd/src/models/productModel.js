const model = require('../configs/model')

module.exports = {

    getDvdDetails : async() => {
        const query = 'SELECT d.dvdid,d.dvdname,d.category,d.storage,p.price,p.rating,p.imageurl from FZDVD d JOIN FZPRODUCT p ON d.dvdid = p.productid';
        let rows =  await model(query);
        let dvdArr = [];
        for(let row of rows){
            const dvdObj = {
                DvdId: row[0],
                DvdName: row[1],
                Category: row[2],
                Storage: row[3],
                Price: row[4],
                Ratings : row[5],
                ImageUrl : row[6]
            }
            dvdArr.push(dvdObj);
        }
        return dvdArr;
    }
}