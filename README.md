        Proyecto Final - ReactJS: E-commerce Orgánicos del Retiro

    Este proyecto es el resultado del trabajo final del curso de ReactJS de Coderhouse. Se trata de un e-commerce de productos orgánicos, donde se pueden ver y buscar productos, agregarlos al carrito de compras y realizar una compra con checkout.

    I. Funcionalidad General: 

        •	Listado de productos por categorías.
        •	Detalle de cada producto con información detallada y botón para agregar al carrito.
        •	Carrito de compras con listado de productos, total de la compra y botón para eliminar productos.
        •	Checkout con formulario de contacto y validación de campos.
        •	Manejo de estado con React Hooks y Context API.
        •	Uso de Firebase para el almacenamiento de datos y  manejo de órdenes.

    II. Funcionalidad Específica: 

    Home
    La página principal del sitio cuenta con un banner y un listado de categorías de productos. Al hacer clic en una categoría se accede a la página de productos correspondiente.

    Productos
    La página de productos muestra una lista de los productos disponibles en la categoría seleccionada. Al hacer clic en un producto se accede a su detalle.

    Detalle del producto
    La página de detalle del producto muestra información detallada del mismo, así como la opción de agregarlo al carrito de compras.

    Carrito de compras
    El carrito de compras muestra un listado de los productos agregados, permitiendo eliminar la cantidad de unidades, desde aquí se puede acceder al checkout para finalizar la compra.

    Checkout
    El checkout permite ingresar los datos del comprador, crear la orden en el Firestore generar la orden de compra y realizar la compra.


    III. Librerías utilizadas

    •	React Bootstrap: se utilizó para la maquetación y diseño de los componentes visuales.
    •	React Router: se utilizó para manejar las distintas rutas y páginas del sitio.
    •	Firebase: se utilizó para almacenar,manipular la información de los productos y generar las órdenes de compra.
    •	Vite: se utilizó para inicializar el proyecto de ReactJS, brindando ventajas en la velocidad de compilación y desarrollo.

    III-A Ventajas de Vite
    Vite es una herramienta de construcción rápida y liviana para proyectos de JavaScript, y se utiliza para inicializar este proyecto de ReactJS. Algunas de sus ventajas son:
    •	Desarrollo rápido: Vite tiene una velocidad de compilación extremadamente rápida. En lugar de construir un gran paquete para toda la aplicación, se construye y sirve solo lo que se necesita para la página que se está cargando. Esto permite que el desarrollo sea más rápido y eficiente.
    •	Soporte para módulos nativos de JavaScript: Vite utiliza los módulos nativos de JavaScript, lo que permite importar paquetes directamente desde NPM sin necesidad de transpilarlos.
    •	Soporte para TypeScript: Vite tiene un excelente soporte para TypeScript, lo que lo hace una gran opción para proyectos de React escritos en TypeScript.
    •	Facilidad de configuración: Vite viene preconfigurado para proyectos de React y Vue, lo que hace que la configuración sea más sencilla y rápida.
    •	Soporte para Hot Module Replacement: Vite tiene soporte para Hot Module Replacement, lo que significa que los cambios realizados en el código se reflejarán de inmediato en la página sin necesidad de recargarla.
    
    IV. ¿Por qué se utilizaron estas librerías?
        ReactJS es una de las librerías más utilizadas en el desarrollo web actual, permitiendo la creación de interfaces de usuario eficientes y escalables. React Router es una extensión de React que permite crear rutas para navegar entre diferentes componentes de la aplicación. React Bootstrap es una librería de componentes preestablecidos para React que facilita la creación de interfaces con un diseño consistente. Firebase es una plataforma de desarrollo web que permite el almacenamiento y procesamiento de datos en la nube, así como también la autenticación de usuarios y el envío de notificaciones. 

    V. Instrucciones de instalación
    Para instalar y correr la aplicación, es necesario tener instalado NodeJS y npm. Luego, se deben seguir los siguientes pasos:
        1.	Clonar el repositorio: git clone https://github.com/caballerodev117/PF-React-CABALLERO.git
        2.	Instalar las dependencias: npm install
        3.	Correr la aplicación: npm start
        4.  Desde la consola ejecutar: npm run dev y presionar "o" para visualizar el deployment desde el servidor local.

    VI. Contribuciones y bugs
    Si deseas contribuir al proyecto o reportar algún bug, puedes hacerlo a través de los Issues en este repositorio.

    VII. Autor
	Juan Fernando Caballero Ospina - GitHub @caballerodev117

    VIII. Licencia
    Este proyecto está bajo la Licencia MIT. Puedes ver el archivo LICENSE para más información.