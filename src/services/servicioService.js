import axios from 'axios';

const baseUrl = 'http://localhost:4000/'

const getServicios = async () => {
    const { data } = await axios.get(`${baseUrl}api/v1/servicio/get`)
    return data;
};

export default { getServicios };