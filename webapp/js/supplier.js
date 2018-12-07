var AppController = {

	/**
	 * Display data in product table
	 * @public
	 */
	showData: function () {

		var sUrl = "/V3/Northwind/Northwind.svc/Suppliers(2)?$expand=Products&$format=json";
		jQuery.getJSON(sUrl, function (supplier) {
			jQuery("#table tr").not("#header").remove();
			for (var i = 0; i < supplier.Products.length; i++) {
				this._createTableRow(supplier.Products[i].ProductName, supplier.Products[i].UnitPrice, supplier.Products[i].UnitsInStock);
			}
		}.bind(this));

		/*
				// Load data from file data/supplier.json
				var request = new XMLHttpRequest();
		        
				request.onreadystatechange = function () {
					if (request.readyState === 4) {
						
						jQuery("#table tr").not("#header").remove();
						
						var supplier = JSON.parse(request.responseText);
						for (var i = 0; i < supplier.Products.length; i++) {
							this._createTableRow(supplier.Products[i].ProductName, supplier.Products[i].UnitPrice, supplier.Products[i].UnitsInStock);
						}
					}
				}.bind(this);

				request.open("GET", "/V3/Northwind/Northwind.svc/Suppliers(2)?$expand=Products&$format=json", true);
				request.send(null);
		*/

	},

	/*	showData: function () {

			jQuery.getJSON('data/supplier.json', function (supplier) {
				jQuery("#table tr").not(document.getElementById("header")).empty();
				for (var i = 0; i < supplier.Products.length; i++) {
					this._createTableRow(supplier.Products[i].ProductName, supplier.Products[i].UnitPrice, supplier.Products[i].UnitsInStock);
				}
			}.bind(this));

		},*/

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

AppController._anotherMethod = function () {

};

AppController._secondMethod = function () {

};