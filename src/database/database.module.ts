import { Module } from '@nestjs/common';
import { DatabaseConnection } from './database_connection';

@Module({
  providers: [DatabaseConnection],
  exports: [DatabaseConnection],
})
export class DatabaseModule {}
