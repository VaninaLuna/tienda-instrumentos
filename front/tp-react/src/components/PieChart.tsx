import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getPedidosPorInstrumento } from '../services/FuncionesApi';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';
import PedidosPorInstrumentoDTO from '../entities/PedidosPorInstrumentoDTO';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement
);

type PieParams = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderWidth: number;
    }[];
}

const generateColors = (length: number) => {
    const colors = ['#FAA5B7', '#91C7EC', '#C19AE8', '#FFAC9D', '#98D7D1', '#B3E697', '#E2A3DE', '#F1A66C', '#DAEF91'];
    return colors.slice(0, length);
};

const PieChart = () => {
    const [chartData, setChartData] = useState<PieParams>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPedidosPorInstrumento();

                const labels = data.map((d: PedidosPorInstrumentoDTO) => d.instrumento);
                const counts = data.map((d: PedidosPorInstrumentoDTO) => d.count);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Cantidad de Pedidos',
                            data: counts,
                            backgroundColor: generateColors(counts.length),
                            borderWidth: 1
                        },
                    ],
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const, // Pone las etiquetas al lado derecho del gráfico
            },
            title: {
                display: true,
                text: 'Cantidad de Pedidos por Instrumento',
            },
        },
    };

    return (
        <div>
            {chartData ? (
                <Pie data={chartData} options={options} />
            ) : (
                <p>Cargando datos del gráfico...</p>
            )}
        </div>
    );
};

export default PieChart;