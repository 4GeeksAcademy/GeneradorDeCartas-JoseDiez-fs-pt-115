import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {

    let generateCard = () => {

        let generateNumber = () => {
            let numero = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K"];

            let generadorNumeroIndex = Math.floor(Math.random() * numero.length);
            return numero[generadorNumeroIndex]
        }
        let randomNumer = document.querySelector("#number").innerHTML = generateNumber();

        let generatePalo = () => {
            let palo = ["♦", "♥", "♠", "♣"]

            let generadorPaloIndex = Math.floor(Math.random() * palo.length);
            return palo[generadorPaloIndex]
        }
        let paloGenerado = generatePalo();

        document.querySelector(".topElement").innerHTML = paloGenerado;
        document.querySelector(".botElement").innerHTML = paloGenerado;


        if (paloGenerado.includes("♥") || paloGenerado.includes("♦")) {
            document.querySelector(".topElement").style.color = "red";
            document.querySelector(".botElement").style.color = "red";
        } else {
            document.querySelector(".topElement").style.color = "black";
            document.querySelector(".botElement").style.color = "black";
        }
    }
    setInterval(generateCard, 2000);
};
