// This is a constructor function, it constructs the object with properties

function Grid (height, width){

this.height = height;
this.width = width;
this.cells = [];
}

// Set up the grid as a prototype
// We can loop through using height and width, up/down first, left right second.
// We use the array to append certain html div dom objects
// Set var row equal to the html element
// Find the main grid and append the row

Grid.prototype.GenerateGrid = function() {
for (var i = 0; i < this.height; i++) {
	var row = $("<div class = 'row'></div>")
	$('.grid').append(row);
		for (var j = 0; j < this.width ; j++) {
			var cell = $("<div class = cell></div>");
			row.append(cell);                              //watch out here, you didnt need to append row the html element, just the var row
		};

	}
};