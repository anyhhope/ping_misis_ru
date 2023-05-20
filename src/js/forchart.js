import Chart from 'chart.js/auto'

const ctx2 = document.getElementById('myChart2');

const pie = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

new Chart(ctx2, {
    type: 'doughnut',
    data: pie,
});

const ctx = document.getElementById('myChart');

const data_bar = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
}

new Chart(ctx, {
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


// const ctx = document.getElementById('myChart');

// const data_bar = response.data;

// new Chart(ctx, {
//   type: 'bar',
//   data: data_bar,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

let bar_resp;

function make_bar(bar_resp) {
  let ctx = document.querySelector('#myChart');
  console.log(bar_resp);

  new Chart(ctx, {
    type: 'bar',
    data: [1,2,2,3],
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

const axios = require('axios');
axios.get('http://46.138.243.191:54002/data_bar').then(response => {
  // console.log(response.data.datasets[0].data);
  bar_resp = response.data.datasets[0].data;
  make_bar(bar_resp);
  // console.log(response.data);
  // console.log(response.data.labels);
}).catch(error => {
  console.log(error.message);
});

