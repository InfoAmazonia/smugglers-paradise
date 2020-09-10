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
      <title>Encruzilhada Caribenha | Venezuela, o paraíso dos contrabandi$tas</title>
    </Helmet>
    <Container>
      <Title as="h2">A lavanderia de ouro do Caribe</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter4"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Desde 2014, ao menos 160 toneladas de ouro saíram da Venezuela e seguiram para as ilhas de Aruba e Curaçao. Os destinos turísticos funcionam como trampolim para os minerais de conflito, e o ouro manchado de sangue muda de cor no sol caribenho.
        </p>
      </Note>

      <Paragraph>
        Era uma tarde de sábado tipicamente quente em Aruba quando Rafael González Zambrano pensou ter completado uma operação de rotina, que ele já fazia havia sete anos.
      </Paragraph>

      <Paragraph>
        Depois de declarar os bens que transportava, o homem de origem venezuelana com passaporte holandês foi escoltado até seu avião por funcionários da agência alfandegária de Aruba. Ele estava tomando um voo da KLM para o aeroporto de Schiphol, em Amsterdã, e depois para Dubai.
      </Paragraph>

      <Paragraph>
        Zambrano é um transportador de ouro da Paoro Armoured Transport, que ganha cerca de 1.500 dólares americanos para cada viagem de entrega de metais preciosos a clientes internacionais.
      </Paragraph>

      <Paragraph>
        Desta vez, contudo, as coisas deram errado. Ele havia acabado de se acomodar em sua poltrona na classe executiva quando uma equipe de investigadores criminais da Holanda, o RST, invadiu a cabine, prendeu Zambrano e apreendeu os
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "National Crime Agency",
            src: require("photos/chapter4/Caribbean05.jpg")
          }
        }}> 50 quilos de ouro que ele carregava</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        A Paoro Armoured Transport é uma pequena participante de uma rede internacional de joalheiros, bancos, transportadores e fundidores que, às vezes indiretamente, financia violações de direitos humanos, abastecendo grupos armados e apoiando funcionários corruptos do governo venezuelano ao facilitar suas vendas de ouro.
      </Paragraph>

      <Paragraph>
        Além de Zambrano, o diretor da Paoro Armoured Transport também foi preso no que se tornou um caso de teste para autoridades que tentam entender o alcance de uma rede internacional que comercializa minerais que alimentam conflitos.
      </Paragraph>

      <Paragraph>
        “Nosso país vizinho” – é assim que o ministro das Relações Exteriores da Holanda, Stef Blok, se refere à Venezuela. Embora milhares de quilômetros de oceano separem a Europa e a América Latina, esse não é um pensamento estranho, já que Aruba e Curaçao, dois remanescentes tropicais das aspirações coloniais dos holandeses, estão respectivamente a 30 e 70 quilômetros do país sul-americano.
      </Paragraph>

      <Paragraph>
        As
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean01.jpg")
          }
        }}> ilhas culturalmente coloridas de Curaçao e Aruba</StoryMedia> conquistaram a independência como estados separados, mas ainda pertencem a partes estrangeiras do Reino dos Países Baixos. A saúde financeira de Aruba e Curaçao depende em grande parte da Venezuela, especialmente do petróleo, já que as grandes refinarias são os motores da economia das ilhas escassas em recursos. Consequentemente, elas sofreram duros golpes diante do colapso no setor petrolífero da Venezuela, o que revelou a falta de indústrias alternativas.
      </Paragraph>

      <Paragraph>
        A ausência de depósitos de ouro já tornava o Caribe holandês impopular aos colonos europeus séculos atrás, mas com o tempo as ilhas se tornaram um centro para o tráfico transatlântico de escravos, piratas e mercadores. Surpreendentemente, mais de 500 anos depois, as ilhas do Reino dos Países Baixos se tornaram o coração de um comércio de ouro de bilhões de dólares.
      </Paragraph>

      <Paragraph>
        E muito desse comércio depende do ouro ilegal que sai da Venezuela.
      </Paragraph>

      <Paragraph>
        Cliver Alcalá Cordones, major-general aposentado e amigo próximo do falecido presidente venezuelano Hugo Chávez, costumava comandar tropas nas regiões de mineração ao sul do rio Orinoco.
      </Paragraph>

      <Paragraph>
        Agora exilado na Colômbia, Alcalá disse ter conhecimento do tráfico de ouro em larga escala através do Caribe. Em 2017, ele disse que cerca de 20 toneladas de ouro da Venezuela foram transportadas para o Caribe holandês em 2012, tendo a Europa como destino principal.
      </Paragraph>

      <Paragraph>
        “<ExternalLink href="https://arcominero.infoamazonia.org/story/gold-mining?lang=pt" language="pt">Vai para Aruba e Curaçao</ExternalLink>{" "}, disse ele, insistindo que a prática continua.
      </Paragraph>

      <SubTitle>
        Bloqueio da fronteira
      </SubTitle>

      <Paragraph>
        O papel do Caribe no comércio de ouro venezuelano permaneceu desconhecido por muito tempo, e poucas perguntas foram feitas. Mas as ilhas ABC (Aruba, Bonaire e Curaçao) ficaram surpresas em janeiro de 2018 quando o presidente venezuelano Nicolás Maduro bloqueou todo o tráfego aéreo e marítimo com as ilhas, dizendo: “<ExternalLink href="https://www.nytimes.com/2018/01/06/world/americas/maduro-venezuela-travel-shutdown.html" language="en">Eles tiram ouro deste país ilegalmente</ExternalLink>{" "}, e tornam legal vendê-lo lá; eles tiram coltan, tiram diamantes, tiram todos os produtos alimentícios”.
      </Paragraph>

      <Paragraph>
        O bloqueio pegou as ilhas de surpresa, disseram diplomatas. E durante reuniões subsequentes entre Venezuela, Holanda e autoridades das ilhas, “o tema do ouro não foi absolutamente trazido à tona, nem do coltan”, disse Stella van Rijn, secretária-geral do Ministério de Assuntos Gerais e Relações Exteriores de Curaçao.
      </Paragraph>

      <Paragraph>
        O bloqueio continuou até abril de 2018, quando foi suspenso, e voltou a ser estabelecido em fevereiro de 2019, época em que as tensões geopolíticas voltaram a aumentar.
      </Paragraph>

      <Paragraph>
        Mas as ilhas perceberam e começaram a investigar o anteriormente ignorado comércio. Eles descobriram que enormes quantidades de ouro venezuelano não apenas fluíam pelas ilhas, mas que o Caribe funcionava como uma ferramenta para apagar os vestígios da origem venezuelana dos minerais.
      </Paragraph>

      <Paragraph>
        No dia 21 de junho, depois que nossos repórteres começaram a fazer perguntas, o governo de Curaçao anunciou que proibiria imediatamente o comércio de ouro venezuelano.
      </Paragraph>

      <Paragraph>
        Autoridades disseram que a mineração na Venezuela está inextricavelmente ligada a operações ilegais, fuga de capitais, repressão e exploração. Além disso, afirmaram que “investigações criminais” provavelmente revelariam que o comércio estava ligado a drogas e lavagem de dinheiro, atividades de contrabando e falsificação de documentos.
      </Paragraph>

      <Paragraph>
        “O que o governo de Curaçao decidiu é que não desejamos continuar a colaborar com o comércio de ouro da Venezuela porque não podemos validá-lo”, disse van Rijn.
      </Paragraph>

      <Paragraph>
        Ainda é legal movimentar o ouro venezuelano por meio de Aruba, mas a atividade tem que ser reportada ao promotor público. “Pode haver um contexto suspeito onde mais investigações são necessárias”, disse Terry Akkerman, promotor público da ilha.
      </Paragraph>

      <Paragraph>
        Enquanto isso, registros comerciais dos Estados Unidos e da Suíça mostram que Curaçao exportou centenas de quilos de ouro para ambos os países nos primeiros cinco meses de 2019.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/ooi06/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <SubTitle>
        Escoltas de ouro
      </SubTitle>

      <Paragraph>
        Uma das consequências de maior preocupação provocada pelas declarações de Maduro em 2018 foi a prisão do mensageiro de ouro, Zambrano. Esse movimento sacudiu toda a indústria.
      </Paragraph>

      <Paragraph>
        “[Meu empregado] foi detido ilegalmente por quatro meses”, diz Juan Carlos Toro Rodríguez, venezuelano que chefia a Paoro Armored Transport.
      </Paragraph>

      <Paragraph>
        Usando um boné Adidas azul e branco e uma camisa cinza de manga curta, Toro não se parece com um comerciante internacional de ouro. Ele diz que apenas fornece o transporte. Uma de suas principais atividades é enviar frutas da Venezuela para Aruba de barco. Ainda assim, ele foi preso junto com seu mensageiro sob acusação de tráfico, falsificação de documentos e lavagem de dinheiro.
      </Paragraph>

      <Paragraph>
        Tanto ele quanto Zambrano foram libertados devido à falta de provas, mas a investigação permanece em aberto. Toro balançou as mãos no ar, agitado, enquanto explicava que era uma vítima e que nunca havia violado nenhuma lei com seu negócio de ouro.
      </Paragraph>

      <Paragraph>
        Se o que fez foi ilegal, então mais pessoas deveriam ser presas, disse ele.
      </Paragraph>

      <Paragraph>
        “Todos os funcionários da alfândega devem ser presos!”, argumentou Toro, observando que já enviou ouro por Bélgica, Holanda, Estados Unidos e Emirados Árabes Unidos, onde as autoridades sempre aprovaram seus documentos.
      </Paragraph>

      <Paragraph>
        Antes de 2018, ele estava enviando quatro cargas de ouro por mês, pesando de 20 a 40 quilos cada, e às vezes mais.
      </Paragraph>

      <Paragraph>
        Toro estava tão certo de sua conformidade legal, e tão confiante que o promotor público estava errado, que arranjou outra carga de ouro para ser levada pela KLM em setembro de 2018. Ele diz que fez isso apenas uma vez para provar um ponto. Orgulhosamente, pega seu telefone para mostrar todos os selos que recebeu dos vários serviços alfandegários, explicando que sua remessa chegou a Dubai sem nenhum problema.
      </Paragraph>

      <Paragraph>
        As resplandecentes praias de Curaçao e Aruba são muito mais que um destino turístico e ponto de parada para navios de cruzeiro. Segundo operadores de aeroporto, funcionários da alfândega e fontes do governo, aviões privados e comerciais que
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "cJfRldJHYHw"
        }
        }}> voam por cima dos turistas bronzeados</StoryMedia> têm descarregado milhares de quilos de ouro venezuelano.
      </Paragraph>

      <Paragraph>
        Esses carregamentos, muitos provenientes de minas de ouro ilegais, fornecem aos grupos guerrilheiros, sindicatos do crime e oficiais do Exército da Venezuela somas generosas de dinheiro enquanto entrega um salva-vidas financeiro para as elites governamentais corruptas no país assolado pela crise.
      </Paragraph>

      <Paragraph>
        Companhias aéreas como American Airlines e KLM têm transportado ouro para fora do Caribe, enquanto os governantes das ilhas não têm sido capazes de impedir o fluxo de minerais de conflito que chegam através de seus aeroportos e zonas de livre comércio, disseram autoridades.
      </Paragraph>

      <Paragraph>
        Ao todo, pelo menos 160 toneladas de ouro saíram de ambas as ilhas entre 2014 e 2018, das quais a maioria foi transportada por Curaçao. Representantes do governo de Aruba e Curaçao confirmaram que pelo menos 90% do ouro que sai das ilhas veio originalmente da Venezuela.
      </Paragraph>

      <Paragraph>
        A KLM se recusou a dar entrevista, mas admite ter transportado ouro desde Curaçao três vezes em 2018 e duas vezes em 2019.
      </Paragraph>

      <Paragraph>
        A American Airlines não abordou questões específicas, mas disse em comunicado que trabalha em estreita colaboração com a Administração de Segurança de Transporte, Alfândega e Controle de Fronteiras e com governos de todo o mundo para “garantir que todos os passageiros, bagagens e cargas sejam adequadamente rastreados antes da saída” e que “nossas aeronaves não são usadas para contrabandear produtos ilícitos para os Estados Unidos”.
      </Paragraph>

      <SubTitle>
        Zonas de Livre Comércio
      </SubTitle>

      <Paragraph>
        Dentro de Curaçao –como um país dentro de um país – há Zonas de Livre Comércio, onde as mercadorias podem ser importadas, exportadas e baldeadas sem impostos e com pouca fiscalização.
      </Paragraph>

      <Paragraph>
        Na
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean02.jpg")
          }
        }}> Zona Econômica Livre do Aeroporto de Curaçao</StoryMedia> há 41 empresas que comercializam coisas como peças de carros, produtos farmacêuticos, joias e ouro.
      </Paragraph>

      <Paragraph>
        A Curaçao Precious Metals (Cupremeco), situada na região, não apenas comercializa ouro, mas também funde o metal. A empresa recebeu muita atenção da mídia em 2016, quando um segurança foi morto durante um assalto de 8,5 quilos de ouro.
      </Paragraph>

      <Paragraph>
        “É uma refinaria a todo vapor, licenciada e tudo”, diz um prestador de serviços financeiros envolvido no setor de ouro, que preferiu permanecer anônimo. “Eles podem definir a pureza, fundir, fazer barras de ouro. Têm todo o equipamento”.
      </Paragraph>

      <Paragraph>
        Cupremeco tem recebido ouro que chega da Venezuela por aviões particulares. De acordo com o provedor de serviços financeiros, a maior parte desse ouro foi exportada para os Estados Unidos ou colocada nos voos da KLM para Holanda, Suíça ou Emirados Árabes Unidos.
      </Paragraph>

      <Paragraph>
        A Cupremeco se recusou a comentar esta história.
      </Paragraph>

      <Paragraph>
        Os venezuelanos fazem a viagem porque querem vender seus minerais por dólares e evitar os bolívares desvalorizados que o governo venezuelano usa para pagar pelo ouro.
      </Paragraph>

      <Paragraph>
        Traficantes recebem seus pagamentos em contas bancárias no exterior, segundo um ex-comerciante de ouro de Curaçao, que pediu anonimato por razões de segurança. “A Venezuela está a apenas 70 quilômetros de distância”.
      </Paragraph>

      <Paragraph>
        A fonte disse que as minas localizadas nas profundezas da selva são operadas por pessoas que não podem transportar seu próprio ouro porque a logística é complicada e é perigoso.
      </Paragraph>

      <Paragraph>
        “Homens que possuem dinheiro, helicópteros, armas e pistolas visitam as mineradoras de pequena escala. São essas pessoas que recebemos aqui [em Curaçao]”, disse ele, acrescentando que entende perfeitamente que as pessoas levem o ouro para as ilhas, já que o governo venezuelano as obrigaria a vendê-lo em um acordo pouco vantajoso. “É contrabando de seu próprio ouro”, ele ri.
      </Paragraph>

      <Paragraph>
        O ex-comerciante descreveu como funcionam as operações de ouro nas zonas francas: o ouro venezuelano chega em voos privados ou por transportadores e vai direto para a Zona Econômica Livre. Em vez de ser registrado como uma importação, o produto permanece, para fins de contabilidade, em trânsito. Mas quando o metal sai da ilha, os documentos da alfândega só mencionam Curaçao ou Aruba – não mostram que o ouro é originário da Venezuela.
      </Paragraph>

      <Paragraph>
        E não são apenas as zonas de livre comércio. Funcionários das alfândegas de Aruba e Curaçao disseram que o ouro venezuelano é frequentemente transportado em voos comerciais, mas nunca declarado nem registrado como importação.
      </Paragraph>

      <Paragraph>
        Às vezes o ouro nem sai dos aviões.
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean03.jpg")
          }
        }}> Jatos particulares</StoryMedia> usados ​​para transportar ouro da Venezuela chegam ao único aeroporto privado da ilha, operado pelo CATS Group, uma pequena empresa que administra aeroportos em quatro países da região.
      </Paragraph>

      <Paragraph>
        “Eles [os carregadores] nos ligavam e diziam: ‘ouçam, temos 60 quilos; este é o endereço’. Precisávamos fazer uma fatura e um certificado de origem; então o ouro seria enviado de Curaçao para Miami”, explica o ex-comerciante. Três fontes diferentes do setor confirmaram que aviões particulares com carga desconhecida frequentemente partiam de Curaçao para Miami.
      </Paragraph>

      <Paragraph>
        Procurado pela reportagem para comentar o assunto, o CATS Group não respondeu aos pedidos.
      </Paragraph>

      <Paragraph>
        Outra maneira de transportar o contrabando é simplesmente vesti-lo na forma de joias, prática conhecida como “smurfing”.
      </Paragraph>

      <Paragraph>
        Um grosso colar de ouro pode pesar mais de 1 quilo e valer 40 mil dólares americanos. Um funcionário da alfândega de Aruba disse que as pessoas que usam joias pesadas levantam suspeitas, mas não há muito o que eles podem fazer a respeito.
      </Paragraph>

      <Paragraph>
        “Você vê pessoas com certa atitude ou aparência e pensa: ‘Não é uma pessoa que deve andar por aí com uma coisa dessas’”, disse ele.
      </Paragraph>

      <Paragraph>
        O funcionário disse que em dezembro de 2018 alguém tentou suborná-lo, oferecendo milhares de dólares cada vez que ele o deixasse passar pelo aeroporto. Ele não aceitou a oferta.
      </Paragraph>

      <Paragraph>
        Outros são mais discretos, contrabandeando pedaços de ouro em seus sapatos. Uma funcionária de segurança do aeroporto disse que os scanners corporais não detectariam o metal.
      </Paragraph>

      <Paragraph>
        Mas o ouro em trânsito simplesmente não é uma prioridade, disseram os funcionários.
      </Paragraph>

      <Paragraph>
        “A única coisa que fazemos aqui é garantir que [o produto] saia novamente”, explicou outra fonte de dentro da aduana de Aruba. “Se o ouro fosse importado, eles teriam que pagar impostos sobre ele. Mas se está apenas ‘em trânsito’, então pode ser pego e deixado em outro avião”, como se o ouro fosse procedente de Aruba.
      </Paragraph>

      <Paragraph>
        O mesmo pode se dizer sobre o ouro que passa por Curaçao, disse Etienne Casiano, porta-voz da alfândega do país. Sentado em seu escritório, próximo ao Aeroporto Internacional de Curaçao, ele alega que investigar mercadorias em trânsito “não é da competência da aduana”. Eles só precisam da fatura, conta do transporte aéreo ou conta de embarque de carga.
      </Paragraph>

      <Paragraph>
        “Eles [negociantes] não importam o ouro; se o fizessem, deveriam pagar impostos. Eles ficam em trânsito, o ouro é apanhado e sai com um avião diferente”, acrescenta Casiano. “Os voos [com o ouro] entraram em Curaçao em trânsito, em conformidade com nossos procedimentos e legislação”, disse ele. “Entrou legalmente, era normal para nós.”
      </Paragraph>

      <Paragraph>
        Mas ele reconhece que transportar ouro através do Caribe disfarça sua verdadeira origem, tornando as ilhas um ponto de transbordo muito atraente para os mercados mundiais.
      </Paragraph>

      <Paragraph>
        Bancos de dados não “mencionam o país de origem, apenas refletem o último porto do qual saiu a mercadoria”, disse Casiano. Assim, enquanto ele sabe que quase todo o ouro que entra na ilha é originário da Venezuela, no momento em que o metal chega à Europa ou Estados Unidos, sua verdadeira origem é obscurecida.
      </Paragraph>

      <Paragraph>
        Embora o ouro venezuelano seja fácil de disfarçar, muitos ainda estão evitando o mineral problemático. Archak Bedrossian, diretor da Haig, empresa compradora de ouro na zona franca, disse que parou de comprar ouro da Venezuela e de outros países sul-americanos quatro anos atrás.
      </Paragraph>

      <Paragraph>
        “Quando vimos que o negócio estava nas mãos de <i>pranes</i> [gangues] e paramilitares, paramos de negociar”, disse ele. “Antes, os mineiros nos procuravam para vender [seu ouro], mas essas pessoas foram forçadas a vender para grupos [criminosos] e é por isso que paramos.”
      </Paragraph>

      <SubTitle>
        Apagando as origens
      </SubTitle>

      <Paragraph>
        Um relatório da Força-Tarefa de Ação Financeira do Caribe alertou já em 2012 que em Curaçao “
        <FileLink
        href={require("documents/chapter4/CFATF-Curacao_First_Follow-Up_Report.pdf")}
        format="pdf"
        size="0.9MB">não existe nenhum processo para identificar a origem, o destino e a finalidade do movimento do ouro ou de outros metais e pedras preciosas</FileLink>”. Vários relatórios de acompanhamento indicam que nada mudou.
      </Paragraph>

      <Paragraph>
        Os dados que existem são frequentemente incompletos ou errôneos. Em um
        <FileLink
        href={require("documents/chapter4/Aruba_government-Customs_document.pdf")}
        format="pdf"
        size="0.7MB"> documento vazado de Aruba</FileLink> os sistemas de medida quilos, gramas e onças são usados ​​alternadamente, e outros dados importantes estão faltando.
      </Paragraph>

      <Paragraph>
        Autoridades de Aruba disseram que estão tentando ser mais diligentes em rastrear o ouro em trânsito e entender que suas agências poderiam ser responsabilizadas pela falta de fiscalização.
      </Paragraph>

      <Paragraph>
        “Agora, todos os papeis devem ser preenchidos muito bem, mesmo que [a mercadoria] esteja em trânsito”, disse um funcionário. “Às vezes é preciso que aconteça alguma coisa para que a lição seja aprendida.”
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
          id: "image-5",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter4/Caribbean04.jpg")
          }
        }}>Há mais de 70 joalherias</StoryMedia> em Curaçao que não apenas compram joias para fundir e exportar, mas também pagam por barras de ouro. Não há realmente como saber se o ouro vem da Venezuela. A única exigência para eles comprarem ouro é que o vendedor mostre um documento de identidade de Curaçao, pois as regulamentações da ilha não exigem certificados de origem.
      </Paragraph>

      <Paragraph>
        Um comerciante que foi consultado depois que as importações de ouro da Venezuela foram banidas supõe que os contrabandistas vão conseguir se ajustar, e que as rotas para remessas maiores simplesmente vão mudar.
      </Paragraph>

      <Paragraph>
        “Se eles querem dólares por seu ouro, podem ir para o Peru, Colômbia, Brasil, Guiana, Suriname”, disse ele, rindo. “Isso vai continuar.”
      </Paragraph>
    </Container>
  </article>
);
