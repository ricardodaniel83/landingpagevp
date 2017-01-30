angular
  .module('app')
  .controller('viewFromContactenosController',viewFromContactenosController);
  viewFromContactenosController.$inject =['$rootScope','viewFromContactenosService'];
  function viewFromContactenosController($rootScope, viewFromContactenosService){
      var vm = this;
      vm.formulario ={
        nombre:'',
        ciudad:'',
        email:'',
        mensaje:''
      };
      vm.activo = false;
      vm.submitContacto = submitContacto;

      function submitContacto(){
            if(validarFormulario()){
                vm.activar = true;
                viewFromContactenosService.submitDataForm(vm.formulario,'Cotizacion')
                      .then(function(result){
                        bootbox.alert("Estimado "+result+" su información fu enviada con exito");
                        vm.activar = false;
                      })
                      .catch(function(err){
                        bootbox.alert("A ocurrido un error al envio del formulario "+ err);
                      });
            }
      }

      function validarFormulario(){
            var mensaje = "";
          	if(vm.formulario.nombre == ''){
          		mensaje +="<li>No ingreso su Nombre y Apellido</li>";
          	}
          	if(vm.formulario.email == ''){
          		mensaje +="<li>No ingreso su correo electronico</li>";
          	}
          	if(vm.formulario.telefono == ''){
          		mensaje +="<li>No ingreso su teléfono de contacto</li>";
          	}
          	if(vm.formulario.mensaje == ''){
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
