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

questions[0]= "1) Cuál de los siguientes dispositivos es considerado un periférico de entrada?";
choices[0]= new Array();
choices[0][0] = "Monitor no táctil";
choices[0][1] = "Teclado";
choices[0][2] = "Impresora";
choices[0][3] = "Altavoces";
answers[0] = 1;
units[0] = "work_1";

questions[1]= "2) Cuál de las siguientes opciones es un componente fundamental de un ordenador?";
choices[1]= new Array();
choices[1][0] = "Teclado";
choices[1][1] = "Ratón";
choices[1][2] = "Altavoz";
choices[1][3] = "Procesador";
answers[1] = 3;
units[1] = "work_1";

questions[2]= "3) Qué es Windows 10?";
choices[2]= new Array();
choices[2][0] = "Una suite de productividad";
choices[2][1] = "Un sistema operativo";
choices[2][2] = "Un programa de edición de imágenes";
choices[2][3] = "Un navegador web.";
answers[2] = 1;
units[2] = "work_2";

questions[3]= "4) Qué se puede hacer con las ventanas en Windows 10?";
choices[3]= new Array();
choices[3][0] = "Mover y redimensionar";
choices[3][1] = "Bloquear las barras de desplazamiento";
choices[3][2] = "Cerrarlas solo desde el menú Inicio";
choices[3][3] = "Cambiar su nombre";
answers[3] = 0;
units[3] = "work_2";

questions[4]= "5) Qué es el Centro de Actividades en Windows 10?";
choices[4]= new Array();
choices[4][0] = "Un área de almacenamiento en la nube";
choices[4][1] = "Una herramienta para administrar las aplicaciones instaladas";
choices[4][2] = "Una herramienta para agregar tareas y crear eventos en el calendario";
choices[4][3] = "Es una ubicación centralizada donde se pueden ver notificaciones y realizar acciones para que Windows funcione sin problemas";
answers[4] = 3;
units[4] = "work_2";

questions[5]= "6) Qué es BitLocker en Windows 10?";
choices[5]= new Array();
choices[5][0] = "Una herramienta de virtualización de sistemas";
choices[5][1] = "Una función de cifrado de volúmenes completos para proteger datos sensibles";
choices[5][2] = "Un cifrado para la protección de determinados ejecutables del sistema operativo";
choices[5][3] = "Un programa de control parental";
answers[5] = 1;
units[5] = "work_2";

questions[6]= "7) Cuál es la combinación de teclas para abrir el Explorador de archivos en Windows 10?";
choices[6]= new Array();
choices[6][0] = "Alt + E";
choices[6][1] = "Win + E";
choices[6][2] = "Ctrl + E";
choices[6][3] = "Shift + E";
answers[6] = 1;
units[6] = "work_3";

questions[7]= "8) Cuál es la función principal del Explorador de archivos de Windows 10?";
choices[7]= new Array();
choices[7][0] = "Navegar por internet";
choices[7][1] = "Gestionar archivos y carpetas";
choices[7][2] = "Desinstalar aplicaciones";
choices[7][3] = "Reproducir música";
answers[7] = 1;
units[7] = "work_3";

questions[8]= "9) Cuál es el orden predeterminado en que se muestran los archivos en el Explorador de archivos en Windows 10?";
choices[8]= new Array();
choices[8][0] = "Por fecha de creación";
choices[8][1] = "Por orden alfabético";
choices[8][2] = "Por tamaño";
choices[8][3] = "Por tipo de archivo";
answers[8] = 1;
units[8] = "work_3";

questions[9]= "10) Cuál de las siguientes opciones permite crear una nueva carpeta en el Explorador de archivos en Windows 10?";
choices[9]= new Array();
choices[9][0] = "Botón derecho del ratón > Nuevo > Carpeta";
choices[9][1] = "Pestaña Editar > Nueva carpeta";
choices[9][2] = "Pestaña Ver > Nueva carpeta";
choices[9][3] = "Pestaña Herramientas > Nueva carpeta";
answers[9] = 0;
units[9] = "work_3";

questions[10]= "11) Para qué sirve la función de búsqueda en el Explorador de archivos en Windows 10?";
choices[10]= new Array();
choices[10][0] = "Buscar archivos únicamente de Office";
choices[10][1] = "Buscar archivos por su contenido o nombre";
choices[10][2] = "Buscar actualizaciones del sistema";
choices[10][3] = "Buscar archivos únicamente en unidades externas USB";
answers[10] = 1;
units[10] = "work_3";

questions[11]= "12) Cuál es la extensión de archivo predeterminada de los documentos de Word 2019?";
choices[11]= new Array();
choices[11][0] = "xlsx";
choices[11][1] = "docx";
choices[11][2] = "ppt";
choices[11][3] = "pdf";
answers[11] = 1;
units[11] = "work_4";

questions[12]= "13) Dónde se agrupan los distintos comandos de Word 2019 para completar tareas?";
choices[12]= new Array();
choices[12][0] = "En la Cinta de opciones";
choices[12][1] = "En el Menú desplegable";
choices[12][2] = "En la Barra de estado";
choices[12][3] = "En la Barra de título";
answers[12] = 0;
units[12] = "work_4";

questions[13]= "14) Cuál de las siguientes opciones es una forma de ver el documento en Word 2019?";
choices[13]= new Array();
choices[13][0] = "Vista Nativa";
choices[13][1] = "Vista Diseño de impresión";
choices[13][2] = "Vista Móvil";
choices[13][3] = "Vista Hoja de cálculo";
answers[13] = 1;
units[13] = "work_4";

questions[14]= "15) Qué comando se utiliza para almacenar un documento por primera vez en Word 2019?";
choices[14]= new Array();
choices[14][0] = "Guardar";
choices[14][1] = "Salvar y cerrar";
choices[14][2] = "Importar";
choices[14][3] = "Archivar";
answers[14] = 0;
units[14] = "work_4";

questions[15]= "16) En Word 2019, ¿qué función permite a los usuarios combinar una lista de destinatarios con un documento principal para generar múltiples copias personalizadas?";
choices[15]= new Array();
choices[15][0] = "Combinar correspondencia";
choices[15][1] = "Insertar vínculos";
choices[15][2] = "Aplicar estilos";
choices[15][3] = "Guardar como PDF";
answers[15] = 0;
units[15] = "work_4";

questions[16]= "17) Cuál de las siguientes opciones permite organizar la información de manera jerárquica en un documento de Word 2019?";
choices[16]= new Array();
choices[16][0] = "Notas al pie";
choices[16][1] = "Control de cambios";
choices[16][2] = "Vista Esquema";
choices[16][3] = "Bibliografía";
answers[16] = 2;
units[16] = "work_4";

questions[17]= "18) Desde qué pestaña de la Cinta de opciones de Word 2019 se pueden agregar encabezados y pies de página en un documento?";
choices[17]= new Array();
choices[17][0] = "Insertar";
choices[17][1] = "Diseño";
choices[17][2] = "Referencias";
choices[17][3] = "Estilos";
answers[17] = 0;
units[17] = "work_4";

questions[18]= "19) En Word 2019, ¿hay alguna manera de aplicar opciones de formato como el tamaño de fuente, el color y la sangría de texto de forma automática a varios párrafos?";
choices[18]= new Array();
choices[18][0] = "Sí, utilizando Estilos";
choices[18][1] = "No, no se pueden aplicar de forma automática, hay que ir aplicando los formatos uno a uno";
choices[18][2] = "Solo se puede hacer utilizando Macros de VB";
choices[18][3] = "Se podría hacer únicamente utilizando Add-on de terceros";
answers[18] = 0;
units[18] = "work_4";

questions[19]= "20) Desde qué pestaña de la Cinta de opciones de Word 2019 se puede cambiar la orientación de página del documento?";
choices[19]= new Array();
choices[19][0] = "Diseño";
choices[19][1] = "Márgenes";
choices[19][2] = "Revisar";
choices[19][3] = "Disposición";
answers[19] = 3;
units[19] = "work_4";

questions[20]= "21) Desde qué pestaña de la Cinta de opciones de Word 2019 se puede cambiar el Fondo de página del documento?";
choices[20]= new Array();
choices[20][0] = "Diseño";
choices[20][1] = "Archivo";
choices[20][2] = "Formato";
choices[20][3] = "Vista";
answers[20] = 0;
units[20] = "work_4";

questions[21]= "22) Cómo se despliegan las Opciones Avanzadas en Word 2019?";
choices[21]= new Array();
choices[21][0] = "Desde la Cinta de opciones, en la pestaña Diseño, en el grupo de comandos Configuración";
choices[21][1] = "Desde la Cinta de opciones, en la pestaña Configuración, en el grupo de comandos Avanzadas";
choices[21][2] = "Desde la Cinta de opciones, en la pestaña Archivo, Opciones y Avanzadas";
choices[21][3] = "En Word 2019 no hay Opciones Avanzadas";
answers[21] = 2;
units[21] = "work_4";

questions[22]= "23) Cuál de las siguientes opciones se encuentra en la pestaña 'Vista' de la Cinta de opciones de Word 2019?";
choices[22]= new Array();
choices[22][0] = "Guardar como";
choices[22][1] = "Cambiar mayúsculas y minúsculas";
choices[22][2] = "Líneas de la cuadrícula";
choices[22][3] = "Insertar tabla";
answers[22] = 2;
units[22] = "work_4";

questions[23]= "24) La intersección de una Fila con una Columna en Excel 2019 se llama:";
choices[23]= new Array();
choices[23][0] = "Celda";
choices[23][1] = "Fórmula";
choices[23][2] = "Tabla";
choices[23][3] = "Libro";
answers[23] = 0;
units[23] = "work_5";

questions[24]= "25) Cómo se llama cada uno de los archivos de Excel 2019 que pueden contener múltiples hojas de cálculo?";
choices[24]= new Array();
choices[24][0] = "Carpeta";
choices[24][1] = "Celda";
choices[24][2] = "Columna";
choices[24][3] = "Libro";
answers[24] = 3;
units[24] = "work_5";

questions[25]= "26) Qué acción se utiliza para ingresar datos en una Celda en Excel 2019?";
choices[25]= new Array();
choices[25][0] = "Copiar";
choices[25][1] = "Ordenar";
choices[25][2] = "Editar";
choices[25][3] = "Borrar";
answers[25] = 2;
units[25] = "work_5";

questions[26]= "27) Cuál de las siguientes opciones no es una Categoría de Formato de celda en Excel 2019?";
choices[26]= new Array();
choices[26][0] = "Moneda";
choices[26][1] = "Porcentaje";
choices[26][2] = "Fecha";
choices[26][3] = "Parámetro";
answers[26] = 3;
units[26] = "work_5";

questions[27]= "28) Qué es el Inspector de documento en Excel 2019?";
choices[27]= new Array();
choices[27][0] = "En Excel 2019 no existe ningún Inspector de documento";
choices[27][1] = "Es una herramienta para examinar del documento las propiedades, la información personal, los comentarios, etc.";
choices[27][2] = "Es la herramienta para la revisión de Ortografía y Gramática";
choices[27][3] = "Es una herramienta que analiza las celdas del documento con contenido y revisa que este sea correcto en cuanto formato, fórmulas, etc.";
answers[27] = 1;
units[27] = "work_5";

questions[28]= "29) Cuál de las siguientes tareas se realiza normalmente en una hoja de cálculo?";
choices[28]= new Array();
choices[28][0] = "Navegación web";
choices[28][1] = "Redactar textos con formato";
choices[28][2] = "Editar imágenes";
choices[28][3] = "Organizar y analizar datos";
answers[28] = 3;
units[28] = "work_5";

questions[29]= "30) Cuál de las siguientes fórmulas se utiliza para sumar los valores contenidos en un rango de celdas en Excel 2019?";
choices[29]= new Array();
choices[29][0] = "MEDIA()";
choices[29][1] = "SUMA()";
choices[29][2] = "CONTAR()";
choices[29][3] = "MAX()";
answers[29] = 1;
units[29] = "work_5";

questions[30]= "31) En Excel 2019, ¿qué tipo de gráfico se utiliza para mostrar las proporciones del total?";
choices[30]= new Array();
choices[30][0] = "Gráfico de barras";
choices[30][1] = "Gráfico circular";
choices[30][2] = "Gráfico de líneas";
choices[30][3] = "Gráfico de dispersión";
answers[30] = 1;
units[30] = "work_5";

questions[31]= "32) Qué pestaña de la Cinta de opciones de Excel 2019 se utiliza para acceder a la Biblioteca de funciones?";
choices[31]= new Array();
choices[31][0] = "Inicio";
choices[31][1] = "Insertar";
choices[31][2] = "Fórmulas";
choices[31][3] = "Revisar.";
answers[31] = 2;
units[31] = "work_5";

questions[32]= "33) Cuál de las siguientes opciones no se puede personalizar al crear un estilo de celda en Excel 2019?";
choices[32]= new Array();
choices[32][0] = "Alineación";
choices[32][1] = "Orden";
choices[32][2] = "Fuente";
choices[32][3] = "Bordes";
answers[32] = 1;
units[32] = "work_5";

questions[33]= "34) En Excel 2019, ¿es posible cambiar el formato de celda según su valor o contenido?";
choices[33]= new Array();
choices[33][0] = "No";
choices[33][1] = "Sí, utilizando Formato Condicional";
choices[33][2] = "Sí, utilizando Validación de Datos";
choices[33][3] = "Solamente se podría hacer desde una Macro de VB";
answers[33] = 1;
units[33] = "work_5";

questions[34]= "35) En Excel 2019, en Formato de Celdas, ¿qué diferencia hay entre 'Ajustar Texto' y 'Reducir hasta ajustar'?";
choices[34]= new Array();
choices[34][0] = "Ninguna, las dos opciones se comportan igual";
choices[34][1] = "“Reducir hasta ajustar” fue suprimida a partir de la versión Excel 2013";
choices[34][2] = "'Ajustar texto' hace que el texto de la celda se ajuste al ancho asignado de la celda. “Reducir hasta ajustar” reduce el tamaño de fuente del texto de la celda para que el texto se ajuste al tamaño actual de la celda sin ajustar";
choices[34][3] = "'Ajustar texto' muestra únicamente el texto de la celda que su tamaño permite para evitar variar la dimensión de la celda. 'Reducir hasta ajustar' varía el tamaño de la celda para permitir ver todo el texto contenido";
answers[34] = 2;
units[34] = "work_5";

questions[35]= "36) Cuál de los siguientes Tipos de reglas no es elegible en la aplicación de un Formato Condicional en Excel 2019?";
choices[35]= new Array();
choices[35][0] = "Aplicar formato únicamente a las celdas que contengan";
choices[35][1] = "Aplicar formato únicamente a los valores con rango inferior o superior";
choices[35][2] = "Aplicar formato únicamente a los valores únicos o duplicados";
choices[35][3] = "Aplicar formato únicamente a los valores con longitud de texto superior";
answers[35] = 1;
units[35] = "work_5";

questions[36]= "37) Cuál de las siguientes opciones describe qué es Internet?";
choices[36]= new Array();
choices[36][0] = "Un programa de navegación web";
choices[36][1] = "Una red de redes que conecta dispositivos y servicios en todo el mundo";
choices[36][2] = "Un tipo de virus informático";
choices[36][3] = "Un dispositivo de almacenamiento externo";
answers[36] = 3;
units[36] = "work_7";

questions[37]= "38) Cuál de las siguientes opciones es un servicio común en Internet?";
choices[37]= new Array();
choices[37][0] = "Correo electrónico";
choices[37][1] = "Procesador de textos";
choices[37][2] = "Hoja de cálculo";
choices[37][3] = "Reproductor de música";
answers[37] = 0;
units[37] = "work_7";

questions[38]= "39) Qué es un protocolo en Internet?";
choices[38]= new Array();
choices[38][0] = "Un conjunto de reglas y procedimientos para el intercambio de datos en una red";
choices[38][1] = "Un tipo de programa de ofimática utilizado para crear presentaciones";
choices[38][2] = "Una función especial en un navegador web";
choices[38][3] = "Un tipo de virus informático";
answers[38] = 0;
units[38] = "work_7";

questions[39]= "40) Cuál es la función principal de los complementos o extensiones en un navegador web?";
choices[39]= new Array();
choices[39][0] = "Herramientas adicionales que añaden funcionalidades al navegador";
choices[39][1] = "Realizar búsquedas en Internet";
choices[39][2] = "Acceder al historial de sitios web visitados";
choices[39][3] = "Definir los parámetros de configuración del navegador";
answers[39] = 0;
units[39] = "work_7";

questions[40]= "41) Cuál es el protocolo utilizado para el envío de correos electrónicos?";
choices[40]= new Array();
choices[40][0] = "HTTP";
choices[40][1] = "FTP";
choices[40][2] = "SMTP";
choices[40][3] = "IP";
answers[40] = 2;
units[40] = "work_8";

questions[41]= "42) Qué función principal tiene Outlook 2019?";
choices[41]= new Array();
choices[41][0] = "Crear hojas de cálculo";
choices[41][1] = "Editar imágenes";
choices[41][2] = "Administrar correos electrónicos y calendarios";
choices[41][3] = "Navegar por Internet";
answers[41] = 2;
units[41] = "work_8";

questions[42]= "43) Cómo se llama el área en Outlook 2019 donde se muestra la lista de correos electrónicos recibidos?";
choices[42]= new Array();
choices[42][0] = "Panel de navegación";
choices[42][1] = "Barra de herramientas";
choices[42][2] = "Área de lectura";
choices[42][3] = "Bandeja de entrada";
answers[42] = 3;
units[42] = "work_8";

questions[43]= "44) Cuál es la función principal del campo 'Asunto' en un mensaje de correo electrónico?";
choices[43]= new Array();
choices[43][0] = "Identificar el remitente del mensaje";
choices[43][1] = "Indicar el tema o contenido del mensaje";
choices[43][2] = "Establecer la prioridad del mensaje";
choices[43][3] = "Adjuntar un archivo al mensaje";
answers[43] = 1;
units[43] = "work_8";

questions[44]= "45) Qué significa compartir archivos y carpetas en OneDrive?";
choices[44]= new Array();
choices[44][0] = "Que se pueden enviar archivos por correo electrónico";
choices[44][1] = "Los archivos y carpetas se vuelven automáticamente públicos y accesibles para cualquier persona";
choices[44][2] = "Que se pueden otorgar permisos de acceso a personas específicas";
choices[44][3] = "Que solo se pueden compartir archivos de texto";
answers[44] = 2;
units[44] = "work_6";

questions[45]= "46) Cuál de las siguientes afirmaciones es correcta sobre Teams?";
choices[45]= new Array();
choices[45][0] = "Es una herramienta de edición de videos";
choices[45][1] = "Permite realizar llamadas telefónicas";
choices[45][2] = "Solo se puede acceder a través de una aplicación de escritorio";
choices[45][3] = "Permite la comunicación por videoconferencia";
answers[45] = 3;
units[45] = "work_6";

questions[46]= "47) Cuál es la finalidad principal de la comunicación por chat en Teams?";
choices[46]= new Array();
choices[46][0] = "Enviar mensajes de correo electrónico";
choices[46][1] = "Tomar el control del escritorio de cualquier miembro del grupo";
choices[46][2] = "Teams no dispone de chat, solo sirve para videoconferencias";
choices[46][3] = "Permite conectarse con otras personas, mantenerse al día de los proyectos";
answers[46] = 3;
units[46] = "work_6";

questions[47]= "48) Sobre Teams, de las siguientes afirmaciones indique cuál es falsa:";
choices[47]= new Array();
choices[47][0] = "Las reuniones en Teams incluyen uso compartido de pantalla, audio y vídeo";
choices[47][1] = "No hay que ser miembro de la organización para unirse a una reunión de Teams";
choices[47][2] = "Para unirse a una reunión de Teams se puede utilizar un vínculo";
choices[47][3] = "Para unirse a una reunión hay que tener como mínimo una cuenta de Teams";
answers[47] = 3;
units[47] = "work_6";

questions[48]= "49) Cuál de las siguientes afirmaciones es falsa?";
choices[48]= new Array();
choices[48][0] = "El Firewall debe colocarse antes del router para monitorizar los paquetes de datos antes de que estos entren en la red";
choices[48][1] = "Un firewall es un sistema diseñado para proteger las redes del acceso no autorizado y no verificado en una conexión a Internet";
choices[48][2] = "Los Firewall pueden ser de tipo hardware o software, o una combinación de ambos";
choices[48][3] = "Los Firewall pueden configurarse para impedir el acceso a usuarios de la red a sitios externos";
answers[48] = 0;
units[48] = "work_1";

questions[49]= "50) Cuál de las siguientes afirmaciones es falsa sobre los formatos Open XML?";
choices[49]= new Array();
choices[49][0] = "Microsoft Office usa los formatos de archivo basados en XML, como .docx, .xlsx";
choices[49][1] = "Los archivos en formato Open XML se estructuran de una forma modular que mantiene los diferentes componentes de datos del archivo independientes entre sí";
choices[49][2] = "Los archivos con formato Open XML solo pueden ser abiertos por el paquete ofimático LibreOffice";
choices[49][3] = "El formato Open XML usa tecnología de compresión zip para almacenar los documentos";
answers[49] = 2;
units[49] = "work_7";

questions[50]= "51) Para el Mensaje de error de la Validación de datos, ¿qué tres tipos de Estilo se pueden activar en Excel 2019?:";
choices[50]= new Array();
choices[50][0] = "Alto, Medio y Bajo.";
choices[50][1] = "Alto, Advertencia e Información.";
choices[50][2] = "Advertencia y Error.";
choices[50][3] = "Advertencia, Error y No admisible.";
answers[50] = 1;
units[50] = "work_5";

questions[51]= "52) De los siguientes protocolos, ¿cuál es el utilizado para la transferencia de archivos entre sistemas conectados a una red, basado en la arquitectura cliente-servidor?";
choices[51]= new Array();
choices[51][0] = "DHCP";
choices[51][1] = "DNS";
choices[51][2] = "FTP";
choices[51][3] = "IMAP";
answers[51] = 2;
units[51] = "work_7";