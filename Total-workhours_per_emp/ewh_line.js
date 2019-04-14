$(document).ready(function() {
    $.ajax({
        url:"http://localhost:8080/emp-workhours/ewh.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var name = [];
            var hr = [];

            for (var i in data) {
                name.push(data[i].first_name);
                hr.push(data[i].working_hours);
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
                                    label: 'Average hours',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                           
                                });
                            }

        function chart () {
                        data = hr;
                        labels = name;
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});