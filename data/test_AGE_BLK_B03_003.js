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

/*****************************************************************************
 * Test de bloque (AGE-BLK-B03-003)
 ******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();

questions[0] = "1. En la celda B2 de nuestra hoja de Excel 2019 hemos escrito una fecha con el siguiente formato '12/3/2021' pero queremos que nos aparezca con un formato diferente, en concreto con el formato '2021-03-12', ¿Qué debemos hacer?";
choices[0] = new Array();
choices[0][0] = "Haremos clic con el botón derecho sobre la celda donde hemos introducido la fecha y seleccionaremos FORMATO DE CELDAS. En el cuadro de diálogo elegiremos la pestaña NÚMERO y en la lista de categorías FECHA. En el listado que se mostrará escogeremos el formato deseado.";
choices[0][1] = "Haremos clic con el botón derecho sobre la celda donde hemos introducido la fecha y seleccionaremos FORMATO DE CELDAS. En el cuadro de diálogo elegiremos la pestaña FORMATO y en la lista de categorías NÚMERO. En el listado que se mostrará escogeremos el formato deseado.";
choices[0][2] = "Haremos clic en la pestaña INICIO y en el grupo CELDAS > FORMATO. En el cuadro de diálogo elegiremos la pestaña NÚMERO y en la lista de categorías FECHA. En el listado que se mostrará escogeremos el formato deseado.";
choices[0][3] = "Son correctas las opciones a y c.";
answers[0] = 0;
units[0] = "work_5";

questions[1] = "2. Para acceder al cuadro de diálogo Series, accedemos por:";
choices[1] = new Array();
choices[1][0] = "Inicio->Herramientas->Rellenar->Series";
choices[1][1] = "Inicio->Edición->Rellenar->Series";
choices[1][2] = "Datos->Herramientas de datos->Rellenar->Series";
choices[1][3] = "Inicio->Formato-> Rellenar->Series";
answers[1] = 1;
units[1] = "work_5";

questions[2] = "3. Qué formato numérico presenta el dato almacenado en la celda B2? (ageaux2402-19.JPG)";
choices[2] = new Array();
choices[2][0] = "Contabilidad.";
choices[2][1] = "Científico.";
choices[2][2] = "Fracción.";
choices[2][3] = "Porcentaje.";
answers[2] = 1;
units[2] = "work_5";

questions[3] = "4. ¿Cuál es el número máximo de caracteres que puede contener una celda en Excel?";
choices[3] = new Array();
choices[3][0] = "8.128";
choices[3][1] = "16.354";
choices[3][2] = "32.767";
choices[3][3] = "4.546";
answers[3] = 2;
units[3] = "work_5";

questions[4] = "5. ¿Cuál de las siguientes no es una función financiera de Excel?:";
choices[4] = new Array();
choices[4][0] = "CUPON.FECHA.L2";
choices[4][1] = "DVS";
choices[4][2] = "MONEDA.FRAC";
choices[4][3] = "Todas las anteriores son funciones financieras de Excel";
answers[4] = 3;
units[4] = "work_5";

questions[5] = "6. ¿Qué error muestra Excel cuando hacemos referencia a una función o constante que no existe o no ha sido definida?";
choices[5] = new Array();
choices[5][0] = "#¿NOMBRE?";
choices[5][1] = "#¡VALOR!";
choices[5][2] = "#¡REF!";
choices[5][3] = "#¡NULO!";
answers[5] = 0;
units[5] = "work_5";

questions[6] = "7. Tenemos una rango de datos en Excel donde hemos aplicado el comando Filtro. Indica si algunas de las respuestas siguientes no se encuentra entre las posibilidades de filtrado por número disponibles en el menú emergente asociado a cada fila.";
choices[6] = new Array();
choices[6][0] = "Superior del promedio";
choices[6][1] = "Diez mejores";
choices[6][2] = "Entre";
choices[6][3] = "Todas las respuestas anteriores se encuentran entre las posibilidades de filtrado.";
answers[6] = 3;
units[6] = "work_5";

questions[7] = "8. En Excel 2019, ¿a qué se llama resumir los resultados de hojas de cálculo independientes y elaborar informes con ellos mediante una hoja de cálculo maestra?";
choices[7] = new Array();
choices[7][0] = "Consolidar";
choices[7][1] = "Validación de datos";
choices[7][2] = "Quitar duplicados";
choices[7][3] = "Relleno rápido";
answers[7] = 0;
units[7] = "work_5";

questions[8] = "9. Si deseamos personalizar una lista (similar a la lista de los días de la semana), por ejemplo, con los municipios de la isla, debemos entrar por:";
choices[8] = new Array();
choices[8][0] = "Inicio->Edición->Rellenar->Series";
choices[8][1] = "Datos->Personalizar->Listas";
choices[8][2] = "Archivo->Opciones->Avanzadas";
choices[8][3] = "Insertar->Formato->Formato condicional";
answers[8] = 2;
units[8] = "work_5";

questions[9] = "10. Según la siguiente imagen, Señale la respuesta correcta para la columna Condición 3: (ageaux2402-21.JPG)";
choices[9] = new Array();
choices[9][0] = "El formato condicional de poner subrayado se le ha aplicado a las celdas que contienen números mayores o iguales que 8.";
choices[9][1] = "El formato condicional de poner subrayado se le ha aplicado a las celdas que contienen números menores o iguales que 29.";
choices[9][2] = "El formato condicional de poner subrayado se le ha aplicado a las celdas que contienen números pares.";
choices[9][3] = "El formato condicional de poner subrayado se le ha aplicado a las celdas que contienen números menores que 27.";
answers[9] = 1;
units[9] = "work_5";

questions[10] = "11. Si en una hoja de cálculo de Excel el contenido de la celda A1 es: 4+5, si copio el contenido a B1 en dicha celda aparecerá:";
choices[10] = new Array();
choices[10][0] = "9";
choices[10][1] = "9 en la celda y 4+5 en la barra de referencias";
choices[10][2] = "ERROR";
choices[10][3] = "4+5";
answers[10] = 3;
units[10] = "work_5";

questions[11] = "12. ¿Con qué tecla pasamos de la celda A1 a la celda A2?";
choices[11] = new Array();
choices[11][0] = "Tabulador.";
choices[11][1] = "Intro o entrar.";
choices[11][2] = "Flecha ->";
choices[11][3] = "Retroceso.";
answers[11] = 1;
units[11] = "work_5";

questions[12] = "13. Dar el formato adecuado si se desean conseguir las siguientes presentaciones: 3425,725 litros de leche";
choices[12] = new Array();
choices[12][0] = "0.000 “litros de leche”";
choices[12][1] = "0,000 “litros de leche”";
choices[12][2] = "#.##0,0 “litros de leche”";
choices[12][3] = "0,00#,## “litros de leche”";
answers[12] = 1;
units[12] = "work_5";

questions[13] = "14. ¿Cómo separamos los diferentes argumentos dentro de una función?";
choices[13] = new Array();
choices[13][0] = "<>.";
choices[13][1] = "&.";
choices[13][2] = ";.";
choices[13][3] = "-.";
answers[13] = 2;
units[13] = "work_5";

questions[14] = "15. En la cinta de opciones de Excel, indica la ficha en la que se encuentra el comando Formato condicional:";
choices[14] = new Array();
choices[14][0] = "Datos";
choices[14][1] = "Disposición de página";
choices[14][2] = "Inicio";
choices[14][3] = "Revisar";
answers[14] = 2;
units[14] = "work_5";

questions[15] = "16. En Excel, indica el resultado de la siguiente expresión =IGUAL(\"oposiciones\";\"oposiciones\")";
choices[15] = new Array();
choices[15][0] = "FALSO";
choices[15][1] = "#¿NOMBRE?";
choices[15][2] = "VERDADERO";
choices[15][3] = "0 (Cero)";
answers[15] = 2;
units[15] = "work_5";

questions[16] = "17. Cuando el cursor está posicionado en alguna celda preparado para trabajar con ésta, dicha celda se denomina:";
choices[16] = new Array();
choices[16][0] = "Celda dinámica y se identifica porque aparece más remarcada que las demás";
choices[16][1] = "Casilla dinámica y se identifica porque aparece más remarcada que las demás";
choices[16][2] = "Celda activa y se identifica porque aparece más remarcada que las demás";
choices[16][3] = "Casilla activa y se identifica porque aparece más remarcada que las demás";
answers[16] = 2;
units[16] = "work_5";

questions[17] = "18. Indica si alguna de las siguientes funciones no forma parte de la categoría Funciones lógicas de Excel";
choices[17] = new Array();
choices[17][0] = "Si";
choices[17][1] = "FALSO";
choices[17][2] = "CAMBIAR";
choices[17][3] = "Todas las respuestas son incorrectas.";
answers[17] = 3;
units[17] = "work_5";

questions[18] = "19. Observa la función que aparece en la celda C12 de la siguiente figura, ¿Cuál será el resultado que obtendremos?";
choices[18] = new Array();
choices[18][0] = "101";
choices[18][1] = "100";
choices[18][2] = "102";
choices[18][3] = "203";
answers[18] = 0;
units[18] = "work_5";

questions[19] = "20. Para cambiar el color correspondiente a alguna pestaña de la hoja de cálculo podemos hacer clic con el botón derecho sobre la propia pestaña ¿Existe alguna otra forma?";
choices[19] = new Array();
choices[19][0] = "Sí, desde las opciones del comando Formato de la pestaña Inicio";
choices[19][1] = "Sí, desde las opciones del comando Temas la pestaña Disposición de página";
choices[19][2] = "No, este seria el único método";
choices[19][3] = "Sí, con el comando Color de pestaña de la pestaña Vista";
answers[19] = 0;
units[19] = "work_5";

questions[20] = "21. Para el Mensaje de error de la Validación de datos, ¿Qué tres tipos de Estilo se pueden activar en Excel 2019?:";
choices[20] = new Array();
choices[20][0] = "Alto, Medio y Bajo.";
choices[20][1] = "Advertencia y Error.";
choices[20][2] = "Alto, Advertencia e Información.";
choices[20][3] = "Advertencia, Error y No admisible.";
answers[20] = 2;
units[20] = "work_5";

questions[21] = "22. Indica el resultado correcto de la formula que aparece resaltada en la siguiente figura";
choices[21] = new Array();
choices[21][0] = "#¡NULO!";
choices[21][1] = "8";
choices[21][2] = "9";
choices[21][3] = "#¡NUM!";
answers[21] = 1;
units[21] = "work_5";

questions[22] = "23. En Excel, ¿a qué categoría de funciones pertenece la función “SYD”?:";
choices[22] = new Array();
choices[22][0] = "Funciones financieras";
choices[22][1] = "Funciones de búsqueda";
choices[22][2] = "Funciones de texto";
choices[22][3] = "Funciones de fecha y hora";
answers[22] = 0;
units[22] = "work_5";

questions[23] = "24. Según la siguiente imagen, ¿Cómo se llama la hoja de cálculo seleccionada?: (ageaux2402-21.JPG)";
choices[23] = new Array();
choices[23][0] = "Hoja 1.";
choices[23][1] = "Ejercicio.";
choices[23][2] = "Solución.";
choices[23][3] = "Hojag.";
answers[23] = 2;
units[23] = "work_5";

questions[24] = "25. Según la siguiente imagen, ¿Cuál es la celda activa?: (ageaux2402-21.JPG)";
choices[24] = new Array();
choices[24][0] = "Al.";
choices[24][1] = "B1.";
choices[24][2] = "B4.";
choices[24][3] = "G10.";
answers[24] = 2;
units[24] = "work_5";

questions[25] = "26. Señale el método abreviado utilizado en Excel para Crear un nuevo libro en blanco:";
choices[25] = new Array();
choices[25][0] = "CTRL+L";
choices[25][1] = "CTRL+B";
choices[25][2] = "CTRL+D";
choices[25][3] = "CTRL+U";
answers[25] = 3;
units[25] = "work_5";

questions[26] = "27. Qué formato personalizado de número permite mostrar valores almacenados como 0034,0 Eur; 0305,7 Eur; 0005,6 Eur; ...?:";
choices[26] = new Array();
choices[26][0] = "####,# Eur.";
choices[26][1] = "0000,# \"Eur\".";
choices[26][2] = "0000,0 \"Eur\",";
choices[26][3] = "0000,0 Eur.";
answers[26] = 2;
units[26] = "work_5";

questions[27] = "28. ¿Cuál de los siguientes elementos no forma parte de la barra de menú de Excel?";
choices[27] = new Array();
choices[27][0] = "Datos.";
choices[27][1] = "Referencias.";
choices[27][2] = "Diseño de página.";
choices[27][3] = "Fórmulas.";
answers[27] = 1;
units[27] = "work_5";

questions[28] = "29. Indica cuál de las siguientes funciones de Excel permite sumar únicamente las celdas que cumplan con un determinado criterio";
choices[28] = new Array();
choices[28][0] = "SUMAR.SOLO";
choices[28][1] = "SUMAR.SI";
choices[28][2] = "COINCIDIR";
choices[28][3] = "No existe esta función en Excel";
answers[28] = 1;
units[28] = "work_5";

questions[29] = "30. En Excel, ¿Cuál es el significado del error #DIV/0!?";
choices[29] = new Array();
choices[29][0] = "No se puede realizar una división por cero.";
choices[29][1] = "El contenido de la celda es superior al ancho de la columna.";
choices[29][2] = "El resultado de una operación ha sobrepasado los límites de Excel y por lo tanto no puede ser desplegado.";
choices[29][3] = "Referencia de celda no válida.";
answers[29] = 0;
units[29] = "work_5";

questions[30] = "31. Observa la siguiente figura, ¿Sabrías decir cual es el resultado de la función que aparece en ella?";
choices[30] = new Array();
choices[30][0] = "Esperar";
choices[30][1] = "Cobrar";
choices[30][2] = "#N/A";
choices[30][3] = "#¡VALOR!";
answers[30] = 1;
units[30] = "work_5";

questions[31] = "32. Indica la categoría en la que se encuentra englobada la función de Excel, CONTAR.SI()";
choices[31] = new Array();
choices[31][0] = "Matemáticas";
choices[31][1] = "Lógicas";
choices[31][2] = "Estadísticas";
choices[31][3] = "Búsqueda y referencia";
answers[31] = 2;
units[31] = "work_5";

questions[32] = "33. En Excel, ¿Qué ocurre si comenzamos a escribir una fórmula con un signo + o un signo - ?";
choices[32] = new Array();
choices[32][0] = "Excel devolverá un error, porque siempre hay que empezar con un signo igual";
choices[32][1] = "No ocurre nada, Excel añadirá el signo = al principio de la fórmula cuando terminemos de escribirla";
choices[32][2] = "El resultado no será el esperado a no utilizar correctamente la sintaxis de las fórmulas";
choices[32][3] = "Ninguna de las respuestas anteriores es correcta";
answers[32] = 1;
units[32] = "work_5";

questions[33] = "34. Indica los valores admitidos para el tamaño de fuente en Excel";
choices[33] = new Array();
choices[33][0] = "1 - 409";
choices[33][1] = "1 - 1638";
choices[33][2] = "0,5 - 64";
choices[33][3] = "1 - 3600";
answers[33] = 0;
units[33] = "work_5";

questions[34] = "35. Tenemos una hoja de cálculo de Excel con una gran cantidad de información sobre ventas de productos y necesitamos encontrar alguna forma de obtener unresumen de los datos y los importes de ventas. ¿Qué comando podemos utilizar para solucionar este problema?";
choices[34] = new Array();
choices[34][0] = "Comando Agrupar";
choices[34][1] = "Comando Análisis";
choices[34][2] = "Comando Subtotal";
choices[34][3] = "Comando Resumen";
answers[34] = 2;
units[34] = "work_5";

questions[35] = "36. En la pestaña Diseño de gráfico de Excel asociada a los gráficos de datos se encuentra el comando Cambiar fila/columna. ¿Cuál de las siguientes respuestas corresponde con el propósito de este comando?";
choices[35] = new Array();
choices[35][0] = "Intercambia los datos entre las filas y columna del gráfico";
choices[35][1] = "Separa en dos gráficos distintos los datos de las filas y de las columnas";
choices[35][2] = "Cambia el tipo de gráfico utilizado para representar las filas y columnas";
choices[35][3] = "Sustituye los valores originales asociados a las filas y columnas del gráfico por nuevos rangos";
answers[35] = 0;
units[35] = "work_5";

questions[36] = "37. La función “=REDONDEAR(B3;-2)”:";
choices[36] = new Array();
choices[36][0] = "Dará un error como resultado";
choices[36][1] = "Redondea el valor B3 al valor más cercano a -2";
choices[36][2] = "Redondea el valor B3 y le resta 2";
choices[36][3] = "Ninguna es correcta";
answers[36] = 3;
units[36] = "work_5";

questions[37] = "38. Un gráfico en Excel puede tener:";
choices[37] = new Array();
choices[37][0] = "Eje X";
choices[37][1] = "Eje X, Eje Y";
choices[37][2] = "Eje X, Eje Y, Eje Z";
choices[37][3] = "Ninguna es correcta";
answers[37] = 2;
units[37] = "work_5";

questions[38] = "39. Que comando deberíamos utilizar si necesitamos crear un duplicado exacto del libro activo para trabajar con ambos al mismo tiempo.";
choices[38] = new Array();
choices[38][0] = "Ampliar selección";
choices[38][1] = "Nueva ventana";
choices[38][2] = "Dividir";
choices[38][3] = "Cambiar ventanas";
answers[38] = 1;
units[38] = "work_5";

questions[39] = "40. Hemos compartido un libro en Excel para trabajar de forma colaborativa en su edición con otros usuarios, ¿Cuál sería el número máximo de personas que pueden abrir el archivo al mismo tiempo?";
choices[39] = new Array();
choices[39][0] = "64";
choices[39][1] = "128";
choices[39][2] = "32";
choices[39][3] = "256";
answers[39] = 3;
units[39] = "work_5";

questions[40] = "41. Microsoft Excel nos permite cambiar la apariencia de los datos de una hoja de cálculo cambiando:";
choices[40] = new Array();
choices[40][0] = "La fuente de los datos de una celda";
choices[40][1] = "La fuente y el tamaño de los datos de una celda";
choices[40][2] = "La fuente, el tamaño y estilo de los datos de una celda";
choices[40][3] = "La fuente, el tamaño, estilo y color de los datos de una celda";
answers[40] = 3;
units[40] = "work_5";

questions[41] = "42. Tenemos una lista de comerciales con diferentes artículos y las cantidades vendidas por cada uno de ellos. Existe una función en Excel que permite sumar únicamente los valores de un rango que cumplan un determinado criterio. En nuestro caso necesitamos saber el total de ventas del vendedor Juan.";
choices[41] = new Array();
choices[41][0] = "=SI.CONJUNTO.SUMAR(C5:C12;E5:E12;\"Juan\")";
choices[41][1] = "=SUMAR.SI.CONJUNTO(C5:C12;E5:E12;\"Juan\")";
choices[41][2] = "=SUMAR(C5:C12;E5:E12;\"Juan\")";
choices[41][3] = "=SI.SUMAR(C5:C12;E5:E12;\"Juan\")";
answers[41] = 1;
units[41] = "work_5";

questions[42] = "43. Cuál de las siguientes funciones de Excel, permiten eliminar de una celda todos los caracteres no imprimibles:";
choices[42] = new Array();
choices[42][0] = "LIMPIAR()";
choices[42][1] = "ELIMINAR()";
choices[42][2] = "QUITAR()";
choices[42][3] = "BORRAR()";
answers[42] = 0;
units[42] = "work_5";

questions[43] = "44. En Excel, ¿en qué barra podremos encontrar herramientas para realizar zoom sobre la hoja de trabajo?:";
choices[43] = new Array();
choices[43][0] = "En la barra de título";
choices[43][1] = "En la barra de estado";
choices[43][2] = "En la barra de etiquetas";
choices[43][3] = "En la barra de fórmulas";
answers[43] = 1;
units[43] = "work_5";

questions[44] = "45. Indica si alguno de los siguientes errores de Excel no es evaluado por la función SI.ERROR";
choices[44] = new Array();
choices[44][0] = "#N/A";
choices[44][1] = "#¡VALOR!";
choices[44][2] = "#¿NOMBRE?";
choices[44][3] = "Todos los errores anteriores pueden ser evaluados por la función SI.ERROR";
answers[44] = 3;
units[44] = "work_5";

questions[45] = "46. Una empresa con sedes en distintos países necesita conocer los datos de ventas de sus productos. ¿Qué métodos o herramientas podemos utilizar en Excel para elaborar un informe conjunto de resultados?";
choices[45] = new Array();
choices[45][0] = "El comando Consolidar";
choices[45][1] = "Las tablas dinámicas";
choices[45][2] = "Referencias 3d) en fórmulas";
choices[45][3] = "Las tres respuestas anteriores son correctas";
answers[45] = 3;
units[45] = "work_5";

questions[46] = "47. La siguiente figura corresponde con una de las opciones disponibles en el grupo Organizar de la pestaña Disposición de página de la cinta de opciones de Excel";
choices[46] = new Array();
choices[46][0] = "Traer adelante";
choices[46][1] = "Girar";
choices[46][2] = "Enviar atrás";
choices[46][3] = "Agrupar";
answers[46] = 2;
units[46] = "work_5";

questions[47] = "48. Queremos solicitar un crédito bancario y tenemos claro tanto el importe que necesitamos como el valor máximo que podemos pagar cada mes. ¿Qué herramienta de Excel podemos utilizar para calcular el tipo de interés que permita cumplir nuestros propósitos?";
choices[47] = new Array();
choices[47][0] = "Administrador de escenarios";
choices[47][1] = "Solver";
choices[47][2] = "Tablas dinámicas";
choices[47][3] = "Buscar objetivo";
answers[47] = 3;
units[47] = "work_5";

questions[48] = "49. ¿Cuál de las siguientes no es una función lógica?:";
choices[48] = new Array();
choices[48][0] = "FALSO.";
choices[48][1] = "Si.";
choices[48][2] = "Y.";
choices[48][3] = "Cos.";
answers[48] = 3;
units[48] = "work_5";

questions[49] = "50. Entre las opciones disponibles en el comando Rellenar, incluido en el grupo Edición de la pestaña Inicio, indica cual permite combinar el contenido de varias celdas tal y como muestra la figura";
choices[49] = new Array();
choices[49][0] = "Hacia abajo";
choices[49][1] = "Relleno rápido";
choices[49][2] = "Justificar";
choices[49][3] = "Series";
answers[49] = 2;
units[49] = "work_5";