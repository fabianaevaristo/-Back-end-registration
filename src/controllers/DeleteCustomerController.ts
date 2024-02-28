import { FastifyRequest, FastifyReply } from "fastify";
import { DeletecustomerService } from "../services/DeleteCustomersService";

class DeleteCustomerController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const { id } = request.query as { id: string }

    const customerService = new DeletecustomerService();

    const customer = await customerService.execute({ id })

    reply.send(customer);
  }

}

export { DeleteCustomerController }