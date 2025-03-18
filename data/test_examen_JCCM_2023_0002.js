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

questions[0]= "1) Cuál de las siguientes opciones es una medida de respaldo de datos?";
choices[0]= new Array();
choices[0][0] = "Almacenar todos los archivos en una única carpeta.";
choices[0][1] = "Copiar periódicamente la información en unidades de almacenamiento externo.";
choices[0][2] = "No realizar copias de seguridad.";
choices[0][3] = "Borrar permanentemente los archivos después de usarlos.";
answers[0] = 1;
units[0] = "work_1";

questions[1]= "2) Qué es el phishing?";
choices[1]= new Array();
choices[1][0] = "Es un software o código informático diseñado para infectar, dañar o acceder a sistemas informáticos.";
choices[1][1] = "Son un conjunto de técnicas a través de las cuales se accede a un sistema informático vulnerando las medidas de seguridad establecidas.";
choices[1][2] = "Crear mensajes de correo electrónico o páginas web que aparentemente son de una empresa u organización legítima con la intención de obtener información del usuario.";
choices[1][3] = "Un tipo de cifrado de datos.";
answers[1] = 2;
units[1] = "work_1";

questions[2]= "3) Qué es la Autenticación Multifactor?";
choices[2]= new Array();
choices[2][0] = "Es una autenticación que requiere al menos una credencial de inicio de sesión adicional al nombre de usuario y la contraseña.";
choices[2][1] = "Es una autenticación biométrica.";
choices[2][2] = "Es una autenticación que sustituye el password por un PIN.";
choices[2][3] = "Es una autenticación mediante firma electrónica.";
answers[2] = 0;
units[2] = "work_1";

questions[3]= "4) Cuál de las siguientes opciones es un ejemplo de software de edición de imágenes?";
choices[3]= new Array();
choices[3][0] = "Microsoft Word.";
choices[3][1] = "Adobe Photoshop.";
choices[3][2] = "Google Chrome.";
choices[3][3] = "Microsoft Edge.";
answers[3] = 1;
units[3] = "work_1";

questions[4]= "5) Qué se entiende por software Portable?";
choices[4]= new Array();
choices[4][0] = "Es un software que para ser ejecutado no necesita instalación.";
choices[4][1] = "Es un tipo de software que se instala automáticamente sin permiso del usuario.";
choices[4][2] = "Es un software cuyo código fuente puede ser estudiado, modificado y utilizado libremente.";
choices[4][3] = "Es un tipo de software que para utilizarlo se requiere permiso expreso del autor o empresa distribuidora.";
answers[4] = 0;
units[4] = "work_1";

questions[5]= "6) En el uso de varios monitores en Windows 10, ¿qué es la identificación de las pantallas?";
choices[5]= new Array();
choices[5][0] = "Windows 10 no permite el uso de varios monitores.";
choices[5][1] = "Es la detección del driver del monitor para proceder a su actualización de ser necesaria.";
choices[5][2] = "Es la detección de la resolución de la pantalla para establecer la más adecuada.";
choices[5][3] = "Es la forma de mostrar un número en la pantalla a la que está asignada.";
answers[5] = 3;
units[5] = "work_2";

questions[6]= "7) En Windows 10, ¿qué son los archivos y carpetas ocultos?";
choices[6]= new Array();
choices[6][0] = "Son determinados archivos y carpetas en las que se almacenan datos relevantes para el sistema, archivos de configuración o controladores de dispositivos.";
choices[6][1] = "En Windows 10 no existen ni carpetas ni archivos ocultos.";
choices[6][2] = "Son las carpetas o archivos que el usuario elimina y pasan a la papelera de reciclaje.";
choices[6][3] = "Son los archivos y carpetas encriptados por seguridad.";
answers[6] = 0;
units[6] = "work_2";

questions[7]= "8) Qué función cumple un cortafuegos en seguridad informática?";
choices[7]= new Array();
choices[7][0] = "Proteger el ordenador contra virus.";
choices[7][1] = "Controlar y filtrar el tráfico de red.";
choices[7][2] = "Realizar copias de seguridad de los archivos.";
choices[7][3] = "Optimizar el rendimiento del sistema operativo.";
answers[7] = 1;
units[7] = "work_1";

questions[8]= "9) De las siguientes referencias, ¿cuál no existe en el Administrador de dispositivos de Windows 10?";
choices[8]= new Array();
choices[8][0] = "Adaptadores de red.";
choices[8][1] = "Microsoft SQL Server.";
choices[8][2] = "Colas de impresión.";
choices[8][3] = "Unidades de disco.";
answers[8] = 1;
units[8] = "work_2";

questions[9]= "10) Cuál es la forma correcta de eliminar un programa o aplicación instalada en Windows 10?";
choices[9]= new Array();
choices[9][0] = "Buscar el icono desde el que se ejecuta el programa y llevarlo a la Papelera de reciclaje.";
choices[9][1] = "Entrar en el Editor del Registro en Windows 10 y eliminar el programa.";
choices[9][2] = "Desde Panel de control ir a Programas y caracteristicas, buscar el programa y hacer clic en Desinstalar.";
choices[9][3] = "Desde Administración de dispositivos ir a Componentes de software, buscar el programa y hacer clic en Desinstalar.";
answers[9] = 2;
units[9] = "work_2";

questions[10]= "11) Qué se entiende por Suite Ofimática?";
choices[10]= new Array();
choices[10][0] = "Un conjunto de programas informáticos relacionados con las operaciones básicas de oficina.";
choices[10][1] = "Un conjunto de programas solo para la edición de texto.";
choices[10][2] = "Un programa de diseño de oficinas.";
choices[10][3] = "Un programa para teletrabajo y compartición de archivos.";
answers[10] = 0;
units[10] = "work_1";

questions[11]= "12) Qué es un archivo PDF?";
choices[11]= new Array();
choices[11][0] = "Un programa de edición de textos con imágenes.";
choices[11][1] = "Un archivo de texto sin formato.";
choices[11][2] = "Un archivo que solo puede ser modificado por el autor original.";
choices[11][3] = "Es un formato de archivo universal que conserva las fuentes, las imágenes y la maquetación de los documentos originales.";
answers[11] = 3;
units[11] = "work_1";

questions[12]= "13) Qué es un acceso directo en el contexto informático?";
choices[12]= new Array();
choices[12][0] = "Un archivo de configuración de seguridad.";
choices[12][1] = "Un enlace para abrir rápidamente un archivo, carpeta o programa.";
choices[12][2] = "Un archivo que se abre automáticamente al iniciar Windows.";
choices[12][3] = "Un archivo utilizado para realizar copias de seguridad de datos.";
answers[12] = 1;
units[12] = "work_3";

questions[13]= "14) En Word 2019, ¿cuál de los siguientes elementos, para dar formato a una fuente, se considera como Efectos?";
choices[13]= new Array();
choices[13][0] = "Estilo Negrita.";
choices[13][1] = "Color de fuente.";
choices[13][2] = "Tamaño de fuente.";
choices[13][3] = "Superíndice.";
answers[13] = 3;
units[13] = "work_4";

questions[14]= "15) Cuál es la función de la opción 'Guardar como Plantilla' en Word 2019?";
choices[14]= new Array();
choices[14][0] = "Convertir el documento a formato de texto sin formato.";
choices[14][1] = "Crear una copia de seguridad del documento.";
choices[14][2] = "Guardar el documento para que pueda ser usado como punto de partida en lugar de recrear el archivo desde cero.";
choices[14][3] = "Cambiar el formato del documento a PDF.";
answers[14] = 2;
units[14] = "work_4";

questions[15]= "16) En Word 2019, ¿cuál de las siguientes definiciones corresponde a la inserción de un Salto de Sección Continua?";
choices[15]= new Array();
choices[15][0] = "Inserta un salto de sección y empieza la sección nueva en la página siguiente.";
choices[15][1] = "Inserta un salto de sección y empieza la sección nueva en la siguiente página con un número par.";
choices[15][2] = "Inserta un salto de sección y empieza la sección nueva en la misma página.";
choices[15][3] = "Inserta un salto de sección y empieza la sección nueva en la siguiente página con un número impar.";
answers[15] = 2;
units[15] = "work_4";

questions[16]= "17) Cuál es la opción de Word 2019 que se utiliza para numerar automáticamente una lista de elementos distribuidos en párrafos?";
choices[16]= new Array();
choices[16][0] = "Lista numerada.";
choices[16][1] = "Lista con viñetas.";
choices[16][2] = "Párrafos con sangría.";
choices[16][3] = "Word 2019 no tiene esa funcionalidad.";
answers[16] = 0;
units[16] = "work_4";

questions[17]= "18) Sobre el Control de cambios de Word 2019, ¿cuál de las siguientes afirmaciones es falsa? (*)";
choices[17]= new Array();
choices[17][0] = "El Control de cambios sirve para realizar un seguimiento de los cambios en un documento.";
choices[17][1] = "Las eliminaciones se marcan con un tachado y las adiciones se marcan en letra cursiva.";
choices[17][2] = "Para revisar los cambios en el documento se puede acudir a Mostrar revisiones.";
choices[17][3] = "Para revisar los cambios, indicados por una línea roja en el margen, se elige Revisiones simples.";
answers[17] = 1;
units[17] = "work_4";

questions[18]= "19) En Word 2019, ¿cuál es la protección que logra controlar los tipos de cambios que otros usuarios pueden hacer en el documento? (*)";
choices[18]= new Array();
choices[18][0] = "Abrir siempre como solo lectura.";
choices[18][1] = "Restringir edición.";
choices[18][2] = "Restringir el acceso.";
choices[18][3] = "Cifrar con contraseña.";
answers[18] = 1;
units[18] = "work_4";

questions[19]= "20) En Word 2019 el estilo predefinido 'Énfasis', ¿qué Tipo de estilo es?";
choices[19]= new Array();
choices[19][0] = "Carácter.";
choices[19][1] = "Párrafo.";
choices[19][2] = "Lista.";
choices[19][3] = "Tabla.";
answers[19] = 0;
units[19] = "work_4";

questions[20]= "21) En Word 2019, ¿cuál es el carácter comodín utílizado para hacer coincidir un carácter alfabético individual en una posición concreta?";
choices[20]= new Array();
choices[20][0] = '!';
choices[20][1] = '?';
choices[20][2] = '*';
choices[20][3] = '\\';
answers[20] = 1;
units[20] = "work_4";

questions[21]= "22) En qué pestaña de la Cinta de opciones de Word 2019 se encuentra la función que permite imprimir un documento?";
choices[21]= new Array();
choices[21][0] = "Inicio.";
choices[21][1] = "Insertar.";
choices[21][2] = "Archivo.";
choices[21][3] = "Disposición.";
answers[21] = 2;
units[21] = "work_4";

questions[22]= "23) En Word 2019, ¿qué son las Tablas rápidas?";
choices[22]= new Array();
choices[22][0] = "En Word 2019 no existen las Tablas rápidas.";
choices[22][1] = "Son tablas que se almacenan en galerías como bloques de creación para volver a usarlas en cualquier momento.";
choices[22][2] = "Son tablas que para crearlas solo hay que indicar el número de columnas y filas.";
choices[22][3] = "Son tablas que previamente se han creado en Excel y se importan a Word.";
answers[22] = 1;
units[22] = "work_4";

questions[23]= "24) Cuál de las siguientes opciones no es una posición de Número de página en Word 2019?";
choices[23]= new Array();
choices[23][0] = "Principio de página.";
choices[23][1] = "Márgenes de página.";
choices[23][2] = "Diagonal de página.";
choices[23][3] = "Posición actual.";
answers[23] = 2;
units[23] = "work_4";

questions[24]= "25) En qué sección de las Opciones de Word 2019 se encuentra el apartado 'Opciones de interfaz de usuario'?";
choices[24]= new Array();
choices[24][0] = "Accesibilidad.";
choices[24][1] = "General.";
choices[24][2] = "Avanzadas.";
choices[24][3] = "Mostrar.";
answers[24] = 1;
units[24] = "work_4";

questions[25]= "26) Cuál es la combinación de teclas utílizada para deshacer la última acción en Excel 2019?";
choices[25]= new Array();
choices[25][0] = "Ctrl + E";
choices[25][1] = "Ctrl + Z";
choices[25][2] = "Ctrl + X";
choices[25][3] = "Ctrl + V";
answers[25] = 1;
units[25] = "work_5";

questions[26]= "27) Durante la selección de columnas en Excel 2019, ¿qué tecla hay que mantener pulsada para seleccionar columnas no adyacentes?";
choices[26]= new Array();
choices[26][0] = "Ctrl";
choices[26][1] = "En Excel 2019 solo se pueden seleccionar columnas adyacentes";
choices[26][2] = "Alt";
choices[26][3] = "F1";
answers[26] = 0;
units[26] = "work_5";

questions[27]= "28) Cuál de las siguientes opciones es una función válida de fecha en Excel 2019?";
choices[27]= new Array();
choices[27][0] = "TIEMPO()";
choices[27][1] = "ANUAL()";
choices[27][2] = "AYER()";
choices[27][3] = "HOY()";
answers[27] = 3;
units[27] = "work_5";

questions[28]= "29) En Excel 2019, en la Orientación de texto, ¿cuántos grados podemos dar al texto para inclinarlo en la celda?";
choices[28]= new Array();
choices[28][0] = "Excel 2019 no permite inclinar texto en las celdas.";
choices[28][1] = "Solo permite tres posibles ángulos 0°, 45° ó 90°";
choices[28][2] = "Permite los ángulos entre 90° y -90°";
choices[28][3] = "Solo permite los ángulos 90°, 45°, 0°, -45° ó -90°";
answers[28] = 2;
units[28] = "work_5";

questions[29]= "30) En Excel 2019, en el momento de la impresión, ¿qué escalado reduce la copia impresa para que tenga una página de ancho?";
choices[29]= new Array();
choices[29][0] = "Ajustar todas las filas en una página.";
choices[29][1] = "Sin Escalado.";
choices[29][2] = "Excel 2019 no permite escalados en la impresión.";
choices[29][3] = "Ajustar todas las columnas en una página.";
answers[29] = 3;
units[29] = "work_5";

questions[30]= "31) Qué función de Excel 2019 se utiliza para encontrar el valor máximo en un rango de celdas?";
choices[30]= new Array();
choices[30][0] = "CONTAR()";
choices[30][1] = "PROMEDIO()";
choices[30][2] = "MAX()";
choices[30][3] = "SUMA()";
answers[30] = 2;
units[30] = "work_5";

questions[31]= "32) Qué función de Excel 2019 se utiliza para calcular la desviación estándar de un rango de celdas?";
choices[31]= new Array();
choices[31][0] = "DEVEST()";
choices[31][1] = "DESVESTA()";
choices[31][2] = "STD()";
choices[31][3] = "PROMEDIO()";
answers[31] = 1;
units[31] = "work_5";

questions[32]= "33) Qué función de Excel 2019 se utiliza para contar el número de celdas no vacías en un rango de celdas?";
choices[32]= new Array();
choices[32][0] = "VACIO.SI()";
choices[32][1] = "CONTAR()";
choices[32][2] = "CONTARA()";
choices[32][3] = "VOID.NO()";
answers[32] = 2;
units[32] = "work_5";

questions[33]= "34) Qué función de Excel 2019 se utiliza para redondear un número al número de decimales especificado?";
choices[33]= new Array();
choices[33][0] = "AJUSTADEC()";
choices[33][1] = "DEC.A.OCT()";
choices[33][2] = "REDONDEAR()";
choices[33][3] = "DECINT()";
answers[33] = 2;
units[33] = "work_5";

questions[34]= "35) En Excel 2019, ¿cuál de las siguientes opciones no es un elemento que pueda parametrizarse al realizar búsquedas?";
choices[34]= new Array();
choices[34][0] = "Buscar Dentro de Hoja.";
choices[34][1] = "Buscar en Celda.";
choices[34][2] = "Buscar en Comentarios.";
choices[34][3] = "Buscar Por filas.";
answers[34] = 1;
units[34] = "work_5";

questions[35]= "36) En Excel 2019, en la creación de vínculos, ¿cuál de los siguientes no es una opción elegible del apartado 'Vincular a:'?";
choices[35]= new Array();
choices[35][0] = "Vincular a Archivo o página web existente.";
choices[35][1] = "Vincular a Lugar de este documento.";
choices[35][2] = "Vincular a Dirección de correo electrónico.";
choices[35][3] = "Vincular a Fórmula.";
answers[35] = 3;
units[35] = "work_5";

questions[36]= "37) En Excel 2019, ¿cuál de los siguientes códigos de Autotexto, para la impresión de encabezado y pie de página, imprimiría 'Página X de Y' siendo X el número de página actual e Y el número de páginas totales?";
choices[36]= new Array();
choices[36][0] = "Excel 2019 no permite esa funcionalidad.";
choices[36][1] = "Página (Pag) de (PagTot).";
choices[36][2] = "Página &[Página] de &[Páginas].";
choices[36][3] = "Página 1 de 1.";
answers[36] = 2;
units[36] = "work_5";

questions[37]= "38) En Excel 2019, ¿cuál de los siguientes no es un Estilo de tabla seleccionable?";
choices[37]= new Array();
choices[37][0] = "Naranja, Estilo de tabla claro 10.";
choices[37][1] = "Azul, Estilo de tabla oscuro 6.";
choices[37][2] = "Azul, Estilo de tabla medio 16.";
choices[37][3] = "Naranja, Estilo de tabla intenso 5.";
answers[37] = 3;
units[37] = "work_5";

questions[38]= "39) El protocolo SMTP, ¿a qué se circunscribe?";
choices[38]= new Array();
choices[38][0] = "Correo electrónico.";
choices[38][1] = "Navegación web.";
choices[38][2] = "lcloud.";
choices[38][3] = "Videollamadas.";
answers[38] = 0;
units[38] = "work_7";

questions[39]= "40) Qué es el Administrador de certificados en un navegador web? (*)";
choices[39]= new Array();
choices[39][0] = "Donde aparece la versión del navegador, política de privacidad, licencias, etc.";
choices[39][1] = "Los navegadores no tienen administración de certificados.";
choices[39][2] = "Una herramienta para ver los certificados instalados y verificar cuáles existen, cuándo caducan, etc.";
choices[39][3] = "Una herramienta que permite firmar digitalmente documentos en la web y acceder a determinadas páginas que requieren autenticación mediante certificados.";
answers[39] = 1;
units[39] = "work_7";

questions[40]= "41) Qué se entiende por anti pop-ups en un navegador web?";
choices[40]= new Array();
choices[40][0] = "Son programas para la detección de virus durante la navegación.";
choices[40][1] = "Son programas para la eliminación en linea del malware.";
choices[40][2] = "Son técnicas que evitan la aparición de ventanas emergentes durante la navegación.";
choices[40][3] = "Son programas para estructurar y jerarquizar el histórico de navegación.";
answers[40] = 2;
units[40] = "work_7";

questions[41]= "42) Qué es un navegador seguro?";
choices[41]= new Array();
choices[41][0] = "Es un navegador web con medidas de seguridad adicionales que ayudan a prevenir la actividad de terceros no autorizados cuando navega por Internet.";
choices[41][1] = "Es un navegador web con licencia de compra y con un mantenimiento que asegura su constante actualización.";
choices[41][2] = "Es un navegador web que siempre navega en modo privado o de incógnito.";
choices[41][3] = "Es un navegador web que, por seguridad, bloquea todos los enlaces y links de las páginas.";
answers[41] = 0;
units[41] = "work_7";

questions[42]= "43) En el Panel de lectura de Outlook 2019, ¿qué tres enlaces rápidos aparecen en la parte superior del panel? (*)";
choices[42]= new Array();
choices[42][0] = "Archivar, Marcar como spam y Eliminar.";
choices[42][1] = "Marcar como no leído, Mover a y Etiquetas.";
choices[42][2] = "Responder, Responder a todos y Reenviar.";
choices[42][3] = "Responder, Reenviar y Eliminar.";
answers[42] = 2;
units[42] = "work_8";

questions[43]= "44) En Outlook 2019, ¿cuál de las siguientes no es una agrupación de las predefinidas para la organización de la Bandeja de entrada?";
choices[43]= new Array();
choices[43][0] = "Referencia.";
choices[43][1] = "Asunto.";
choices[43][2] = "Tipo.";
choices[43][3] = "Fecha.";
answers[43] = 0;
units[43] = "work_8";

questions[44]= "45) En Outlook 2019 al recibir un mensaje hay varias acciones que puede llevar a cabo con ese mensaje. ¿Qué nombre recibe la que permite escribir a un conjunto nuevo de destinatarios e incluir, automáticamente en el nuevo mensaje, los datos adjuntos incluidos en el mensaje original?";
choices[44]= new Array();
choices[44][0] = "Responder.";
choices[44][1] = "Reenviar.";
choices[44][2] = "Responder a todos.";
choices[44][3] = "Readjuntar.";
answers[44] = 1;
units[44] = "work_8";

questions[45]= "46) En Outlook 2019, al crear una Regla, ¿cuál de las siguientes opciones no es una acción que se pueda hacer con el mensaje?";
choices[45]= new Array();
choices[45][0] = "Mover a la carpeta especificada.";
choices[45][1] = "Reproducir un sonido.";
choices[45][2] = "Guardarlo como documento de Word.";
choices[45][3] = "Eliminarlo.";
answers[45] = 2;
units[45] = "work_8";

questions[46]= "47) Qué es un Canal en Teams?";
choices[46]= new Array();
choices[46][0] = "Ese concepto no existe en Teams.";
choices[46][1] = "Es un único lugar donde un equipo puede compartir mensajes, herramientas y archivos.";
choices[46][2] = "Es el tipo de red utilizada para conectarse a Teams.";
choices[46][3] = "Es el nombre del protocolo y puerto de comunicaciones usado en Teams.";
answers[46] = 1;
units[46] = "work_6";

questions[47]= "48) Sobre las notificaciones en Teams, indique cuál de las siguientes afirmaciones es cierta:";
choices[47]= new Array();
choices[47][0] = "Microsoft Windows puede bloquear las notificaciones antes de que aparezcan en Teams.";
choices[47][1] = "Los sonidos de notificación no pueden ser desactivados.";
choices[47][2] = "La configuración personalizada de canales y chat, apariencia y sonidos no está disponible en Teams para la versión de escritorio.";
choices[47][3] = "Teams no genera notificaciones.";
answers[47] = 0;
units[47] = "work_6";

questions[48]= "49) Dónde se guardan por defecto los documentos descargados desde Teams?";
choices[48]= new Array();
choices[48][0] = "Organización.";
choices[48][1] = "Chat.";
choices[48][2] = "Tareas.";
choices[48][3] = "En la carpeta Descargas del dispositivo.";
answers[48] = 3;
units[48] = "work_6";

questions[49]= "50) Qué diferencia existe entre los canales Estándar y Privados en Teams?";
choices[49]= new Array();
choices[49][0] = "Teams no dispone de canales Privados.";
choices[49][1] = "No hay ninguna diferencia.";
choices[49][2] = "En los canales Estándar todos los miembros del equipo pueden ver los canales Privados y sus conversaciones, pero no pueden participar y en los canales Privados, solo los miembros agregados pueden participar.";
choices[49][3] = "En los canales Estándar todos los miembros del equipo pueden verlos, así como participar en conversaciones y en los canales Privados, los miembros de un equipo deben agregarse específicamente a él para participar.";
answers[49] = 3;
units[49] = "work_6";