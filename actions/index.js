import axios from 'axios';

export const getSecretData = async () => {
    return await axios.get('/api/v1/secret').then((response) => { return response.data});
}