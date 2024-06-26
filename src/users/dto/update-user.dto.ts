import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, Max, Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNumber()
    @Min(0)
    @Max(5)
    rating: number;
}
