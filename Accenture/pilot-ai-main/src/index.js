import './style.css';
import 'material-icons';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import { getAssistantMessage, getVisionMessage } from './armando-ai';



(function() {
    var chatSubmit = document.querySelector("#chat-submit");
    chatSubmit.addEventListener("click", function(e) {sendMessage(e)});

    var tireSubmit1 = document.querySelector("#tire-submit1");
    tireSubmit1.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition1")});

    var tireSubmit2 = document.querySelector("#tire-submit2");
    tireSubmit2.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition2")});

    var tireSubmit3 = document.querySelector("#tire-submit3");
    tireSubmit3.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition3")});

    var tireSubmit4 = document.querySelector("#tire-submit4");
    tireSubmit4.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition4")});

    var tireSubmit5 = document.querySelector("#tire-submit5");
    tireSubmit5.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition5")});

    var tireSubmit6 = document.querySelector("#tire-submit6");
    tireSubmit6.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition6")});

    var tireSubmit7 = document.querySelector("#tire-submit7");
    tireSubmit7.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition7")});

    var tireSubmit8 = document.querySelector("#tire-submit8");
    tireSubmit8.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition8")});

    var tireSubmit9 = document.querySelector("#tire-submit9");
    tireSubmit9.addEventListener("click", function(e) {sendMessageGPT4V(e, "condition9")});

    var storedKey = localStorage.getItem('openaiKey');
    if (storedKey && storedKey.trim() != "") {
        document.querySelector("#api-input").value = storedKey;
    }

    var settingsSubmit = document.querySelector("#settings-submit");
    settingsSubmit.addEventListener("click", function(e) {
        // prevent the default behavior of the event
        e.preventDefault();

        var openaiKey = document.querySelector("#api-input").value;
        if (openaiKey.trim() == "") {
            return false;
        }

        localStorage.setItem('openaiKey', openaiKey)
      });
  
  
    document.body.addEventListener("click", function(e) {
      // check if the target element has the chat-btn class name
      if (e.target.classList.contains("chat-btn")) {
        // get the chat-value and innerHTML of the target element
        var value = e.target.getAttribute("chat-value");
        var name = e.target.innerHTML;
        // select the chat-input element by its id and set its disabled attribute to false
        document.querySelector("#chat-input").setAttribute("disabled", false);
        // call the generate_message function with the name and self type
        generate_message(name, "user");
      }
    });
  
    // select the chat-circle element by its id and add a click event listener to it
    document.querySelector("#settings-circle").addEventListener("click", function() {
        // toggle the scale class name for the chat-circle element
        this.classList.toggle("hidden");
        document.querySelector("#chat-circle").classList.toggle("hidden");
        // toggle the scale class name for the chat-box element
        document.querySelector(".settings-box").classList.toggle("hidden");
        document.querySelector("#chat-overlay").classList.toggle("hidden");
      });

      // select the chat-box-toggle element by its class name and add a click event listener to it
    document.querySelector(".settings-box-toggle").addEventListener("click", function() {
        // toggle the scale class name for the chat-circle element
        document.querySelector("#chat-circle").classList.toggle("hidden");
        document.querySelector("#settings-circle").classList.toggle("hidden");
        // toggle the scale class name for the chat-box element
        document.querySelector(".settings-box").classList.toggle("hidden");
        document.querySelector("#chat-overlay").classList.toggle("hidden");
      });
    

    // select the chat-circle element by its id and add a click event listener to it
    document.querySelector("#chat-circle").addEventListener("click", function() {
      // toggle the scale class name for the chat-circle element
      this.classList.toggle("hidden");
      document.querySelector("#settings-circle").classList.toggle("hidden");
      // toggle the scale class name for the chat-box element
      document.querySelector(".chat-box").classList.toggle("hidden");
      document.querySelector("#chat-overlay").classList.toggle("hidden");
    });
  
    // select the chat-box-toggle element by its class name and add a click event listener to it
    document.querySelector(".chat-box-toggle").addEventListener("click", function() {
      // toggle the scale class name for the chat-circle element
      document.querySelector("#chat-circle").classList.toggle("hidden");
      document.querySelector("#settings-circle").classList.toggle("hidden");
      // toggle the scale class name for the chat-box element
      document.querySelector(".chat-box").classList.toggle("hidden");
      document.querySelector("#chat-overlay").classList.toggle("hidden");
    });
  })();
  
  async function sendMessage(e) {

    e.preventDefault();
    var msg = document.querySelector("#chat-input").value;
    if (msg.trim() == "") {
      return false;
    }
    
    generate_message(msg, "user");
    
    var assistantMessage = await getAssistantMessage(msg, getMessageHistory());

    generate_message(assistantMessage.content.replaceAll('\n','<br/>'), assistantMessage.role);
  }

  async function sendMessageGPT4V(e,condition) {

    e.preventDefault();
    
    var assistantMessage1 = await getVisionMessage('https://localizafrotas-prd.azurewebsites.net/wp-content/uploads/luz-do-painel-do-carro-oleo-300x300.png.webp');
    var assistantMessage2 = await getVisionMessage('https://localizafrotas-prd.azurewebsites.net/wp-content/uploads/luz-do-painel-do-carro-injecao-300x300.png.webp');    
    var assistantMessage3 = await getVisionMessage('https://localizafrotas-prd.azurewebsites.net/wp-content/uploads/luz-do-painel-do-carro-bateria-300x300.png.webp');
    var assistantMessage4 = await getVisionMessage('https://localizafrotas-prd.azurewebsites.net/wp-content/uploads/luz-do-painel-do-carro-temperatura-300x300.png.webp');
    var assistantMessage5 = await getVisionMessage('https://www.despachantedok.com.br/blog/wp-content/uploads/2022/11/2.png');
    var assistantMessage6 = await getVisionMessage('https://www.despachantedok.com.br/blog/wp-content/uploads/2022/11/10-150x150.png');
    var assistantMessage7 = await getVisionMessage('https://www.despachantedok.com.br/blog/wp-content/uploads/2022/11/12-150x150.png');
    var assistantMessage8 = await getVisionMessage('https://www.despachantedok.com.br/blog/wp-content/uploads/2022/11/9-150x150.png');
    var assistantMessage9 = await getVisionMessage('https://www.motor24.pt/files/2018/06/15-800x533_c.jpg');

    if (condition === "condition1" && assistantMessage1){
      generate_message(assistantMessage1.content.replaceAll('\n','<br/>'), assistantMessage1.role);
    }else if(condition === "condition2" && assistantMessage2){
      generate_message(assistantMessage2.content.replaceAll('\n','<br/>'), assistantMessage2.role);
    }else if(condition === "condition3" && assistantMessage3){
      generate_message(assistantMessage3.content.replaceAll('\n','<br/>'), assistantMessage3.role);
    }else if(condition === "condition4" && assistantMessage4){
      generate_message(assistantMessage4.content.replaceAll('\n','<br/>'), assistantMessage4.role);
    }else if(condition === "condition5" && assistantMessage5){
      generate_message(assistantMessage5.content.replaceAll('\n','<br/>'), assistantMessage5.role);
    }else if(condition === "condition6" && assistantMessage6){
      generate_message(assistantMessage6.content.replaceAll('\n','<br/>'), assistantMessage6.role);
    }else if(condition === "condition7" && assistantMessage7){
      generate_message(assistantMessage7.content.replaceAll('\n','<br/>'), assistantMessage7.role);
    }else if(condition === "condition8" && assistantMessage8){
      generate_message(assistantMessage8.content.replaceAll('\n','<br/>'), assistantMessage8.role);
    }else if(condition === "condition9" && assistantMessage9){
      generate_message(assistantMessage9.content.replaceAll('\n','<br/>'), assistantMessage9.role);
    }
  }
  
  var INDEX = 0;
  function generate_message(msg, type) {
    INDEX++;

    var str = "";
    str += "<div id='cm-msg-" + INDEX + "' class='chat-msg " + type + "'>";
    str += "  <div class='cm-msg-text'>";
    str += msg;
    str += "  </div>";
    str += "</div>";
    document.querySelector(".chat-logs").innerHTML += str;
    document.querySelector("#cm-msg-" + INDEX).style.display = "block";
    
    if (type == "user") {
      // select the chat-input element by its id and set its value to empty
      document.querySelector("#chat-input").value = "";
    }
    // select the chat-logs element by its class name and scroll it to the bottom
    document.querySelector(".chat-logs").scrollTop =
      document.querySelector(".chat-logs").scrollHeight;
  }
  
  function getMessageHistory() {
    // Janela deslizante de histórico 
    const maxHistory = 50;
    let historyWindow = 0;
    if (INDEX > maxHistory) {
      historyWindow = INDEX - maxHistory;
    }
    
    var messages = new Array();
    for (let i = INDEX-1; i > historyWindow; i--) {
      var msgElement = document.querySelector('#cm-msg-' + i);
      
      messages.push({
        content: msgElement.children[0].innerHTML,
        role: msgElement.classList[1]
      })
    }

    return messages.reverse();
}
