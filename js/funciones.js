$(document).ready(function () {
    $('#example').DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/es-CL.json'
        },"ajax": "rec/datosTabla.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "start_date" },
            { "data": "salary" }
        ],buttons: ['copy', 'excel', 'pdf']
    });
});

function validar() {
    if (document.getElementById("inputCorreo").value == "") document.getElementById("spCorreo").innerHTML = "Debes ingresar un email";
    else document.getElementById("spCorreo").innerHTML = "";

    if (document.getElementById("inputNombreApellido").value == "") document.getElementById("spNombre").innerHTML = "Ingresa tu nombre";
    else document.getElementById("spNombre").innerHTML = "";

    if (document.getElementById("inputDireccion").value == "") document.getElementById("spDireccion").innerHTML = "Ingresa tu dirección";
    else document.getElementById("spDireccion").innerHTML = "";

    if (document.getElementById("inputCiudad").value == "") document.getElementById("spCiudad").innerHTML = "Ingresa tu ciudad";
    else document.getElementById("spCiudad").innerHTML = "";

    if (document.getElementById("inputPais").value == "0") document.getElementById("spPais").innerHTML = "Selecciona pais";
    else document.getElementById("spPais").innerHTML = "";

    if (document.getElementById("inputFono").value == "") document.getElementById("spFono").innerHTML = "Ingresa tu número de teléfono";
    else document.getElementById("spFono").innerHTML = "";
}