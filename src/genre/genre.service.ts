import {Get, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Genre} from "../entities/genre.entity";
import {DeleteResult, Repository} from "typeorm";
import {CreateGenreDto} from "./create-genre.dto";
import {UpdateGenreDto} from "./update-genre.dto";

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private readonly genreRepository: Repository<Genre>,
    ) {}

    create(createGenreDto: CreateGenreDto) : Promise<Genre> {
        const genre :any = this.genreRepository.create(createGenreDto);
        return this.genreRepository.save(genre);
    }

    findAll() : Promise<Genre[]> {
        return this.genreRepository.find();
    }

    findOne(id:number): Promise<Genre | null>  {
        return this.genreRepository.findOneBy({id});
    }
    delete(id:number) : Promise<DeleteResult> {
        return this.genreRepository.delete({id});
    }

    async update(id:number, updateGenreDto: UpdateGenreDto) : Promise<Genre | null> {
        await this.genreRepository.update(id,updateGenreDto);
        return this.genreRepository.findOneBy({id});
    }
}
