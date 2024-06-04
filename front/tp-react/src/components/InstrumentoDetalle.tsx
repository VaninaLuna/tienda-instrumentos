import { useNavigate } from "react-router-dom";
import { useInstrumentoDetalle } from "../hooks/useInstrumentoDetalle";
import "../styles/InstrumentoDetalle.css";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function EnvioConCosto({ costo }: { costo: string }) {
    return (
        <p className="msj-envio-costo">Costo de Envio interior de Argentina: ${costo} </p>
    )
}

function EnvioGratis() {
    return (
        <>
            <div className="msj-envio-gratis">
                <img src={`/img/camion.png`} alt="imagen de un camion" />
                <p className="envio-gratis">Envió gratis a todo el país</p>
            </div>
        </>
    )
}

export function InstrumentoDetalle() {

    const { instrumento } = useInstrumentoDetalle()
    const navigate = useNavigate();

    const envioGratis = instrumento?.costoEnvio === "G";

    // const [carritoInstrumento, setCarritoInstrumento] = useState<Instrumento>();
    // const [verCarrito, setVerCarrito] = useState(false);

    // const handleVerCarrito = () => {
    //     setVerCarrito(true);
    // }

    // const handleAgregarAlCarrito = () => {
    //     // setCarritoInstrumento(instrumento);
    //     // setVerCarrito(true);
    // }

    const handleDownloadPDF = async () => {
        const input = document.getElementById('pdf-content');
        if (input) {
            input.style.maxWidth = '900px';
            const canvas = await html2canvas(input);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const margin = 10; // 10 mm margin
            const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
            // const pdfHeight = pdf.internal.pageSize.getHeight() - 2 * margin;

            const imgProps = pdf.getImageProperties(imgData);
            const imgWidth = pdfWidth;
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
            pdf.save(`${instrumento?.instrumento}.pdf`);

            input.style.maxWidth = '1200px';
        }
    };

    const handleVolver = () => {
        navigate("/producto")
    };

    return (
        <>
            <div className="d-flex flex-column w-60 justify-content-center m-auto"
                style={{ minHeight: '80vh' }}>
                <div id="pdf-content" className="contenido">
                    <div className="descripcion">
                        <img src={`${instrumento?.imagenPath},${instrumento?.imagen}`} alt={instrumento?.instrumento} className="img-publicacion" />
                        <p>Descripcion</p>
                        <p style={{ padding: '20px' }}>{instrumento?.descripcion}</p>
                    </div>
                    <div className="detalle">
                        <p className="cantidad-detalle">{instrumento?.cantidadVendida} vendidos</p>
                        <p className="titulo-detalle">{instrumento?.instrumento}</p>
                        <p className="precio-detalle">${instrumento?.precio}</p>
                        <p className="marca-detalle">Marca: {instrumento?.marca}</p>
                        <p className="modelo-detalle">Modelo: {instrumento?.modelo}</p>
                        <p className="costo-detalle">Costo Envio:</p>
                        {
                            envioGratis
                                ? <EnvioGratis />
                                : <EnvioConCosto costo={instrumento?.costoEnvio ?? ""} />
                        }
                        {/* <button type="button" className="btn btn-success mt-4" onClick={handleAgregarAlCarrito}>Agregar al Carrito</button> */}
                    </div>
                </div>
            </div>

            <div className="mb-4 d-flex flex-row" style={{ justifyContent: "space-between" }}>
                <button onClick={handleVolver} className="btn btn-warning mt-4" style={{ backgroundColor: '#e4b17d', border: '#e4b17d' }}>Volver</button>

                <button onClick={handleDownloadPDF} className="btn btn-primary mt-4" style={{ backgroundColor: '#e06f72', border: '#e06f72' }}>Descargar como PDF</button>

            </div>
        </>
    )
}