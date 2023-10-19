import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { BookResolver } from './book.resolver';
import { CreateBookDTO } from './dto/create_book.dto';

@Injectable()
export class BookService {
  constructor(
    private repository: BookRepository,
    private resolver: BookResolver,
  ) {}

  public async create(data: CreateBookDTO) {
    try {
      const bookEntity = this.resolver.createBookDtoToEntity(data);

      const bookCreated = await this.repository.create(bookEntity);

      const bookInterface = this.resolver.bookEntityToInterface(bookCreated);

      return bookInterface;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}
