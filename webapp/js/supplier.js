var supplier = {
	"SupplierID": 1,
	"CompanyName": "Exotic Liquids",
	"ContactName": "Charlotte Cooper",
	"ContactTitle": "Purchasing Manager",
	"Address": "49 Gilbert St.",
	"City": "London",
	"Region": null,
	"PostalCode": "EC1 4SD",
	"Country": "UK",
	"Phone": "(171) 555-2222",
	"Fax": null,
	"HomePage": null,
	"Products": [{
		"ProductID": 1,
		"ProductName": "Chai",
		"SupplierID": 1,
		"CategoryID": 1,
		"QuantityPerUnit": "10 boxes x 20 bags",
		"UnitPrice": "18.0000",
		"UnitsInStock": 39,
		"UnitsOnOrder": 0,
		"ReorderLevel": 10,
		"Discontinued": false
	}, {
		"ProductID": 2,
		"ProductName": "Chang",
		"SupplierID": 1,
		"CategoryID": 1,
		"QuantityPerUnit": "24 - 12 oz bottles",
		"UnitPrice": "19.0000",
		"UnitsInStock": 17,
		"UnitsOnOrder": 40,
		"ReorderLevel": 25,
		"Discontinued": false
	}, {
		"ProductID": 3,
		"ProductName": "Aniseed Syrup",
		"SupplierID": 1,
		"CategoryID": 2,
		"QuantityPerUnit": "12 - 550 ml bottles",
		"UnitPrice": "10.0000",
		"UnitsInStock": 13,
		"UnitsOnOrder": 70,
		"ReorderLevel": 25,
		"Discontinued": false
	}]
};

var AppController = {

	/**
	 * Display data in product table
	 * @public
	 */
	showData: function () {

		for (var i = 0; i < supplier.Products.length; i++) {
			this._createTableRow(supplier.Products[i].ProductName, supplier.Products[i].UnitPrice, supplier.Products[i].UnitsInStock);
		}

	},

	/**
	 * This is JSDoc comment
	 * Create a tbale row 
	 * @param {string} sProductName  
	 * @param {string} sPrice
	 * @param {string} sInStock
	 * @private
	 */
	_createTableRow: function (sProductName, sPrice, sInStock) {

		// create table row
		var el = document.createElement("tr");
		el.appendChild(this._createTD(sProductName));
		el.appendChild(this._createTD(sPrice));
		el.appendChild(this._createTD(sInStock));

		// add element to the table
		var body = document.getElementById("table");
		body.appendChild(el);
	},

	/* This is JSDoc comment
	 * Create table row data
	 * @param {string} sValue  
	 * @private
	 */
	_createTD: function (sValue) {

		// create element with the text node
		var el = document.createElement("td");
		var txt = document.createTextNode(sValue);
		el.appendChild(txt);

		return el;
	}

};