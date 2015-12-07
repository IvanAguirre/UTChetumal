$( window ).load(function() {
	//document.addEventListener('deviceready', ini, false);
  ini();
});

//------------variables globales---------
var urlDominio = "http://www.agendasonidocaracol.mx/apputchetumal"; //http://sergiosolis.com/bacalar
var nombreMes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var idDudasGlobal = ""; var idNotaGlobal = "";

//------------------Identidad------------
$('#PageIdentidad').on('pageshow', function() {
	traerIdentidad();
});
//------------------lista dudas------------
$('#PageListaDudas').on('pageshow', function() {
	traerListaDudas();
});
//------------------lista Cuentas------------
$('#PageListaCuentas').on('pageshow', function() {
	traerListaCuentas();
});
//------------------lista Directorio------------
$('#PageListaDirectorio').on('pageshow', function() {
	traerListaDirectorio();
});
//------------------lista noticias------------
$('#PageListaNoticias').on('pageshow', function() {
	traerListaNoticias();
});
//------------------lista Eventos------------
$('#PageListaEventos').on('pageshow', function() {
	traerListaEventos();
});
//------------------lista Convocatorias------------
$('#PageListaConvocatorias').on('pageshow', function() {
	traerListaConvocatorias();
});
//------------------lista Avisos------------
$('#PageListaAvisos').on('pageshow', function() {
	traerListaAvisos();
});
//------------------Info Oferta (informacion de la carrera)------------

$('#PageInfoOferta').on('pageshow', function() {
		var idOferta = localStorage.getItem('IdOferta') || '<empty>';
    	traerInfoOferta(idOferta);
});

function guardaIdOferta(id) {//se ejecuta al seleccionar alguna carrera
	var idOferta = id;
	localStorage.setItem("IdOferta", idOferta);
	document.getElementById("DivInfoOferta").innerHTML="";//borra la info dentre del elemento
	document.getElementById("DivBtnRec_InfoOfertAcadem").innerHTML="";
	document.getElementById('subtitulo').style.display = 'none';
	document.getElementById('cargadorInfoOferta').style.display = 'block';
	//document.getElementById('DivContentInfoOferta').style.display = 'none';
	
	
	//document.getElementById('todo').style.display = 'block';
	document.getElementById("DivBtnRec_PlanEstudio").innerHTML="";
	document.getElementById('cargadorPlanEstudio').style.display = 'block';
	//u
	document.getElementById('subtituloPlanEst').style.display = 'none';
	document.getElementById('collapsibleset').style.display = 'none';
	
	//traerInfoEvento(id);
}
//------------------Info plan estudio (lista de materias)------------
$('#PagePlanEstudio').on('pageshow', function() {
		var idPlan = localStorage.getItem('IdPlan') || '<empty>';
    	traerPlanEstudio(idPlan);		
});

function guardaIdPlanEstudio(id) {//Se ejecuta al seleccionar Plan de Estudio
	var idPlan = id;
	localStorage.setItem("IdPlan", idPlan);
	document.getElementById("DivPlanEstudio").innerHTML="";
	//document.getElementById('DivContentInfoOferta').style.display = 'none';
	//document.getElementById('todo').style.display = 'block';
	
	//traerInfoEvento(id);
}
//------------------Info Dudas------------

$('#PageInfoDudas').on('pageshow', function() {
	var idDudas = localStorage.getItem('IdDudas') || '<empty>';//Obtengo id guardado de localStorage
	if(idDudasGlobal != idDudas || $('#DivInfoDudas').is(':empty')){//Si id es diferenta a id guardado o esta vacio entra
		idDudasGlobal = idDudas;	
		traerInfoDudas(idDudas);
	}
});

function guardaIdDudas(id) {
	var idDudas = id;
	localStorage.setItem("IdDudas", idDudas);//Guardo id en localStorage
	if(idDudasGlobal != idDudas || $('#DivInfoDudas').is(':empty')){
		//$("#DivBtnRec_InfoDudas").empty();//vacía div de boton cargar internet
		document.getElementById("DivBtnRec_InfoDudas").innerHTML="";//limpia div de boton cargar internet
		document.getElementById("DivInfoDudas").innerHTML="";//limpia info para nueva info
		document.getElementById('cargadorInfoDudas').style.display = 'block';//**
	}
	//traerInfoEvento(id);
}
//------------------Info noticias------------

$('#PagaInfoNoticia').on('pageshow', function() {
	var idNota = localStorage.getItem('IdNota') || '<empty>';
	if(idNotaGlobal != idNota || $('#DivInfoNoticias').is(':empty')){//Si id es diferenta a id guardado o esta vacio entra
		traerInfoNoticias(idNota);
		idNotaGlobal = idNota;
	}
});

function guardaIdNota(id) {
	var idNota = id;
	localStorage.setItem("IdNota", idNota);
	if(idNotaGlobal != idNota || $('#DivInfoNoticias').is(':empty')){
		document.getElementById("DivBtnRec_InfoNoticias").innerHTML="";//limpia div de boton cargar internet
		document.getElementById("DivInfoNoticias").innerHTML="";
		document.getElementById('cargadorInfoNoticia').style.display = 'block';
	}
	//traerInfoEvento(id);
}
//------------------Info Eventos------------

$('#PagaInfoEvento').on('pageshow', function() {
		var idEvento = localStorage.getItem('IdEvento') || '<empty>';
    	traerInfoEventos(idEvento);
});

function guardaIdEvento(id) {
	var idEvento = id;
	localStorage.setItem("IdEvento", idEvento);
	document.getElementById("DivInfoEventos").innerHTML="";
	document.getElementById('cargadorInfoEvento').style.display = 'block';
}
//------------------Info Convocatorias------------

$('#PagaInfoConvocatoria').on('pageshow', function() {
		var idConvocatoria = localStorage.getItem('IdConvocatoria') || '<empty>';
    	traerInfoConvocatorias(idConvocatoria);
});

function guardaIdConvocatoria(id) {
	var idConvocatoria = id;
	localStorage.setItem("IdConvocatoria", idConvocatoria);
	document.getElementById("DivInfoConvocatoria").innerHTML="";
	document.getElementById('cargadorInfoConvocatoria').style.display = 'block';
}
//------------------Info Avisos------------

$('#PagaInfoAvisos').on('pageshow', function() {
		var idAviso = localStorage.getItem('IdAviso') || '<empty>';
    	traerInfoAvisos(idAviso);
});

function guardaIdAviso(id) {
	var idAviso = id;
	localStorage.setItem("IdAviso", idAviso);
	document.getElementById("DivInfoAvisos").innerHTML="";
	document.getElementById('cargadorInfoAvisos').style.display = 'block';
}

/*var t=0; 
function contar() 
{ 
	t++; 
} 
var i = setInterval(" contar() ",1);*/

//-----------------------------------------------Identidad----------------------------------
function traerIdentidad()
{
	//alert(t);
	var nombrePag ="Identidad";
	//checkConnection(nombre, idCargador);
	
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/Consultar_pagina.php?identificador=" + nombrePag + "",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";					
						lista += "" + value.contenido + "";							
						lista += "</div>";
                });
					$("#DivIdentidad").html(lista);
	                $("#DivIdentidad").listview().listview('refresh');  
					document.getElementById('cargadorIdentidad').style.display = 'none';
					/*if ($('#DivIdentidad').is(':empty')){ 	
					alert("vacio");		
					} else{
						alert(t);
					}*/  
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-------------------------------------------Oferta Academica (Info de la carrera)----------------------------------
function traerInfoOferta(clicked_id)
{
	checkConnection('DivInfoOferta', 'cargadorInfoOferta', 'DivBtnRec_InfoOfertAcadem');
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/Consultar_pagina.php?identificador=" + clicked_id + "",
                //data: $("#form").serialize(),
            }).done(function (resultado) {		
			document.getElementById('subtitulo').style.display = 'block';	
			//document.getElementById('DivContentInfoOferta').style.display = 'block';	
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
				var listaTit = "";
                $.each( datosRecibidos, function( key, value ) {
						listaTit += value.nombrefull;
						lista += "<div role='main' class='ui-content'>";					
						lista += "" + value.contenido + "";							
						lista += "</div>";
                });
					$("#subtitulo").html(listaTit);
	                $("#subtitulo").listview().listview('refresh'); 
					$("#DivInfoOferta").html(lista);
	                $("#DivInfoOferta").listview().listview('refresh');  
					document.getElementById('cargadorInfoOferta').style.display = 'none';
					/*if ($('#DivIdentidad').is(':empty')){ 	
					alert("vacio");		
					} else{
						alert(t);
					}*/  
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//---------------------------------------Info Plan de estudio (lista de las materias)----------------------------------
function traerPlanEstudio(clicked_id)
{
	//alert(t);
	checkConnection('subtituloPlanEst', 'cargadorPlanEstudio', 'DivBtnRec_PlanEstudio');
	
	if(clicked_id == "plan_ing_dns" || clicked_id == "plan_ing_tics" || clicked_id == "plan_ing_meca" || clicked_id == "plan_ing_gastro"){
		var esIng = true;
		document.getElementById('divSextoCuat').style.display = 'none';
		var col1 ="Séptimo cuatrimestre"; var col2 ="Octavo cuatrimestre"; var col3 ="Noveno cuatrimestre"; var col4 ="Décimo cuatrimestre"; var col5 ="Undécimo cuatrimestre";
	}else{
		var esIng = false;
		document.getElementById('divSextoCuat').style.display = 'block';
		var col1 ="Primer cuatrimestre"; var col2 ="Segundo cuatrimestre"; var col3 ="Tercer cuatrimestre"; var col4 ="Cuarto cuatrimestre"; var col5 ="Quinto cuatrimestre"; var col6 ="Sexto cuatrimestre";
	}
	
	try
	{
		var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
				//type: "POST",
				url: urlDominio + "/apputchetumal/php/consultar_plan_estudio.php?identificador=" + clicked_id + "",
				//data: $("#form").serialize(),
			}).done(function (resultado) {	
				document.getElementById("DivBtnRec_PlanEstudio").innerHTML="";
				document.getElementById('subtituloPlanEst').style.display = 'block';	
				document.getElementById('collapsibleset').style.display = 'block';	
						
				var datosRecibidos = JSON.parse(resultado);				
				var lista1 = ""; var lista2 = ""; var lista3 = ""; var lista4 = ""; var lista5 = ""; var lista6 = "";
				var listaTit = "";
				$.each( datosRecibidos, function( key, value ) {
						listaTit += value.nombrefull;
						lista1 += "" + value.cuat1 + "";
						lista2 += "" + value.cuat2 + "";
						lista3 += "" + value.cuat3 + "";
						lista4 += "" + value.cuat4 + "";
						lista5 += "" + value.cuat5 + "";
						if(esIng == false){
							lista6 += "" + value.cuat6 + "";	
						}						
				});
				
					//Titulo 
					$("#subtituloPlanEst").html(listaTit);
					$("#subtituloPlanEst").listview().listview('refresh'); 
					
					//titulos colapsables
					$("#h3_1").html(col1);
					$("#h3_2").html(col2);
					$("#h3_3").html(col3);
					$("#h3_4").html(col4);
					$("#h3_5").html(col5);
					$("#h3_1").listview().listview('refresh');
					$("#h3_2").listview().listview('refresh');
					$("#h3_3").listview().listview('refresh');
					$("#h3_4").listview().listview('refresh');
					$("#h3_5").listview().listview('refresh');
					if(esIng == false){
						$("#h3_6").html(col6);
						$("#h3_6").listview().listview('refresh'); 
					}
		

					//Contenido listas
					$("#DivCuat_1").html(lista1);
					$("#DivCuat_2").html(lista2);
					$("#DivCuat_3").html(lista3);
					$("#DivCuat_4").html(lista4);
					$("#DivCuat_5").html(lista5);
					
					$("#DivCuat_1").listview().listview('refresh');
					$("#DivCuat_2").listview().listview('refresh');
					$("#DivCuat_3").listview().listview('refresh');
					$("#DivCuat_4").listview().listview('refresh');
					$("#DivCuat_5").listview().listview('refresh');
					
					if(esIng == false){
						$("#DivCuat_6").html(lista6);
						$("#DivCuat_6").listview().listview('refresh'); 
					}
					
					document.getElementById('cargadorPlanEstudio').style.display = 'none';
					
					/*if ($('#DivIdentidad').is(':empty')){ 	
					alert("vacio");		
					} else{
						alert(t);
					}*/  
		});
	}
	catch(ex)
	{
		alert("Error de datos!!");
	}
		
};
//-----------------------------------------------Cuentas Bancarias----------------------------------
function traerListaCuentas()
{
	checkConnection('DivInfoCuentas', 'cargadorInfoCuentas', 'DivBtnRec_Cuentas');
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_cuentas.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li>";
                        lista += "<h2 '>" + value.nombreBanco + "</h2>";						
						lista += "" + value.numero  + "";
                        lista += "</li>";
                });
                $("#DivInfoCuentas").html(lista);
                $("#DivInfoCuentas").listview().listview('refresh');
				$("#DivBtnRec_Cuentas").empty();//vacía div de boton cargar internet
				document.getElementById('cargadorInfoCuentas').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Directorio----------------------------------
function traerListaDirectorio()
{
	checkConnection('DivInfoDirectorio', 'cargadorInfoDirectorio', 'DivBtnRec_Directorio');
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_directorio.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<tr><td>";
                        lista += "" + value.cargo + "<br>";						
						lista += "" + value.nombre  + "<br>";
						lista += "<a href='mailto:" + value.correo  + "'>" + value.correo  + "</a><br>";
						lista += "<a href='tel:" + value.telefono  + "'>" + value.telefono_mostrar  + "</a><br>";
                        lista += "</td></tr>";
                });
                $("#DivInfoDirectorio").html(lista);
                $("#DivInfoDirectorio").listview().listview('refresh');
				$("#DivBtnRec_Directorio").empty();//vacía div de boton cargar internet
				document.getElementById('cargadorInfoDirectorio').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Lista Dudas----------------------------------
function traerListaDudas()
{
	checkConnection('DivListaDudas', 'cargadorListaDudas', 'DivBtnRec_ListaDudas');
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_dudas.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.id + "' onClick='guardaIdDudas(this.id)' href='#PageInfoDudas'>";
						lista += "<h2 style='font-size:.9em'>" + value.pregunta + "</h2>";
                        lista += "</li>";
                });
                $("#DivListaDudas").html(lista);
                $("#DivListaDudas").listview().listview('refresh');
				$("#DivBtnRec_ListaDudas").empty();//vacía div de boton cargar internet
				document.getElementById('cargadorListaDudas').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Dudas--------------------------------
function traerInfoDudas(clicked_id)
{
	checkConnection('DivInfoDudas', 'cargadorInfoDudas', 'DivBtnRec_InfoDudas');	
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_dudas_info.php?Id=" + clicked_id + "",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.pregunta + "</h2>"//borrar					
						lista += "" + value.respuesta + "";	
						lista += "</div>";
                });
                $("#DivInfoDudas").html(lista);
                $("#DivInfoDudas").listview().listview('refresh');
				document.getElementById('cargadorInfoDudas').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Lista Noticias----------------------------------
function traerListaNoticias()
{
	checkConnection('DivListaNoticias', 'cargadorListaNoticia', 'DivBtnRec_ListaNoticias');
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_noticias.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.IdNota + "' onClick='guardaIdNota(this.id)' href='#PagaInfoNoticia'>";
						
						if(value.NumImg == "" || value.NumImg == 0)
                        {
                            lista += "<img src='../img/nofoto.jpg'>";
                        }
                        else
                        {
                            lista += "<img style='position:absolute;top:0;bottom:0;margin:auto;' src='http://sergiosolis.com/bacalar/noticias/img/" + value.IdNota + "/full.jpg'>";
                        }
                        lista += "<h2 style='font-size:.8em'>" + value.Titulo + "</h2>";						
						lista += "<p>Publicado el: " + value.fecha_publicacion  + "</p>";
                        lista += "</li>";
                });
                $("#DivListaNoticias").html(lista);
                $("#DivListaNoticias").listview().listview('refresh');
				$("#DivBtnRec_ListaNoticias").empty();//vacía div de boton cargar internet
				document.getElementById('cargadorListaNoticia').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Noticias--------------------------------
function traerInfoNoticias(clicked_id)
{
	checkConnection('DivInfoNoticias', 'cargadorInfoNoticia', 'DivBtnRec_InfoNoticias');	
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_noticias_info.php?Id=" + clicked_id + "",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.Titulo + "</h2>"//borrar
						lista += "<p style='font-size: .8em;color:#999'>Publicado el: " + value.FechaPublicacion  + " </p>";					
						lista += "" + value.Contenido + "";	
												
						lista += "</div>";
                });
                $("#DivInfoNoticias").html(lista);
                $("#DivInfoNoticias").listview().listview('refresh');
				document.getElementById('cargadorInfoNoticia').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Eventos------------------------------------
function traerListaEventos()
{
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_eventos.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {	
						lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.IdEvento + "' onClick='guardaIdEvento(this.id)' href='#PagaInfoEvento'>";
                        lista += "<h2 style='font-size:.9em'>" + value.Denominacion + "</h2>";						
						lista += "<p><b>Fecha: &nbsp;&nbsp;</b>" + value.fecha_publicacion + "";
						if(value.fecha_vencimiento == "00-00-0000")
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
                $("#DivListaEventos").html(lista);
                $("#DivListaEventos").listview().listview('refresh');
				document.getElementById('cargadorListaEventos').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Evento--------------------------------
function traerInfoEventos(clicked_id)
{
	//checkConnection('#info', 'cargadorInfoEvento');	
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_eventos_info.php?Id=" + clicked_id + "",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.Denominacion + "</h2>"	
						lista += "<p><b>Fecha: </b>" + value.FechaInicio + "";
                        
						if(value.FechaFin != "00-00-0000"){
							lista += "&nbsp;&nbsp;al&nbsp;&nbsp;" + value.FechaFin + "";
						}
						lista += "<br>";
                        lista += "<b>Lugar:</b> " + value.lugar + "</p>";
									
						lista += "" + value.Contenido + "";
						lista += "<p style='font-size: .8em;color:#999'>Publicado el: " + value.FechaPublicacion  + " </p>";						
						lista += "</div>";
                });
                $("#DivInfoEventos").html(lista);
                $("#DivInfoEventos").listview().listview('refresh');
				document.getElementById('cargadorInfoEvento').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Convocatoria----------------------------------
function traerListaConvocatorias()
{
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_convocatorias.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.IdPublicacion + "' onClick='guardaIdConvocatoria(this.id)' href='#PagaInfoConvocatoria'>";	
                        lista += "<h2>" + value.Encabezado + "</h2>";						
						lista += "<p>Publicado el: &nbsp;&nbsp;" + value.fecha_publicacion + "";
                        lista += "</li>";
                });
                $("#DivListaConvocatoria").html(lista);
                $("#DivListaConvocatoria").listview().listview('refresh');
				document.getElementById('cargadorListaConvocatoria').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Convocatoria--------------------------------
function traerInfoConvocatorias(clicked_id)
{
	//checkConnection('#info', 'cargadorInfoEvento');	
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_convocatoria_info.php?Id=" + clicked_id + "",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.Encabezado + "</h2>"//borrar					
						lista += "" + value.Contenido + "";	
						lista += "<p style='font-size: .8em;color:#999'>Publicado el: " + value.FechaPublicacion  + " </p>";						
						lista += "</div>";
                });
                $("#DivInfoConvocatoria").html(lista);
                $("#DivInfoConvocatoria").listview().listview('refresh');
				document.getElementById('cargadorInfoConvocatoria').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Avisos----------------------------------
function traerListaAvisos()
{
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_avisos.php",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.IdPublicacion + "' onClick='guardaIdAviso(this.id)' href='#PagaInfoAvisos'>";						
                        lista += "<h2>" + value.Encabezado + "</h2>";						
						lista += "<p>Publicado el: &nbsp;&nbsp;" + value.fecha_publicacion + "";
                        lista += "</li>";
                });
                $("#DivListaAvisos").html(lista);
                $("#DivListaAvisos").listview().listview('refresh');
				document.getElementById('cargadorListaAvisos').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Aviso--------------------------------
function traerInfoAvisos(clicked_id)
{
	//checkConnection('#info', 'cargadorInfoEvento');	
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_avisos_info.php?Id=" + clicked_id + "",
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.Encabezado + "</h2>"//borrar					
						lista += "" + value.Contenido + "";	
						lista += "<p style='font-size: .8em;color:#999'>Publicado el: " + value.FechaPublicacion  + " </p>";						
						lista += "</div>";
                });
                $("#DivInfoAvisos").html(lista);
                $("#DivInfoAvisos").listview().listview('refresh');
				document.getElementById('cargadorInfoAvisos').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//------------------------------Función para comprobar internet--------------------------------
function checkConnection(idDivElemeto, idCargador, DivBotonRecargar) {
	//alert("idDivElemeto: "+ idDivElemeto + " idCargador: " + idCargador + " DivBotonRecargar: " + DivBotonRecargar);
	var networkState = navigator.connection.type;
//	navigator.network.connection.type
	var online = "";
    var states = {};
	/*states[Connection.UNKNOWN]  = '1'; //'Unknown connection';
	states[Connection.ETHERNET] = '1'; //'Ethernet connection';
	states[Connection.WIFI]     = '1'; //'WiFi connection';
	states[Connection.CELL_2G]  = '1'; //'Cell 2G connection';
	states[Connection.CELL_3G]  = '1'; //'Cell 3G connection';
	states[Connection.CELL_4G]  = '1'; //'Cell 4G connection';
	states[Connection.NONE]     = '0'; //'No network connection';*/
	//online = states[networkState];
	//alert("el estado es: " + networkState);
	//alert("idDivElemeto: " + idDivElemeto + " IdCargador: " + idCargador);
	if (networkState == Connection.NONE)//si no hay internet
	{
		alert('No hay conexión a internet');
		if ($('#'+idDivElemeto).is(':empty')){ 	//si el div esta vacio o no tiene info, mostramos boton de recargar
			alert("vacio");	
			var mensaje = "";
			mensaje += "No hay conexión a internet";
			mensaje += "<br><a onClick='refreshPage(this.id)'  id='"+DivBotonRecargar+"' class='ui-btn ui-btn-b ui-btn-inline ui-icon-refresh ui-btn-icon-left'>Recargar</a>";
			$("#"+DivBotonRecargar).html(mensaje);
		} else{
			alert("no vacio");
		}

		document.getElementById(idCargador).style.display = 'none';
	} 	
};

function refreshPage(DivBotonRecargar) {
	//$("#talleres").load(pagina);
	//window.location ="index.html";i
   //location.reload();
    //window.location.assign("index.html");
	if(DivBotonRecargar == "DivBtnRec_Cuentas")
	{
		traerListaCuentas();
	} 
	else if(DivBotonRecargar== "DivBtnRec_Directorio")
	{
		traerListaDirectorio();
	}
	else if(DivBotonRecargar== "DivBtnRec_InfoOfertAcadem")//Oferta
	{
		var idOferta = localStorage.getItem('IdOferta') || '<empty>';
    	traerInfoOferta(idOferta);
	}
	else if(DivBotonRecargar== "DivBtnRec_PlanEstudio")
	{	
		var idPlan = localStorage.getItem('IdPlan') || '<empty>';
		traerPlanEstudio(idPlan);	
	}
	else if(DivBotonRecargar== "DivBtnRec_ListaDudas")//Dudas
	{
		traerListaDudas()
	}
	else if(DivBotonRecargar== "DivBtnRec_InfoDudas")
	{
		var idDudas = localStorage.getItem('IdDudas') || '<empty>';
    	traerInfoDudas(idDudas);
	}
	else if(DivBotonRecargar== "DivBtnRec_ListaNoticias")//Noticias
	{
		traerListaNoticias();
	}
	else if(DivBotonRecargar== "DivBtnRec_InfoNoticias")
	{
		var idNota = localStorage.getItem('IdNota') || '<empty>';
    	traerInfoNoticias(idNota);
	}
		
}

//----
