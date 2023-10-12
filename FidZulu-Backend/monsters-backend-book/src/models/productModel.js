const model = require('../configs/model')

module.exports = {
    getBookDetails:async()=>{
        const query = 'SELECT f.bookid,f.bookname,f.genre,f.author,f.publisher,p.price,p.rating,p.imageurl from FZBOOK f JOIN FZPRODUCT p ON f.bookid = p.productid';
        let rows =  await model(query);
        let bookArr = [];
        for(let row of rows){
            const bookObj = {
                BookId: row[0],
                BookName: row[1],
                Genre: row[2],
                Author: row[3],
                Publisher: row[4],
                Price: row[5],
                Ratings : row[6],
                ImageUrl : row[7]
            }
            bookArr.push(bookObj);
        }
        return bookArr;
        
        
        
        
        return model(query);
    }
}