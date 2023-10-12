const model = require('../configs/model')

module.exports = {
    getLaptopDetails : async () => {
        const query = 'SELECT l.laptopid, l.brandname, l.modelname, l.cpu, l.ram, l.gpu, l.vram, l.storage, l.screensize, l.colour, p.price, p.rating, p.imageurl FROM FZLAPTOP l JOIN FZPRODUCT p ON l.laptopid = p.productid';
        let rows =  await model(query);
        let laptopArr = [];
        for(let row of rows){
            const laptopObj = {
                LaptopId: row[0],
                BrandName: row[1],
                ModelName: row[2],
                CPU: row[3],
                RAM: row[4],
                GPU: row[5],
                VRAM: row[6],
                Storage: row[7],
                ScreenSize: row[8],
                Colour: row[9],
                Price: row[10],
                Ratings : row[11],
                ImageUrl : row[12]
            }
            laptopArr.push(laptopObj);
        }
        return laptopArr;
    }
}