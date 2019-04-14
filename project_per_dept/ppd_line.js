$(document).ready(function() {
    $.ajax({
        url:"http://localhost:8080/project-per-dept/ppd.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var pro = [];
            var dept = [];

            for (var i in data) {
                pro.push(data[i].project);
                dept.push(data[i].department);
            }

        Chart.defaults.scale.ticks.beginAtZero = true;
        chart();
        function renderChart(data, labels) {
        var ctx = $('#mycanvas');   
        var myChart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                    labels: labels,
                                    datasets: [{
                                    label: 'Projects',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                           
                                });
                            }

        function chart () {
                        data = pro;
                        labels = dept;
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});