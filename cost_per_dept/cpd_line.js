$(document).ready(function() {
    $.ajax({
        url:"http://localhost:8080/cost-per-dept/cpd.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var ct = [];
            var dept = [];

            for (var i in data) {
                ct.push(data[i].cost);
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
                                    label: 'Cost',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                           
                                });
                            }

        function chart () {
                        data = ct;
                        labels = dept;
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});