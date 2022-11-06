import axios from 'axios';

const baseUrl = 'http://localhost:4000/'

const postSendEmail = async credentials => {
    const { data } = await axios.post(`${baseUrl}api/v1/`, credentials)
    return data;
};

export default { postSendEmail };