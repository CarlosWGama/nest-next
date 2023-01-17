import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Template from "../components/templates";
import { Anime } from "../types/anime";
import styles from './../styles/Home.module.css';

export default function Home() {

    const router = useRouter();
    
    const [ anime, setAnime ] = useState<null|Anime>(null);
    const [ email, setEmail ] = useState("");
    const [ erro, setErro ] = useState("");
    const [ animes, setAnimes ] = useState<Anime[]>([
        { id: 1, titulo: 'Ranking of Kings', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b0e25e68ede7bd9f8d6a8f49812e88bc.jpe'},
        { id: 2, titulo: 'Bleach', url: 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/08/Bleach-Thousand-Year-Blood-War-anime-visual-2-1.jpg?resize=1280%2C1809&ssl=1'},
        { id: 3, titulo: 'JoJo`s Bizarre Adventure', url: 'https://jovemnerd.com.br/wp-content/uploads/2022/03/jogos-bizarre-adventure-stone-ocean.jpg'},
        { id: 4, titulo: 'Spy x Family', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe'},
        { id: 5, titulo: 'Chainsaw Man', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe'},
        { id: 6, titulo: 'Kimetsu no Yaiba', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpe'}
    ])

    const votar = () => {
        router.push('/resultado')
    }

  return (
    <Template>
        <h1>Bem vindo a votação de melhores animes de 2023</h1>
        <p>para votar apenas é preciso selecionar seu anime e informar seu email!</p>

        <div id={styles.animes}>

            {/* <!-- ANIME 1 --> */}
            {animes.map(anime => (
                <div key={anime.id} className={styles.anime}>
                    <img src={anime.url} />
                    <h1>{anime.titulo}</h1>
                    <button onClick={() => setAnime(anime)}>Votar</button>
                </div>
            ))}
        </div>

        {/* <!-- MODAL PARA CONFIRMAR VOTO --> */}
        { anime && <div id={styles.votar}>
            <div id={styles.voto_container}>
                <h1>Você votou em: <br/><b>{anime.titulo}</b></h1>
                <p>Informe o seu email para confirmar seu voto: </p>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                {erro && <p id={styles.voto_erro}>{erro}</p>}
                <div id={styles.voto_opc}>
                    <button id="btn_votar" onClick={votar}>Votar</button>
                    <button id="btn_cancelar" onClick={() => setAnime(null)}>Cancelar</button>
                </div>
            </div>
        </div>}
    </Template>
  )
}
