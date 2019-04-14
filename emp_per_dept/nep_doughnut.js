$(document).ready(function() {
    $.ajax({
        url:"http://localhost/Report/emp_per_dept/nep.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var emp = [];
            var dept = [];

            for (var i in data) {
                emp.push(data[i].EPD);
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
                                    label: 'Number of employees',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                           
                                });
                            }

        function chart () {
                        data = emp;
                        labels = dept;
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});