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
      <title>Minas de Ouro | Venezuela, o paraíso dos contrabandi$tas</title>
    </Helmet>
    <Container>
      <Title as="h2">Crime organizado controla exploração de ouro na Venezuela</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter1"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Todos os ingredientes de um mineral de conflitos podem ser encontrados no sul da Venezuela. Um perigoso coquetel de grupos armados e oficiais corruptos controla a extração do ouro do país antes de levá-lo às fronteiras.
        </p>
      </Note>

      <Paragraph>
        O longo caminho que começa em Ciudad Guayana, no estado de Bolívar, e segue para o sul da Veneuzela marca a rota da mineração ilegal de ouro no país. Centenas de pessoas percorrem o caminho todos os dias em busca de Eldorado – riquezas que permitiram fugir de uma crise econômica sem precedentes.
      </Paragraph>

      <Paragraph>
        Nos últimos anos, comida, medicamentos, combustível e dinheiro têm sido itens escassos no restante da Venezuela. Contudo, seguem disponíveis ao longo dessas estradas do sudeste, como se as riquezas da mineração de ouro criassem um mundo paralelo.
      </Paragraph>

      <Paragraph>
        O ponto de parada mais importante é El Callao, cidade que também fica no estado de Bolívar, agrupada entre montanhas, a cerca de 850 quilômetros da capital Caracas. El Callao é conhecida por seu carnaval colorido, mas foi rebatizada de capital regional da mineração.
      </Paragraph>

      <Paragraph>
        O crescimento da atividade transformou o lugar em um pesadelo.
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Jorge Benezra",
            src: require("photos/chapter1/Venezuela01.jpg")
          }
        }}>As ruas estão repletas de carros, motos e vendedores, </StoryMedia>
         que dormem em praças públicas quando os hotéis estão completamente lotados.
      </Paragraph>

      <Paragraph>
        O outrora pacato vilarejo tinha apenas 20 mil habitantes em 2011. Era um lugar onde pequenos comerciantes vendiam joias artesanais e pedrinhas de ouro sem medo de roubos. Agora, cerca de 100 mil pessoas vivem na região, e há de 300 mil a 500 mil mineiros percorrendo as numerosas minas do sul da Venezuela.
      </Paragraph>

      <Paragraph>
        El Callao faz parte do Arco Mineiro do Orinoco, um megaprojeto patrocinado pelo governo que cobre 12% do território venezuelano.
      </Paragraph>

      <Paragraph>
        Lançado pelo presidente Nicolás Maduro em fevereiro de 2016, o projeto é uma tentativa de buscar recursos após o colapso da indústria petrolífera – responsável por sustentar a nação sul-americana por um século. Como parte do plano, o <ExternalLink href="https://mundo.sputniknews.com/entrevistas/201812151084165986-venezuela-riquezas-recursos-oro-diamantes/" language="es">governo tenta validar e certificar reservas de ouro que chegam a 8.900 toneladas até 2025</ExternalLink>{" "}.  Isso daria à Venezuela o segundo maior depósito do metal em todo o mundo.
      </Paragraph>

      <Paragraph>
        Mas nem tudo é abundância e glamour. A mineração de ouro na área costumava ser administrada por corporações transnacionais. Agora, grupos criminosos e gangues armadas monopolizam os negócios. E o povo de El Callao, como em muitos vilarejos do sul, teve que aprender a viver com o terror.
      </Paragraph>

      <Paragraph>
        A imprensa local noticiou a descoberta de valas comuns, mas os moradores dizem que muitos dos mortos, vítimas de violência e doenças, nunca foram encontrados – seus corpos estariam escondidos nas selvas do país.
      </Paragraph>

      <Paragraph>
        Segundo o Observatório de Violência da Venezuela, El Callao foi a <ExternalLink href="https://observatoriodeviolencia.org.ve/ovv-lacso-informe-anual-de-violencia-2018/" language="es">localidade mais violenta do país</ExternalLink>{" "} em 2018, com taxa de homicídio de 619,8 a cada 100 mil habitantes.
      </Paragraph>

      <Paragraph>
        Um empregado da estatal Companhia Geral de Mineração da Venezuela (Minerven), que pediu anonimato com medo de represálias, explica que “grupos irregulares” estão ficando ricos com o negócio do ouro.
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "20O0vWcLDv4"
        }
        }}> Segundo o relato, eles forçam os mineiros e suas famílias a viverem no inferno, com práticas que beiram o sadismo.</StoryMedia>
      </Paragraph>

      <Paragraph>
        Algumas testemunhas, incluindo mineiros que fugiram para a Colômbia, confirmam essas acusações e apontam outros abusos, como prostituição forçada, tortura, massacres e decapitações por grupos armados que detém o controle das minas.
      </Paragraph>

      <Paragraph>
        Atualmente, vários grupos criminosos dominam El Callao e o Arco Mineiro do Orinoco. De acordo com ONGs, políticos de oposição e testemunhas oculares, dissidentes das Forças Armadas Revolucionárias da Colômbia (FARC) e membros do Exército de Libertação Nacional (ELN) da Colômbia estão presentes nas minas de Bolívar e no vizinho estado do Amazonas, na Venezuela.
      </Paragraph>

      <Paragraph>
        Até recentemente, as FARC eram o maior grupo guerrilheiro da América Latina. Baseado na Colômbia e criado em 1964 para lutar pela distribuição igualitária de terras e pelos trabalhadores rurais pobres, permaneceu como um movimento de guerrilha até a assinatura de um acordo de paz em 2016. Agora, o ELN é o maior grupo guerrilheiro do continente.
      </Paragraph>

      <Paragraph>
        As duas organizações compartilham o território com sindicatos do crime, ou <i>sindicatos</i>, dirigidos por líderes de gangues conhecidos como <i>pranes</i>. Há também os Comitês para a Defesa da Revolução (CDR), que iniciaram seus próprios grupos de mineração e estão ideologicamente alinhados com o governo de Maduro.
      </Paragraph>

      <Paragraph>
        As gangues, que estão na área da mineração desde 2010, costumavam ser os atores dominantes, mas perderam terreno para os guerrilheiros colombianos nos últimos anos, disse um soldado da Guarda Nacional de 25 anos.
      </Paragraph>

      <Paragraph>
        Ele ainda se surpreende quando se lembra da primeira vez que viu a marcha do ELN pelo estado de Bolívar.
      </Paragraph>

      <Paragraph>
        “Vimos patrulhas de 200 homens armados andando ao nosso lado, identificados como ELN”, disse ele. “O que devíamos fazer? Nós apenas os cumprimentamos como se fossem velhos amigos.”
      </Paragraph>

      <Paragraph>
        O controle da área por grupos armados e unidades militares corruptas impede que os mineiros falem abertamente.
      </Paragraph>

      <Paragraph>
        “Aqui é melhor não falar nada se você quer continuar vivo. Há muitas máfias”, disse um empresário local que pediu para não ser identificado. “Os militares chegaram para fazer negócios, não para proteger os cidadãos. Toda semana há um assassinato.”
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela05.jpg")
          }
        }}>Mineiros</StoryMedia> reclamam que estão sendo extorquidos por todos os lados, sendo obrigados a pagar “impostos” para trabalhar ou levar equipamentos para as minas, mas não há muitas opções.
      </Paragraph>

      <Paragraph>
        “Vamos para a mina e trabalhamos em grupos para poder cuidar uns dos outros”, disse um mineiro artesanal vestido com uma camiseta da “Missão Piar”, programa do governo destinado a combater a mineração ilegal. “[Os grupos armados] tomam nossos celulares e nossos pertences antes de entrarmos nas minas. Precisamos do trabalho, mas se reclamamos, eles não permitem que a gente volte.”
      </Paragraph>

      <SubTitle>
        O labirinto do ouro evita o Banco Central
      </SubTitle>

      <Paragraph>
        Luis Rosales, advogado da cidade de Valência, a cerca de 125 quilômetros de Caracas, chegou na cidade mineira há dois anos, esperando arrumar emprego nas jazidas de ouro. Agora, ele vende ferramentas de mineração na rua.
      </Paragraph>

      <Paragraph>
        “As famílias estão dormindo em todos os lugares, no terminal de ônibus e na praça, tentando ganhar a vida não apenas por meio do ouro, mas vendendo tudo o que podem”, disse ele. “Você sofre, mas consegue colocar um pouco de comida na mesa.”
      </Paragraph>

      <Paragraph>
        Em El Callao e nos arredores, mineiros e suas famílias moram em barracos feitos de varas de madeira e com paredes feitas de sacolas plásticas. Os números de criminalidade e doença são galopantes.
      </Paragraph>

      <Paragraph>
        O governo venezuelano não divulgou números recentes sobre a malária, mas a
        <FileLink
        href={require("documents/chapter1/WHO-World_Malaria_Report.pdf")}
        format="pdf"
        size="6.9MB"> Organização Mundial de Saúde registrou 411.586 novos casos em 2017</FileLink>
        , aumento de 811% desde 2010. E a área de mineração no estado de Bolívar tem a maior concentração de casos, segundo especialistas.
      </Paragraph>


      <Paragraph>
        Sem qualquer tipo de medidas de segurança,
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela03.jpg")
          }
        }}> homens, mulheres e crianças cavam com as mãos ou usam ferramentas rudimentares</StoryMedia> à procura de ouro. Se conseguirem encontrar 1 grama de ouro, podem ganhar cinco vezes o salário mínimo mensal, que atualmente é de cerca de 7 dólares.
      </Paragraph>

      <Paragraph>
        Como outros setores da economia venezuelana entraram em colapso, a promessa das riquezas do ouro desencadeou uma migração em massa para o sul do país.
      </Paragraph>

      <Paragraph>
        Agora, máquinas de dragagem, bombas de sucção, picaretas, pás, cianeto e mercúrio estão cada vez mais presentes no sul da Venezuela, ameaçando contaminar o estoque de peixes da região.
      </Paragraph>

      <Paragraph>
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "I6TZZVQ4RVE"
        }
        }}> Os mineiros também estão inalando o vapor de mercúrio que vem da queima de amálgama de ouro</StoryMedia>
        . O Programa das Nações Unidas para o Meio Ambiente (PNUMA) diz que não <ExternalLink href="https://www.unenvironment.org/news-and-stories/press-release/world-comes-together-tackle-mercury-poisoning/" language="en">há cura para a intoxicação por mercúrio</ExternalLink>{" "}, que pode causar danos neurológicos irreparáveis.
      </Paragraph>

      <Paragraph>
        Para complicar, cerca de
        <FileLink
        href={require("documents/chapter1/CECODAP-Peligros_y_Vulneraciones_de_DDHH_de_Ninos_Ninas_y_Adolescentes_en_la_Frontera_y_Actividades_Mineras.pdf")}
        format="pdf"
        size="3.3MB"> 45% dos mineiros da região são crianças ou adolescentes</FileLink>
        , de acordo com relatório da ONG Cecodap, que cuida dos direitos de crianças e adolescentes na Venezuela.
      </Paragraph>

      <Paragraph>
        A Organização para Cooperação e Desenvolvimento Econômico (OCDE) e a União Europeia definem “minerais de conflito” como mineração que contribui para a ocorrência de trabalho forçado, lavagem de dinheiro, trabalho infantil e abusos de direitos humanos. Todos esses ingredientes estão presentes nas minas da Venezuela.
      </Paragraph>

      <SubTitle>
        Demanda Crescente
      </SubTitle>

      <Paragraph>
        A demanda global por ouro em 2018 alcançou 44.435 toneladas, quase metade proveniente do setor de joias.
      </Paragraph>

      <Paragraph>
        De acordo com o World Gold Council, a Venezuela é o 32º maior produtor de ouro do mundo, responsável por 23 toneladas em 2018. O
        <FileLink
        href={require("documents/chapter1/Venezuela_government-Plan_Sectorial_Minero_2019-2025.pdf")}
        format="pdf"
        size="8.2MB"> Plano do Setor Mineiro de Maduro </FileLink>
        estabelece metas de produção de 25,4 toneladas em 2019 e 79,4 toneladas até 2025.
      </Paragraph>

      <Paragraph>
        Para atingir esses objetivos, o governo diz que planeja “coordenar, organizar e controlar a mineração em pequena escala dentro do Arco Mineiro do Orinoco”.
      </Paragraph>

      <Paragraph>
        Atualmente, há dois grandes grupos absorvendo o ouro
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela06.jpg")
          }
        }}> produzido por mineiros artesanais</StoryMedia>
        . O primeiro é um grupo de investidores privados; o outro é a Minerven.
      </Paragraph>

      <Paragraph>
        As operadoras privadas compram ouro de mineradoras ilegais e vendem para atacadistas que, em seguida, “teoricamente” revendem para o Banco Central, disse um dos 570 compradores locais de ouro em El Callao, que lida com cerca de 2 kg de ouro por semana.
      </Paragraph>

      <Paragraph>
        “Isso quase nunca acontece”, explicou. “[Os atacadistas] ganham mais dinheiro contrabandeando [ouro] para fora do país e sendo pagos em dólares, e não os bolívares que o Estado está oferecendo.”
      </Paragraph>

      <Paragraph>
        A Minerven é a principal fornecedora de ouro para o Banco Central, que por sua vez vende o ouro para <ExternalLink href="https://runrun.es/rr-es-plus/376055/mas-de-73-toneladas-de-oro-de-venezuela-salieron-en-33-vuelos-rumbo-a-dubai-y-turquia-en-2018/" language="es"> clientes em países como Turquia e Emirados Árabes Unidos</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        A estatal também obtém a maior parte de seu ouro de
        <StoryMedia
        media={{
          id: "image-5",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela04.jpg")
          }
        }}> mineiros de baixa escala</StoryMedia> e cooperativas, mesmo sabendo que é proveniente de atividade ilegal, disse um representante da empresa que pediu anonimato.
      </Paragraph>

      <Paragraph>
        Fundada em 1970, a Minerven foi reformulada ao menos três vezes na última década. Depois de atingir o “marco” de produção de 12,23 toneladas em 2009, a produção de mineração entrou em colapso entre 2010 a 2015, quando as empresas de mineração internacionais saíram do país.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/KEo8q/2/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Mesmo para os funcionários da empresa, as operações da Minerven estão envoltas em mistério, pois o governo não produz informações sobre a compra e venda de ouro.
      </Paragraph>

      <Paragraph>
        “Quanto [ouro] a Minerven está produzindo? Nós também não sabemos, mas eles continuam produzindo”, ele disse. “Não sabemos quanto, porque essa informação nunca é pública, e isso é preocupante.”
      </Paragraph>

      <Paragraph>
        Nenhuma das agências do governo venezuelano respondeu aos pedidos da reportagem para dar declarações sobre o assunto.
      </Paragraph>

      <SubTitle>
        Rotas do contrabando
      </SubTitle>

      <Paragraph>
        O governo considera El Callao uma “zona militar especial” e a
        <StoryMedia
        media={{
          id: "image-6",
          type: "image",
          data: {
            src: require("photos/chapter1/Venezuela02.jpg")
          }
        }}> mantém fortemente protegida</StoryMedia>
        . Todos os dias grupos de militares encapuzados com armas automáticas patrulham as ruas e escoltam “altos funcionários” do governo que saem e entram das fábricas de Minerven a todo momento.
      </Paragraph>

      <Paragraph>
        A despeito da presença militar, a área é o ponto de partida das rotas de contrabando que chegam aos países vizinhos, como Guiana, Colômbia e Brasil. Para evitar o escrutínio, as organizações criminosas usam “mulas” humanas, barcos, carros blindados e pequenos aviões.
      </Paragraph>

      <Paragraph>
        Na cidade vizinha de Guasipati, o ouro é levado em voos privados para Aruba, Curaçao, República Dominica e Porto Rico, disse uma autoridade. Mas existem outras rotas de tráfico, inclusive da cidade industrial de Ciudad Guayana para a República Dominicana e Honduras, tendo os Estados Unidos como destino final.
      </Paragraph>

      <SubTitle>
        Mulas de ouro
      </SubTitle>

      <Paragraph>
        Para contrabandear o ouro ilegal para a vizinha Colômbia, as organizações criminosas usam uma rede de jovens transportadores ou “mulas” para o trabalho.
      </Paragraph>

      <Paragraph>
        Enquanto as mulas de drogas costumam engolir seus produtos para cruzar fronteiras, as mulas de ouro levam os lingotes e gramas do metal escondidos sob as roupas ou dentro das cavidades corporais. O ouro é considerado um ativo estratégico pelo governo venezuelano e os contrabandistas, se forem pegos, podem ser severamente punidos. Eles também são ameaçados pelas gangues criminosas e pelos soldados que operam as minas e controlam as fronteiras.
      </Paragraph>

      <Paragraph>
        Ramón, uma das mulas de ouro, foi recrutado em Caracas no começo deste ano.
      </Paragraph>

      <Paragraph>
        Contando sua história à <ExternalLink href="http://elestimulo.com/climax/category/climax/" language="es">revista Clímax</ExternalLink>{" "}, Ramón, que usou um nome fictício por razões de segurança, disse que viajou de ônibus de Caracas para Upata, no estado de Bolívar. Lá, foi apanhado por um grupo de pessoas que dirigiam dois Toyota 4Runner brancos.
      </Paragraph>

      <Paragraph>
        Eles removeram o chip e a bateria do seu celular, cobriram sua cabeça com uma sacola de pano e colocaram fones de ouvido em suas orelhas.
      </Paragraph>

      <Paragraph>
        Horas depois, quando retiraram o capuz, ele estava em Las Claritas, cidade mineira perto da fronteira com o Brasil. Ele passou quatro dias incomunicável em um acampamento improvisado, vigiado por dois homens encapuzados que portavam armas automáticas.
      </Paragraph>

      <Paragraph>
        No quarto dia, Ramón deixou Las Claritas carregando três quilos de ouro escondidos nas solas de seus sapatos, em sua jaqueta e na costura de suas calças. Mais dois quilos de ouro foram divididos entre outros dois passageiros.
      </Paragraph>

      <Paragraph>
        Eles viajaram de helicóptero de Las Claritas para Ciudad Bolívar, a 486 quilômetros de distância, onde os ônibus da empresa de transporte Encava os levaram para uma cidade costeira que “parecia ser Cumaná”, no norte da Venezuela. Lá, foram recebidos por um soldado de uniforme e colocados em um avião sem ter que mostrar documentos de identificação, e voaram para um aeroporto privado no estado de Táchira, ao longo da fronteira com a Colômbia.
      </Paragraph>

      <Paragraph>
        Um Ford Explorer levou-os para a cidade fronteiriça de San Antonio, onde atravessaram a pé a
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "px6c8nKTiRs"
        }
        }}> ponte internacional Simón Bolívar</StoryMedia>
        , que liga a Venezuela à Colômbia.
      </Paragraph>

      <Paragraph>
        Ramón entrou em pânico. Ele sabia que se fosse pego contrabandeando ouro poderia pegar até 30 anos de prisão, mas seguiu as ordens que recebeu. Instruído a usar certas senhas para se identificar com os soldados, atravessou a ponte sem impedimentos.
      </Paragraph>

      <Paragraph>
        Quando chegou ao setor de imigração, já na Colômbia, foi recebido por uma mulher corpulenta. Ainda seguindo instruções, falou seu primeiro nome e ela mandou que ele “seguisse adiante” sem verificar seus documentos. Foi quando Ramon percebeu que o esquema de contrabando “também existe na Colômbia”.
      </Paragraph>

      <Paragraph>
        Na cidade fronteiriça colombiana de Cúcuta, ele esperava pelos dois companheiros, que entraram no país por trilhas informais, as <i>trochas</i>.
      </Paragraph>

      <Paragraph>
        Eles entraram em contato com o comprador, um homem do Equador, e concordaram em entregar o ouro em um fast-food no centro da cidade. Quando os três entraram no estabelecimento, as portas foram trancadas atrás deles e os funcionários desapareceram.
      </Paragraph>

      <Paragraph>
        O empresário logo puxou uma sacola cheia de notas de cem dólares e uma balança para pesar o ouro. Ele pagou e saiu. Para transportar ouro venezuelano para a Colômbia, Ramón recebeu 1.500 dólares.
      </Paragraph>

      <SubTitle>
        Na fronteira
      </SubTitle>

      <Paragraph>
        No estado de Zulia, no noroeste da Venezuela, uma fila com cerca de 40
        <StoryMedia
        media={{
        id: "video-4",
        type: "youtube",
        data: {
          id: "q9YYbtXbW2g"
        }
        }}> caminhões ​​de carga está no escuro, esperando para cruzar o posto de controle</StoryMedia> do Paraguachón para entrar na Colômbia.
      </Paragraph>

      <Paragraph>
        Por volta das 11 da noite, os caminhões ligam os motores e começam a buzinar. A Guarda Nacional da Venezuela acena para que avancem sem inspecionar a carga, e os caminhões desimpedidamente passam pela migração colombiana.
      </Paragraph>

      <Paragraph>
        Esta fronteira está oficialmente fechada desde 7 de setembro de 2015, quando Maduro a selou para evitar o contrabando de alimentos, combustível e remédios. Mas isso não impediu que se tornasse uma via de passagem para caminhões transportando mercadorias ilícitas, incluindo ouro contrabandeado.
      </Paragraph>

      <Paragraph>
        O Troncal del Caribe, que liga Venezuela e Colômbia, tem pelo menos 14 postos de controle administrados pela Guarda Nacional Venezuelana, pelo Exército e pela polícia regional. Mas ninguém ousa interromper o fluxo de caminhões de carga ou inspecioná-los, segundo autoridades locais.
      </Paragraph>

      <Paragraph>
        Muitos dos caminhões têm passes especiais, <i>salvo-condutos</i>, emitidos pela Zona Operacional de Defesa Integral (ZODI) de Zulia, divisão militar que alega que os caminhões transportam “produtos de exportação”, disse um cabo do Exército da 13ª Brigada de Infantaria que pediu para não ser identificado.
      </Paragraph>

      <Paragraph>
        “Se verificamos esses veículos, podemos ter problemas”, disse ele. “Parece que os donos são pessoas influentes, que podem colocar nossos empregos em risco”.
      </Paragraph>

      <Paragraph>
      <StoryMedia
      media={{
      id: "video-5",
      type: "youtube",
      data: {
        id: "4KmM18jPIL0"
      }
      }}>O funcionário disse que os caminhões geralmente estão carregando coltan, ouro, prata e outros itens que não deveriam ser exportados.</StoryMedia>
      </Paragraph>

      <Paragraph>
        “Sabemos disso porque, quando verificamos alguns carros, encontramos de tudo, de cocaína líquida a ouro e outros produtos ilegais”, disse o soldado de 24 anos.
      </Paragraph>

      <Paragraph>
        Procurados pela reportagem para se manifestar sobre o tema, as Forças Armadas da Venezuela e o Ministério da Defesa não responderam.
      </Paragraph>

      <Paragraph>
        Na cidade colombiana de Maicao, a apenas 13 quilômetros da fronteira, as lojas compram o ouro venezuelano.
      </Paragraph>

      <Paragraph>
        Em uma loja chamada Amiga, um comerciante diz que compra até 150 gramas de ouro venezuelano, “que é trazido do sul do país e vem diretamente das minas porque está em grãos”.
      </Paragraph>

      <Paragraph>
        Ele diz que as pessoas que vendem o metal precioso não são mineiros, mas oficiais militares.
      </Paragraph>

      <Paragraph>
        “Raramente eu lido com comerciantes que estão comprando barato lá e vendendo aqui a outro preço”, disse ele.
      </Paragraph>

      <Paragraph>
        Um guarda nacional da Venezuela em Paraguachón, que insistiu em manter anonimato, descreveu como
        <StoryMedia
        media={{
        id: "video-6",
        type: "youtube",
        data: {
          id: "IaS9JTPETWM"
        }
        }}> parou um veículo oficial do governo</StoryMedia> na cidade de Dabajuro, em dezembro de 2018, por volta das 2h da manhã.
      </Paragraph>

      <Paragraph>
        Era um Toyota Hilux com duas mulheres e um motorista. As passageiras disseram que trabalhavam para o governo e vinham de Caracas, mas pareciam nervosas, então o soldado e seu parceiro conduziram uma busca. Eles descobriram que o carro na verdade estava vindo da área de mineração de Tumeremo, no estado de Bolívar, e lá dentro encontraram uma caixa de papelão com 250 gramas de prata, 300 gramas de ouro e mil dólares em dinheiro.
      </Paragraph>

      <Paragraph>
        Em pânico, os viajantes trocaram sua valiosa carga por liberdade.
      </Paragraph>

      <Paragraph>
        “A prisão e o confisco não tiveram efeito” e foram removidos dos registros, afirmou o soldado, “e nós dividimos o lucro”.
      </Paragraph>
    </Container>
  </article>
);
