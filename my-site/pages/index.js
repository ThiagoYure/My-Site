import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="mainContent">
          <div className="imagemPerfil">
            <Image src="/FotoPerfil.png" height="200" width="200" layout="intrinsic" />
          </div>
          <div className="description">
            <h1>Thiago Yure</h1>
            <h2>Dev. e Artista</h2>
            <p>
              E aí, tudo bem? Sou graduando no <a href="https://www.ifpb.edu.br/">Instituto Federal de Educação Ciência e Tecnologia da Paraíba </a>
              desde 2015 e estou na fase final da minha formação. Já passei pelo batismo no mercado de trabalho
              e agora busco evoluir cada vez mais nesse meio.
            </p>
            <p>Seja muito bem vindo(a) ao meu site!</p>
          </div>
        </div>
        <div className="Personality">
          <div className="description">
            <p>
              Minha personalidade é pautada em muitos filmes, jogos, séries, animes, músicas( muita música ), arte, amizade
              e bom humor. Tudo isso junto só poderia resultar em coisa boa. Você pode conferir um pouco de tudo isso na parte de Blog
              do site, então fique à vontade para dar uma passada por lá. Eu também vou manter a seção projetos sempre atualizada
              para vocês verem no que eu tenho trabalhado.
              contribuir de forma significativa para o mundo
              utilizando minhas competências e habilidades como Dev, Artista e tudo mais que estiver ao meu alcance.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
