import {addListeners} from "./js/code.js";

export async function startApp(){
    addListeners();
}

window.addEventListener("DOMContentLoaded",async ()=>{
    await startApp();
})