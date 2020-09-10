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
      <title>Refugiados | Venezuela, o paraíso dos contrabandi$tas</title>
    </Helmet>
    <Container>
      <Title as="h2">Recrutados por grupos criminosos, refugiados atravessam fronteira com ouro</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter2"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Todos os dias, milhares de venezuelanos cruzam fronteira com a Colômbia; à sombra do êxodo histórico da Venezuela, inumeráveis quilos de ouro são contrabandeados. Grupos de crime organizado, comerciantes e oficiais militares corruptos da Venezuela controlam um negócio transfronteiriço multimilionário.
        </p>
      </Note>

      <Paragraph>
        Desde que começou o colapso da Venezuela, no final de 2014,
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
      > mais de 4 milhões de pessoas deixaram o país</StoryMedia>
        . A Colômbia é um dos locais que mais recebe migrantes e refugiados, e até o momento, já deu asilo para mais de 1,3 milhões de pessoas.
      </Paragraph>

      <Paragraph>
        A maioria entra na vizinha Colômbia por meio de “La Parada”, muitas vezes depois de ter viajado centenas de quilômetros.
      </Paragraph>

      <Paragraph>
        La Parada – que fica a poucos passos da icônica ponte Simon Bolívar, que separa os dois países – assemelha-se a um vasto mercado ao ar livre. Famílias venezuelanas exaustas descansam na calçada, enquanto homens percorrem o lugar com carrinhos de mão se oferecendo para carregar suas bagagens.
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta05.jpg")
          }
        }}> Pessoas em busca de remédios</StoryMedia> que não conseguem encontrar em seu país se acotovelam em meio a vendedores de cachorro-quente e carrinhos de suco. Há barracas onde os migrantes <ExternalLink href="https://www.nytimes.com/2018/02/17/world/americas/venezuela-crisis-colombia-migration.html" language="en">vendem seus cabelos para a confecção de perucas</ExternalLink>{" "}, na esperança de comprar uma passagem de ônibus ou alugar um quarto em um dos inúmeros hotéis improvisados que a população abriu em suas casas.
      </Paragraph>

      <Paragraph>
        Mas como as aglomerações permitem o anonimato, La Parada também é o centro de uma atividade muito mais destrutiva: o comércio ilegal de ouro que está ajudando a manter o governo venezuelano no poder, abastecendo grupos armados e destruindo o meio ambiente.
      </Paragraph>

      <Paragraph>
        Em torno de La Parada estão dezenas de casas de penhores que compram o ouro trazido da Venezuela, sem fazer perguntas.
      </Paragraph>

      <Paragraph>
        Um homem que grita pela vitrine de uma loja chamada Palacio del Oro disse que os imigrantes venezuelanos levam ouro de todas as formas.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "ZkkV8tpB1SI"
        }
        }}> “Alguns trazem em colares”, diz ele, “outros trazem das minas”</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Segundo o Alto Comissariado das Nações Unidas para os Refugiados (ACNUR), <ExternalLink href="https://www.acnur.org/noticias/press/2019/6/5cfa5eb64/refugiados-y-migrantes-de-venezuela-superan-los-cuatro-millones-acnur-y.html#_ga=2.136588400.118916983.1563840317-22580151.1563840317" language="es">mais de quatro milhões de refugiados e migrantes deixaram a Venezuela</ExternalLink>{" "} desde 2014 em meio a uma profunda crise econômica. E para muitos deles, o tráfico de ouro é uma das poucas formas de ganhar a vida.
      </Paragraph>

      <Paragraph>
        Harold, um jovem venezuelano vestido com camiseta azul e jeans desbotados, foi soldado na Venezuela antes de se tornar contrabandista de ouro. Ele disse que nas Forças Armadas aprendeu os pormenores da corrupção.
      </Paragraph>

      <Paragraph>
        “Eu conheço tráfico de combustível, tráfico de drogas, aprendi a traficar muitas coisas”, disse ele, pedindo anonimato para poder falar abertamente sobre o comércio ilícito. “Foi assim que aprendi a pagar e cobrar <i>vacunas</i>.”
      </Paragraph>

      <Paragraph>
        <i>vacuna</i> é o nome à extorsão. O termo remete à ideia de que o dinheiro é uma verdadeira “vacina” (na tradução livre do espanhol) de segurança para os traficantes que o pagam, e é um dos pilares do contrabando de ouro.
      </Paragraph>

      <Paragraph>
        Harold diz que o metal extraído no sul venezuelano é levado à fronteira colombiana por traficantes que operam em conjunto com a Guarda Nacional da Venezuela. Os soldados aceitam subornos, ou <i>vacunas</i>, para garantir uma passagem segura. Às vezes, os guardas fornecem até mesmo caminhões blindados para transportar o metal.
      </Paragraph>

      <Paragraph>
        Mas não são apenas os militares venezuelanos que participam do contrabando de ouro. Organizações criminosas venezuelanas conhecidas como sindicatos e grupos armados colombianos também estão envolvidos. O Exército de Libertação Nacional (ELN) da Colômbia –maior e mais antigo grupo guerrilheiro da América Latina depois que as Forças Armadas Revolucionárias da Colômbia (FARC) se desmobilizaram em 2017 – particularmente expandiu sua presença nas regiões mineiras da Venezuela. O ouro é uma importante fonte de renda para o ELN, junto com extorsão e tráfico de drogas, segundo analistas.
      </Paragraph>

      <Paragraph>
        O ELN no geral depende de uma rede de contrabandistas, chamados mulas, que são obrigados a subornar para cruzar as linhas da Guarda Nacional e os pontos de controle das guerrilhas para levar o ouro à fronteira com a Colômbia.
      </Paragraph>

      <Paragraph>
        Mais traficantes participam da travessia do ouro pela fronteira se as quantidades são significativas. “Digamos um quilo ou mais”, diz Harold. “Essas pessoas que levam [o ouro] desde a origem são diretamente responsáveis ​​por levá-lo a Cúcuta [primeira grande cidade que os venezuelanos encontram ao entrar na Colômbia]. Elas pagam um pouco a um membro da Guarda Nacional, em seguida mais um pouco a outro membro da Guarda Nacional e assim por diante.”
      </Paragraph>

      <Paragraph>
        Tentar fugir desses “pedágios” pode ser fatal. “Se eles quiserem te cobrar, ou você paga ou morre”, conta Harold.
      </Paragraph>

      <Paragraph>
        Os diferentes grupos que controlam a fronteira – incluindo as organizações paramilitares de direita e os guerrilheiros de esquerda – fazem com que a viagem seja perigosa.
      </Paragraph>

      <Paragraph>
        “Mulas [que transportam ouro] podem cruzar com vários grupos na fronteira durante uma travessia. Em apenas uma viagem, você pode encontrar a Guarda Nacional, a polícia e o CICPC [departamento de investigações criminais da polícia venezuelana]”, diz ele, revirando os olhos. “Todo mundo cobra a <i>vacuna</i>, incluindo policiais e oficiais da imigração colombiana.”
      </Paragraph>

      <Paragraph>
        “Todo mundo está se aproveitando disso”, acrescentou.
      </Paragraph>

      <Paragraph>
        Harold não gosta de ter que financiar todas essas pessoas, então costuma esconder o ouro.
      </Paragraph>

      <Paragraph>
        Os contrabandistas têm vários lugares para esconder o metal: nas solas dos sapatos, no chapéu, atrás do cinto. As mulheres que traficam muitas vezes escondem o ouro sob os seios.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "8VNugTSqhZg"
        }
        }}>O método preferido de Harold é escondê-lo em laranjas</StoryMedia>
        . Depois de tirar o bagaço e esvaziar o miolo da fruta, é possível rechear a casca com algo entre 25 e 40 gramas de ouro. Assim, um saco cheio de laranjas pode carregar até meio quilo do metal, com valor de aproximadamente 22 mil dólares.
      </Paragraph>

      <Paragraph>
        “Se eu escondo o ouro, posso ter mais lucros”, explica.
      </Paragraph>

      <Paragraph>
        Procurada, a Migração da Colômbia disse que “não tem nenhuma denúncia formal de supostas extorsões” por parte de seus oficiais e que “não exerce controle algum sobre bagagens ou mercadorias, já que não é de sua competência”.
      </Paragraph>

      <Paragraph>
        Apesar da fortuna que carregam, os traficantes ganham cerca de 2 dólares por grama, o que dá uma média de 12 dólares por viagem. Isso é cerca de três vezes o salário mínimo mensal da Venezuela, mas os perigos são significativos.
      </Paragraph>

      <Paragraph>
        Harold disse que os chefes muitas vezes ameaçam os familiares dos contrabandistas para garantir que o ouro seja entregue.
      </Paragraph>

      <Paragraph>
        O antigo chefe de Harold sabia onde sua família vivia, quantos filhos tinha e em qual escola eles estudavam.
      </Paragraph>

      <Paragraph>
        “Averiguaram tudo sobre meus parentes. Assim que era minha família ou a mercadoria”, disse.
      </Paragraph>

      <Paragraph>
        Colômbia e Venezuela compartilham uma fronteira de 2.219 quilômetros, onde há sete postos de travessia oficiais, que muitas vezes estão fechados devido à deterioração na relação entre os dois países. Assim, a maioria dos contrabandistas tem que levar o ouro por trilhas informais, as <i>trochas</i>, que estão sob o controle de diversas gangues criminosas e grupos armados.
      </Paragraph>

      <Paragraph>
        O Escritório das Nações Unidas para a Coordenação de Assuntos Humanitários estima que
        <FileLink
        href={require("documents/chapter2/OCHA_UN_Colombia-Contexto_Humanitario_Norte_de_Santander.pdf")}
        format="pdf"
        size="3.6MB"> agentes ilegais ganhem mais de 2,1 milhões de dólares por mês </FileLink> controlando
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta06.jpg")
          }
        }}> as <i>trochas</i> e extorquindo os viajantes</StoryMedia> apenas no departamento colombiano Norte de Santander.
      </Paragraph>

      <Paragraph>
        Não dar atenção a esses grupos pode ter consequências terríveis.
      </Paragraph>

      <Paragraph>
        No dia 17 de abril, por exemplo, três cadáveres foram encontrados entre duas <i>trochas</i>. Uma das vítimas havia sido decapitada e sua cabeça estava enrolada em uma camiseta, <ExternalLink href="https://www.laopinion.com.co/judicial/encuentran-tres-muertos-en-dos-trochas-de-la-frontera-175315#OP" language="es">de acordo com um jornal local</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Franklin, outro contrabandista de ouro venezuelano, disse que já havia se deparado com pessoas desmembradas ao longo das <i>trochas</i>, um sinal de advertência dos grupos armados.
      </Paragraph>

      <Paragraph>
        “Eu chamo de carro-bomba”, diz o homem, que deu entrevista sob a condição de permanecer anônimo. Ele se refere ao ouro que escondeu em seus sapatos quando traficava e ao grande risco que correu de ser pego e assassinado. “Eu vi pessoas desmembradas, esquartejadas. Um ombro humano largado na <i>trocha</i> como se não fosse nada.”
      </Paragraph>

      <Paragraph>
        Franklin, 24, conta que fugiu para a Colômbia depois de ser detido e agredido na Venezuela em meio aos protestos que tomaram o país. Ele diz que, enquanto estava detido, teve a cabeça raspada por policiais, que tentaram estuprá-lo duas vezes.
      </Paragraph>

      <Paragraph>
        Quando chegou à Colômbia, mais precisamente em La Parada, não encontrou nenhum lugar para descansar na cidade vizinha de Cúcuta. Teve que dormir no terminal de ônibus na primeira semana, e logo foi recrutado por um grupo do crime organizado para ser contrabandista.
      </Paragraph>

      <Paragraph>
        Escondendo o metal ilegal nas solas dos sapatos, ele cruzava a fronteira a pé. Trabalhou vários meses até ganhar dinheiro suficiente para buscar sua esposa e o filho de nove meses.
      </Paragraph>

      <Paragraph>
        Os traficantes que atravessam a fronteira de um lado para o outro são chamados de “pulmões”, e Franklin contou que às vezes fazia várias viagens por dia, junto com dezenas de outros contrabandistas.
      </Paragraph>

      <Paragraph>
        “Imagine 15 pares de pulmões trabalhando todos os dias para um único chefe”, diz. “Alguns desses chefes têm até 80 pares de pulmões trabalhando diariamente para eles.”
      </Paragraph>

      <Paragraph>
        Assim como Harold, Franklin disse que seus chefes ameaçaram sua família para obrigá-lo a entregar o ouro. Ele agora vende doces nas ruas porque o tráfico se tornou muito perigoso.
      </Paragraph>

      <Paragraph>
        Ainda que trabalhe 14 horas por dia, às vezes mais, nem sempre consegue dinheiro suficiente. O pequeno apartamento que aluga custa 5 dólares por noite, e conseguiu um pouco de comodidade com um colchão barato, uma televisão de segunda mão e um ventilador.
      </Paragraph>

      <Paragraph>
        Outra filha, que ainda mora na Venezuela, começou um novo semestre de aulas sem material escolar. Por isso ele está economizando dinheiro para mandar a ela.
      </Paragraph>

      <SubTitle>
        A portas fechadas
      </SubTitle>

      <Paragraph>
        No centro de Cúcuta, a cerca de dez quilômetros do corredor de contrabando de ouro de La Parada, há uma área do tamanho de um bairro que foi convertida em um centro de mercadorias ilícitas vindas da Venezuela.
      </Paragraph>

      <Paragraph>
        O centro foi chamado de Alejandría, um shopping a céu aberto com caminhos estreitos repletos de roupas, perfumes falsificados, laptops da marca Canaima (que em outra época eram dados pelo governo venezuelano para as crianças usarem na escola) e armas de brinquedo. Mas, debaixo dos panos, também se vendem armas de verdade, dizem alguns.
      </Paragraph>

      <Paragraph>
        A área também está cheia das chamadas
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "vgdRWxCY53g"
        }
        }}> <i>compraventas</i> – pequenas lojas que compram e vendem ouro</StoryMedia>
        . Somente nesta área, chegam diariamente de 200 a 300 venezuelanos para oferecer o metal. Os moradores dizem que o número de casas de penhores aumentou significativamente nos últimos anos, quando o tráfico de ouro disparou.
      </Paragraph>

      <Paragraph>
        “Compro ouro, compro ouro”, gritam os encarregados das
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta07.jpg")
          }
        }}> lojas</StoryMedia>
        , tentando atrair novos clientes.
      </Paragraph>

      <Paragraph>
        Outros tentam ser mais discretos sobre o comércio, em grande parte informal ou ilegal. Nos fundos de um caótico mercado há um pequeno escritório oculto atrás de um painel que se abre. O espaço é suficiente para três cadeiras de plástico e uma pequena escrivaninha, atrás da qual há um homem com uma pilha de dinheiro.
      </Paragraph>

      <Paragraph>
        Ele paga 30 dólares por grama por ouro e diz que compra entre 4 e 5 quilos do metal por semana. Isso significa cerca de 150 mil dólares em ouro.
      </Paragraph>

      <Paragraph>
        Questionado sobre quanto ouro é possível vender em uma semana, ele respondeu “quanto for preciso”.
      </Paragraph>

      <Paragraph>
        De volta ao centro comercial Alejandria, uma mulher de meia-idade está de pé junto a uma vitrine cheia de colares de ouro trazidos da Venezuela. Ela saca uma calculadora de sua mesa quando perguntada sobre os preços do ouro. Diz que as joias de 24 quilates são vendidas por 36 dólares a cada grama.
      </Paragraph>

      <Paragraph>
        Logo ela grita para uma mulher do outro lado do corredor, que também tem uma joalheria, e pergunta se ela tem ouro não refinado.
      </Paragraph>

      <Paragraph>
        “<i>¿Tienes oro de la mina?</i>”
      </Paragraph>

      <Paragraph>
        Não, responde a outra, pelo menos por agora.
      </Paragraph>

      <Paragraph>
        A maioria dessas lojas não está legalmente autorizada a comercializar ouro, mas isso não impediu que os negócios crescessem exponencialmente. Existe até um site que <ExternalLink href="http://preciocucuta.com/oro-hoy/" language="es">explica como comprar ouro em Cúcuta</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Francisco administra uma loja licenciada para emprestar dinheiro a troco de joias penhoradas. Mas ele admite que tem comprado ouro de minas venezuelanas.
      </Paragraph>

      <Paragraph>
        “Bem, eu tenho comprado ouro”, diz, e pede para não ser identificado por medo de represálias, “mas sei que não podemos fazer isso”.
      </Paragraph>

      <Paragraph>
        Ele puxa o celular e mostra várias fotos do que está sendo oferecido do outro lado da fronteira. Ele aumenta o zoom em uma
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter2/Cucuta08.jpg")
          }
        }}> pilha de barras de ouro que pesam desde 300 gramas a mais de 1,5 quilo</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        “Eles estão pedindo um valor muito alto”, diz.
      </Paragraph>

      <Paragraph>
        Francisco explica como o comércio de ouro funciona: contatos na Venezuela escrevem para ele informando o que está em oferta, e se chegam a um acordo, um contrabandista é enviado para cruzar a fronteira com o metal. Os pagamentos são feitos em dinheiro, geralmente em dólares ou por transferência bancária.
      </Paragraph>

      <Paragraph>
        Em Cúcuta, o ouro é escondido nas portas e outros compartimentos de carros particulares, e então é levado a grandes cidades como Bogotá, Cali ou Medellín. Lá, se falsificam os documentos necessários para exportá-lo para Europa ou Estados Unidos, e o ouro entra na cadeia de fornecimento global como mercadoria legal.
      </Paragraph>

      <Paragraph>
        As quantidades de ouro que passam por Cúcuta variam muito, diz Francisco. Demora cerca de uma semana para juntar 100 quilos, mas ele não pode se dar ao luxo de financiar esse investimento por conta própria.
      </Paragraph>

      <Paragraph>
        “Há muitos grupos” que financiam a compra de ouro, acrescenta outro homem que ouvia a conversa. Ele sabe que o ouro é o bem preferido para lavar dinheiro do crime.
      </Paragraph>

      <Paragraph>
        “É um jogo internacional!”, afirma Francisco.
      </Paragraph>
    </Container>
  </article>
);
