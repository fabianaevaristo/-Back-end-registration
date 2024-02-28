import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, address, city, date_of_birth, phone, email } = request.body as
     { name: string, address: string, city: string, date_of_birth: Date, phone: string, 
      email: string };
    
    const customerService = new CreateCustomerService();

    const customer = await customerService.execute({ name, address, city, 
      date_of_birth, phone, email });

    reply.send(customer);
  }
}

export { CreateCustomerController };