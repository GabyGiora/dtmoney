import axios from 'axios';

export const api = axios.create({  // cria uma instância para citar algumas informações que são padrão para todas as requisoções que vamos fazer para noss api
    baseURL: 'http://localhost:3000/api',
})