$(document).ready(function() {
    $.ajax({
        url:"http://localhost/Report/workhour_per_dept/whpd.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var wh = [];
            var dept = [];

            for (var i in data) {
                wh.push(data[i].working_hours);
                dept.push(data[i].department);
            }

        Chart.defaults.scale.ticks.beginAtZero = true;
        chart();
        function renderChart(data, labels) {
        var ctx = $('#mycanvas');   
        var myChart = new Chart(ctx, {
                            type: 'doughnut',
                            data: {
                                    labels: labels,
                                    datasets: [{
                                    label: 'Number of hours',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                           
                                });
                            }

        function chart () {
                        data = wh;
                        labels = dept;
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});