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
                url: "http://sergiosolis.com/bacalar/apputchetumal/php/consultar_avisos.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {					
			     		//lista += "<li><a id='" + value.id  + "' onClick='traerInfo(this.IdPublicacion)' href='#aviso'>";						
						lista += "<li><a href='http://sergiosolis.com/bacalar/apputchetumal/paginas/avisos.php?IdAviso=" + value.IdPublicacion + "'>";							
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

function traerInfo(clicked_id)
{
	ide = clicked_id;
	alert (ide);
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: "http://sergiosolis.com/bacalar/apputchetumal/php/consultar_avisos_info.php?identificador=" + clicked_id + "",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";	
						lista += "<h2>" + value.titulo + "</h2>";					
						lista += "" + value.texto + "<BR><BR>";						
                        lista += "<div style='text-align:center;'><a href='" + value.mas_info + "' class='ui-btn ui-btn-b ui-btn-inline'>Más información</a></div>";						
						lista += "</div>";
                });
                $("#info").html(lista);
                $("#info").listview().listview('refresh');
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
}
var ide = "";


