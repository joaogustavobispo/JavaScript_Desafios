//Desafio 1.1

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log(`O usuário mora em ${endereco.cidade}/ ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`);

//Desafio 1.2

function pares(x, y) {
    var pares = `Os pares entre ${x} e ${y} são: `

    console.log("Verificando os dados...");
    if (x > y) {
        console.log("O valor de 'x' deve ser menor que o de 'y'");
        return
    } else {
        console.log("Separando os pares...");
        while (x <= y) {
            if (x % 2 == 0) {
                pares += `${x}, `;
            }
            x++
        }
        return pares;
    }
}
const par = pares(2, 10);

console.log(par);

//Desafio 1.3

function temHabilidade(skills, skill) {
    if (skills.indexOf(skill) != -1) {
        return true
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
var skill = "Javascript"
var habilidade = temHabilidade(skills, skill);
console.log(`${skill}: ${habilidade}`)

// Desafio 1.4

function experiencia(anos) {
    if (anos <= 1) {
        return "Iniciante";
    } else if (anos <= 3) {
        return "Intermediário"
    } else if (anos <= 6) {
        return "Avançadp"
    } else {
        return "Jedi Master"
    }
}
var anosEstudo = 7;
var xp = experiencia(anosEstudo);
console.log("Desenvolvedor: " + xp)

// Desafio 1.5

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

for (const user of usuarios) {
    console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(", ")}`)
}