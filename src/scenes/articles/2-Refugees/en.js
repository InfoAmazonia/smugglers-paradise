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
      <title>Refugees | Venezuela, the smugglers' paradise</title>
    </Helmet>
    <Container>
      <Title as="h2">Recruited refugees walk gold across the Colombian border</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter2"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Every day, thousands of Venezuelans cross the border into Colombia, but untold kilos of gold are smuggled beneath the canopy of Venezuela’s historic exodus. Organized crime groups, merchants, and corrupt Venezuelan military officials control a cross-border multimillion-dollar business.
        </p>
      </Note>

      <Paragraph>
        Since the start of Venezuela’s historic meltdown at the end of 2014,
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
      > more than four million refugees and migrants have left the country</StoryMedia>
        . And more than any other nation, Colombia has been on the receiving end of the crisis. It now harbors about 1.3 million Venezuelans.
      </Paragraph>

      <Paragraph>
        Most of them enter neighboring Colombia through “La Parada” – the “stopping point” – often after having traveled hundreds of miles.
      </Paragraph>

      <Paragraph>
        La Parada – just steps from the iconic Simon Bolívar bridge that straddles the two countries – resembles a vast open air market. Exhausted Venezuelan families rest on the sidewalk while men rush around with hand trucks offering to carry their luggage.
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta05.jpg")
          }
        }}> People searching for medicine</StoryMedia> they can no longer find at home elbow their way through hotdog vendors and juice carts. There are stalls where migrants <ExternalLink href="https://www.nytimes.com/2018/02/17/world/americas/venezuela-crisis-colombia-migration.html" language="en">sell their hair to wig makers</ExternalLink>{" "}, in hopes of buying a bus ticket or renting a room in one of the myriad makeshift hotels that have opened up in people’s houses.
      </Paragraph>

      <Paragraph>
        But as masses grant anonymity, La Parada is also the hub for a far more destructive activity: the illegal gold trade that’s helping prop up the Venezuelan government, fueling armed groups and destroying the environment.
      </Paragraph>

      <Paragraph>
        Surrounding La Parada are dozens of pawnshops that will buy gold brought over from Venezuela, no questions asked.
      </Paragraph>

      <Paragraph>
        A man yelling through the plate glass window of one shop called Gold Palace said Venezuelan migrants carry across gold in all forms.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "ZkkV8tpB1SI"
        }
        }}> “Some bring it in necklaces,” he said, “others bring it from the mines.”</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        The United Nations High Commissioner for Refugees says <ExternalLink href="https://www.unhcr.org/news/press/2019/6/5cfa2a4a4/refugees-migrants-venezuela-top-4-million-unhcr-iom.html" language="en">more than four million refugees and migrants have left Venezuela</ExternalLink>{" "} since 2014 amid a deep economic crisis. And for many of them, gold trafficking is one of their few sources of income.
      </Paragraph>

      <Paragraph>
        Harold, a young Venezuelan with a blue tank top and faded jeans, was a former soldier in Venezuela before he became a gold smuggler. He said being in the military taught him the ins and outs of corruption.
      </Paragraph>

      <Paragraph>
        “I know fuel trafficking, drug trafficking –  I made myself familiar with the trafficking of many things,” he said, asking to remain anonymous to talk freely about the illicit trade. “That’s where I learned how to pay <i>vacunas</i> and also how to collect <i>vacunas</i>.”
      </Paragraph>

      <Paragraph>
        <i>vacunas</i> are extortion payments, literally “vaccines” that buy traffickers security. And it’s one of the foundations of gold smuggling.
      </Paragraph>

      <Paragraph>
        Harold said gold mined in southern Venezuela is taken to the Colombian border by traffickers who often operate in coordination with Venezuela’s National Guard. The soldiers accept bribes, or <i>vacunas</i>, to guarantee safe passage. Sometimes the guards even provide armored trucks to move the metal to the frontier.
      </Paragraph>

      <Paragraph>
        It’s not just the military involved in smuggling. Venezuelan criminal syndicates and Colombian armed groups are also involved in the illegal gold trade. In particular,  Colombia’s National Liberation Army (ELN),  Latin America’s oldest and largest guerrilla group now that the Revolutionary Armed Forces of Colombia (FARC) demobilized in 2017, have expanded their presence in Venezuela’s mining regions. And illegal gold is now an important source of ELN revenue, along with extortion and drug trafficking, analysts believe.
      </Paragraph>

      <Paragraph>
        The ELN usually rely on a network of smugglers, or mules, who are forced to bribe their way through National Guard and guerrilla checkpoints to get the gold to the Colombian border.
      </Paragraph>

      <Paragraph>
        In order to cross the border, more traffickers are put to work if the amounts are significant: “Let’s say one kilo [2.2 pounds] and above,” Harold says. “So this is what occurs, these people that take [the gold] from the source are directly responsible for getting it to Cúcuta [the first major city Venezuelans encounter after crossing into Colombia]. He pays the National Guard a bit, then some more for another National Guard and then a bit for another National Guard.”
      </Paragraph>

      <Paragraph>
        Trying to evade those tolls can be deadly. “If they want to collect, you pay or die,” Harold said.
      </Paragraph>

      <Paragraph>
        The disparate groups controlling border – including right wing paramilitary organizations and left-wing guerrillas – make the journey perilous.
      </Paragraph>

      <Paragraph>
        “[Gold] mules can meet both groups during a single crossing. In just one trip you’ll get the National Guard, the Police and the CICPC [Venezuela’s police department of criminal investigations],” he said, rolling his eyes. “Everybody charges the <i>vacuna</i>, including Colombian police and immigration officials.”
      </Paragraph>

      <Paragraph>
        “Everybody is eating from this,” he added.
      </Paragraph>

      <Paragraph>
        Harold doesn’t like feeding all those mouths, so he often hides the gold.
      </Paragraph>

      <Paragraph>
        Smugglers have numerous places to conceal the metal: in the soles of shoes, inside hats, behind belts. Women who traffic gold often hide it under their breasts.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "8VNugTSqhZg"
        }
        }}>Harold’s preferred method is to hide it in oranges</StoryMedia>
        . Each hollowed-out fruit can hold .9 to 1.4 ounces (25-40 grams) of gold. A full bag of oranges can carry one pound (half a kilo of gold), worth about 22,000 U.S. dollars.
      </Paragraph>

      <Paragraph>
        “If I hide it, I’ll have more profits,” he explained.
      </Paragraph>

      <Paragraph>
        Asked for a statement, the Colombian migrations office said they “don’t have any formal complaint of alleged extortion” by their officers and that they don’t have “any control over baggage or merchandise, since it is not their competence”.
      </Paragraph>

      <Paragraph>
        Despite the riches they carry, smugglers make about two U.S. dollars per gram, or about 12 U.S. dollars per trip. That’s about two times Venezuela’s monthly minimum wage, and the risks are significant.
      </Paragraph>

      <Paragraph>
        Harold said bosses often threaten loved ones to guarantee the gold is delivered.
      </Paragraph>

      <Paragraph>
        His previous boss knew where his family lived, how many children he had and where they studied.
      </Paragraph>

      <Paragraph>
        “I mean, they found out about my whole family,” he said. “So, it was either the merchandise or my family.”
      </Paragraph>

      <Paragraph>
        Colombia and Venezuela share a 1,379-mile (2,219 kilometers) long border and there are seven official border crossings, but they’re often closed as bilateral relations have hit rock bottom. So most smugglers carry the gold over hundreds of informal trails, or <i>trochas</i>, that are controlled by a variety of criminal gangs and armed groups.
      </Paragraph>

      <Paragraph>
        The United Nations Office for the Coordination of Humanitarian Affairs estimates that
        <FileLink
        href={require("documents/chapter2/OCHA_UN_Colombia-Contexto_Humanitario_Norte_de_Santander.pdf")}
        format="pdf"
        size="3.6MB"> illegal actors earn more than 2.1 million U.S. dollars per month</FileLink> by
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta06.jpg")
          }
        }}> controlling the <i>trochas</i> and extorting travelers</StoryMedia> in Colombia’s Norte de Santander department alone.
      </Paragraph>

      <Paragraph>
        Not paying those groups can have terrible consequences.
      </Paragraph>

      <Paragraph>
        On April 17, three corpses were found on two illegal border crossings. One of the victims had been decapitated and his head was wrapped in a shirt, <ExternalLink href="https://www.laopinion.com.co/judicial/encuentran-tres-muertos-en-dos-trochas-de-la-frontera-175315#OP" language="es">a local newspaper reported</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Franklin, another Venezuelan gold smuggler, said he had stumbled across body parts scattered along the <i>trochas</i>, a warning from the armed groups.
      </Paragraph>

      <Paragraph>
        “I call it a car bomb,” he said, agreeing to speak on condition of anonymity. He refers to the gold he hid in his shoes when he was trafficking and the explosive risk of getting caught and murdered. “I’ve seen dismembered people, all chopped up. A shoulder lying in the trocha as if it were nothing.”
      </Paragraph>

      <Paragraph>
        Franklin, 24, said he fled to Colombia after he was detained and abused in Venezuela amid nationwide protests. While in custody, he says the police shaved his head and tried to rape him twice.
      </Paragraph>

      <Paragraph>
        Coming into Colombia at La Parada, he found no relief in the nearby town of Cúcuta. Sleeping in the bus terminal during his first week, he was recruited by an organized crime group to become a trafficker.
      </Paragraph>

      <Paragraph>
        Hiding gold in the soles of his shoes, he would walk the contraband over the border. He worked for a few months until he made enough money to send for his wife and 9-month-old baby.
      </Paragraph>

      <Paragraph>
        Traffickers who cross back and forth are called “lungs” and Franklin said he would sometimes make several trips a day, along with dozens of other smugglers.
      </Paragraph>

      <Paragraph>
        “Imagine, 15 pairs of lungs working every day for one single boss,” he says. “Some bosses have up to 80 pairs of lungs working for them each day.”
      </Paragraph>

      <Paragraph>
        Like Harold, Franklin said his bosses threatened his family if he didn’t deliver the gold. He now sells candy on the streets because trafficking had become too dangerous.
      </Paragraph>

      <Paragraph>
        Working 14 hours a day, sometimes more, he struggles to make ends meet. The small and empty apartment he rents costs about five U.S. dollars a night but he’s made it a bit cozier with a cheap mattress, a second-hand television and a fan.
      </Paragraph>

      <Paragraph>
        nother daughter still living in Venezuela started the new semester without school supplies. He is saving up money to send for her, too.
      </Paragraph>

      <SubTitle>
        Behind closed doors
      </SubTitle>

      <Paragraph>
        In the center of Cúcuta, about six miles (10 kilometers) from the La Parada gold-smuggling corridor, there is an area the size of an entire neighborhood that has been converted into a hub for contraband goods coming from Venezuela.
      </Paragraph>

      <Paragraph>
        Alejandría, an open-air shopping mall, is surrounded by tight alleys jammed with clothes, fake perfume, Canaima laptops (once issued by the Venezuelan government to school children) and toy guns. Even real weapons are sold under the counter, some say.
      </Paragraph>

      <Paragraph>
        But the area is also bursting with small
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "vgdRWxCY53g"
        }
        }}> <i>compraventas</i> – shops that buy and sell gold</StoryMedia>
        . In this area alone, some 200 to 300 Venezuelans show up daily to sell gold. Locals say the number of pawnshops has exploded in recent years as gold trafficking has spiked.
      </Paragraph>

      <Paragraph>
        “I’m buying gold, I’m buying gold,”
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta07.jpg")
          }
        }}> shopkeepers scream</StoryMedia>
        , trying to lure in new clients.
      </Paragraph>

      <Paragraph>
        Others try to be more discreet about the trade, most of which is informal or illegal. Deep in a chaotic market, in an empty alley, a secret little office was hidden behind a panel in a wall that opened up. The cramped space was just big enough for three plastic chairs and a small desk, where a man was sitting with a stack of cash.
      </Paragraph>

      <Paragraph>
        He pays 30 U.S. dollars a gram for gold and says he purchases about eight or ten pounds (4-5 kilos) per week. That’s about 150,000 U.S. dollars worth of the metal.
      </Paragraph>

      <Paragraph>
        Asked how much gold he can sell in a week, he says, “whatever you need.”
      </Paragraph>

      <Paragraph>
        Back in the Alejandria mall, a middle-aged woman stands behind a case full of gold necklaces brought from Venezuela. She snaps a calculator from her desk when asked about gold prices. She says 24-karat gold jewelry is fetching about 36 U.S. dollars per gram.
      </Paragraph>

      <Paragraph>
        Then she shouts to the woman across the aisle, also operating a jewelry shop, and asks if she has unrefined gold from the mines.
      </Paragraph>

      <Paragraph>
        “Tienes oro de la mina?”
      </Paragraph>

      <Paragraph>
        No, the answer comes back, at least not right now.
      </Paragraph>

      <Paragraph>
        Most of these shops aren’t legally allowed to trade gold, but that hasn’t stopped business from booming. There even is a website that <ExternalLink href="http://preciocucuta.com/oro-hoy/" language="es">explains how to buy gold in Cúcuta</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
      Francisco runs a storefront that’s licensed to lend money for pawned jewelry. But he admits he’s been buying the metal smuggled in from Venezuelan mines.
      </Paragraph>

      <Paragraph>
      “Well, I’ve been buying gold,” he says, asking to remain anonymous for fear of reprisal, “but I know that we can’t.”
      </Paragraph>

      <Paragraph>
        Pulling out his cellphone, he shows a few pictures of what’s being offered on the other side of the border. He zooms in on a
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta08.jpg")
          }
        }}> stack of gold bars that range in weight from 10.5 ounces (300 grams) to more than 3.3 pounds (1.5 kilos)</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        “They’re asking too much money,” he says.
      </Paragraph>

      <Paragraph>
        Francisco explains how the trade works: Contacts in Venezuela reach out with what’s on offer, and if a deal is struck, they send a trafficker across the border. Payments are made in cash, often in dollars, or by wire transfer.
      </Paragraph>

      <Paragraph>
        From Cúcuta, the gold is hidden in the doors and floors of private cars and taken to bigger cities like Bogotá, Cali or Medellín. From there, paperwork is falsified and it’s exported to Europe or the United States and enters the global supply chain as legal gold.
      </Paragraph>

      <Paragraph>
        Quantities that go through Cúcuta vary a lot says Francisco. It takes about one week to gather 220 pounds (100 kilos), but he cannot make this kind of investment himself.
      </Paragraph>

      <Paragraph>
        “There are a lot of groups,” another man who has been listening in to the interview adds. He knows that gold is a preferred commodity to launder criminal money.
      </Paragraph>

      <Paragraph>
        Francisco knows that criminal groups use gold to launder money from drugs. Those networks buy illegal gold, he said, export it through well-established companies and bring the dollars back to the country.
      </Paragraph>

      <Paragraph>
        “It's an international game!” he said.
      </Paragraph>
    </Container>
  </article>
);
