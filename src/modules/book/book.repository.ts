import { Injectable } from '@nestjs/common';
import { DatabaseConnection } from 'src/database/database_connection';
import { BookEntity } from 'src/database/entities/book.entity';

@Injectable()
export class BookRepository {
  constructor(private connection: DatabaseConnection) {}

  public async create(data: BookEntity): Promise<BookEntity> {
    const book = await this.connection.book.create({ data });
    return book;
  }
}
