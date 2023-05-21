import Chart from 'chart.js/auto'

const ctx2 = document.getElementById('myChart2'); //pie

const pie = { //man/woman
    labels: [ //need
        'Мужчины',
        'Женщины'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [555, 115], //need
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)'
        ],
        hoverOffset: 4
    }]
};

function make_pie(cnv, pie){
    let pie_chart = new Chart(cnv, {
        type: 'doughnut',
        data: pie,
    });
}

make_pie(ctx2, pie)



// document.getElementById("myChart2").onclick = function (evt) {
//     const points = pie_chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

//     if (points.length) {
//         const firstPoint = points[0];
//         const label = pie_chart.data.labels[firstPoint.index];
//         const value = pie_chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
//         let h = 0;
//     }
// }

const ctx = document.getElementById('myChart');

const data_bar = { //для колва людей в категотирии
    labels: ['Red', 'Blue', 'dfgbh', 'Green', 'dfvg', 'Orange'], //need
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 1234, 23, 2, 3], //need
        borderWidth: 1
    }]
}


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

make_bar(ctx, data_bar);



// document.getElementById("myChart3").onclick = function (evt) {
//     const points = scatter_chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

//     if (points.length) {
//         const firstPoint = points[0];
//         const label = scatter_chart.data.labels[firstPoint.index];
//         const value = scatter_chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
//         let h = 0;
//     }
// }