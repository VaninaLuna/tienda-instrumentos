import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect, useState } from 'react';
import { savePreferenceMP } from '../services/FuncionesApi';
import Pedido from '../entities/Pedido';
import { Button } from 'react-bootstrap';

type CheckoutMPParams = {
    pedido: Pedido;
}

export function CheckoutMP({ pedido }: CheckoutMPParams) {

    const [preferenceId, setPreferenceId] = useState<string>('');

    const getPreferenceMP = async () => {

        const preference = await savePreferenceMP(pedido);

        if (preference) setPreferenceId(preference.id)
    }

    useEffect(() => {
        initMercadoPago('TEST-f08f2d01-1222-43e9-a16c-5404897b393a', { locale: 'es-AR' });
    }, []);

    return (
        <>
            <div className='text-center'>

                {
                    pedido.id !== 0
                        ?
                        <Button variant="primary" className='text-center' size='lg' onClick={getPreferenceMP}>Generar Pago</Button>
                        : null
                }

                {
                    preferenceId
                        ? <Wallet initialization={{ preferenceId: preferenceId, redirectMode: "blank" }} customization={{ texts: { valueProp: 'smart_option' } }} />
                        : null
                }
            </div>
        </>
    )
}