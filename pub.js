window.les = {};
const sols = [
  {
    name: `Friday's dead end`,
    review: ``,
    solution: (str) => {
      let vowels = ["a","e","i","o","u"];
      let  trolls = "";
      for (let i = 0; i < vowels.length; i++ ) {
        //str.replace(/i/g,"");
        //data.replace(new RegExp(`[${regex}]`, 'gi'), '')

        let vowel = vowels[i];
        //let regex = new RegExp(`[${vowel}]`, 'gi');
        let regex = `[^${vowel}/gi]$`;
        //trolls = str.replace(new RegExp(regex, 'gi'), '');
        trolls = str.replace("/i/gi", '');
      }
      return trolls;
    }
  },
  {
    name: `Tamás Szántai v1`,
    review: ``,
    solution: (str) => {
      let vowels = ["a","e","i","o","u", "A", "E", "I", "O", "U"];

      for (let i = 0; i < vowels.length; i++ ) {
        let text = str.split(vowels[i]);
        str = text.join('');
      }
      return str;
    }
  },
  {
    name: `Tamás Szántai v2`,
    review: ``,
    solution: (str) => {
      str = str.replace(/[aeiou]/gi,"");
      return str;
    }
  },
  {
    name: `Nagy Lajos v1`,
    review: ``,
    solution: (str) => {
      const regexMaganhangzok = /a|e|i|o|u|A|E|I|O|U/g;
      const errecsereldki = '';
      const result = str.replace(regexMaganhangzok, errecsereldki).replace(/  +/g, ' ');
      return result;
    }
  },
  {
    name: `Nagy Lajos v2`,
    review: ``,
    solution: (str) => {
      const regexMinta = /[^aeiou]/gi;
      const maganhangzoknelkul = str.match(regexMinta).join('');
      return maganhangzoknelkul;
    }
  },
  {
    name: `Balint Borbély`,
    review: ``,
    solution: (str) => {
      for (let i = 0; i < str.length; i++) {

          let vowels = /[aeiou]/gi;
          comment = str.replace(vowels, '');
      }
      return comment;
    }
  },
  {
    name: `Atom's Friday`,
    review: ``,
    solution: (str) => {
      let vowels = ["a","e","i","o","u"];
      for (vowel of vowels) {
        let regex = new RegExp(`[${vowel}]`, 'gi');
        str = str.replace(regex, "");
      }
      return str;
    }
  }
];

const main = () => {
  les.root = document.getElementById('root');

  les.root.insertAdjacentHTML("beforeend", `
    <div class="getIt">
      <label>Text tester</label>
      <input id="input" type="text" value="I hate when I'm studying and a velociraptor throws bananas at me."/>
      <button type="button" id="button">Test</button>
    </div>
    <div id="sols"></div>
  `);
  renderSols();

  document.getElementById('input').focus();
  document.getElementById('button').addEventListener("click", renderSols);
}

const renderSols = () => {
  les.sols = document.getElementById('sols');
  les.sols.innerHTML = "";

  for (sol of sols) {
    les.sols.insertAdjacentHTML("beforeend", renderSol(sol.name, sol.solution, sol.review));
  }
  les.root.insertAdjacentHTML("beforeend", `
    <label>Have a nice week!</label>
  `);

  Prism.highlightAll();

}

const renderSol = (name, code, note) => {
  return `
    <div class="sol">
      <h2>${name}</h2>
      <code class="language-javascript">${code}</code>
      <aside>Result: ${sol.solution(document.getElementById('input').value)}</aside>
      <p>${note}</p>
    </div>
  `;
}

window.addEventListener("load", main);
