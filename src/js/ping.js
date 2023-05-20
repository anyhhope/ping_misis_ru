const fileInput = document.getElementById('csv')
// const readFile = () => {
//   const reader = new FileReader()
//   reader.onload = () => {
//     document.getElementById('out').innerHTML = reader.result
//     console.log(typeof document.getElementById('out').innerHTML)
//   }
//   // start reading the file. When it is done, calls the onload event defined above.
//   reader.readAsBinaryString(fileInput.files[0])
// }


const readFile = () => {
    const reader = new FileReader()
    reader.onload = () => {
        data = reader.result;
        var div = document.getElementById('container');
        var lines = data.split("\n"), output = [], i;

        /* HEADERS */
        output.push("<tr><th>"
            + lines[0].slice().split(",").join("</th><th>")
            + "</th></tr>");

        for (i = 1; i < lines.length; i++)
            output.push("<tr><td>"
                + lines[i].slice().split(",").join("</td><td>")
                + "</td></tr>");

        output = "<table><tbody>"
            + output.join("") + "</tbody></table>";

        div.innerHTML = output;
    }
    reader.readAsText(fileInput.files[0], 'UTF-8');
}

fileInput.addEventListener('change', readFile)
// var div = document.getElementById('container');
// // var data = 'heading1,heading2,heading3,heading4,heading5\nvalue1_1,value2_1,value3_1,value4_1,value5_1\nvalue1_2,value2_2,value3_2,value4_2,value5_2';
// var lines = data.split("\n"), output = [], i;

// /* HEADERS */
// output.push("<tr><th>"
//     + lines[0].slice().split(",").join("</th><th>")
//     + "</th></tr>");

// for (i = 1; i < lines.length; i++)
//     output.push("<tr><td>"
//         + lines[i].slice().split(",").join("</td><td>")
//         + "</td></tr>");

// output = "<table><tbody>"
//     + output.join("") + "</tbody></table>";

// div.innerHTML = output;