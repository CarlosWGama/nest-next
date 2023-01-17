import Template from "../components/templates"
import styles from './../styles/Resultado.module.css';
import Axios from 'axios';
import { Voto } from "../types/voto";

//Apenas atualiza o cache da página se alguém votou de novo
export async function getServerSideProps() {
    console.log('TESTE1 - Usuário NÃO tem acesso ao código')
    const ultimosVotados = await Axios.get('http://localhost:3001/votacao');
    const rank = await Axios.get('http://localhost:3001/animes/rank');

    return {
        props: { animes: rank.data, votos: ultimosVotados.data },
    }
}

type PropsResultado = {
    animes: {id: number, titulo: string, url: string, votos: number}[],
    votos: Voto[]
}

export default function Resultado({animes, votos}: PropsResultado) {
    console.log('TESTE2 - Usuário TEM acesso ao código')
    return (
        <Template>
            <h1>Obrigado pelo seu voto!</h1>

                {/* <!-- ANIMES MAIS VOTADOS --> */}
                <h2>Animes mais votados</h2>
                <div id={styles.animes}>
                    {/* <!-- ANIME 1 --> */}
                    { animes.length > 0 && 
                    <div className={styles.anime}>
                        <img src={animes[0].url} />
                        <h1 className={styles.gold}>1º</h1>
                        <h2>{animes[0].titulo} ({animes[0].votos})</h2>
                    </div>}

                    {/* <!-- ANIME 2 --> */}
                    { animes.length > 1 && 
                    <div className={styles.anime}>
                        <img src={animes[1].url} />
                        <h1 className={styles.silver}>2º</h1>
                        <h2>{animes[1].titulo} ({animes[1].votos})</h2>
                    </div>}

                    {/* <!-- ANIME 3 --> */}
                    { animes.length > 2 && 
                    <div className={styles.anime}>
                        <img src={animes[2].url} />
                        <h1 className={styles.bronze}>3º</h1>
                        <h2>{animes[2].titulo} ({animes[2].votos})</h2>
                    </div>}
                </div>

                {/* <!-- ULTIMOS VOTOS --> */}
                <h2>Últimos Votos</h2>
                <div id={styles.votos}>
                    <ul>
                        {votos.map((voto) => <li key={voto.id}>{voto.email} - {voto.anime.titulo}</li>)}
                    </ul>
                </div>
        </Template>
    )
}