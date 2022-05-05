// DOWNLOAD TEMPLATE BUTTON
// Gives functionality to 'Download Template'
// Imports sample csv data const
import template from './template.js';

// Sets data equal to imported const
export const csvFileData = template;

export var button = document.getElementById('templateBtn');
button.addEventListener('click', download);
export function download() {
    console.log('Should download template');

    // Define the heading for each row of the data
    var csv = 'Country,Year,NET-Import-Exp,Surplus-Deficit,YOY-Stock Decrease in Stock,Leans,FertUsePercentAvg,FertUseBucket\n';

    // Merge the data with CSV
    csvFileData.forEach(function (row) {
        csv += row.join(',');
        csv += '\n';
    })

    // Display the created CSV data on the web browser
    document.write(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data.text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.targer = '_blank';

    // Provide the name for the CSV file to be downloaded
    hiddenElement.download = 'DataTemplate.csv'
    hiddenElement.click();
}
// DOWNLOAD TEMPLATE BUTTON

// CHOOSE FILE BUTTON
// Gives functionality to 'Choose File'
export var button = document.getElementById('fileBtn');
button.addEventListener('click', select);
export function select() {
    console.log('Should open file dialog');
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

        // Getting a hold of the file reference
        var file = e.target.files[0];

        // Setting up the reader
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        /* TEST CODE
        * https://zetcode.com/javascript/exceljs/
        const Excel = require('exceljs');
        const wb = new ExcelJS.Workbook();
        const ws = wb.addWorksheet('file');
        localStorage.csvFile = ws;
        TEST CODE */

        // Writes string read from file to variable called csvString
        reader.onload = readerEvent => {
            var csvString = readerEvent.target.result;
            // Stores csvString in the browser
            localStorage.retrieve = csvString;
        }

    }
    input.click();
}
// CHOOSE FILE BUTTON

// UPLOAD BUTTON
// Gives functionality to upload
export var button = document.getElementById('uploadBtn');
button.addEventListener('click', upload);
export function upload() {
    /* TEST CODE
             * https://zetcode.com/javascript/exceljs/
            var testReader = new FileReader();
            testReader.readAsText(localStorage.csvFile, 'UTF-8');
            testReader.onload = readerEvent => {
                var testString = readerEent.target.result;
                console.log(localStorage.csvFile);
            }
            TEST CODE */
    // Prints csvString to browser console
    console.log(localStorage.retrieve);
}
// UPLOAD BUTTON