import {Body, Controller, Get, Post} from '@nestjs/common';
import {GenreService} from "./genre.service";
import {CreateGenreDto} from "./create-genre.dto";
import {Genre} from "../entities/genre.entity";

@Controller('genres')
export class GenreController {
    constructor(private readonly genreService : GenreService) {}

        @Post()
        create(@Body() createGenreDto: CreateGenreDto) : Promise<Genre> {
            return this.genreService.create(createGenreDto);

        }
    @Get()
    findAll() : Promise<Genre[]> {
        return this.genreService.findAll();
    }
    }

