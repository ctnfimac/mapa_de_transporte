# Mapa de transporte :bus:

Este proyecto parte con las ganas de mostrar en un mapa algo en tiempo real, así que utilizando una api del Gobierno de la Ciudad de Buenos Aires, la libreria Leaflet y mucho esfuerzo :grin: pude hacer que se visualicen las distintas lineas de colectivos (por ahora 11) en un mapa del gcba.
El tiempo en que se refrescan las posiciones de los colectivos es de 30 segundos.

![screencapture-christianperalta-ar-transporte-2023-03-21-01_28_29](https://user-images.githubusercontent.com/24881247/226516081-a9d83356-906b-4e62-9e96-af90fe380980.jpg)


#### Recursos
~~~
Mapa base utilizado:
https://github.com/datosgcba/tiles-gcba

web con la documentacion de la api utilizada(colectivos/vehiclePositionsSimple):
https://datosabiertos-apis.buenosaires.gob.ar/BA_Root/Documentacion?schema_name=Transporte_3
~~~

# Instalar el proyecto

~~~
1. git clone https://github.com/ctnfimac/react_api_personas.git
2. cd react_api_personas
3. npm install
4. npm start
~~~


# Correr unidades de test
~~~
npm test
~~~

# Compilar el proyecto para producción
~~~
npm run build:production
~~~

Tener en cuenta lo siguiente
- en el archivo package.json hay que modificar el valor de "homepage" por el dominio que mostrará el proyecto, ejemplo:
~~~
"homepage": "http://christianperalta.com.ar/transporte"
~~~
En este caso el dominio es http://christianperalta.com.ar y yo estoy alojando el proyecto dentro de la carpeta llamada transporte creada en el servidor.

- Dado a que el proyecto se encuentra en una carpeta tengo que agregar el parámetro basename en el componente BrowserRouter 
~~~
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/transporte'>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
~~~

### Código del Backend (opcional, no es necesario para los colectivos)

https://github.com/ctnfimac/node_api_de_personas



