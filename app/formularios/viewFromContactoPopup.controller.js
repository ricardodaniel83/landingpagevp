angular
  .module('app')
  .controller('viewFromContactoPopupController',viewFromContactoPopupController);

  viewFromContactoPopupController.$inject =['$uibModalInstance', 'data','$rootScope','viewFromContactenosService'];

  function viewFromContactoPopupController($uibModalInstance, data, $rootScope, viewFromContactenosService){
    var contactoPopup = this;
    contactoPopup.data = data;
    contactoPopup.activar = false;
    contactoPopup.formulario={
      nombre:'',
  		email:'',
  		telefono:'',
  		curso: contactoPopup.data.curso,
  		mensaje:''
    }
    contactoPopup.enviar = enviar;
    contactoPopup.close = close;
    contactoPopup.ok = ok;
    contactoPopup.validarFormulario = validarFormulario;
    function close(){
      $uibModalInstance.dismiss('cancel');
    }

    function ok(){
      $uibModalInstance.close(resultado);
    }

    function enviar() {
        if(validarFormulario()){
        contactoPopup.activar = true;
        viewFromContactenosService.submitDataForm(contactoPopup.formulario,'Cursos')
              .then(function(result){
                bootbox.alert("Estimado "+result+" su información fu enviada con exito");
                contactoPopup.activar = false;
              })
              .catch(function(err){
                bootbox.alert("A ocurrido un error al envio del formulario "+ err);
              });
        }
    }

    function validarFormulario(){
      	var mensaje = "";
      	if(contactoPopup.formulario.nombre == ''){
      		mensaje +="<li>No ingreso su Nombre y Apellido</li>";
      	}
      	if(contactoPopup.formulario.email == ''){
      		mensaje +="<li>No ingreso su correo electronico</li>";
      	}
      	if(contactoPopup.formulario.telefono == ''){
      		mensaje +="<li>No ingreso su teléfono de contacto</li>";
      	}
      	if(contactoPopup.formulario.mensaje == ''){
      		mensaje +="<li>No ingreso su mensaje </li>";
      	}

      	if(mensaje.length >0){
      		bootbox.alert("No se a podido enviar el formulario  por :<ul style='margin-left:20px;'>"+mensaje+"</ul>")
      		return false;
      	}else{
      		return true;
      	}
    }

  }
