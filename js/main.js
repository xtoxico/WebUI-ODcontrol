function ODstatus(){
    $.ajax({
        url: "app/odcontrol/status.php",
        success : function(msg){
            console.log('ODCONTROL: '+ msg);
            post=msg.substring(0,msg.indexOf('DI'));
            post=post.replace(/DO:/g,'"');
            post=post.replace(/:/g,'":"');
            post=post.replace(/OFF/g,'0",');
            post=post.replace(/ON/g,'1",');
            post="{"+post.substring(0,post.length-2)+"}";
            console.log('POSTODCONTROL: '+ post);
            that.dataODcontrol=jQuery.parseJSON(post);
            console.log(that.dataODcontrol);
            //msg.replace("")


            if (that.dataODcontrol.LuzTV==1){
                $('#botonLuzTV').removeClass('btn-success');
                $('#botonLuzTV').addClass('btn-danger');
                $('#botonLuzTV').html('Apagar');
            }else{
                $('#botonLuzTV').removeClass('btn-danger');
                $('#botonLuzTV').addClass('btn-success');
                $('#botonLuzTV').html('Encender');
            }

            $('#botonLuzTV').click(function(){
                if (that.dataODcontrol.LuzTV==1){
                    $.ajax({
                        url: "app/odcontrol/action.php?object=LuzTV&action=OFF",
                        success: function(msg){
                            $('#botonLuzTV').removeClass('btn-danger');
                            $('#botonLuzTV').addClass('btn-success');
                            $('#botonLuzTV').html('Encender');
                            that.dataODcontrol.LuzTV==0;
                        }
                    })
                }else{
                    $.ajax({
                        url: "app/odcontrol/action.php?object=LuzTV&action=ON",
                        success: function(msg){
                            $('#botonLuzTV').removeClass('btn-success');
                            $('#botonLuzTV').addClass('btn-danger');
                            $('#botonLuzTV').html('Apagar');
                            that.dataODcontrol.LuzTV==1;
                        }
                    })
                }

            })


            if (that.dataODcontrol.lampi==1){
                $('#botonlampi').removeClass('btn-success');
                $('#botonlampi').addClass('btn-danger');
                $('#botonlampi').html('Apagar');
            }else{
                $('#botonlampi').removeClass('btn-danger');
                $('#botonlampi').addClass('btn-success');
                $('#botonlampi').html('Encender');
            }

            $('#botonlampi').click(function(){
                if (that.dataODcontrol.lampi==1){
                    $.ajax({
                        url: "app/odcontrol/action.php?object=lampi&action=OFF",
                        success: function(msg){
                            $('#botonlampi').removeClass('btn-danger');
                            $('#botonlampi').addClass('btn-success');
                            $('#botonlampi').html('Encender');
                            that.dataODcontrol.lampi==0;
                        }
                    })
                }else{
                    $.ajax({
                        url: "app/odcontrol/action.php?object=lampi&action=ON",
                        success: function(msg){
                            $('#botonlampi').removeClass('btn-success');
                            $('#botonlampi').addClass('btn-danger');
                            $('#botonlampi').html('Apagar');
                            that.dataODcontrol.lampi==1;
                        }
                    })
                }

            })



            if (that.dataODcontrol.Lmesa==1){
                $('#botonLmesa').removeClass('btn-success');
                $('#botonLmesa').addClass('btn-danger');
                $('#botonLmesa').html('Apagar');
            }else{
                $('#botonLmesa').removeClass('btn-danger');
                $('#botonLmesa').addClass('btn-success');
                $('#botonLmesa').html('Encender');
            }

            $('#botonLmesa').click(function(){
                if (that.dataODcontrol.Lmesa==1){
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lmesa&action=OFF",
                        success: function(msg){
                            $('#botonLmesa').removeClass('btn-danger');
                            $('#botonLmesa').addClass('btn-success');
                            $('#botonLmesa').html('Encender');
                            that.dataODcontrol.Lmesa==0;
                        }
                    })
                }else{
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lmesa&action=ON",
                        success: function(msg){
                            $('#botonLmesa').removeClass('btn-success');
                            $('#botonLmesa').addClass('btn-danger');
                            $('#botonLmesa').html('Apagar');
                            that.dataODcontrol.Lmesa==1;
                        }
                    })
                }

            })


            if (that.dataODcontrol.Lreci==1){
                $('#botonLreci').removeClass('btn-success');
                $('#botonLreci').addClass('btn-danger');
                $('#botonLreci').html('Apagar');
            }else{
                $('#botonLreci').removeClass('btn-danger');
                $('#botonLreci').addClass('btn-success');
                $('#botonLreci').html('Encender');
            }

            $('#botonLreci').click(function(){
                if (that.dataODcontrol.Lreci==1){
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lreci&action=OFF",
                        success: function(msg){
                            $('#botonLreci').removeClass('btn-danger');
                            $('#botonLreci').addClass('btn-success');
                            $('#botonLreci').html('Encender');
                            that.dataODcontrol.Lreci==0;
                        }
                    })
                }else{
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lreci&action=ON",
                        success: function(msg){
                            $('#botonLreci').removeClass('btn-success');
                            $('#botonLreci').addClass('btn-danger');
                            $('#botonLreci').html('Apagar');
                            that.dataODcontrol.Lreci==1;
                        }
                    })
                }

            })



            if (that.dataODcontrol.Lesca==1){
                $('#botonLesca').removeClass('btn-success');
                $('#botonLesca').addClass('btn-danger');
                $('#botonLesca').html('Apagar');
            }else{
                $('#botonLesca').removeClass('btn-danger');
                $('#botonLesca').addClass('btn-success');
                $('#botonLesca').html('Encender');
            }

            $('#botonLesca').click(function(){
                if (that.dataODcontrol.Lesca==1){
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lesca&action=OFF",
                        success: function(msg){
                            $('#botonLesca').removeClass('btn-danger');
                            $('#botonLesca').addClass('btn-success');
                            $('#botonLesca').html('Encender');
                            that.dataODcontrol.Lesca==0;
                        }
                    })
                }else{
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lesca&action=ON",
                        success: function(msg){
                            $('#botonLesca').removeClass('btn-success');
                            $('#botonLesca').addClass('btn-danger');
                            $('#botonLesca').html('Apagar');
                            that.dataODcontrol.Lesca==1;
                        }
                    })
                }

            })



            if (that.dataODcontrol.Lentr==1){
                $('#botonLentr').removeClass('btn-success');
                $('#botonLentr').addClass('btn-danger');
                $('#botonLentr').html('Apagar');
            }else{
                $('#botonLentr').removeClass('btn-danger');
                $('#botonLentr').addClass('btn-success');
                $('#botonLentr').html('Encender');
            }

            $('#botonLentr').click(function(){
                if (that.dataODcontrol.Lentr==1){
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lentr&action=OFF",
                        success: function(msg){
                            $('#botonLentr').removeClass('btn-danger');
                            $('#botonLentr').addClass('btn-success');
                            $('#botonLentr').html('Encender');
                            that.dataODcontrol.Lentr==0;
                        }
                    })
                }else{
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lentr&action=ON",
                        success: function(msg){
                            $('#botonLentr').removeClass('btn-success');
                            $('#botonLentr').addClass('btn-danger');
                            $('#botonLentr').html('Apagar');
                            that.dataODcontrol.Lentr==1;
                        }
                    })
                }

            })



            if (that.dataODcontrol.Lccna==1){
                $('#botonLccna').removeClass('btn-success');
                $('#botonLccna').addClass('btn-danger');
                $('#botonLccna').html('Apagar');
            }else{
                $('#botonLccna').removeClass('btn-danger');
                $('#botonLccna').addClass('btn-success');
                $('#botonLccna').html('Encender');
            }

            $('#botonLccna').click(function(){
                if (that.dataODcontrol.Lccna==1){
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lccna&action=OFF",
                        success: function(msg){
                            $('#botonLccna').removeClass('btn-danger');
                            $('#botonLccna').addClass('btn-success');
                            $('#botonLccna').html('Encender');
                            that.dataODcontrol.Lccna==0;
                        }
                    })
                }else{
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lccna&action=ON",
                        success: function(msg){
                            $('#botonLccna').removeClass('btn-success');
                            $('#botonLccna').addClass('btn-danger');
                            $('#botonLccna').html('Apagar');
                            that.dataODcontrol.Lccna==1;
                        }
                    })
                }

            })

            if (that.dataODcontrol.Lpati==1){
                $('#botonLpati').removeClass('btn-success');
                $('#botonLpati').addClass('btn-danger');
                $('#botonLpati').html('Apagar');
            }else{
                $('#botonLpati').removeClass('btn-danger');
                $('#botonLpati').addClass('btn-success');
                $('#botonLpati').html('Encender');
            }

            $('#botonLpati').click(function(){
                if (that.dataODcontrol.Lpati==1){
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lpati&action=OFF",
                        success: function(msg){
                            $('#botonLpati').removeClass('btn-danger');
                            $('#botonLpati').addClass('btn-success');
                            $('#botonLpati').html('Encender');
                            that.dataODcontrol.Lentr==0;
                        }
                    })
                }else{
                    $.ajax({
                        url: "app/odcontrol/action.php?object=Lpati&action=ON",
                        success: function(msg){
                            $('#botonLpati').removeClass('btn-success');
                            $('#botonLpati').addClass('btn-danger');
                            $('#botonLpati').html('Apagar');
                            that.dataODcontrol.Lentr==1;
                        }
                    })
                }

            })



        }
    })
}


// Load the Visualization API and the corechart package.
var dataduino={};
var dataODcontrol={};
that = this;
$().ready(function(){
    ODstatus();
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
                    if (that.dataduino.statussofa==1){
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
                                console.log(dataduino);
                            }
                        })
                    }

                })
                console.log(dataduino);
                $('#TempSalon').append(dataduino.temperatura);
            }

    })
console.log (that.dataduino.temperatura);

    $('#modotv').click(function(){
            $.ajax({
                url: "app/estufaduino/sofaencender.php",
                success: function(msg){
                    $('#botonsofa').removeClass('btn-success');
                    $('#botonsofa').addClass('btn-danger');
                    $('#botonsofa').html('Apagar');
                    that.dataduino= jQuery.parseJSON(msg);

                }
            })

            $.ajax({
                url: "app/odcontrol/action.php?object=lampi&action=ON",
                success: function(msg){
                    $('#botonlampi').removeClass('btn-success');
                    $('#botonlampi').addClass('btn-danger');
                    $('#botonlampi').html('Apagar');
                    that.dataODcontrol.lampi==1;
                }
            })

            $.ajax({
                url: "app/odcontrol/action.php?object=LuzTV&action=OFF",
                success: function(msg){
                    $('#botonLuzTv').removeClass('btn-danger');
                    $('#botonLuzTv').addClass('btn-success');
                    $('#botonLuzTv').html('Encender');
                    that.dataODcontrol.LuzTV==0;
                }
            })

            $.ajax({
                url: "app/odcontrol/action.php?object=Lmesa&action=OFF",
                success: function(msg){
                    $('#botonLmesa').removeClass('btn-danger');
                    $('#botonLmesa').addClass('btn-success');
                    $('#botonLmesa').html('Encender');
                    that.dataODcontrol.Lmesa==0;
                }
            })
    })

     $('#modocomedor').click(function(){
            $.ajax({
                url: "app/estufaduino/sofaapagar.php",
                success: function(msg){
                    $('#botonsofa').removeClass('btn-danger');
                    $('#botonsofa').addClass('btn-success');
                    $('#botonsofa').html('Encender');
                    that.dataduino= jQuery.parseJSON(msg);

                }
            })

            $.ajax({
                url: "app/odcontrol/action.php?object=lampi&action=OFF",
                success: function(msg){
                    $('#botonlampi').removeClass('btn-danger');
                    $('#botonlampi').addClass('btn-success');
                    $('#botonlampi').html('Encender');
                    that.dataODcontrol.lampi==0;
                }
            })

            $.ajax({
                url: "app/odcontrol/action.php?object=LuzTV&action=OFF",
                success: function(msg){
                    $('#botonLuzTv').removeClass('btn-danger');
                    $('#botonLuzTv').addClass('btn-success');
                    $('#botonLuzTv').html('Encender');
                    that.dataODcontrol.LuzTV==0;
                }
            })

            $.ajax({
                url: "app/odcontrol/action.php?object=Lmesa&action=ON",
                success: function(msg){
                    $('#botonLmesa').removeClass('btn-success');
                    $('#botonLmesa').addClass('btn-danger');
                    $('#botonLmesa').html('Apagar');
                    that.dataODcontrol.Lmesa==1;
                }
            })
    })

    $('#blockswitch').click(function(){
        $.ajax({
            url: "app/odcontrol/link.php?object=block&action=ON",
            success: function(msg){
                console.log(msg);
            }
        })
    })

    $('#deblockswitch').click(function(){
        $.ajax({
            url: "app/odcontrol/link.php?object=block&action=OFF",
            success: function(msg){
                console.log(msg);
            }
        })
    })

});
