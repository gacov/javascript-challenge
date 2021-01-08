

// naming variables
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputdate = d3.select("#datetime");



// creating a function to show the table with the data
function createtable(tabledata){
    tbody.html("")
    tabledata.forEach(d => {
        let row = tbody.append("tr");
        for(x in d){
            row.append("td").text(d[x])
        }
    });
}

// creating a function to filter the data coming from data.js according to the input date
function filtering(){
    let dateofinterest = d3.select("#datetime").property("value");
    console.log(dateofinterest)
    let subdata = data.filter(d=>{
        return d.datetime === dateofinterest;

    })

// creating the table with the data filtered
createtable(subdata);
}

// creating the table with the full data (not filtered)
createtable(data);

button.on("click", filtering)