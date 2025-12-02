# Yoga en Equilibrio 2.0

## Yoga en equilibrio
##### Conectá cuerpo y mente con productos pensados para vos

---

Proyecto de desarrollo de una página web para vender productos relacionados con yoga, usando React.

Su dirección es: https://yogaenequilibrio-react.vercel.app/

Esta página se realizó en base a la página desarrollada para el curso de HTML, CSS y Javascript (<https://github.com/RodrigoFernandez/yogaenequilibrio>).

El sitio consta de las siguientes secciones:

* Inicio
* Productos
* Carrito de compras
* Sobre yoga en equilibrio
* Contacto

Una vez dentro de la aplicación, si el usuario tiene permisos de administrador, en el menú desplegable sale el opción Stock, que permite la administración de los productos usados en la aplicación.

## Construido usando

* HTML
* CSS
* React

### Paleta de colores
```
--color-texto: #3B3B3B;
--color-texto-error: #FF6B6B;
--color-fondo: #FDFDFD;
--color-fondo-header-footer: #CDB4DB;
--color-fondo-section: #D8A7B1;
--color-fondo-boton: #F6E7D7;
--color-fondo-card: #C4BDBA;
```

### Fuentes
```
--fuente-principal: 'Playfair Display', serif;
--fuente-secundaria: 'Nunito', sans-serif;
```

## Sitios de referencia 
* https://yogaexperiencias.com/yoga/accesorios-practica-yoga/
* https://yogaexperiencias.com/minerva-robles/
* https://www.axayoga.com.ar/tienda-de-yoga/
* https://yogamat.com.ar/accesorios/


## API de consulta de productos

Para la API de consulta de productos se usa MockAPI.

La url para acceder a los productos es: https://68d32750cc7017eec5461dcb.mockapi.io/api/v1/productos

## API para la autenticación de usuarios

Para la autenticación de usuarios se armó un proyecto que simula la validación de crendenciales.

Los usuarios disponibles son:

| Usuario | Contraseña | roles |
|---|---|---|
| admin | adminpass | admin, user |
| user1 | pass1 | user |
| user2 | pass2 | user |
