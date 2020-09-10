import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import SubTitle from "components/blocks/SubTitle";
import Paragraph from "components/blocks/Paragraph";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import StoryMedia from "components/StoryMedia";
import FeaturedText from "components/blocks/FeaturedText";
import Table from "components/blocks/Table";
import Quote from "components/blocks/Quote";
import Note from "components/blocks/Note";
import Board from "components/blocks/Board";
import { FormattedMessage } from "react-intl";
import Author from "components/blocks/Author";
import FullBlock from "components/blocks/Full";

export default () => (
  <article>
    <Helmet>
      <title>Alrededor Del Mundo | Venezuela, el paraíso de los contrabandi$tas.</title>
    </Helmet>
    <Container>
      <Title as="h2">El oro venezolano termina secretamente en los mercados internacionales</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter5"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          El oro proveniente de fuentes no éticas de Venezuela ingresa a las cadenas de suministro mundiales luego de ser ‘lavado’ en países vecinos como Colombia y islas del Caribe. A pesar de las sanciones internacionales y directrices de debida diligencia, aerolíneas siguen volando con oro a los mercados europeos y estadounidenses.
        </p>
      </Note>

      <Paragraph>
        En una refinería con un alto nivel de seguridad en Amberes, Bélgica, dos hombres vierten oro líquido a más de 1.160 grados Celsius en moldes del tamaño de un teléfono móvil.
      </Paragraph>

      <Paragraph>
        Cuando se observan las barras del preciado metal – que usan bancos, joyeros y fabricantes de dispositivos electrónicos – no hay forma de decir de dónde proviene ni cuánta sangre se derramó para extraerlo.
      </Paragraph>

      <Paragraph>
        Pero según los documentos filtrados por la aduana de Aruba, el oro venezolano – en su mayor parte extraído ilegalmente y que apoya al régimen cada vez más autocrático en Caracas – está llegando a la cadena mundial de suministro de oro y termina en Estados Unidos, Europa y el Medio Oriente.
      </Paragraph>

      <Paragraph>
        Gracias a reglas anticuadas, el preciado metal salta por el Caribe y llega a grandes refinerías a miles de kilómetros de distancia, que a veces lavan inadvertidamente ese “oro de sangre”, oscureciendo el devastador impacto y los crímenes que rodean sus orígenes.
      </Paragraph>

      <Paragraph>
        Washington ha estado aumentando la presión sobre Venezuela en momentos que intenta sacar al presidente Nicolás Maduro del poder. Como parte de ese esfuerzo, en marzo, el Departamento del Tesoro de Estados Unidos implementó sanciones contra la compra de oro a la minera estatal venezolana, Minerven.
      </Paragraph>

      <Paragraph>
        “El régimen ilegítimo de Maduro está saqueando las riquezas de Venezuela al tiempo que pone en riesgo la vida de los pueblos indígenas, devastando áreas protegidas y deforestando y acabando con el hábitat”, afirmó el <ExternalLink href="https://home.treasury.gov/news/press-releases/sm631" language="en">Secretario del Tesoro de Estados Unidos, Steven Mnuchin, en una declaración de 19 de marzo mientras anunciaba las sanciones</ExternalLink>{" "}. “Perseguiremos enérgicamente a los involucrados en el comercio ilícito e irresponsable de oro de Maduro que ha contribuido a la crisis financiera, humanitaria y medioambiental”.
      </Paragraph>

      <Paragraph>
        Lo más probable es que las <ExternalLink href="https://www.crisisgroup.org/latin-america-caribbean/andes/venezuela/073-gold-and-grief-venezuelas-violent-south" language="en">sanciones aumenten el tráfico del mineral</ExternalLink>{" "} y contribuyan al fortalecimiento financiero del crimen organizado.  Esto significa que Estados Unidos puede haberle hecho un favor a los criminales involucrados, como los disidentes del Ejército de Liberación Nacional (ELN) y las Fuerzas Revolucionarias de Colombia (FARC), ambos en la lista de terroristas de Estados Unidos.
      </Paragraph>

      <Paragraph>
        El grupo rebelde de Colombia ELN es el grupo guerrillero más antiguo y grande de Latinoamérica luego de que las FARC se desmovilizaran en el 2017. Mientras tanto, el oro de Venezuela sigue llegando a los mercados internacionales, incluyendo Estados Unidos. Los países por donde pasa el oro, muchas veces naciones que exportan grandes cantidades del metal pero que no tienen minas, refinerías ni depósitos propios, son un paso intermedio clave para oscurecer su origen.
      </Paragraph>

      <Paragraph>
        Las islas caribeñas holandesas de Curazao y Aruba pertenecen a esta categoría.
      </Paragraph>

      <Paragraph>
        Según fuentes gubernamentales y documentos filtrados, salieron al menos 130 toneladas de oro de Curazao y unas 30 toneladas de Aruba entre 2014 y 2018; de ese total, 90% procedió de Venezuela. Aunque ese oro importado parece tener los documentos en orden, autoridades de las islas dicen que su origen es dudoso, en el mejor de los casos.
      </Paragraph>

      <Paragraph>
        Esos documentos también confirman que el oro entra a las islas procedente de Venezuela en vuelos privados, a veces yendo de una isla a otra, lo que oscurece incluso más la ruta.
      </Paragraph>

      <Paragraph>
        Al final, el oro se envía en vuelos comerciales a refinerías en Estados Unidos, los Emiratos Árabes Unidos, Suiza y Bélgica, sin ninguna indicación de que fue extraído en Venezuela.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Reuters / Pascal Lauener - stock.adobe.com",
            src: require("photos/chapter5/Europe03.jpg")
          }
        }}>Y una vez que se mezcla con el oro de otros países, es prácticamente imposible saber su origen</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Es difícil saber quién compra este oro venezolano procedente del Caribe neerlandés. Pero los documentos filtrados de la aduana de Aruba identificaron una empresa en Dubai y dos comerciantes de oro en el llamado Distrito del Diamante de Amberes, uno de los lugares más importantes del mundo para comerciar diamantes.
      </Paragraph>

      <Paragraph>
        Una de esas empresas es Tony Goetz NV, uno de los comerciantes de oro más prominentes de Bélgica y el único que tiene una planta de fundición en el país. Según los documentos aduaneros, la firma compró 46 libras (21 kilos) de oro en diciembre de 2016.
      </Paragraph>

      <Paragraph>
        Vestido casualmente y con mocasines de cuero, el dueño de la refinería en cuestión, Sylvain Goetz, muestra a un visitante la planta, que procesa alrededor de 100 kilos de oro por día. Señala una fila ordenada de lingotes de oro que esperan le graben el sello de la compañía y dijo: “No hay nada mejor que esto. Es oro puro”.
      </Paragraph>

      <Paragraph>
        Al preguntársele por la importación de oro del Caribe neerlandés, dice que no sabe si el envío de 2016 realmente se concretó. Goetz reconoce que su empresa compró oro en las islas hasta hace tres años, pero que ya no compra oro de Venezuela ni de Aruba o Curazao, precisamente porque el origen es muy difícil de determinar.
      </Paragraph>

      <Paragraph>
        “Hace unos años decidimos dejar de cooperar con zonas extranjeras o los llamados países de tránsito”, afirmó.
      </Paragraph>

      <Paragraph>
        En 2017, el gobierno venezolano pidió a Goetz que refinara unas tres toneladas de oro. Pero en una carta al Banco Central de Venezuela,
        <FileLink
        href={require("documents/chapter5/Tony_Goetz-Lette_to_Central_Bank_of_Venezuela.pdf")}
        format="pdf"
        size="0.3MB"> la compañía negó la solicitud, citando la falta de documentos adecuados y transparencia</FileLink>
        .
      </Paragraph>

      <Paragraph>
        “Tenemos razones fundamentadas para creer que ese oro no cumple los requisitos de nuestra política de diligencia debida”, escribió la compañía al Banco Central de Venezuela. “Hubo que tomar esta decisión para evitar daños a la reputación de nuestra empresa”.
      </Paragraph>

      <Paragraph>
        El abogado de la empresa, Bert Luyten, confirmó que en 2017 la junta directiva decidió no importar más oro venezolano.
      </Paragraph>

      <Paragraph>
        Argentor Essayeurs, otro comerciante de oro belga a pocas cuadras de distancia en el Distrito de los Diamantes, también apareció en los documentos filtrados de la aduana de Aruba. Entre enero de 2016 y diciembre de 2017, la compañía importó oro del Caribe neerlandés por valor de 6 millones de dólares. El director Gianni Proost no niega que la empresa comerciaba a través de Aruba y Curazao, pero dice que dejó de hacerlo hace aproximadamente un año.
      </Paragraph>

      <Paragraph>
        “La empresa a la que le comprábamos el oro indicó que provenía de Guyana y Colombia, pero cuando vimos informes sobre el oro venezolano y empezamos a hacer preguntas, sus respuestas evasivas no me convencieron y detuvimos las compras”, dijo Proost. “Todo esto es todavía muy poco transparente”.
      </Paragraph>

      <Paragraph>
        Un caso más claro es el de GoetzGold en Dubai. La compañía es propiedad de Alain Goetz, el hermano menor de Sylvain Goetz. Según los abogados de ambas empresas, las firmas en Dubai y Bélgica están completamente separadas.
      </Paragraph>

      <Paragraph>
        Los documentos aduaneros muestran que entre octubre de 2017 y octubre de 2018 GoetzGold compró 21,8 toneladas de oro al Banco Central de Venezuela, según una <ExternalLink href="https://runrun.es/especiales/fuga_oro/" language="es">investigación publicada a principios de este año por Runrun.es</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Un abogado de GoetzGold dijo en un correo electrónico que cada envío de oro desde Aruba y Curazao proviene “de distribuidores legales y certificados y también es revisado por las autoridades aduaneras”. Pero la compañía no dijo si había comprado oro venezolano.
      </Paragraph>

      <Paragraph>
        La cantidad de oro enviado a Bélgica y Dubai es nada comparada con la enviada a Suiza, donde se refina alrededor del 75% del oro del mundo. Según la Aduana suiza, el país importó 40,090 kilos desde Curazao entre enero de 2015 y abril de 2019, con un valor aduanero de 1,292,336,974 francos suizos, unos 1,300 millones de dólares.
      </Paragraph>

      <Paragraph>
        Las cuatro refinerías suizas más grandes pertenecen a los participantes más poderosos de la industria del oro. Uno de ellos, Valcambi, no respondió a preguntas, diciendo que cualquier respuesta contendría “información sensible de la empresa”.
      </Paragraph>

      <Paragraph>
        Otra, Argor-Heraeus, dijo que se apega a las leyes suizas e internacionales sobre el comercio de oro, y añadió que está “comprometida con la transparencia, la sustentabilidad y el respeto a los derechos humanos”. Sin embargo, no respondió a preguntas específicas sobre el oro procedente de Venezuela, Aruba y Curazao.
      </Paragraph>

      <Paragraph>
        Las otras dos firmas, PAMP y Metalor, dijeron que no están comprando oro a estos países.
      </Paragraph>

      <SubTitle>
        El papel de los Países Bajos
      </SubTitle>

      <Paragraph>
        Los Países Bajos son signatarios de varios tratados y <ExternalLink href="https://www.business-humanrights.org/en/un-guiding-principles" language="en">directrices de las Naciones Unidas</ExternalLink>{" "} que rigen la cadena de suministro de oro y que tienen como objetivo evitar los abusos a los derechos humanos en las minas y mantener el oro “de conflictos” fuera de la cadena de suministro global. En 2017, un llamado “pacto sobre el oro”, supervisado por el Consejo Económico Social de los Países Bajos, reunió al Estado, las corporaciones y las ONGs para acordar un código de comportamiento voluntario que garantice que las empresas adquieran oro de fuentes éticas.
      </Paragraph>

      <Paragraph>
        Y la Organización para la Cooperación y el Desarrollo Económico (OCDE), un bloque intergubernamental de 36 países, incluidos los Países Bajos, proporciona directrices a los miembros sobre la lucha con los minerales provenientes de zonas de conflicto.
      </Paragraph>

      <Paragraph>
        Cuando se trata de oro venezolano, “la violencia política, los informes sobre la venta de reservas de oro en violación de las sanciones, la participación de grupos armados en la región minera y el tráfico transfronterizo de oro son razones para una diligencia debida más estricta”, expresó la organización en un correo electrónico, añadiendo que las empresas deben pensar dos veces antes de comprar oro venezolano.
      </Paragraph>

      <Paragraph>
        A pesar de estas iniciativas, se ha acusado a los Países Bajos de no abordar suficientemente su papel en el comercio del oro venezolano que contribuye a las violaciones de los derechos humanos.
      </Paragraph>

      <Paragraph>
        Ronald van Raak, miembro del Parlamento de ese país, se sorprendió de que el oro venezolano se lave a su paso por Aruba y Curazao.
      </Paragraph>

      <Paragraph>
        “Aunque tienen gobiernos autónomos, los Países Bajos son responsables de la buena gobernanza en las islas”, dijo. “No podemos, como reino, condenar las violaciones de los derechos humanos del gobierno de Maduro y a la vez permitir que las élites corruptas [venezolanas] se enriquezcan a través del mismo reino”.
      </Paragraph>

      <SubTitle>
        Oro por las aerolíneas
      </SubTitle>

      <Paragraph>
        Uno de los participantes clave en este juego global de oscurecer el origen del oro son las aerolíneas comerciales que transportan el mineral.
      </Paragraph>

      <Paragraph>
        A unos 8.000 kilómetros de las
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter5/Europe01.jpg")
          }
        }}> minas ilegales de oro en Venezuela</StoryMedia>
        , una parte significativa de ese oro llega por avión al Aeropuerto de Schiphol de Amsterdam, después de haber pasado por las zonas de tránsito en el Caribe.
      </Paragraph>

      <Paragraph>
        Directivos de Royal Dutch Airlines (KLM) declinaron ser entrevistados para este reportaje, pero indicaron en un correo electrónico que “no están de acuerdo con la caracterización de que grandes cantidades de oro llegan a los Países Bajos en vuelos de KLM procedentes de Curazao”.
      </Paragraph>

      <Paragraph>
        Posteriormente, el portavoz de KLM reconoció que “hubo tres envíos en 2018 y dos en 2019, que pasaron por canales oficiales y se completaron con la aprobación de todas las autoridades”. Debido a la “naturaleza sensible de los envíos”, la aerolínea, que es mayoritariamente propiedad del Estado, se negó a decir más.
      </Paragraph>

      <Paragraph>
        Sin embargo, los funcionarios de la aduana holandesa dicen que las aerolíneas comerciales enviaron mucho más oro que eso. En un correo electrónico, la agencia dijo que desde 2015 hasta 2018 se hicieron un total de 310 envíos de oro desde la Zona Franca de Curazao a Schiphol, para un total de 36.086,5 kilos, por valor de casi 1.500 millones de dólares. La mayoría fue a Suiza y Turquía, dijo. Las estadísticas de los envíos procedentes de Aruba no estaban disponibles.
      </Paragraph>

      <Paragraph>
        En 2021 entrará en vigor una nueva legislación más estricta en la Unión Europea sobre el comercio del oro, que exigirá a las empresas activas en el sector que <ExternalLink href="http://ec.europa.eu/trade/policy/in-focus/conflict-minerals-regulation/index_es.htm" language="es">informen sobre el origen del metal que importan</ExternalLink>{" "}. Pero esto será difícil de cumplir porque el oro extraído de la selva venezolana a menudo se transporta a los países vecinos y se envía a través del Caribe, lo que oscurece su verdadero origen.
      </Paragraph>

      <SubTitle>
        Los minerales de conflicto más finos de Florida
      </SubTitle>

      <Paragraph>
        Con 2.200 kilómetros, la frontera colombo-venezolana es una de las más extensas y menos controladas de Latinoamérica, y el oro que pasa por ella sigue su ruta hacia uno de los mercados de oro más grandes del mundo: Miami.
      </Paragraph>

      <Paragraph>
        Este es el procedimiento de tráfico ilegal utilizado en el centro del sur de la Florida: Grandes cantidades de oro venezolano pasan por la frontera colombiana en auto, avión e incluso en bote o a pie, a veces con la ayuda de sindicatos criminales de Venezuela, grupos guerrilleros o militares corruptos. Los traficantes falsifican documentos para hacer creer que el oro se extrajo legalmente en Colombia. El metal se puede vender, sin ensuciarse las manos, a importadores de Miami y otros países.
      </Paragraph>

      <Paragraph>
        Según un estudio de la OCDE,
        <FileLink
        href={require("documents/chapter5/OECD-Where_does_Colombian_Gold_Go_Spanish.pdf")}
        format="pdf"
        size="2MB"> los importadores de la Florida compraron aproximadamente un tercio de las exportaciones de oro de Colombia en el 2016</FileLink>
        .
      </Paragraph>

      <Paragraph>
        La mayor parte del oro venezolano que llega a Estados Unidos ingresa a través del
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Al Diaz",
            src: require("photos/chapter5/Europe02.jpg")
          }
        }}> Aeropuerto Internacional de Miami</StoryMedia> en barras rudimentarias. Luego se vende a comerciantes del metal en distintos puntos del país, dijeron fuentes policiales, integrantes de la industria y funcionarios del régimen venezolano.
      </Paragraph>

      <Paragraph>
        El oro venezolano también se envía en jets privados a Aruba, que se encuentra a solo 30 kilómetros al norte de la costa de Venezuela. Los datos de exportación de Aruba obtenidos por nuestros reporteros muestran que World Precious Metals, con sede en Miami, recibió seis envíos de oro de la isla en 2014 y 2015. ¿El país de origen del oro en la lista? Venezuela, según los registros aduaneros de Aruba.
      </Paragraph>

      <Paragraph>
        Dos compañías con sede en Miami, una de ellas registrada como World Precious Metals y la otra como WPM Miami Inc., niegan tener alguna vinculación con esas importaciones.
      </Paragraph>

      <Paragraph>
        Los abogados de Vickan Bedoyan y de Harout Samra, los co-dueños de World Precious Metals involucrados actualmente en una disputa comercial, dijeron por separado que sus clientes no eran responsables de operaciones con esas características.
      </Paragraph>

      <SubTitle>
        Abasteciendo a las empresas más grandes
      </SubTitle>

      <Paragraph>
        En abril de 2019, autoridades colombianas <ExternalLink href="https://www.fiscalia.gov.co/colombia/noticias/2-4-billones-de-pesos-fueron-blanqueados-en-operaciones-ficticias-de-compra-y-venta-de-oro/" language="es">presentaron cargos contra el exportador CIJ Gutiérrez</ExternalLink>{" "} por vender oro ilegal. Investigadores de las agencias policiales dijeron para este reportaje que la compañía obtenía metal de minas ilegales de Venezuela y Colombia.
      </Paragraph>

      <Paragraph>
        Registros comerciales muestran que la compañía exportó ese oro a los principales distribuidores de metales preciosos que suministran a grandes compañías como Apple, IBM, General Motors, Ford, Starbucks y Verizon.
      </Paragraph>

      <Paragraph>
        “Mucho oro venezolano está llegando a Miami, pero [disfrazado] de oro colombiano”, dijo Iván Díaz Corzo, ex miembro de la Unidad Nacional contra la Minería Ilegal de la Policía colombiana.
      </Paragraph>

      <Paragraph>
        El año pasado, según sus propias cifras,
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Reuters / Leonhard Foeger - stock.adobe.com",
            src: require("photos/chapter5/Europe04.jpg")
          }
        }}> Colombia produjo 35 toneladas de oro</StoryMedia>
        . Pero el país exportó 45 toneladas.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/MFnP7/2/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Cuando CIJ Gutiérrez fue acusada, los investigadores descubrieron que muchas de las compañías e individuos a los que la firma indicó que había comprado oro entre 2006 y 2016 eran compañías fantasma o personas ficticias, según comunicado emitido por la Fiscalía de Colombia, llevando a más de $700 millones en oro con origen sospechoso. Varios ejecutivos de la empresa fueron detenidos y la fiscalía tomó el control de la compañía.
      </Paragraph>

      <Paragraph>
        Un funcionario de la Fiscalía de Colombia, que habló bajo condición de anonimato, dijo que los investigadores creen que la mayor parte del oro de CIJ Gutiérrez provenía de Colombia, incluyendo metal extraído en operaciones mineras controladas por organizaciones delictivas, pero no descartan la posibilidad de que parte haya salido de Venezuela.
      </Paragraph>

      <Paragraph>
        El exrepresentante legal de CIJ Gutiérrez, Andrés Vieira Gutiérrez, no respondió a solicitudes de declaración sobre el caso. La interventora de la compañía nombrada por el gobierno, Ana Sauda Palomino, dijo en un correo electrónico que no ha encontrado evidencia de que la compañía haya comprado oro venezolano, pero admitió que aún no ha terminado una revisión exhaustiva de los registros de la compañía.
      </Paragraph>

      <Paragraph>
        Palomino también resaltó que la compañía o sus ejecutivos no han sido declarados culpables de delito alguno.
      </Paragraph>

      <Paragraph>
        La oficial agregó que todos los proveedores de la empresa deben cumplir las políticas y procedimientos de la compañía, que dijo se apega a los estándares del sector minero y las normas contra el lavado de dinero.
      </Paragraph>

      <Paragraph>
        Parte del oro de CIJ Gutiérrez fue comprado por compañías estadounidenses, como Republic Metals Corp. (RMC), su único cliente en el sur de Florida y uno de los mayores refinadores del país.
      </Paragraph>

      <Paragraph>
        Republic, que se <ExternalLink href="https://www.miamiherald.com/news/business/article223213905.html" language="en">declaró en bancarrota</ExternalLink>{" "} el año pasado, importó 12,5 millones de dólares en oro de CIJ Gutiérrez entre 2008 y 2012, según datos de la agencia aduanera de Colombia y datos proporcionados por el proveedor de datos de comercio global <ExternalLink href="https://www.importgenius.com/" language="en">Import Genius</ExternalLink>{" "}. Pero esos datos no muestran si la empresa colombiana envió oro venezolano durante ese período.
      </Paragraph>

      <Paragraph>
        En una carta dirigida a nuestros reporteros, el abogado de la familia que era dueña de Republic <ExternalLink href="https://www.miamiherald.com/news/local/crime/article229361954.html" language="en">antes de venderla este año como parte de su declaración de bancarrota</ExternalLink>{" "} dijo que “la pasada relación con Gutiérrez está más allá de la insignificancia” y amenazó con demandar por difamación si Republic es mencionada en este reportaje.
      </Paragraph>

      <Paragraph>
        “Hace más de siete años, RMC recibió tres envíos de prueba de Gutiérrez totalizando menos de 12,5 millones de dólares”, escribió el abogado J. Erik Connolly. “En base a esos envíos de prueba, RMC decidió no entrar en una relación comercial con Gutiérrez o escoger a Gutiérrez como proveedor. La familia implementó programas de controles de primera línea en RMC para eliminar la posibilidad de recibir oro de fuentes indebidas. Los deberían felicitar por sus esfuerzos”.
      </Paragraph>

      <Paragraph>
        En años más recientes, CIJ Gutiérrez ha vendido cantidades mucho mayores de oro a la refinería suiza Argor-Heraeus, y a la de dueños japoneses Asahi, que tiene instalaciones en Salt Lake City, Utah, y que recientemente compró las instalaciones de Republic en Miami.
      </Paragraph>

      <Paragraph>
        Argor-Heraeus, que vende oro a gigantes estadounidenses como Apple, IBM y General Motors, entre otras compañías, compró oro de CIJ Gutiérrez entre 2008 y 2018 por 2.400 millones de dólares, demuestran registros aduaneros.
      </Paragraph>

      <Paragraph>
        Asahi, cuyos clientes incluyen Ford, Starbucks y Verizon, compró 856 millones de dólares a la firma colombiana entre 2015 y 2018, según los mismos registros.
      </Paragraph>

      <Paragraph>
        Asahi declinó pronunciarse sobre sus negocios con CIJ Gutiérrez. Argor-Heraeus dijo en un comunicado que estaba “firmemente comprometido con su responsabilidad de respetar los más altos estándares en su cadena de suministros”, pero no contestó preguntas específicas sobre sus negocios con la compañía colombiana.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="400"
          src="https://datawrapper.dwcdn.net/9FyZJ/2/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Ford dijo en un comunicado: “No estábamos al tanto de este tema previamente, y lo estamos investigando”.
      </Paragraph>

      <Paragraph>
        Agregó que la compañía toma sus “compromisos éticos y de sostenibilidad seriamente” y que “está comprometida con llevar los negocios de manera correcta y en obediencia con las leyes locales”.
      </Paragraph>

      <Paragraph>
        GM, por su parte, dijo que prohíbe a sus proveedores participar en la contratación de menores o en prácticas de corrupción.
      </Paragraph>

      <Paragraph>
        “Al escoger hacer negocios con GM, nuestros proveedores aceptan nuestros términos y condiciones”, dijo la compañía en un pronunciamiento por escrito, “y en el caso de nuestros proveedores más grandes también esperamos que certifiquen anualmente el cumplimiento de estas cláusulas en nuestro contrato. Nosotros hacemos seguimiento de la situación con los proveedores que no confirman el cumplimiento”.
      </Paragraph>

      <Paragraph>
        Apple señaló que el contenido de oro de sus iPhones es de aproximadamente una centésima parte de un gramo, en promedio.
      </Paragraph>

      <Paragraph>
        “Siguiendo una revisión exhaustiva y auditorías de terceros, no estamos al tanto de que el oro de Venezuela llegue a nuestra cadena de suministro”, dijo la compañía en un comunicado. “Cada año, publicamos una lista completa de nuestros refinadores de oro, 100% de los cuales participan en auditorías de terceros. Si un refinador no puede o no está dispuesto a cumplir con nuestros estándares, será eliminado de nuestra cadena de suministro. Desde 2015, hemos dejado de trabajar con 60 refinadores de oro por este motivo”.
      </Paragraph>

      <Paragraph>
        Las otras compañías que compraron oro a Asahi y Argor-Heraeus no respondieron a solicitudes de declaración.
      </Paragraph>

      <Paragraph>
        “Aquí hay mucha gente dispuesta a comprar oro”, dijo un funcionario policial estadounidense al tanto de las investigaciones del contrabando del metal, quien no estaba autorizado para hablar del caso públicamente. “[Los compradores] miran los papeles [de procedencia] pero en realidad no verifican. Si no quieres saber, no lo vas a saber.”
      </Paragraph>
    </Container>
  </article>
);
