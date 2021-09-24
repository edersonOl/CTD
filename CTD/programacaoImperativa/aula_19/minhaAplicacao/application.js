let dados=[
    {"altura":1.65,
    "sexo":'F'},
    {"altura":1.80,
    "sexo":'M'},
    {"altura":1.80,
    "sexo":'F'},
    {"altura":1.50,
    "sexo":'M'},
    {"altura":1.70,
    "sexo":'F'},
    {"altura":1.55,
    "sexo":'M'},
    {"altura":1.50,
    "sexo":'F'},
    {"altura":1.52,
    "sexo":'M'},
    {"altura":1.41,
    "sexo":'F'},
    {"altura":1.35,
    "sexo":'M'},
    {"altura":1.45,
    "sexo":'F'},
    {"altura":1.50,
    "sexo":'M'}, 
    {"altura":1.35,
    "sexo":'M'},
    {"altura":1.63,
    "sexo":'F'},
    {"altura":1.35,
    "sexo":'M'},   
];

const min=dados.reduce((a,b)=>{
    if(b.altura<a.altura)a=b;
    return a;
})

console.log(min);

const max=dados.reduce((a,b)=>{
    if(b.altura>a.altura)a=b;
    return a;
})

console.log(max);




