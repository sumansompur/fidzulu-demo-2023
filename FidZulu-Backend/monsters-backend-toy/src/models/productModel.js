const model = require('../configs/model')

module.exports = {

    getToyDetails:async () => {
        const query = 'SELECT FZToys.ToyId, FZToys.ToyName, FZToys.BrandName, FZToys.Category,FZToys.AppropriateAge,FZProduct.Price, FZProduct.Rating,FZProduct.ImageURL FROM FZToys JOIN FZProduct ON FZToys.ToyId = FZProduct.ProductId';
        let rows= await model(query);
        let toyArr=[];
        for(let row of rows){
            const toyObj={
                ToyId:row[0],
                ToyName:row[1],
                BrandName:row[2],
                Category:row[3],
                AppropriateAge:row[4],
                Price:row[5],
                Ratings:row[6],
                ImageUrl:row[7]
            }
            toyArr.push(toyObj)
        }
        return toyArr;
    }

}