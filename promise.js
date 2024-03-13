function calculateArea(shape, sides) {
    return new Promise((resolve, reject) => {
        let area;
        switch (shape.toLowerCase()) {
            case 'square':
                if (sides.length !== 1) {
                    reject([-1]);
                    return;
                }
                area = sides[0] ** 2;
                break;
            case 'rectangle':
                if (sides.length !== 2) {
                    reject([-1]);
                    return;
                }
                area = sides[0] * sides[1];
                break;
            case 'circle':
                if (sides.length !== 1) {
                    reject([-1]);
                    return;
                }
                area = Math.PI * sides[0] ** 2;
                break;
            case 'triangle':
                if (sides.length !== 2) {
                    reject([-1]);
                    return;
                }
                area = 0.5*sides[0]*sides[1];
                break;
            default:
                reject([-1]);
                return;
        }
        const roundedArea = parseFloat(area.toFixed(2));
        resolve(roundedArea);
    });
}
const shapes = ['square', 'rectangle', 'circle', 'triangle'];
const values = [
  [2],             // square with side length 4
  [3, 4],          // rectangle with width 3 and height 5
  [5],             // circle with radius 6
  [4,5]        // triangle with sides 3, 4, and 5
];
async function getAreas(shapes, values_arr) {
        const promises = shapes.map((shape, index) => calculateArea(shape, values_arr[index]));
        const areas =  await Promise.all(promises).then(areas=>areas);
        const area = areas;
        console.warn(area)
        return area;
}
getAreas(shapes,values);