import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import express from 'express';

// const corsOptions: CorsOptions = {
//   origin: 'http://localhost:3000', // Replace with your frontend server URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Add the allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Add the allowed request headers
//   credentials: true, // Set to true if you need to pass cookies or authentication headers
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  // app.use('/image', express.static('image/product'));
  // app.enableCors(corsOptions);
=======
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    credentials: true
  });
>>>>>>> Nael-HR
  await app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
}
bootstrap();
