

// ADT List
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // empty

    //this.append = append;

    //function append(element) {
    //    this.dataStore[ this.listSize++ ] = element;
   // }
};
// Adding ne elements to end
List.prototype.append = function (element) {
    this.dataStore[ this.listSize++ ] = element;
};

// Find method search an element in the list
List.prototype.find = function(element) {
   for (  var i = 0; i<this.listSize ; i++ ) {
       if ( this.dataStore[i] === element ) {
           return i;
       }
   }
   return -1;
};
// Removing element from list
List.prototype.remove = function(element) {
    var foundAt = this.find(element);
    if ( foundAt > -1 ) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
    }
    return false;
}
// Getting the size of the list
List.prototype.size = function () {
	return this.listSize;
}
// Show the datas
List.prototype.toString = function () {
	return this.dataStore;
}
// Creating the insert method
List.prototype.insert = function ( element, after ) {
    var insertPos = this.find( after );

    if ( insertPos > -1 ) {
        this.dataStore.splice( insertPos + 1, 0, element );
        this.listSize;
        return true;
    }

    return false;
}
// Creating the clear method
List.prototype.clear = function () {
   delete this.dataStore;
   this.dataStore = [];
   this.listSize = 0;
   this.pos = 0;
};
// Verify if the element is in the list
List.prototype.contains = function ( element ) {
    var foundAt = this.find(element);
    return ( foundAt > -1 );
}
// Move to Front
List.prototype.front = function() {
	this.pos = 0;
};
// Moving to end
List.prototype.end = function() {
    this.pos = this.listSize -1;
};
// Moving
List.prototype.prev = function() {
	if ( this.pos > 0 ) {
        --this.pos;
	}
}
//
List.prototype.next = function() {
	if ( this.pos < this.listSize - 1 ) {
        ++this.pos;
	}
}
//
List.prototype.currentPos = function () {
	return this.pos;
}

List.prototype.moveTo = function (position) {
    if (  position > -1 && position < this.listSize ) {
        this.pos = position;
    }
};

List.prototype.getElement = function() {
	return this.dataStore[this.pos];
}

