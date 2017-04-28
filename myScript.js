$(document).ready(function() {
	
	 $.getJSON("http://localhost:14579/api/population", function (data)  {
		
                var tbl = "<div id='col1'><table style='display:none'  id='chart1' class='highchart' data-graph-type='column' data-graph-container-before='1' data-graph-height='00' data-graph-width='600' >";
				tbl += "<caption>Population in Ireland</caption><thead><tr><th>Region</th><th>Population</th></tr></thead><tbody>";
				
				for (i=0; i<data.length; i++)
				{
					tbl +="<tr><td>" + data[i].Region + "</td><td>"  + data[i].Population + "</td></tr>";			
				}
				
				tbl += "</tbody></table></div>";
				//$('.row').append(tbl);
				$('body').append(tbl);
				$('table#chart1').highchartTable();				
            });
				 
	 $.getJSON("http://localhost:14579/api/marriages", function (data)  {
		
                 var tbl = "<div id='col2'><table style='display:none' id='chart2' class='highchart' data-graph-type='column'  data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
				 tbl += "<caption>Marriages in 2016</caption><thead><tr><th>Age</th><th>Groom</th><th>Bride</th></tr></thead><tbody>";
				
				 for (i=0; i<data.length; i++)
				 {
					 tbl +="<tr><td>" + data[i].Age + "</td><td>" + data[i].NumbersGroom + "</td><td data-graph-item-color='#df0101'>" + data[i].NumbersBride + "</td></tr>";			
				 }
				
				 tbl += "</tbody></table></div>";
				 $('body').append(tbl);
				$('table#chart2').highchartTable();				
             });
	
	$.getJSON("http://localhost:14579/api/births", function (data)  {
		
                 var tbl = "<div id='col3'><table style='display:none' id='chart3' class='highchart' data-graph-type='line' data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
				 tbl += "<caption>Births in Sligo</caption><thead><tr><th>Years</th><th>Births Numbers</th></tr></thead><tbody>";
				
				 for (i=0; i<data.length; i++)
				 {
					 tbl +="<tr><td>" + data[i].Years + "</td><td>"  + data[i].Births + "</td></tr>";			
				 }
				
				 tbl += "</tbody></table></div>";
				 $('body').append(tbl);
				 $('table#chart3').highchartTable();				 
             });
	
	
});
