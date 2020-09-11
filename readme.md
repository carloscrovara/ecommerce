# Proyecto de E-Commerce del Curso React JS de CoderHouse

### Alumno: Carlos Crovara

## Instrucciones de  instalación

```
	npm install
	npm start
	// Abrir navegador en http://localhost:3000/
```

## Features y Flow

![Alt Text](https://carloscrovara.com/Desafio12-CROVARA.gif)

 Tiene un **NavBar** con el **logo** del e-commerce y links a los siguientes componentes:
 - **Home** (alojado en la ruta base '/'): donde se muestra un listado de 6 productos filtrados por el precio (superior a 1 mil pesos).
 - **About**: donde se explica el origen de la empresa. 
 - **Productos** (alojado en la ruta '/categories/:categoryId'):  donde se muestran los productos de la categoría Tortas o Tartas. 
 - **IconCart**: es accesible durante toda la experiencia y tiene una
indicación de la cantidad de items incluidos. Ejemplo: si se agrega 1 torta bombón y 2 lemon pie, en el IconCart muestra '3'.

Al hacer click en un ítem de un listado, navega a la **ruta '/item/:id'** (el ID del item es generado por Firestore) y permite ver la **descripción del producto** (foto, precio, selector de cantidad y los botones para agregar al carrito y para volver al listado de la categoría al que pertenezca el producto).  

Los productos que se muestran están guardados en la **Colección "items" de Firestore**. Cada uno de ellos tiene ID (generado con Firestore), nombre, categoryId, descripción, imagen y precio.

Asimismo, si se ingresa a /item/:id y el producto no existe en Firestore, responde el mensaje "El producto no existe en nuestra Tienda de e-Commerce" y aparece un botón para volver a la Home.

Cuando no hay productos en el carrito, muestra el mensaje "Tu carrito de compras está vacío" y un botón para volver a Home para seleccionar un producto y agregarlo al carrito. 

Una vez que el carrito tiene como mínimo 1 producto, aparece el **Checkout** con el **listado de productos agregados** y el **formulario** para completar los **datos personales** (Nombre y Apellido, Teléfono y Email) y un **comentario adicional sobre el pedido** (este campo es opcional). Al hacer click en el botón **"Realizar compra"**, se guarda en **Firestore** (en la **Colección "orders"**) una orden que tiene los datos del comprador (nombre, teléfono, email y comentario sobre pedido si es que tiene), todos los productos agregados (cada uno con su ID, nombre, cantidad y subtotal), la fecha, el estado de la orden (que por defecto figura en "generada") y el precio total. Al usuario se le da feedback de esa orden con el mensaje "Compra realizada exitosamente. El ID de la orden es ...".

Por otro lado, si uno hace click en el botón "Eliminar pedido", desaparece el listado y el resto de elementos del Checkout y vuelve a aparecer el mensaje "Tu carrito de compras está vacío" con el botón correspondiente. 

La **navegación** ocurre en todo momento utilizando el router de la librería **react-router-dom**, que se enseñó durante la cursada. 

Por último, posee un **Footer** con el copyright correspondiente y link a la cuenta de Instagram del negocio.

### Email de contacto: carloscrovara@gmail.com