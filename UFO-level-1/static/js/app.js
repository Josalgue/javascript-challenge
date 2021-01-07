// from data.js
let tableData = data;

// YOUR CODE HERE!
let btnGet = document.querySelector('button');
let myTable = document.querySelector("#ufo-table");
 
 
let headers = ['Date/Time', 'City', 'State', 'Country', 'Shape', 'Comment'];

 
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
 
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
 
    table.appendChild(headerRow);
 
    tableData.forEach(emp => {
        let row = document.createElement('tr');
 
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
 
        table.appendChild(row);
    });
 
    myTable.appendChild(table);
});

console.log(myTable)
