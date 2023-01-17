import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Template from "../components/templates";
import { Anime } from "../types/anime";
import styles from './../styles/Home.module.css';
import Axios from 'axios';
import React from 'react';

export interface PropsHome {
    animes:Anime[];
}

export async function getStaticProps() {
    const response = await Axios.get('http://localhost:3001/animes');

    return {
        //no props podemos passar dados que são recuperados do backe-end
        props: { animes: response.data },
        revalidate: 360 //Recria a página após 360 segundos
    }
  }
  
export default function Home({animes}: PropsHome) {

    const router = useRouter();
    
    const [ anime, setAnime ] = useState<null|Anime>(null);
    const [ email, setEmail ] = useState("");
    const [ erro, setErro ] = useState("");

    const votar = () => {
        if (email.trim() == '') 
            setErro('Informe um email!')
        else
            Axios.post('http://localhost:3001/votacao', {animeID: anime?.id, email})
                .then(() => router.push('/resultado')) //Sucesso
                .catch((erro) => {
                    alert('Não foi possível')
                    console.log(erro)
                })
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
