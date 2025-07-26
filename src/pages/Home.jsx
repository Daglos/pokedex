import Carousel from "../components/carousel/Carousel";
import slideData from '../store/carouselSlides';
import Container from "../components/panels/Container";
import HalfPagePanel from "../components/panels/HalfPagePanel";

const Home = ()=>{
    return (
        <>
            <Carousel slides={slideData} />
            <Container>
                <HalfPagePanel
                    leftNodes={(
                        <>
                            <picture>
                                <source srcSet="https://www.pinclipart.com/picdir/big/164-1648349_pokemon-brick-bronze-png-banner-library-stock-pokemon.png" media="(min-width:720px)" />
                                <img className="w-full h-full object-fit" href="https://picsum.photos/id/12/480/480"/>
                            </picture>
                        </>
                    )}
                    rightNodes={(
                        <>
                        <p className="flex justify-center items-center m-4 h-full">¿Qué es Pokémon?<br/>Pokémon es una franquicia que gira en torno a criaturas llamadas “Pokémon” que entrenadores capturan, entrenan y usan para combatir.
                        </p>
                        </>
                    )}
                />
                   <HalfPagePanel
                    invert={true}
                    leftNodes={(
                        <>
                            <picture>
                                <source srcSet="https://i.pinimg.com/originals/2b/1d/fe/2b1dfec19b945a19ac39641278a6a799.jpg" media="(min-width:720px)" />
                                <img className="w-full h-full object-fit" href="https://picsum.photos/id/13/480/480"/>
                            </picture>
                        </>
                    )}
                    rightNodes={(
                        <>
                        <p className="flex justify-center items-center m-4 h-full">El mundo de Pokémon:<br/>Es un universo lleno de regiones, entrenadores y Pokémon variados, donde la aventura y la amistad son clave.
                        </p>
                        </>
                    )}
                />
                <p>
                    En Pokémon, debes capturar diversas criaturas que se convierten en tus compañeros de aventura. A medida que las entrenas, pueden evolucionar y volverse más fuertes, ayudándote a superar desafíos y crecer juntos.
                </p>
            </Container>
        </>
    )
}

export default Home;