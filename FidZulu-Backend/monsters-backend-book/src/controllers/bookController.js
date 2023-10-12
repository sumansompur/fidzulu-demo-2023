const { getBookDetails } = require('../models/productModel');
const response = require('../configs/response');


const usBook = (result) => {
    if(result == null){
        return {};
    }
    for (let res of result) {
        const precision = 2;
        let price = res.Price
        res.Price = Number((price + price * 0.08).toFixed(2));
        
    }
    return result;
}

const irBook = (result) => {
    if(result == null){
        return {};
    }
    for (let res of result) {
        let price = res.Price
        res.Price = Number((price + price * 0.23).toFixed(2));
    }
    return result;
}

const inBook = (result) => {
    if(result == null){
        return {};
    }
    for (let res of result) {
        let price = res.Price
        res.Price = Number((price + price * 0.18).toFixed(2));
    }
    return result;
}

 const getBook =  async (req, res) => {
    try {
        let result = await getBookDetails();
        switch(req.params.location){
            case "US-NC" : result = usBook(result)
                            break;
            case "IE" : result = irBook(result)
                            break;
            case "IN" : result = inBook(result)
                            break;
        }
        if (result.length) {
            return response(res, 'List of Book', 200, true, result);
        } else {
            return response(res, 'There is no Items on list', 400, false)
        }
    } catch (err) {
        return response(res, 'Internal Server Error', 500, false, { error: err.message })
   
    }
    }

exports.getBook = getBook
exports.usBook = usBook
exports.irBook = irBook
exports.inBook = inBook