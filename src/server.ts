import express from 'express'
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.post('/feedbacks', async (request, response) => { //Uma função assincrono aguarda o processamento finalizar para devolver uma resposta ao usuario.
  const { type, comment, screenshot } = request.body;

  const feedback = await prisma.feedback.create({ //"await" aguarda o processo de criação terminar para poder entregar a resposta da função
    //posso devolver para o front a resposta da operação com a criação da const acima.
    data: {
      type,
      comment,
      screenshot,
    }
  })

  return response.status(201).json({ data: feedback });
})

app.listen(3333, () => {
  console.log('🚀 Server Online...')
})