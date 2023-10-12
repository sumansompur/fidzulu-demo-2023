const { getDvdDetails } = require('../models/productModel');
const response = require('../configs/response');

const usDvd = (result) => {

    if (!Array.isArray(result)) {
        return {};
      }
    for(let res of result) {
        let price = res.Price
        res.Price = Number((price + price * 0.08).toFixed(2));
    }
    return result;
}

const irDvd = (result) => {

    if (!Array.isArray(result)) {
        return {};
      }
    for (let res of result) {
        let price = res.Price
        res.Price = Number((price + price * 0.23).toFixed(2));
    }
    return result;
}

const inDvd = (result) => {
    if (!Array.isArray(result)) {
        return {};
      }
    for (let res of result) {
        let price = res.Price
        res.Price = Number((price + price * 0.18).toFixed(2));

    }
    return result;
}

 const getDvd=  async (req, res) => {
    try {
        let result = await getDvdDetails();
        switch(req.params.location){
            case "US-NC" : result = usDvd(result)
                            break;
            case "IE" : result = irDvd(result)
                            break;
            case "IN" : result = inDvd(result)
                            break;
        }
        if (result.length) {
            return response(res, 'List of Dvd', 200, true, result);
        } else {
            return response(res, 'There is no Items on list', 400, false)
        }
    } catch (err) {
        return response(res, 'Internal Server Error', 500, false, { error: err.message })
    }
    }

exports.getDvd = getDvd
exports.irDvd  = irDvd
exports.inDvd = inDvd
exports.usDvd = usDvd