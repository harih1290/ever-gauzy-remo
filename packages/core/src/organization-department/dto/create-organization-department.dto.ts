import { IOrganizationDepartmentCreateInput, ITag } from "@gauzy/contracts";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateOrganizationDepartmentDTO implements IOrganizationDepartmentCreateInput {

    @ApiProperty({ type: () => String })
    @IsNotEmpty()
    @IsString()
    readonly organizationId: string;

    @ApiProperty({ type: () => String })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiPropertyOptional({ type: () => String })
    @IsOptional()
    @IsArray()
    readonly tags?: ITag[];
}