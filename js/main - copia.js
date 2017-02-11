// Load the Visualization API and the corechart package.
var dataduino={};
that = this;
$().ready(function(){
    $.ajax({
            url: "app/estufaduino/status.php",                
            success: function(msg)
            {                  
                console.log('ajax ejecutandose');
                console.log(msg);
                that.dataduino= jQuery.parseJSON(msg);

                if (dataduino.statusestufa==1){
                    $('#botonestufa').removeClass('btn-success');
                    $('#botonestufa').addClass('btn-danger');
                    $('#botonestufa').html('Apagar');
                }else{
                    $('#botonestufa').removeClass('btn-danger');
                    $('#botonestufa').addClass('btn-success');
                    $('#botonestufa').html('Encender');
                }

                $('#botonestufa').click(function(){
                    if (dataduino.statusestufa==1){
                        $.ajax({
                            url: "app/estufaduino/apagar.php",                
                            success: function(msg){
                                $('#botonestufa').removeClass('btn-danger');
                                $('#botonestufa').addClass('btn-success');
                                $('#botonestufa').html('Encender');
                                that.dataduino= jQuery.parseJSON(msg);
                            }
                        })
                    }else{
                        $.ajax({
                            url: "app/estufaduino/encender.php",                
                            success: function(msg){
                                $('#botonestufa').removeClass('btn-success');
                                $('#botonestufa').addClass('btn-danger');
                                $('#botonestufa').html('Apagar');
                                that.dataduino= jQuery.parseJSON(msg);
                            }
                        })
                    }

                })


                if (dataduino.statussofa==1){
                    $('#botonsofa').removeClass('btn-success');
                    $('#botonsofa').addClass('btn-danger');
                    $('#botonsofa').html('Apagar');
                }else{
                    $('#botonsofa').removeClass('btn-danger');
                    $('#botonsofa').addClass('btn-success');
                    $('#botonsofa').html('Encender');
                }

                $('#botonsofa').click(function(){
                    if (dataduino.statussofa==1){
                        $.ajax({
                            url: "app/estufaduino/sofaapagar.php",                
                            success: function(msg){
                                $('#botonsofa').removeClass('btn-danger');
                                $('#botonsofa').addClass('btn-success');
                                $('#botonsofa').html('Encender');
                                that.dataduino= jQuery.parseJSON(msg);
                            }
                        })
                    }else{
                        $.ajax({
                            url: "app/estufaduino/sofaencender.php",                
                            success: function(msg){
                                $('#botonsofa').removeClass('btn-success');
                                $('#botonsofa').addClass('btn-danger');
                                $('#botonsofa').html('Apagar');
                                that.dataduino= jQuery.parseJSON(msg);
                            }
                        })
                    }

                })

                
            }

    })


    setTimeout(function() {
        function drawChart() {
                        
                    // Create the data table.
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Temperatura');
                    data.addColumn('number', 'Grados');
                    data.addRows([
                        ['Temperatura', parseInt(dataduino.temperatura)]            
                    ]);
                    
                    // Set chart options
                    //var options = {'title':'Monitorización del salón',pieHole: 0.4};

                    var options = {
                            width: 800, height: 240,
                            redFrom: 36, redTo: 100,
                            yellowFrom:25, yellowTo: 35,
                            minorTicks: 5
                            };
                    // Instantiate and draw our chart, passing in some options.

                    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
                    chart.draw(data, options);
        }
                
        google.charts.load('current', {'packages':['gauge']});
        google.charts.setOnLoadCallback(drawChart);

    }, 300);








});
