import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  address: string;
  city: string;
  date_of_birth: Date;
  phone: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, address, city, date_of_birth, phone, email }: CreateCustomerProps) {
    if (!name || !address || !city || !date_of_birth || !phone || !email) {
      throw new Error("Preencha todos os campos");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        address,
        city, 
        date_of_birth,
        phone,
        email,
        status: true,
      }
    })
    
    return customer;
  }
}

export { CreateCustomerService };