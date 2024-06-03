

function Mapa() {
    const latitud = -32.886316;
    const longitud = -68.838292;
    const zoomFactor = 4;
    const src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11270.125646913215!2d${longitud}!3d${latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${13.1 / zoomFactor}!5e0!3m2!1ses-419!2sar!4v1615335513448!5m2!1ses-419!2sar`;

    return (
        <iframe className=""
            title="Mapa de Google"
            width="600"
            height="450"
            loading="lazy"
            allowFullScreen
            // src="https://www.google.com/maps/embed/v1/place?q=Av.%20Las%20Heras%20y%20Av.%20San%20Mart%C3%ADn%2C%20Ciudad%20de%20Mendoza"
            src={src}
        />
    );
}

export default function DondeEstamos() {

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 style={{ alignSelf: "center" }}>Donde Estamos</h1>
            </div>
            <div className="d-flex flex-column w-50 justify-content-center m-auto"
                style={{ minHeight: '80vh' }}>

                <div className="d-flex justify-content-center">
                    <Mapa />
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    <p style={{ alignSelf: "center" }}>Nos encontramos en la calle San Martin y Las heras. Ciudad de Mendoza. Argentina.</p>
                </div>
            </div>


        </>
    );
}
