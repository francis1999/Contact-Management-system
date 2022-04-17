import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // this is to instantiate globalize Class Validation line of code
  app.useGlobalPipes(new ValidationPipe({
    //this whitelist will hide unwanted value
    whitelist:true
  }));
  

  await app.listen(3001);
}
bootstrap();
