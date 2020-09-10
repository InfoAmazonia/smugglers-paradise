import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Paragraph from "components/blocks/Paragraph";
import FullBlock from "components/blocks/Full";
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
      <title>Minas de Oro | Venezuela, el paraíso de los contrabandi$tas.</title>
    </Helmet>
    <Container>
      <Title as="h2">Crimen organizado controla la explotación de oro en Venezuela</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter1"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Todos los ingredientes para un mineral de conflicto se pueden encontrar en el sur de Venezuela. Un cóctel peligroso de múltiples grupos armados y oficiales corruptos controlan la extracción del oro del país antes de llevarlo a las fronteras.
        </p>
      </Note>

      <Paragraph>
        La larga carretera que sale de Ciudad Guayana, en el estado Bolívar, y se dirige al sur marca la ruta de la minería ilegal de oro en Venezuela. Cientos de personas la transitan diariamente en busca de El Dorado que les permita salvarse de una crisis económica sin precedentes en la nación suramericana.
      </Paragraph>

      <Paragraph>
        Alimentos, medicinas, combustible y dinero en efectivo que por años han escaseado en el resto del país se encuentran en abundancia por estos caminos. Es todo un mundo paralelo.
      </Paragraph>

      <Paragraph>
        La parada más importante es El Callao, un pueblo entre montañas ubicado a unos 850 kilómetros de Caracas, conocido históricamente por su colorido carnaval pero que ahora es más renombrada como la capital de la zona minera.
      </Paragraph>

      <Paragraph>
        La explosión de la minería ha convertido este lugar en una pesadilla,
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Jorge Benezra",
            src: require("photos/chapter1/Venezuela01.jpg")
          }
        }}>con las calles llenas de autos, motocicletas y vendedores</StoryMedia>
        , que en su mayoría duermen al aire libre porque los hoteles están ocupados.
      </Paragraph>

      <Paragraph>
        El otrora tranquilo poblado tenía 20.000 habitantes en 2011, donde pequeños comercios vendían rudimentarias joyas doradas y oro cochano sin temor a robos. Ahora, unos 100.000 pobladores hacen vida en El Callao, mientras entre 300.000 y 500.000 mineros recorren las numerosas minas en el sur de Venezuela.
      </Paragraph>

      <Paragraph>
        El Callao se encuentra dentro del Arco Minero del Orinoco, un megaproyecto patrocinado por el gobierno que cubre 12% del territorio venezolano.
      </Paragraph>

      <Paragraph>
        Puesto en marcha en febrero de 2016 por el presidente Nicolás Maduro, el proyecto es un intento por encontrar recursos ante el desplome de la industria petrolera, que ha sostenido a la nación sudamericana durante un siglo. Como parte del plan, <ExternalLink href="https://mundo.sputniknews.com/entrevistas/201812151084165986-venezuela-riquezas-recursos-oro-diamantes/" language="es">el gobierno pretende validar y certificar 8.900 toneladas en reservas de oro hasta 2025</ExternalLink>{" "}. Esto significaría que Venezuela tendría el segundo mayor depósito de oro del mundo.
      </Paragraph>

      <Paragraph>
        Pero no todo es abundancia y glamour. La extracción de oro en la zona era dirigida antes por empresas transnacionales. Ahora, grupos delictivos y pandillas armadas monopolizan el negocio. Y la población de El Callao, como muchos poblados en el sur, está ahora a merced de estas organizaciones.
      </Paragraph>

      <Paragraph>
        Medios de prensa locales han reportado el descubrimiento de fosas llenas de cadáveres en la región, pero la gente del lugar dice que a muchos de los fallecidos, víctimas de la violencia y las enfermedades, no los encuentran nunca y han desaparecido en la selva venezolana.
      </Paragraph>

      <Paragraph>
        Según el Observatorio Venezolano de Violencia, El Callao fue la <ExternalLink href="https://observatoriodeviolencia.org.ve/ovv-lacso-informe-anual-de-violencia-2018/" language="es">localidad más violenta de Venezuela</ExternalLink>{" "} en 2018, con una tasa de 619,8 homicidios por cada 100.000 habitantes.
      </Paragraph>

      <Paragraph>
        Un empleado de de la Compañía General de Minería de Venezuela (Minerven), que reserva su identidad por temor a represalias, explica que “grupos irregulares” se están enriqueciendo con el negocio del oro.
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "20O0vWcLDv4"
        }
        }}> Obligan a los mineros y sus familiares a vivir un infierno, con prácticas que rayan en el sadismo, describe</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Algunos testigos, entre los que se incluyen mineros que huyeron a Colombia, confirman esta acusación y mencionan – entre los abusos – prostitución forzada, tortura, masacres e, incluso, decapitaciones por parte de grupos armados que tienen el control de las minas.
      </Paragraph>

      <Paragraph>
        En este momento, diversos grupos criminales dominan El Callao y el resto del Arco Minero del Orinoco. Según denuncias de ONGs, legisladores opositores y testigos de la zona, disidentes de las Fuerzas Armadas Revolucionarias de Colombia (FARC) y miembros del Ejército de Liberación Nacional (ELN) están presentes en las minas del estado Bolívar y el estado vecino Amazonas.
      </Paragraph>

      <Paragraph>
        Hasta hace poco, las FARC era el mayor grupo guerrillero de Latinoamérica. Con base en Colombia, fue creado en 1964 para luchar por la distribución equitativa de la tierra y contra la pobreza rural, siguió como un movimiento guerrillero hasta que firmó un acuerdo de paz en 2016. Ahora el ELN es el grupo guerrillero más grande del continente.
      </Paragraph>

      <Paragraph>
        Las dos organizaciones comparten el territorio con los llamados sindicatos, liderados por los llamados <i>pranes</i>. También están los Comités para la Defensa de la Revolución (CDR), que han creado sus propios grupos mineros y que están alineados ideológicamente con el gobierno de Maduro.
      </Paragraph>

      <Paragraph>
        Las pandillas, que tienen presencia en la zona minera desde 2010, eran las que mandaban, pero han perdido terreno a manos de los guerrilleros colombianos en años recientes, dijo un soldado de la Guardia Nacional, un joven de 25 años.
      </Paragraph>

      <Paragraph>
        Este hombre todavía se asombra cuando recuerda la primera vez que vio a elementos del ELN pasar por el estado Bolívar.
      </Paragraph>

      <Paragraph>
        “Vimos patrullas de 200 hombres armados que pasaban caminando a nuestro lado identificados como el ELN”, recuerda. “¿Qué se supone que debíamos hacer? Simplemente los saludamos como si fueran viejos amigos”.
      </Paragraph>

      <Paragraph>
        El control de la zona por parte de grupos armados y unidades militares corruptas impide a los mineros hablar con franqueza.
      </Paragraph>

      <Paragraph>
        “Aquí es mejor no opinar si quieres estar con vida, hay mucha mafia”, dijo un empresario local que pidió no ser identificado. “Los militares llegaron para hacer negocios, no para proteger al ciudadano. Todas las semanas hay un asesinato”.
      </Paragraph>

      <Paragraph>
        Los
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela05.jpg")
          }
        }}> mineros</StoryMedia> se quejan de todos los extorsionadores que les cobran un “impuesto” por trabajar o llevar equipos, pero no hay muchas más opciones.
      </Paragraph>

      <Paragraph>
        “Vamos a la mina en grupos para cuidarnos entre nosotros”, dijo un minero artesanal que viste una camiseta de la Misión Piar, un programa gubernamental destinado a combatir la minería ilegal. “[Los grupos armados] nos quitan los celulares y las pertenencias para ingresar a las minas. Nos hace falta el trabajo, pero si nos quejamos no nos permiten regresar”.
      </Paragraph>

      <SubTitle>
        El laberinto del oro esquiva al Banco Central
      </SubTitle>

      <Paragraph>
        Luis Rosales, un abogado de la ciudad de Valencia, a unos 125 kilómetros de Caracas, llegó hace dos años a la localidad minera con la esperanza de trabajar allí. Ahora es un comerciante informal de implementos para la minería.
      </Paragraph>

      <Paragraph>
        “Familias de todas partes están durmiendo en el terminal de autobuses y en la plaza, buscándose la vida, no sólo con el oro, sino con la venta informal de cualquier cosa”, dice. “Aquí se sufre pero se logra llevar el pan a la casa”, agrega.
      </Paragraph>

      <Paragraph>
        En El Callao y sus alrededores, los mineros y sus familias viven en casuchas hechas de palos y bolsas de plástico a manera de paredes. La criminalidad es rampante y abundan las enfermedades epidémicas como el paludismo.
      </Paragraph>

      <Paragraph>
        El gobierno venezolano no ha difundido cifras actualizadas de la incidencia de la malaria, pero según la
        <FileLink
        href={require("documents/chapter1/WHO-World_Malaria_Report.pdf")}
        format="pdf"
        size="6.9MB"> Organización Mundial de la Salud (OMS), Venezuela registró 411.586 casos nuevos en 2017</FileLink>
        , un repunte de 811% en comparación con 2010. Y la zona minera de Bolívar es donde ocurre la mayoría de los casos, según expertos.
      </Paragraph>

      <Paragraph>
        Sin medidas de seguridad,
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela03.jpg")
          }
        }}> hombres, mujeres y niños excavan con sus propias manos o con herramientas precarias</StoryMedia> para extraer una grama, como se le llama localmente a la medida de un gramo de oro, que quintuplica el salario mínimo en Venezuela, equivalente a 7 dólares actualmente.
      </Paragraph>

      <Paragraph>
        La promesa generada por las riquezas del oro, mientras otros sectores de la economía venezolana se han derrumbado, ha provocado una migración masiva hacia el sur del país.
      </Paragraph>

      <Paragraph>
        Ahora, dragas, bombas de succión, palas, picos y botellas de mercurio y de cianuro son cada vez más comunes en el sur de Venezuela, lo que amenaza con contaminar los ríos y los peces.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "I6TZZVQ4RVE"
        }
        }}> Los mineros también inhalan el vapor de mercurio que se libera durante la quema de las amalgamas</StoryMedia>
        . El Programa de Naciones Unidas para el Medio Ambiente (PNUMA) dice que <ExternalLink href="https://www.unenvironment.org/news-and-stories/press-release/world-comes-together-tackle-mercury-poisoning/" language="en">no hay cura para el envenenamiento con mercurio</ExternalLink>{" "}, que puede causar daños neurológicos irreversibles.
      </Paragraph>

      <Paragraph>
        Para complicar el cuadro, aproximadamente
        <FileLink
        href={require("documents/chapter1/CECODAP-Peligros_y_Vulneraciones_de_DDHH_de_Ninos_Ninas_y_Adolescentes_en_la_Frontera_y_Actividades_Mineras.pdf")}
        format="pdf"
        size="3.3MB"> 45% de los mineros en la región de El Callao son niños o adolescentes</FileLink>
        , según un informe de Cecodap, una ONG que vela por los derechos de los niños y adolescentes en Venezuela.
      </Paragraph>

      <Paragraph>
        La Organización para la Cooperación y el Desarrollo Económico (OCDE) y la Unión Europea definen los “minerales conflictivos” como la minería que contribuye al trabajo forzado, el lavado de dinero, el trabajo infantil y abusos a los derechos humanos. Todos estos ingredientes están presentes en las minas ilegales de oro en Venezuela.
      </Paragraph>

      <SubTitle>
        La fuerte demanda
      </SubTitle>

      <Paragraph>
        La demanda global de oro en 2018 fue de 4.435 toneladas, y casi la mitad de esa demanda es del sector de las joyas.
      </Paragraph>

      <Paragraph>
        Venezuela ocupa el puesto 32, según el Consejo Mundial del Oro – con una producción de 23 toneladas en 2018. El
        <FileLink
        href={require("documents/chapter1/Venezuela_government-Plan_Sectorial_Minero_2019-2025.pdf")}
        format="pdf"
        size="8.2MB"> Plan Sectorial Minero 2019-2025</FileLink>
        , presentado por Maduro en junio, fija la meta de producción de oro de 2019 en 25,4 toneladas y en 79,4 toneladas para 2025.
      </Paragraph>

      <Paragraph>
        Para lograr esas metas, el gobierno dice que planea “coordinar, organizar y controlar la minería a pequeña escala dentro del Arco Minero del Orinoco”.
      </Paragraph>

      <Paragraph>
        Hay dos grandes grupos que en este momento controlan el oro que producen los
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela06.jpg")
          }
        }}> mineros artesanales de manera informal</StoryMedia>
        . Uno es un grupo de inversionistas privados y el otro es la estatal Minerven.
      </Paragraph>

      <Paragraph>
        Los operadores privados compran oro a los mineros ilegales y lo venden a los mayoristas, quienes “en teoría” lo venden al Banco Central de Venezuela, dijo uno de los 570 compradores locales de oro de El Callao, quien maneja alrededor de  dos kilogramos de oro a la semana.
      </Paragraph>

      <Paragraph>
        “Esto casi nunca ocurre”, explica. “[Mayoristas] saben que deja mejores ganancias sacarlo [el oro] del país a través del contrabando, que paga en dólares y no en bolívares como lo paga el Estado”.
      </Paragraph>

      <Paragraph>
        Minerven es el principal suministrador de oro del Banco Central de Venezuela, que a su vez vende el oro a <ExternalLink href="https://runrun.es/rr-es-plus/376055/mas-de-73-toneladas-de-oro-de-venezuela-salieron-en-33-vuelos-rumbo-a-dubai-y-turquia-en-2018/" language="es"> clientes en países como Turquía y los Emiratos Árabes Unidos</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Minerven también recibe la mayor parte de su oro de
        <StoryMedia
        media={{
          id: "image-5",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela04.jpg")
          }
        }}> mineros a pequeña escala</StoryMedia> y cooperativas, aunque reconoce que el metal proviene de la minería ilegal, dijo un representante de la compañía que pidió no ser identificado.
      </Paragraph>

      <Paragraph>
        Fundada en 1970, Minerven ha sufrido profundos cambios tres veces en los últimos 10 años en medio del colapso de la producción. Después de alcanzar una producción de oro de 12,23 toneladas en 2009, la producción se desplomó entre 2010 y 2015, cuando las mineras internacionales se marcharon del país.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/YSsof/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Incluso para los empleados de la empresa, las operaciones de Minerven están rodeadas de misterio y el gobierno de Maduro no ofrece información sobre la compra y venta de oro.
      </Paragraph>

      <Paragraph>
        “¿Cuánto [oro] produce Minerven? Nosotros tampoco sabemos, pero sigue produciendo”, dijo uno de sus empleados. “No sabemos cuánto porque eso nunca se ha informado públicamente, y es preocupante”.
      </Paragraph>

      <Paragraph>
        Cuando se les pidió una declaración, ninguno de los organismos gubernamentales venezolanos respondió a nuestras solicitudes.
      </Paragraph>

      <SubTitle>
        Rutas de contrabando
      </SubTitle>

      <Paragraph>
        El gobierno de Venezuela considera El Callao una “zona militar especial” y la mantiene bajo un
        <StoryMedia
        media={{
          id: "image-6",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela02.jpg")
          }
        }}> fuerte control de seguridad</StoryMedia>
        . En un día cualquiera es posible ver también grupos de encapuchados con armas automáticas patrullando las calles y escoltando a “altos funcionarios” del gobierno que salen y entran de las plantas de Minerven a toda hora.
      </Paragraph>

      <Paragraph>
        A pesar de la presencia militar, la zona es el punto inicial de las rutas de contrabando que llevan a Guyana, Brasil y Colombia. Y los grupos delictivos organizados usan “mulas” humanas, lanchas, carros blindados y avionetas para evadir cualquier dispositivo de seguridad.
      </Paragraph>

      <Paragraph>
        En el vecino poblado de Guasipati, el oro sale en avión en vuelos privados con destino a Aruba, Curazao, Dominica y Puerto Rico, dijo un funcionario. Pero hay otras rutas de contrabando, como de la ciudad industrial de Ciudad Guayana a República Dominicana y Honduras, desde donde se envía a Estados Unidos.
      </Paragraph>

      <SubTitle>
        Mulas de oro
      </SubTitle>

      <Paragraph>
        Para sacar de contrabando el oro ilegal y llevarlo a Colombia, las organizaciones delictivas usan una red de transportistas humanos de oro, llamados mulas.
      </Paragraph>

      <Paragraph>
        A diferencia de lo que ocurre con los narcotraficantes, los traficantes de oro no se tragan el producto, sino que lo llevan en la ropa, en los zapatos o en sus partes íntimas. El gobierno venezolano considera el oro un activo estratégico, y los contrabandistas, si son atrapados, pueden ser castigados severamente. También son amenazados por las bandas criminales y los soldados que operan las minas y controlan las fronteras.
      </Paragraph>

      <Paragraph>
        Ramón, una de las mulas, fue reclutado en Caracas hace unos meses.
      </Paragraph>

      <Paragraph>
        Al relatar su historia a la <ExternalLink href="http://elestimulo.com/climax/category/climax/" language="es">revista Clímax</ExternalLink>{" "}, Ramón, quien usó un nombre ficticio por razones de seguridad, dijo que viajó en autobús desde Caracas hasta Upata, en el estado Bolívar, donde lo recogió un grupo de personas que viajaban en dos Toyota 4Runner.
      </Paragraph>

      <Paragraph>
        Antes de montarse en el vehículo le quitaron la tarjeta SIM y la batería a su teléfono celular, le colocaron unos audífonos y le taparon la cabeza con una bolsa de tela.
      </Paragraph>

      <Paragraph>
        Horas más tarde, cuando le quitaron la capucha, ya estaba en Las Claritas, un poblado minero cerca de la frontera con Brasil. Allí pasó cuatro días incomunicado en un campamento improvisado, custodiado por dos hombres encapuchados con armas largas.
      </Paragraph>

      <Paragraph>
        Al cuarto día, Ramón salió de Las Claritas con tres kilos de oro escondidos en la suela de los zapatos, la chaqueta y en las costuras del pantalón. Otros dos compañeros de travesía llevaban dos kilos adicionales de oro.
      </Paragraph>

      <Paragraph>
        Viajaron en helicóptero desde Las Claritas hasta Ciudad Bolívar, a 486 kilómetros de distancia, donde los esperaban autobuses de la empresa de transporte Encava para llevarlos a un poblado costero que “se parecía a Cumaná”, en el norte de Venezuela. Allí fueron recibidos por un soldado, que los llevó a una avioneta sin pedirles identificación, que los trasladó a un aeropuerto privado en Táchira, cerca de la frontera con Colombia.
      </Paragraph>

      <Paragraph>
        Una camioneta Ford Explorer los llevó a la ciudad fronteriza de San Antonio donde le ordenaron cruzar a pie el
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "px6c8nKTiRs"
        }
        }}> puente internacional Simón Bolívar</StoryMedia>
        , que enlaza a las dos naciones.
      </Paragraph>

      <Paragraph>
        Ramón fue preso del pánico. Sabía que si lo pillaban con el contrabando de oro enfrentaba unos 30 años de prisión. Pero siguió las órdenes y, usando ciertas contraseñas para identificarse con los soldados ya sobornados, logró cruzar el puente sin ningún inconveniente.
      </Paragraph>

      <Paragraph>
        En la mitad de la puente, en un punto de control de Migración Colombia, lo recibe una mujer corpulenta, y después de dirigirse a ella por su nombre de pila, como le habían indicado, le dijo sencillamente “pasa”, sin revisar papeles ni documento de identidad. Ahí fue cuando Ramón se dio cuenta que “el complot también existe en Colombia”.
      </Paragraph>

      <Paragraph>
        En la ciudad fronteriza de Cúcuta, Colombia, esperó por sus otros dos compañeros, que cruzaron la frontera por las <i>trochas</i>, que son senderos rústicos.
      </Paragraph>

      <Paragraph>
        Llamaron por teléfono a un ecuatoriano que debía comprar el oro y acordaron verse en un restaurante de comida rápida en el centro de la ciudad. Cuando entraron al establecimiento, alguien cerró las puertas y los empleados desaparecieron.
      </Paragraph>

      <Paragraph>
        El negociante sacó una bolsa llena de billetes de 100 dólares y una balanza para pesar el oro. Pagó lo que debía y se marchó. Por llevar el oro venezolano a Colombia, a Ramón le pagaron 1.500 dólares.
      </Paragraph>

      <SubTitle>
        En la frontera
      </SubTitle>

      <Paragraph>
        En el estado Zulia, en el noroeste de Venezuela, una fila de unos 40
        <StoryMedia
        media={{
        id: "video-4",
        type: "youtube",
        data: {
          id: "q9YYbtXbW2g"
        }
        }}> camiones de carga pesada esperan su turno en la oscuridad para cruzar el punto fronterizo</StoryMedia> de Paraguachón y entrar a Colombia.
      </Paragraph>

      <Paragraph>
        A eso de las 11 de la noche, los camiones encienden los motores y empiezan a tocar sus cornetas. Guardias nacionales venezolanos los autorizan a pasar sin revisarles la carga, y pasan entonces junto a los agentes de Migración Colombia sin detenerse.
      </Paragraph>

      <Paragraph>
        Esta frontera ha estado cerrada oficialmente desde el 7 de septiembre de 2015, cuando Maduro la bloqueó para evitar el contrabando de alimentos, combustible y medicamentos. Pero eso no ha evitado que se convierta en una vía franca de camiones que transportan ilegalmente bienes, como oro contrabandeado.
      </Paragraph>

      <Paragraph>
        La carretera Troncal del Caribe, que conecta a Venezuela con Colombia, tiene al menos 14 puntos de control de la Guardia Nacional, el Ejército y la policía regional. Pero nadie se atreve a revisar los camiones, según funcionarios locales.
      </Paragraph>

      <Paragraph>
        Muchos de esos transportes tienen un salvoconducto emitido por la Zona Estratégica de Defensa del Zulia (ZODI), una de las divisiones territoriales de Venezuela bajo gestión militar, que avala en un manifiesto que “son productos de exportación”, dijo un cabo de la 13ra Brigada de Infantería, quien pidió no ser identificado.
      </Paragraph>

      <Paragraph>
        “Si revisamos estos vehículos podemos meternos en problemas”, dijo. “Parece que los dueños de los vehículos tienen influencia y podemos perder el trabajo”.
      </Paragraph>

      <Paragraph>
      <StoryMedia
      media={{
      id: "video-5",
      type: "youtube",
      data: {
        id: "4KmM18jPIL0"
      }
      }}>El militar afirmó que los vehículos muchas veces transportan coltán, un mineral que se usa en la fabricación de dispositivos electrónicos, así como oro, plata y otros bienes que deben exportarse.</StoryMedia>
      </Paragraph>

      <Paragraph>
        “Lo sabemos porque cuando hemos revisado algunos vehículos encontramos desde cocaína líquida hasta oro, cualquier producto ilegal”, dijo el militar de 24 años.
      </Paragraph>

      <Paragraph>
        Cuando se les pidió una declaración, las Fuerzas Armadas de Venezuela y el Ministerio de Defensa no respondieron a las solicitudes.
      </Paragraph>

      <Paragraph>
        En el poblado de Maicao, Colombia, a poca distancia de Paraguachón, los negocios compran oro venezolano.
      </Paragraph>

      <Paragraph>
        En la joyería Amiga, un dependiente dice que compra hasta 150 gramos de oro venezolano, “que traen del sur del país; viene directo de las minas porque está en granitos”.
      </Paragraph>

      <Paragraph>
        El vendedor agrega que las personas que venden el metal precioso no son mineros ni trabajadores artesanales, sino militares.
      </Paragraph>

      <Paragraph>
        “Raramente he tratado con comerciantes que lo están comprando a bajo precio allá y lo están vendiendo a otro costo aquí”, dijo.
      </Paragraph>

      <Paragraph>
        Un miembro de la Guardia Nacional en Paraguachón, que pidió no ser identificado, describió que
        <StoryMedia
        media={{
        id: "video-6",
        type: "youtube",
        data: {
          id: "IaS9JTPETWM"
        }
        }}> detuvo el vehículo de un funcionario de gobierno</StoryMedia> en el poblado de Dabajuro en diciembre de 2018, a eso de las 2 de la madrugada.
      </Paragraph>

      <Paragraph>
        En la camioneta Toyota Hilux iban dos mujeres y el conductor. Los pasajeros dijeron que eran empleados de un ministerio y venían de Caracas, pero se mostraron nerviosos, por lo que el militar y otro compañero decidieron revisar el vehículo. Descubrieron que el vehículo en verdad venía de la zona minera de Tumeremo, en el estado Bolívar, y dentro encontraron una caja de cartón con 250 gramos de plata, 300 gramos de oro y 1.000 dólares en efectivo.
      </Paragraph>

      <Paragraph>
        Los asustados viajeros cambiaron la valiosa mercancía por su libertad.
      </Paragraph>

      <Paragraph>
        “El arresto y la confiscación quedaron sin efecto”, no se asentaron en los registros, dijo el soldado. “Y compartimos las ganancias”.
      </Paragraph>
    </Container>
  </article>
);
