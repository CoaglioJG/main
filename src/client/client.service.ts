import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './client.model';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}

  async all() {
    return await this.clientModel.find().exec();
  }

  async findById(id: number) {
    return await this.clientModel.findOne({ id }).exec();
  }

  async create(data: any): Promise<Client> {
    return new this.clientModel(data).save();
  }

  async update(id: number, data: any) {
    return this.clientModel.findOneAndUpdate({ id, data });
  }
}
