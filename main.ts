import inquirer from 'inquirer';

let todos =[]//shopper[] 
let condition = true;

while(condition)
{let todoquestions = await inquirer.prompt(
[    
 {
name:"firstquestion",
type:"input",
message:"what would you like to add in your todos?"

},
{
name:"secondquestion",
type:"confirm",
message:"would you like to add more in your todos?",
default:"true" //take value yes because i use true

}
]
);
todos.push(todoquestions.firstquestion);
console.log(todos)
// loop condition
condition =todoquestions.secondquestion;
}

