import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { PdfServiceModule } from './pdf-service/pdf-service.module';

@Module({
  imports: [PrismaModule, PdfServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
