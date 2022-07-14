import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { TenantAwareCrudService } from './../core/crud';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationService extends TenantAwareCrudService<Organization> {
	constructor(
		@InjectRepository(Organization)
		private readonly organizationRepository: Repository<Organization>
	) {
		super(organizationRepository);
	}

	/**
	 * Returns the organization based on the public link irrespective of the tenant.
	 */
	public async findByPublicLink(
		profile_link: string,
		select?: string,
		relation?: string
	): Promise<Organization> {
		const options: FindOneOptions<Organization> = {};
		if (select) {
			options['select'] = JSON.parse(select);
			options['relations'] = JSON.parse(relation);
		}
		return await this.organizationRepository.findOne({
			where: {
				profile_link
			},
			...options
		});
	}
}
