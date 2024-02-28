import prismaClient from "../prisma";

interface DeletecustomerProps{
  id: string;
}
class DeletecustomerService{
  async execute({ id }: DeletecustomerProps){

    if(!id){
      throw new Error("Solicitação invalida.")
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where:{
        id: id
      }
    })

    if(!findCustomer){
      throw new Error("cliente não existe!")
    }

    await prismaClient.customer.delete({
      where:{
        id: findCustomer.id
      }
    })
    return { message: "Deletado com sucesso!"}

  }
}

export { DeletecustomerService }