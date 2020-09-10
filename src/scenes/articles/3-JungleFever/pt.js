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
      <title>Febre da Selva | Venezuela, o paraíso dos contrabandi$tas</title>
    </Helmet>
    <Container>
      <Title as="h2">Febre do ouro na Amazônia aterroriza terras indígenas</Title>
      <Author>
        <FormattedMessage
          id="general.authorChapter3"
          defaultMessage="-"
        />
      </Author>
      <Note>
        <p>
          Comunidades indígenas estão expostas a violência e práticas de contaminação mineral nas zonas fronteiriças do sul da Colômbia e da Venezuela. Na Amazônia, os rios são as rodovias da floresta e oferecem aos traficantes uma excelente oportunidade para transportar suas mercadorias.
        </p>
      </Note>

      <Paragraph>
        Um comerciante está no convés de um pequeno barco repleto de alimentos e produtos enlatados – um supermercado flutuante – enquanto
        <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "w7STTabEpLM"
        }
        }}> música <i>ranchera</i> explode nas caixas de som</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Seus olhos embriagados observam o enorme porém lento rio Orinoco, que separa seu negócio no vilarejo de Amanavén, na Colômbia, da vizinha Venezuela, visível do outro lado da água.
      </Paragraph>

      <Paragraph>
        Ele sabe alguma coisa sobre o comércio local de ouro?
      </Paragraph>

      <Paragraph>
        “Sim, é por aqui que o ouro entra”, diz enquanto cuidadosamente abre sua terceira cerveja.
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
      >A comida e os suprimentos que ele e alguns outros barcos vendem</StoryMedia> são principalmente para as pessoas estocarem antes de seguirem a curva do rio para a Venezuela.
      </Paragraph>

      <Paragraph>
        Seu destino? As minas de ouro de Yapacana na Amazônia venezuelana, espalhadas por um complexo montanhoso e um parque nacional de mesmo nome.
      </Paragraph>

      <Paragraph>
        Lá, em meio à umidade da floresta, há de 5 mil a 10 mil mineiros buscando ouro. Mas eles não estão sozinhos. Dois grupos guerrilheiros da Colômbia e agentes corruptos da Guarda Nacional da Venezuela também estão no controle e coletam grandes quantidades do metal precioso.
      </Paragraph>

      <Paragraph>
        Em um barco vizinho, o dono quer exibir um pouco do ouro retirado das minas. Ele desaparece atrás de uma cortina e retorna com
        <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida05.jpg")
          }
        }}> 118 gramas de metal</StoryMedia>
        , que valem 6 mil dólares.
      </Paragraph>

      <Paragraph>
        “Isso é para os militares do outro lado”, diz ele, referindo-se à Guarda Nacional da Venezuela. É para pagar o que chama de “imposto” – um pagamento de extorsão.
      </Paragraph>

      <Paragraph>
        Com a cumplicidade do aparato judiciário venezuelano, o parque Yapacana, protegido ambientalmente, está sendo destruído pela mineração ilegal de ouro. Além disso, dragas aram os rios ao redor do parque e o mercúrio tóxico – usado para dar liga aos flocos de ouro – está envenenando as reservas de água.
      </Paragraph>

      <Paragraph>
        Um estudo de 2017 descobriu que as comunidades que vivem nos rios Atabapo, Guainía e Inírida, na Colômbia, perto da mina venezuelana, tinham cerca de <ExternalLink href="https://www.eltiempo.com/vida/medio-ambiente/poblacion-de-guania-tiene-niveles-de-mercurio-mas-altos-que-el-promedio-129712" language="es">60 vezes o nível máximo seguro de mercúrio</ExternalLink>{" "} recomendado pela Organização Mundial de Saúde. Esses três rios fornecem grande parte da água utilizada pelas populações do sul da Colômbia, Venezuela e norte do Brasil.
      </Paragraph>

      <Paragraph>
        Cerca de 45 minutos de barco a sudeste de Amanavén fica Puerto Inírida, a capital do departamento Guainía da Colômbia.
        <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "9AiAmruntJ8"
        }
        }}> A área ao redor é chamada Estrella Fluvial do Oriente, onde nascem vários rios</StoryMedia>. Centenas de afluentes alimentam os nove principais rios da região que serpenteiam através da densa floresta tropical do departamento, funcionando como estradas da selva e oferecendo passagem segura para traficantes de todos os tipos.
      </Paragraph>

      <Paragraph>
        Além dos 20 mil habitantes da cidade, cerca de 5 mil venezuelanos vivem no local, disseram autoridades locais. Os migrantes e refugiados estão presos na cidade da selva – que é um gargalo, já que não há conexões rodoviárias. Nos arredores da cidade, muitas pessoas vivem em barracos feitos de folhas de plástico, varas de bambu e pedaços de estanho.
      </Paragraph>

      <Paragraph>
        As poucas estradas pavimentadas de Inírida estão cheias de buracos e dominadas por uma quantidade injustificável de
        <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "6kYhEF6n3nE"
        }
        }}> triciclos usados como moto-táxis</StoryMedia>
        e chamados de <i>ratones</i>, que zumbem por aí e buzinam agressivamente enquanto caçam passageiros. Em meio à cena caótica e barulhenta, os mineiros, parecendo atordoados depois de semanas ou meses de labuta nas selvas da Venezuela, correm para a cidade.
      </Paragraph>

      <SubTitle>
        A economia subterrânea de Inírida
      </SubTitle>

      <Paragraph>
        Um indígena colombiano de 50 anos, vestindo um boné de beisebol, tropeça em uma das muitas <i>compraventas</i> que compram e vendem ouro.
      </Paragraph>

      <Paragraph>
        Após oito dias de trabalho árduo, ele tem
        <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida06.jpg")
          }
        }}> 64 gramas do metal</StoryMedia>
        . Mas começou com muito mais.
      </Paragraph>

      <Paragraph>
        O homem percorre uma lista de grupos armados e oficiais militares corruptos a quem teve que pagar nos postos de controle fluviais entre as minas da Venezuela e Puerto Inírida:
      </Paragraph>

      <Paragraph>
        <li>Cinco gramas, vale 230 dólares americanos no mercado internacional, para os <i>wachiman</i> – vigilantes que espiam os mineiros e os reportam para a Guarda Nacional ou guerrilhas;</li>
        <li>Cinco gramas para uma comunidade indígena perto das minas;</li>
        <li>Cinco gramas para as “guerrilhas”;</li>
        <li>Três gramas para a Guarda Nacional em um posto de controle perto de Santa Barbara;</li>
        <li>Um grama para a Marinha da Venezuela;</li>
        <li>Meio grama para o município de Atabapo.</li>
      </Paragraph>

      <Paragraph>
        Além daqueles 19,5 gramas pagos em “impostos”, ele também precisava pagar por comida e transporte.
      </Paragraph>

      <Paragraph>
        Mas os pedágios podem ser melhores do que a alternativa. Uma das poucas maneiras de evitá-los requer uma caminhada de quatro dias pela selva venezuelana e um percurso de barco de três dias.
      </Paragraph>

      <Paragraph>
        O ouro venezuelano escorre por toda a fronteira sul. Paujil, ao lado de Puerto Inírida, é uma área frequentemente mencionada como ponto de entrada para mercadorias contrabandeadas, mas Puerto Inírida conta com
        <StoryMedia
        media={{
        id: "video-4",
        type: "youtube",
        data: {
          id: "HR2oc-VaUPo"
        }
        }}> muitos portos informais</StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Ruelas desaparecem subitamente em um dos rios e se tornam pontos de atracação, onde estreitos barcos de madeira podem deslizar com sua carga, o que torna o comércio muito difícil de controlar. Mas locais afirmaram que a polícia persegue os mineiros. O dono de uma loja de penhores disse que a polícia está sempre “confiscando” ouro, mas na verdade está roubando. “Isso é uma injustiça”, disse ele.
      </Paragraph>

      <Paragraph>
        Mineiros vendem seu ouro em <i>compraventas</i> – que geralmente são lojas não marcadas com janelas coloridas –, que podem ser encontradas por toda a cidade. Em uma loja anônima com paredes brancas e cadeiras de plástico, uma mulher amamentava seu bebê enquanto outras pessoas esperavam que seu ouro fosse pesado.
      </Paragraph>

      <Paragraph>
        O proprietário da <i>compraventa</i>, Bryan, que pediu para permanecer anônimo, senta-se em um quarto dos fundos, onde organiza sua papelada. Ele explicou que compra legalmente ouro de colombianos <i>barequeros</i> – mineiros artesanais que empregam métodos rudimentares e estão autorizados a vender até 420 gramas por ano. Ele tem cerca de 200 <i>barequeros</i> registrados em seus livros e espera inscrever outros 300.
      </Paragraph>

      <Paragraph>
        Registrando centenas e até milhares de pequenos garimpeiros, vendedores de ouro como Bryan podem justificar grandes quantidades de vendas de ouro. Mas o sistema está repleto de fraudes.
      </Paragraph>

      <Paragraph>
        As identidades usadas para justificar uma mineração muitas vezes pertencem a pessoas falecidas, ou garçons e atendentes de garagem que emprestam seus documentos em troca de dinheiro, informou um membro da inteligência colombiana.
      </Paragraph>

      <Paragraph>
        Em outros casos, o ouro venezuelano é registrado sob um título de mineração colombiano, pelo menos no papel. Na realidade, a suposta mina é um “campo cheio de vacas”, ri outro funcionário da inteligência colombiana sobre a existência de minas fantasmas.
      </Paragraph>

      <Paragraph>
        Mesmo que o ouro venha da Venezuela, se no papel estiver que o metal vem de uma mina da Colômbia, os royalties são pagos ao Estado.
      </Paragraph>

      <Paragraph>
        Bryan não pode garantir que nenhum ouro venezuelano entre em sua loja, mas ele diz que a maior parte de seu metal vem das minas colombianas. Ele costuma levar o ouro para Bogotá para vendê-lo a grandes comerciantes.
      </Paragraph>

      <Paragraph>
        Ninguém no
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
      > aeroporto local lhe causa problemas ou verifica seu ouro</StoryMedia>
      , ele disse. Bryan carrega o metal em uma mochila e troca sua camisa no avião. Ele teme que alguém em Bogotá tenha sido avisado sobre o que estava vestindo e tente roubar sua carga.
      </Paragraph>

      <Paragraph>
        Outro homem envolvido no circuito de ouro, Juan Pablo, que também não quis dar o seu nome verdadeiro, ri quando perguntado se Bryan vende ouro colombiano.
      </Paragraph>

      <Paragraph>
        “Isso é uma grande mentira”, diz ele, rindo. E um representante da alfândega em Puerto Inírida concorda que a maior parte do ouro que passa pela cidade vem da Venezuela.
      </Paragraph>

      <Paragraph>
        “O submundo do ouro sustenta a economia”, disse ele.
      </Paragraph>

      <Paragraph>
        Enquanto alguns proprietários de
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida07.jpg")
          }
        }}> casas de penhores</StoryMedia> “legalizam” seu ouro, fornecendo documentos que mostram que o metal veio de operações colombianas, nem todos enfrentam o problema, disse Juan Pablo.
      </Paragraph>

      <Paragraph>
        “Eles tiram o ouro, mas ilegalmente”, disse ele, explicando que os traficantes homens escondem o ouro perto de seus testículos, enquanto as mulheres o colocam entre os seios ou nas roupas íntimas.
      </Paragraph>

      <Paragraph>
        As margens de lucro estão entre um ou dois dólares americanos a cada grama. Se um traficante for enviado com ouro para Bogotá, explica um proprietário de uma loja de penhores, leva quantidades acima de um quilo para fazer a viagem valer a pena. Um mensageiro ou contrabandista pode ganhar cerca de 188 dólares americanos por carregar um quilo de ouro para a capital.
      </Paragraph>

      <Paragraph>
        Para as autoridades, é complicado traçar as origens do ouro. Os exportadores muitas vezes compram o metal de dezenas de empresas de fachada que são difíceis, se não impossíveis, de rastrear.
      </Paragraph>

      <Paragraph>
       “Depois que o ouro é transformado em barra, depois que é extraído, fica muito difícil saber de onde ele veio”, diz um representante da agência alfandegária da Colômbia.
      </Paragraph>

      <SubTitle>
        Indígenas abandonados
      </SubTitle>

      <Paragraph>
        A selva da Colômbia que faz fronteira com a Venezuela é uma das regiões mais pobres e negligenciadas do país, o que historicamente obrigou as comunidades da região a depender de atividades ilícitas para sobreviver. A falta de oportunidades levou os habitantes a alternarem suas atividades entre a caça furtiva de animais silvestres por sua pele e dentes, mineração ilegal e cultivo de coca para produzir cocaína.
      </Paragraph>

      <Paragraph>
        Por causa do alto desemprego em Guainía, os habitantes, em grande parte indígenas, procuram trabalho nas minas venezuelanas. Um líder indígena disse que a situação na Venezuela é ainda pior. Em uma comunidade, Caño Grulla, apenas 30 das cerca de 500 famílias permaneceram no local. Todos os outros foram para as minas.
      </Paragraph>

      <Paragraph>
        Enquanto os jovens deixam suas famílias para procurar ouro, as taxas de deserção escolar na região estão disparando, de acordo com Luis Enrique Amado Prieto, diretor da Seção de Assistência Social e Pastoral no sudeste da Colômbia.
      </Paragraph>

      <Paragraph>
        O fascínio pelo ouro também está dilacerando a vida comunitária tradicional. A violência doméstica causada pelo abuso de álcool está aumentando, assim como a malária, que é excessiva nas minas e se tornou uma epidemia nessas comunidades.
      </Paragraph>

      <Paragraph>
        À medida que a fronteira da mineração se expande, a sobrevivência da cultura indígena está ameaçada, diz
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Bram Ebus",
            src: require("photos/chapter3/Inirida11.jpg")
          }
        }}> Plinio Yavinape, um indígena</StoryMedia> que mora perto de Puerto Inírida.
      </Paragraph>

      <Paragraph>
        “Pode ser fatal para uma comunidade”, disse ele sobre a corrida do ouro. “Por um pouco de dinheiro, as pessoas matando umas às outras.”
      </Paragraph>

      <Paragraph>
        <FileLink
        href={require("documents/chapter3/SOS_Orinoco-Gold_Mining_Activity_in_Yapacana_National_Park_Spanish.pdf")}
        format="pdf"
        size="11.8MB">Os professores são pagos em ouro</FileLink> nas escolas montadas entre as minas de Yapacana. Segundo Juan Alberto Sánchez, coordenador de segurança e convivência cidadã em Puerto Inírida, cerca de 3 mil colombianos trabalham atualmente nas minas de Yapacana, além de milhares de mineiros venezuelanos.
      </Paragraph>

      <SubTitle>
        Rebeldes colombianos na Amazônia
      </SubTitle>

      <Paragraph>
        Sentado em seu gabinete, um dos altos funcionários do exército do departamento de Guainía tem uma placa de identificação em sua mesa e duas grandes bandeiras atrás dele. Ele está ouvindo uma música de Beethoven no YouTube.
      </Paragraph>

      <Paragraph>
        “Estamos trabalhando contra os bandidos e terroristas”, diz ele, referindo-se aos guerrilheiros colombianos que operam na área.
      </Paragraph>

      <Paragraph>
        Ele diz que suas ordens são para atingir um grupo chamado Acacio Medina, que está ativo nas minas da Venezuela e da Colômbia e é formado por ex-membros das agora extintas Forças Armadas Revolucionárias da Colômbia (FARC).
      </Paragraph>

      <Paragraph>
        Até agora não houve confrontos. “Eles não se deixam provocar”, diz ele.
      </Paragraph>

      <Paragraph>
        As FARC eram o maior e mais antigo grupo guerrilheiro do hemisfério até assinarem um acordo de paz em 2016 e se desmobilizarem em 2017. Mas nem todos os combatentes depuseram suas armas e foram formados grupos “dissidentes”, como Acacio Medina, que é dirigido por um guerrilheiro chamado “Jhon 40”. O grupo opera projetos de mineração ilegal no estado do Amazonas, na Venezuela.
      </Paragraph>

      <Paragraph>
        Já o Exército de Libertação Nacional (ELN), da Colômbia, atualmente possui dois campos perto de San Fernando de Atabapo e de Puerto Ayacucho. O ELN é supostamente muito mais dominante no Amazonas do que os dissidentes das FARC na frente Acacio Medina, detendo acampamentos no lado venezuelano das cidades de Puerto Colombia e San Felipe.
      </Paragraph>

      <Paragraph>
        De acordo com documentos de inteligência colombianos, o Acacio Medina agora ganha 70% de sua receita por meio da mineração ilegal na Venezuela.
      </Paragraph>

      <Paragraph>
        Os dissidentes das FARC e do ELN – agora o maior grupo guerrilheiro do continente – têm uma tênue aliança para trabalhar nos campos de ouro da Venezuela.
      </Paragraph>

      <Paragraph>
        O comandante disse que sabe das atividades do ELN além da fronteira porque capturou um guerrilheiro indígena venezuelano em 2018. O homem disse que havia matado três outros rebeldes e atravessado o rio Atabapo a nado para fugir à Colômbia. Ele reclamou do trabalho forçado e da falta de comida durante seu serviço ao ELN.
      </Paragraph>

      <Paragraph>
        A Venezuela tolera a presença de guerrilheiros colombianos desde que o falecido presidente Hugo Chávez chegou ao poder, em 1999. Enquanto os grupos são considerados organizações terroristas pelos Estados Unidos e pela Colômbia, Chávez os chamou de <ExternalLink href="https://www.lanacion.com.ar/el-mundo/chavez-las-farc-no-son-terroristas-nid978386" language="es">“exércitos genuínos” e “forças insurgentes com objetivo político”</ExternalLink>{" "}.
      </Paragraph>

      <Paragraph>
        Grandes áreas de floresta no sudeste da Amazônia colombiana têm funcionado como corredor de tráfico de drogas, armas, tropas e mercadorias nas últimas décadas.
      </Paragraph>

      <Paragraph>
        Quando as FARC participam da mineração, cobram cerca de 30% da produção, segundo um antigo membro da guerrilha. E ele enfatiza que a Guarda Nacional da Venezuela já estava mais do que envolvida em 2007, e cobrava comissões em ouro em Yapacana.
      </Paragraph>

      <Paragraph>
        “Eles estavam minerando tanto ouro”, recorda.
      </Paragraph>

      <Paragraph>
        Segundo Eduardo, um indígena de 24 anos que pediu para permanecer anônimo, as FARC e o ELN estão presentes nas minas, usam roupas militares e estão bem armados. Eles também são a lei da região. Ladrões costumam ser executados, mas até levar um telefone para a área de mineração, que é proibido, pode levar à sentença de morte.
      </Paragraph>

      <Paragraph>
        Mesmo assim, mineiros disseram que guerrilheiros são melhores chefes do que a Guarda Nacional porque tinham um conjunto claro de regras, proibiam abuso de álcool e substâncias e de vez em quando defendiam a comunidade. Os militares venezuelanos eram mais abusivos e exigiam mais ouro.
      </Paragraph>

      <Paragraph>
        Mas eles também trabalham lado a lado com a Guarda Nacional da Venezuela, que
        <StoryMedia
        media={{
        id: "video-5",
        type: "youtube",
        data: {
          id: "0K1a_Qgm1ME"
        }
        }}> cobra “impostos” sobre tudo, desde a entrada nas minas, o uso dos rios, equipamentos móveis e até o direito de vender <i>empanadas</i></StoryMedia>
        .
      </Paragraph>

      <Paragraph>
        Segundo um ex-oficial de inteligência venezuelano, o ouro coletado pela Guarda Nacional é enviado por avião para Caracas, depois que uma parte já foi dividida entre as múltiplas filiais militares do Amazonas, incluindo o Serviço Bolivariano de Inteligência Nacional (SEBIN), o chefe da contrainteligência militar (DGCIM), o general encarregado da Guarda Nacional e o comandante das zonas de defesa regional (ZODI).
      </Paragraph>

      <Paragraph>
        Franklin, que tem 26 anos de idade e é segundo sargento da Guarda Nacional Bolivariana da Venezuela, trabalhou nas áreas de mineração de ouro nos arredores de Puerto Ayacucho por três anos e meio.
      </Paragraph>

      <Paragraph>
        Franklin, que concordou em falar sob condição de anonimato, disse que ele e outras tropas observaram seus comandantes fecharem acordos com o ELN para pressionar os mineradores locais. “Eles apareceriam em barcos, 200, 300 homens armados até os dentes, e seus líderes se reuniam com nossos comandantes. Eu nunca tinha visto nada parecido. Eles [o ELN] são aqueles que estão realmente no controle das áreas de mineração”, disse.
      </Paragraph>

      <Paragraph>
        As duas “autoridades” das minas de Yapacana – guerrilha e Guarda Nacional – são um elo frágil. Tanto venezuelanos quanto colombianos enchem as fileiras das guerrilhas colombianas que desarmam os militares no estado do Amazonas.
      </Paragraph>

      <Paragraph>
        “A Venezuela tem um exército que não está preparado para absolutamente nada”, disse o ex-oficial da inteligência venezuelana. “Por outro lado, o ELN é treinado, preparado para o combate e não tem medo de nada.”
      </Paragraph>

      <Paragraph>
        No entanto, tem havido conflitos. Em 2017, guerrilheiros quase derrubaram um helicóptero militar venezuelano perto da mina de Cacique, na área de Yapacana, com um fuzil AR-15. O helicóptero não deveria estar lá, explicou um adolescente venezuelano. “Agora, as guerrilhas estão no comando.”
      </Paragraph>

      <Paragraph>
        Em novembro de 2018, um <ExternalLink href="https://lta.reuters.com/articulo/domesticNews/idLTAKCN1NA0BJ-OUSLD" language="es">confronto entre os guerrilheiros e a Guarda Nacional</ExternalLink>{" "} deixou pelo menos três soldados mortos e uma dúzia de feridos e mostrou a volatilidade da situação.
      </Paragraph>

      <Paragraph>
        Mas os guerrilheiros estão na região para ficar, disse o ex-funcionário da inteligência.
      </Paragraph>

      <Paragraph>
        “Para os guerrilheiros, neste momento, o ouro [...] é mais lucrativo que as drogas”, disse ele. “É por isso que estão presentes em todas as minas da Venezuela.”
      </Paragraph>
    </Container>
  </article>
);
