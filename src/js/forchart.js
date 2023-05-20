import Chart from 'chart.js/auto'

const ctx2 = document.getElementById('myChart2');

const pie = { //man/woman
    labels: [ //need
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100], //need
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

let pie_chart = new Chart(ctx2, {
    type: 'doughnut',
    data: pie,
});

document.getElementById("myChart2").onclick = function(evt)
{   
    const points = pie_chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

    if (points.length) {
        const firstPoint = points[0];
        const label = pie_chart.data.labels[firstPoint.index];
        const value = pie_chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        let h = 0;
    }
}

const ctx = document.getElementById('myChart');

const data_bar = { //для колва людей в категотирии
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], //need
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3], //need
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


const data_scatter = {
    datasets: [{
        label: 'Scatter Dataset',
        data: [{ //координаты
            x: -10,
            y: 0
        }, {
            x: 0,
            y: 10
        }, {
            x: 10,
            y: 5
        }, {
            x: 0.5,
            y: 5.5
        }],
        backgroundColor: 'rgb(255, 99, 132)'
    }],
};

const config = {
    type: 'scatter',
    data: data_scatter,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
};


const ctx3 = document.getElementById('myChart3');


let scatter_chart = new Chart(ctx3, config);

document.getElementById("myChart3").onclick = function(evt)
{   
    const points = scatter_chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

    if (points.length) {
        const firstPoint = points[0];
        const label = scatter_chart.data.labels[firstPoint.index];
        const value = scatter_chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        let h = 0;
    }
}
