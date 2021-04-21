export default function Home(props) {
  console.log(props.episodes)
  return (
    <div></div>
  )
}

// SSR -> getServerSideProps() Executando toda vez que o usário acessar a pagina
// SSG -> getStaticProps() Quando o primeiro usuário acessar a pagina sera criado um HTML estatico para ser acessado pelos os usuarios seguintes, em um tempo determinado pelo objeto ˜revalidade˜
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8 // 60 segundos x 60 minutos x 8 horas
  };
}
