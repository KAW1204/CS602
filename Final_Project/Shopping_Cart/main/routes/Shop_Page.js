const itemDB = require('../itemsDB.js');
const items = itemDB.getModel();

// display items

module.exports = async (req , res , next) => {

        let item = await items.find({});

        let results = item.map( itm => {
            return {
                id: itm._id,
                item: itm.item,
                quantity: itm.quantity,
                price: itm.price,
                description: itm.description
                
            }
        });
            
        res.render('shop_pageViews',
                {title:"List of Items", data:results});
        
};
