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
      <title>Jungle Fever | Venezuela, the smugglers' paradise</title>
    </Helmet>
    <Container>
      <Title as="h2">The gold rush in the Amazon terrorizes indigenous lands</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter3"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Indigenous communities are exposed to violence and contaminating mining practices in the forgotten southern borderlands of Colombia and Venezuela. In the Amazon, rivers are the highways of the jungle and provide traffickers with an excellent opportunity to transport their merchandise.
        </p>
      </Note>

      <Paragraph>
        A merchant stands on the deck of a small boat packed with food and canned goods – a floating supermarket –
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "w7STTabEpLM"
        }
        }}> as ranchero music blasts through speakers</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        His tipsy eyes gaze across the massive but slow-moving Orinoco River that separates his business in the village of Amanavén, Colombia, from neighboring Venezuela, visible on the other side of the water.
      </Paragraph>

      <Paragraph>
        Does he know anything about the local gold trade?
      </Paragraph>

      <Paragraph>
        “Yes, this is where it comes in,” he says while carefully opening his third beer.
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
      >The food and supplies he and a few other boats</StoryMedia> sell are mainly to people stocking up before following the curve of the river into Venezuela.
      </Paragraph>

      <Paragraph>
        Their destination? The gold mines of Yapacana National Park in the Venezuelan Amazon, scattered around a mountain complex and a national park of the same name.
      </Paragraph>

      <Paragraph>
        There, amid the jungle humidity, some 5,000 to 10,000 miners dig for gold. But they are not alone. Two Colombian guerrilla groups and corrupt elements of the Venezuelan National Guard are also in control and collect large amounts of the precious metal.
      </Paragraph>

      <Paragraph>
        On a neighboring boat, the owner wants to show off some of the gold pulled from the mines. He disappears behind a curtain and returns with
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida05.jpg")
          }
        }}> 4.16 ounces (118 grams)</StoryMedia>
        , of metal worth about 6,000 U.S. dollars.
      </Paragraph>

      <Paragraph>
        “This is for the military from the other side,” he says, referring to the Venezuelan National Guard. “It’s to pay their ‘tax.’” – an extortion payment.
      </Paragraph>

      <Paragraph>
        With the complicity of Venezuelan law enforcement, the environmentally protected Yapacana park is being destroyed by illegal gold mining. In addition, dredges plow the rivers around the park and toxic mercury – used to bind gold flakes – is poisoning the regional water supply.
      </Paragraph>

      <Paragraph>
        A 2017 study found that communities living along Colombia’s Atabapo, Guainía and Inírida rivers, near the Venezuelan mine, had about <ExternalLink href="https://www.eltiempo.com/vida/medio-ambiente/poblacion-de-guania-tiene-niveles-de-mercurio-mas-altos-que-el-promedio-129712" language="es">60 times the maximum safe level of mercury</ExternalLink>{" "} recommended by the World Health Organization. Those three rivers provide much of the water for populations of southern Colombia, Venezuela, and northern Brazil.
      </Paragraph>

      <Paragraph>
        About a 45-minute boat ride southeast of Amanavén is Puerto Inírida, the capital of Colombia’s Guainía department.
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "9AiAmruntJ8"
        }
        }}> The area around it is called the Estrella Fluvial del Oriente (River Star of the East), where several rivers are born</StoryMedia>
        . Hundreds of tributaries nourish the nine main rivers of the region that snake through the dense tropical rainforest of the department, functioning as jungle highways and offering safe passage for traffickers of all sorts.
      </Paragraph>

      <Paragraph>
        Added to the city’s 20,000 inhabitants, about 5,000 are Venezuelan, local officials said. The migrants and refugees are stuck in the jungle city, which is a bottleneck as there are no inland road connections. On the outskirts of town, many people live in shacks made of plastic sheets, bamboo sticks and pieces of tin.
      </Paragraph>

      <Paragraph>
        The few paved roads in Inírida are full of potholes and dominated by an unjustifiable amount of
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "6kYhEF6n3nE"
        }
        }}> tricycle motor-taxis</StoryMedia> called <i>ratones</i> (rats) that buzz around and aggressively honk while hunting for passengers. Amid the chaotic and noisy scene, miners, looking dazed after weeks or months of toiling in the jungles of Venezuela, straggle into town.
      </Paragraph>

      <SubTitle>
        Inírida’s underground economy
      </SubTitle>

      <Paragraph>
        An indigenous Colombian man in his 50s, wearing a baseball cap, stumbles into one of the many gold <i>compraventas</i> that buy and sell gold.
      </Paragraph>

      <Paragraph>
        After eight days of backbreaking work he has
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida06.jpg")
          }
        }}> 2.2 ounces (64 grams)</StoryMedia>
        . But he started off with much more.
      </Paragraph>

      <Paragraph>
        The man runs through a list of the armed groups and corrupt military officials he had to pay off at river checkpoints between Venezuela’s mines and Puerto Inírida:
      </Paragraph>

      <Paragraph>
        ▪ Five grams, worth as much as 230 U.S. dollars in the international market, to the ‘<i>wachiman</i>’ – watchmen overseeing the miners and reporting to the National Guard or guerrillas;<br />
        ▪ Five grams to an indigenous community close to the mines;<br />
        ▪ Five grams to the “guerrillas”;<br />
        ▪ Three grams to the National Guard at a checkpoint near Santa Barbara;<br />
        ▪ One gram to the Venezuelan Navy;<br />
        ▪ Half a gram to the municipality of Atabapo.
      </Paragraph>

      <Paragraph>
        In addition to those 19.5 grams paid in “taxes,” he also needed to pay for food and transport.
      </Paragraph>

      <Paragraph>
        But the tolls may be better than the alternative. One of the few ways to avoid them requires a four-day hike through the Venezuelan jungle and a three-day boat ride.
      </Paragraph>

      <Paragraph>
        The Venezuelan gold trickles across the entire southern border. Paujil, just next to Puerto Inírida, is an area often mentioned as the entrance point for contraband goods, but Puerto Inírida counts with many
        <StoryMedia
        media={{
        id: "video-4",
        type: "youtube",
        data: {
          id: "HR2oc-VaUPo"
        }
        }}> informal harbors</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Bystreets suddenly disappear in one of the rivers and become docking points where narrow wooden boats can slide in with their cargo, which makes the trade very hard to control. But locals said police prey on the miners. One pawnshop owner said the police are always “impounding” gold, but actually stealing it. “This is an injustice,” he said.
      </Paragraph>

      <Paragraph>
        Miners sell their gold at <i>compraventas</i> – often unmarked shops with tinted windows – found throughout the city. At one anonymous shop with white walls and plastic chairs, a woman was breastfeeding her baby as others were biding their time waiting for their gold to be weighed.
      </Paragraph>

      <Paragraph>
        The owner of the <i>compraventa</i>, Bryan, who asked to remain anonymous, sits in a back room where he does his paperwork. He explained that he legally buys gold from Colombian  <i>barequeros</i> – artisanal miners who employ rudimentary methods and are allowed to sell up to 14.8 ounces (420 grams) a year. He has about 200  <i>barequeros</i> registered in his books and hopes to enroll 300 more.
      </Paragraph>

      <Paragraph>
        By registering hundreds, if not thousands, of small artisanal miners, gold vendors like Bryan can justify large quantities of gold sales. But the system is rife with fraud.
      </Paragraph>

      <Paragraph>
        Often times the IDs used to justify a mining haul belong to deceased people, or waiters and garage attendants who loan out their IDs in exchange for money, Colombian intelligence said.
      </Paragraph>

      <Paragraph>
        Other times Venezuelan gold is registered under a Colombian mining title, at least on paper. In reality “it's a field with cows,” laughs another Colombian intelligence official about the existence of these phantom mines reporting fake production numbers.
      </Paragraph>

      <Paragraph>
        Even though the gold comes from Venezuela, if the papers say it comes from a Colombian mine, royalty taxes are paid to the state.
      </Paragraph>

      <Paragraph>
        Bryan can’t guarantee that no Venezuelan gold enters his shop, but he says most of his metal comes from Colombian mines. He usually takes it to Bogotá to sell to merchants a size bigger than himself.
      </Paragraph>

      <Paragraph>
        Nobody at the
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
      > local airport gives him trouble or checks his gold</StoryMedia>
      , he said. Bryan carries the metal in a backpack and changes his shirt on the plane. He worries someone in Bogotá might have been tipped off about what he was wearing and try to steal his cargo.
      </Paragraph>

      <Paragraph>
        Another man involved in the gold circuit, Juan Pablo, who also did not want to give his real name, laughs when asked whether Bryan sells Colombian gold.
      </Paragraph>

      <Paragraph>
        “That’s a big lie,” he says, chuckling. And a customs representative in Puerto Inírida agrees that most of the gold that goes through town comes from Venezuela.
      </Paragraph>

      <Paragraph>
        “The underworld of gold sustains the economy,” he said.
      </Paragraph>

      <Paragraph>
        While some pawnshop owners
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida07.jpg")
          }
        }}> “legalize” their gold</StoryMedia> providing paperwork that shows that it came from Colombian operations, not all go through the trouble, Juan Pablo said.
      </Paragraph>

      <Paragraph>
        “They get the gold out, but illegally,” he said, explaining that male traffickers hide the gold near their testicles while females put it between their breasts or in their underwear.
      </Paragraph>

      <Paragraph>
        Profit margins are often between one or two U.S. dollars each .03 ounce (a gram). If a trafficker is sent with gold to Bogotá, an owner of a pawn shop explains, quantities above 2.2 pounds (one kilo) are taken to make the trip worthwhile. A courier or smuggler can make about 188 U.S. dollars for carrying a kilo of gold to the capital.
      </Paragraph>

      <Paragraph>
        For the authorities, it’s complicated to trace the origins of the gold. Exporters often buy the metal from dozens of shell companies that are difficult, if not impossible, to track down.
      </Paragraph>

      <Paragraph>
        “After the gold is turned into a bar, after it’s extracted, it’s very difficult to know where the gold came from,” says a representative from Colombia’s customs agency.
      </Paragraph>

      <SubTitle>
        Abandoned indigenous
      </SubTitle>

      <Paragraph>
        The jungle hinterlands bordering Venezuela are among Colombia’s most impoverished and neglected regions, forcing the communities, historically, to rely on illicit activities for their survival. A lack of opportunities pushed its inhabitants in pendular movements between poaching wild animals for their skin and teeth, illegal mining and the cultivation of the coca plant for cocaine production.
      </Paragraph>

      <Paragraph>
        Because unemployment is so high in Guainía, its largely indigenous inhabitants look for work in the Venezuelan mines. An indigenous leader said the situation in Venezuela is even worse. In one community, Caño Grulla, only 30 out of about 500 families remain. Everybody else went to the mines.
      </Paragraph>

      <Paragraph>
        As young people leave their families to look for gold, school desertion rates in the region are skyrocketing, according to Luis Enrique Amado Prieto, director of the Social and Pastoral Care Branch in southeastern Colombia.
      </Paragraph>

      <Paragraph>
        The allure of gold is also tearing apart traditional community life. Domestic violence caused by alcohol abuse is on the rise, as is malaria, which is rampant in the mines and has become an epidemic in these communities.
      </Paragraph>

      <Paragraph>
        As the mining frontier expands, the survival of indigenous culture is under threat, said
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida11.jpg")
          }
        }}> Plinio Yavinape, an indigenous elder</StoryMedia> living close to Puerto Inírida.
      </Paragraph>

      <Paragraph>
        “It can be fatal for a community,” he said of the gold rush. “For a little money, people are killing each other.”
      </Paragraph>

      <Paragraph>
        Teachers are reportedly
        <FileLink
        href={require("documents/chapter3/SOS_Orinoco-Gold_Mining_Activity_in_Yapacana_National_Park.pdf")}
        format="pdf"
        size="11.8MB"> paid in gold in schools set up</FileLink> in between the Yapacana mines. According to Juan Alberto Sánchez, coordinator of security and citizen coexistence in Puerto Inírida, some 3,000 Colombians currently work in the Yapacana mines, in addition to thousands of Venezuelan miners.
      </Paragraph>

      <SubTitle>
        Colombian rebels in the Amazon
      </SubTitle>

      <Paragraph>
        Sitting in his office, one of the senior army officials of Guainía department has a nameplate on his table and two big flags behind him. He plays a Beethoven song on YouTube from his laptop.
      </Paragraph>

      <Paragraph>
        “We are working against the bandits and terrorists,” he says, referring to the Colombian guerrillas that operate in the area.
      </Paragraph>

      <Paragraph>
        He says his orders are to target a group called Acacio Medina, which is active in the mines of Venezuela and Colombia, and is made up of former members of the now defunct Revolutionary Armed Forces of Colombia (FARC).
      </Paragraph>

      <Paragraph>
        So far there have been no confrontations. “They don’t let themselves be provoked,” he says.
      </Paragraph>

      <Paragraph>
        The FARC were the hemisphere’s oldest and largest guerrilla group until they signed a peace deal in 2016 and demobilized in 2017. But not all the fighters laid down their weapons and “dissident” groups have formed like Acacio Medina, which is run by a guerrilla named “Jhon 40.” The group runs illegal mining projects in Amazonas, Venezuela.
      </Paragraph>

      <Paragraph>
        Colombia’s National Liberation Army (ELN) now has two camps close to San Fernando de Atabapo and closer to Puerto Ayacucho. It’s the ELN that reportedly is much more dominant in Amazonas state than the FARC dissidents of Front Acacio Medina, possessing camps on the Venezuelan side of the cities of Puerto Colombia and San Felipe.
      </Paragraph>

      <Paragraph>
        According to Colombian intelligence documents, the Acacio Medina front now earns 70 percent of its revenue through illegal mining in Venezuela.
      </Paragraph>

      <Paragraph>
        The FARC dissidents and ELN – now the largest guerrilla group on the continent – have a tenuous alliance to work in the gold fields of Venezuela.
      </Paragraph>

      <Paragraph>
        The commander said he knows about the ELN’s cross-border activities because he caught a Venezuelan indigenous guerrilla deserter in 2018. The man said he’d killed three other rebels and swam across the Atabapo river to escape into Colombia. He complained about forced labor and the lack of food during his service to the ELN.
      </Paragraph>

      <Paragraph>
        Venezuela has tolerated the presence of Colombian guerrillas since the late President Hugo Chávez came to power in 1999. While the groups are considered terrorist organizations by the United States and Colombia, Chávez called them <ExternalLink href="https://www.lanacion.com.ar/el-mundo/chavez-las-farc-no-son-terroristas-nid978386" language="es">“genuine armies” and “insurgent forces with a political goal.”</ExternalLink>{" "}
      </Paragraph>

      <Paragraph>
        Large areas of jungle in the southeastern Colombian Amazon have functioned as a trafficking corridor for drugs, weapons, troops, and commodities for decades.
      </Paragraph>

      <Paragraph>
        If the FARC got involved in mining operations, they charged about 30 percent of the production, according to a former FARC fighter. He also stresses that the Venezuelan National Guard was already heavily involved in 2007, charging commissions in gold in Yapacana.
      </Paragraph>

      <Paragraph>
        “They were mining so much gold,” he recalls.
      </Paragraph>

      <Paragraph>
        According to Eduardo, a 24-year-old indigenous who asked to remain anonymous, the FARC and ELN are present at the mines, wear military clothing and are well armed. They are also the law of the region. Thieves are often executed but even bringing a phone to the mining area, which is forbidden, can lead to a death sentence.
      </Paragraph>

      <Paragraph>
        Even so, miners said the guerrillas are better bosses than the National Guard, because they had a clear set of rules, prohibited alcohol and substance abuse and sometimes stuck up for the community. The Venezuelan military were often more abusive and demanded more of their gold.
      </Paragraph>

      <Paragraph>
        But they also work hand-in-hand with the Venezuelan National Guard who
        <StoryMedia
        media={{
        id: "video-5",
        type: "youtube",
        data: {
          id: "0K1a_Qgm1ME"
        }
        }}> charge “taxes” on everything from entering the mines, using the rivers, moving equipment and even the right to sell empanadas</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        According to a former Venezuelan intelligence officer, the gold collected by the National Guard is flown to Caracas, after a part is already shared between multiple military branches in Amazonas, including the Bolivarian National Intelligence Service (SEBIN), the head of military counterintelligence (DGCIM), the general in charge of the National Guard, and the commander of the regional defense zones, or ZODI.
      </Paragraph>

      <Paragraph>
        Franklin, a 26-year-old 2nd sergeant in Venezuela’s Bolivarian National Guard, spent three and a half years working in the gold mining areas around Puerto Ayacucho.
      </Paragraph>

      <Paragraph>
        Franklin, who agreed to speak on condition of anonymity, said he and other troops watched as his commanders cut deals with the ELN to squeeze local miners. “They would show up in boats, 200, 300 men armed to the teeth, and their leaders would meet with our commanders,” Franklin said. “I had never seen anything like it.” “They [the ELN] are the ones who are truly in control of the mining areas,” he said.
      </Paragraph>

      <Paragraph>
        The double authorities in the Yapacana mines, guerrilla and National Guard, are a fragile tandem. Both Venezuelans and Colombians fill up the ranks of the Colombian guerrillas that outgun the military in Amazonas state.
      </Paragraph>

      <Paragraph>
        “Venezuela has an army, which is prepared for absolutely nothing,” the former Venezuelan intelligence officer said. “On the other hand, the ELN is trained, prepared in combat and not afraid of anything.”
      </Paragraph>

      <Paragraph>
        But there have been conflicts. In 2017, the guerrillas almost downed a Venezuelan military helicopter near the Cacique mine in the area of Yapacana with AR-15 rifle. The chopper wasn’t supposed to be there, explained a Venezuelan adolescent. “Now the guerrillas are in charge.”
      </Paragraph>

      <Paragraph>
        In November, 2018, a <ExternalLink href="https://lta.reuters.com/articulo/domesticNews/idLTAKCN1NA0BJ-OUSLD" language="es">clash between the guerrillas and the National Guard</ExternalLink>{" "} left at least three soldiers dead, and a dozen wounded and showed the volatility of the situation.
      </Paragraph>

      <Paragraph>
        But the guerrillas are in the region to stay, said the former intelligence official.
      </Paragraph>

      <Paragraph>
        “For the guerrillas at the moment, gold … is more lucrative than drugs,” he said. “That’s why they’re present in all the mines of Venezuela.”
      </Paragraph>
    </Container>
  </article>
);
