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

questions[0] = "1. En Word, de forma predeterminada, indique cuáles son las vistas disponibles en el grupo Vistas de la pestaña Vista:";
choices[0] = new Array();
choices[0][0] = "Modo lectura; Diseño de impresión; Esquema; Borrador; Zoom.";
choices[0][1] = "Modo lectura; Diseño de impresión; Diseño web; Varias páginas; Esquema; Borrador.";
choices[0][2] = "Modo lectura; Diseño de impresión; Diseño web; Esquema; Borrador.";
choices[0][3] = "Modo lectura; Diseño de impresión; Diseño web; Tabla de contenido; Esquema; Borrador.";
answers[0] = 2;
units[0] = "work_4";

questions[1] = "2. En Word, ¿podemos evitar que un texto seleccionado se sustituya al comenzar la escritura?";
choices[1] = new Array();
choices[1][0] = "Eso no sucede en Word . Al escribir cuando hay un texto seleccionado, éste no se sustituye.";
choices[1][1] = "Es una funcionalidad que no depende de Word sino del sistema operativo dado que sucede en cualquier editor de textos.";
choices[1][2] = "En: Opciones de Word -> Avanzadas -> Opciones de edición, desactivar la casilla \"la escritura reemplaza el texto seleccionado\".";
choices[1][3] = "Con el puntero del ratón sobre el texto seleccionado, al hacer clic en el botón derecho del ratón aparece la opción \"No reemplazar texto\"";
answers[1] = 2;
units[1] = "work_4";

questions[2] = "3. Observe la siguiente imagen. Se trata de una composición realizada en Word . La imagen insertada, ¿Qué tipo de ajuste de texto tiene definido?  (jccmexam01-21)";
choices[2] = new Array();
choices[2][0] = "Cuadrado.";
choices[2][1] = "No se puede saber dado que desconocemos si los párrafos tienen definida alguna sangría izquierda.";
choices[2][2] = "Delante del texto.";
choices[2][3] = "En línea con el texto";
answers[2] = 1;
units[2] = "work_4";

questions[3] = "4. En Word, se ha insertado una imagen en un documento aplicando \"Detrás del texto\" como un ajuste de texto a la imagen. Posteriormente se ha seleccionado la imagen y haciendo clic en botón derecho del ratón se ha seleccionado \"Traer al frente\". ¿Cuál es el efecto obtenido con respecto al texto afectado por la imagen?";
choices[3] = new Array();
choices[3][0] = "La imagen pasaría al frente del documento por encima del texto. Mismo efecto que si se hubiera insertado la imagen con ajuste de texto \"Delante del texto\".";
choices[3][1] = "El texto continuaría quedando por delante de la imagen.";
choices[3][2] = "La opción \"Traer al frente\" no es aplicable a imágenes insertadas, solo a Formas.";
choices[3][3] = "Word abriría una ventana de alerta dado que sería una acción incongruente e incompatible por definición";
answers[3] = 1;
units[3] = "work_4";

questions[4] = "5. En Word, al usar el \"Asistente para la conexión de datos\" para el uso de Correspondencia, el tipo de origen de datos \"DSN (nombre de origen de datos) de ODBC\", ¿qué significa ODBC?";
choices[4] = new Array();
choices[4][0] = "ODBC  es un motor de base de datos relacionales.";
choices[4][1] = "ODBC es una estructura normalizada que define un formato de exportación de tablas a fichero de texto que posteriormente pueda ser importado por otra base de datos.";
choices[4][2] = "ODBC es un protocolo de conectividad que se puede usar para conectar una base de datos de Microsoft Access con un origen de datos externos.";
choices[4][3] = "ODBC es un conjunto de comandos y sentencias SQL que permiten la exportación de datos de sistemas Microsoft a otros no compatibles.";
answers[4] = 2;
units[4] = "work_4";

questions[5] = "6. De forma predeterminada, en Word, en la pestaña \"Inicio\" de la cinta de opciones, ¿Cuál de los siguientes no es un grupo de comandos?";
choices[5] = new Array();
choices[5][0] = "Párrafo.";
choices[5][1] = "Organizar.";
choices[5][2] = "Portapapeles.";
choices[5][3] = "Estilos.";
answers[5] = 1;
units[5] = "work_4";

questions[6] = "7. En Word, ¿se puede configurar para mostrar siempre el texto oculto sin tener que mostrar las marcas de párrafo y otros símbolos de formato normalmente ocultos?";
choices[6] = new Array();
choices[6][0] = "En Word  no se puede ocultar texto.";
choices[6][1] = "No, no es posible, solo podremos visualizar el texto oculto al mostrar al mismo tiempo las marcas de párrafo, tabuladores, etc.";
choices[6][2] = "Si, configurándolo en: Opciones de Word -> Mostrar-> Mostrar siempre estas marcas de formato en la pantalla, activando la opción \"Texto oculto\".";
choices[6][3] = "Sí, configurándolo en: pestaña Vista-> Grupo Mostrar, activar la opción \"Mostrar texto oculto\"";
answers[6] = 2;
units[6] = "work_4";

questions[7] = "8. En Word, ¿es posible añadir a la barra de herramientas de acceso rápido el comando \"Configurar página\" pero solo para un documento en concreto?";
choices[7] = new Array();
choices[7][0] = "No, la barra de herramientas de acceso rápido no es configurable en Word .";
choices[7][1] = "No, la barra de herramientas de acceso rápido, de forma predeterminada, muestra los comandos Guardar, Deshacer y Rehacer y únicamente se podrían activar los comandos Nuevo, Abrir e Impresión rápida para que los mostrase.";
choices[7][2] = "Se podría añadir el comando desde: Opciones de Word -> Barra de herramientas de acceso rápido, añadiendo el comando \"Configurar página\". Pero afectaría a todos los documentos dado que la barra de herramientas de acceso rápido afecta a toda la aplicación Word, no se puede discriminar por documento.";
choices[7][3] = "Sí, abriendo el documento en cuestión y desde: Opciones de Word -> Barra de herramientas de acceso rápido, añadir el comando \"Configurar página\" y seleccionar nuestro documento en el desplegable \"Personalizar barra de herramientas de acceso rápido\".";
answers[7] = 3;
units[7] = "work_4";

questions[8] = "9. En Word, la opción \"Imprimir en segundo plano\" que se encuentra en: Opciones de Word -> Avanzadas -> Imprimir, ¿qué efecto tiene cuando está activada?";
choices[8] = new Array();
choices[8][0] = "Si en el documento a imprimir hay marcas de agua o imágenes de fondo, activando esta opción se imprimirían. De forma predeterminada, Word no imprime este tipo de fondos.";
choices[8][1] = "Esa opción no existe en Word .";
choices[8][2] = "Esa opción se encuentra en otra ubicación: Opciones de Word -> Mostrar-> Opciones de impresión.";
choices[8][3] = "Activar esta opción permite seguir trabajando mientras se imprime el documento.";
answers[8] = 3;
units[8] = "work_4";

questions[9] = "10. En Word, si tenemos intención de encuadernar un documento por el margen superior, ¿qué deberíamos hacer?";
choices[9] = new Array();
choices[9][0] = "Dar el valor necesario al \"Margen de encuadernación\" y ajustar la \"Posición del margen interno\" a arriba.";
choices[9][1] = "Dar el valor necesario al \"Margen de encuadernación\" y seleccionar \"Márgenes simétricos\".";
choices[9][2] = "Dar el valor necesario al \"Margen de encuadernación\" y ese mismo valor asignarlo también la \"Margen superior\".";
choices[9][3] = "Dar el valor necesario al \"Margen de encuadernación\" y seleccionar \"Formato libro\".";
answers[9] = 0;
units[9] = "work_4";

questions[10] = "11. En Word, ¿con qué método abreviado de teclado podremos, en un texto seleccionado previamente, reducir el tamaño de fuente en 1 punto?";
choices[10] = new Array();
choices[10][0] = "No hay un método abreviado de teclado para esa funcionalidad.";
choices[10][1] = "Ctrl+Alt+<";
choices[10][2] = "Ctrl";
choices[10][3] = "Ctrl+Alt+R";
answers[10] = 1;
units[10] = "work_4";

questions[11] = "12. En Word, por defecto, desde qué menú de la Cinta de opciones accedemos a los Estilos de texto:";
choices[11] = new Array();
choices[11][0] = "DISEÑO DE PÁGINA";
choices[11][1] = "REVISAR";
choices[11][2] = "DISEÑO";
choices[11][3] = "INICIO";
answers[11] = 3;
units[11] = "work_4";

questions[12] = "13. En Word, indique cuál de las siguientes configuraciones de impresión es incorrecta:";
choices[12] = new Array();
choices[12][0] = "Documento Imprimir todas las páginas. Imprimir a una cara. Intercaladas 1;2;3; 1;2;3; 1;2;3. Orientación vertical.";
choices[12][1] = "Información del documento entradas de texto automático. Imprimir a una cara. Intercaladas 1;2;3; 1;2;3; 1;2;3. Orientación vertical.";
choices[12][2] = "Documento Imprimir todas las páginas. Imprimir a una cara. Sin Intercalar 1;2;3; 1;2;3; 1;2;3. Orientación vertical.";
choices[12][3] = "Documento Imprimir selección. Imprimir a una cara. Intercaladas 1;2;3; 1;2;3; 1;2;3. Orientación vertical.";
answers[12] = 2;
units[12] = "work_4";

questions[13] = "14. En Word, ¿se puede mover La barra de herramientas de acceso rápido?";
choices[13] = new Array();
choices[13][0] = "Sí, se puede mover desde una de las dos ubicaciones posibles.";
choices[13][1] = "No, solo tiene una ubicación que es por encima de la Cinta de opciones.";
choices[13][2] = "SI, se puede arrastrar a cualquier parte de la zona de trabajo de Word.";
choices[13][3] = "Sólo se podría intercambiar por la Barra de estado.";
answers[13] = 0;
units[13] = "work_4";

questions[14] = "15. Sobre Excel, indique cuál de las siguientes afirmaciones es falsa:";
choices[14] = new Array();
choices[14][0] = "Un libro es un archivo que contiene una o más hojas de cálculo.";
choices[14][1] = "En Excel no hay función RESTAR, hay que usar la función SUMA y convertir los números a restar a sus valores negativos.";
choices[14][2] = "Se puede crear un libro desde un libro en blanco o una plantilla.";
choices[14][3] = "En una fórmula en la que Excel espera números, si se utilizan comillas en los números como por ejemplo =\"1\" + \"2\", Excel no convierte automáticamente los valores de texto en números por lo que generaría un error de fórmula en celda.";
answers[14] = 3;
units[14] = "work_4";

questions[15] = "16. En Word, ¿Cuál de las siguientes referencias no es un Efecto de Fuente?";
choices[15] = new Array();
choices[15][0] = "Tachado.";
choices[15][1] = "Superíndice.";
choices[15][2] = "Versalitas.";
choices[15][3] = "Negrita.";
answers[15] = 3;
units[15] = "work_4";

questions[16] = "17. En un documento de Word, necesitamos insertar un gráfico de dispersión con valores en X e Y:";
choices[16] = new Array();
choices[16][0] = "Solo podríamos insertarlo como un gráfico creado en otra aplicación como Excel e importarlo como imagen, por ejemplo jpg.";
choices[16][1] = "Podemos utilizar la opción de insertar gráfico, pero una vez creado no podríamos modificar los valores de X e Y.";
choices[16][2] = "Podemos utilizar la opción de insertar gráfico y una vez creado podríamos modificar los valores de X e Y utilizando el enlace a Excel.";
choices[16][3] = "Word, no permite insertar gráficos de dispersión, los gráficos admitidos son Columna, Línea, Circular, Barra, Área, Superficie y Radial.";
answers[16] = 2;
units[16] = "work_4";

questions[17] = "18. Por qué en Word al utilizar la combinación de correspondencia, el documento que crea al finalizar y combinar, aparece con saltos de sección?";
choices[17] = new Array();
choices[17][0] = "Es la forma de separar cada destinatario en el documento resultante de la combinación.";
choices[17][1] = "Word no coloca un salto de sección al finalizar y combinar.";
choices[17][2] = "El salto de sección lo coloca si en el documento donde se configuró la combinación de correspondencia ya existía. En caso contrario no colocará ningún salto de sección.";
choices[17][3] = "Es la forma de separar cada destinatario en archivos independientes.";
answers[17] = 0;
units[17] = "work_4";

questions[18] = "19. En Word, ¿se puede cambiar la forma del contorno de una imagen insertada en un documento para que el texto se ajuste alrededor de ésta?";
choices[18] = new Array();
choices[18][0] = "Sí, en cualquier estilo de ajuste de la imagen utilizando \"Modificar puntos de ajuste\".";
choices[18][1] = "Sí, cuando el estilo de ajuste de la imagen sea detrás del texto.";
choices[18][2] = "Sí, cuando el estilo de ajuste de la imagen está establecido en estrecho o transparente.";
choices[18][3] = "Sí, cuando el estilo de ajuste de la imagen sea delante del texto.";
answers[18] = 2;
units[18] = "work_4";

questions[19] = "20. En Word, por defecto, la Barra de estado, ¿Dónde se ubica?";
choices[19] = new Array();
choices[19][0] = "Por encima de la Cinta de opciones.";
choices[19][1] = "En la parte inferior de los documentos de Word.";
choices[19][2] = "Por debajo de la Cinta de opciones.";
choices[19][3] = "En la parte superior de los documentos de Word.";
answers[19] = 1;
units[19] = "work_4";

questions[20] = "21. Sobre Word , indique cuál de las siguientes afirmaciones es falsa:";
choices[20] = new Array();
choices[20][0] = "No se puede importar una barra de herramientas de acceso rápido personalizada.";
choices[20][1] = "Se puede personalizar la barra de herramientas de acceso rápido mediante el comando Opciones.";
choices[20][2] = "Se pueden agrupar los comandos mediante la incorporación de un separador entre los comandos.";
choices[20][3] = "Se puede cambiar el nombre de las pestañas de la cinta de opciones.";
answers[20] = 0;
units[20] = "work_4";

questions[21] = "22. En Word, indique cuál de las siguientes afirmaciones es falsa:";
choices[21] = new Array();
choices[21][0] = "Un \"Margen encuadernación\" con \"Posición del margen interno: Arriba\", no es compatible con \"Varias páginas: Márgenes simétricos\".";
choices[21][1] = "Un \"Margen encuadernación\" con \"Posición del margen interno: arriba\", es compatible con \"Varias páginas: Márgenes simétricos\" si la orientación de página es Horizontal.";
choices[21][2] = "Un \"Margen encuadernación\" con \"Posición del margen interno: Arriba\", es compatible con \"Varias páginas: Dos páginas por hoja\", si la orientación de página es Vertical.";
choices[21][3] = "Los márgenes simétricos se pueden utilizar para configurar páginas opuestas en documentos de doble cara.";
answers[21] = 1;
units[21] = "work_4";

questions[22] = "23. ¿Qué no nos permite hacer el Salto de Sección en Word?";
choices[22] = new Array();
choices[22][0] = "Desvincular Encabezados y Pies de página.";
choices[22][1] = "Insertar Encolumnados en medio de una página.";
choices[22][2] = "Insertar índices.";
choices[22][3] = "Ordenar las páginas intercaladas.";
answers[22] = 3;
units[22] = "work_4";

questions[23] = "24. Indique cuál de los siguientes no sería un posible Origen de Datos en Word:";
choices[23] = new Array();
choices[23][0] = "Hoja de cálculo Microsoft Excel.";
choices[23][1] = "Archivo de datos de Word.";
choices[23][2] = "Archivos de texto.";
choices[23][3] = "Flash OpenOffice.";
answers[23] = 3;
units[23] = "work_4";

questions[24] = "25. ¿Para qué sirve la correspondencia en Word?";
choices[24] = new Array();
choices[24][0] = "Para enlazar titulas de índices con números de página.";
choices[24][1] = "Para organizar en carpetas documentos haciéndolos corresponder con el autor.";
choices[24][2] = "Para relacionar imágenes o elementos multimedia insertados con los ficheros de origen.";
choices[24][3] = "Para crear lotes de cartas, etiquetas o correos electrónicos personalizados.";
answers[24] = 3;
units[24] = "work_4";

questions[25] = "26. ¿Qué es el Encabezado de Página y cómo se puede acceder a su definición en Word?";
choices[25] = new Array();
choices[25][0] = "Es el primer párrafo de cada página y se encuentra en \"Diseño de página\".";
choices[25][1] = "Es el contenido, en la parte superior de la página, que se repite en esa posición a lo largo de todas las páginas y se encuentra en la ficha \"Insertar\".";
choices[25][2] = "Es un cuadro de texto donde podemos insertar también imágenes y se coloca en la parte superior de la página y se encuentra en la ficha \"Inicio\".";
choices[25][3] = "Es un icono que, al pulsar sobre él, el cursor se coloca al principio de la página y se encuentra en la ficha \"Inicio\".";
answers[25] = 1;
units[25] = "work_4";

questions[26] = "27. ¿Cuál de los siguientes no es un Tipo de Estilo a poder definir en Word?";
choices[26] = new Array();
choices[26][0] = "Estilo de Párrafo";
choices[26][1] = "Estilo de Encabezado";
choices[26][2] = "Estilo de Lista";
choices[26][3] = "Estilo de Tabla";
answers[26] = 1;
units[26] = "work_4";

questions[27] = "28. En Word, ¿Qué diferencia hay entre \"Notas al Pie\" y \"Notas al Final\"?";
choices[27] = new Array();
choices[27][0] = "La Nota al Pie se coloca al final de la página y la Nota al Final se coloca el final del documento.";
choices[27][1] = "La Nota al Pie se coloca dentro del \"Encabezado y Pie de Página\" en la parte del Pie y la Nota al Final se coloca al final de la página pero por fuera del \"Pie de Página\" justo por encima.";
choices[27][2] = "No hay diferencia las dos se colocan al final de la página.";
choices[27][3] = "La Nota el Pie se coloca al pie del párrafo al que se refiere la anotación, justo por debajo, mientras que la Nota al Final se coloca al final de la página.";
answers[27] = 0;
units[27] = "work_4";

questions[28] = "29. En Word, indique cuál de las siguientes no es una opción configurable de Autocorrección:";
choices[28] = new Array();
choices[28][0] = "Corregir dos mayúsculas seguidas.";
choices[28][1] = "Poner en mayúsculas la primera letra después de un signo de interrogación.";
choices[28][2] = "Poner en mayúscula la primera letra de una oración.";
choices[28][3] = "Poner en mayúscula la primera letra de celdas en tablas.";
answers[28] = 1;
units[28] = "work_4";

questions[29] = "30. En Word 2019 la opción \"Revisar > Control de cambios\", ¿Qué funcionalidad aporta?";
choices[29] = new Array();
choices[29][0] = "Permite estar al tanto de los cambios realizados en el documento.";
choices[29][1] = "Evita que otras personas activen el antivirus.";
choices[29][2] = "Muestra todos los cambios del documento en una lista.";
choices[29][3] = "Permite elegir qué tipo de revisión se muestra en el documento.";
answers[29] = 0;
units[29] = "work_4";

questions[30] = "31. ¿Cómo se puede conseguir un subrayado no predeterminado en Word 2019?";
choices[30] = new Array();
choices[30][0] = "Desde la Pestaña Diseño, grupo fuente, más subrayados.";
choices[30][1] = "Desde la Pestaña Vista, grupo fuente, más subrayados.";
choices[30][2] = "Desde la Pestaña Inicio, grupo fuente, más subrayados.";
choices[30][3] = "Desde la Pestaña Insertar, grupo fuente, más subrayados.";
answers[30] = 2;
units[30] = "work_4";

questions[31] = "32. En Word 2019, ¿Qué combinación de teclas se debe pulsar para insertar una nota al pie?";
choices[31] = new Array();
choices[31][0] = "Alt + Ctrl + A";
choices[31][1] = "Alt + Ctrl + O";
choices[31][2] = "Alt + Ctrl + C";
choices[31][3] = "Alt + Ctrl + W";
answers[31] = 1;
units[31] = "work_4";

questions[32] = "33. En Word 2019, ¿Cuál de los siguientes elementos, para dar formato a una fuente, se considera como Efectos?";
choices[32] = new Array();
choices[32][0] = "Estilo Negrita.";
choices[32][1] = "Color de fuente.";
choices[32][2] = "Tamaño de fuente.";
choices[32][3] = "Superíndice.";
answers[32] = 3;
units[32] = "work_4";

questions[33] = "34. ¿Cuál es la opción de Word 2019 que se utiliza para numerar automáticamente una lista de elementos distribuidos en párrafos?";
choices[33] = new Array();
choices[33][0] = "Lista numerada.";
choices[33][1] = "Lista con viñetas.";
choices[33][2] = "Párrafos con sangría.";
choices[33][3] = "Word 2019 no tiene esa funcionalidad.";
answers[33] = 0;
units[33] = "work_4";

questions[34] = "35. En Word 2019, ¿Cuál es la protección que logra controlar los tipos de cambios que otros usuarios pueden hacer en el documento? (*)";
choices[34] = new Array();
choices[34][0] = "Abrir siempre como solo lectura.";
choices[34][1] = "Restringir edición.";
choices[34][2] = "Restringir el acceso.";
choices[34][3] = "Cifrar con contraseña.";
answers[34] = 1;
units[34] = "work_4";

questions[35] = "36. ¿En qué sección de las Opciones de Word 2019 se encuentra el apartado \"Opciones de interfaz de usuario\"?";
choices[35] = new Array();
choices[35][0] = "Accesibilidad.";
choices[35][1] = "General.";
choices[35][2] = "Avanzadas.";
choices[35][3] = "Mostrar.";
answers[35] = 1;
units[35] = "work_4";

questions[36] = "37. ¿Cuál es la extensión de archivo predeterminada de los documentos de Word 2019?";
choices[36] = new Array();
choices[36][0] = "xlsx";
choices[36][1] = "docx";
choices[36][2] = "ppt";
choices[36][3] = "pdf";
answers[36] = 1;
units[36] = "work_4";

questions[37] = "38. ¿Cuál de las siguientes opciones es una forma de ver el documento en Word 2019?";
choices[37] = new Array();
choices[37][0] = "Vista Nativa";
choices[37][1] = "Vista Diseño de impresión";
choices[37][2] = "Vista Móvil";
choices[37][3] = "Vista Hoja de cálculo";
answers[37] = 1;
units[37] = "work_4";

questions[38] = "39. En Word 2019, ¿Qué función permite a los usuarios combinar una lista de destinatarios con un documento principal para generar múltiples copias personalizadas?";
choices[38] = new Array();
choices[38][0] = "Combinar correspondencia";
choices[38][1] = "Insertar vínculos";
choices[38][2] = "Aplicar estilos";
choices[38][3] = "Guardar como PDF";
answers[38] = 0;
units[38] = "work_4";

questions[39] = "40. ¿Cuál de las siguientes opciones permite organizar la información de manera jerárquica en un documento de Word 2019?";
choices[39] = new Array();
choices[39][0] = "Notas al pie";
choices[39][1] = "Control de cambios";
choices[39][2] = "Vista Esquema";
choices[39][3] = "Bibliografía";
answers[39] = 2;
units[39] = "work_4";

questions[40] = "41. En Word 2019, ¿hay alguna manera de aplicar opciones de formato como el tamaño de fuente, el color y la sangría de texto de forma automática a varios párrafos?";
choices[40] = new Array();
choices[40][0] = "Sí, utilizando Estilos";
choices[40][1] = "No, no se pueden aplicar de forma automática, hay que ir aplicando los formatos uno a uno";
choices[40][2] = "Solo se puede hacer utilizando Macros de VB";
choices[40][3] = "Se podría hacer únicamente utilizando Add-on de terceros";
answers[40] = 0;
units[40] = "work_4";

questions[41] = "42. ¿Cómo se despliegan las Opciones Avanzadas en Word 2019?";
choices[41] = new Array();
choices[41][0] = "Desde la Cinta de opciones, en la pestaña Diseño, en el grupo de comandos Configuración";
choices[41][1] = "Desde la Cinta de opciones, en la pestaña Configuración, en el grupo de comandos Avanzadas";
choices[41][2] = "Desde la Cinta de opciones, en la pestaña Archivo, Opciones y Avanzadas";
choices[41][3] = "En Word 2019 no hay Opciones Avanzadas";
answers[41] = 2;
units[41] = "work_4";

questions[42] = "43. ¿Cuál de los siguientes métodos abreviados de teclado permite mover el cursor una palabra a la derecha en Word 2019?";
choices[42] = new Array();
choices[42][0] = "Ctrl + D.";
choices[42][1] = "Alt + Tecla de flecha derecha.";
choices[42][2] = "Ctrl + Tecla de flecha derecha.";
choices[42][3] = "Alt + D.";
answers[42] = 2;
units[42] = "work_4";

questions[43] = "44. ¿En qué pestaña de la Cinta de opciones de Word 2019 se encuentra la funcionalidad de buscar y reemplazar?";
choices[43] = new Array();
choices[43][0] = "Revisar.";
choices[43][1] = "Inicio.";
choices[43][2] = "Diseño.";
choices[43][3] = "Edición.";
answers[43] = 1;
units[43] = "work_4";

questions[44] = "45. ¿Cuál es la extensión de archivo predeterminada para guardar un documento en formato de plantilla en Word 2019?";
choices[44] = new Array();
choices[44][0] = "dotx";
choices[44][1] = "doc";
choices[44][2] = "odt";
choices[44][3] = "docp";
answers[44] = 0;
units[44] = "work_4";

questions[45] = "46. ¿Qué se entiende por Control de Cambios en Word 2019?";
choices[45] = new Array();
choices[45][0] = "Word 2019 no tiene Control de Cambios. Es una funcionalidad de Excel.";
choices[45][1] = "Mostrar, al final del documento, información para explicar, comentar o aportar referencias a la información que se ha mencionado en el texto del mismo.";
choices[45][2] = "Mostrar las modificaciones realizadas en un documento.";
choices[45][3] = "Enumera los términos y los temas que se tratan en un documento.";
answers[45] = 2;
units[45] = "work_4";

questions[46] = "47. ¿En Word 2019, una vez insertada una imagen, ¿Cómo se puede hacer para que la imagen quede por detrás del texto?";
choices[46] = new Array();
choices[46][0] = "Haciendo clic derecho del ratón sobre la imagen, seleccionando  'Cambiar imagen' y seguidamente seleccionando la opción  'Detrás del texto'.";
choices[46][1] = "Haciendo clic derecho del ratón sobre la imagen y seleccionando la opción 'Texto por delante de imagen'.";
choices[46][2] = "Haciendo clic derecho del ratón sobre la imagen, seleccionando 'Ajustar imagen' y seguidamente seleccionando la opción 'Detrás del texto'.";
choices[46][3] = "Haciendo clic derecho del ratón sobre la imagen, seleccionando 'Ajustar texto' y seguidamente seleccionando la opción 'Detrás del texto'.";
answers[46] = 3;
units[46] = "work_4";

questions[47] = "48. De las siguientes estadísticas, ¿Cuál no se muestra al utilizar 'Contar palabras' en Word 2019?";
choices[47] = new Array();
choices[47][0] = "Palabras.";
choices[47][1] = "Caracteres (sin espacios).";
choices[47][2] = "Caracteres (con espacios).";
choices[47][3] = "Palabras (con errores).";
answers[47] = 3;
units[47] = "work_4";

questions[48] = "49. En un documento de Word 2019, ¿Cómo se llama el hipervínculo que permite saltar a un lugar concreto del documento?";
choices[48] = new Array();
choices[48][0] = "Correspondencia.";
choices[48][1] = "Marcador.";
choices[48][2] = "Validación de datos.";
choices[48][3] = "Mostrar revisiones.";
answers[48] = 1;
units[48] = "work_4";

questions[49] = "50. En la Cinta de opciones de Word 2019, ¿en qué pestaña se encuentra el grupo de comandos que permite cambiar el estilo de fuente?";
choices[49] = new Array();
choices[49][0] = "Insertar.";
choices[49][1] = "Diseño.";
choices[49][2] = "Inicio.";
choices[49][3] = "Referencias.";
answers[49] = 2;
units[49] = "work_4";