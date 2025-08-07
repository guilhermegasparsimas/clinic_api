import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main () {
    await prisma.usuario.createMany({
        data: [
            {   nome: "Mariana",
                email: "marsiana@pereira.com",
                senha: "123",
                cargo: "Médico",
            }
        ]
    });
    await prisma.paciente.create({
        data: {
            nome: "Mariana",
            sexo: "Masculino",
            data_nascimento: new Date("1980-12-11"),
            cpf: "125.472.519-90",
            telefone: 991301821,
            email: "mariana@pereira.com",
            // consulta: {
            // create: [
            //     {
            //         motivo: "Dor nas costas",
            //         data_consulta: new Date("2023-08-25"),
            //         observacoes: "Ibuprofeno 3 vezes ao dia",
            //     }
            //     ]
            // },
            // exame: {
            // create: [
            //     {
            //         tipo: "Densiometro",
            //         data_exame: new Date("2023-08-25"),
            //         type: "clinico",
            //         resultado: "deu ruim",
            //         link_arquivo: "url.com.br/exame.pdf",
            //         observacoes: "Ibuprofeno 3 vezes ao dia",
            //     }
            // ]
            // }
        },
    });
}

main ()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });