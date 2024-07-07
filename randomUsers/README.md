## Aplicación de Filtro de Usuarios Aleatorios

   Esta aplicación permite a los usuarios obtener y filtrar datos de usuarios aleatorios basados en criterios    seleccionados como género, nacionalidad y rango de edad. También proporciona la funcionalidad para descargar    los datos filtrados en formato CSV. La interfaz de usuario está construida utilizando Vue.js y componentes de    Vuetify para un diseño limpio y responsivo.

## Características

   Filtrar por Género: Selecciona entre usuarios masculinos y femeninos.
   Filtrar por Nacionalidad: Elige de una lista de nacionalidades.
   Filtrar por Rango de Edad: Usa un deslizador para seleccionar el rango de edad mínimo y máximo para los    usuarios.
   Ver Detalles del Usuario: Haz clic en el nombre de un usuario para ver información detallada.
   Eliminar Usuarios: Elimina usuarios de la lista.
   Descargar CSV: Exporta la lista filtrada de usuarios como un archivo CSV.
   Cargando Overlay: Muestra un overlay de carga mientras se obtienen o descargan datos


## Descripción de la Interfaz

    Encabezado: Muestra el título de la aplicación.
    Filtros: Contiene opciones de selección para género, nacionalidad y un deslizador de rango de edad.
    Botones:
        Mostrar: Obtiene y muestra los usuarios basados en los filtros seleccionados.
        CSV: Descarga los usuarios mostrados como un archivo CSV.
    Tabla de Usuarios: Muestra la lista de usuarios filtrados. Cada fila incluye un botón de eliminar y un nombre clickeable para ver detalles.
    Detalles del Usuario: Muestra información detallada sobre el usuario seleccionado en una vista de tarjeta separada.

## Filtrando Usuarios

    Seleccionar Género: Usa el menú desplegable para seleccionar el género.
    Seleccionar Nacionalidad: Usa el menú desplegable para seleccionar la nacionalidad.
    Establecer Rango de Edad: Ajusta el deslizador para establecer la edad mínima y máxima.
    Mostrar Usuarios: Haz clic en el botón "Mostrar" para obtener y mostrar los usuarios filtrados.

## Viendo Detalles del Usuario

    Haz clic en el nombre del usuario en la tabla para ver información detallada.
    Los detalles del usuario se mostrarán en una vista de tarjeta debajo de la tabla.
    Haz clic en el botón "Regresar a la Tabla" para volver a la vista de tabla.

## Eliminando Usuarios

    Haz clic en el ícono de basura junto a un usuario en la tabla para eliminarlo de la lista.

## Descargando CSV

    Haz clic en el botón "CSV" para descargar los usuarios mostrados como un archivo CSV.
    Se mostrará un overlay de carga mientras se prepara el CSV para la descarga.

