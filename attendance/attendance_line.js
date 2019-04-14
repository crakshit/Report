$(document).ready(function() {
    $.ajax({
        url:"http://localhost/Report/attendance/attendance.php",
        method: "GET",
        success: function(data){
            console.log(data);
            var name = [];
            var time = [];
            var b = [];

            for (var i in data) {
                name.push(data[i].employee_first_name);
                time.push(data[i].attended_time);
            }

            for(var i in time){
                    var c = time[i].split(':'); 
                    // var seconds = (+c[0])*60*60 + (+c[1])*60 + (+c[2]);
                    var t = (+c[0])+'.'+(+c[1])
                    b.push(t);
                }

        chart();
        function renderChart(data, labels) {
        var ctx = $('#mycanvas');   
        var myChart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                    labels: labels,
                                    datasets: [{
                                    label: 'Employee salary',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                                });
                            }

        function chart () {
                        data = b;
                        labels = name;
                        renderChart(data, labels);
        }
    },
    error: function(data){
        console.log(data);
        }
    });
});