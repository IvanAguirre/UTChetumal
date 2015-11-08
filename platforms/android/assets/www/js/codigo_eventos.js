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
                url: "http://sergiosolis.com/bacalar/apputchetumal/php/consultar_eventos.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {			
			     		lista += "<li><a href='http://sergiosolis.com/bacalar/apputchetumal/paginas/evento.php?IdEvento=" + value.IdEvento + "'>";						
                        lista += "<h2 style='font-size:.9em'>" + value.Denominacion + "</h2>";						
						lista += "<p><b>Fecha: &nbsp;&nbsp;</b>" + value.fecha_publicacion + "";
						if(value.fecha2 == "00-00-0000")
                        {
                            lista +="</p>";
                        }
                        else
                        {
                            lista += "&nbsp;&nbsp;al&nbsp;&nbsp;" + value.fecha_vencimiento  + "</p>";
                        }
						lista += "<p><b>Lugar: &nbsp;&nbsp;</b>" + value.lugar + "</p>";
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
