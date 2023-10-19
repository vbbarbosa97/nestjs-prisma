import { Injectable } from '@nestjs/common';
import { BookEntity } from 'src/database/entities/book.entity';
import { CreateBookDTO } from './dto/create_book.dto';
import { IBook } from './interface/book.interface';

@Injectable()
export class BookResolver {
  public createBookDtoToEntity(data: CreateBookDTO): BookEntity {
    return {
      description: data.description,
      title: data.title,
      bar_code: data.barCode,
    };
  }

  public bookEntityToInterface(data: BookEntity): IBook {
    return {
      id: data.id,
      description: data.description,
      title: data.title,
      barCode: data.bar_code,
    };
  }
}
