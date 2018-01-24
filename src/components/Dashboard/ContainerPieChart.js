import React, {Component} from 'react';
import Chart from 'chart.js'

export default class ContainerPieChart extends Component {
    componentDidUpdate() {
        new Chart('container-pie-chart', {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [this.props.ContainersRunning, this.props.ContainersPaused, this.props.ContainersStopped],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ]
                }],
                labels: ["Running", "Paused", "Stopped"]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Containers State'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

    render() {
        return (<canvas id='container-pie-chart' width={400} height={400}/>);
    }
}