import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/Home.css"
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

export function Home() {

    const carruselItems = [];
    for (let i = 1; i < 11; i++) {
        carruselItems.push(
            // <div key={i}>
            //     <img src={`./img/nro${i}.jpg`}
            //         className="img-carousel"></img>
            // </div>
            <CCarouselItem key={`nro${i}`}>
                <CImage className="d-block img-carousel" src={`./img/nro${i}.jpg`} alt={`nro${i}`} />
            </CCarouselItem>

        );
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 style={{ alignSelf: "center" }}>Tienda Musical Hendrix</h1>
            </div>
            <div className="d-flex flex-column w-50 justify-content-center m-auto"
                style={{ minHeight: '80vh' }}>
                <CCarousel controls transition="crossfade" indicators dark>
                    {carruselItems}
                </CCarousel>
                <br />
                <br />
                <div>
                    <h3>
                        Es una tienda de instrumentos musicales con más de 15 años de experiencia.
                        Tenemos el conocimiento y la capacidad para asesorarte sobre las mejores elecciones para tu compra musical.
                    </h3>
                </div>
            </div>


        </>
    );
}