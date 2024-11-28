const validateOrder = (req, res, next) =>{

    const { buyerName, contact, address, items } = req.body;

    if(!buyerName || !contact || !address || !items || items.length === 0){
        res.status(400).json({error: "All fields are required"});
    }

    next();
}

module.exports = validateOrder;