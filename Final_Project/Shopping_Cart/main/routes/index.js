var express = require('express');
var router = express.Router();

// other modules
var displayItems 	= require("./displayItems");
var addItems 			= require("./addItems");
var saveItems 			= require("./saveItems");
var editItems 			= require("./editItems");
var saveAfterEdit 	= require("./saveAfterEdit");
var deleteItems 		= require("./deleteItems");
var deleteItemsAfterConfirm 		= require("./deleteItemsAfterConfirm");

var displayCustomers                    = require('./displayCustomers');
var addCustomer 			= require("./addCustomer");
var saveCustomer 			= require("./saveCustomer");
var editCustomer 			= require("./editCustomer");
var saveAfterEditCustomer 	= require("./saveAfterEditCustomer");
var deleteCustomer		= require("./deleteCustomer");
var deleteCustomerAfterConfirm 		= require("./deleteCustomerAfterConfirm");
var Shop_Page =                       require("./Shop_Page");
var Order_Page =                      require("./OrderPage");
var AfterOrderUpdate =                  require("./AfterOrderUpdate");
var CustomerSelection =             require("./CustomerSelection");
var UpdateCart         =            require("./UpdateCart");
var SearchBar                    =  require("./SearchBar");
var ReturnSearch               =    require("./ReturnSearch");
var Format                    =     require("./Format");
var FormatPrice               =     require("./FormatPrice");
var Formatlist               =     require("./Formatlist");
var PastOrders               =     require("./PastOrders");
var ShowPastOrders            =    require("./ShowPastOrders");

// router specs
router.get('/', function(req, res, next) {
  res.redirect('/items');
});

router.get('/items', 						displayItems);

router.get('/items/add', 				addItems);
router.post('/items/add', 			saveItems);

router.get('/items/edit/:id', 	editItems);
router.post('/items/edit/', 	saveAfterEdit);

router.get('/items/delete/:id',    deleteItems);
router.post('/items/delete', deleteItemsAfterConfirm);

//---------------------------------------------------------------------//


router.get('/customer',                displayCustomers);

router.get('/customer/add',           addCustomer);
router.post('/customer/add',          saveCustomer);

router.get('/customer/edit/:id',        editCustomer);
router.post('/customer/edit/',          saveAfterEditCustomer);

router.get('/customer/delete/:id',       deleteCustomer);
router.post('/customer/delete',          deleteCustomerAfterConfirm);

router.get('/browse',                     Shop_Page);

router.get('/browse/order/:id',                 Order_Page);
router.post('/browse',                 AfterOrderUpdate);

router.get('/browse/search',        SearchBar);
router.post('/browse/search',       ReturnSearch) 

router.get('/customer/selection/:id',        CustomerSelection);
router.post('/customer/selection',            UpdateCart);

router.get("/format/item/:item",               Format);
router.get("/format/list",                Formatlist);
router.get("/format/price/:price",                FormatPrice);

router.get("/browse/pastorders",                   PastOrders)
router.post("/browse/pastorders",                   ShowPastOrders)


module.exports = router;
