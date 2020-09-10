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
      <title>Pelo Mundo | Venezuela, o paraíso dos contrabandi$tas</title>
    </Helmet>
    <Container>
      <Title as="h2">O ouro venezuelano vai parar secretamente nos mercados internacionais</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter5"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          O ouro ilegal da Venezuela ingressa nas cadeias de fornecimento mundiais após ser ‘lavado’ em países vizinhos, como Colômbia e ilhas do Caribe. Apesar das sanções internacionais e das diretrizes de diligência devida, empresas aéreas seguem voando com o metal para os mercados da Europa e dos Estados Unidos.
        </p>
      </Note>

      <Paragraph>
        Em uma refinaria de alta segurança em Antuérpia, na Bélgica, dois homens despejam ouro derretido – aquecido a mais de 1.160 graus Celsius – em moldes do tamanho de um aparelho celular.
      </Paragraph>

      <Paragraph>
        Olhando para as barras de ouro brilhantes, tão cobiçadas por bancos, joalheiros e empresas de tecnologia, não há como saber de onde veio ou quanto sangue foi derramado para extraí-lo.
      </Paragraph>

      <Paragraph>
        Mas de acordo com documentos vazados pela alfândega de Aruba, o ouro da Venezuela – grande parte extraído ilegalmente e que reforça um regime cada vez mais autoritário em Caracas – está chegando à cadeia mundial, indo parar nos Estados Unidos, Europa e Oriente Médio.
      </Paragraph>

      <Paragraph>
        Graças a regras arcaicas, o metal precioso passa pelo Caribe e chega a grandes refinarias a milhares de quilômetros de distância, que às vezes lavam inadvertidamente esse “ouro sangrento”, obscurecendo o impacto devastador e os crimes que rodeiam suas origens.
      </Paragraph>

      <Paragraph>
        Washington vem aumentando a pressão sobre a Venezuela ao tentar forçar a saída do presidente Nicolas Maduro do poder. Como parte desse esforço, em março, o Departamento do Tesouro dos Estados Unidos implementou sanções contra a compra de ouro da mineradora estatal venezuelana, a Minerven.
      </Paragraph>

      <Paragraph>
        “O regime ilegítimo de Maduro está saqueando as riquezas da Venezuela, ao mesmo tempo que põe em risco a vida dos povos indígenas, devastando áreas protegidas, desmatando e acabando com o meio ambiente”, disse o <ExternalLink href="https://home.treasury.gov/news/press-releases/sm631" language="en">secretário do Tesouro dos Estados Unidos, Steven Mnuchin, em 19 de março, ao anunciar as sanções</ExternalLink>{" "}. “Vamos perseguir energeticamente os envolvidos com o comércio ilícito e imprudente do ouro de Maduro, que contribuiu com a crise financeira, humanitária e ambiental.”
      </Paragraph>

      <Paragraph>
        O mais provável é que as sanções <ExternalLink href="https://www.crisisgroup.org/latin-america-caribbean/andes/venezuela/073-gold-and-grief-venezuelas-violent-south" language="en">aumentarem o tráfico de minerais</ExternalLink>{" "} e contribuam para o fortalecimento financeiro do crime organizado. Isso significa que os Estados Unidos podem ter feito um favor aos criminosos envolvidos, como os dissidentes do Exército de Libertação Nacional (ELN) e das Forças Armadas Revolucionárias da Colômbia (FARC), ambos na lista de terroristas dos Estados Unidos.
      </Paragraph>

      <Paragraph>
        O colombiano ELN se tornou o maior e mais antigo grupo guerrilheiro da América depois que as FARC se desmobilizaram oficialmente em 2017. Enquanto isso, o ouro venezuelano segue chegando aos mercados internacionais, inclusive nos Estados Unidos.
      </Paragraph>

      <Paragraph>
        Os países por onde passa o ouro – muitas vezes nações que exportam o metal em grandes quantidades, mas não têm minas próprias – são um passo intermediário essencial para obscurecer sua origem.
      </Paragraph>

      <Paragraph>
        As ilhas caribenhas holandesas de Curaçao e Aruba pertencem a esta categoria.
      </Paragraph>

      <Paragraph>
        Segundo fontes do governo e documentos vazados, pelo menos 130 toneladas de ouro saíram de Curaçao e outras 30 toneladas saíram de Aruba entre 2014 e 2018, sendo que 90% desse total veio da Venezuela. Enquanto o ouro importado parece ter sua papelada em ordem, autoridades das ilhas disseram que sua origem é, na melhor das hipóteses, duvidosa.
      </Paragraph>

      <Paragraph>
        Os documentos também confirmam que o ouro entra no Caribe vindo de voos privados da Venezuela, e às vezes circula de uma ilha para outra, o que obscurece ainda mais sua rota.
      </Paragraph>

      <Paragraph>
        Em última análise, o ouro é enviado em voos comerciais a refinarias dos Estados Unidos, Emirados Árabes Unidos, Suíça e Bélgica, sem nenhuma indicação de que foi extraído no país sul-americano.
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
        }}>E uma vez misturado com ouro de outros países, é praticamente impossível saber sua origem</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        É difícil saber quem compra esse ouro venezuelano que passa pelo Caribe holandês. Mas documentos vazados da alfândega de Aruba identificaram uma empresa em Dubai e dois comerciantes de ouro do chamado Distrito dos Diamantes de Antuérpia, na Bélgica, um dos lugares mais importantes do mundo para comercializar a pedra preciosa.
      </Paragraph>

      <Paragraph>
        Uma dessas empresas é Tony Goetz NV, uma das comerciantes de ouro mais relevantes da Bélgica e a única que possui uma fábrica para fundir o metal no país. De acordo com os documentos aduaneiros, a empresa comprou 21 quilos de ouro em dezembro de 2016.
      </Paragraph>

      <Paragraph>
        Vestido casualmente e com mocassins de couro, o dono da refinaria, Sylvain Goetz, mostra a um visitante a fábrica, capaz de processar em torno de 100 quilos de ouro por dia. Ele indica uma fileira de lingotes de ouro que esperam o carimbo com o selo da companhia e diz: “Não há nada melhor que isso. É ouro puro”.
      </Paragraph>

      <Paragraph>
        Questionado sobre a importação de ouro do Caribe holandês, Goetz diz que não sabe se o envio de 2016 realmente se concretizou. Ele reconhece que sua empresa comprou ouro das ilhas até três anos atrás, mas insiste que não compra mais o metal da Venezuela ou das ilhas caribenhas, justamente porque sua origem é muito difícil de determinar.
      </Paragraph>

      <Paragraph>
        “Faz uns anos que decidimos parar de cooperar com áreas offshore ou com os chamados países de trânsito”, disse.
      </Paragraph>

      <Paragraph>
        Em 2017, o governo venezuelano pediu a Goetz para refinar cerca de três toneladas de ouro. Mas em carta ao Banco Central da Venezuela,
        <FileLink
        href={require("documents/chapter5/Tony_Goetz-Lette_to_Central_Bank_of_Venezuela.pdf")}
        format="pdf"
        size="0.3MB"> a companhia negou o pedido citando a falta de transparência e documentação adequada</FileLink>
        .
      </Paragraph>

      <Paragraph>
        “Temos razões fundamentadas para acreditar que o suprimento [de ouro] não atenderia aos requisitos das nossas diretrizes de diligência devida”, escreveu a empresa ao Banco Central da Venezuela. “Essa decisão teve que ser tomada para evitar danos à reputação da nossa empresa.”
      </Paragraph>

      <Paragraph>
        O advogado da Tony Goetz NV, Bert Luyten, também confirmou que em 2017 a diretoria decidiu não importar mais ouro venezuelano.
      </Paragraph>

      <Paragraph>
        Argentor Essayeurs, outro comerciante de ouro belga instalado a poucos quarteirões do Distrito dos Diamantes, também apareceu no documento vazado da alfândega de Aruba. Entre janeiro de 2016 e dezembro de 2017, a empresa importou 6 milhões de dólares em ouro do Caribe holandês. O diretor Gianni Proost não nega que a empresa comercializava através de Aruba e Curaçao, mas diz que deixou de fazê-lo há cerca de um ano.
      </Paragraph>

      <Paragraph>
        “A empresa da qual comprávamos o ouro indicou que ele vinha da Guiana e da Colômbia, mas quando vimos os relatos sobre o ouro venezuelano e começamos a fazer perguntas, suas respostas evasivas não me convenceram e então paramos de comprar”, disse Proost. “Tudo isso ainda é muito pouco transparente.”
      </Paragraph>

      <Paragraph>
        Um caso mais claro é o da GoetzGold, em Dubai. A companhia pertence a Alain Goetz, irmão mais novo de Sylvain Goetz. Segundo os advogados das duas empresas, os negócios em Dubai e na Bélgica são completamente separados.
      </Paragraph>

      <Paragraph>
        Documentos aduaneiros mostram que entre outubro de 2017 e outubro de 2018 a GoetzGold comprou 21,8 toneladas de ouro do Banco Central da Venezuela, de acordo com uma <ExternalLink href="https://runrun.es/especiales/fuga_oro/" language="es">investigação publicada no início deste ano pela Runrun.es</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Um advogado da GoetzGold disse por e-mail que cada remessa de ouro de Aruba e Curaçao vem “de revendedores legais e certificados e também é checada por autoridades alfandegárias”. Mas a empresa não disse se havia comprado ouro venezuelano.
      </Paragraph>

      <Paragraph>
        A quantidade de ouro enviada a Bélgica e Dubai não é nada comparada ao que vai para a Suíça, onde 75% do ouro mundial é refinado. De acordo com a alfândega suíça, o país importou 40.090 quilos de ouro de Curaçao entre janeiro de 2015 e abril de 2019, com valor aduaneiro de 1.292.336.974 francos suíços, cerca de 1,3 bilhão de dólares.
      </Paragraph>

      <Paragraph>
        As quatro maiores refinarias suíças pertencem aos atores mais poderosos da indústria do ouro. Um deles, Valcambi, não respondeu às perguntas da reportagem, dizendo que qualquer resposta conteria “informações confidenciais da empresa”.
      </Paragraph>

      <Paragraph>
        Argor-Heraeus, por sua vez, disse que atua de acordo com as leis suíças e internacionais, e acrescentou que a companhia está “comprometida com a transparência, a sustentabilidade e o respeito aos direitos humanos”. No entanto, não respondeu a perguntas específicas sobre o ouro procedente da Venezuela, Aruba e Curaçao.
      </Paragraph>

      <Paragraph>
        As outras duas empresas, PAMP e Metalor, disseram que não estão comprando ouro desses países.
      </Paragraph>

      <SubTitle>
        O papel dos Países Baixos
      </SubTitle>

      <Paragraph>
        O Reino dos Países Baixos é signatário de vários tratados e <ExternalLink href="https://www.business-humanrights.org/en/un-guiding-principles" language="en">diretrizes das Nações Unidas</ExternalLink>{" "} que regem a cadeia de fornecimento de ouro e que têm como objetivo evitar abusos aos direitos humanos nas minas e manter os minerais “de conflito” fora do mercado global. Em 2017, o chamado “pacto sobre o ouro”, monitorado pelo Conselho Econômico Social dos Países Baixos, reuniu Estado, corporações e ONGs para elaborar um código de comportamento voluntário garantindo que as empresas adquirissem o máximo de ouro possível de fontes éticas
      </Paragraph>

      <Paragraph>
        E a Organização para Cooperação e Desenvolvimento Econômico (OCDE) – um bloco intergovernamental de 36 nações, incluindo os Países Baixos – fornece orientações aos membros sobre como lidar com minerais provenientes de zonas de conflito.
      </Paragraph>

      <Paragraph>
        Quando se trata de ouro venezuelano, “a violência política, os relatórios sobre a venda de reservas de ouro em violação às sanções, o envolvimento de grupos armados na região mineira e o tráfico transfronteiriço são razões para uma diligência devida mais estrita”, disse a organização por e-mail, acrescentando que as empresas devem pensar duas vezes antes de comprar o metal da Venezuela.
      </Paragraph>

      <Paragraph>
        Apesar dessas iniciativas, os Países Baixos foram acusados de abordar de forma insuficiente seu papel no comércio de ouro venezuelano que contribui para as violações de direitos humanos.
      </Paragraph>

      <Paragraph>
        Ronald van Raak, membro do Parlamento holandês, ficou surpreso com o fato do ouro venezuelano ter sido “lavado” na passagem por Aruba e Curaçao.
      </Paragraph>

      <Paragraph>
        “Embora tenham governos autônomos, os Países Baixos são responsáveis ​​pela boa governança nas ilhas”, disse ele. “Não podemos, como um reino, condenar as violações de direitos humanos do governo de Maduro ao mesmo tempo em que permitimos que as elites corruptas [venezuelanas] se enriqueçam através do mesmo reino.”
      </Paragraph>

      <SubTitle>
        Ouro das companhias aéreas
      </SubTitle>

      <Paragraph>
        Entre os principais agentes neste jogo global da ofuscação do ouro estão as companhias aéreas comerciais que transportam o metal.
      </Paragraph>

      <Paragraph>
        A cerca de 8 mil quilômetros dos
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter5/Europe01.jpg")
          }
        }}> poços de mineração em conflito na Venezuela</StoryMedia>
        , uma significativa quantia desse ouro voa para o aeroporto de Schiphol, em Amsterdã, após ter passado pelas zonas de trânsito no Caribe.
      </Paragraph>

      <Paragraph>
        Funcionários da Royal Dutch Airlines (KLM) se recusaram a dar entrevista, mas disseram por e-mail que “não estão de acordo com a caracterização de que grandes quantidades de ouro chegam aos Países Baixos em voos da KLM procedentes de Curaçao”.
      </Paragraph>

      <Paragraph>
        O porta-voz da KLM reconheceu mais tarde que “houve três envios em 2018 e dois em 2019, que foram levados por canais oficiais e concluídos com a aprovação de todas as autoridades”. Devido à “natureza sensível das remessas”, a companhia aérea, que é majoritariamente estatal, se recusou a dizer mais.
      </Paragraph>

      <Paragraph>
        Oficiais da alfândega holandesa, no entanto, dizem que as companhias aéreas comerciais enviaram muito mais ouro do que isso. Por e-mail, a agência disse que entre 2015 e 2018 houve um total de 310 remessas que saíram da Zona Franca de Curaçao com destino a Schiphol, totalizando 36.086,5 quilos de ouro, no valor de quase 1,5 bilhão de dólares. A maioria foi para Suíça e Turquia, disseram eles. Nenhum dado sobre as remessas procedentes de Aruba estava disponível.
      </Paragraph>

      <Paragraph>
        Em 2021, entrará em vigor uma nova legislação mais estrita da União Europeia sobre o comércio de ouro, que exigirá que as empresas ativas do setor <ExternalLink href="http://ec.europa.eu/trade/policy/in-focus/conflict-minerals-regulation/index_es.htm" language="es">informem a origem do metal que importam</ExternalLink>{" "}. Mas será algo difícil de cumprir, porque o ouro extraído da selva venezuelana frequentemente é levado para países vizinhos e enviado ao Caribe, disfarçando sua verdadeira origem.
      </Paragraph>

      <SubTitle>
        Os minerais de conflito mais finos da Flórida
      </SubTitle>

      <Paragraph>
        Com 2.200 quilômetros, a fronteira entre Colômbia e Venezuela é uma das mais extensas e menos controladas da América Latina, e o ouro que passa por ela segue sua rota até um dos maiores mercados do mundo: Miami.
      </Paragraph>

      <Paragraph>
        Eis como funciona o esquema de tráfico ilegal centrado no sul da Flórida: grandes quantidades de ouro venezuelano passam pela fronteira colombiana de carro, avião, barco ou a pé, às vezes com ajuda dos sindicados criminais da Venezuela, grupos guerrilheiros ou militares corruptos. Os traficantes falsificam documentos para fazer crer que o ouro foi extraído legalmente na Colômbia. Então o metal pode ser vendido – de maneira aparentemente legal – para importadores de Miami e de outras localidades.
      </Paragraph>

      <Paragraph>
        <FileLink
        href={require("documents/chapter5/OECD-Where_does_Colombian_Gold_Go_Spanish.pdf")}
        format="pdf"
        size="2MB">Os importadores da Flórida compraram cerca de um terço das exportações de ouro da Colômbia em 2016</FileLink>
        , segundo um estudo da OCDE.
      </Paragraph>

      <Paragraph>
        A maior parte do ouro venezuelano ouro que chega aos Estados Unidos ingressa por meio do
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Al Diaz",
            src: require("photos/chapter5/Europe02.jpg")
          }
        }}> Aeroporto Internacional de Miami</StoryMedia> em barras rudimentares. Logo é vendido a comerciantes do metal em diversos pontos do país, de acordo com fontes policiais, membros da indústria e ex-funcionários do governo venezuelano entrevistados pela reportagem.
      </Paragraph>

      <Paragraph>
        O ouro venezuelano também é transportado em jatos particulares para Aruba, que fica apenas 30 quilômetros ao norte da costa da Venezuela. Dados da exportação de Aruba obtidos por nossos repórteres mostram que a World Precious Metals, com sede em Miami, recebeu seis remessas de ouro da ilha entre 2014 e 2015. O país de origem do metal? Venezuela, de acordo com os registros aduaneiros.
      </Paragraph>

      <Paragraph>
        Duas companhias sediadas em Miami, uma delas registrada como World Precious Metals e a outra como WPM Miami Inc., negam qualquer conexão com essas importações.
      </Paragraph>

      <Paragraph>
        Os advogados de Vickan Bedoyan e de Harout Samra, coproprietários da World Precious Metals envolvidos atualmente em uma disputa comercial, disseram separadamente que seus clientes não eram responsáveis por tais operações.
      </Paragraph>

      <SubTitle>
        Abastecendo as maiores empresas
      </SubTitle>

      <Paragraph>
        Em abril de 2019, autoridades colombianas <ExternalLink href="https://www.fiscalia.gov.co/colombia/noticias/2-4-billones-de-pesos-fueron-blanqueados-en-operaciones-ficticias-de-compra-y-venta-de-oro/" language="es">acusaram o exportador CIJ Gutiérrez</ExternalLink>{" "} de vender ouro ilegal. Investigadores dos órgãos policiais colombianos disseram a nossos repórteres que a empresa obtinha metal de minas ilegais na Venezuela e na Colômbia.
      </Paragraph>

      <Paragraph>
        Registros comerciais mostram que a CIJ Gutiérrez exportou esse ouro para grandes revendedores de metais preciosos responsáveis por abastecer algumas das maiores empresas do planeta, como Apple, IBM, General Motors, Ford, Starbucks e Verizon.
      </Paragraph>

      <Paragraph>
        “Muito ouro venezuelano está chegando a Miami, mas [disfarçado] de ouro colombiano”, disse Ivan Díaz Corzo, ex-integrante da Unidade Nacional contra a Mineração Ilegal da Polícia da Colômbia.
      </Paragraph>

      <Paragraph>
        No ano passado, segundo suas próprias cifras,
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Reuters / Leonhard Foeger - stock.adobe.com",
            src: require("photos/chapter5/Europe04.jpg")
          }
        }}> a Colômbia produziu 35 toneladas de ouro</StoryMedia>
        . Mas o país exportou 45 toneladas.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/78W00/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Quando CIJ Gutiérrez foi acusada, os investigadores descobriram que muitas das companhias e indivíduos de quem a empresa alega ter comprado ouro entre 2006 e 2016 eram empresas-fantasmas ou pessoas fictícias, segundo um comunicado de imprensa da Procuradoria Geral da República da Colômbia, o que levou a mais de 700 milhões de dólares em ouro com origens suspeitas. Vários executivos da empresa foram presos e o Procuradoria Geral assumiu o controle da empresa.
      </Paragraph>

      <Paragraph>
        Um funcionário da Procuradoria Geral da Colômbia, que falou sob condição de anonimato, disse que os promotores acreditam que a maior parte do ouro do CIJ Gutiérrez veio da Colômbia, inclusive de operações de mineração controladas por grupos criminosos, mas não descartaram a possibilidade de parte do metal saiu da Venezuela.
      </Paragraph>

      <Paragraph>
      O antigo representante legal da CIJ Gutiérrez, Andrés Vieira Gutiérrez, não respondeu aos pedidos para comentar o caso. A interventora da empresa nomeada pelo governo, Ana Sauda Palomino, disse por e-mail que não encontrou evidências de que a companhia tenha comprado ouro venezuelano, mas admitiu que ainda não havia terminado a “revisão completa” dos registros.
      </Paragraph>

      <Paragraph>
        Palomino também ressaltou que a empresa e seus executivos ainda não haviam sido declarados culpados de qualquer delito.
      </Paragraph>

      <Paragraph>
        A funcionária acrescentou que todos os fornecedores da companhia devem seguir as políticas e procedimentos da empresa, que, segundo ela, atendem tanto aos padrões do setor de mineração quanto às diretrizes contra lavagem de dinheiro.
      </Paragraph>

      <Paragraph>
        Parte do ouro da CIJ Gutiérrez foi comprado por empresas estadunidenses, como Republic Metals Corp. (RMC), o único cliente no sul da Flórida e uma das maiores refinadoras do país.
      </Paragraph>

      <Paragraph>
        A RMC, que <ExternalLink href="https://www.miamiherald.com/news/business/article223213905.html" language="en">dpediu concordata</ExternalLink>{" "} no ano passado, importou 12,5 milhões de dólares em ouro da colombiana CIJ Gutiérrez entre 2008 e 2012, de acordo com a agência alfandegária da Colômbia e dados da Global Trade Data Supplier, da <ExternalLink href="https://www.importgenius.com/" language="en">Import Genius</ExternalLink>{" "}. Mas esses registros não mostram se Gutiérrez estava adquirindo ouro da Venezuela durante o período.
      </Paragraph>

      <Paragraph>
        Em carta enviada aos nossos repórteres, um advogado da família que era dona da República <ExternalLink href="https://www.miamiherald.com/news/local/crime/article229361954.html" language="en">antes de vendê-la este ano como parte de sua declaração de falência</ExternalLink>{" "} escreveu que “o envolvimento anterior da empresa com Gutiérrez é insignificante” e ameaçou processar por difamação se a República fosse mencionada nesta reportagem.
      </Paragraph>

      <Paragraph>
        “Há mais de sete anos, a RMC recebeu três carregamentos de teste de Gutiérrez, totalizando menos de 12,5 milhões de dólares”, escreveu o advogado J. Erik Connolly. “Com base nessas remessas de testes, a RMC decidiu não entrar em uma relação comercial com Gutiérrez como fornecedora. A família implementou programas de controle de primeira linha na RMC para eliminar a possibilidade de receber ouro de fontes indevidas. Eles deveriam ser elogiados por seus esforços.”
      </Paragraph>

      <Paragraph>
        Nos últimos anos, a CIJ Gutiérrez venceu quantidades muito maiores de ouro à refinaria suíça Argor-Heraeus e à japonesa Asahi, que tem instalações em Salt Lake City, em Utah, nos Estados Unidos, e que recentemente adquiriu as instalações da Republic em Miami.
      </Paragraph>

      <Paragraph>
        A Argor-Heraeus, que vende ouro para gigantes estadunidenses como Apple, IBM e General Motors, entre outras companhias, comprou ouro da CIJ Gutiérrez entre 2008 e 2018 no valor de 2,4 bilhões de dólares, segundo registros aduaneiros.
      </Paragraph>

      <Paragraph>
        Asahi, cujos clientes incluem Ford, Starbucks e Verizon, comprou 856 milhões de dólares em ouro da companhia colombiana entre 2015 e 2018, segundo os mesmos registros.
      </Paragraph>

      <Paragraph>
        A Asahi não quis se pronunciar sobre seus negócios com a CIJ Gutiérrez. A Argor-Heraeus, por sua vez, disse em comunicado que está “fortemente comprometida com sua responsabilidade de manter os mais altos padrões em toda a cadeia de fornecimento”, mas não respondeu às perguntas específicas sobre seus negócios com a empresa colombiana.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="400"
          src="https://datawrapper.dwcdn.net/a1bd9/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Um porta-voz da Ford disse em comunicado: “Não estávamos cientes deste problema anteriormente, e estamos investigando."
      </Paragraph>

      <Paragraph>
        Ele acrescentou que a companhia leva os “compromissos de sustentabilidade e ética a sério” e está “comprometida em fazer negócios da maneira correta e em conformidade com as leis locais”.
      </Paragraph>

      <Paragraph>
        A GM disse que proíbe os fornecedores de empregar mão-de-obra infantil, abusar de funcionários ou se envolver em práticas comerciais corruptas.
      </Paragraph>

      <Paragraph>
        “Ao optar por fazer negócios com a GM, nossos fornecedores aceitam nossos termos e condições”, disse a empresa em comunicado, “e quanto aos nossos maiores fornecedores também esperamos que eles certifiquem anualmente o cumprimento dessas cláusulas de nosso contrato. Acompanhamos os fornecedores que não confirmam o cumprimento”.
      </Paragraph>

      <Paragraph>
        A Apple destacou que o conteúdo de ouro de seus iPhones é cerca de um centésimo de grama, em média.
      </Paragraph>

      <Paragraph>
        “Após uma revisão exaustiva e auditorias de terceiros, não estamos cientes de que ouro da Venezuela chegue à nossa cadeira de fornecimento”, disse a empresa em comunicado. “Todos os anos publicamos a lista completa de nossos refinadores de ouro, 100% dos quais participam de auditorias de terceiros. Se um refinador não pode ou não está disposto a cumprir com nossos padrões, será eliminado de nossa cadeira de fornecimento. Desde 2015, deixamos de trabalhar com 60 refinadores de ouro por esse motivo.”
      </Paragraph>

      <Paragraph>
        As outras empresas que compraram ouro da Asahi e da Argor-Heraeus não responderam aos pedidos de comentários.
      </Paragraph>

      <Paragraph>
        “Aqui há muita gente disposta a comprar ouro”, disse um funcionário policial dos Estados Unidos a par das investigações do contrabando de metal, que não estava autorizado a falar do caso publicamente. “[Os compradores] olham os documentos [de procedência], mas na realidade não os verificam. Se não querem saber, não vão saber.”
      </Paragraph>
    </Container>
  </article>
);
