$(document).ready(function() {
    $.ajax({
        url:"http://localhost/Report/male-female/mf.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var m = [];
            var f = [];

            for (var i in data) {
                m.push(data[i].MALES);
                f.push(data[i].FEMALES);
            }

        Chart.defaults.scale.ticks.beginAtZero = true;
        chart();
        function renderChart(data, labels) {
        var ctx = $('#mycanvas');   
        var myChart = new Chart(ctx, {
                            type: 'doughnut',
                            data: {
                                    labels: labels,
                                    datasets: [
                                    {
                                    label: 'Males-Females',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'
                                },]
                                    },
                           
                                });
                            }

        function chart () {
                        data = [m,f];
                        labels = ["Males","Females"];
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});