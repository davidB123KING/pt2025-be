import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {GenreService} from "./genre.service";
import {CreateGenreDto} from "./create-genre.dto";
import {Genre} from "../entities/genre.entity";
import {DeleteResult} from "typeorm";
import {UpdateGenreDto} from "./update-genre.dto";

@Controller('genres')
export class GenreController {
    constructor(private readonly genreService : GenreService) {}

        @Post()
        create(@Body() createGenreDto: CreateGenreDto) : Promise<Genre> {
            return this.genreService.create(createGenreDto);

        }

        @Patch(':id')
        async update(@Param('id') id:string,@Body() updateGenreDto: UpdateGenreDto) : Promise<Genre | null> {
            return await this.genreService.update(+id,updateGenreDto);
        }

    @Get()
    findAll() : Promise<Genre[]> {
        return this.genreService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string) : Promise<Genre | null> {
        return this.genreService.findOne(+id);
    }
    @Delete(':id')
    delete(@Param('id') id:string) : Promise<DeleteResult> {
        return this.genreService.delete(+id);
    }

    }

