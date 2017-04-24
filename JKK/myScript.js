$(document).ready(function() {
	
	 $.getJSON("http://localhost:14579/api/population", function (data)  {
		
                var tbl = "<div id='col1' class='col-xs-6'><table style='display:none' class='highchart' data-graph-type='column' data-graph-container-before='1' data-graph-height='00' data-graph-width='600' >";
				tbl += "<caption>Population in Ireland</caption><thead><tr><th>Region</th><th>Population</th></tr></thead><tbody>";
				
				for (i=0; i<data.length; i++)
				{
					tbl +="<tr><td>" + data[i].Region + "</td><td>"  + data[i].Population + "</td></tr>";			
				}
				
				tbl += "</tbody></table></div>";
				$('body').append(tbl);
				//$('table.highchart').highchartTable();				
            });
				 
	 $.getJSON("http://localhost:14579/api/marriages", function (data)  {
		
                 var tbl = "<div id='col2' class='col-xs-6'><table style='display:none' class='highchart' data-graph-type='column' data-graph-legend-disabled='1' data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
				 tbl += "<caption>Marriages in 2016</caption><thead><tr><th>Age</th><th>Groom</th><th>Bride</th></tr></thead><tbody>";
				
				 for (i=0; i<data.length; i++)
				 {
					 tbl +="<tr><td>" + data[i].Age + "</td><td>" + data[i].NumbersGroom + "</td><td data-graph-item-color='#df0101'>" + data[i].NumbersBride + "</td></tr>";			
				 }
				
				 tbl += "</tbody></table></div>";
				 $('body').append(tbl);
				// $('table.highchart').highchartTable();				
             });
	
	$.getJSON("http://localhost:14579/api/births", function (data)  {
		
                 var tbl = "<table style='display:none' class='highchart' data-graph-type='line' data-graph-legend-disabled='1' data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
				 tbl += "<caption>Births in Sligo</caption><thead><tr><th>Years</th><th>Births Numbers</th></tr></thead><tbody>";
				
				 for (i=0; i<data.length; i++)
				 {
					 tbl +="<tr><td>" + data[i].Years + "</td><td>"  + data[i].Births + "</td></tr>";			
				 }
				
				 tbl += "</tbody></table>";
				 $('body').append(tbl);
				 $('table.highchart').highchartTable();		

				$('#highcharts-ffav2rl-0.highcharts-point:last').attr('fill','#FF0000');			 
             });
	
	
});

