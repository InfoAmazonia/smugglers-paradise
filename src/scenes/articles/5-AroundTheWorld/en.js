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
      <title>Around The World | Venezuela, the smugglers' paradise</title>
    </Helmet>
    <Container>
      <Title as="h2">Venezuelan gold secretly ends up on international markets</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter5"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Unethically sourced gold from Venezuela enters international supply chains after being ‘whitewashed’ in neighboring countries such as Colombia and the Caribbean islands. Despite sanctions and due diligence guidelines, airlines continuously fly gold to European and U.S. markets.
        </p>
      </Note>

      <Paragraph>
        In a high security refinery in Antwerp, Belgium, two men pour molten gold – heated to more than 2,120 degrees Fahrenheit (1,160 degrees Celsius) – into molds roughly the size of a smartphone.
      </Paragraph>

      <Paragraph>
        Looking at the glowing gold bars – coveted by banks, jewelers and technology companies – there’s no way to tell where it came from or how much blood was spilled to extract it.
      </Paragraph>

      <Paragraph>
        But according to documents leaked by Aruban customs, Venezuelan gold – much of it mined illegally and supporting an increasingly autocratic regime in Caracas – is working its way into the global gold supply, ending up in the United States, Europe and the Middle East.
      </Paragraph>

      <Paragraph>
        Thanks to arcane rules, the gold is hopscotching across the Caribbean and into world-class refineries thousands of miles away that are sometimes inadvertently laundering that “blood” gold, obscuring the devastating impact and the crimes surrounding its origins.
      </Paragraph>

      <Paragraph>
        Washington has been ratcheting up the pressure on Venezuela as it tries to force president Nicolas Maduro out of office. As part of that effort, in March, the U.S. Treasury Department rolled out sanctions against buying gold from Venezuela’s state mining company, Minerven.
      </Paragraph>

      <Paragraph>
        “The illegitimate Maduro regime is pillaging the wealth of Venezuela while imperiling indigenous people by encroaching on protected areas and causing deforestation and habitat loss,” said <ExternalLink href="https://home.treasury.gov/news/press-releases/sm631" language="en">U.S. Treasury Secretary Steven Mnuchin in a March 19 statement announcing the sanctions</ExternalLink>{" "}. “We will aggressively pursue those involved with Maduro’s reckless illicit gold trade, which is contributing to this financial, humanitarian, and environmental crisis.”
      </Paragraph>

      <Paragraph>
        In reality, sanctions are likely to <ExternalLink href="https://www.crisisgroup.org/latin-america-caribbean/andes/venezuela/073-gold-and-grief-venezuelas-violent-south" language="en">increase mineral trafficking</ExternalLink>{" "} and contribute to the financial empowerment of organized crime. This means that the United States might have granted criminal actors involved, such as the National Liberation Army (ELN) and the Revolutionary Armed Forces of Colombia (FARC) dissidents, both on the U.S. terrorist list, a favor.
      </Paragraph>

      <Paragraph>
        The Colombian rebel group ELN is Latin America's oldest and biggest guerrilla now that the FARC officially demobilized in 2017. Meanwhile, Venezuelan gold continuous to reach international markets, including the U.S.
      </Paragraph>

      <Paragraph>
        One key step in obscuring the origins of gold are transit countries, often nations that export serious amount of the metal but don’t have any deposits of their own.
      </Paragraph>

      <Paragraph>
        The Caribbean Dutch islands of Curaçao and Aruba belong to this category.
      </Paragraph>

      <Paragraph>
        According to government sources and leaked documents, at least 143 tons (130 metric tons) of gold left Curaçao and about 33 tons (30 metric tons) left Aruba between 2014 and 2018. Ninety percent of it came from Venezuela. While the imported gold seemed to have its paperwork in order, island officials said the gold’s legal status was dubious at best.
      </Paragraph>

      <Paragraph>
        Those documents also confirm that the gold is entering the island nations from Venezuela on private flights, sometimes hopscotching between the islands, further obscuring its route.
      </Paragraph>

      <Paragraph>
        But ultimately the gold is shipped out on commercial flights – enroute to refineries in the United States, the United Arab Emirates, Switzerland and Belgium – without any indication that it was mined in Venezuela.
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
        }}>And once it’s mixed with gold from other countries, it’s virtually impossible to know its origin</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        It’s difficult to know who’s buying this Venezuelan stealth gold from the Dutch Caribbean. But leaked documents from Aruba customs identified a company in Dubai and two gold traders in Antwerp’s “Diamond District” – one of the most important diamond-trading locations in the world.
      </Paragraph>

      <Paragraph>
        One of those companies is Tony Goetz NV, among Belgium’s most prominent gold traders and the only one that has a smelting facility in the country. According to the customs document, the firm bought 46 pounds (21 kilos) of gold in December 2016.
      </Paragraph>

      <Paragraph>
        Dressed casually and wearing leather loafers, the owner of the refinery, Sylvain Goetz, shows a visitor around the factory that process about 220 pounds (100 kilos) of gold per day. Indicating a neat-row of gold ingots that will be stamped with the company’s logo, he said “It’s not going to get any better than this. This is really pure gold.”
      </Paragraph>

      <Paragraph>
        Asked about its gold imports from the Dutch Caribbean, the company says it doesn’t know whether the 2016’ shipment ever took place. Goetz acknowledges that his company did buy gold from the islands up until three years ago, but insists he no longer buys gold from Venezuela or the Dutch Caribbean, precisely because the origin of that gold is so difficult to determine.
      </Paragraph>

      <Paragraph>
        “We decided a few years ago to stop cooperating with offshore areas or so-called transit countries,” he said.
      </Paragraph>

      <Paragraph>
        In 2017, the Venezuelan government asked them to refine about three tons of gold. But in a letter to the Venezuelan Central Bank, Goetz
        <FileLink
        href={require("documents/chapter5/Tony_Goetz-Lette_to_Central_Bank_of_Venezuela.pdf")}
        format="pdf"
        size="0.3MB"> denied the request citing the lack of paperwork and overall transparency</FileLink>
        .
      </Paragraph>

      <Paragraph>
        “We have grounded reasons to believe the [gold] supply would not meet the requirements of our due diligence policy,” the company wrote Venezuela’s Central Bank. “This decision had to be made now in order to avoid reputational damage to our company.”
      </Paragraph>

      <Paragraph>
        The company’s lawyer, Bert Luyten, also confirmed that in 2017 the board decided not to import any more Venezuelan gold.
      </Paragraph>

      <Paragraph>
        Argentor Essayeurs, another Belgian gold trader a few blocks away in the Diamond District, also appeared in the leaked Aruban customs document. Between January 2016 and December 2017 the company imported 6 million U.S. dollars worth of Dutch Caribbean gold. Director Gianni Proost does not deny that the company traded through Aruba and Curaçao, but claims it ceased to do so about a year ago.
      </Paragraph>

      <Paragraph>
        “The company we bought from said that the gold came from Guyana and Colombia, but when we saw reports about Venezuelan gold and started to ask questions, I did not find their evasive answer very convincing and stopped our collaboration,” Proost said. “This remains a very opaque world.”
      </Paragraph>

      <Paragraph>
        A more clear cut case is that of GoetzGold in Dubai. The company is owned by Alain Goetz, the younger brother of Sylvain Goetz. According to lawyers for both companies, the businesses in Dubai and Belgium are completely separate.
      </Paragraph>

      <Paragraph>
        The customs documents show that between October 2017 and October 2018 GoetzGold purchased 24 tons (21.8 metric tons) of gold from the Venezuelan Central Bank, according to an <ExternalLink href="https://runrun.es/especiales/fuga_oro/" language="es">investigation published earlier this year by Runrun.es</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        A lawyer from GoetzGold said in an email that every shipment of gold from Aruba and Curaçao comes “from legal, certified dealers and is also checked by customs authorities.” But the company didn’t say if it had bought Venezuelan gold.
      </Paragraph>

      <Paragraph>
        The amount of gold sent to Belgium and Dubai is pocket change compared to the quantities sent to Switzerland, where about 75 percent of the world’s gold is refined. According to Swiss customs, the country imported 88,383 pounds (40,090 kilos) from Curaçao between January 2015 and April 2019, with a customs value of 1,292,336,974 Swiss Francs, about 1.3 billion U.S. dollars.
      </Paragraph>

      <Paragraph>
        The four biggest Swiss refineries belong to the most powerful actors in the gold industry. One of them, Valcambi, did not answer questions, saying any response would contain “sensitive company information.”
      </Paragraph>

      <Paragraph>
        Argor-Heraeus said it acts in accordance with Swiss legislation and international standards, adding that it is “very committed to transparency, sustainability and respect for human rights.” It did not, however, answer specific questions concerning gold from Venezuela, Aruba or Curaçao.
      </Paragraph>

      <Paragraph>
        The other two firms, PAMP and Metalor, said they are not buying gold from these countries.
      </Paragraph>

      <SubTitle>
        Role of the Netherlands
      </SubTitle>

      <Paragraph>
        The Netherlands is a signatory to a number of treaties and <ExternalLink href="https://www.business-humanrights.org/en/un-guiding-principles" language="en">United Nations’ guidelines</ExternalLink>{" "} that govern gold supplies and aim to prevent human rights abuses in the mines and keep “conflict” gold out of the global supply chain. In 2017, a so-called “gold covenant,” monitored by the Dutch Social Economic Council, brought together the state, corporations and NGOs to agree to a voluntary behavioral code guaranteeing that companies acquire as much gold as possible from ethical sources.
      </Paragraph>

      <Paragraph>
        And the Organization for Economic Cooperation and Development (OECD)  – an intergovernmental bloc of 36 countries, including the Netherlands – provides guidelines to members on dealing with conflict minerals.
      </Paragraph>

      <Paragraph>
        When it comes to Venezuelan gold “political violence, reports on the sale of gold reserves in breach of sanctions, armed group involvement in the mining region and cross-border gold trafficking: these are all reasons for extra due diligence,” the organization said in an email, adding that companies should think twice before buying Venezuelan gold.
      </Paragraph>

      <Paragraph>
        Despite these initiatives, the Netherlands has been accused of insufficiently addressing its role in the Venezuelan gold trade that contributes to human-rights violations.
      </Paragraph>

      <Paragraph>
        Ronald van Raak, a member of the Dutch Parliament, was astonished that Venezuelan gold was getting whitewashed by its passage through Aruba and Curaçao.
      </Paragraph>

      <Paragraph>
        “Even though they have autonomous governments, the Netherlands is responsible for good governance on the islands,” he said. “We cannot, as a kingdom, condemn the human rights violations of the Maduro government but also be allowing [Venezuelan] corrupt elites to enrich themselves through the same kingdom.”
      </Paragraph>

      <SubTitle>
        Air Gold
      </SubTitle>

      <Paragraph>
        One of the key players in this global game of gold obfuscation are the commercial airlines that carry the metal.
      </Paragraph>

      <Paragraph>
        About 5,000 miles (8,000 kilometers) from the
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter5/Europe01.jpg")
          }
        }}> conflict-ridden mining pits in Venezuela</StoryMedia>
        , a significant share of that gold flies into Schiphol airport in Amsterdam, after having bounced through the transit zones in the Caribbean.
      </Paragraph>

      <Paragraph>
        Officials with the Royal Dutch Airlines (KLM) responsible for transporting the gold refused to give an interview, but said via email that they “don’t agree with the characterization that large amounts of gold on KLM flights is transported via Curaçao to the Netherlands.”
      </Paragraph>

      <Paragraph>
        KLM’s spokesperson later did acknowledge that “three shipments took place in 2018 and two in 2019, which were taken through official channels and were completed with the approval of all authorities.” Due to the “sensitive nature of the shipments,” the airline, which is majority owned by the State, declined to say more.
      </Paragraph>

      <Paragraph>
        However, Dutch customs officials say commercial airlines shipped far more gold than that. In an email, the agency said that from 2015 through 2018, there were a total of 310 gold shipments from the Free Trade Zone in Curaçao to Schiphol, totaling 79,000 pounds (36,086.5 kilos) worth nearly 1.5 billion U.S. dollars. The majority went to Switzerland and Turkey, they said. No statistics from Aruba were available.
      </Paragraph>

      <Paragraph>
        In 2021, a new piece of European Union legislation with more teeth will come into force. It will require corporations active in the gold sector to <ExternalLink href="http://ec.europa.eu/trade/policy/in-focus/conflict-minerals-regulation/" language="en">report on the origins of their gold</ExternalLink>{" "}. Even that will be difficult to enforce, since gold gouged from the Venezuelan rainforest is often carried into neighboring countries and shipped through the Caribbean, disguising where it was mined.
      </Paragraph>

      <SubTitle>
        Florida’s finest conflict minerals
      </SubTitle>

      <Paragraph>
        With 1,370 miles (2,200 kilometers), the Colombian-Venezuelan border is one of the biggest and most uncontrollable ones in Latin America and the gold that is taken across continues its route into one of the world’s largest markets for gold: Miami.
      </Paragraph>

      <Paragraph>
        Here’s how the South Florida-centered smuggling scheme works: Large quantities of Venezuelan gold are secretly driven, flown, taken in boats or walked across the border to Colombia. Smugglers produce fake documents stating the gold was mined legally in Colombia. The metal can then be sold — with seemingly clean hands — to importers in Miami and other places.
      </Paragraph>

      <Paragraph>
        <FileLink
        href={require("documents/chapter5/OECD-Where_does_Colombian_Gold_Go.pdf")}
        format="pdf"
        size="2MB">Florida importers bought roughly one-third of Colombia’s gold exports in 2016</FileLink>
        , according to a study by the OECD.
      </Paragraph>

      <Paragraph>
        Most of the Venezuelan gold coming through South Florida arrives at
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Al Diaz",
            src: require("photos/chapter5/Europe02.jpg")
          }
        }}> Miami International Airport</StoryMedia> in the form of crude bars. It is then shipped to precious metal dealers around the United States, according to law enforcement sources, industry insiders and former Venezuelan government officials interviewed.
      </Paragraph>

      <Paragraph>
        Venezuelan gold is also flown on private jets into Aruba, which is only 18 miles (30 kilometers) north of Venezuela’s coast. Aruban export data obtained by our reporters show that Miami-based World Precious Metals received six shipments of gold from the island in 2014 and 2015. The gold’s listed country of origin? Venezuela, according to the Aruban customs records.
      </Paragraph>

      <Paragraph>
        Two companies based in Miami, one of them registered as World Precious Metals and the other as WPM Miami Inc., deny having any connection with these imports.
      </Paragraph>

      <Paragraph>
        Attorneys for Vickan Bedoyan and Harout Samra, World Precious Metals co-owners currently involved in a business dispute, each said their client was not responsible for any such deal.
      </Paragraph>

      <SubTitle>
        Sourcing Fortune 500 companies
      </SubTitle>

      <Paragraph>
        In April 2019, Colombian authorities <ExternalLink href="https://www.fiscalia.gov.co/colombia/noticias/2-4-billones-de-pesos-fueron-blanqueados-en-operaciones-ficticias-de-compra-y-venta-de-oro/" language="es">charged a major exporter, CIJ Gutiérrez</ExternalLink>{" "}, with selling illegal gold. Investigators from Colombian law enforcement agencies told our reporters that CIJ Gutiérrez sourced metal from illegal mines in Venezuela, as well as Colombia.
      </Paragraph>

      <Paragraph>
        Trade records show the company exported that gold to major precious metal dealers that supply Fortune 500 companies such as Apple, IBM, General Motors, Ford, Starbucks and Verizon.
      </Paragraph>

      <Paragraph>
        “A lot of Venezuelan gold is arriving in Miami, but [disguised] as Colombian gold,” said Ivan Díaz Corzo, a former member of Colombia’s anti-criminal mining task force.
      </Paragraph>

      <Paragraph>
        Last year, by its own reckoning,
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Reuters / Leonhard Foeger - stock.adobe.com",
            src: require("photos/chapter5/Europe04.jpg")
          }
        }}> Colombia produced 38.6 tons (35 metric tons) of gold</StoryMedia>
        . But trade data show the country exported a total of 49.5 tons (45 metric tons).
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/CWSIX/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        When CIJ Gutiérrez was charged, investigators found that many of the Colombian companies and individuals the firm claimed to buy gold from between 2006 and 2016 were either shell companies or people who didn’t exist, according to a news release from the Attorney General’s Office, leading to more than 700 million U.S. dollars’ worth of gold with suspicious origins. Several company executives were arrested and the Attorney’s Office took the company over.
      </Paragraph>

      <Paragraph>
        An official from Colombia’s Attorney General’s Office, who spoke on the condition of anonymity, said that prosecutors believe most of CIJ Gutiérrez’s gold came from Colombia, including mining operations controlled by criminal groups, but said they haven’t ruled out the possibility that some came from Venezuela.
      </Paragraph>

      <Paragraph>
        CIJ Gutiérrez’s former legal representative, Andrés Vieira Gutiérrez, did not respond to requests for comment. The company’s government-appointed trustee, Ana Sauda Palomino, said in an email that she hasn’t come across evidence that the company purchased gold from Venezuela, but has yet to complete an “exhaustive review” of the company’s records.
      </Paragraph>

      <Paragraph>
        She stressed that the company and its executives have not yet been convicted of any crime.
      </Paragraph>

      <Paragraph>
        The compliance officer added that all of the company’s providers must comply with the company’s policies and procedures, which she said meet both the standards of the mining sector and anti-money-laundering guidelines.
      </Paragraph>

      <Paragraph>
        Some of CIJ Gutiérrez’s gold has been purchased by U.S. companies, including its only South Florida-based customer, Republic Metals Corp. (RMC), one of the nation’s largest refiners.
      </Paragraph>

      <Paragraph>
        Republic, which <ExternalLink href="https://www.miamiherald.com/news/business/article223213905.html" language="en">filed for bankruptcy</ExternalLink>{" "} last year, imported 12.5 million U.S. dollars worth from CIJ Gutiérrez between 2008 and 2012, according to the Colombian customs agency and data provided by a global trade data supplier, <ExternalLink href="https://www.importgenius.com/" language="en">Import Genius</ExternalLink>{" "}. But those records cannot show whether Gutiérrez was sourcing gold from Venezuela during that time.
      </Paragraph>

      <Paragraph>
        In a letter to our reporters, a lawyer for the family that owned Republic <ExternalLink href="https://www.miamiherald.com/news/local/crime/article229361954.html" language="en">before selling it out of bankruptcy this year</ExternalLink>{" "} wrote that the company’s “past involvement with Gutiérrez is beyond insignificant” and threatened to sue for defamation if Republic was mentioned in this story.
      </Paragraph>

      <Paragraph>
        “Over seven years ago, RMC received three test shipments from Gutiérrez totaling less than $12.5 million,” wrote attorney J. Erik Connolly. “Based on those test shipments, RMC decided not to enter a business relationship with Gutiérrez or to onboard Gutiérrez as one of RMC’s sourcing entities. … The family implemented industry-leading programs and controls at RMC to eliminate the possibility of receiving gold from improper sources. They should be praised for their efforts.”
      </Paragraph>

      <Paragraph>
        In more recent years, CIJ Gutiérrez has sold far greater amounts of gold to the Swiss refiner Argor-Heraeus, and the Japanese-owned refiner Asahi, which has a plant in Salt Lake City and recently acquired Republic’s Miami facility out of bankruptcy.
      </Paragraph>

      <Paragraph>
        Argor-Heraeus – which sells gold to Apple, IBM and General Motors, among many other Fortune 500 companies – bought 2.4 billion U.S. dollars from CIJ Gutiérrez between 2008 and 2018, importing it to Switzerland, trade data show.
      </Paragraph>

      <Paragraph>
        Asahi, whose customers include Ford, Starbucks and Verizon, bought 856 million U.S. dollars from CIJ Gutiérrez between 2015 and 2018, bringing the gold to Salt Lake City, according to the records.
      </Paragraph>

      <Paragraph>
        Asahi declined to comment about its dealings with CIJ Gutiérrez. Argor-Heraeus said in a statement that it is “strongly committed to its responsibility of upholding the highest standards throughout the supply chain” but did not answer specific questions about its business with the Colombian firm.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="400"
          src=" https://datawrapper.dwcdn.net/859LO/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        In a statement, a spokesman for Ford said: “We were not aware of this issue previously, and we are investigating it.”
      </Paragraph>

      <Paragraph>
        It added that the company took its “sustainability and ethical commitments seriously” and was “committed to doing business the right way and in adherence with local law.”
      </Paragraph>

      <Paragraph>
        GM said it prohibits suppliers from employing child labor, abusing employees or engaging in corrupt business practices.
      </Paragraph>

      <Paragraph>
        “By choosing to do business with GM, our suppliers accept our terms and conditions,” the company said in a statement, “and for our largest suppliers we also expect that they annually certify compliance with these provisions of our contract. We follow up with those suppliers who do not confirm compliance.”
      </Paragraph>

      <Paragraph>
        Apple pointed out that the gold contents of its iPhones is about one one-hundredth of a gram, on average.
      </Paragraph>

      <Paragraph>
        “Following a thorough review and third-party audits, we are not aware of gold from Venezuela reaching our supply chain,” the company said in a statement. “Every year, we publish a full list of our gold refiners, 100 percent of which are participating in third-party audits. If a refiner is unable or unwilling to meet our standards, they will be removed from our supply chain. Since 2015, we’ve stopped working with 60 refiners of gold for this reason.”
      </Paragraph>

      <Paragraph>
        The other companies that bought gold from Asahi and Argor-Heraeus did not respond to requests for comment.
      </Paragraph>

      <Paragraph>
        “There’s no shortage of people here to buy the gold,” said a U.S. law enforcement official with knowledge of the American probe into gold smuggling who was not authorized to discuss the case publicly. “They look at the papers but they don’t really check. If you don’t want to know, you’re not going to find out.”
      </Paragraph>
    </Container>
  </article>
);
