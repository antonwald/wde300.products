var fruit = {
	name: "banana",
	color: "yellow",
	origin: "Puerto Rico",
	weight: 230,
	size: 17,
	rating: "good",
	suppliers: [{
		supplierName: "Trade SE"
	}, {
		supplierName: "Another SE",
		"city": "Moscow"
	}]
};

//showData(fruit.suppliers[1]);

//showData(fruit);

/**
 * This is JSDoc comment
 * Display data
 * @param {object} object - data object in json format
 * @public
 */
function showData(object) {

	if (object.name) {
		var sFruitName = object.name.toUpperCase();
		_createElement("h1", sFruitName);
	}
	
	for (var sProp in object) {
		_addToDocument(object, sProp);
	}

}

/**
 * This is JSDoc comment
 * Create element in DOM document
 * @param {string} sElementName - HTML tag name 
 * @param {string} sText - text node value 
 * @private
 */
function _createElement(sElementName, sText) {

	// create element with the text node
	var el = document.createElement(sElementName);
	var txt = document.createTextNode(sText);
	el.appendChild(txt);

	// add element to the DOM
	var body = document.getElementById("idBody");
	body.appendChild(el);
}

/**
 * This is JSDoc comment
 * Add to the DOM document data from object property
 * @param {object} object - data 
 * @param {string} sProperty - name of property 
 * @private
 */
function _addToDocument(object, sProperty) {

	if (object.hasOwnProperty(sProperty)) {
		if (object[sProperty] instanceof Array) {
			var sHeader = sProperty.charAt(0).toUpperCase() + sProperty.slice(1) + ":";
			_createElement("h4", sHeader);
			// in case of array make a deeper loop
			for (var i = 0; i < object[sProperty].length; i++) {
				showData(object[sProperty][i]);
			}
		} else {
			// capitalize first letter of the property name
			var sLabel = sProperty.charAt(0).toUpperCase() + sProperty.slice(1);
			// get data out of object
			var sValue = object[sProperty];
			var sText = sLabel + " : " + sValue;
			_createElement("p", sText);
		}
	}
}