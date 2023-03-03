 // Declaração variáveis
 const question = document.querySelector("#question");
 const answersBox = document.querySelector("#answers-box");
 const quizzContainer = document.querySelector("#quizz-container");
 const scoreContainer = document.querySelector("#score-container");
 const letters = ["a", "b", "c", "d"];
 let points = 0;
 let actualQuestion = 0;
 
 // Perguntas
 const questions = [
   {
     "question": "Assina-le a alternativa correta quando se trata de componentes",
     "answers": [
       {
         "answer": "Componentes podem ser reutilizados e reaproveitados em vários lugares",
         "correct": true
       },
       {
         "answer": "front-ends com componentes não precisam de back-end",
         "correct": false
       },
       {
         "answer": "Componentes são lentos e nada reaproveitáveis",
         "correct": false
       },
       {
         "answer": "Componentes ajudam a criar telas mais bonitas",
         "correct": false
       },
     ]
   },
   {
     "question": "Uma forma de declarar variável em JavaScript:",
     "answers": [
       {
         "answer": "$var",
         "correct": false
       },
       {
         "answer": "var",
         "correct": true
       },
       {
         "answer": "@var",
         "correct": false
       },
       {
         "answer": "#let",
         "correct": false
       },
     ]
   },
   {
     "question": "O que é a propriedade @input do Angular ?",
     "answers": [
       {
         "answer": "É uma maneira de compartilhar dados do componente filho para o pai",
         "correct": false
       },
       {
         "answer": "É uma maneira de inserir dados do componente filho para o pai",
         "correct": false
       },
       {
         "answer": "É uma maneira de compartilhar dados do componente pai para o filho.",
         "correct": true
       },
       {
         "answer": "É uma maneira de criar dados do componente pai para o filho",
         "correct": false
       },
     ]
   },

   {
    "question": "Qual a diferença entre os métodos map e forEach??",
    "answers": [
      {
        "answer": "Não há diferença",
        "correct": false
      },
      {
        "answer": "O retorno: o método forEach retorna um array, enquanto map retorna 'undefined'",
        "correct": false
      },
      {
        "answer": "ForEach é um método equivalente a 'reduce'",
        "correct": false
      },
      {
        "answer": "O retorno: o método map retorna um array, enquanto forEach retorna 'undefined'",
        "correct": true
      },
    ]
  },

  {
    "question": `Dado o código :\nlet array = [1, 2, 3, 4];\narray.reduce((current, acc) => current + acc);\nQual será o retorno?`,
    "answers": [
      {
        "answer": "[]",
        "correct": false
      },
      {
        "answer": "[2, 4, 5, 8]",
        "correct": false
      },
      {
        "answer": "6",
        "correct": false
      },
      {
        "answer": "10",
        "correct": true
      },
    ]
  },


  {
    "question": `Assinale a alternativa que possui o valor retornado pela função flat:\n

    const frutas = ["amora", ["laranja", ["melancia"], "acerola"]];\n
    
    console.log(frutas.flat(2));`,
    "answers": [
      {
        "answer": "undefined",
        "correct": false
      },
      {
        "answer": "'amora laranja acerola'",
        "correct": false
      },
      {
        "answer": "['amora', 'laranja', 'melancia', 'acerola']",
        "correct": true
      },
      {
        "answer": "Nenhuma das alternativas",
        "correct": false
      },
    ]
  },


  {
    "question": `Qual comando deve ser usado para que o objeto não sofra mudança sob nenhuma circunstância?`,
    "answers": [
      {
        "answer": "obj.quaxxor()",
        "correct": false
      },
      {
        "answer": "freeze.object()",
        "correct": false
      },
      {
        "answer": "object.stay()",
        "correct": false
      },
      {
        "answer": "object.freeze()",
        "correct": true
      },
    ]
  },

   {
    "question": `Quais são os eixos possíveis ao utilizar a propriedade flex-direction?`,
    "answers": [
      {
        "answer": "Apenas row",
        "correct": false
      },
      {
        "answer": "Column e row",
        "correct": true
      },
      {
        "answer": "Não é possível modificar o eixo principal de um flex container",
        "correct": false
      },
      {
        "answer": "column e wrap",
        "correct": false
      },
    ]
  },

     {
    "question": `Qual o efeito de aplicar a seguinte propriedade e valor:  display: flex ?`,
    "answers": [
      {
        "answer": "Definir crescimento de um container",
        "correct": false
      },
      {
        "answer": "Definir o eixo inicial do container",
        "correct": false
      },
      {
        "answer": "Inicializar a quebra de linha do container",
        "correct": false
      },
      {
        "answer": "Inicializar o flex container, principal elemento que irá possuir flex itens",
        "correct": true
      },
    ]
  },

      {
    "question": `Qual a propriedade que possibilita fazer o alinhamento individual de um flex item em relação ao eixo do flex container?`,
    "answers": [
      {
        "answer": "align-content",
        "correct": false
      },
      {
        "answer": "align-self",
        "correct": true
      },
      {
        "answer": "justify-content",
        "correct": false
      },
      {
        "answer": "align-items",
        "correct": false
      },
    ]
  },

  {
    "question": `Qual é o valor que colocamos na propriedade margin para nos ajudar a alinhar elementos horizontalmente?`,
    "answers": [
      {
        "answer": "center",
        "correct": false
      },
      {
        "answer": "Nenhuma das alternativas",
        "correct": false
      },
      {
        "answer": "100%",
        "correct": false
      },
      {
        "answer": "auto",
        "correct": true
      },
    ]
  },



  
  {
    "question": `Dado o código abaixo:
    <html>
      <head>
        <title>Documento</title>
      </head>
      <body>
        <h1>Título principal</h1>
    
        <section id="sobre" class="full-screen">
          <p>Texto de apresentação</p>
        </section>
      </body>
    </html>
    
    Como poderia ser selecionado o elemento <h1>Título principal</h1>?\n`,
    "answers": [
      {
        "answer": "document.getElementById(‘h1’)",
        "correct": false
      },
      {
        "answer": "document.getElementsByTagName(‘h1’)[0]",
        "correct": true
      },
      {
        "answer": "document.getElementsByClassName(‘h1’)[0]",
        "correct": false
      },
      {
        "answer": "document.getElementsByTagName(‘h1’)",
        "correct": false
      },
    ]
  },
 ]
 
 // Substituição do quizz para a primeria pergunta
 function init() {
   // criar a primeira pergunta
   createQuestion(0);
 }
 
 // Cria uma pergunta
 function createQuestion(i) {
 
   // Limpar a questão anterior
   const oldButtons = answersBox.querySelectorAll("button");
 
   oldButtons.forEach(function(btn) {
     btn.remove();
   });
 
   // Alterar o texto da pergunta
   const questionText = question.querySelector("#question-text");
   const questionNumber = question.querySelector("#question-number");
 
   questionText.textContent = questions[i].question;
   questionNumber.textContent = i + 1;
 
   // Insere as alternativas
   questions[i].answers.forEach(function(answer, i) {
 
     // Cria o template do botão do quizz
     const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
 
     const letterBtn = answerTemplate.querySelector(".btn-letter");
     const answerText = answerTemplate.querySelector(".question-answer");
 
     letterBtn.textContent = letters[i];
     answerText.textContent = answer['answer'];
 
     answerTemplate.setAttribute("correct-answer", answer["correct"]);
 
     // Remover hide e template class
     answerTemplate.classList.remove("hide");
     answerTemplate.classList.remove("answer-template");
 
     // Inserir a alternativa na tela
     answersBox.appendChild(answerTemplate);
 
     // Inserir um evento de click no botão
     answerTemplate.addEventListener("click", function() {
       checkAnswer(this);
     });
 
   });
 
   // Incrementar o número da questão
   actualQuestion++;
 
 }
 
 // Verificando resposta do usuário
 function checkAnswer(btn) {
 
   // selecionar todos botões
   const buttons = answersBox.querySelectorAll("button");
 
   // verifica se a resposta está correta e adiciona classes nos botões
   buttons.forEach(function(button) {
 
     if(button.getAttribute("correct-answer") === "true") {
 
       button.classList.add("correct-answer");
 
       // checa se o usuário acertou a pergunta
       if(btn === button) {
         // incremento dos pontos
         points++;
       }
 
     } else {
 
       button.classList.add("wrong-answer");
 
     }
 
   });
 
   // Exibir próxima pergunta
   nextQuestion();
 
 }
 
 // Exibie a próxima pergunta no quizz
 function nextQuestion() {
 
   // timer para usuário ver as respostas
   setTimeout(function() {
 
     // verifica se ainda há perguntas
     if(actualQuestion >= questions.length) {
       // apresenta a msg de sucesso
       showSucccessMessage();
       return;
     }
 
     createQuestion(actualQuestion);
 
   }, 700);
 
 }
 
 // Exibe a tela final
 function showSucccessMessage() {
 
   hideOrShowQuizz();
 
   // trocar dados da tela de sucesso
 
   // calcular o score
   const score = ((points / questions.length) * 100).toFixed(2);
 
   const displayScore = document.querySelector("#display-score span");
 
   displayScore.textContent = score.toString();
 
   // alterar o número de perguntas corretas
   const correctAnswers = document.querySelector("#correct-answers");
   correctAnswers.textContent = points;
 
   // alterar o total de perguntas
   const totalQuestions = document.querySelector("#questions-qty");
   totalQuestions.textContent = questions.length;
 
 }
 
 // Mostra ou esconde o score
 function hideOrShowQuizz() {
   quizzContainer.classList.toggle("hide");
   scoreContainer.classList.toggle("hide");
 }
 
 // Reiniciar Quizz
 const restartBtn = document.querySelector("#restart");
 
 restartBtn.addEventListener("click", function() {
 
   // zerar o jogo
   actualQuestion = 0;
   points = 0;
   hideOrShowQuizz();
   init();
 
 });
 
 // Inicialização do Quizz
 init();