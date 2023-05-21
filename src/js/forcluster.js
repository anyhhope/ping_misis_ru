import Chart from 'chart.js/auto'


const data_scatter = {
    datasets: [{
        label: 'Кластеризация',
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
        backgroundColor: 'rgb(25, 99, 132)'
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

document.getElementById("myChart2").onclick = function (evt) {
    const points = pie_chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

    if (points.length) {
        const firstPoint = points[0];
        const label = pie_chart.data.labels[firstPoint.index];
        const value = pie_chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        let h = 0;
    }
}

// document.getElementById("myChart3").onclick = function (evt) {
//         const points = scatter_chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
    
//         if (points.length) {
//             const firstPoint = points[0];
//             const label = scatter_chart.data.labels[firstPoint.index];
//             const value = scatter_chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
//             let h = 0;
//         }
//     }