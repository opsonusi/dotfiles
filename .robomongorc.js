DBQuery.prototype.toCSV = function(deliminator, textQualifier) {
var count = -1;
var headers = [];
var data = {};

var cursor = this;

deliminator = deliminator == null ? ',' : deliminator;
textQualifier = textQualifier == null ? '\"' : textQualifier;

while (cursor.hasNext()) {

    var array = new Array(cursor.next());

    count++;

    for (var index in array[0]) {
        if (headers.indexOf(index) == -1) {
            headers.push(index);
        }
    }

    for (var i = 0; i < array.length; i++) {       
        for (var index in array[i]) {
            data[count + '_' + index] = array[i][index];
        }
    }
}

var line = '';

for (var index in headers) {
    line += headers[index] + ',';
}

line = line.slice(0, -1);
print(line);

for (var i = 0; i < count + 1; i++) {

    var line = '';
    var cell = '';
    for (var j = 0; j < headers.length; j++) {
        cell = data[i + '_' + headers[j]];
        if (cell == undefined) cell = '';
        line +=  textQualifier + cell + textQualifier + deliminator;
    }

    line = line.slice(0, -1);
    print(line);
}
}

DBCollection.prototype.findById = function(id) {
	return this.find({ _id : id });
}


DBQuery.prototype.toCSV2 = function() {
    var cursor = this;
    while (cursor.hasNext()) {
        var array = new Array(cursor.next());
        var line = '';
        var cell = '';  
        for (var i = 0; i < array.length; i++) {     
            for (var index in array[i]) {
                cell = array[i][index];
        	if (cell == undefined) cell = '';
        	line +=  cell + ',';
            }
        }
        line = line.slice(0, -1);
        print(line);
    }
}