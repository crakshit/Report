$(document).ready(function() {
    $.ajax({
        url:"http://localhost:8080/Avg-leave-dept/ald.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var leave = [];
            var dept = [];

            for (var i in data) {
                leave.push(data[i].leave_taken);
                dept.push(data[i].department);
            }

        Chart.defaults.scale.ticks.beginAtZero = true;
        chart();
        function renderChart(data, labels) {
        var ctx = $('#mycanvas');   
        var myChart = new Chart(ctx, {
                            type: 'bar',
                            data: {
                                    labels: labels,
                                    datasets: [{
                                    label: 'Average Leave',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                           
                                });
                            }

        function chart () {
                        data = leave;
                        labels = dept;
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});