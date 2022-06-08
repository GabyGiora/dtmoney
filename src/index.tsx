import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({      // Chamo a função 
  models: {
    transaction: Model, 
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website', 
          type: 'deposit', 
          category: 'Dev', 
          amount: 6000, 
          createdAt: new Date('2021-01-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel', 
          type: 'withdraw', 
          category: 'Casa', 
          amount: 1100, 
          createdAt: new Date('2021-01-14 11:00:00'),
        }
      ],
    })
  },

  routes() {       // Defino as rotas 
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
  
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data) // Esse schema é meu banco de dados 
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
document.getElementById('root')
);

