$(document).ready(function() {
    $.ajax({
        url:"http://localhost/Report/Avg-age-per-dept/aad.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var age = [];
            var dept = [];

            for (var i in data) {
                age.push(data[i].age);
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
                                    label: 'Average age',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                           
                                });
                            }

        function chart () {
                        data = age;
                        labels = dept;
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});