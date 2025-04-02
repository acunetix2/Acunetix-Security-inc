// script.js

document.addEventListener('DOMContentLoaded', () => {
    const donutData = 
    {
      labels: ['Critical', 'High', 'Medium', 'Low'],
      datasets: [{
        data: [10, 20, 20, 50], // Example data
        backgroundColor: ['red', 'blue', 'gold', 'green'],
        hoverOffset: 4
      }]
    };
  
    const donutConfig = {
      type: 'doughnut',
      data: donutData,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Vulnerability Distribution'
          }
        }
      }
    };

    // Scatter Chart Data and Configuration
     const scatterData = {
      datasets: [{
        label: 'Threat Score vs Time',
        data: [
          { x: 10, y: 25 },
          { x: 20, y: 35 },
          { x: 30, y: 40 },
          { x: 40, y: 60 },
          { x: 50, y: 70 },
          { x: 60, y: 80 },
        ], // Example data
        backgroundColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 6
      }]
    };
  
    const scatterConfig = {
      type: 'linegragh',
      data: scatterData,
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time (Days)'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Threat Score'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Threat Score Over Time'
          }
        }
      }
    };
  
    // Bar Chart Data and Configuration
    const barData = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'New Threats',
        data: [10, 20, 35, 41], // Example data
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
      }]
    };
  
    const barConfig = {
      type: 'bar',
      data: barData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Number of Threats'
            }
          },
          x: {
              title: {
                  display: true,
                  text: "Weeks"
              }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'New Threats Per Week'
          }
        }
      }
    };
  
    // Create Charts
    const donutCtx = document.getElementById('donutChart').getContext('2d');
    const scatterCtx = document.getElementById('scatterChart').getContext('2d');
    const barCtx = document.getElementById('barChart').getContext('2d');
  
    new Chart(donutCtx, donutConfig);
    new Chart(scatterCtx, scatterConfig);
    new Chart(barCtx, barConfig);
  });
  