function connectedCells(matrix) {
	var i = 0;
	function getRegionSize(matrix,row,column){
		if (matrix[row][column] == 0) {
			return 0;
		}
		matrix[row][column] = 0;
		var size = 1;
		for (var searchRow = Math.max(row - 1,0); searchRow <= Math.min(matrix.length - 1,row + 1); searchRow++) {
			for (var searchColumn = Math.max(column - 1,0); searchColumn <= Math.min(matrix[row].length - 1, column + 1); searchColumn++) {			
				if ((searchRow != row || searchColumn != column)) {
					size += getRegionSize(matrix, searchRow, searchColumn);
				}
			}
		}
		return size;
 	}
	function getBiggestRegion(matrix) {
		var maxRegion = 0;
		for (var row = 0; row < matrix.length; row++) {
			for (var column = 0; column < matrix[row].length; column++) {
				var size = getRegionSize(matrix,row,column);
					maxRegion = Math.max(size,maxRegion);
			}
		}
		return maxRegion;
	}
	return getBiggestRegion(matrix);
}


console.log(connectedCells([
[1,1,0,0,0,1],
[0,0,1,0,1,0],
[0,0,1,1,1,1],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,1,1]
]));