const model = require('../configs/model')

module.exports = {
    getFoodDetails : async() => {
        const query = 'SELECT f.foodid,f.foodname,f.category,f.shelflife,f.vegnonveg,p.price,p.rating,p.imageurl from FZFOOD f JOIN FZPRODUCT p ON f.foodid = p.productid';
        let rows =  await model(query);
        let foodArr = [];
        for(let row of rows){
            const foodObj = {
                FoodId: row[0],
                FoodName: row[1],
                Category: row[2],
                ShelfLife: row[3],
                VegOrNon: row[4],
                Price: row[5],
                Ratings : row[6],
                ImageUrl : row[7]
            }
            foodArr.push(foodObj);
        }
        return foodArr;
    }
}