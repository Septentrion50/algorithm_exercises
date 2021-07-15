const fs = require('fs');
const sort = require('./merge');
const fileName = process.argv[2];

try{
    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
            console.log(error.message);
            return;
        }
        const strArr = data.split(' ');
        const dataArr = strArr.map(x => Number.parseInt(x, 10));
        console.log(dataArr);
        const sorter = new sort(dataArr);
        console.log(dataArr);
    })
} catch (error){
    console.log(error.message)
}