import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import SubTitle from "components/blocks/SubTitle";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";
import FullBlock from "components/blocks/Full";
import Note from "components/blocks/Note";
import Table from "components/blocks/Table";
import { FormattedMessage } from "react-intl";
import Author from "components/blocks/Author";

export default () => (
  <article>
    <Helmet>
      <title>Fiebre De La Selva | Venezuela, el paraíso de los contrabandi$tas.</title>
    </Helmet>
    <Container>
      <Title as="h2">La fiebre del oro en la Amazonía aterroriza a tierras indígenas</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter3"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Las comunidades indígenas están expuestas a la violencia y prácticas mineras contaminantes en las zonas fronterizas del sur de Colombia y Venezuela. En la Amazonía, los ríos son las autopistas de la selva y brindan a los traficantes una excelente oportunidad para transportar sus mercancías.
        </p>
      </Note>

      <Paragraph>
        Un comerciante está en la entrada de una pequeña embarcación repleta de alimentos y productos enlatados, un supermercado flotante, mientras de
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "w7STTabEpLM"
        }
        }}> unos altoparlantes sale música ranchera a todo volumen</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        El hombre mira el impresionante pero apacible río Orinoco, que separa su negocio en la villa de Amanavén, Colombia, de la vecina Venezuela, visible en la otra orilla.
      </Paragraph>

      <Paragraph>
        ¿Sabe algo del comercio de oro local?
      </Paragraph>

      <Paragraph>
        “Sí, aquí se recibe”, reconoce, mientras abre su tercera cerveza con parsimonia.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
          id: "galery-1",
          type: "gallery",
          data: {
            items: [
              {
                src: require("photos/chapter3/gallery-1/Inirida01.jpg"),
                credits: "Bram Ebus"
              },
              {
                src: require("photos/chapter3/gallery-1/Inirida02.jpg"),
                credits: "Bram Ebus"
              },              {
                src: require("photos/chapter3/gallery-1/Inirida03.jpg"),
                credits: "Bram Ebus"
              },              {
                src: require("photos/chapter3/gallery-1/Inirida04.jpg"),
                credits: "Bram Ebus"
              }
            ]
          }
        }}
      >Los alimentos básicos que él y otros botes-tienda ofrecen</StoryMedia> se venden principalmente a personas que se abastecen antes de la siguiente curva del Orinoco hacia Venezuela.
      </Paragraph>

      <Paragraph>
        Su destino es las minas de Yapacana, en la Amazonia venezolana, esparcidas en un complejo montañoso y en un parque nacional con el mismo nombre.
      </Paragraph>

      <Paragraph>
        Allí, en la selva húmeda, entre 5.000 y 10.000 mineros buscan oro. Pero no están solos. Dos grupos guerrilleros colombianos y elementos corruptos de la Guardia Nacional de Venezuela controlan la zona y recaudan grandes cantidades del metal precioso.
      </Paragraph>

      <Paragraph>
        En un bote aledaño, el dueño quiere mostrar parte del oro sacado de las minas. Desaparece detrás de una cortina y regresa con
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida05.jpg")
          }
        }}> 118 gramos de oro</StoryMedia>
        , que tienen un valor de unos 6,000 dólares.
      </Paragraph>

      <Paragraph>
        “Esto es para los militares del otro lado”, afirma, refiriéndose a la Guardia Nacional de Venezuela. “Es para pagar el ‘impuesto’”, dijo, refiriéndose al pago de la extorsión.
      </Paragraph>

      <Paragraph>
        Con la complicidad de los cuerpos de seguridad de Venezuela, el protegido parque Yapacana es destruido por las prácticas mineras contaminantes y agresivas. Los ríos de la zona son dragados por los mineros, que también usan mercurio, que envenena el agua potable de la región.
      </Paragraph>

      <Paragraph>
        Un estudio de 2017 identificó que las comunidades que viven a lo largo de los ríos Atabapo, Guainía e Inírida en la parte colombiana hay cerca de <ExternalLink href="https://www.eltiempo.com/vida/medio-ambiente/poblacion-de-guania-tiene-niveles-de-mercurio-mas-altos-que-el-promedio-129712" language="es">60 veces más el nivel máximo de mercurio</ExternalLink>{" "} que una persona puede tener en sangre, según la Organización Mundial de la Salud. Las aguas de estos ríos abastecen a poblaciones del sur de Colombia, Venezuela y el norte de Brasil.
      </Paragraph>

      <Paragraph>
        El pequeño pueblo a las orillas del río Amanavén, Departamento de Vichada, está a 45 minutos en bote de Puerto Inírida, la capital del Departamento de Guainía en Colombia.
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "9AiAmruntJ8"
        }
        }}> Puerto Inírida es un pueblo ubicado en la selva rodeado de agua</StoryMedia> en una zona llamada Estrella Fluvial del Oriente, donde nacen varios ríos. Cientos de afluentes alimentan los nueve principales ríos de la región que serpentean por la densa selva tropical del departamento, que sirve de autopista para traficantes de todo tipo.
      </Paragraph>

      <Paragraph>
        Sumado a los 20.000 habitantes de la ciudad, unos 5.000 son venezolanos, dicen autoridades locales. Los migrantes y refugiados quedan atrapados en la ciudad selvática, que constituye un cuello de botella, ya que no existen buenos caminos que conecten con las zonas del interior. En las afueras del poblado, muchos viven en chozas hechas con palos y láminas de metal o plástico.
      </Paragraph>

      <Paragraph>
        Las pocas vías pavimentadas están llenas de huecos y dominadas por una cantidad injustificada de
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "6kYhEF6n3nE"
        }
        }}> triciclos motorizados usados como taxi</StoryMedia>
        , llamados <i>ratones</i>, que pululan por todas partes y tocan corneta a todo dar mientras buscan pasajeros. En medio de la caótica y ruidosa escena, los mineros, llegan aturdidos tras semanas o meses en las selvas venezolanas.
      </Paragraph>

      <SubTitle>
        La economía subterránea de Inírida
      </SubTitle>

      <Paragraph>
        Un indígena colombiano de unos 50 años llega a una de las llamadas <i>compraventas</i>, pequeñas tiendas que comercializan oro, sin cartel y con ventanas muy oscuras.
      </Paragraph>

      <Paragraph>
        Después de ocho días de trabajo duro, se ha quedado con
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida06.jpg")
          }
        }}> 64 gramos de oro</StoryMedia>
        . Pero al principio tenía mucho más.
      </Paragraph>

      <Paragraph>
        El indígena comienza a calcular cuánto oro perdió pagando a varios grupos armados y militares corruptos en sus respectivos puntos de control a lo largo del río:
      </Paragraph>

      <Paragraph>
        <li>5 gramos, unos 230 dólares a valores del mercado internacional, para el <i>wachiman</i>, el vigilante que observa a los mineros e informa a la Guardia Nacional o las guerrillas</li>
        <li>5 gramos para la comunidad indígena cercana a las minas</li>
        <li>5 gramos para las guerrillas</li>
        <li>3 gramos para la Guardia Nacional en un punto de control cerca de Santa Bárbara</li>
        <li>1 gramo para la Marina de Venezuela</li>
        <li>0.5 gramo para la municipalidad de Atabapo</li>
      </Paragraph>

      <Paragraph>
        Además de esos 19,5 gramos pagados en “impuestos”, también tuvo que pagar sus gastos de comida y transporte.
      </Paragraph>

      <Paragraph>
        Pero pagar estos peajes es mejor que la alternativa. Una de las pocas formas de evitarlos es hacer un viaje a pie de cuatro días a través de la selva venezolana, y después un recorrido de tres días en una embarcación.
      </Paragraph>

      <Paragraph>
        El oro de Venezuela se filtra a lo largo de toda la frontera meridional. El Paujil es un área al lado de Puerto Inírida que se menciona mucho como punto de entrada del contrabando de bienes, pero Puerto Inírida cuenta con muchos más
        <StoryMedia
        media={{
        id: "video-4",
        type: "youtube",
        data: {
          id: "HR2oc-VaUPo"
        }
        }}> muelles informales</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Las callecitas del pueblo desaparecen de repente en uno de los ríos y se convierten en puntos de atraque para botes de madera angostos, lo que dificulta el control del comercio. Pero los lugareños dicen que la policía se aprovecha de los mineros. El propietario de una <i>compraventa</i> dijo que la policía siempre está “decomisando oro”, pero en realidad se lo roba. “Es una injusticia”, afirmó.
      </Paragraph>

      <Paragraph>
        Los mineros venden su oro en las <i>compraventas</i> que hay en toda la ciudad. En una de las tiendas, con paredes blancas y sillas plásticas, una mujer amamanta a su bebé mientras pesan oro frente a ella en el escritorio de la oficina.
      </Paragraph>

      <Paragraph>
        El dueño del lugar, Bryan, quien pidió no ser identificado, está sentado al fondo. Explica que compra oro legalmente de los llamados  <i>barequeros</i> colombianos registrados, mineros artesanales que emplean métodos rudimentarios y pueden vender hasta 420 gramos al año. Bryan tiene unos 200  <i>barequeros</i> inscritos en sus libros, pero espera llegar a 500.
      </Paragraph>

      <Paragraph>
        Al inscribir cientos de  <i>barequeros</i>, sino miles, vendedores de oro como Bryan pueden justificar la venta de grandes cantidades de oro. Pero el sistema está totalmente corrupto.
      </Paragraph>

      <Paragraph>
        Muchas veces, los documentos de identidad que se usan para justificar un cargamento de oro son de una persona fallecida, de camareros o empleados de un estacionamiento que los alquilan por dinero, dice un oficial de inteligencia colombiano.
      </Paragraph>

      <Paragraph>
        Otras veces el oro venezolano se registra bajo un título de minería colombiano, al menos en el papel. En realidad, la supuesta minera es “un campo lleno de vacas”, dice otro oficial de inteligencia colombiano, sobre la existencia de estas minas fantasma que reportan una producción falsa.
      </Paragraph>

      <Paragraph>
        Aun cuando el oro provenga de Venezuela, si en papel dice que proviene de una mina en Colombia, se pagan regalías al Estado.
      </Paragraph>

      <Paragraph>
        Bryan no puede garantizar que el oro que llega a su tienda sea venezolano pero dice que la mayor parte del metal que compra viene de minas colombianas, que por lo general lleva a la capital, Bogotá, para venderlo a los mayoristas.
      </Paragraph>

      <Paragraph>
        Nadie en el
        <StoryMedia
        media={{
          id: "galery-2",
          type: "gallery",
          data: {
            items: [
              {
                src: require("photos/chapter3/gallery-2/Inirida08.jpg"),
                credits: "Bram Ebus"
              },
              {
                src: require("photos/chapter3/gallery-2/Inirida09.jpg"),
                credits: "Bram Ebus"
              }
            ]
          }
        }}
      > aeropuerto local le causa problemas ni le revisa el oro</StoryMedia>
      , dijo. Bryan lleva el oro en una mochila y se cambia de camisa en el avión. Le preocupa que alguien en Bogotá reciba información de lo que viste y le robe el oro.
      </Paragraph>

      <Paragraph>
        Otro hombre que participa en estas actividades, Juan Pablo, quien no quiso dar su nombre verdadero, se ríe a carcajadas cuando le preguntan si Bryan vende oro colombiano.
      </Paragraph>

      <Paragraph>
        “Es una gran mentira”, afirma. Y un representante de la aduana en Puerto Inírida concuerda en que la mayor parte del oro que pasa por allí proviene de Venezuela.
      </Paragraph>

      <Paragraph>
        “El submundo del oro mantiene la economía”, dijo.
      </Paragraph>

      <Paragraph>
        Aunque algunas
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida07.jpg")
          }
        }}> <i>compraventas</i></StoryMedia> “legalizan” su oro con documentos que muestran que proviene de operaciones en Colombia, no todas lo hacen, dijo Juan Pablo.
      </Paragraph>

      <Paragraph>
        “Sacan el oro, pero ilegalmente”, dijo, explicando que los traficantes varones ocultan el oro junto a los testículos, mientras que las mujeres se lo colocan entre los senos o en su ropa interior.
      </Paragraph>

      <Paragraph>
        Los márgenes de ganancia son entre uno o dos dólares por gramo, aproximadamente. Un dueño de una tienda de empeño explica que cuando se envía a un traficante a Bogotá con una cantidad superior a un kilo de oro, el viaje vale la pena. Un transportista de oro puede ganar unos 188 dólares por llevar un kilogramo de oro a la capital.
      </Paragraph>

      <Paragraph>
        Para las autoridades es difícil rastrear el origen del oro. Los exportadores muchas veces compran oro a docenas de empresas de maletín a las que es muy difícil, casi imposible, seguirles la pista.
      </Paragraph>

      <Paragraph>
        “Después que el oro se convierte en lingotes, es muy difícil conocer su origen”, afirma un representante de la aduana de Colombia.
      </Paragraph>

      <SubTitle>
        Indígenas abandonados
      </SubTitle>

      <Paragraph>
        La selva de Colombia que bordea Venezuela es una de las regiones más pobres del país, lo que ha obligado históricamente a las comunidades de la región a depender de actividades ilícitas para sobrevivir. La falta de oportunidades ha generado el trabajo pendular de sus habitantes, entre la caza furtiva de animales salvajes por su piel y dentadura, la minería ilegal y el cultivo de coca para producir cocaína.
      </Paragraph>

      <Paragraph>
        Debido al elevado desempleo en Guainía, sus habitantes, principalmente indígenas, buscan trabajo en las minas de Venezuela. Un líder indígena dijo que en Venezuela es aún peor. En una comunidad, Caño Grulla, solo quedan 30 de 500 familias. El resto se ha ido a las minas.
      </Paragraph>

      <Paragraph>
        A medida que los jóvenes dejan sus familias para irse a buscar oro, el índice de deserción escolar se ha disparado en la región, dijo Luis Enrique Amado Prieto, director de Pastoral Social Regional Suroriente Colombiano.
      </Paragraph>

      <Paragraph>
        El encanto del oro también está destrozando la vida tradicional comunitaria. La violencia doméstica causada por el abuso del alcohol está en aumento, al igual que la malaria, que está muy extendida en las minas y se ha convertido en una epidemia en estas comunidades.
      </Paragraph>

      <Paragraph>
        A medida que la minería crece, la supervivencia de las culturas indígenas queda amenazada, dijo
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida11.jpg")
          }
        }}> Plinio Yavinape, un líder indígena ya mayor</StoryMedia> que vive cerca de Puerto Inírida.
      </Paragraph>

      <Paragraph>
        “Puede ser fatal para la comunidad”, dijo de la fiebre del oro. “Por poco dinero se matan entre sí”.
      </Paragraph>

      <Paragraph>
        Se dice que
        <FileLink
        href={require("documents/chapter3/SOS_Orinoco-Gold_Mining_Activity_in_Yapacana_National_Park_Spanish.pdf")}
        format="pdf"
        size="11.8MB"> a los maestros se les paga con oro</FileLink> en las escuelas que se encuentran entre las minas de Yapacana. Según Juan Alberto Sánchez, coordinador de seguridad y coexistencia ciudadana en Puerto Inírida, alrededor de 3.000 colombianos trabajan actualmente en las minas de Yapacana, además de miles de mineros venezolanos.
      </Paragraph>

      <SubTitle>
        Rebeldes colombianos en la Amazonía
      </SubTitle>

      <Paragraph>
        Sentado en su oficina, uno de los altos oficiales militares en el Departamento de Guainía tiene una placa con su nombre en su mesa y dos grandes banderas detrás de sus espaldas. Una pieza de Beethoven se escucha de su computadora portátil.
      </Paragraph>

      <Paragraph>
        “Estamos combatiendo a bandidos y terroristas”, dice, refiriéndose a los guerrilleros colombianos que operan en la zona.
      </Paragraph>

      <Paragraph>
        Indica que sus órdenes son combatir a un grupo llamado Acacio Medina, activo en las minas de Venezuela y Colombia, formado por ex miembros de las FARC.
      </Paragraph>

      <Paragraph>
        Hasta el momento no ha habido enfrentamientos. “No permiten que los provoquen”, dice.
      </Paragraph>

      <Paragraph>
        Las FARC fueron el grupo guerrillero más antiguo y grande de las Américas, hasta que firmaron un acuerdo de paz en 2016 y se desmovilizaron en 2017. Pero no todos han dejado las armas y grupos “disidentes” han formado grupos como el Acacio Medina, liderado por un guerrillero llamado “Jhon 40”. El grupo opera proyectos de minería ilegal en el estado Amazonas, Venezuela.
      </Paragraph>

      <Paragraph>
        El colombiano Ejército de Liberación Nacional (ELN) ahora tiene dos campamentos cerca de San Fernando de Atabapo y de Puerto Ayacucho. Es el ELN quien supuestamente domina en el estado Amazonas más que los disidentes de las FARC del Frente Acacio Medina, con campamentos en el lado venezolano de las ciudades de Puerto Colombia y San Felipe.
      </Paragraph>

      <Paragraph>
        Según documentos de la inteligencia colombiana, el Acacio Medina ahora obtiene 70% de sus ingresos por la minería ilegal en Venezuela.
      </Paragraph>

      <Paragraph>
        Los disidentes de la FARC y el ELN – ahora el mayor grupo guerrillero del continente – tienen una alianza para trabajar en las minas de oro de Venezuela.
      </Paragraph>

      <Paragraph>
        El jefe militar dice que conoce de las actividades transfronterizas del ELN porque capturaron a un guerrillero indígena venezolano que desertó en 2018. El hombre dijo que mató a otros tres rebeldes y cruzó a nado el río Atabapo para escapar a Colombia. El hombre se quejó de los trabajos forzados y la falta de alimentos durante el tiempo que trabajó para el ELN.
      </Paragraph>

      <Paragraph>
        Venezuela ha tolerado la presencia de los guerrilleros colombianos desde que el ya fallecido presidente Hugo Chávez llegó al poder en 1999. Aunque estos grupos son considerados organizaciones terroristas por Estados Unidos y Colombia, Chávez dijo que son <ExternalLink href="https://www.lanacion.com.ar/el-mundo/chavez-las-farc-no-son-terroristas-nid978386" language="es">“ejércitos genuinos” y “fuerzas insurgentes con objetivos políticos”</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Grandes zonas del sureste de la Amazonía colombiana han funcionado como corredores de contrabando de drogas, armas y mercancías desde hace decenios.
      </Paragraph>

      <Paragraph>
        Cuando las FARC participan en la minería, cobran cerca de 30% de la producción, según un antiguo miembro de la guerrilla. También hizo énfasis en el hecho de que la Guardia Nacional de Venezuela ya estaba más que involucrada en el 2007, y cobraban comisión en oro en Yapacana.
      </Paragraph>

      <Paragraph>
        “Sacaban mucho oro”, recuerda.
      </Paragraph>

      <Paragraph>
        Según Eduardo, un indígena de 24 años quien pidió no ser identificado, las FARC y el ELN siguen teniendo presencia en las minas, visten uniforme militar y están bien armados. También son la ley en la región. A los ladrones muchas veces los ejecutan, e incluso llevar un teléfono móvil a una zona minera está prohibido, y puede convertirse en una sentencia de muerte.
      </Paragraph>

      <Paragraph>
        Pero incluso así, los mineros dicen que los guerrilleros son mejores jefes que la Guardia Nacional porque establecen reglas claras, prohíben el consumo de alcohol y drogas, y a veces defienden a la comunidad. Los militares venezolanos con frecuencia son más abusivos y exigen más oro.
      </Paragraph>

      <Paragraph>
        Pero también trabajan mano a mano con la Guardia Nacional de Venezuela, cuyos miembros
        <StoryMedia
        media={{
        id: "video-5",
        type: "youtube",
        data: {
          id: "0K1a_Qgm1ME"
        }
        }}> cobran “impuestos” sobre todo, como la entrada a las minas, el uso de ríos y equipo de movimiento de tierra, y hasta el derecho de vender empanadas</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Según un ex oficial de la inteligencia venezolana, el oro que cobra la Guardia Nacional se envía por avión a Caracas, después de que una parte fue dividido entre los jefes en Amazonas del Servicio Bolivariano de Inteligencia Nacional (SEBIN), el jefe de la contrainteligencia militar (DGCIM), el general a cargo de la Guardia Nacional y el jefe de las zonas de defensa regionales (ZODI).
      </Paragraph>

      <Paragraph>
        Franklin, un Sargento Segundo de la Guardia Nacional Bolivariana de Venezuela de 26 años de edad, trabajó en el área de las minas de oro cerca de Puerto Ayacucho durante tres años y medio.
      </Paragraph>

      <Paragraph>
        Franklin, quién accedió a hablar manteniendo su anonimato, dijo que él y otras tropas vieron cómo su comandante llegaba a acuerdos con el ELN para exprimir a los mineros locales. Y añadió: “Llegaban en botes, 200, 300 hombres armados hasta los dientes, y sus líderes se reunían con nuestros comandantes. Nunca había visto algo parecido. Ellos [el ELN] son los que tienen el control real de las minas”.
      </Paragraph>

      <Paragraph>
        Las dos “autoridades” en las minas de Yapacana, la guerrilla y la Guardia Nacional, son un tándem frágil. Tanto venezolanos como colombianos ocupan rangos de las guerrillas colombianas y están mejor armados que los militares en el estado Amazonas.
      </Paragraph>

      <Paragraph>
        “Venezuela tiene un ejército, que está preparado para absolutamente nada”, dijo el ex oficial de inteligencia venezolano. “Por otra parte, el ELN está entrenado, preparado para el combate, y no le tiene miedo a nada”.
      </Paragraph>

      <Paragraph>
        Pero ya ha habido conflictos. En 2017, los guerrilleros casi derriban un helicóptero militar venezolano cerca de la mina El Cacique en la zona de Yapacana con un rifle AR-15. El helicóptero no debía estar allí, explicó un adolescente venezolano. “Ahora los que mandan son los guerrilleros”.
      </Paragraph>

      <Paragraph>
        En noviembre de 2018, un <ExternalLink href="https://lta.reuters.com/articulo/domesticNews/idLTAKCN1NA0BJ-OUSLD" language="es">enfrentamiento entre los guerrilleros y la Guardia Nacional</ExternalLink>{" "} dejó al menos tres soldados muertos, y una docena de heridos, y mostró la volatilidad de la situación.
      </Paragraph>

      <Paragraph>
        Pero los guerrilleros llegaron a la zona para quedarse, dijo el ex oficial de inteligencia.
      </Paragraph>

      <Paragraph>
        “En este momento, para los guerrilleros el oro... es más lucrativo que las drogas”. dijo. “Por eso están presentes en todas las minas en Venezuela.”
      </Paragraph>
    </Container>
  </article>
);
