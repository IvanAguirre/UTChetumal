<?php
include("../session.php");
include("../lib.php");


$Link = conectaBD();

$IdEvento=$_GET['IdEvento'];
	//echo ">> $IdPublicacion";
	if($IdEvento==""){
		$IdEvento=$_POST['IdEvento'];
	}
	
	if($_POST['beliminar']=="si"){
		$pageliminar=$_POST['pageliminar'];
		$Link=conectaBD();
		$result=mysql_query("DELETE FROM conv_paginas WHERE IdPagina=".$pageliminar, $Link)or die("No se pudo eliminar");
	
	}
		

?>
<script type='text/javascript'>
function eliminapag(id){
	document.formImg.pageliminar.value = id;
	
	
	if (confirm("¿Eliminar la pagina?")) {
		document.formImg.beliminar.value = "si";
		document.formImg.submit();
	}
}


function cargapag(id){
		document.formImg.paginasel.value=id;
		document.formImg.beditar.value="si";
		//document.formImg.submit();
		
}

</script>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
<link href="../css_global.css" rel="stylesheet" type="text/css" />
</head>
<body>
<table width="350" height="130" align="center" cellspacing="1" bordercolor="#cccccc" borde="1">
	<tbody>
		<tr>
			<td bordercolor="#FFFFFF" width= "480" align="center">
			 

			 <form action="" method="post" name="formcreacion" id="formcreacion" >
<table width="390" height="73" border="0" align="center" cellpadding="5" cellspacing="0" background="file:///D|/paginas/snotas/img/login.jpg" class="bordefino">
 
    <tr>
      <td height="29" colspan="2" background="../img/cotinuo.jpg"><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td width="68%" height="18"><div align="center"><span class="Cabecilla"><font color="#000000"><strong>
              <input name="IdEvento" type="hidden" id="IdEvento" value="<?php echo $IdEvento; ?>">
            P&aacute;ginas del Evento </strong></font></span></div></td>
          <td width="32%"><div align="right"><span class="Cabecilla"><span class="Estilo1">Paso
                  3 de 4 </span></span></div></td>
        </tr>
      </table></td>
    </tr>
    
	

      <td height="34" colspan="2" bgcolor="#F6F6F6" ><div align="center" >
        <input onClick="window.open('sube_archivos.php?IdEvento=<?php echo $IdEvento; ?>','principal')" name="banterior" type="button" id="banterior" value="&lt;&lt; Anterior" />
        <input onClick="window.open('bandeja.php','principal')" type="button" name="Cancelar" value="Cancelar" />
        <input onClick="window.open('paginas_editor.php?IdEvento=<?php echo $IdEvento; ?>','pagprinc')" type="button" name="bNuevo" value="Nuevo" id="bNuevo"/>
        <input onClick="window.open('ficha_contenedor.php?IdEvento=<?php echo $IdEvento; ?>','principal')" name="bsiguiente" type="button" id="bsiguiente" value="Siguiente &gt;&gt;" />
      </div></td>
    </tr>
</table>
 </form>
 
 <form id="formImg" name="formImg" method="post" action="">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tr>
       <td width="42%"><div align="center">
         <input name="beliminar" type="hidden" id="beliminar" value="no" />
         <input name="pageliminar" type="hidden" id="pageliminar" />
         <input type="hidden" name="paginasel" id="paginasel"/>
         <input type="hidden" name="beditar" id="beditar" value="no"/>
       </div></td>
     </tr>
   </table>	
   <table width="300" border="0" align="center" cellpadding="5" cellspacing="">
	 <?php 
	 if($IdEvento!=""){
	 try{
		$Link=conectaBD();
		$result=mysql_query("SELECT * FROM conv_paginas WHERE IdPublicacion=".$IdEvento, $Link)or die("Error al consultar"); 
		

		
	 }catch(Exception $e){
	 	 mysql_close($Link);
	 }
 }
		
	 $band = 0;
	 $x=0;
 
	 while ($row=mysql_fetch_assoc($result)){
	 	if ($band == 1){
			$color = "even";
			$band = 0;
		}else{
			$color = "odd";
			$band = 1;
		}
		
	echo " <tr class=".$color.">";//
	 	 
	?>
	 <td width="80%"><span class="Estilo5"><?php echo $row['Nombre'];
	 ?></span></td>
	 <td width="10%">
	 
	 <div align="left" title="Eliminar"><img style="cursor:pointer;" onClick="eliminapag(this.id)" id="<?php echo $row['IdPagina']; ?>" src="../img/eliminar.jpg" width="17" height="15" /></div>	 </td>
	 <td width="10%"><div align="left" title="Editar"><a href="paginas_editor.php?IdPagina=<?php echo $row['IdPagina']; ?>&IdEvento=<?php echo $row['IdPublicacion']; ?>" target="pagprinc"><img src="../img/editar.png" width="20" height="20" border="0" style="cursor:pointer;" name="edita" /></a></div></td>
	 <?php
	 echo "</tr>";
	  }?>
	</table>
	</form>			</td>
		</tr>
	</tbody>
</table>


</body>
</html>

