const VALOR_BASE = 3500000;
const RECARGOS_COLOR = {
  blanco: 0,
  negro: 800000,
  rojo: 400000
};
const ADICIONALES = [
  { id: "neblineros", nombre: "Neblineros", valor: 80000 },
  { id: "portaequipaje", nombre: "Portaequipaje", valor: 350000 },
  { id: "mascotas", nombre: "Cinturones y arnés para mascotas", valor: 50000 },
  { id: "led", nombre: "Luces LED", valor: 70000 },
  { id: "camara", nombre: "Cámara trasera", valor: 100000 }
];


document.getElementById('color').addEventListener('change', function () {
  const color = this.value;
  const imagen = document.getElementById('imagenAuto');
  imagen.src = `Imagenes/kia_${color}.webp`;
  imagen.alt = `Auto ${color}`;
});


function obtenerAdicionales() {
  let seleccionados = [];
  let total = 0;

  ADICIONALES.forEach(adicional => {
    const checkbox = document.getElementById(adicional.id);
    if (checkbox.checked) {
      seleccionados.push(`${adicional.nombre} ($${adicional.valor.toLocaleString()})`);
      total += adicional.valor;
    }
  });

  return { seleccionados, total };
}


