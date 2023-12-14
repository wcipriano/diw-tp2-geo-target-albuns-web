## TP2 - Trabalho Prático 2 - Portal de álbuns de fotos geolocalizadas com JSONServer e API de mapas

Graduação PUC Minas
Disciplina: Desenvolvimento de Interfaces Web
Período: 1º

Trabalho final que os professores de graduação da PUC-MG promoveram para os alunos dos cursos de Sistemas de Informção, Análise e Desenvolvimento de Sistemas, entre outros cursos de computação.

Este Trabalho Prático 2 (TP2) é a continuação do TP1. No trabalho 1 os alunos fizeram a parte estática (HTML/CSS) e no TP2 a continuação, com a parte dinâmica (JS + API Client).

Este repositório contém uma proposta de solução minha que atende a todos os critérios estabelecidos na proposta do TP2.

Eu usei este projeto para mostrar nas aulas uma proposta de solução e debater estratégias de implementação com os aluanos.
E tinha prometido para os alunos abrir este repositório como público, depois das entregas.

## Hospegagem

> [!NOTE]
> Esta api está hospedada no [render](https://render.com/) em uma <b>instancia gratuita</b>.

> [!IMPORTANT]
> Instâncias gratuitas entram em estado de hibernação quando ficam inativas, SEM receber requisições por mais de 15min.
> SE OPTAR por utilizar a versão hospedada tenha **consciência deste fato** !

> [!WARNING]
> Com isso, uma primeira requisição pode **demorar até 5min** para que a instancia volte para o estado ativo novamente.
> Mas depois, para as próximas requisições passa a responder normalmente.

$\color{gray}{Segue\ o\ endereço\ para\ acesso:}$
[https://portal-de-albuns-de-fotos-geolocalizadas.onrender.com](https://portal-de-albuns-de-fotos-geolocalizadas.onrender.com)

## API

RESTFull API

Este trabalho utiliza uma API JSON server que está disponível em
[https://api-albuns.wagnercipriano.repl.co](https://api-albuns.wagnercipriano.repl.co)

Depende desta api estar funcionando para testar o client.

- Allowed Methods: GET, POST, PUT, DELETE
- Padrão de endpoints de parâmetros para filtros, ordenação, etc: [json-server](https://github.com/typicode/json-server#json-server-)

### Endpoints API

- https://api-albuns.wagnercipriano.repl.co/albums
- https://api-albuns.wagnercipriano.repl.co/highlights
- https://api-albuns.wagnercipriano.repl.co/photos

## Ferramentas e Arquitetura:

APIs:

- JSON-Server
- Mapbox

Client

- Html, CSS, JS
- Bootstrap

## How to configure Local Deploy

1. Clone project:
   `git clone https://github.com/wcipriano/diw-tp2-geo-target-albuns-web.git`
1. Open project folder:
   `cd diw-tp2-geo-target-albuns-web/`
1. Open in VS code
1. Run "index.html" with LiveServer

## REFS:

- [Trabalho prático 1 (TP1) DIW - Enunciado](./doc/DIW_TP1_Enunciado_2023_2_PortalAlbunsGeolocalizadas_JSONServer_APIDeMapas.pdf) contendo toda especificação do trabalho assim como WIREFRAME e critérios de avaliação.

- [Trabalho prático 2 (TP1) DIW - Enunciado](./doc/DIW_TP2_Enunciado_2023_2_PortalAlbunsGeolocalizadas_JSONServer_APIDeMapas.pdf) contendo toda especificação do trabalho assim como detalhes da API e critérios de avaliação.
