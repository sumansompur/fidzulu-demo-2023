const response = require("../configs/response");
const { getToyDetails } = require("../models/productModel")


const usToys = (result) => {
    if (!Array.isArray(result)) {
        // Handle non-iterable input here, e.g., return an empty object or handle the error
        return {};
      }
    for (let res of result) {
        const precision = 2;
        let price = res.Price
        res.Price = Number((price + price * 0.08).toFixed(2));
        
    }
    return result;
}

const ieToys = (result) => {
    if (!Array.isArray(result)) {
        // Handle non-iterable input here, e.g., return an empty object or handle the error
        return {};
      }
    for (let res of result) {
        let price = res.Price
        res.Price = Number((price + price * 0.23).toFixed(2));
    }
    return result;
}

const inToys = (result) => {
    if (!Array.isArray(result)) {
        // Handle non-iterable input here, e.g., return an empty object or handle the error
        return {};
      }
    for (let res of result) {
        let price = res.Price
        res.Price = Number((price + price * 0.18).toFixed(2));
    }
    return result;
}


const getToys = async(req,res)=>{
    try{
        let result= await getToyDetails();
        switch(req.params.location){
            case "US-NC" : result = usToys(result)
                            break;
            case "IE" : result = ieToys(result)
                            break;
            case "IN" : result = inToys(result)
                            break;
        }

        if (result.length) {
            return response(res, 'List of Toys', 200, true, result);
        } else {
            return response(res, 'There is no Items on list', 400, false)
        }
    } catch (err) {
        return response(res, 'Internal Server Error', 500, false, { error: err.message })
    }

    
}

exports.usToys=usToys
exports.ieToys=ieToys
exports.inToys=inToys
exports.getToys=getToys