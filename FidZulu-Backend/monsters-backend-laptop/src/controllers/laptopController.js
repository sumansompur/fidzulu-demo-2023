const { getLaptopDetails } = require('../models/productModel');
const response = require('../configs/response');

const usLaptop = (result) => {
    if (!Array.isArray(result)) {
        // Handle non-iterable input here
        return {};
      }
    if(result == null){
        return {};
    }
    for (let res of result) {
        let price = res.Price;
        res.Price = Number((price + price * 0.08).toFixed(2));
    }
    return result;
} 

const irLaptop = (result) => {
    if (!Array.isArray(result)) {
        // Handle non-iterable input here
        return {};
      }
    if(result == null){
        return {};
    }
    for (let res of result) {
        let price = res.Price;
        res.Price = Number((price + price * 0.23).toFixed(2));
    }
    return result;
} 

const inLaptop = (result) => {
    if (!Array.isArray(result)) {
        // Handle non-iterable input here
        return {};
      }
    if(result == null){
        return {};
    }
    for (let res of result) {
        let price = res.Price;
        res.Price = Number((price + price * 0.18).toFixed(2));
    }
    return result;
}

 const getLaptop =  async (req, res) => {
        try {
            let result = await getLaptopDetails(); 

            switch(req.params.location){
                case "US-NC" :  result = usLaptop(result)
                                break;
                case "IE" :     result = irLaptop(result)
                                break;
                case "IN" :     result = inLaptop(result)
                                break;
            };

            if (result.length) 
                return response(res, 'List of Laptops', 200, true, result);
            else 
                return response(res, 'There are no items on this list', 400, false);            
        } 
        catch (err) {
            return response(res, 'Internal Server Error', 500, false, { error: err.message })
        }

    }

exports.getLaptop = getLaptop;
exports.inLaptop =inLaptop;
exports.usLaptop = usLaptop;
exports.irLaptop = irLaptop;