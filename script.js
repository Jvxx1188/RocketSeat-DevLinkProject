//Criando trocação de duas variaveis com o AddEventListener,onclick e macete
const MyHtml = document.querySelector("html");
const SwitchBox = document.getElementById("switch");

SwitchBox.addEventListener("click", function () {
  MyHtml.classList.toggle("light");
  localStorage.setItem("_theme", MyHtml.className);
  //localStorage.setItem(MyHtml.className, "_theme");
});
function LoadLastTheme() {
  MyHtml.className = localStorage.getItem("_theme");
}
LoadLastTheme();

// = - vai ser igual a,== - se for igual a, ? chamará a variavel, : - se não chamara a variavel...

/*EventoQueIraOcorrerQuandoEu("Clicar",OcorreráAfunção(){
SwitchBox.addEventListener("click",function(){
    //se for light, remove o light e abaixo adiciona o dark, vice versa
    
    MyHtml.classList.toggle("dark");
});

//SwitchBox.addEventListener("click",ToogleTheme) possivel add funcoes fora
function ToogleTheme() {
    MyHtml.classList.toggle("light");
    MyHtml.classList.toggle("dark");
  }

*/
