/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Lista todos los productos disponibles
 *     responses:
 *       200:
 *         description: Lista de productos
 */

/**
 * @swagger
 * /carrito:
 *   post:
 *     summary: Agrega un producto existente al carrito con cantidad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               cantidad:
 *                 type: integer
 *                 default: 1
 *             required:
 *               - nombre
 *           example:
 *             nombre: "Leche"
 *             cantidad: 2
 *     responses:
 *       201:
 *         description: Producto agregado al carrito exitosamente
 *       404:
 *         description: Producto no encontrado
 */

/**
 * @swagger
 * /carrito:
 *   get:
 *     summary: Devuelve el contenido actual del carrito
 *     responses:
 *       200:
 *         description: Lista de productos en el carrito
 */

/**
 * @swagger
 * /carrito/total:
 *   get:
 *     summary: Calcula el total del carrito con descuentos aplicados
 *     responses:
 *       200:
 *         description: Total final con descuentos
 */

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Agrega un nuevo producto al sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precioBase:
 *                 type: number
 *               tipoDescuento:
 *                 type: string
 *                 enum: [porcentaje, fijo]
 *               valorDescuento:
 *                 type: number
 *             required:
 *               - nombre
 *               - precioBase
 *           example:
 *             nombre: "Queso"
 *             precioBase: 500
 *             tipoDescuento: "fijo"
 *             valorDescuento: 50
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 *       400:
 *         description: Error de validación
 */

/**
 * @swagger
 * /producto:
 *   get:
 *     summary: Busca un producto por nombre usando query param
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del producto a buscar
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       400:
 *         description: Falta el parámetro nombre
 *       404:
 *         description: Producto no encontrado
 */
