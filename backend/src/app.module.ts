import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaviosModule } from './navios/navios.module';
import { PassageirosModule } from './passageiros/passageiros.module';
import { DuvsModule } from './duvs/duvs.module';

@Module({
  imports: [NaviosModule, PassageirosModule, DuvsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
