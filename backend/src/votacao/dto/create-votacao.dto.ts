import { IsNotEmpty, IsEmail, IsNumber, IsPositive } from "class-validator";

export class CreateVotacaoDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    animeID: number;
}
