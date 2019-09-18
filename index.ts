/**
 * --------------------------------------------------
 * Json Object
 * --------------------------------------------------
 */

  let subjects:any = {
    "subject_1": "Angular",
    "subject_2": "React",
    "subject_3": "VUE",
  }

  /**
 * --------------------------------------------------
 * for in loop
 * --------------------------------------------------
 */

  for(let subjectKey in subjects){
    console.log(subjects[subjectKey]);
  }

  console.log("=============================");

/**
 * --------------------------------------------------
 * Json Objects in Array
 * --------------------------------------------------
 */
let products:Array<any> = [
  {"id": "1101", "name": "product1", "price": "4405"},
  {"id": "1102", "name": "product2", "price": "4406"},
  {"id": "1103", "name": "product3", "price": "4407"},
  {"id": "1104", "name": "product4", "price": "4408"},
  {"id": "1105", "name": "product5", "price": "4409"},
];

products.forEach(product => {
  console.log(product.id, product.name, product.price)
});

console.log("==========================================");


let obj:any = {
  "login": login()
};

function login()
{
  return "Login module soon........."
}

console.log(obj.login);

console.log("==========================================");

let obj1:any = {
  "mysql": () => {return "mysql data soon..."},
  "mongodb": () => {return "mongodb data soon..."}
};

console.log(obj1.mysql(), obj1.mongodb());

console.log("=============== End =====================");