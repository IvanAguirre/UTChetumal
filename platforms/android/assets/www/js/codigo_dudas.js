document.addEventListener("offline", onOffline, false);
//document.addEventListener("online", function(){ alert("You're online") }, false);
$(document).on("ready",consultarEstudiantes);

function onOffline() {
   alert("No hay conexión a internet");
    // window.locationf="index.html";
	//location.href="../index.html"; 
	//window.location.href = "../index.html";
	//history.back();
}

function ini()
{
	$("#btndudas").on("click",consultarEstudiantes); 
 
}


function consultarEstudiantes()
{

	//cc = $("#txtDoc").val();
	//document.addEventListener("deviceready", onDeviceReady, false);
	traerDatos();
	 
}

function traerDatos()
{
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: "http://sergiosolis.com/bacalar/apputchetumal/php/consultar_dudas.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {	
						lista += "<li><a href='http://sergiosolis.com/bacalar/apputchetumal/paginas/dudas.php?Id=" + value.id + "'>";				
                        lista += "<h2 style='font-size:.9em'>" + value.pregunta + "</h2>";
                        lista += "</li>";
                });
                $("#listaDatos").html(lista);
                $("#listaDatos").listview().listview('refresh');
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
}        

/*function onDeviceReady() {
            checkConnection();
        }
        
	    function checkConnection() {
	        var networkState = navigator.network.connection.type;

	        var states = {};
		states[Connection.UNKNOWN]	= 'ConexiÃ³n desconocida';
		states[Connection.ETHERNET]	= 'ConexiÃ³n ethernet';
		states[Connection.WIFI]   	= 'ConexiÃ³n WiFi';
		states[Connection.CELL_2G]	= 'ConexiÃ³n movil 2G';
		states[Connection.CELL_3G]	= 'ConexiÃ³n movil 3G';
		states[Connection.CELL_4G]	= 'ConexiÃ³n movil 4G';
		states[Connection.NONE]   	= 'Sin conexiÃ³n';

	        alert('Tipo de conexión: ' + states[networkState]);
	    }*/