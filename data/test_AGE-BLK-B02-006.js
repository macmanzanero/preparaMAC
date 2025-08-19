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

questions[0] = "1. ¿Cómo podemos mostrar el contenido del portapapeles Word sin ningún tipo configuración previa?";
choices[0] = new Array();
choices[0][0] = "Pulsando dos veces la combinación de teclas Ctrl+C";
choices[0][1] = "Utilizando el icono situado en la esquina inferior derecha del grupo Portapapeles del menú Inicio";
choices[0][2] = "Usando la combinación de teclas Ctrl+Alt+P";
choices[0][3] = "Simplemente, al copiar o pegar se muestra el cortapapeles";
answers[0] = 1;
units[0] = "work_4";

questions[1] = "2. En Word, la pestaña Inicio se encuentra dividida en:";
choices[1] = new Array();
choices[1][0] = "6 secciones";
choices[1][1] = "3 secciones";
choices[1][2] = "4 secciones";
choices[1][3] = "10 secciones";
answers[1] = 3;
units[1] = "work_4";

questions[2] = "3. Observa el ejemplo de la figura, ¿Qué tipo de alineación de párrafo y sangría tiene aplicado al texto?";
choices[2] = new Array();
choices[2][0] = "Alineación justificada, sin sangría";
choices[2][1] = "Sin alineación, sangría francesa";
choices[2][2] = "Alineación centrada, sin sangría";
choices[2][3] = "Alineación izquierda, sangría de primera línea";
answers[2] = 0;
units[2] = "work_4";

questions[3] = "4. De las opciones disponibles en el comando Mayúsculas y minúsculas, ¿Cuál debemos utilizar para que Word cambie automáticamente en mayúscula solo la primera letra de cada palabra?";
choices[3] = new Array();
choices[3][0] = "Mayúscula";
choices[3][1] = "Poner en mayúscula cada palabra";
choices[3][2] = "Tipo oración";
choices[3][3] = "Alternar mayúsculas y minúsculas";
answers[3] = 1;
units[3] = "work_4";

questions[4] = "5. Según la siguiente imagen, ¿Qué tipo de sangría tiene el párrafo que comienza con el texto \"El tercer murciélago\"?: (ageaux2301-22)";
choices[4] = new Array();
choices[4][0] = "Primera línea.";
choices[4][1] = "Francesa.";
choices[4][2] = "Izquierda.";
choices[4][3] = "Ninguna.";
answers[4] = 2;
units[4] = "work_4";

questions[5] = "6. En Word, por defecto, ¿qué combinación de teclas abre la ventana para insertar un hipervínculo?";
choices[5] = new Array();
choices[5][0] = "Ctrl + Shift + Q";
choices[5][1] = "Ctrl + Alt + K";
choices[5][2] = "Alt + Q";
choices[5][3] = "Alt + K";
answers[5] = 1;
units[5] = "work_4";

questions[6] = "7. Si queremos entrar en el encabezado para crearlo, ¿qué tenemos que hacer?:";
choices[6] = new Array();
choices[6][0] = "Cinta de opciones Vista, Encabezado, Editar encabezado.";
choices[6][1] = "Cinta de opciones Inicio, Encabezado, Editar encabezado.";
choices[6][2] = "Cinta de opciones Insertar, Encabezado, Editar encabezado.";
choices[6][3] = "Cinta de opciones Diseño de página, Encabezado y pie de página, Editar encabezado.";
answers[6] = 2;
units[6] = "work_4";

questions[7] = "8. Si vamos a utilizar encabezados, deberemos ir a la pestaña Encabezado y pie de página e indicaremos";
choices[7] = new Array();
choices[7][0] = "Los cm. que deben quedar entre la última línea del pie de página y el borde inferior de la página";
choices[7][1] = "Los cm. que deseamos que haya entre el borde superior del papel y la primera línea del encabezado";
choices[7][2] = "La distancia entre el borde izquierdo de la página y el principio de las líneas del documento";
choices[7][3] = "La distancia entre la última línea del documento y el borde inferior de la página";
answers[7] = 1;
units[7] = "work_4";

questions[8] = "9. Cuál será la acción más directa para poner a todo el texto una sangría de primera línea de 1,35 cm?:";
choices[8] = new Array();
choices[8][0] = "Desde la cinta de opciones Inicio, seleccionar todo (CTRL+E) y a continuación entrando al formato de Tabla ponemos la sangría de primera línea a 1,35.";
choices[8][1] = "Desde la cinta de opciones Inicio, seleccionar todo (CTRL+T) y a continuación entrando al formato de párrafo ponemos la sangría de primera línea a 1,35.";
choices[8][2] = "Desde la cinta de opciones Inicio, seleccionar todo (CTRL+E) y a continuación entrando al formato de Fuente ponemos la sangría de primera línea a 1,35.";
choices[8][3] = "Desde la cinta de opciones Inicio, seleccionar todo (CTRL+E) y a continuación entrando al formato de Párrafo ponemos la sangría de primera línea a 1,35.";
answers[8] = 3;
units[8] = "work_4";

questions[9] = "10. En la lista desplegable de Escala, ¿se puede expandir o comprimir el texto entre qué porcentajes?";
choices[9] = new Array();
choices[9][0] = "1 a 1000";
choices[9][1] = "1 a 600";
choices[9][2] = "1 a 450";
choices[9][3] = "Ninguna es correcta";
answers[9] = 1;
units[9] = "work_4";

questions[10] = "11. Observa la siguiente imagen ¿Qué tipo de alineación tiene aplicada el párrafo señalado con una flecha de color rojo?";
choices[10] = new Array();
choices[10][0] = "Centrada";
choices[10][1] = "Derecha";
choices[10][2] = "Izquierda";
choices[10][3] = "Justificada";
answers[10] = 3;
units[10] = "work_4";

questions[11] = "12. Si desea imprimir páginas salteadas:";
choices[11] = new Array();
choices[11][0] = "Debe poner el número de la página separadas por un guión.";
choices[11][1] = "Se deben teclear los números de página separados por coma.";
choices[11][2] = "Se pueden combinar cualquiera de las opciones anteriores.";
choices[11][3] = "Ninguna opción es correcta.";
answers[11] = 1;
units[11] = "work_4";

questions[12] = "13. Si hacemos clic en el color de Fuente Automático...";
choices[12] = new Array();
choices[12][0] = "Se aplica el color definido en el Panel de Control de Windows";
choices[12][1] = "Aplica color Negro";
choices[12][2] = "Ambas son correctas";
choices[12][3] = "Ninguna es correcta";
answers[12] = 0;
units[12] = "work_4";

questions[13] = "14. En un documento de Word, necesitamos aplicar un espacio entre líneas para todos los párrafos de 15 puntos. ¿Qué opción debemos elegir entre las posibilidades de interlineado para establecer esta configuración?";
choices[13] = new Array();
choices[13][0] = "Sencillo";
choices[13][1] = "Exacto";
choices[13][2] = "Doble";
choices[13][3] = "Múltiple";
answers[13] = 1;
units[13] = "work_4";

questions[14] = "15. Según la siguiente imagen, ¿A qué distancia se ha configurado el margen izquierdo del documento?: (ageaux2301-22)";
choices[14] = new Array();
choices[14][0] = "1 cm.";
choices[14][1] = "2 cm.";
choices[14][2] = "2,5 cm.";
choices[14][3] = "l,5cm.";
answers[14] = 1;
units[14] = "work_4";

questions[15] = "16. Se ha marcado la casilla de verificación que se llama Actualizar automáticamente que está en el cuadro de diálogo Fecha y hora de la cinta de opciones Insertar, cuando se ha insertado la fecha?:";
choices[15] = new Array();
choices[15][0] = "Sí, porque es un campo.";
choices[15][1] = "No, se ha insertado como fecha actual.";
choices[15][2] = "No se puede saber a la vista de la imagen.";
choices[15][3] = "No existe esa casilla de verificación.";
answers[15] = 0;
units[15] = "work_4";

questions[16] = "17. ¿Cómo se llama el Tipo de Letra usada en un documento?";
choices[16] = new Array();
choices[16][0] = "Formato de Fuente";
choices[16][1] = "Fuente";
choices[16][2] = "Ambas son correctas";
choices[16][3] = "Ninguna es correcta";
answers[16] = 1;
units[16] = "work_4";

questions[17] = "18. ¿Qué modelo de alineación debemos utilizar para que todas las líneas de un párrafo menos la última queden alineadas con ambos márgenes?";
choices[17] = new Array();
choices[17][0] = "Centrada";
choices[17][1] = "Distribuida";
choices[17][2] = "Justificada";
choices[17][3] = "Igualada";
answers[17] = 2;
units[17] = "work_4";

questions[18] = "19. ¿Cuál de las siguientes opciones, disponibles en el cuadro de diálogo Fuente de Word para modificar el espacio entre caracteres, estaría relacionada con el tracking?";
choices[18] = new Array();
choices[18][0] = "Escala";
choices[18][1] = "Espaciado";
choices[18][2] = "Posición";
choices[18][3] = "Todas las opciones anteriores estarían relacionadas con el tracking";
answers[18] = 1;
units[18] = "work_4";

questions[19] = "20. La carta modelo en un proceso de combinar correspondencia de Word:";
choices[19] = new Array();
choices[19][0] = "Incluirá el texto que no varía";
choices[19][1] = "Tendrá la tabla de datos para combinar";
choices[19][2] = "Ambas son correctas";
choices[19][3] = "Ninguna es correcta";
answers[19] = 0;
units[19] = "work_4";

questions[20] = "21. ¿Cómo podemos mostrar una vista previa de un documento de Word antes de imprimirlo?";
choices[20] = new Array();
choices[20][0] = "Mediante la combinación de teclas Ctrl+P";
choices[20][1] = "Desde el comando imprimir situado en el menú Archivo";
choices[20][2] = "Mediante la combinación de teclas Crtl+Alt+I";
choices[20][3] = "Todas las opciones son correctas";
answers[20] = 3;
units[20] = "work_4";

questions[21] = "22. En un documento de Word necesitamos añadir el símbolo de copyright. ¿En qué pestaña de la cinta de opciones se encuentra y cómo se denomina el nombre del comando que debemos utilizar?";
choices[21] = new Array();
choices[21][0] = "En la pestaña Insertar, comando Símbolos";
choices[21][1] = "En la pestaña Referencias, comando Símbolos especiales";
choices[21][2] = "En la pestaña Insertar, comando Carácteres especiales";
choices[21][3] = "En la pestaña Inicio, comando Símbolos";
answers[21] = 0;
units[21] = "work_4";

questions[22] = "23. Indica si alguna de las siguientes respuestas no se encuentra entre las opciones de búsqueda avanzada disponibles en el cuadro de diálogo Buscar y reemplazar de Word:";
choices[22] = new Array();
choices[22][0] = "Coincidir mayúsculas y minúsculas";
choices[22][1] = "Solo palabras completas";
choices[22][2] = "Usar caracteres comodín";
choices[22][3] = "Ninguna respuesta es correcta.";
answers[22] = 3;
units[22] = "work_4";

questions[23] = "24. El Panel de navegación en Word presenta tres pestañas diferentes. ¿Cuáles son las pestañas correctas?";
choices[23] = new Array();
choices[23][0] = "Páginas – Miniaturas – Títulos.";
choices[23][1] = "Miniaturas – Resultados – Marcadores.";
choices[23][2] = "Marcadores – Miniaturas – Resultados.";
choices[23][3] = "Títulos – Páginas – Resultados.";
answers[23] = 3;
units[23] = "work_4";

questions[24] = "25. Si queremos mover el primer párrafo al final del texto. ¿Qué deberíamos hacer?:";
choices[24] = new Array();
choices[24][0] = "Seleccionar el primer párrafo, copiarlo (CTRL+C), poner el cursor al final del texto y pulsar el botón de pegar (CTRL+V).";
choices[24][1] = "Seleccionar el primer párrafo, cortarlo (CTRL+X), poner el cursor al final del texto y pulsar el botón de pegar (CTRL+V).";
choices[24][2] = "Seleccionar el primer párrafo, cortarlo (CTRL+X), poner el cursor al final del texto y pulsar el botón de pegar (CTRL+P).";
choices[24][3] = "Poner el cursor en el primer párrafo, cortarlo (CTRL+X), poner el cursor al final del texto y pulsar el botón de pegar (CTRL+V).";
answers[24] = 1;
units[24] = "work_4";

questions[25] = "26. Una vez finalizada la combinación de correspondencia. ¿En cuál de los siguientes iconos haría clic con el ratón para ver los datos combinados?";
choices[25] = new Array();
choices[25][0] = "";
choices[25][1] = "";
choices[25][2] = "";
choices[25][3] = "";
answers[25] = 1;
units[25] = "work_4";

questions[26] = "27. ¿Qué podemos utilizar para que Word mantenga siempre junta la palabra \"físico-químico\" y no la separe por el guion al final de una línea o párrafo?";
choices[26] = new Array();
choices[26][0] = "Guion de no separación";
choices[26][1] = "Espacio continuo";
choices[26][2] = "Espacio de final de línea";
choices[26][3] = "Todas las respuestas son correctas";
answers[26] = 0;
units[26] = "work_4";

questions[27] = "28. Según la siguiente imagen, ¿Qué tipo de sangría tiene el párrafo que comienza con el texto \"El segundo murciélago\"?: (ageaux2301-22)";
choices[27] = new Array();
choices[27][0] = "Primera línea.";
choices[27][1] = "Francesa.";
choices[27][2] = "Izquierda.";
choices[27][3] = "Derecha.";
answers[27] = 0;
units[27] = "work_4";

questions[28] = "29. La opción Guardar como... del menú Archivo se utiliza cuando se quiere guardar el documento:";
choices[28] = new Array();
choices[28][0] = "Con otro nombre, para hacer una copia.";
choices[28][1] = "En otra unidad o en otra carpeta.";
choices[28][2] = "Como otro tipo de archivo.";
choices[28][3] = "Todas las respuestas son correctas.";
answers[28] = 3;
units[28] = "work_4";

questions[29] = "30. ¿Sabrías decir a qué corresponde el símbolo representado por un pequeño ancla que aparece en la esquina superior izquierda de la figura?";
choices[29] = new Array();
choices[29][0] = "Delimitador de objetos";
choices[29][1] = "Espacio de no separación";
choices[29][2] = "Salto de línea";
choices[29][3] = "Salto de columna";
answers[29] = 0;
units[29] = "work_4";

questions[30] = "31. Selecciona el tipo de subrayados correcto:";
choices[30] = new Array();
choices[30][0] = "Subrayado Onda Grueso";
choices[30][1] = "Subrayado Onda Doble";
choices[30][2] = "Ambas son correctas";
choices[30][3] = "Ninguna es correcta";
answers[30] = 0;
units[30] = "work_4";

questions[31] = "32. ¿Cuál de las siguientes ilustraciones no forma parte de la pestaña \"Insertar\" en la cinta de opciones de Word 2019?";
choices[31] = new Array();
choices[31][0] = "Captura.";
choices[31][1] = "Gráfico.";
choices[31][2] = "Fotogramas.";
choices[31][3] = "Imagen.";
answers[31] = 2;
units[31] = "work_4";

questions[32] = "33. En qué modo de vista está trabajando Word?: (ageaux2301-01)";
choices[32] = new Array();
choices[32][0] = "En Vista Diseño de Impresión.";
choices[32][1] = "En Vista Diseño Web.";
choices[32][2] = "En Vista Normal.";
choices[32][3] = "En Vista Esquema.";
answers[32] = 0;
units[32] = "work_4";

questions[33] = "34. En el cuadro de diálogo Buscar y reemplazar usado en las respuestas de opciones de buscar y reemplazar siguientes, ¿qué botón tendremos que pulsar si queremos reemplazar de una sola vez la palabra PERAS en todo el texto?: (ageaux2301-13)";
choices[33] = new Array();
choices[33][0] = "Más.";
choices[33][1] = "Reemplazar.";
choices[33][2] = "Reemplazar todos.";
choices[33][3] = "Buscar siguiente.";
answers[33] = 2;
units[33] = "work_4";

questions[34] = "35. Para cerrar el programa y dar por finalizado el trabajo realizado con Word, la forma es:";
choices[34] = new Array();
choices[34][0] = "Hacer clic sobre la ficha “Archivo” – opción “Cerrar”.";
choices[34][1] = "Desde el botón “Cerrar” de la barra de título, con un simple clic sobre él.";
choices[34][2] = "A través del teclado, pulsando la combinación de teclas <ALT> + <F4>.";
choices[34][3] = "Todas las opciones son correctas.";
answers[34] = 3;
units[34] = "work_4";

questions[35] = "36. El botón Borrar Formato:";
choices[35] = new Array();
choices[35][0] = "Deja el texto sin formato";
choices[35][1] = "Borra todo el Formato de la selección";
choices[35][2] = "Ambas son correctas";
choices[35][3] = "Ninguna es correcta";
answers[35] = 2;
units[35] = "work_4";

questions[36] = "37. El texto se alinea en ambos márgenes, modificando los espacios entre palabras si es necesario. ¿A qué tipo de alineación de párrafo nos referimos?";
choices[36] = new Array();
choices[36][0] = "Derecha";
choices[36][1] = "Justificada";
choices[36][2] = "Izquierda";
choices[36][3] = "Centrada";
answers[36] = 1;
units[36] = "work_4";

questions[37] = "38. De los siguientes iconos, indica cuál pertenece al comando Borrar todo el formato:";
choices[37] = new Array();
choices[37][0] = "a";
choices[37][1] = "b";
choices[37][2] = "c";
choices[37][3] = "d";
answers[37] = 1;
units[37] = "work_4";

questions[38] = "39. Según la siguiente imagen, ¿En que línea exacta del documento se encuentra el cursor?: (ageaux2301-01)";
choices[38] = new Array();
choices[38][0] = "En la línea 15.";
choices[38][1] = "En la línea 11.";
choices[38][2] = "En la línea 10.";
choices[38][3] = "En la línea 9.";
answers[38] = 3;
units[38] = "work_4";

questions[39] = "40. ¿Cuál de las siguientes pestañas de la cinta de opciones de Word no está visible por defecto, y es necesario habilitarla?";
choices[39] = new Array();
choices[39][0] = "Correspondencia.";
choices[39][1] = "Programador.";
choices[39][2] = "Disposición.";
choices[39][3] = "Diseño.";
answers[39] = 1;
units[39] = "work_4";

questions[40] = "41. ¿Cuál de las siguientes opciones no es un tipo de alineación de párrafo en Word 2019?";
choices[40] = new Array();
choices[40][0] = "Justificada";
choices[40][1] = "Izquierda";
choices[40][2] = "Centrada";
choices[40][3] = "Vertical";
answers[40] = 3;
units[40] = "work_4";

questions[41] = "42. En un documento de Word hemos añadido diferentes elementos gráficos. ¿Qué herramienta sería la más adecuada si queremos mostrar, ocultar, ordenar o agruparlos?";
choices[41] = new Array();
choices[41][0] = "El Panel de objetos";
choices[41][1] = "El Panel de selección";
choices[41][2] = "Las tablas de contenido";
choices[41][3] = "Ninguna de las respuestas anteriores es correcta";
answers[41] = 1;
units[41] = "work_4";

questions[42] = "43. Hemos creado en Word un texto a dos columnas y necesitamos que todo el ancho disponible en la página se distribuya proporcionalmente entre las columnas. Existen unas casillas de verificación en el cuadro de diálogo Columnas que permite hacer esto, ¿Cómo se denomina?";
choices[42] = new Array();
choices[42][0] = "Ancho proporcional entre columnas";
choices[42][1] = "Distribuir espacio proporcionalmente entre columnas";
choices[42][2] = "Columnas de igual ancho";
choices[42][3] = "Columnas del mismo ancho";
answers[42] = 2;
units[42] = "work_4";

questions[43] = "44. Indica si alguno de los siguientes elementos o características no se encuentra por defecto en la barra de estado de Word";
choices[43] = new Array();
choices[43][0] = "Páginas del documento actual";
choices[43][1] = "Vista esquema";
choices[43][2] = "Número de palabras";
choices[43][3] = "Todos los elementos anteriores se encuentran en la barra de estado de Word";
answers[43] = 1;
units[43] = "work_4";

questions[44] = "45. En Word, ¿cuál es la combinación de teclas de método abreviado para Cerrar?:";
choices[44] = new Array();
choices[44][0] = "CTRL + F4";
choices[44][1] = "ALT + F4";
choices[44][2] = "CTRL + F2";
choices[44][3] = "ALT + F2";
answers[44] = 1;
units[44] = "work_4";

questions[45] = "46. En un documento de Word, sabrías decir qué significa el símbolo de la imagen";
choices[45] = new Array();
choices[45][0] = "Es una marca de tabulación";
choices[45][1] = "Es una marca de espacio";
choices[45][2] = "Es una marca de fin de celda o fila";
choices[45][3] = "Es una marca de salto de línea";
answers[45] = 0;
units[45] = "work_4";

questions[46] = "47. En los procesadores de textos, la tecla \"Fin\":";
choices[46] = new Array();
choices[46][0] = "Nos lleva al final de la línea";
choices[46][1] = "Nos lleva al final del párrafo";
choices[46][2] = "Nos lleva al final del documento";
choices[46][3] = "Nos lleva al final de la palabra";
answers[46] = 0;
units[46] = "work_4";

questions[47] = "48. Abrimos Word y nos encontramos como la fuente Calibri como opción predeterminada ¿Cómo o dónde podemos cambiarla para utilizar Arial por defecto en todos nuestros documentos?";
choices[47] = new Array();
choices[47][0] = "Abrimos el menú Archivo y cambiamos la fuente por defecto en las opciones del programa";
choices[47][1] = "No se puede cambiar la opción la fuente predeterminada en Word";
choices[47][2] = "Abrimos el cuadro de diálogo Fuente, elegimos la fuente y seleccionamos el botón Establecer como predeterminada";
choices[47][3] = "Elegimos el modelo que necesitamos utilizar en la lista Fuentes y hacemos clic en el botón Guardar";
answers[47] = 2;
units[47] = "work_4";

questions[48] = "49. Para disminuir un nivel en una lista Multinivel de Word pulsamos:";
choices[48] = new Array();
choices[48][0] = "Mayúsculas + Control";
choices[48][1] = "Mayúsculas + Ins";
choices[48][2] = "Mayúsculas + L";
choices[48][3] = "Ninguna es correcta";
answers[48] = 3;
units[48] = "work_4";

questions[49] = "50. Entre las opciones relacionadas con el espaciado entre caracteres disponible en el cuadro de diálogo Fuente, indica cual de ellas modifica el espacio que ocupa el texto en función del porcentaje elegido. Teniendo en cuenta que para valores mayores de cien aumentará el ancho del carácter y para valores menores de cien lo reducirá.";
choices[49] = new Array();
choices[49][0] = "Espaciado";
choices[49][1] = "Posición";
choices[49][2] = "Interletraje";
choices[49][3] = "Escala";
answers[49] = 3;
units[49] = "work_4";