import { Controller, Get, Param } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Client } from './client.model';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  async all() {
    return this.clientService.all();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Client> {
    return this.clientService.findById(id);
  }

  @EventPattern('add_client')
  async create(data: any): Promise<Client> {
    console.log({ Recebendo: data });
    return this.clientService.create(data);
  }

  @EventPattern('update_client')
  async update(data: any): Promise<Client> {
    return this.clientService.update(data.id, data);
  }
}
