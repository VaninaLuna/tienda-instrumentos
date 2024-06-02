import { useEffect, useState } from "react";
import { getRoles } from "../services/FuncionesApi";
import Rol from "../entities/Rol";

export function useRoles() {

    const [roles, setRol] = useState<Rol[]>([]);

    useEffect(() => {

        getRoles()
            .then(data => setRol(data))
            .catch(e => console.error(e));

    }, [])


    return { roles }
}