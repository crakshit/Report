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
        Chart.defaults.scale.ticks.beginAtZero = true;
        chart();
        function renderChart(data, labels) {
        var ctx = $('#mycanvas');   
        var myChart = new Chart(ctx, {
                            type: 'bar',
                            data: {
                                    labels: labels,
                                    datasets: [{
                                    label: 'Employee Attendance',
                                    data: data,
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
                                    hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
                                    },
                            // onAnimationComplete: function(){
                            //     var ctx = this.chart.ctx;
                            //     ctx.font = this.scale.font;
                            //     ctx.textAlign = "center";
                            //     ctx.textBaseline = "bottom";

                            //     this.datasets.forEach(function(dataset){
                            //         dataset.bars.forEach(function(bar){
                            //             ctx.fillText(bar.value,bar.x,bar.y - 5);
                            //         });
                            //     })
                            // }
                                    // options:{
                                    //     scales:{
                                    //         yAxes:[{
                                    //             type:'time',
                                    //             time:{
                                    //                 displayFormats:{
                                    //                     minutes:'h:mm:ss a'
                                    //                 }
                                    //             }
                                    //         }]
                                    //     }
                                    // }
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