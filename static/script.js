

let keys = [];

function getFile(fileName){
    let  request = new XMLHttpRequest();
    request.open('GET', fileName, false);
    request.send(null);
    return  JSON.parse(request.responseText);
}
let headers = getFile('../static/headers.json');
let entropy = getFile('../static/entropy.json');
let ig = getFile('../static/ig.json');

      keys.push(getPluginsString());//0
      keys.push(navigator.userAgent);//1
      keys.push(strng);//2
      keys.push(getCanvasFingerprint());//3
      keys.push(navigator.language);//4
      keys.push(getScreenResolution().join('x'));//5
      keys.push(screen.colorDepth);//6
      keys.push(headers['accept']) //accept headers//7
      keys.push(getTimeZone());//8
      keys.push(renderer);//9
      keys.push(navigator.platform);//10
      keys.push(vendor);//11
      keys.push(headers['acceptEnc']);//добавить//12
      keys.push(headers['acceptLang']);//добавить//13
      keys.push(usedAdblock);//14
      keys.push(navigator.doNotTrack);//15
      keys.push(hasLocalStorage());//16
      keys.push(hasSessionStorage());//17
      keys.push(navigator.cookieEnabled);//18
      console.log(keys)
      let key;
      key = ['List of Plugins', 'User-agent', 'List of fonts', 'Canvas', 'Language', 'Resolution', 'ColorDepth', 'HTTP Accept Header', 'Timezone', 'WebGL Renderer', 'Platform', 'WebGL Vendor', 'Content-Encoding', 'Accept', 'Use of an adblock', 'DoNotTrack', 'Use of local storage', 'Use of session storage', 'Cookie enabled'];

      function convertToObj(key, keys) {

          let obj = {};

      // Using the foreach method
      key.forEach((k, i) => {
          obj[k] = keys[i]
      })
      return obj;

  }
    arr = JSON.stringify(convertToObj(key,keys));
      const xhr1 = new XMLHttpRequest();
      xhr1.open("POST", "/create/");
      xhr1.setRequestHeader("Content-Type", "application/json");
      xhr1.send(arr);

      let dict = {};


      for (let i = 0; i < key.length; i++) {
          dict[key[i]] = [];
          for (let j = 0; j < keys.length; j++) {
              if (i===j){
              dict[key[j]] = keys[j];
          }}
      }
    Headers= JSON.parse(JSON.stringify(dict))

      const keys_sort = Object.keys(entropy);
      let accordance = {'list_of_plugins':'List of plugins', 'useragent':'User-agent','list_of_fonts':'List of fonts',
      'canvas':'Canvas', 'language': 'Language', 'resolution':'Resolution', 'color_depth':'ColorDepth',
          'accept_headers':'HTTP Accept Header', 'timezone':'Timezone', 'WebGL_renderer':'WebGL Renderer',
          'platform':'Platform', 'WebGL_vendor':'WebGL Vendor', 'content_encoding':'Content-Encoding',
          'accept_lang': 'Accept - Language', 'adblock': 'Use of an adblock', 'donottrack':'DoNotTrack',
          'local_storage': 'Use of local storage', 'session_storage': 'Use of session storage',
          'cookie':'Cookie enabled'}
      let tableCreate;
      tableCreate = () => {
          let body, tbl;
          body = document.body;
          tbl = document.createElement('table');
          tbl.style.width = '950px';
          tbl.style.border = '1px solid black';


          let td;
          for (let i = 0; i < 20; i++) {
              let tr = tbl.insertRow();
              for (let j = 0; j < 4; j++) {
                  if (i === 0) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Attribute'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Value'));
                          td.style.border = '1px solid black';

                      }
                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Entropy'));
                          td.style.border = '1px solid black';

                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Information gain'));
                          td.style.border = '1px solid black';

                      }


                  }
                  if (i === 1) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 2) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                  }
                  if (i === 3) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                  }
                  if (i === 4) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 5) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 6) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 7) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 8) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 9) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 10) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 11) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 12) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 13) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 14) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 15) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 16) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 17) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 18) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 19) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(accordance[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }

                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(dict[accordance[keys_sort[i - 1]]]));
                          td.style.border = '1px solid black';

                      }

                      if (j === 2) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(entropy[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                      if (j === 3) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(ig[keys_sort[i - 1]]));
                          td.style.border = '1px solid black';
                      }
                  }
              }
              body.appendChild(tbl);

          }

      };
      tableCreate();
