import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from './dto/create_book.dto';
import { IBook } from './interface/book.interface';

@Controller('book')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Post('criar')
  public async create(@Body() data: CreateBookDTO): Promise<IBook> {
    return await this.service.create(data);
  }
}
