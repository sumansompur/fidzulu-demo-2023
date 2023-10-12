const { getFoodDetails } = require('../models/productModel');
const response = require('../configs/response');
const inFood = (result) => {
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

 const irFood = (result) => {
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

 const usFood = (result) => {
    if (!Array.isArray(result)) {
        // Handle non-iterable input here, e.g., return an empty object or handle the error
        return {};
      }
    for(let res of result) {
        let price = res.Price
        res.Price = Number((price + price * 0.08).toFixed(2));
    }
    return result;
 }

 const getFood =  async (req, res) => {
        try {
            let result = await getFoodDetails();
            switch(req.params.location){
                case "US-NC" : result = usFood(result)
                                break;
                case "IE" : result = irFood(result)
                                break;
                case "IN" : result = inFood(result)
                                break;
            }
            if (result.length) {
                return response(res, 'List of Food', 200, true, result);
            } else {
                return response(res, 'There is no Items on list', 400, false)
            }
        } catch (err) {
            return response(res, 'Internal Server Error', 500, false, { error: err.message })
        }

    }

exports.getFood = getFood
exports.inFood =inFood
exports.usFood = usFood
exports.irFood = irFood