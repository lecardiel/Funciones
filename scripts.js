function calcularSuperficie() {
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;

    if (base && altura) {
        let superficie = (base * altura) / 2;
        document.getElementById('resultadoSuperficie').textContent = 'La superficie es: ' + superficie + ' m²';
    } else {
        document.getElementById('resultadoSuperficie').textContent = 'Por favor, ingrese valores válidos.';
    }
}

function mostrarDatos() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let correo = document.getElementById('correo').value;

    if (nombre && edad && direccion && telefono && correo) {
        document.getElementById('resultadoDatos').innerHTML = 
            `<p>Nombre: ${nombre}</p><p>Edad: ${edad}</p><p>Dirección: ${direccion}</p>
            <p>Teléfono: ${telefono}</p><p>Correo: ${correo}</p>`;
    } else {
        document.getElementById('resultadoDatos').textContent = 'Por favor, ingrese todos los datos.';
    }
}

function calcularNomina() {
    let trabajador1 = parseFloat(document.getElementById('trabajador1').value);
    let trabajador2 = parseFloat(document.getElementById('trabajador2').value);
    let trabajador3 = parseFloat(document.getElementById('trabajador3').value);
    let trabajador4 = parseFloat(document.getElementById('trabajador4').value);
    let trabajador5 = parseFloat(document.getElementById('trabajador5').value);

    if (trabajador1 && trabajador2 && trabajador3 && trabajador4 && trabajador5) {
        let totalNomina = trabajador1 + trabajador2 + trabajador3 + trabajador4 + trabajador5;
        document.getElementById('resultadoNomina').textContent = 'Total de Nómina: $' + totalNomina.toFixed(2);
    } else {
        document.getElementById('resultadoNomina').textContent = 'Por favor, ingrese todos los sueldos.';
    }
}

function calcularPromedio() {
    let materia1 = parseFloat(document.getElementById('materia1').value);
    let materia2 = parseFloat(document.getElementById('materia2').value);
    let materia3 = parseFloat(document.getElementById('materia3').value);

    if (materia1 && materia2 && materia3) {
        let promedio = (materia1 + materia2 + materia3) / 3;
        document.getElementById('resultadoPromedio').textContent = 'El promedio es: ' + promedio.toFixed(2);
    } else {
        document.getElementById('resultadoPromedio').textContent = 'Por favor, ingrese todas las calificaciones.';
    }
}
