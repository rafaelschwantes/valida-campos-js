<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <meta charset="utf-8" />
    <title>Validar campos</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    
    <script type="text/javascript" src="valida-email.js"></script>
    <script type="text/javascript" src="valida-campos-vazios.js"></script>



</head>

<body>

<form class="form-horizontal row-border" name="formulario" id="formulario" action='?acao=cadastrar' method="POST" accept-charset="iso-8859-1" class="form-horizontal row-border">



    <div class="form-group">
        <label class="col-md-3 control-label"><span style="color:#06C">*</span> Nome:</label>
        <div class="col-md-7"><input type="text" name="nome" id="nome" class="form-control" maxlength="200" /></div>
    </div>

    <div class="form-group">
        <label class="col-md-3 control-label"><span style="color:#06C">*</span> Sexo: </label>
        <div class="col-md-7"> <label class="radio-inline"> <input type="radio" class="uniform" name="sexo" value="masculino" /> masculino </label> <label class="radio-inline"> <input type="radio" class="uniform" name="sexo" value="feminino" /> Feminino </label> <label class="radio-inline"></div>
    </div>

    <div class="form-group">
        <label class="col-md-3 control-label"><span style="color:#06C">*</span> Data de nascimento:</label>
        <div class="col-md-7"><input type="text" name="nascimento" id="nascimento" data-mask="99/99/9999" maxlength="10" title="A idade mínima para cadastro é de 14 anos e no máximo 24 anos" class="form-control tip" /></div>
    </div>
    
    <div class="form-group">
        <label class="col-md-3 control-label"><span style="color:#06C">*</span> E-mail:</label>
        <div class="col-md-7"><input type="text" name="email" id="email" onBlur="ValidaEmail(formulario.email)" class="form-control tip" /></div>
    </div>

    <div class="form-group">
        <br /><br />
        <label class="col-md-3 control-label"></label>
        <div class="col-md-7">
            <input class="btn btn-primary" value="Iniciar cadastro" onclick="javascript:void(enviar());" class="btn">
        </div>
    </div>
</form>
</body>

</html>