import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { DatabaseModule } from 'src/database/database.module';
import { BookResolver } from './book.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [BookService, BookRepository, BookResolver],
})
export class BookModule {}
