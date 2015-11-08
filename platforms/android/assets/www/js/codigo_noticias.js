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
                url: "http://sergiosolis.com/bacalar/apputchetumal/php/consultar_noticias.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li><a href='http://sergiosolis.com/bacalar/apputchetumal/paginas/noticias.php?Id=" + value.IdNota + "'>";	
						if(value.NumImg == "" || value.NumImg == 0)
                        {
                            lista += "<img src='../img/nofoto.jpg'>";
                        }
                        else
                        {
                            lista += "<img style='position:absolute;top:0;bottom:0;margin:auto;' src='http://sergiosolis.com/bacalar/snotas/img/" + value.IdNota + "/full.jpg'>";
                        }
                        lista += "<h2 style='font-size:.8em'>" + value.Titulo + "</h2>";						
						lista += "<p>Publicado el: " + value.fecha_publicacion  + "</p>";
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
