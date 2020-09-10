import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Paragraph from "components/blocks/Paragraph";
import FullBlock from "components/blocks/Full";
import ImageBlock from "components/blocks/Image";
import Title from "components/blocks/Title";
import SubTitle from "components/blocks/SubTitle";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";
import EndChapter from "components/blocks/EndChapter";
import Table from "components/blocks/Table";
import { FormattedMessage } from "react-intl";
import Author from "components/blocks/Author";

export default () => (
  <article>
    <Helmet>
      <title>Refugiados | Venezuela, el paraíso de los contrabandi$tas.</title>
    </Helmet>
    <Container>
      <Title as="h2">Refugiados reclutados caminan con oro a través de la frontera colombiana</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter2"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Todos los días, miles de venezolanos cruzan la frontera hacia Colombia; en la sombra del éxodo histórico de Venezuela innumerables kilos de oro se introducen por contrabando. Grupos de criminales organizados, comerciantes y oficiales militares corruptos de Venezuela controlan un negocio multimillonario transfronterizo.
        </p>
      </Note>

      <Paragraph>
        Desde que comenzó el colapso de Venezuela a finales de 2014,
        <StoryMedia
        media={{
          id: "galery-1",
          type: "gallery",
          data: {
            items: [
              {
                src: require("photos/chapter2/gallery-1/Cucuta01.jpg"),
                credits: "Bram Ebus"
              },
              {
                src: require("photos/chapter2/gallery-1/Cucuta02.jpg"),
                credits: "Bram Ebus"
              },              {
                src: require("photos/chapter2/gallery-1/Cucuta03.jpg"),
                credits: "Bram Ebus"
              },              {
                src: require("photos/chapter2/gallery-1/Cucuta04.jpg"),
                credits: "Bram Ebus"
              }
            ]
          }
        }}
      > más de cuatro millones de refugiados y migrantes han abandonado el país</StoryMedia>
        . Colombia es uno de los países que los ha recibido, y a la fecha ha dado asilo a más de 1,3 millones de venezolanos.
      </Paragraph>

      <Paragraph>
        La mayoría entra a la vecina Colombia a través de “La Parada”, muchas veces después de caminar cientos de millas.
      </Paragraph>

      <Paragraph>
        La Parada – a pocos pasos del icónico puente Simón Bolívar, que separa a los dos países – parece un amplio mercado al aire libre. Familias venezolanas exhaustas descansan en la acera, mientras los hombres recorren el lugar con carritos y se ofrecen a llevar la mercancía a los clientes.
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta05.jpg")
          }
        }}> Personas en busca de las medicinas</StoryMedia> que no pueden encontrar en su país se abren paso entre vendedores de perros calientes y jugos de fruta. Hay quioscos donde los migrantes pueden <ExternalLink href="https://www.nytimes.com/2018/02/17/world/americas/venezuela-crisis-colombia-migration.html" language="en">vender su cabello para la confección de pelucas</ExternalLink>{" "}, con la esperanza de comprar un boleto de autobús o alquilar una noche en alguno de los numerosos hoteles improvisados que la gente del lugar ha abierto en sus casas.
      </Paragraph>

      <Paragraph>
        Pero como las aglomeraciones permiten el anonimato, La Parada también es centro de una actividad mucho más destructiva: el comercio de oro ilegal que está ayudando a mantener en el poder al gobierno venezolano, alimenta a grupos armados y destruye el ambiente.
      </Paragraph>

      <Paragraph>
        Alrededor de La Parada hay docenas de casas de empeño que compran oro traído de Venezuela, sin hacer preguntas.
      </Paragraph>

      <Paragraph>
        Un hombre que grita través de la vitrina de una tienda llamada Palacio del Oro, dice que los migrantes venezolanos traen oro en todas sus formas.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "ZkkV8tpB1SI"
        }
        }}> “Algunos traen collares de oro”, dijo. “Otros lo traen de las minas”</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Según la Oficina del Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR), <ExternalLink href="https://www.acnur.org/noticias/press/2019/6/5cfa5eb64/refugiados-y-migrantes-de-venezuela-superan-los-cuatro-millones-acnur-y.html#_ga=2.136588400.118916983.1563840317-22580151.1563840317" language="es">más de cuatro millones de refugiados y migrantes han salido de Venezuela</ExternalLink>{" "} desde 2014 en medio de una profunda crisis económica. Y para muchos de ellos, el tráfico de oro es una de las pocas formas de ganarse la vida.
      </Paragraph>

      <Paragraph>
        Harold, un joven venezolano con camiseta azul y jeans desteñidos, fue soldado en Venezuela antes de dedicarse a contrabandear oro. Dijo que en las fuerzas armadas venezolanas aprendió los pormenores de la corrupción.
      </Paragraph>

      <Paragraph>
        “Conozco el tráfico de combustible, el tráfico de drogas, aprendí a traficar muchas cosas. Fue así como aprendí a pagar <i>vacunas</i> y a cobrarlas”.
      </Paragraph>

      <Paragraph>
        La <i>vacuna</i> es como le dicen a la extorsión. Literalmente significa una inyección de seguridad. Y es uno de los elementos clave del contrabando de oro.
      </Paragraph>

      <Paragraph>
        Harold contó que el oro extraído en Venezuela es llevado a la frontera con Colombia por traficantes que muchas veces actúan en coordinación con la Guardia Nacional de Venezuela. Los soldados aceptan sobornos, o <i>vacunas</i>, para garantizar el paso seguro del oro. Algunas veces los soldados proveen vehículos blindados para trasladar el metal.
      </Paragraph>

      <Paragraph>
        Pero no solo los militares venezolanos participan en el contrabando. Bandas  delictivas venezolanas y grupos armados colombianos también participan en el contrabando de oro. En particular, el Ejército de Liberación Nacional (ELN) de Colombia, el grupo guerrillero más antiguo y grande de Latinoamérica ahora que las FARC se desmovilizaron en 2017, ha ampliado su presencia en las regiones mineras venezolanas. El oro es una importante fuente de ingresos del ELN, junto con la extorsión y el narcotráfico, opinan analistas.
      </Paragraph>

      <Paragraph>
        El ELN por lo general depende de una red de contrabandistas, llamados mulas, que se ven obligados a usar sobornos para cruzar las líneas de la Guardia Nacional y los puntos de control de grupos armados para llevar el oro a la frontera con Colombia.
      </Paragraph>

      <Paragraph>
        Para atravesar el oro por la frontera, más traficantes deben participar si las cantidades son considerables. Harold lo explica: “Supongamos que estamos hablando de uno o más kilos. Esta gente que lo saca [el oro] de la fuente es directamente responsable de llevarlo a Cúcuta [la primera ciudad importante que los venezolanos encuentran después de cruzar a Colombia]. Paga a un Guardia Nacional un poco, luego otro poco a otra Guardia Nacional y así”.
      </Paragraph>

      <Paragraph>
        Tratar de evadir esos peajes puede ser mortal. “Si quieren cobrarte, o pagas o mueres”, dijo Harold.
      </Paragraph>

      <Paragraph>
        Los diferentes grupos que controlan la frontera – incluidas organizaciones paramilitares de derecha y guerrilleros de izquierda – hacen que el recorrido sea peligroso.
      </Paragraph>

      <Paragraph>
        “Las mulas [que transportan el oro] pueden cruzarse con ambos grupos en la frontera. En un solo viaje te encuentras con la Guardia Nacional, la policía y el CICPC [el cuerpo de policía de investigaciones criminalísticas]”, dijo, y pone los ojos en blanco. “Todos cobran <i>vacuna</i>, incluyendo policiales y oficiales de migración de Colombia.”
      </Paragraph>

      <Paragraph>
        “Todos comen de esto”, agregó.
      </Paragraph>

      <Paragraph>
        A Harold no le gusta tener que darle de comer a todas estas personas, así que muchas veces esconde el oro.
      </Paragraph>

      <Paragraph>
        Los contrabandistas tienen muchos lugares donde esconder el metal: en la suela de los zapatos, en el sombrero, detrás de la correa. Las mujeres que trafican oro por lo general lo esconden debajo de los senos.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "8VNugTSqhZg"
        }
        }}>Harold prefiere esconder el oro en naranjas</StoryMedia>
        . Entre 25 y 40 gramos de oro son suficientes para llenar una naranja vacía. Cada bolsa llena de naranjas podría cargar hasta una libra de oro, con un valor de aproximadamente 22,000 dólares.
      </Paragraph>

      <Paragraph>
        “Si lo escondo, le puedo sacar más ganancias”, explicó.
      </Paragraph>

      <Paragraph>
        Migración Colombia declaró que “no tiene ninguna denuncia formal de presunta extorsión” por sus oficiales y que “no ejerce control alguno sobre equipajes o mercancías, ya que no es su competencia”.
      </Paragraph>

      <Paragraph>
        A pesar de la fortuna en oro que transportan, los contrabandistas ganan aproximadamente 2 dólares por gramo, unos 12 dólares por viaje. Eso es tres veces el salario mínimo en Venezuela, pero los peligros son significativos.
      </Paragraph>

      <Paragraph>
        Harold dijo que los jefes muchas veces amenazan a familiares de los contrabandistas para asegurar la entrega del metal.
      </Paragraph>

      <Paragraph>
        Un exjefe suyo sabía dónde vivía su familia, cuántos hijos tiene y a qué escuela van.
      </Paragraph>

      <Paragraph>
        “Averiguaron todo sobre mis parientes. Así que era mi familia o la mercancía”.
      </Paragraph>

      <Paragraph>
        Colombia y Venezuela comparten una frontera de 2.219 kilómetros y hay siete cruces oficiales, pero muchas veces están cerrados debido al deterioro de las relaciones entre ambos países. Así las cosas, los contrabandistas tienen que llevar el oro por cientos de senderos, llamados <i>trochas</i>, que están controlados por una gama de pandillas delictivas y grupos armados.
      </Paragraph>

      <Paragraph>
        La Oficina de las Naciones Unidas para la Coordinación de Asuntos Humanitarios estima que los
        <FileLink
        href={require("documents/chapter2/OCHA_UN_Colombia-Contexto_Humanitario_Norte_de_Santander.pdf")}
        format="pdf"
        size="3.6MB"> participantes ilegales ganan más de 2.1 millones de dólares mensuales</FileLink> con el
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta06.jpg")
          }
        }}> control de las <i>trochas</i> y la extorsión a viajeros</StoryMedia> solamente en el departamento colombiano Norte de Santander.
      </Paragraph>

      <Paragraph>
        Y no prestar atención a estos grupos puede tener consecuencias terribles.
      </Paragraph>

      <Paragraph>
        El 17 de abril, por ejemplo, <ExternalLink href="https://www.laopinion.com.co/judicial/encuentran-tres-muertos-en-dos-trochas-de-la-frontera-175315#OP" language="es">un periódico local reportó</ExternalLink>{" "} que se habían encontrado tres cuerpos entre dos <i>trochas</i> y que la cabeza de una de las víctimas estaba envuelta en una camiseta.
      </Paragraph>

      <Paragraph>
        Franklin, otro contrabandista de oro venezolano, dijo que se había tropezado con personas desmembradas en las <i>trochas</i>, una señal de advertencia de los grupos armados.
      </Paragraph>

      <Paragraph>
        “Lo llamo el carro bomba”, dice bajo la condición de hablar en anonimato. Se refiere al oro que escondió en sus zapatos cuando traficaba y el gran riesgo de que lo agarraran y mataran. “He visto personas desmembradas, descuartizadas. El hombro de una persona tirado en la trocha…”.
      </Paragraph>

      <Paragraph>
        Cuando llegó a Colombia, precisamente a La Parada, no encontró alivio en la cercana ciudad de Cúcuta. Durmió en el terminal de autobuses su primera semana allí, y luego  fue reclutado por un grupo del crimen organizado para ser contrabandista.
      </Paragraph>

      <Paragraph>
        Con el oro escondido en las suelas de los zapatos, cruzaba a pie la frontera. Trabajó varios meses hasta que ganó el dinero suficiente para traer su esposa y a su bebé de 9 meses.
      </Paragraph>

      <Paragraph>
        A los traficantes que cruzan la frontera en ambas direcciones les dicen “pulmones”, y Franklin dijo que a veces hacía varios viajes al día con docenas de otros contrabandistas.
      </Paragraph>

      <Paragraph>
        “Imagina, tener 15 pares de pulmones trabajando todos los días para un solo jefe”, dice. “Algunos de estos jefes tienen hasta 80 pares de pulmones trabajando a diario”.
      </Paragraph>

      <Paragraph>
        Al igual que Harold, Franklin manifestó que sus jefes amenazaron a su familia para obligarlo a entregar el oro. Ahora vende caramelos en las calles porque el contrabando se ha vuelto muy peligroso.
      </Paragraph>

      <Paragraph>
        Aunque trabaja 14 horas al día, a veces más, no siempre le alcanza el dinero. El pequeño apartamento que alquila le cuesta 5 dólares la noche, y ha conseguido un poco de comodidad con un colchón barato, un televisor usado y un ventilador.
      </Paragraph>

      <Paragraph>
        Otra hija que vive en Venezuela empezó el nuevo semestre de clases sin útiles escolares. Por eso ahorra dinero para mandarle también.
      </Paragraph>

      <SubTitle>
        A puertas cerradas
      </SubTitle>

      <Paragraph>
        En el centro de Cúcuta, a unos 10 kilómetros del corredor de contrabando de oro de La Parada, hay una zona del tamaño de un barrio que se ha convertido en centro de comercio de bienes traídos de forma ilícita de Venezuela.
      </Paragraph>

      <Paragraph>
        Alejandría, un centro comercial al aire libre, con caminos estrechos llenos de ropa, perfumes de imitación, computadoras portátiles marca Canaima (laptops que en otra época el gobierno venezolano entregaba a los niños para usar en la escuela) y armas de juguete. Pero también venden armas de verdad, afirman algunos.
      </Paragraph>

      <Paragraph>
        La zona también está llena de las llamadas
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "vgdRWxCY53g"
        }
        }}> <i>compraventas</i>, pequeñas tiendas que compran y venden oro</StoryMedia>
        . Solamente a este lugar llegan a diario entre 200 y 300 venezolanos para ofrecer oro. La gente del lugar dice que la cantidad de casas de empeño ha aumentado significativamente en años recientes, cuando se disparó el contrabando de oro.
      </Paragraph>

      <Paragraph>
        “Compro oro, compro oro”, gritan los encargados de las
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta07.jpg")
          }
        }}> tiendas</StoryMedia>
        , tratando de atraer nuevos clientes.
      </Paragraph>

      <Paragraph>
        Otros tratan de ser más discretos sobre el comercio del metal, en su mayor parte informal o ilegal. En lo profundo de un caótico mercado hay una pequeña oficina oculta detrás de un panel que se abre. El pequeño espacio es suficiente para tres sillas plásticas y un pequeño escritorio, detrás del cual hay un hombre con un montón de dinero en efectivo.
      </Paragraph>

      <Paragraph>
        El individuo paga 30 dólares por gramo de oro y dice que compra entre 4 o 5 kilogramos de oro a la semana. Eso significa unos 150,000 dólares en oro.
      </Paragraph>

      <Paragraph>
        Cuando se le preguntó cuánto oro puede vender en una semana, dijo “lo que necesites”.
      </Paragraph>

      <Paragraph>
        De regreso en el centro comercial Alejandría, una mujer de edad media está de pie junto a una vitrina llena de collares de oro traídos de Venezuela. Saca una calculadora de su escritorio cuando le preguntan por el precio del oro. Dice que las prendas de 24 kilates se venden en 36 dólares por gramo.
      </Paragraph>

      <Paragraph>
        Luego le grita a otra mujer al otro lado de un pasillo, que también tiene una joyería, y le pregunta si tiene oro sin refinar.
      </Paragraph>

      <Paragraph>
        “¿Tienes oro de la mina?”
      </Paragraph>

      <Paragraph>
        No, le responde, no por ahora.
      </Paragraph>

      <Paragraph>
        La mayoría de estas tiendas no pueden comerciar oro legalmente, pero eso no ha impedido que el negocio despegue. Incluso hay un sitio web que <ExternalLink href="http://preciocucuta.com/oro-hoy/" language="es">explica cómo comprar oro en Cúcuta</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Francisco tiene una tienda con licencia para prestar dinero a cambio de joyas empeñadas. Pero admite que ha estado comprando oro de minas venezolanas.
      </Paragraph>

      <Paragraph>
        “Yo he comprado oro”, dice, y pide no ser identificado por temor a represalias, “pero sé que no podemos”.
      </Paragraph>

      <Paragraph>
        Saca su teléfono móvil y muestra varias fotos de lo que se ofrece al otro lado de la frontera. Agranda una
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta08.jpg")
          }
        }}> imagen de lingotes de oro que van desde 300 gramos hasta más de 1,5 kilos</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        “Están pidiendo un valor muy alto”, dice.
      </Paragraph>

      <Paragraph>
        Francisco explica cómo el comercio de oro funciona: contactos en Venezuela se comunican para informar lo que tienen en oferta, y si se llega a un acuerdo, envían a un contrabandista por la frontera. El pago es en efectivo, muchas veces en dólares, o por transferencia bancaria.
      </Paragraph>

      <Paragraph>
        En Cúcuta, el oro se oculta en las puertas y otros compartimientos de autos privados, y se lleva a ciudades grandes como Bogotá, Cali o Medellín. Ahí se falsifican los documentos necesarios para exportarlo a Europa o Estados Unidos, y entra en la cadena mundial de suministro de oro legal.
      </Paragraph>

      <Paragraph>
        Las cantidades de oro que pasan por Cúcuta varían significativamente, dice Francisco. Lleva aproximadamente una semana reunir 100 kilos, pero no puede darse el lujo de financiar el mismo esa inversión.
      </Paragraph>

      <Paragraph>
        Francisco sabe que grupos delictivos usan el oro para lavar dinero de las drogas. Esas redes compran oro ilegal, dijo, lo exportan a través de compañías bien establecidas y traen de regreso los dólares al país.
      </Paragraph>

      <Paragraph>
        “¡Es un juego internacional!”, expresó.
      </Paragraph>
    </Container>
  </article>
);
