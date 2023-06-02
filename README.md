# NPM
## _La casa del vinilo_

[![N|Solid](https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/RPM.png?alt=media&token=c8478a24-e62e-4a70-9f71-7e5aeb59273e&_gl=1*qw5m5s*_ga*MTczMTk5NTc2MC4xNjg0OTcyNTUw*_ga_CW55HF8NVT*MTY4NTY3MjEwMS45LjEuMTY4NTY3Mjc1MC4wLjAuMA..)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

NPM, La casa del vinilo es un e-commerce dedicado pura y exclusivamente a discos de vinilos. En su recorrido podrás encontrar:

- Discos destacados
- Discos Nacionales
- Discos Internacionales
- Discos Usados
- Discos Clásicos
- ✨Y sobre todo, Magia✨

## Características generales del proyecto:

El proyecto cuenta con 4 secciones principales: 
* ***Home***, representado por el ***<ItemListContainer />***: Render de todos los productos en ***{path="/"}***.
* ***Categorías***, representado por el ***<ItemListContainer />***: Render de los productos filtrados en ***{path="/:category"}***.
* ***Detalle del producto***, representado por el ***<ItemDetailContainer/>***: Render del producto seleccionado + compra del producto en ***{path="/:category/:id"}***.
* ***Carrito de compras***, representado por el ***<Cart />***: Render de los productos seleccionados en ***{path="/cart"}***

> Estas secciones están aplicadas en el 
> componente <Rutas />, que es llamado 
> desde el componente padre del proyecto: <App />


A su vez, el proyecto tiene otros subcomponentes que motorizan y abogan por el perfecto funcionamiento de la App:
* <Brand />: Visualiza el encabezado del proyecto.
* <Navbar />: Representa las diferentes categorías, junto al <CartWidge /> desde donde se puede ingresar al Carrito.
* <ItemList />: Mapea los productos en el Home y en las categorías.
* <Item />: Producto individidual renderizado en el Home y en las categorías.
* <ItemDetail />: Muestra el detalle del producto seleccionado.
* <ItemCount />: Representación de los botones para sumar, restar y seleccionar producto.
* <CartItem />: Renderiza las cards de los productos seleccionados.
* <Form />: Presenta los inputs con los datos personales para la validación de la compra.
* <Payment />: Render de la tarjeta de crédito -creado con [react-credit-cards-2](https://www.npmjs.com/package/react-credit-cards-2).
* <Spinner />: Representación del loading como transición entre componentes.

##### Custom Hooks: 
* useCount(): Estados y funciones necesarias para el funcionamiento de ItemCount.
* useFirebase(): Estados y funciones necesarias para la obtención de los productos y el envío de las órdenes de pago a Firebase vía API.
* usePaymentFees(): Estados y funciones necesarias para el cálculo de intereses, cuotas y nuevos totales por el pago con tarjeta de crédito.

##### Context: 
* useContext(CartContext): Estados y funciones necesarias para las diferentes acciones a realizar con los productos (addToCart, isInCart, removeList, deleteItem, deleteQuantity).

##### Helpers: 
* index.js: Funciones para reutilizar.

#### Estilos:
| Archivos | .CCS |
| ------ | ------ |
| Brand.jsx | [./brand.css] |
| NavBar.jsx - NavbarItem.jsx | [./navbar.css] |
| ItemListContainer.jsx - ItemList.jsx - Item.jsx | [./itemListStyle.css] |
| ItemDetailContainer.jsx - ItemDetail.jsx - ItemCount.jsx | [./itemDetailStyle.css] |
| CartWidget.jsx - Cart.jsx - CartItem.jsx | [./cart.css] |
| Form.jsx | [./form.css] |
| Payment.jsx | [./payment.css] |
| Spinner.jsx | [./spinner.css] |


## Características técnicas del proyecto:

_**RPM, La casa del vinilo**_ utilizó las siguientes tecnologías:

- [React.js](https://react.dev/) - ^18.2.0
- [Node.js](https://nodejs.org/es) - ^18.13.0
- [NPM](https://www.npmjs.com/) - ^8.19.3
- [Firebase](https://firebase.google.com/) - ^9.22.0
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - ^5.2.3
- [materialize-css](https://materializecss.com/) - ^1.0.0-rc.2
- [Toastify](https://fkhadra.github.io/react-toastify/introduction/) - ^9.1.3
- [SweetAlert2](https://sweetalert2.github.io/) - ^11.7.5

##### Repositorio público de [GitHub](https://github.com/mnparolari/RPM)
Intrucciones para clonar proyecto [aquí](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

-------------------------

## Ejecutar proyecto
> Nota: `Este proyecto se inició con Create React App .`


```
npm start
```
Ejecuta la aplicación en el modo de desarrollo.
Abra http://localhost:3000 para verlo en su navegador.

La página se volverá a cargar cuando realice cambios.
También puede ver errores de pelusa en la consola.

### Versión

```sh
1.0.0.0
```

## Creado por 

Martín Parolari

**Es tan sólo el comienzo...**
