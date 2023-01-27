const student = "Акулов Платон Александрович";
document.getElementById("student").innerHTML = student;

let score_assumed_first_team = prompt('Введите предпологаемый счёт первой команды') //Ввод предпологаемого счёта первой команды
let score_assumed_second_team = prompt('Введите предпологаемый счёт второй команды') //Ввод предпологаемого счёта второй команды
let score_real_first_team = prompt('Введите истиный счёт первой команды') //Ввод истинного счёта первой команды
let score_real_second_team = prompt('Введите истиный счёт второй команды') //Ввод истинного счёта второй команды

if ((score_assumed_first_team==score_real_first_team) && (score_assumed_second_team==score_real_second_team)) 
  {alert ("Счёт был угадан верно!")}//да
else if (
  (score_assumed_first_team>=score_assumed_second_team) && (score_real_first_team>=score_real_second_team)
  ||
  (score_assumed_first_team<=score_assumed_second_team) && (score_real_first_team<=score_real_second_team)) 
  {alert ("Счёт не угадали, но исход угадали")}//50/50
else {alert ("Ни счёта, ни исхода не угадали")}//нет