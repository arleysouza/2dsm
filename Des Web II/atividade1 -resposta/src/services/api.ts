import axios from "axios";

export default axios.create({
    baseURL:"https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
    headers: {
        "Content-Type": "application/json"
    }
});

