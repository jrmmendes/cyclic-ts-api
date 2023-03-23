import express from 'express';
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan';

export class Application {

  private readonly requestHandler: express.Application

  constructor() {
    this.requestHandler = express();
    this.requestHandler.use(cors(), helmet(), morgan('tiny'));


    this.requestHandler.get('/users', (_, res) => {

      return res.status(200).send([{
        id: '12312312',
        name: 'Sample User',
        age: 32,
        isActive: true,
      }])
    })
  }

  async listen() {
    return this.requestHandler.listen(3000, () => console.log('Started at port 3000'));
  }

}


