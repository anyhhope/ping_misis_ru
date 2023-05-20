//read file by btn
// const fileInput = document.getElementById('csv')
// const readFile = () => {
//     const reader = new FileReader()
//     reader.onload = () => {
//         data = reader.result;
//         var div = document.querySelector('.for-table');
//         var lines = data.split("\n");
//         let output = [];
//         let i;

//         /* HEADERS */
//         output.push("<tr><th>"
//             + lines[0].slice().split(",").join("</th><th>")
//             + "</th></tr>");

//         for (i = 1; i < lines.length; i++)
//             output.push("<tr><td>"
//                 + lines[i].slice().split(",").join("</td><td>")
//                 + "</td></tr>");

//         output = "<table><tbody>"
//             + output.join("") + "</tbody></table>";

//         div.innerHTML = output;
//     }
//     reader.readAsText(fileInput.files[0], 'UTF-8');
// }

// fileInput.addEventListener('change', readFile)
