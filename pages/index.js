import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import ItemCard from "../components/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faBehanceSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faDatabase, faDragon, faEnvelope, faGlobe, faGrinTears, faMobile, faMobileAlt, faPaintBrush, faPencilRuler, faSignature, faUserAstronaut, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-regular-svg-icons";
import { faAngular, faCss3, faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const [targets, setTargets] = useState(null);
  const [reload, setReload] = useState(false);
  const animationClass = "animate";

  const ready = () => {
    if (!targets) {
      if (typeof window !== "undefined") {
        setTargets(window.document.querySelectorAll("[data-animation]"));
        return (window.document.querySelectorAll("[data-animation]"));
      }
    } else {
      return targets;
    }
  }

  useEffect(() => {
    const scrollListener = () => {
      const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
      let animatedNodes;
      if (!targets) {
        animatedNodes = ready();
      } else {
        animatedNodes = targets;
      }
      if (animatedNodes) {
        animatedNodes.forEach((e) => {
          if ((windowTop) > e.offsetTop) {
            e.classList.add(animationClass);
          } /*else {
            e.classList.remove(animationClass);
          }*/
        })
      }
    }
    window.addEventListener('scroll', () => {
      scrollListener();
    })
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  });

  return (
    <>
      <div>
        <div className="mainContent">
          <div className="imagemPerfil">
            <Image src="/FotoPerfil.png" alt="Imagem de Perfil" width="100" height="100" layout="responsive"/>
          </div>
          <div className="descriptionMain">
            <h1>Thiago Yure</h1>
            <h2>Dev. e Artista</h2>
            <p>
              E aí, tudo bem? Sou graduando no <a href="https://www.ifpb.edu.br/">Instituto Federal de Educação Ciência e Tecnologia da Paraíba </a>
              desde 2015 e estou na fase final da minha formação. Já passei pelo batismo no mercado de trabalho
              e agora busco evoluir cada vez mais nesse meio e na minha vida pessoal.
            </p>
            <p>Seja muito bem vindo(a) ao meu site!</p>
          </div>
        </div>
        <div className="skills">
          <div className="descriptionSkills" data-animation="fade-in">
            <h1>Superpoderes</h1>
            <h2>&#34; Com grandes poderes vêm grandes <span className="destaque">responsabilidades</span>. &#34;</h2>
          </div>
          <div className="skillsList" data-animation="fade-in">
            <ItemCard infos={{ skill: "Criatividade Super-Humana", icon: faDragon, color: "#353b73", value: "+8" }} />
            <ItemCard infos={{ skill: "Dedicação Cósmica", icon: faUserAstronaut, color: "#353b73", value: "+6" }} />
            <ItemCard infos={{ skill: "Trabalho em Equipe Magnético", icon: faUserFriends, color: "#353b73", value: "+9" }} />
            <ItemCard infos={{ skill: "Bom Humor Astral", icon: faGrinTears, color: "#353b73", value: "+8" }} />
            <ItemCard infos={{ skill: "Aprendizado Super-Sônico", icon: faBrain, color: "#353b73", value: "+7" }} />
          </div>
        </div>
        <div className="divider"></div>
        <div className="abilities">
          <div className="descriptionAbilities" data-animation="fade-in">
            <h1>Conhecimentos Arcanos</h1>
          </div>
          <div className="abilitiesList" data-animation="fade-in">
            <ItemCard infos={{ skill: "ReactJS", icon: faReact, color: "#1e142e", value: "+9" }} />
            <ItemCard infos={{ skill: "ReactNative", icon: faMobileAlt, color: "#1e142e", value: "+5" }} />
            <ItemCard infos={{ skill: "SQL", icon: faDatabase, color: "#1e142e", value: "+8" }} />
            <ItemCard infos={{ skill: "Javascript", icon: faJs, color: "#1e142e", value: "+9" }} />
            <ItemCard infos={{ skill: "HTML", icon: faHtml5, color: "#1e142e", value: "+7" }} />
            <ItemCard infos={{ skill: "CSS/SASS", icon: faCss3Alt, color: "#1e142e", value: "+8" }} />
            <ItemCard infos={{ skill: "NodeJS", icon: faNodeJs, color: "#1e142e", value: "+6" }} />
            <ItemCard infos={{ skill: "NextJS", icon: faReact, color: "#1e142e", value: "+6" }} />
            <ItemCard infos={{ skill: "Design Gráfico", icon: faPencilRuler, color: "#1e142e", value: "+7" }} />
            <ItemCard infos={{ skill: "Ilustração Digital", icon: faPaintBrush, color: "#1e142e", value: "+7" }} />
            <ItemCard infos={{ skill: "Escrita Criativa", icon: faSignature, color: "#1e142e", value: "+8" }} />
            <ItemCard infos={{ skill: "API", icon: faGlobe, color: "#1e142e", value: "+6" }} />
            <ItemCard infos={{ skill: "Angular", icon: faAngular, color: "#1e142e", value: "+5" }} />
          </div>
        </div>
        <div className="complementation">
          <div className="descriptionPersonalProjects" data-animation="fade-in">
            <div>
              <h1>A Evolução</h1>
              <h2>&#34;Posso falhar, mas não vou desistir&#34;</h2>
              <h2>Ryze(League of Legends)</h2>
              <p>
                Estou buscando me firmar no mercado de trabalho e continuar evoluindo.
                Para isso estou tentando desenvolver cada vez mais ideias e preencher o mundo
                com o meu melhor. Você pode acompanhar essa evolução de perto na seção de Projetos do site.
              </p>
              <Link href="/Projects">
                <a>Projetos</a>
              </Link>
            </div>
          </div>
          <div className="descriptionPersonalBlog" data-animation="fade-in">
            <div>
              <h1>Eu, eu mesmo e Thiago</h1>
              <h2>&#34;A felicidade não está na estrada que leva a algum lugar. A felicidade é a própria estrada.&#34;</h2>
              <h2>Bob Dylan</h2>
              <p>
                Como eu me defino? Como alguém que ama filmes, séries, jogos, música(muita música), rpg,
                amigos, família, humor e tudo que há de bom. Um espírito criativo e eufórico que está sempre
                maquinando uma nova forma de colocar a caxola para funcionar e impactar. É só dar uma passada na
                seção de blog do site para entender melhor do que eu tô falando.
              </p>
              <Link href="/Blog">
                <a>Blog</a>
              </Link>
            </div>
          </div>
          <div className="contato" data-animation="fade-in">
            <h1>Entre em contato</h1>
            <div className="socialMediaLinks">
              <Link href="https://github.com/ThiagoYure">
                <a target="_blank">
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/thiagoyure/">
                <a target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </Link>
              <Link href="https://www.instagram.com/siegfrieddragon/">
                <a target="_blank">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </Link>
              <Link href="https://www.behance.net/siegfrieddragon">
                <a target="_blank">
                  <FontAwesomeIcon icon={faBehanceSquare} />
                </a>
              </Link>
              <Link href="mailto:thigoyure@gmail.com?subject=contato-pelo-site">
                <a target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
