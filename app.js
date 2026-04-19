// Selección de elementos del DOM
const inputNombre = document.getElementById("inputNombre");
const inputCurso = document.getElementById("inputCurso");
const inputFecha = document.getElementById("inputFecha");

const displayNombre = document.getElementById("nombre");
const displayCurso = document.getElementById("curso");
const displayFecha = document.getElementById("fecha");

// 3. Manejo de JS dinámico
inputNombre.addEventListener("input", () => {
    // Si el input está vacío, mostrar placeholder
    displayNombre.innerText = inputNombre.value || "[Nombre del Alumno]";
});

inputCurso.addEventListener("input", () => {
    displayCurso.innerText = inputCurso.value || "[Nombre del Curso]";
});

inputFecha.addEventListener("change", () => {
    // Formatear fecha opcionalmente
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = new Date(inputFecha.value).toLocaleDateString('es-ES', opciones);
    displayFecha.innerText = inputFecha.value ? fechaFormateada : "[Fecha]";
});

// 5. Función para generar PDF
function imprimirCertificado() {
    window.print();
}