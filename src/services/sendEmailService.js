import axios from 'axios';

const baseUrl = 'http://localhost:4000/'

const postSendEmail = async () => {
    const { data } = await axios.post(`${baseUrl}api/v1/`)
    return data;
};

export default { postSendEmail };