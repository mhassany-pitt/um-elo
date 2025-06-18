import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true, forbidUnknownValues: true }));
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  const config = app.get(ConfigService);
  await app.listen((await config.get('PORT')) || 3000);
}
bootstrap();
