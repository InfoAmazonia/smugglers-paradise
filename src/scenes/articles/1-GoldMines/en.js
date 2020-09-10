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
      <title>Gold Mines | Venezuela, the smugglers' paradise</title>
    </Helmet>
    <Container>
      <Title as="h2">Organized crime controls gold exploitation in Venezuela</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter1"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          All ingredients for a conflict mineral can be found in southern Venezuela. A dangerous cocktail of multiple armed groups and corrupt officials control the extraction of the country’s gold before taking it to the borders.
        </p>
      </Note>

      <Paragraph>
        The long road that starts in Ciudad Guayana, Bolívar state, and heads southward marks the route of illegal gold mining in Venezuela. Hundreds of people travel the route each day in search of El Dorado – riches that might allow them to flee from an unprecedented economic crisis in the South American country.
      </Paragraph>

      <Paragraph>
        Food, medication, fuel, and cash have been scarce for years in the rest of the country, but along these roads in southeastern Venezuela they’re available – as if the riches from gold mining have created a parallel world.
      </Paragraph>

      <Paragraph>
        The most important stop is El Callao, a town also in Bolívar state clustered between mountains about 530 miles (850 kilometers) from Caracas. El Callao is known for its colorful carnival but has been rebranded as the region’s mining capital.
      </Paragraph>

      <Paragraph>
        The explosion of mining has turned the place into a nightmare.
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Jorge Benezra",
            src: require("photos/chapter1/Venezuela01.jpg")
          }
        }}> Its streets are crowded with cars, motorcycles</StoryMedia>
        , and vendors who mostly sleep in public plazas as the hotels are fully booked.
      </Paragraph>

      <Paragraph>
        The once serene village had 20,000 inhabitants in 2011. It was a place where small businesses sold rudimentary gold jewelry and gold pebbles without fear of robberies. Now, some 100,000 people live in the area of El Callao and anywhere from 300,000 to 500,000 miners roam the numerous mines of southern Venezuela.
      </Paragraph>

      <Paragraph>
        El Callao is part of the Orinoco Mining Arc, a government-sponsored mega project that covers 12 percent of Venezuela’s surface.
      </Paragraph>

      <Paragraph>
        Launched by President Nicolás Maduro in February 2016, the project is an attempt to find resources in the wake of the collapse of the oil industry, which sustained the South American nation for a century. As part of the plan, the <ExternalLink href="https://mundo.sputniknews.com/entrevistas/201812151084165986-venezuela-riquezas-recursos-oro-diamantes/" language="es">government is trying to validate and certify gold reserves amounting to 9,810 tons (8,900 metric tons) by 2025</ExternalLink>{" "}. That would give Venezuela the world’s second-largest gold deposits.
      </Paragraph>

      <Paragraph>
        But it’s not all is abundance and glamour. Gold mining in the area used to be run by transnational corporations. Now, criminal groups and armed gangs monopolize the business. And the people of El Callao, like many villages in the south, have learned to live with the terror spread by armed groups.
      </Paragraph>

      <Paragraph>
        Local media has reported on the discovery of mass graves, but villagers say that many of the dead, victims of violence and disease, are never found and are hidden in the Venezuelan jungles.
      </Paragraph>

      <Paragraph>
        According to the Venezuelan Observatory of Violence, El Callao was the <ExternalLink href="https://observatoriodeviolencia.org.ve/ovv-lacso-informe-anual-de-violencia-2018/" language="es">most violent locality in Venezuela</ExternalLink>{" "} in 2018, with a homicide rate of 619.8 per 100,000 inhabitants.
      </Paragraph>

      <Paragraph>
        An employee of  the state-run Venezuela General Mining Company (Minerven), who wants to remain anonymous in fear of reprisals, explains that “irregular groups” are getting rich with the gold business.
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "20O0vWcLDv4"
        }
        }}> They force the miners and their families to live in hell, with practices that border on sadism, he describes</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Some witnesses, including miners who fled to Colombia, confirm these accusations and mention other abuses such as forced prostitution, torture, massacres and beheadings by armed groups that have control of the mines.
      </Paragraph>

      <Paragraph>
        Currently, several criminal elements dominate El Callao and the rest of the Orinoco Mining Arc. According to NGO’s, opposition legislators, and eyewitnesses, dissidents of the Revolutionary Armed Forces of Colombia (FARC) and members of Colombia’s National Liberation Army (ELN) are present in the mines of Bolívar and neighboring Amazonas state.
      </Paragraph>

      <Paragraph>
        Until recently, the FARC was the largest guerrilla group in Latin America. Based in Colombia and created in 1964 to fight for equal land distribution and the rural poor, it remained a guerrilla movement until it signed a peace deal in 2016. Now  ELN is the biggest guerrilla group on the continent.
      </Paragraph>

      <Paragraph>
        The two organizations share the territory with crime syndicates, or sindicatos, run by gang leaders known as <i>pranes</i>. There are also Committees for the Defense of the Revolution (CDR), which have started their own mining groups and are ideologically aligned with the Maduro government.
      </Paragraph>

      <Paragraph>
        The gangs, which have been in the mining area since 2010, used to be the dominant players but have lost ground to the Colombian guerrillas in recent years, said a 25-year-old National Guard soldier.
      </Paragraph>

      <Paragraph>
        He’s still amazed when he remembers the first time he saw the ELN march through Bolívar state.
      </Paragraph>

      <Paragraph>
        “We saw patrols of 200 armed men walking by our side identified as the ELN,” he said. “What are we supposed to do? We just greeted them as if they were old friends.”
      </Paragraph>

      <Paragraph>
        Control of the area by armed groups and corrupt military units prevents miners from speaking openly.
      </Paragraph>

      <Paragraph>
        “Here it is better not to comment if you want to be alive. There are a lot of mafias,” said a local entrepreneur who asked to remain anonymous. “The military arrived to do business, not to protect the citizens. Every week there is a murder.”
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela05.jpg")
          }
        }}>Miners</StoryMedia> complained that all the parties are extorting them, charging a “tax” to work or bring in equipment, but there are few other options.
      </Paragraph>

      <Paragraph>
        “We go to the mine and work in groups to take care of each other,” said an artisanal miner, who wears a shirt of the “Piar Mission,” a government program designed to fight illegal mining. “[The armed groups] take away our cell phones and our belongings before entering the mines. We need the work, but if we complain they don’t allow us to come back.”
      </Paragraph>

      <SubTitle>
        The labyrinth of gold avoids the Central Bank
      </SubTitle>

      <Paragraph>
        Luis Rosales, a lawyer from the city of Valencia, about 78 miles (125 kilometers) from Caracas, arrived in the mining town two years ago, hoping to work in the goldfields. Now, he sells mining tools on the street.
      </Paragraph>

      <Paragraph>
        “Families are sleeping everywhere, in the bus terminal and the square, trying to make a living, not only through gold but by selling whatever they can,” he said. “You suffer, but manage to put some food on the table.”
      </Paragraph>

      <Paragraph>
        In and around El Callao, miners and their families live in shacks made of wooden poles and plastic bags for walls. Crime and disease are rampant.
      </Paragraph>

      <Paragraph>
        The Venezuelan government has not released figures on malaria recently but the
        <FileLink
        href={require("documents/chapter1/WHO-World_Malaria_Report.pdf")}
        format="pdf"
        size="6.9MB"> World Health Organization registered 411,586 new cases in 2017</FileLink>
        , an increase of 811 percent since 2010. And the mining area around Bolívar state has the highest concentration of cases, according to experts.
      </Paragraph>

      <Paragraph>
        Without any sort of security measures,
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela03.jpg")
          }
        }}> men, women and children dig with their hands or use rudimentary tools looking for gold</StoryMedia>
        . If they can find una grama, a gram of gold (.04 ounces), they can make five times the monthly minimum wage, which is currently about 7 U.S. dollars.
      </Paragraph>

      <Paragraph>
        The promise of gold riches, as other sectors of the Venezuelan economy have collapsed, has triggered a mass migration to the south of the country.
      </Paragraph>

      <Paragraph>
        Now, dredging machines, suction pumps, pickaxes and shovels, cyanide and mercury are increasingly present in southern Venezuela, threatening to contaminate the fish stock.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "I6TZZVQ4RVE"
        }
        }}> Miners are also inhaling the mercury vapor that comes from burning gold amalgam</StoryMedia>
        . The United Nations Environment Program (UNEP) says there’s <ExternalLink href="https://www.unenvironment.org/news-and-stories/press-release/world-comes-together-tackle-mercury-poisoning/" language="en">no cure for mercury intoxication</ExternalLink>{" "}, which can cause irreparable neurological damage.
      </Paragraph>

      <Paragraph>
        To complicate matters, about
        <FileLink
        href={require("documents/chapter1/CECODAP-Peligros_y_Vulneraciones_de_DDHH_de_Ninos_Ninas_y_Adolescentes_en_la_Frontera_y_Actividades_Mineras.pdf")}
        format="pdf"
        size="3.3MB"> 45 percent of the miners in the region are children or adolescents</FileLink>
        , according to a report by Cecodap, an NGO that looks after the rights of children and adolescents in Venezuela.
      </Paragraph>

      <Paragraph>
        The Organization for Economic Cooperation and Development (OECD) and the European Union define “conflict minerals” as mining that contributes to forced labor, money laundering, child labor and human rights abuses. All these ingredients are present in Venezuela’s conflict-ridden mines.
      </Paragraph>

      <SubTitle>
        Booming Demand
      </SubTitle>

      <Paragraph>
        The global demand for gold in 2018 reached 4,888 tons (4,435 metric tons), almost half of it coming from the jewelry sector.
      </Paragraph>

      <Paragraph>
        Venezuela is currently the 32nd largest gold producer, according to the
        <FileLink
        href={require("documents/chapter1/Venezuela_government-Plan_Sectorial_Minero_2019-2025.pdf")}
        format="pdf"
        size="8.2MB"> World Gold Council</FileLink>
        , with an output of 25.3 tons (23 metric tons) in 2018. Maduro’s Mining Sector Plan sets production goals of 28 tons (25.4 metric tons) in 2019 and 87.5 tons (79.4 metric tons) by 2025.
      </Paragraph>

      <Paragraph>
        To hit those targets, the government says it plans to “coordinate, organize and control small scale mining inside the Orinoco Mining Arc.”
      </Paragraph>

      <Paragraph>
        There are two large groups currently soaking up the gold produced by small,
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela06.jpg")
          }
        }}> informal miners</StoryMedia>
        . One is a group of private investors; the other is Minerven.
      </Paragraph>

      <Paragraph>
        The private operators buy gold from illegal miners and sell it to wholesalers who then “in theory” sell it on to the Central Bank, said one of the 570 local gold buyers in El Callao, who handles about 4.4 pounds (2 kilos) of gold per week.
      </Paragraph>

      <Paragraph>
        “That hardly ever happens,” he explained. “[Wholesalers] make more money smuggling the [gold] out of the country and getting paid in dollars, and not the bolivares that the state is offering.”
      </Paragraph>

      <Paragraph>
        Minerven is the main supplier of gold to the Central Bank, which in turn sells the gold to <ExternalLink href="https://runrun.es/rr-es-plus/376055/mas-de-73-toneladas-de-oro-de-venezuela-salieron-en-33-vuelos-rumbo-a-dubai-y-turquia-en-2018/" language="es"> clients in countries such as Turkey and the United Arab Emirates</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Minerven also gets most of its gold from
        <StoryMedia
        media={{
          id: "image-5",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela04.jpg")
          }
        }}> small miners</StoryMedia> and cooperatives, even though it’s aware that it’s coming from illegal mining, said a company representative who asked for anonymity.
      </Paragraph>

      <Paragraph>
        Founded in 1970, Minerven has been overhauled at least three times in the last decade amid collapsing production. After hitting a production “milestone” of 13.48 tons (12.23 metric tons) in 2009, mining output collapsed from 2010-2015 as international mining companies pulled out of the country.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/I67fM/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Even for the company employees, Minerven’s operations are shrouded in mystery as the government produces no information on gold purchases or sales.
      </Paragraph>

      <Paragraph>
        “How much [gold] is Minerven producing? We don’t know that either, but they continue to produce,” one of its employees said. “We don’t know how much because it’s never made public and that’s worrying.”
      </Paragraph>

      <Paragraph>
        When asked for a statement, none of the Venezuelan government agencies replied to our requests.
      </Paragraph>

      <SubTitle>
        Smuggling routes
      </SubTitle>

      <Paragraph>
        The government considers El Callao a “special military zone” and keeps it
        <StoryMedia
        media={{
          id: "image-6",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela02.jpg")
          }
        }}> heavily guarded</StoryMedia>
        . On any given day, groups of hooded military men with automatic weapons patrol the streets and escort government “high officials” who leave and enter the Minerven plants at all times.
      </Paragraph>

      <Paragraph>
        But despite the military presence, the area is the starting point for smuggling routes that lead to neighboring Guyana, Brazil and Colombia. And criminal organizations use human “mules,” boats, armored cars and small planes to avoid scrutiny.
      </Paragraph>

      <Paragraph>
        In the neighboring town of Guasipati, gold is flown out on private flights to Aruba, Curaçao, Dominica and Puerto Rico, an official said. But other trafficking routes exist, including from the industrial city of Ciudad Guayana to the Dominican Republic and Honduras, with the United States as the final destination.
      </Paragraph>

      <SubTitle>
        Gold mules
      </SubTitle>

      <Paragraph>
        To smuggle the illegal gold into neighboring Colombia, criminal organizations use a network of young carriers or “mules” for the job.
      </Paragraph>

      <Paragraph>
        While drug mules often swallow their product to smuggle it across a border, gold mules take the ingots and grams of gold hidden under their clothes or inside their body cavities. Gold is considered a strategic asset by the Veneuzelan government and smugglers, if they’re caught, can be severely punished. They’re also threatened by the criminal gangs and the soldiers who operate the mines and control the borders.
      </Paragraph>

      <Paragraph>
        Ramón, one of the gold mules, was recruited in Caracas early this year.
      </Paragraph>

      <Paragraph>
        Telling his story to <ExternalLink href="http://elestimulo.com/climax/category/climax/" language="es">Clímax magazine</ExternalLink>{" "}, Ramón, who used a fictitious name for security reasons, said he traveled by bus from Caracas to Upata, in Bolívar state. There he was picked up by people driving two white Toyota 4Runner.
      </Paragraph>

      <Paragraph>
        They removed the SIM card and battery from his telephone, covered his head with a cloth bag and put headphones over his ears.
      </Paragraph>

      <Paragraph>
        Hours later, when they removed the hood, he was in Las Claritas, a mining town near the Brazilian border. He spent four days incommunicado in a makeshift camp guarded by two hooded men with automatic weapons.
      </Paragraph>

      <Paragraph>
        On the fourth day, Ramón left Las Claritas carrying 6.6 pounds (three kilos) of gold hidden in the soles of his shoes, in his jacket and in the seam of his trousers. Another 4.4 pounds (two kilos) of gold were divided between two fellow passengers.
      </Paragraph>

      <Paragraph>
        They traveled by helicopter from Las Claritas to Ciudad Bolívar, about 302 miles (486 kilometers) away, where buses belonging to the Encava transportation company took them to a coastal town that “looked like Cumaná” in northern Venezuela. There, they were met by a soldier in uniform and put on a plane without having to show identification papers and flown to a private airport in Táchira state, along the border with Colombia.
      </Paragraph>

      <Paragraph>
        A Ford Explorer took them to the border town of San Antonio, where they walked across the
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "px6c8nKTiRs"
        }
        }}> Simón Bolívar International Bridge</StoryMedia> that connects to Colombia.
      </Paragraph>

      <Paragraph>
        Ramón panicked. He knew that if he was caught with contraband gold, he could take about 30 years in prison. But he followed the orders he was given and, using certain passwords to identify himself to the soldiers, he walked across the bridge unimpeded.
      </Paragraph>

      <Paragraph>
        When he reached Colombia immigration he was received by a corpulent woman. After using her first name, as he’d been instructed, she told him to “go on” without checking his papers or identity documents. That’s when Ramon realized that the smuggling scheme “also exists in Colombia.”
      </Paragraph>

      <Paragraph>
        In the Colombian border town of Cúcuta he waited for his two companions, who entered the country on informal trails, or <i>trochas</i>.
      </Paragraph>

      <Paragraph>
        They called the buyer, a man from Ecuador, and agreed to handoff the gold at a fast-food chicken restaurant in the city center. When they walked into the establishment the doors were locked behind them and the employees disappeared.
      </Paragraph>

      <Paragraph>
        The businessman pulled out a bag full of 100 U.S. dollars bills and a scale to weigh the gold. He paid and left. For transporting Venezuelan gold to Colombia, Ramón was paid 1,500 U.S. dollars.
      </Paragraph>

      <SubTitle>
        On the border
      </SubTitle>

      <Paragraph>
        In Zulia state, in northwestern Venezuela, a long line of about 40
        <StoryMedia
        media={{
        id: "video-4",
        type: "youtube",
        data: {
          id: "q9YYbtXbW2g"
        }
        }}> cheavy cargo trucks idle in the dark, waiting to cross the</StoryMedia> Paraguachón checkpoint into Colombia.
      </Paragraph>

      <Paragraph>
        At about 11 p.m. the trucks turn on their engines and start honking their horns. Venezuela’s National Guard wave them through without inspecting the cargo, and the trucks roll by Colombian migration unimpeded.
      </Paragraph>

      <Paragraph>
        This border has been officially closed since Sept. 7, 2015, when Maduro shut it down to prevent the smuggling of food, fuel, and medicine. But that hasn’t stopped it from becoming a thoroughfare for trucks hauling illicit goods, including smuggled gold.
      </Paragraph>

      <Paragraph>
        The Troncal del Caribe, which connects Venezuela and Colombia, has at least 14 checkpoints run by the Venezulean National Guard, Army and regional police. But no one dares interrupt the flow of cargo trucks or inspect them, according to local officials.
      </Paragraph>

      <Paragraph>
        Many of the trucks have special passes, <i>salvoconductos</i>, issued by the Zulia Defense Strategic Zone (ZODI), a military division that claims the trucks are carrying “export products,” said an Army corporal with the 13th Infantry Brigade who asked not be identified.
      </Paragraph>

      <Paragraph>
        “If we check these vehicles, we can get into trouble,” he said. “It appears that the owners of the vehicles are influential people, who can put our jobs at risk.”
      </Paragraph>

      <Paragraph>
      <StoryMedia
      media={{
      id: "video-5",
      type: "youtube",
      data: {
        id: "4KmM18jPIL0"
      }
      }}>The official said the trucks are often carrying coltan, silver, gold and other items that shouldn’t be exported.</StoryMedia>
      </Paragraph>

      <Paragraph>
        “We know this because when we have checked some cars, we found everything from liquid cocaine to gold and other illegal products,” said the 24-year-old soldier.
      </Paragraph>

      <Paragraph>
        When asked for a statement, the Venezuelan Armed Forces and Ministry of Defense didn’t reply to our requests.
      </Paragraph>

      <Paragraph>
        In the town of Maicao, Colombia, just eight miles from the Venezuelan border, shops buy the Venezuelan gold.
      </Paragraph>

      <Paragraph>
        At a shop called Amiga, a merchant says he buys up to 5.3 ounces (150 grams) of Venezuelan gold, “which is brought from the south of the country; it comes directly from the mines because it is in grains.”
      </Paragraph>

      <Paragraph>
        He says the people selling the precious metal are not miners but military officials.
      </Paragraph>

      <Paragraph>
        “Rarely have I dealt with traders who are buying it there cheaply and selling it at another cost here,” he said.
      </Paragraph>

      <Paragraph>
        A Venezuela National Guardsman in Paraguachón, who insisted on anonymity, described how he
        <StoryMedia
        media={{
        id: "video-6",
        type: "youtube",
        data: {
          id: "IaS9JTPETWM"
        }
        }}> stopped an official government vehicle</StoryMedia> in the town of Dabajuro in December, 2018, at about 2 a.m.
      </Paragraph>

      <Paragraph>
        It was a Toyota Hilux with two women and a male driver. The passengers said they worked for the government and were coming from Caracas but they seemed nervous so the soldier and his partner conducted a search. They discovered the car was actually coming from the mining area of Tumeremo, in Bolivar state, and inside they found a cardboard box with 8.8 ounces (250 grams) of silver, 10.6 ounces (300 grams) of gold and 1,000 U.S. dollars in cash.
      </Paragraph>

      <Paragraph>
        The panicked travelers exchanged their valuable cargo for their freedom.
      </Paragraph>

      <Paragraph>
        “The arrest and confiscation were without effect,” scrubbed from the record, the soldier said, “and we shared the profit.”
      </Paragraph>
    </Container>
  </article>
);
