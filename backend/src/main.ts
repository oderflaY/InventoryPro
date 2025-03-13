import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .addBearerAuth()
    .setTitle('Mi API documentation')
    .setDescription('nose que es, ayuda')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, documentFactory);

  app.enableCors();
  //app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe()); //Hacer global el uso de la validacion
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
