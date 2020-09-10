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
      <title>Encrucijada Del Caribe | Venezuela, el paraíso de los contrabandi$tas.</title>
    </Helmet>
    <Container>
      <Title as="h2">La lavandería de oro del Caribe</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter4"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Desde 2014, al menos 160 toneladas de oro venezolano se han movido a través de las islas de Aruba y Curazao. Estos destinos turísticos funcionan como un trampolín para los minerales de conflicto así como el oro venezolano manchado de sangre que cambia su color bajo el sol del Caribe.
        </p>
      </Note>

      <Paragraph>
        Era una tarde de sábado calurosa como cualquier otra en Aruba cuando Rafael González Zambrano pensó haber terminado una operación de rutina, que había desarrollado durante siete años.
      </Paragraph>

      <Paragraph>
        Natural de Venezuela con pasaporte holandés, acababa de ser escoltado hasta su avión por funcionarios de la aduana de Aruba después de declarar todos los bienes que llevaba en el vuelo de KLM al Aeropuerto Schiphol en Amsterdam, con destino final Dubai.
      </Paragraph>

      <Paragraph>
        Zambrano trabaja para la firma Paoro Armored Transport, transportista de oro. En cada viaje se gana alrededor de 1.500 dólares por llevar metales preciosos a clientes internacionales.
      </Paragraph>

      <Paragraph>
        Pero esta vez algo salió mal. Ya estaba sentado en su puesto en el avión cuando un grupo de investigadores penales holandeses, el RST, lo detuvo y arrestó, y decomisó
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "National Crime Agency",
            src: require("photos/chapter4/Caribbean05.jpg")
          }
        }}> 50 kilos de oro que llevaba</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Paoro Armored Transport es apenas una pieza pequeña en la red internacional de joyeros, bancos, transportistas y fundidores que en ocasiones financian indirectamente violaciones a los derechos humanos, alimentan a grupos armados y apoyan a funcionarios venezolanos corruptos facilitándoles la venta de oro.
      </Paragraph>

      <Paragraph>
        Además de Zambrano, el director de Paoro Armored Transport también fue arrestado en lo que se ha convertido en una prueba de fuego para las autoridades que tratan de comprender el alcance de la red internacional de comercio de metales que alimentan el conflicto.
      </Paragraph>

      <Paragraph>
        “Nuestro país vecino”, así es como el Ministro de Asuntos Exteriores de los Países Bajos, Stef Blok, se refiere a Venezuela.  No resulta disparatado aún cuando miles de kilómetros de océano separen a Europa de Latinoamérica, ya que Aruba y Curazao, vestigios tropicales de las aspiraciones coloniales de los neerlandeses, se encuentran a 30 y 70 kilómetros, respectivamente, del país sudamericano.
      </Paragraph>

      <Paragraph>
        Las
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean01.jpg")
          }
        }}> coloridas islas de Aruba y Curazao</StoryMedia> se independizaron como Estados, pero aún pertenecen a los territorios de ultramar del Reino de los Países Bajos. La salud financiera de Aruba y Curazao depende, en gran medida, de Venezuela, en especial de su petróleo, ya que las grandes refinerías que se encuentran en las islas de escasos recursos naturales son los motores de la economía. El colapso total de la industria petrolera de Venezuela las perjudicó especialmente, mostrando la peligrosa falta de otras industrias.
      </Paragraph>

      <Paragraph>
        La ausencia de yacimientos de oro en el Caribe neerlandés hizo que los colonizadores europeos no se fijaran en estas islas siglos atrás, pero a medida que pasó el tiempo se convirtieron en centro de trata de esclavos trasatlánticos, piratas y mercaderes. Resulta sorprendente que más de 500 años después, las islas del Reino de los Países Bajos se hayan convertido en el corazón del comercio de oro de miles de millones de dólares.
      </Paragraph>

      <Paragraph>
        Y buena parte de ese comercio depende del oro ilegal que llega de Venezuela.
      </Paragraph>

      <Paragraph>
        Cliver Alcalá Cordones, general retirado y amigo cercano del fallecido presidente venezolano Hugo Chávez, comandaba soldados en las regiones auríferas al sur del río Orinoco.
      </Paragraph>

      <Paragraph>
        Ahora exiliado en Colombia, Alcalá dijo que ha conocido del tráfico de oro a gran escala a través del Caribe. En 2017 dijo que unas 20 toneladas de oro ilegal venezolano se transportaron al Caribe holandés solamente en 2012, con Europa como destino principal.
      </Paragraph>

      <Paragraph>
        “<ExternalLink href="https://arcominero.infoamazonia.org/story/gold-mining?lang=es" language="es">Va a Aruba y Curazao</ExternalLink>{" "}”, dijo, insistiendo en que la situación no ha cambiado.
      </Paragraph>

      <SubTitle>
        Bloqueo fronterizo
      </SubTitle>

      <Paragraph>
        El papel del Caribe en el comercio de oro venezolano se desconoció durante mucho tiempo, y se hicieron pocas preguntas al respecto. Pero a las llamadas islas ABC (Aruba, Bonaire y Curazao) las tomó por sorpresa la decisión del gobernante Nicolás Maduro en 2018 cuando decidió bloquear todo el tráfico aéreo y marítimo.
      </Paragraph>

      <Paragraph>
        “<ExternalLink href="https://www.nytimes.com/2018/01/06/world/americas/maduro-venezuela-travel-shutdown.html" language="en">Sacan el oro de este país ilegalmente y lo venden allá de forma legal</ExternalLink>{" "}; se llevan el coltán”, dijo Maduro refiriéndose al mineral que se usa en muchos dispositivos electrónicos. “Se llevan los diamantes, se llevan todos los alimentos”.
      </Paragraph>

      <Paragraph>
        El bloqueo tomó totalmente por sorpresa a las islas, dijeron diplomáticos. Y durante reuniones posteriores entre Venezuela, Holanda y las islas, “no se planteó el asunto del oro, ni del coltán”, dijo Stella van Rijn, secretaria general del Ministerio de Asuntos Generales y Exteriores de Curazao.
      </Paragraph>

      <Paragraph>
        El bloqueo continuó hasta abril de 2018, cuando Venezuela lo levantó, para volverlo a imponer en febrero de 2019, cuando aumentaron nuevamente las tensiones geopolíticas.
      </Paragraph>

      <Paragraph>
        Pero las autoridades de las islas empezaron a prestar atención al previamente ignorado comercio de metales preciosos y se dieron cuenta que además de transportar grandes cantidades de oro a través de las islas, el Caribe servía para borrar las huellas del origen venezolano de los minerales.
      </Paragraph>

      <Paragraph>
        El 21 de junio de 2019, después que nuestros periodistas empezaron a hacer preguntas, el gobierno de Curazao anunció que prohibía de inmediato el comercio con oro venezolano.
      </Paragraph>

      <Paragraph>
        Las autoridades alegaron que la minería en Venezuela es sinónimo de operaciones ilegales, fuga de capital, represión y explotación. Además, “investigaciones penales” indicaron que el comercio podría estar relacionado con drogas, legitimación de capitales, contrabando y falsificación de documentos.
      </Paragraph>

      <Paragraph>
        “El gobierno de Curazao decidió no continuar colaborando con el comercio de oro de Venezuela porque no podíamos certificarlo”, dijo van Rijn.
      </Paragraph>

      <Paragraph>
        En Aruba, el tránsito del oro venezolano sigue siendo legal, pero debe reportarse a la procuraduría. “Puede haber contextos sospechosos en que hace falta investigar más”, dijo Terry Akkerman, el procurador general de la isla.
      </Paragraph>

      <Paragraph>
        Mientras tanto, los registros de comercio de Estados Unidos y Suiza muestran que Curazao exportó cientos de kilos de oro a esos países durante los cinco primeros meses de 2019.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/5n7M9/2/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <SubTitle>
        Los escoltas de oro
      </SubTitle>

      <Paragraph>
        Una de las consecuencias de las declaraciones de Maduro en 2018 fue el arresto del escolta de oro Rafael González Zambrano, que estremeció al sector.
      </Paragraph>

      <Paragraph>
        “Mi empleado fue detenido ilegalmente cuatro meses”, dijo Juan Carlos Toro Rodríguez, venezolano y director de Paoro Armored Transport.
      </Paragraph>

      <Paragraph>
        Vestido con una camisa gris de manga corta y una gorra azul y blanca de Adidas, Toro no parece un comerciante internacional de oro. Dice que solamente se dedica al transporte del metal. Una de sus actividades principales es enviar frutas de Venezuela a Aruba por mar. Pero lo arrestaron con su escolta bajo cargos de contrabando, falsificación de documentos y lavado de dinero.
      </Paragraph>

      <Paragraph>
        Toro y Zambrano fueron liberados por falta de pruebas, pero la investigación sigue abierta. Toro mueve las manos con inquietud mientras reclama ser una víctima, y explica que nunca infringió la ley al transportar oro.
      </Paragraph>

      <Paragraph>
        Si lo que hizo es ilegal, entonces deben arrestar a más personas, afirmó.
      </Paragraph>

      <Paragraph>
        “Todos en las aduanas deberían estar encarcelados!”, dijo, señalando que ha transportado oro por Bélgica, Holanda, Estados Unidos y los Emiratos Árabes Unidos, y que las autoridades siempre habían aprobado sus documentos.
      </Paragraph>

      <Paragraph>
        Antes de 2018 enviaba cuatro cargamentos de oro al mes, de entre 20 y 40 kilos cada uno, a veces más.
      </Paragraph>

      <Paragraph>
        Toro estaba tan seguro de haber hecho todo según la ley, y tan confiado de que el Ministerio Público había cometido un error, que organizó otro cargamento de oro para enviarlo por KLM en septiembre de 2018. Dice que lo hizo solamente una vez para demostrar su postura. Saca orgulloso su teléfono celular para mostrar imágenes de todos los sellos de los servicios de aduana de diferentes países y explica que el cargamento llegó a Dubai sin complicaciones.
      </Paragraph>

      <Paragraph>
        Las resplandecientes playas de Curazao y Aruba son mucho más que un destino turístico y punto de parada para grandes navíos cruceros. Según operadores aeroportuarios, oficiales de aduana y fuentes gubernamentales, aviones privados y comerciales que
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "cJfRldJHYHw"
        }
        }}> vuelan por encima de turistas bronceándose</StoryMedia> han estado descargado miles de kilos de de oro venezolano.
      </Paragraph>

      <Paragraph>
        Esos envíos, muchos provenientes de minas de oro ilegales, proveen a grupos guerrilleros, sindicatos del crimen y generales corruptos venezolanos con sustanciosas sumas de dinero mientras se entrega un salvavidas financiero a las elites gubernamentales corruptas en el país en crisis.
      </Paragraph>

      <Paragraph>
        Aerolíneas como American Airlines y KLM han estado transportando oro para fuera del Caribe, mientras que las autoridades no han podido detener el flujo de minerales de conflicto que llegan a través de sus aeropuertos y zonas de libre comercio, dijeron oficiales.
      </Paragraph>

      <Paragraph>
        En total, al menos 160 toneladas de oro salieron de ambas islas entre 2014 y 2018, de las cuales la mayoría fue trasladada a través de Curazao. Funcionarios de los gobiernos de Aruba y Curazao confirmaron que al menos 90% del oro que sale de las islas procedía de Venezuela.
      </Paragraph>

      <Paragraph>
        KLM se rehusó a conceder una entrevista, pero admite haber transportado oro desde Curazao tres veces en 2018 y dos veces en 2019.
      </Paragraph>

      <Paragraph>
        American Airlines no respondió preguntas específicas, pero dijo en una nota que trabaja en estrecha colaboración con la Administración de Seguridad del Transporte, Aduanas y Control de Fronteras y los gobiernos de todo el mundo “para garantizar que todos los pasajeros, el equipaje y la carga se revisen adecuadamente antes de la salida” y que “nuestros aviones no están acostumbrados a contrabandear productos ilícitos a los Estados Unidos”.
      </Paragraph>

      <SubTitle>
        Zonas francas
      </SubTitle>

      <Paragraph>
        En Curazao, como un país dentro de otro, están las zonas francas, donde se importan y exportan bienes libre de impuestos y con poca supervisión.
      </Paragraph>

      <Paragraph>
        En la
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean02.jpg")
          }
        }}> Zona Franca del Aeropuerto de Curazao</StoryMedia> hay 41 compañías que comercian mercancía diversa como componentes para autos, medicamentos, joyas y oro.
      </Paragraph>

      <Paragraph>
        Curazao Precious Metals (Cupremeco) con sede en esa zona franca, no solamente comercializa oro, sino que también lo funde. La empresa recibió mucha cobertura mediática en 2016 cuando un guardia de seguridad fue asesinado durante el robo de 8,5 kilos de oro.
      </Paragraph>

      <Paragraph>
        “Es una refinería con todas las de la ley”, dice un proveedor de servicios financieros del sector del oro, quien prefirió no ser identificado. “Pueden definir la pureza, fundir, hacer lingotes de oro. Tienen todos los equipos”.
      </Paragraph>

      <Paragraph>
        Cupremeco ha estado recibiendo el oro que llega en vuelos privados de Venezuela.  Según el proveedor de servicios financieros, la mayor parte del oro fue exportada a Estados Unidos o enviada a los Países Bajos, Suiza o Emiratos Árabes Unidos en un avión de KLM.
      </Paragraph>

      <Paragraph>
        Cupremeco declinó hacer declaraciones para este reportaje.
      </Paragraph>

      <Paragraph>
        Los venezolanos hacen los viajes porque quieren vender sus minerales a cambio de dólares y evitar el devaluado bolívar que el gobierno usa para pagar por el oro.
      </Paragraph>

      <Paragraph>
        Los traficantes reciben el pago en cuentas de bancos extranjeros, según un antiguo comerciante de oro en Curazao, quien pidió no revelar su identidad por su seguridad, “Venezuela está a tan solo 70 kilómetros de distancia”.
      </Paragraph>

      <Paragraph>
        El comerciante dijo que las minas en lo profundo de la selva son operadas por personas que no pueden transportar el oro por motivos logísticos y de seguridad.
      </Paragraph>

      <Paragraph>
        “Hombres con dinero, helicópteros y armas visitan a los pequeños mineros. Esta es la gente que recibimos aquí [en Curazao]”, dijo, agregando que comprende perfectamente que la gente traiga oro venezolano a las islas, ya que el gobierno de Venezuela los obligaría a venderlo a pérdida para ellos. “Es contrabando de su propio oro”, añade riendo.
      </Paragraph>

      <Paragraph>
        La fuente describió cómo funcionan el comercio de oro en las zonas francas: el oro venezolano llega en vuelos privados o a través de transportistas, va directo a la Zona Económica Franca. En vez de quedar registrado como una importación, el producto se asienta como si sencillamente pasa en tránsito por el lugar. Pero cuando el oro sale de la isla, los papeles de la aduana se limitan a hacer referencia a Aruba o Curazao, y no indican de ninguna manera su origen venezolano.
      </Paragraph>

      <Paragraph>
        Y no es solamente en las zonas francas. Funcionarios de la aduana de Aruba y Curazao dijeron que el oro venezolano muchas veces llega en tránsito, en vuelos comerciales, pero nunca se registra como una importación.
      </Paragraph>

      <Paragraph>
        A veces el oro ni siquiera sale del avión. Los
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean03.jpg")
          }
        }}> jets privados</StoryMedia> en los que se transportaba el oro desde Venezuela aterrizaban en el único aeropuerto privado de la isla, operado por CATS Group, una pequeña empresa que administra aeropuertos en cuatro países de la región.
      </Paragraph>

      <Paragraph>
        “Nos llamaban y decían: ‘mira, tenemos 60 kilos, esta es la dirección’. Nosotros debíamos emitir una factura y certificado de origen; luego se enviaba a Miami desde Curazao”, describe el comerciante. Tres fuentes diferentes dentro del sector confirmaron que los aviones privados que transportaban cargas desconocidas partían con frecuencia de Curazao a Miami.
      </Paragraph>

      <Paragraph>
        CATS Group no respondió a nuestras solicitudes de información por correo.
      </Paragraph>

      <Paragraph>
        Otra forma de llevar el contrabando es sencillamente puesto en forma de joyas, lo que se conoce como smurfing o pitufeo.
      </Paragraph>

      <Paragraph>
        Un collar grueso de oro puede pesar más de un kilo y valer más de 40,000 dólares. Un funcionario de la Aduana de Aruba dijo que la gente que llega con prendas pesadas activa las alarmas, pero no hay mucho que puedan hacer.
      </Paragraph>

      <Paragraph>
        “Sí, claro, lo ves por su actitud o apariencia. No es el tipo de persona que se pondría algo así”, dijo el funcionario.
      </Paragraph>

      <Paragraph>
        El funcionario dijo que en diciembre de 2018 alguien trató de sobornarlo, ofreciéndole varios miles de dólares cada vez que lo dejara pasar por el aeropuerto. El funcionario rechazó la oferta.
      </Paragraph>

      <Paragraph>
        Otros son más discretos y esconden el oro en los zapatos. Un funcionario de seguridad aeroportuaria dijo que los escáneres corporales no lo detectan.
      </Paragraph>

      <Paragraph>
        Pero el oro en tránsito sencillamente no es una prioridad, dijeron autoridades.
      </Paragraph>

      <Paragraph>
        “Lo único que hacemos aquí es asegurarnos que [el producto] salga del país”, explicó otra fuente de la aduana Aruba. “Si el oro se importó tienen que pagar impuestos. Pero si está solamente de paso, lo pueden tomar y sacarlo en otro avión” como si fuera oro procedente de Aruba.
      </Paragraph>

      <Paragraph>
        Lo mismo puede decirse del oro que pasa por Curazao, dijo Etienne Casiano, vocero de la aduana del país. Sentado en su oficina, justo al lado del Aeropuerto Internacional de Curazao, afirma que la revisión de mercancía en tránsito “no es competencia de la aduana”, ellos solo necesitan una factura, conocimiento de transporte aéreo o conocimiento de embarque de carga.
      </Paragraph>

      <Paragraph>
        “Ellos no importan el oro; si lo hicieran, pagarían impuestos. Se quedan en tránsito, el oro se recoge y sale en otro avión”, agrega Casiano. “Los vuelos [con oro] entraron a Curazao en tránsito, acorde con nuestros procedimientos y leyes”, dijo. “Entraron legalmente, era algo normal para nosotros”.
      </Paragraph>

      <Paragraph>
        Pero reconoce que distribuir oro a través del Caribe oculta su origen verdadero, lo que convierte a las islas en un punto de trasiego atractivo para llegar a los mercados mundiales.
      </Paragraph>

      <Paragraph>
        Las bases de datos “no identifican el país de origen, solamente el último puerto por donde salió”, dijo Casiano. Así que aunque él sabe que la mayoría del oro que llega a la isla proviene de Venezuela, para cuando sale con destino a Europa y Estados Unidos su verdadero origen queda oscurecido.
      </Paragraph>

      <Paragraph>
        Aunque el oro que proviene de Venezuela es fácil de ocultar, muchos se mantienen alejados del problemático metal. Archak Bedrossian, el director de Haig, una compañía de la zona franca que compra oro, informó que hasta hace cuatro años compraba oro en Venezuela y otros países sudamericanos.
      </Paragraph>

      <Paragraph>
        “Cuando vimos que el negocio estaba en manos de los <i>pranes</i> [pandillas] y los paramilitares, dejamos de hacer negocios”, dijo. “Antes, los mineros nos contactaban para vendernos [su oro], pero estas personas se vieron obligadas a vender a grupos [delictivos], y por eso fue que dejamos de comprarles”.
      </Paragraph>

      <SubTitle>
        Eliminación de pistas
      </SubTitle>

      <Paragraph>
        Un informe de 2012 del Grupo de Acción Financiera del Caribe alertó que en Curazao “
        <FileLink
        href={require("documents/chapter4/CFATF-Curacao_First_Follow-Up_Report.pdf")}
        format="pdf"
        size="0.9MB">no existe proceso alguno que identifique la fuente, destino y objeto del transporte de oro y demás metales y piedras preciosas</FileLink>”. En varios informes subsiguientes indica que nada ha cambiado.
      </Paragraph>

      <Paragraph>
        Aunque hay información al respecto, con frecuencia es errónea o incompleta. En un
        <FileLink
        href={require("documents/chapter4/Aruba_government-Customs_document.pdf")}
        format="pdf"
        size="0.7MB"> documento filtrado que fue recibido en Aruba</FileLink> se usan indistintamente kilos, gramos y onzas, y falta otro tipo de información clave.
      </Paragraph>

      <Paragraph>
        Autoridades de Aruba dicen que están tratando de seguir mejor la pista al oro en tránsito y entienden que sus agencias pudieran tener que rendir cuentas por la falta de supervisión.
      </Paragraph>

      <Paragraph>
        “Ahora hay que asentarlo todo, aunque esté en tránsito”, dijo un funcionario. “A veces tiene que suceder algo para aprender”.
      </Paragraph>

      <Paragraph>
        En Curazao hay
        <StoryMedia
        media={{
          id: "image-5",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean04.jpg")
          }
        }}> más de 70 joyerías</StoryMedia> que además de comprar joyas para fundir y exportar, compran lingotes de oro. No hay forma de saber si el oro proviene de Venezuela. El único requisito para comprar oro es que el vendedor muestre su documento de identidad de Curazao, porque las normas de la isla no exigen certificados de origen.
      </Paragraph>

      <Paragraph>
        Un comerciante, a quien nuestros periodistas consultaron después que se prohibió la importación de oro, supone que los contrabandistas se adaptarán y que sencillamente cambiarán las rutas para los cargamentos más grandes.
      </Paragraph>

      <Paragraph>
        “Si quieren dólares por su oro, pueden ir a Perú, Colombia, Brasil, Guyana, Surinam, ¡esto continuará!”, dice riendo.
      </Paragraph>
    </Container>
  </article>
);
