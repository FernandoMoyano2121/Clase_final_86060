/**
 * Suma de dos numeros
 * @param {number} a
 * @param {number} b
 * @returns {number} La suma de a + b
 */
function sumar(a, b) {
  return a + b;
}

/**
 * Calcula el area de un circulo
 * @description Esta funcion toma el radio de un circulo y
 * calucla su area siguiendo la formula
 * @param {number} radio
 * @returns {number} El area del circulo
 * @example  const area = calcularAreaCirculo(5);
 * console.log(area); // 78.54
 */
function calcularAreaCirculo(radio) {
  return Math.PI * radio * radio;
}

/**
 * Crea un producto para el carrito de compras
 * @param {Object} datosProducto Los datos del producto
 * @returns {Object} El producto creado
 */
function crearProducto(datosProducto) {
  return {
    id: 1,
    nombre: datosProducto.nombre,
    precio: datosProducto.precio,
  };
}
