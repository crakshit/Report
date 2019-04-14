$(document).ready(function() {
	$.ajax({
		url:"http://localhost:8080/leave/leave.php",
		method: "GET",
		success: function(data){
			console.log(data);
			var eid = [];
			var leave = [];

			for (var i in data) {
				eid.push(data[i].emp_id);
				leave.push(data[i].leave_taken);
			}


		chart();
		function renderChart(data, labels) {
        var ctx = $('#mycanvas'); 	
    	var myChart = new Chart(ctx, {
        					// type: 'bar',
        					// type: 'pie',
        					type: 'line',
        					// type: 'doughnut',
        					data: {
            						labels: labels,
            						datasets: [{
                					label: 'Leave Report',
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
        				labels = eid;
        				renderChart(data, labels);
    	}
    },
	error: function(data){
		console.log(data);
		}
	});
});