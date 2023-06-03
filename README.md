# NPM
## _La casa del vinilo_

[![N|Solid](https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/RPM.png?alt=media&token=c8478a24-e62e-4a70-9f71-7e5aeb59273e&_gl=1*qw5m5s*_ga*MTczMTk5NTc2MC4xNjg0OTcyNTUw*_ga_CW55HF8NVT*MTY4NTY3MjEwMS45LjEuMTY4NTY3Mjc1MC4wLjAuMA..)](https://nodesource.com/products/nsolid)

--------------------------------------------------------------------------------------------------------

NPM, La casa del vinilo es un e-commerce dedicado pura y exclusivamente a discos de vinilos. En su recorrido podrás encontrar:

- Discos destacados
- Discos Nacionales
- Discos Internacionales
- Discos Usados
- Discos Clásicos
- ✨Y sobre todo, un viaje al recuerdo✨

## Características generales del proyecto:

El proyecto cuenta con 4 secciones principales: 
* ***Home***, representado por el ***"<ItemListContainer />"***: Render de todos los productos en ***{path="/"}***.
* ***Categorías***, representado por el ***"<ItemListContainer />"***: Render de los productos filtrados en ***{path="/:category"}***.
* ***Detalle del producto***, representado por el ***"<ItemDetailContainer/>"***: Render del producto seleccionado + compra del producto en ***{path="/:category/:id"}***.
* ***Carrito de compras***, representado por el ***"<Cart />"***: Render de los productos seleccionados en ***{path="/cart"}***

> Estas secciones están aplicadas en el 
> componente ***"<Rutas />"***, que es llamado 
> desde el componente padre del proyecto: ***"<App />"***.


A su vez, el proyecto tiene otros subcomponentes que motorizan y abogan por el perfecto funcionamiento de la App:
* ***"<Brand />":*** Visualiza el encabezado del proyecto.
* "<Navbar />": Representa las diferentes categorías, junto al ***"<CartWidge />"*** desde donde se puede ingresar al Carrito.
* ***"<ItemList />":***: Mapea los productos en el Home y en las categorías.
* ***"<Item />":*** Producto individidual renderizado en el Home y en las categorías.
* ***"<ItemDetail />":*** Muestra el detalle del producto seleccionado.
* ***"<ItemCount />":*** Representación de los botones para sumar, restar y seleccionar producto.
* ***"<CartItem />":*** Renderiza las cards de los productos seleccionados.
* ***"<Form />":*** Presenta los inputs con los datos personales para la validación de la compra.
* ***"<Payment />":*** Render de la tarjeta de crédito -creado con [react-credit-cards-2](https://www.npmjs.com/package/react-credit-cards-2)-.
* ***"<Spinner />":*** Representación del loading como transición entre componentes.
* ***"<Footer />":*** Pie de página.

##### Custom Hooks: 
* useCount(): Estados y funciones necesarias para el funcionamiento de ItemCount.
* useFirebase(): Estados y funciones necesarias para la obtención de los productos y el envío de las órdenes de pago a Firebase vía API.
* usePaymentFees(): Estados y funciones necesarias para el cálculo de intereses, cuotas y nuevos totales por el pago con tarjeta de crédito.

##### Context: 
* useContext(CartContext): Estados y funciones necesarias para las diferentes acciones a realizar con los productos (addToCart, isInCart, removeList, deleteItem, deleteQuantity).

##### Helpers: 
* index.js: Funciones reutilizables.

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
| Footer.jsx | [./footer.css] |
| Spinner.jsx | [./spinner.css] |

#### Otros:
* firebase-config.jsx => Configuración para la utilización de Firebase.
* palette-rpm.scss (carpeta public)=> Paleta de colores utilizada, obtenida de [Coolors](https://coolors.co/).

## Características técnicas del proyecto:

_**RPM, La casa del vinilo**_ utiliza las siguientes tecnologías:

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

## DEMO



### Versión

```sh
1.0.0
```

## Creado por 

Martín Nicolás Parolari

**Sólo el comienzo...**

--------------------------------------------------------------------------------------------------------

# NPM
## _La casa del vinilo_

[![N|Solid](https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/RPM.png?alt=media&token=c8478a24-e62e-4a70-9f71-7e5aeb59273e&_gl=1*qw5m5s*_ga*MTczMTk5NTc2MC4xNjg0OTcyNTUw*_ga_CW55HF8NVT*MTY4NTY3MjEwMS45LjEuMTY4NTY3Mjc1MC4wLjAuMA..)](https://nodesource.com/products/nsolid)

--------------------------------------------------------------------------------------------------------

NPM, La casa del vinilo is an e-commerce dedicated purely and exclusively to vinyl records. On your tour you will find:

- Featured albums
- National Records
- International Records
- Used Discs
- Classic Records
- ✨And above all, a trip down memory lane✨

## General characteristics of the project:

The project has 4 main sections:
* ***Home***, represented by the ***"<ItemListContainer />"***: Render of all products in ***{path="/"}***.
* ***Categories***, represented by the ***"<ItemListContainer />"***: Render of the filtered products in ***{path="/:category"}***.
* ***Product Detail***, represented by the ***"<ItemDetailContainer/>"***: Render of the selected product + purchase of the product in ***{path="/:category/:id" }***.
* ***Shopping Cart***, represented by the ***"<Cart />"***: Rendering of the selected products in ***{path="/cart"}***

> These sections are applied in the
> component ***"<Routes />"***, which is called
> from the parent component of the project: ***"<App />"***.


In turn, the project has other subcomponents that drive and advocate for the perfect functioning of the App:
* ***"<Brand />":*** Displays the project header.
* "<Navbar />": Represents the different categories, next to the ***"<CartWidge />"*** from where you can enter the Cart.
* ***"<ItemList />":***: Maps the products in the Home and in the categories.
* ***"<Item />":*** Individual product rendered in the Home and in the categories.
* ***"<ItemDetail />":*** Shows the detail of the selected product.
* ***"<ItemCount />":*** Representation of the buttons to add, subtract and select product.
* ***"<CartItem />":*** Renders the cards of the selected products.
* ***"<Form />":*** Presents the inputs with the personal data for the validation of the purchase.
* ***"<Payment />":*** Credit card render -created with [react-credit-cards-2](https://www.npmjs.com/package/react-credit-cards -2)-.
* ***"<Spinner />":*** Representation of the loading as a transition between components.
* ***"<Footer />":*** Footer.

##### Custom Hooks:
* useCount(): States and functions necessary for the operation of ItemCount.
* useFirebase(): States and functions necessary to obtain the products and send the payment orders to Firebase via API.
* usePaymentFees(): States and functions necessary to calculate interest, fees and new totals for credit card payments.

##### Context:
* useContext(CartContext): States and functions necessary for the different actions to be performed with the products (addToCart, isInCart, removeList, deleteItem, deleteQuantity).

##### Helpers:
* index.js: Reusable functions.

#### Styles:
| Archives | .CCS |
| ------ | ------ |
| Brand.jsx | [./brand.css] |
| NavBar.jsx - NavbarItem.jsx | [./navbar.css] |
| ItemListContainer.jsx - ItemList.jsx - Item.jsx | [./itemListStyle.css] |
| ItemDetailContainer.jsx - ItemDetail.jsx - ItemCount.jsx | [./itemDetailStyle.css] |
| CartWidget.jsx - Cart.jsx - CartItem.jsx | [./cart.css] |
| Form.jsx | [./form.css] |
| Payment.jsx | [./payment.css] |
| Footer.jsx | [./footer.css] |
| Spinner.jsx | [./spinner.css] |

#### Others:
* firebase-config.jsx => Configuration for using Firebase.
* palette-rpm.scss (public folder)=> Color palette used, obtained from [Coolors](https://coolors.co/).

## Technical characteristics of the project:

_**RPM, La casa del vinilo**_ uses the following technologies:

- [React.js](https://react.dev/) - ^18.2.0
- [Node.js](https://nodejs.org/es) - ^18.13.0
- [NPM](https://www.npmjs.com/) - ^8.19.3
- [Firebase](https://firebase.google.com/) - ^9.22.0
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - ^5.2.3
- [materialize-css](https://materializecss.com/) - ^1.0.0-rc.2
- [Toastify](https://fkhadra.github.io/react-toastify/introduction/) - ^9.1.3
- [SweetAlert2](https://sweetalert2.github.io/) - ^11.7.5

##### Public [GitHub](https://github.com/mnparolari/RPM) Repository 
Instructions for cloning a project [here](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

-------------------------

## DEMO



### Version

```sh
1.0.0
```

## Created by

Martin Nicolas Parolari

**Only the beginning...**