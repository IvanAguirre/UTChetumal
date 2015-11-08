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
	$("#btnNoticias").on("click",consultarEstudiantes);    
}

function consultarEstudiantes()
{
	//cc = $("#txtDoc").val();
	traerDatos();
}
//var nombreMes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
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
                url: "http://sergiosolis.com/bacalar/apputchetumal/php/consultar_convocatorias.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
				
                $.each( datosRecibidos, function( key, value ) {	
				var nummes = parseInt(value.mes);
			     		lista += "<li><a href='http://sergiosolis.com/bacalar/apputchetumal/paginas/convocatoria.php?convocatoria=" + value.IdPublicacion + "'>";						
                        lista += "<h2>" + value.Encabezado + "</h2>";						
						lista += "<p>Publicado el: &nbsp;&nbsp;" + value.fecha_publicacion + "";
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
