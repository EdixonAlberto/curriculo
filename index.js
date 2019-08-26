let graphLang = document.getElementById("graph-lang").getContext("2d");

new Chart(graphLang, {
    type: "doughnut",
    data: {
        labels: ['PHP', 'C#', 'HTML5', 'CSS3', 'JavaScript'],
        datasets: [{
            label: "Lenguajes de Programacion",
            data: [80, 50, 60, 40, 60],
            backgroundColor: ['#556594', '#7549C4', '#F06127', '#239DDE', '#F7DF1E'],
        }],
    },
    options: {
        legend: {
            position: "bottom",
            labels: {
                fontColor: "white"
            }
        }
    }
});
