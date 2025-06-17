/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();

questions[0]= "1) Cuál de las siguientes opciones describe el software de un ordenador?";
choices[0]= new Array();
choices[0][0] = "Los componentes físicos del ordenador.";
choices[0][1] = "Los programas y aplicaciones instalados.";
choices[0][2] = "Las carpetas y archivos almacenados.";
choices[0][3] = "La conexión a Internet.";
answers[0] = 1;
units[0] = "work_1";

questions[1]= "2) Qué es el disco duro de un ordenador?";
choices[1]= new Array();
choices[1][0] = "Un dispositivo para la visualización de imágenes y vídeos.";
choices[1][1] = "Un dispositivo de almacenamiento de datos.";
choices[1][2] = "Un dispositivo para la impresión de documentos.";
choices[1][3] = "Un dispositivo para la gestión de bases de datos.";
answers[1] = 1;
units[1] = "work_1";

questions[2]= "3) Cuál de las siguientes opciones es un sistema operativo?";
choices[2]= new Array();
choices[2][0] = "Microsoft Office.";
choices[2][1] = "Google Chrome.";
choices[2][2] = "Windows.";
choices[2][3] = "Adobe Photoshop.";
answers[2] = 2;
units[2] = "work_1";

questions[3]= "4) De los siguientes dispositivos, ¿cuál se puede considerar como un sistema de almacenamiento externo?";
choices[3]= new Array();
choices[3][0] = "Hub USB-C multipuerto.";
choices[3][1] = "Conmutador KVM USB.";
choices[3][2] = "Memoria Flash USB.";
choices[3][3] = "HDD Interno de 3.5.";
answers[3] = 2;
units[3] = "work_1";

questions[4]= "5) Qué es la Configuración de Windows 10?";
choices[4]= new Array();
choices[4][0] = "Una herramienta de diagnóstico de hardware.";
choices[4][1] = "Un administrador de contraseñas.";
choices[4][2] = "Un conjunto de opciones para personalizar el sistema.";
choices[4][3] = "Un programa de eliminación de archivos temporales.";
answers[4] = 2;
units[4] = "work_2";

questions[5]= "6) Qué ocurre al hacer clic con el botón derecho del ratón en un archivo o carpeta en el Explorador de archivos de Windows 10?";
choices[5]= new Array();
choices[5][0] = "Aparece un menú contextual.";
choices[5][1] = "Aparecen las propiedades del archivo o carpeta.";
choices[5][2] = "El archivo o carpeta se copia al portapapeles de Windows.";
choices[5][3] = "Se abre el archivo o la carpeta mostrando su contenido.";
answers[5] = 0;
units[5] = "work_3";

questions[6]= "7) Qué es el Panel de Notificaciones en Windows 10?";
choices[6]= new Array();
choices[6][0] = "Un área para mostrar notificaciones y mensajes del sistema.";
choices[6][1] = "Una herramienta para realizar copias de seguridad.";
choices[6][2] = "Un lugar para gestionar la configuración de privacidad.";
choices[6][3] = "Un panel para administrar dispositivos de red.";
answers[6] = 0;
units[6] = "work_2";

questions[7]= "8) Qué es Windows Defender en Windows 10?";
choices[7]= new Array();
choices[7][0] = "Un programa de seguridad y protección contra virus y malware.";
choices[7][1] = "Un gestor de contraseñas integrado.";
choices[7][2] = "Una herramienta para administrar perfiles de usuario.";
choices[7][3] = "Un programa de copias de seguridad.";
answers[7] = 0;
units[7] = "work_2";

questions[8]= "9) Cuál es el método abreviado de teclado utilizado para cambiar el nombre de un archivo o carpeta seleccionado en el Explorador de archivos de Windows 10?";
choices[8]= new Array();
choices[8][0] = "F2";
choices[8][1] = "F3";
choices[8][2] = "F4";
choices[8][3] = "F5";
answers[8] = 0;
units[8] = "work_3";

questions[9]= "10) Qué muestra 'Este equipo' en el Explorador de archivos de Windows 10?";
choices[9]= new Array();
choices[9][0] = "El contenido de la unidad C del equipo.";
choices[9][1] = "Las aplicaciones más utilizadas y comunes como calculadora, navegador, etc.";
choices[9][2] = "La información agrupada sobre los recursos de nuestro dispositivo.";
choices[9][3] = "Los documentos y aplicaciones abiertos recientemente.";
answers[9] = 2;
units[9] = "work_3";

questions[10]= "11) Qué es una impresora en el contexto informático?";
choices[10]= new Array();
choices[10][0] = "Un dispositivo para escanear imágenes.";
choices[10][1] = "Un dispositivo para imprimir documentos en papel.";
choices[10][2] = "Una herramienta para crear presentaciones de diapositivas.";
choices[10][3] = "Un programa para editar imágenes.";
answers[10] = 1;
units[10] = "work_1";

questions[11]= "12) Cuál de las siguientes opciones es una función de gestión de impresoras en Windows 10?";
choices[11]= new Array();
choices[11][0] = "Cambiar la fuente de letra en un documento.";
choices[11][1] = "Configurar la resolución de pantalla.";
choices[11][2] = "Establecer la impresora predeterminada.";
choices[11][3] = "Crear una nueva carpeta en el escritorio.";
answers[11] = 2;
units[11] = "work_3";

questions[12]= "13) En Windows 10, ¿qué programa utilizaría para escribir texto sin formato?";
choices[12]= new Array();
choices[12][0] = "Bloc de notas.";
choices[12][1] = "Edge.";
choices[12][2] = "Paint.";
choices[12][3] = "Access";
answers[12] = 0;
units[12] = "work_2";

questions[13]= "14) Cuál de los siguientes métodos abreviados de teclado permite mover el cursor una palabra a la derecha en Word 2019?";
choices[13]= new Array();
choices[13][0] = "Ctrl + D.";
choices[13][1] = "Alt + Tecla de flecha derecha.";
choices[13][2] = "Ctrl + Tecla de flecha derecha.";
choices[13][3] = "Alt + D.";
answers[13] = 2;
units[13] = "work_4";

questions[14]= "15) En qué pestaña de la Cinta de opciones de Word 2019 se encuentra la funcionalidad de buscar y reemplazar?";
choices[14]= new Array();
choices[14][0] = "Revisar.";
choices[14][1] = "Inicio.";
choices[14][2] = "Diseño.";
choices[14][3] = "Edición.";
answers[14] = 1;
units[14] = "work_4";

questions[15]= "16) Cuál es la extensión de archivo predeterminada para guardar un documento en formato de plantilla en Word 2019?";
choices[15]= new Array();
choices[15][0] = "dotx";
choices[15][1] = "doc";
choices[15][2] = "odt";
choices[15][3] = "docp";
answers[15] = 0;
units[15] = "work_4";

questions[16]= "17) Qué se entiende por Control de Cambios en Word 2019?";
choices[16]= new Array();
choices[16][0] = "Word 2019 no tiene Control de Cambios. Es una funcionalidad de Excel.";
choices[16][1] = "Mostrar, al final del documento, información para explicar, comentar o aportar referencias a la información que se ha mencionado en el texto del mismo.";
choices[16][2] = "Mostrar las modificaciones realizadas en un documento.";
choices[16][3] = "Enumera los términos y los temas que se tratan en un documento.";
answers[16] = 2;
units[16] = "work_4";

questions[17]= "18) En Word 2019, una vez insertada una imagen, ¿cómo se puede hacer para que la imagen quede por detrás del texto?";
choices[17]= new Array();
choices[17][0] = "Haciendo clic derecho del ratón sobre la imagen, seleccionando  'Cambiar imagen' y seguidamente seleccionando la opción  'Detrás del texto'.";
choices[17][1] = "Haciendo clic derecho del ratón sobre la imagen y seleccionando la opción 'Texto por delante de imagen'.";
choices[17][2] = "Haciendo clic derecho del ratón sobre la imagen, seleccionando 'Ajustar imagen' y seguidamente seleccionando la opción 'Detrás del texto'.";
choices[17][3] = "Haciendo clic derecho del ratón sobre la imagen, seleccionando 'Ajustar texto' y seguidamente seleccionando la opción 'Detrás del texto'.";
answers[17] = 3;
units[17] = "work_4";

questions[18]= "19) Cuál de los siguientes es un estilo de los predefinidos en Word 2019?";
choices[18]= new Array();
choices[18][0] = "Título de Tabla.";
choices[18][1] = "Cita destacada.";
choices[18][2] = "Cita de Tabla.";
choices[18][3] = "Título destacado.";
answers[18] = 1;
units[18] = "work_4";

questions[19]= "20) De las siguientes estadísticas, ¿cuál no se muestra al utilizar 'Contar palabras' en Word 2019?";
choices[19]= new Array();
choices[19][0] = "Palabras.";
choices[19][1] = "Caracteres (sin espacios).";
choices[19][2] = "Caracteres (con espacios).";
choices[19][3] = "Palabras (con errores).";
answers[19] = 3;
units[19] = "work_4";

questions[20]= "21) En un documento de Word 2019, ¿cómo se llama el hipervínculo que permite saltar a un lugar concreto del documento?";
choices[20]= new Array();
choices[20][0] = "Correspondencia.";
choices[20][1] = "Marcador.";
choices[20][2] = "Validación de datos.";
choices[20][3] = "Mostrar revisiones.";
answers[20] = 1;
units[20] = "work_4";

questions[21]= "22) En un documento de Word 2019, ¿qué se debe hacer para que dos páginas consecutivas tengan encabezados distintos?";
choices[21]= new Array();
choices[21][0] = "En Word 2019 tanto el 'Encabezado' como el 'Pie de página' se mantienen invariables en lodo el documento y no pueden ser distintos.";
choices[21][1] = "Hay que cambiar el valor de 'Movimiento de página' a 'En paralelo' en lugar de 'Vertical'.";
choices[21][2] = "Hay que utilizar 'Referencias cruzadas' que permiten ir cambiando en cada página.";
choices[21][3] = "Hay que utilizar 'Saltos de sección' .";
answers[21] = 3;
units[21] = "work_4";

questions[22]= "23) En Word 2019, en el grupo de comandos 'Revisión' además del comando 'Ortografía y gramática', ¿qué otro comando podemos encontrar?";
choices[22]= new Array();
choices[22][0] = "Traducir.";
choices[22][1] = "Sinónimos.";
choices[22][2] = "Comparar.";
choices[22][3] = "Nuevo comentario.";
answers[22] = 1;
units[22] = "work_4";

questions[23]= "24) En la Cinta de opciones de Word 2019, ¿en qué pestaña se encuentra el grupo de comandos que permite cambiar el estilo de fuente?";
choices[23]= new Array();
choices[23][0] = "Insertar.";
choices[23][1] = "Diseño.";
choices[23][2] = "Inicio.";
choices[23][3] = "Referencias.";
answers[23] = 2;
units[23] = "work_4";

questions[24]= "25) En Word 2019, comprobar la información personal o las propiedades ocultas del documento, ¿qué es?";
choices[24]= new Array();
choices[24][0] = "Comprobar accesibilidad.";
choices[24][1] = "Comprobar compatibilidad.";
choices[24][2] = "Restringir la edición.";
choices[24][3] = "Inspeccionar documento.";
answers[24] = 3;
units[24] = "work_4";

questions[25]= "26) En qué pestaña de la Cinta de opciones de Word 2019 está el comando que permite ajustar los márgenes del documento?";
choices[25]= new Array();
choices[25][0] = "Diseño.";
choices[25][1] = "Inicio.";
choices[25][2] = "Vista.";
choices[25][3] = "Disposición.";
answers[25] = 3;
units[25] = "work_4";

questions[26]= "27) En Excel 2019, reducir la copia impresa para que tenga una página de ancho, ¿qué es? ";
choices[26]= new Array();
choices[26][0] = "Ajustar todas las columnas en una página.";
choices[26][1] = "Imprimir sin escalado.";
choices[26][2] = "Ajustar todas las filas en una página.";
choices[26][3] = "Esa funcionalidad no existe en Excel 2019.";
answers[26] = 0;
units[26] = "work_5";

questions[27]= "28) Cuál es el símbolo utilizado para iniciar una fórmula en Excel 2019?";
choices[27]= new Array();
choices[27][0] = "$";
choices[27][1] = "%";
choices[27][2] = "=";
choices[27][3] = ":";
answers[27] = 2;
units[27] = "work_5";

questions[28]= "29) En Excel 2019, el método abreviado de teclado Alt+signo igual(=) en la edición de una celda, ¿qué genera?";
choices[28]= new Array();
choices[28][0] = "Ese método abreviado no existe en Excel 2019.";
choices[28][1] = "Crear un gráfico incrustado.";
choices[28][2] = "Insertar la fórmula Autosuma.";
choices[28][3] = "Expandir o contraer la barra de fórmulas.";
answers[28] = 2;
units[28] = "work_5";

questions[29]= "30) En Excel 2019, para obtener acceso rápido a información relacionada en otro archivo o en una página web se utiliza:";
choices[29]= new Array();
choices[29][0] = "El Formato condicional.";
choices[29][1] = "El Hipervinculo.";
choices[29][2] = "La validación de datos.";
choices[29][3] = "Compartir Libro.";
answers[29] = 1;
units[29] = "work_5";

questions[30]= "31) Cuál de las siguientes opciones es un tipo de gráfico disponible en Excel 2019?";
choices[30]= new Array();
choices[30][0] = "Gráfico en Y.";
choices[30][1] = "Gráfico de Mínimos.";
choices[30][2] = "Gráfico de Barra.";
choices[30][3] = "Gráfico de Estrella.";
answers[30] = 2;
units[30] = "work_5";

questions[31]= "32) En Excel 2019, ¿qué se utiliza para calcular, resumir, analizar datos y ver comparaciones, patrones y tendencias en ellos?";
choices[31]= new Array();
choices[31][0] = "Tablas dinámicas";
choices[31][1] = "Comprobación de accesibilidad";
choices[31][2] = "Validación de datos";
choices[31][3] = "Búsqueda de valores duplicados";
answers[31] = 0;
units[31] = "work_5";

questions[32]= "33) Cuál de las siguientes fórmulas de Excel 2019 permite la obtención de un número especificado de caracteres?";
choices[32]= new Array();
choices[32][0] = "MAYUSC()";
choices[32][1] = "IZQUIERDA()";
choices[32][2] = "TEXTO()";
choices[32][3] = "OBTENER.CADENA()";
answers[32] = 1;
units[32] = "work_5";

questions[33]= "34) Qué fórmula de Excel 2019 se utiliza para buscar un valor en la primera columna de la izquierda de una tabla y luego devuelve un valor en la misma fila desde una columna especificada?";
choices[33]= new Array();
choices[33][0] = "CONTAR()";
choices[33][1] = "BUSCARV()";
choices[33][2] = "BUSCARH()";
choices[33][3] = "OBTENERC()";
answers[33] = 1;
units[33] = "work_5";

questions[34]= "35) Para qué sirve el Administrador de nombres de Excel 2019?";
choices[34]= new Array();
choices[34][0] = "Sirve para asignar el nombre del autor o propietario del fichero Excel.";
choices[34][1] = "Sirve para hacer un seguimiento de quién realiza cambios en un libro compartido.";
choices[34][2] = "Sirve para crear, editar, eliminar y buscar todos los nombres usados en un libro.";
choices[34][3] = "Esa funcionalidad no existe en Excel 2019.";
answers[34] = 2;
units[34] = "work_5";

questions[35]= "36) En Excel 2019, ¿qué es un SmartArt?";
choices[35]= new Array();
choices[35][0] = "Es un tipo de gráfico.";
choices[35][1] = "Es un cuadro de texto con formato.";
choices[35][2] = "En Excel 2019 no existe el SmartArt.";
choices[35][3] = "Es un tipo de hipervínculo.";
answers[35] = 0;
units[35] = "work_5";

questions[36]= "37) Cuál de las siguientes no es una opción elegible para proteger un libro en Excel 2019?";
choices[36]= new Array();
choices[36][0] = "Cifrar con contraseña.";
choices[36][1] = "Restringir el acceso.";
choices[36][2] = "Cifrar con BitLocker.";
choices[36][3] = "Agregar una firma digital.";
answers[36] = 2;
units[36] = "work_5";

questions[37]= "38) Qué funcionalidad de Excel 2019 permite asegurar la correcta introducción de valores en determinadas celdas?";
choices[37]= new Array();
choices[37][0] = "La Validación de datos.";
choices[37][1] = "El Formato condicional.";
choices[37][2] = "El Control de cambios.";
choices[37][3] = "La Búsqueda inteligente.";
answers[37] = 0;
units[37] = "work_5";

questions[38]= "39) En el ámbito de internet, referirse a TCP/IP, ¿qué es?";
choices[38]= new Array();
choices[38][0] = "Un tipo de protocolo.";
choices[38][1] = "Una suite ofimática online.";
choices[38][2] = "Una extensión de un navegador web.";
choices[38][3] = "Un virus informático.";
answers[38] = 0;
units[38] = "work_7";

questions[39]= "40) Cómo se llama a la información enviada por un sitio web y almacenada en el navegador del usuario, de manera que el sitio web puede consultar la actividad previa del navegador?";
choices[39]= new Array();
choices[39][0] = "Cookie.";
choices[39][1] = "Malware.";
choices[39][2] = "Freeware.";
choices[39][3] = "Script.";
answers[39] = 0;
units[39] = "work_7";

questions[40]= "41) Qué se entiende por Extensión de navegador?";
choices[40]= new Array();
choices[40][0] = "Es un lenguaje de programación o de secuencias de comandos que permite implementar funciones complejas en páginas web.";
choices[40][1] = "Es un lenguaje de código abierto especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML.";
choices[40][2] = "Es un pequeño módulo de software que se utiliza para mejorar la interfaz de usuario de un navegador, la seguridad o la accesibilidad, el bloqueo de anuncios y varias otras características para hacer la navegación por Internet más fácil y agradable.";
choices[40][3] = "Es una cadena de caracteres anexada al nombre de un archivo.";
answers[40] = 1;
units[40] = "work_7";

questions[41]= "42) Cuál es la función principal de la sincronización en un navegador web?";
choices[41]= new Array();
choices[41][0] = "Mantener los mismos datos y configuraciones en diferentes dispositivos.";
choices[41][1] = "Eliminar cookies, caché y otros datos almacenados durante la navegación.";
choices[41][2] = "Acceder al historial de sitios web visitados.";
choices[41][3] = "Traducir automáticamente páginas web a diferentes idiomas.";
answers[41] = 0;
units[41] = "work_7";

questions[42]= "43) Cómo permite Outlook 2019 organizar la bandeja de entrada?";
choices[42]= new Array();
choices[42][0] = "Con etiquetas, igual que Gmail.";
choices[42][1] = "En la bandeja de entrada no se puede añadir ninguna organización.";
choices[42][2] = "Con hipervinculos.";
choices[42][3] = "Con carpetas.";
answers[42] = 3;
units[42] = "work_8";

questions[43]= "44) En Outlook 2019, la cadena de búsqueda asunto:'xxxxxx'tienedatosadiuntos:síde:'nnnnnn' ¿sería correcta? (considere xxxxxx y nnnnnn como valores ficticios de búsqueda)";
choices[43]= new Array();
choices[43][0] = "No, en Outlook 2019 no se pueden anidar búsquedas.";
choices[43][1] = "No, el criterio 'tienedatosadjuntos' no existe en Outlook 2019.";
choices[43][2] = "Sí, pero habría que utilizar una extensión de Microsoft para permitir este tipo de búsquedas.";
choices[43][3] = "Sí, es correcta.";
answers[43] = 3;
units[43] = "work_8";

questions[44]= "45) Qué son las Reglas de correo electrónico en Outlook 2019?";
choices[44]= new Array();
choices[44][0] = "Normas para redactar mensajes.";
choices[44][1] = "Directrices para el uso de adjuntos en mensajes.";
choices[44][2] = "Acciones que Outlook realiza automáticamente en mensajes de correo electrónico enviados o recibidos en función de las condiciones que se especifiquen.";
choices[44][3] = "Mensajes de error generados por el servidor de correo.";
answers[44] = 2;
units[44] = "work_8";

questions[45]= "46) Qué es un Grupo de envío en Outlook 2019?";
choices[45]= new Array();
choices[45][0] = "Permite enviar un correo electrónico a varias personas sin tener que agregar uno por uno cada nombre a la línea de destinatarios.";
choices[45][1] = "En Outlook 2019 no existe el Grupo de envío.";
choices[45][2] = "Es una plantilla de envío predefinida para evitar tener que redactar los mensajes recurrentes.";
choices[45][3] = "Es una carpeta donde se agrupan los correos para ser enviados más tarde de forma programada.";
answers[45] = 0;
units[45] = "work_8";

questions[46]= "47) Sobre compartir archivos en Teams, ¿cuál de las siguientes afirmaciones es incorrecta?";
choices[46]= new Array();
choices[46][0] = "Por seguridad, compartir un archivo en un chat solo es posible uno a uno y no en grupo.";
choices[46][1] = "Si se puede acceder a un archivo en el dispositivo, se puede compartir con otras personas en Teams.";
choices[46][2] = "Se pueden compartir archivos que se encuentren en OneDrive u otro almacenamiento en la nube.";
choices[46][3] = "Se puede enviar el archivo en sí o enviar un vinculo al archivo.";
answers[46] = 0;
units[46] = "work_6";

questions[47]= "48) Cuál de las siguientes afirmaciones es correcta sobre el almacenamiento de archivos en OneDrive?";
choices[47]= new Array();
choices[47][0] = "Solo se pueden guardar archivos de texto.";
choices[47][1] = "El espacio de almacenamiento es ilimitado con independencia de la suscripción.";
choices[47][2] = "Si se pierde el dispositivo con el archivo local se pierde el archivo en OneDrive.";
choices[47][3] = "La aplicación OneDrive integrada en Windows sincroniza los archivos entre el equipo y OneDrive.";
answers[47] = 3;
units[47] = "work_6";

questions[48]= "49) Cuál de las siguientes plataformas no se puede considerar un servicio en la nube como lo es OneDrive?";
choices[48]= new Array();
choices[48][0] = "Dropbox.";
choices[48][1] = "Cubrid.";
choices[48][2] = "Google Orive.";
choices[48][3] = "Icloud.";
answers[48] = 1;
units[48] = "work_6";

questions[49]= "50) Qué son los Planes que Microsoft ofrece para el uso de OneDrive?";
choices[49]= new Array();
choices[49][0] = "Las estructuras y anidación de carpetas a las que puede acogerse un usuario para utilizar OneDrive.";
choices[49][1] = "El tipo de archivos que pueden ser descargados en OneDrive.";
choices[49][2] = "Suscripciones con distintos costes en función de los recursos que ofrece OneDrive.";
choices[49][3] = "En OneDrive no existen Planes.";
answers[49] = 2;
units[49] = "work_6";

questions[50]= "51) Qué es la desfragmentación de disco en Windows 10?";
choices[50]= new Array();
choices[50][0] = "Es la reorganización de los datos almacenados en el disco para que este pueda funcionar de forma más eficaz";
choices[50][1] = "Es el término utilizado para referir que un disco se ha corrompido y ha dejado de ser operativo.";
choices[50][2] = "Son los fragmentos de datos de Backups incrementales.";
choices[50][3] = "Es el método por el cual se analiza el disco en busca de virus y malware.";
answers[50] = 0;
units[50] = "work_2";