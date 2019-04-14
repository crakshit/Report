$(document).ready(function() {
	$.ajax({
		url:"http://localhost:8080/payroll/payroll.php",
		method: "GET",
		success: function(data){
			console.log(data);
			var eid = [];
			var salary = [];

			for (var i in data) {
				eid.push(data[i].employee_id);
				salary.push(data[i].salary);
			}


		chart();
		function renderChart(data, labels) {
        var ctx = $('#mycanvas'); 	
    	var myChart = new Chart(ctx, {
        					type: 'pie',
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
        				data = salary;
        				labels = eid;
        				renderChart(data, labels);
    	}
    },
	error: function(data){
		console.log(data);
		}
	});
});