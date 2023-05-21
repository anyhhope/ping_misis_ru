import Chart from 'chart.js/auto'
const axios = require('axios');

const ctx = document.getElementById('myChart');
let data_bar;

function make_bar(ctx, data_bar){
    let bar_char = new Chart(ctx, {
        type: 'bar',
        data: data_bar,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

axios.get('http://46.138.243.191:54002/data_bar').then(response => {
  data_bar = response.data;
  make_bar(ctx, data_bar); 
}).catch(error => {
  console.log(error.message);
});

// PIE
const ctx2 = document.getElementById('myChart2'); 

// const pie = { //man/woman
//     labels: [ //need
//         'Man',
//         'Women'
//     ],
//     datasets: [{
//         label: 'My First Dataset',
//         data: [555, 115], 
//         backgroundColor: [
//             'rgb(54, 162, 235)',
//             'rgb(255, 99, 132)'
//         ],
//         hoverOffset: 4
//     }]
// };
let pie;
function make_pie(ctx2, pie){
    let pie_chart = new Chart(ctx2, {
        type: 'doughnut',
        data: pie,
    });
}
axios.get('http://46.138.243.191:54002/pie').then(response => {
//   console.log(response.data);
  pie = response.data;
  make_pie(ctx2, pie); 
}).catch(error => {
  console.log(error.message);
});

