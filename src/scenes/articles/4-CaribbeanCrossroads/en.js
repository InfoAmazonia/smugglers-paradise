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
      <title>Caribbean Crossroads | Venezuela, the smugglers' paradise</title>
    </Helmet>
    <Container>
      <Title as="h2">The Caribbean gold laundromat</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter4"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Since 2014, at least 176 tons (160 metric tons) of Venezuelan gold has been moved through the islands of Aruba and Curaçao. The tourist destinations function as a trampoline for conflict minerals and bloodstained Venezuelan gold proves to change color under the Caribbean sun.
        </p>
      </Note>

      <Paragraph>
        It was a typically hot Saturday afternoon in Aruba when Rafael González Zambrano thought he had completed a routine operation, one he had been doing for about seven years already.
      </Paragraph>

      <Paragraph>
        After declaring the goods he was carrying, the Venezuelan-born man with a Dutch passport was escorted to his plane by officials from Aruba’s customs agency. He was taking a KLM flight to Schiphol airport in Amsterdam and then on to Dubai.
      </Paragraph>

      <Paragraph>
        Zambrano is a gold carrier for Paoro Armored Transport, which makes about 1,500 U.S. dollars for each trip delivering precious metal to international clients.
      </Paragraph>

      <Paragraph>
        But this time things went wrong. He was just settling into his business-class seat, when a team of Netherlands criminal investigators, the RST, rushed into the cabin, detained him and seized the
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "National Crime Agency",
            src: require("photos/chapter4/Caribbean05.jpg")
          }
        }}> 110 pounds (50 kilos) of gold he was carrying</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
      Paoro Armored Transport is a small player in an international network of jewelers, banks, transporters, and smelters who are sometimes indirectly financing human-rights violations, fueling armed groups and supporting corrupt Venezuelan government officials by facilitating their gold sales.
      </Paragraph>

      <Paragraph>
      In addition to Zambrano, the director of Paoro Armored Transport was also arrested in what has become a test case for authorities trying to understand the scope of an international network trading in minerals that fuel conflict.
      </Paragraph>

      <Paragraph>
      “Our neighboring country” – this is how The Netherlands’ Foreign Minister Stef Blok refers to Venezuela. Although thousands of miles of ocean separate Europe and Latin America, this is not a strange thought as Aruba and Curaçao, two tropical remnants of the colonial aspirations of the Dutch, respectively lie within 19 and 43 miles (30 and 70 kilometers) from the South American country.
      </Paragraph>

      <Paragraph>
        The
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean01.jpg")
          }
        }}> culturally colorful islands of Curaçao and Aruba</StoryMedia> gained independence as separate states but still belong to overseas parts of the Kingdom of The Netherlands. The financial health of Aruba and Curaçao depends to a fair extent on Venezuela, and especially its oil, as big refineries on the resource-poor islands are the motors of the economy. Hard hits were therefore received due to the complete collapse of the oil sector in Venezuela, which laid bare a lack of alternate industries.
      </Paragraph>

      <Paragraph>
        The absence of gold deposits already made the Dutch Caribbean unpopular to European colonists centuries ago, but over time the islands became a hub for the trans-Atlantic slave trade, pirates and merchants. Surprisingly, over 500 years later, the islands of The Kingdom of The Netherlands became the heart of a multi-billion-dollar gold trade.
      </Paragraph>

      <Paragraph>
        And much of that trade depends on the illegal gold coming out of Venezuela.
      </Paragraph>

      <Paragraph>
        Cliver Alcalá Cordones, a retired major general and close friend of Venezuela’s late president Hugo Chávez, used to command troops in the mining regions south of the Orinoco River.
      </Paragraph>

      <Paragraph>
        Now in exile in Colombia, Alcalá said he became aware of large-scale gold trafficking through the Caribbean. In 2017, he said that about 22 tons (20 metric tons) of Venezuelan gold were transported to the Dutch Caribbean in 2012 alone, with the lion’s share bound for Europe.
      </Paragraph>

      <Paragraph>
        “<ExternalLink href="https://arcominero.infoamazonia.org/story/gold-mining?lang=en" language="en">It goes to Aruba and Curaçao</ExternalLink>{" "},” he said, insisting that the practice continues.
      </Paragraph>

      <SubTitle>
        Border blockade
      </SubTitle>

      <Paragraph>
        The Caribbean’s role in the Venezuelan gold trade remained unknown for a long time, and few questions were asked. But the ABC islands (Aruba, Bonaire and Curaçao) were surprised in January 2018 when Venezuelan President Nicolás Maduro blocked all air and sea traffic with the islands, saying: “<ExternalLink href="https://www.nytimes.com/2018/01/06/world/americas/maduro-venezuela-travel-shutdown.html" language="en">They take away gold from this country illegally</ExternalLink>{" "}, and make it legal to sell there; they take away coltan, they take away diamonds, they take away all food products.”
      </Paragraph>

      <Paragraph>
        The blockade caught the islands by surprise, diplomats said. And during subsequent meetings between Venezuela, the Netherlands and island authorities, “the topic of gold was absolutely not brought up again, neither was coltan,” said Stella van Rijn, Curaçao’s secretary-general of the Ministry of General Affairs and Foreign Relations.
      </Paragraph>

      <Paragraph>
        The blockade continued until April 2018, when it was lifted, only to be reinstated in February 2019, when geopolitical tensions rose again.
      </Paragraph>

      <Paragraph>
        But the islands took notice, and started looking into the previously ignored mineral trade. They learned that massive amounts of Venezuelan gold were not only flowing through the islands but that the Caribbean functioned as a tool to erase the traces of the Venezuelan origin of the minerals.
      </Paragraph>

      <Paragraph>
        On June 21, after our reporters began asking questions, the government of Curaçao announced that it would immediately forbid trading in Venezuelan gold.
      </Paragraph>

      <Paragraph>
        Authorities said that mining in Venezuela is inextricably linked to illegal operations, capital flight, repression, and exploitation. Furthermore, it said “criminal investigations” would likely reveal that the trade was connected to drugs and money laundering, contraband activities, and falsification of papers.
      </Paragraph>

      <Paragraph>
        “What the government of Curaçao decided is that we do not wish to continue to collaborate with the gold trade from Venezuela because we cannot validate it,” van Rijn said.
      </Paragraph>

      <Paragraph>
        It’s still legal to move Venezuelan gold through Aruba, but it has to be reported to the public prosecutor. “There may be a suspicious context where further investigation is needed,” said Terry Akkerman, the island’s public prosecutor.
      </Paragraph>

      <Paragraph>
        Meanwhile, U.S. and Swiss trade records show that Curaçao exported hundreds of pounds of gold to both countries in the first five months of 2019.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/uWUGk/2/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <SubTitle>
        Gold escorts
      </SubTitle>

      <Paragraph>
        One of the consequences of heightened concerns brought about by Maduro’s 2018 statements, was the arrest of the gold courier, Zambrano. That move rattled the entire industry.
      </Paragraph>

      <Paragraph>
        “[My employee] was illegally detained for four months,” says Juan Carlos Toro Rodríguez, the Venezuelan-born head of Paoro Armored Transport.
      </Paragraph>

      <Paragraph>
        Wearing a blue and white Adidas cap and a short-sleeved gray shirt, Toro doesn’t look like an international gold merchant. He says he merely provides transportation. One of his core activities is shipping fruit from Venezuela to Aruba by boat. Still, he was arrested along with his courier on the charges of trafficking, falsifying papers and money laundering.
      </Paragraph>

      <Paragraph>
        Both he and Zambrano were released due to a lack of evidence, but the investigation remains open. Toro waved his hands in the air, agitated, as he explained that he was a victim and had never broken the law with his gold dealings.
      </Paragraph>

      <Paragraph>
        If what he did was illegal, then more people should be arrested, he said.
      </Paragraph>

      <Paragraph>
        “All customs officials should be jailed!” he argued, noting that he sent gold through Belgium, the Netherlands, the United States and United Arab Emirates and officials had always approved his documents.
      </Paragraph>

      <Paragraph>
        Before 2018, he was sending four loads of gold a month, weighing 44 to 88 pounds (20-40 kilos) each, sometimes more.
      </Paragraph>

      <Paragraph>
        Toro was so sure of his legal compliance, and so confident that the public prosecutor was wrong, that he arranged for another load of gold to be taken on KLM in September, 2018. He says he did it just once to prove a point. Proudly, he pulls out his phone to show all the stamps he received from the various customs services, explaining that his shipment made it to Dubai without any problems.
      </Paragraph>

      <Paragraph>
        The shiny Caribbean beaches of Curaçao and Aruba are much more than a tourist destination and a magnet for massive cruise ships. According to airport operators, customs officials and government sources, the private and commercial planes
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "cJfRldJHYHw"
        }
        }}> flying over the head of sunburned tourists</StoryMedia> have been dropping off thousands of pounds of Venezuelan gold.
      </Paragraph>

      <Paragraph>
        Those shipments, many coming from illegal gold mines, provide guerrilla groups, crime syndicates and Venezuelan army officials with juicy sums of money while delivering a financial lifeline to corrupt government elites in the crisis-ridden country.
      </Paragraph>

      <Paragraph>
        Airlines such as American and KLM have been flying gold out from the Caribbean, while the islands’ authorities have not been able to stop the flow of conflict minerals coming in through their airports and free trade zones, officials said.
      </Paragraph>

      <Paragraph>
        Altogether, at least 176 tons (160 metric tons) of gold left both islands between 2014 and 2018, of which the majority was trampolined through Curaçao. Government representatives from Aruba and Curaçao confirmed that at least 90 percent of the gold that leaves the islands originally came from Venezuela.
      </Paragraph>

      <Paragraph>
        KLM did not accept an interview request, but did acknowledge transporting gold from Curaçao three times in 2018 and twice in 2019.
      </Paragraph>

      <Paragraph>
        American Airlines did not address specific questions but said in a statement that it works closely with the Transportation Security Administration, Customs and Border Control and governments around the world “to ensure that all passengers, baggage and cargo are appropriately screened prior to departure” and that “our aircraft are not used to smuggle illicit goods into the United States.”
      </Paragraph>

      <SubTitle>
        Free Trade Zones
      </SubTitle>

      <Paragraph>
        Inside Curaçao – like a country inside a country – are Free Trade Zones, where goods can be imported, exported and transhipped tax free and with little oversight.
      </Paragraph>

      <Paragraph>
        At the
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean02.jpg")
          }
        }}> Curaçao Airport Free Economic Zone</StoryMedia> there are 41 companies that trade in things such as car parts, pharmaceuticals, jewelry and gold.
      </Paragraph>

      <Paragraph>
        Curaçao Precious Metals (Cupremeco), based in the zone, not only trades gold but smelts it as well. The company received a lot of media attention in 2016 when a security guard was killed during an armed robbery of 19 pounds (8.5 kilos) of gold.
      </Paragraph>

      <Paragraph>
        “It’s a full-flash refinery, licensed and all,” says a financial service provider involved in the gold sector, who preferred to remain anonymous. “They can define purity, smelt, make the gold bars. They have all the equipment.”
      </Paragraph>

      <Paragraph>
        Cupremeco has been receiving gold that arrives on private planes from Venezuela. According to the financial services provider, most of this gold was exported to the United States or put on KLM flights to the Netherlands, Switzerland or the United Arab Emirates.
      </Paragraph>

      <Paragraph>
        Cupremeco declined to comment for this story.
      </Paragraph>

      <Paragraph>
        Venezuelans make the trip because they’re keen to sell their minerals for dollars and avoid the devalued bolivares that the Venezuelan government uses to pay for gold.
      </Paragraph>

      <Paragraph>
        Traffickers take their payments on foreign bank accounts, according to a former gold trader in Curaçao, who requested to remain anonymous because of safety reasons: “Venezuela is only 70 kilometers [43 miles] away”.
      </Paragraph>

      <Paragraph>
        The trader said that mines deep in the jungle are operated by people who can’t transport their gold because the logistics are complicated and it’s dangerous.
      </Paragraph>

      <Paragraph>
        “Men that possess money, helicopters, guns and pistols would visit the small-scale miners. Those are the people that we received here [in Curaçao],” he said, adding that he perfectly understands that people bring Venezuelan gold to the islands since the Venezuelan government only would obligate them to agree on a bad deal. “It's contraband of your own gold,” he laughs.
      </Paragraph>

      <Paragraph>
        The source described how gold operations work in the Free Trade Zones: Venezuelan gold arrives on private flights or with couriers and goes straight to the Free Economic Zone. Instead of being registered as an import the product remains, for bookkeeping purposes, in transit. But when the gold leaves the island, customs papers only mention Curaçao or Aruba – they don’t show that the gold originally came from Venezuela.
      </Paragraph>

      <Paragraph>
        And it’s not just the free trade zones. Aruba and Curaçao customs officials said Venezuelan gold is often carried through, in transit, on commercial flights but  never registered as an import.
      </Paragraph>

      <Paragraph>
        Sometimes the gold does not even leave the planes.
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean03.jpg")
          }
        }}> Private jets</StoryMedia> used to carry gold from Venezuela arrive at the only private airport on the island, operated by CATS Group, a small company that manages airports in four countries of the region.
      </Paragraph>

      <Paragraph>
        “They [the shippers] would call us and say: ‘listen we have 60 kilos [132 pounds]; this is the address’. We needed to make an invoice and certificate of origin; then it would be sent to Miami from Curaçao,” the trader describes. Three different sources from within the sector confirmed that private planes carrying unknown cargo frequently departed from Curaçao to Miami.
      </Paragraph>

      <Paragraph>
        When asked for a statement, CATS Group didn’t reply to our requests.
      </Paragraph>

      <Paragraph>
        Another way of carrying the contraband is simply wearing it as jewelry, or ‘smurfing.’
      </Paragraph>

      <Paragraph>
        A thick gold necklace can weigh more than 2.2 pounds (1 kilo) and be worth 40,000 U.S. dollars. An Aruban customs official said that people wearing heavy jewelry raise alarms but there’s not much they can do about it.
      </Paragraph>

      <Paragraph>
        “You see people with a certain attitude or look and you think ‘That’s not a person who should be walking around with a thing like that,’” he said.
      </Paragraph>

      <Paragraph>
        In December 2018, the customs official said someone tried to bribe him, offering a few thousand dollars every time they were allowed to go through the airport. He didn’t take the offer.
      </Paragraph>

      <Paragraph>
        Others are more discreet, smuggling slabs of gold in their shoes. An airport security official said that body scanners wouldn’t detect it.
      </Paragraph>

      <Paragraph>
        But gold in transit simply isn’t a priority, the officials said.
      </Paragraph>

      <Paragraph>
        “The only thing we do here is make sure [the product] leaves again,” explained another source that works for Aruban customs. “If the gold was imported they would have to pay taxes on it. But if they are just ‘in transit’ then the gold can get picked up and leave on a different plane” as if it were Aruban gold.
      </Paragraph>

      <Paragraph>
        The same was true for gold coming through Curaçao, said Etienne Casiano, spokesperson of the country’s customs. Sitting in his office, just next to the Curaçao International Airport, he claims investigating merchandise in transit is “not the competence of the customs to check.” They only need an invoice, airway bill, or bill of cargo.
      </Paragraph>

      <Paragraph>
        “They [traders] don't import the gold; if they did, they should pay taxes. They stay in transit, the gold gets picked up and leaves with a different plane,” Casiano adds. “The [gold] flights entered Curaçao in transit, in compliance with our procedures and legislation,” he said. “It entered legally, it was normal for us.”
      </Paragraph>

      <Paragraph>
        But he acknowledges that bringing gold through the Caribbean disguises its true origin, making the islands a very attractive transshipment point to world markets.
      </Paragraph>

      <Paragraph>
        Databases don’t “mention the country of origin, they just reflect the last port through which it left,” Casiano said. So while he knows that almost all the gold coming into the island is from Venezuela, by the time the metal makes it to Europe or the United States, its true origin is obscured.
      </Paragraph>

      <Paragraph>
        Even though Venezuelan gold is easy to disguise, many are still steering clear of the problematic mineral. Archak Bedrossian, the director of Haig, a gold buying company in the free zone, said he bought gold from Venezuela and other South American countries until four years ago.
      </Paragraph>

      <Paragraph>
        “When we saw that the business was in the hands of <i>pranes</i> [gangs] and paramilitaries, we stopped trading,” he said. “Before, miners would reach out to us to sell [their gold], but these people became forced to sell to [criminal] groups and that’s why we stopped.”
      </Paragraph>

      <SubTitle>
        Erasing origins
      </SubTitle>

      <Paragraph>
        A report drawn up by the Caribbean Financial Action Task Force alerted already in 2012 that in Curaçao there is “
        <FileLink
        href={require("documents/chapter4/CFATF-Curacao_First_Follow-Up_Report.pdf")}
        format="pdf"
        size="0.9MB">no process in place to identify the source, destination, and purpose of movement of gold or other precious metals and stones</FileLink>.” Various follow-up reports indicate that nothing has changed.
      </Paragraph>

      <Paragraph>
        What data does exist, is often incomplete or erroneous. In a leaked
        <FileLink
        href={require("documents/chapter4/Aruba_government-Customs_document.pdf")}
        format="pdf"
        size="0.7MB"> document from Aruba</FileLink>
        , kilos, grams, and ounces are used interchangeably, and other key pieces of data are missing.
      </Paragraph>

      <Paragraph>
        Aruban officials said they are trying to be more diligent about tracking gold in transit and understand that their agencies could be held accountable for their lax oversight.
      </Paragraph>

      <Paragraph>
        “Now, everything should be filled in very neatly even though it’s in transit,” one official said. “Sometimes something needs to happen in order to learn.”
      </Paragraph>

      <Paragraph>
        There are
        <StoryMedia
        media={{
          id: "image-5",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean04.jpg")
          }
        }}> more than 70 jewelers</StoryMedia> in Curaçao that not only buy jewelry to smelt and export, but also pay for gold bars. There is no way to really know if the gold comes from Venezuela. The only requirement for them to buy gold is that the seller show an ID card from Curaçao, as the island’s regulations don’t require certificates of origin.
      </Paragraph>

      <Paragraph>
        A trader who was consulted after Venezuelan gold imports were banned assumes that the smugglers will adjust, that the routes for the larger shipments will simply change.
      </Paragraph>

      <Paragraph>
        “If they want dollars for their gold, they can go to Peru, Colombia, Brazil, Guyana, Suriname,” he said laughing. “This will continue.”
      </Paragraph>
    </Container>
  </article>
);
