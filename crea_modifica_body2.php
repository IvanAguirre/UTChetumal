<?php 
include("lib.php");
include("ftpfunc.php");
include "session.php";
$IdNota=$_GET['IdNota'];

$bandg=$_GET['bandguarda'];

if($bandg==""){
	$bandg="no";

}


$Link = conectaBD();

$result = mysql_query("SELECT Contenido,Titulo,Fecha FROM Notas WHERE IdNota = $IdNota",$Link) or die (mysql_error());

$row = mysql_fetch_array($result);

if ($row['Contenido']==""){
$images="";


$id_ftp=ConectarFTP($IdNota);
$ruta=ObtenerRuta($IdNota);

$lista=ftp_nlist($id_ftp,$ruta); 
	$lista=array_reverse($lista);
	$cont=0;
$images = '<p class="Texto">';

while($item=array_pop($lista)){
$item = str_replace('/opt/coolstack/apache2/htdocs/www3/snotas/img/'.$IdNota.'/orig/','', $item);
$images = $images . '
<img onclick="abre(this.src)" style="cursor:pointer; float: left; margin-left: 5px; margin-right: 5px;" src="http://www3.uqroo.mx/snotas/img/'.$IdNota.'/orig/'.$item.'" border="0" alt="'.$item.'" title="'.$item.'" />
';

}
$images = $images . '</p>';

$contenido ='
<p>&nbsp;</p>
<p class="Titulo" align="center">'.strtoupper($row['Titulo']).'</p>
<p>&nbsp;</p>
<p class="Texto"><strong>'.convierteFecha($row['Fecha']).'</strong></p>
<p class="Texto">Borre este texto y escriba la nota.</p>
'.$images.'
';
}else{

$contenido = $row['Contenido'];

}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>Full featured example</title>



<!-- TinyMCE -->

<script type="text/javascript" src="editor/jscripts/tiny_mce/tiny_mce.js"></script>

<script type="text/javascript">

	tinyMCE.init({

		// General options

		mode : "textareas",

		theme : "advanced",

		skin : "o2k7",
		
		skin_variant : "silver",
		
		plugins : "safari,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",



		// Theme options

		theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",

		theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",

		theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",

		/*theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak",*/

		theme_advanced_toolbar_location : "top",

		theme_advanced_toolbar_align : "left",

		theme_advanced_statusbar_location : "bottom",

		theme_advanced_resizing : true,
		
		extended_valid_elements : "img[onclick=abre(this.src)|style=cursor:pointer; float: left; margin-left: 5px; margin-right: 5px;|class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]|rel=shadowbox[exposescroller]",

//<img class="bordefino" style="float: left; margin-left: 5px; margin-right: 5px;" title="/2/3.jpg" usemap="name" src="http://www3.uqroo.mx/snotas/img/2/3.jpg" alt="/2/3.jpg" width="160" height="120" />

		// Example content CSS (should be your site CSS)

		content_css : "editor/datonotas/css/content.css",



		// Drop lists for link/image/media/template dialogs

		template_external_list_url : "editor/datonotas/lists/template_list.js",

		external_link_list_url : "editor/datonotas/lists/link_list.jps",

		external_image_list_url : "editor/datonotas/lists/image_list.php?idNota=<?php echo $IdNota; ?>",

		media_external_list_url : "editor/datonotas/lists/media_list.js",



		// Replace values for the template plugin

		template_replace_values : {

			username : "Some User",

			staffid : "991234"

		}

	});




</script>

<!-- /TinyMCE -->


<style type="text/css">
<!--
.Estilo1 {font-size: 12px}
-->
</style>

<link href="css_global.css" rel="stylesheet" type="text/css" />
</head>

<body bgcolor="#FFFFFF" topmargin="0">
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" valign="top"><form action="guarda.php" method="post"  name="formcreacion" id="formcreacion">
      <textarea class="Texto" id="elm1" name="elm1" rows="30" style="width: 760px;"><?php echo $contenido; ?></textarea>
      <input name="accion" type="hidden" id="accion" />
      <input name="IdNota" type="hidden" id="IdNota" value="<?php echo $IdNota; ?>" />

      <input type="hidden" name="bandguarda" id="bandguarda" value="<?php echo $bandg; ?>" />
    </form></td>
  </tr>
</table>


</body>

</html>

