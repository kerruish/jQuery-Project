$(document).ready(function() {
	
	 $.getJSON("http://localhost:14579/api/population", function (data)  {
				
				var tbl = "<table style='display:none'  id='population' class='highchart' data-graph-type='column'  data-graph-container-before='1'  ,data-graph-height='00' data-graph-width='600' >";
				tbl += "<caption>Population in Ireland</caption><thead><tr><th>Region</th><th>Population</th></tr></thead><tbody>";
				
				for (i=0; i<data.length; i++)
				{
					tbl +="<tr><td>" + data[i].Region + "</td><td>"  + data[i].Population + "</td></tr>";			
				}
				
				tbl += "</tbody></table>";
				//$('.row').append(tbl);
				$('#population').append(tbl);
				$('table#population').highchartTable();	
				$('.highcharts-point').css('fill', '#c4dc18');	
				$('.highcharts-point').css('stroke', 'black');
			
            });
	$.getJSON("http://localhost:14579/api/births", function (data)  {
		
                 var tbl = "<table style='display:none' id='births' class='highchart' data-graph-type='line' data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
				 tbl += "<caption>Births in Sligo</caption><thead><tr><th>Years</th><th>Births Numbers</th></tr></thead><tbody>";
				
				 for (i=0; i<data.length; i++)
				 {
					 tbl +="<tr><td>" + data[i].Years + "</td><td>"  + data[i].Births + "</td></tr>";			
				 }
				
				 tbl += "</tbody></table>";
				 $('#births').append(tbl);
				 $('table#births').highchartTable();	
				 $('.highcharts-series-0 > .highcharts-graph').css('stroke', '#eb5c00');
				  $('.highcharts-series-0 > .highcharts-graph').css('stroke-width', '10');
				 
				 
             });
				 
	 $.getJSON("http://localhost:14579/api/marriages", function (data)  {
		
                 var tbl = "<table style='display:none' id='marriages' class='highchart' data-graph-type='column'  data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
				 tbl += "<caption>Marriages in 2016</caption><thead><tr><th>Age</th><th>Groom</th><th>Bride</th></tr></thead><tbody>";
				
				 for (i=0; i<data.length; i++)
				 {
					 tbl +="<tr><td>" + data[i].Age + "</td><td>" + data[i].NumbersGroom + "</td><td data-graph-item-color='#df0101'>" + data[i].NumbersBride + "</td></tr>";			
				 }
				
				 tbl += "</tbody></table>";
				 $('#marriages').append(tbl);
				$('table#marriages').highchartTable();	
				$('.highcharts-series-0 > .highcharts-point').css('fill', '#005c00');	
				$('.highcharts-series-1 > .highcharts-point').css('fill', '#ffb5e8');	
				
             });
			 $.getJSON("http://localhost:14579/api/prices", function (data)  {
		
                 var tbl = "<table style='display:none' id='price' class='highchart' data-graph-type='line'  data-graph-container-before='1' data-graph-height='800' data-graph-width='400' >";
				 tbl += "<caption>Price</caption><thead><tr><th>Year</th><th data-graph-dash-style='dot'>All Items</th><th data-graph-dash-style='dash'>Food and non-alcoholic beverages</th><th>Alcoholic beverages and tobacco</th><th data-graph-dash-style='longdash'>Clothing and footwear</th><th>Housing, water, electricity, gas and other fuelso</th><th data-graph-dash-style='shortdash'>Furnishings, household equipment and routine household maintenance</th><th data-graph-dash-style='shortdashdotdot'>Health</th><th data-graph-dash-style='shortdot'>Transporto</th><th>Communicationso</th><th>Recreation and cultureo</th><th>Education</th><th>Restaurants and hotels</th><th>Miscellaneous goods and services</th></tr></thead><tbody>";
				
				 for (i=0; i<data.length; i++)
				 {
					 tbl +="<tr><td>" + data[i].Year + "</td><td>"
					 + data[i].AllItems + "</td><td>"
					 + data[i].FoodAndNonAlcoholicBeverages +"</td><td>"
					 + data[i].AlcoholicBeveragesAndTobacco + "</td><td>" 
					 + data[i].ClothingAndFootwear + "</td><td>" 
					 + data[i].HousingWaterElectricityGasAndOtherFuels + "</td><td>" 
					 + data[i].FurnishingsHouseholdEquipmentAndRoutineHouseholdMaintenance + "</td><td>" 
					 + data[i].Health + "</td><td>" 
					 + data[i].Transport + "</td><td>" 
					 + data[i].Communications + "</td><td>" 
					 + data[i].RecreationAndCulture + "</td><td>" 
					 + data[i].Education + "</td><td>" 
					 + data[i].RestaurantsAndHotels + "</td><td>" 
					 + data[i].MiscellaneousGoodsAndServices + "</td></tr>";			
				 }
				
				 tbl += "</tbody></table>";
				 $('#price').append(tbl);
				$('table#price').highchartTable();	
             });
		
});

