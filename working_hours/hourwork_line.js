$(document).ready(function() {
	$.ajax({
		url:"http://localhost:8080/hourworked/hourwork.php",
		method: "GET",
		success: function(data){
			console.log(data);
			var eid = [];
			var noh = [];

			for (var i in data) {
				eid.push(data[i].emp_id);
				noh.push(data[i].no_of_hours);
			}


		chart();
		function renderChart(data, labels) {
        var ctx = $('#mycanvas'); 	
    	var myChart = new Chart(ctx, {
        					type: 'line',
        					data: {
            						labels: labels,
            						datasets: [{
                					label: 'Working hours',
                					data: data,
                					borderColor: 'rgba(75, 192, 192, 1)',
                					backgroundColor: 'rgba(75, 192, 192, 0.2)',
                					hoverBackgroundColor: 'rgba(200, 300, 400, 1)',
            						hoverBorderColor: 'rgba(200, 300, 400, 1)'}]
        							},
    							});
							}

		function chart () {
        				data = noh;
        				labels = eid;
        				renderChart(data, labels);
    	}
    },
	error: function(data){
		console.log(data);
		}
	});
});