// noinspection JSVoidFunctionReturnValueUsed,JSCheckFunctionSignatures

let keys = [];


let xhr = new XMLHttpRequest();
xhr.open("GET", "../static/headers.json");
  xhr.addEventListener('load', arrPush);
  xhr.send();
  function arrPush() {

      let json = this.responseText;
      let obj = JSON.parse(json);
      let accept = obj['accept'];
      let acceptEnc = obj['acceptEnc']
      let acceptLang = obj['acceptLang']
      // and do something with obj here

      keys.push(getPluginsString());//0
      keys.push(navigator.userAgent);//1
      keys.push(strng);//2
      keys.push(getCanvasFingerprint());//3
      keys.push(navigator.language);//4
      keys.push(getScreenResolution().join('x'));//5
      keys.push(screen.colorDepth);//6
      keys.push(accept) //accept headers//7
      keys.push(getTimeZone());//8
      keys.push(renderer);//9
      keys.push(navigator.platform);//10
      keys.push(vendor);//11
      keys.push(acceptEnc);//добавить//12
      keys.push(acceptLang);//добавить//13
      keys.push(usedAdblock);//14
      keys.push(navigator.doNotTrack);//15
      keys.push(hasLocalStorage());//16
      keys.push(hasSessionStorage());//17
      keys.push(navigator.cookieEnabled);//18
      console.log(keys)
      let dict = {};
      let key;
      key = ['List of Plugins', 'User-agent', 'List of fonts', 'Canvas', 'Language', 'Resolution', 'ColorDepth', 'HTTP Accept Header','Timezone','WebGL Renderer', 'Platform', 'WebGL Vendor', 'Content-Encoding','Accept','Use of an adblock','DoNotTrack', 'Use of local storage', 'Use of session storage','Cookie enabled'];
      for (let i = 0; i < key.length; i++) {
          dict[key[i]] = [];
          for (let j = 0; j < keys.length; j++) {
              if (i===j){
              dict[key[j]] = keys[j];
          }}
      }


      Headers= JSON.parse(JSON.stringify(dict))

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
              for (let j = 0; j < 2; j++) {
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


                  }
                  if (i === 1) if (j === 0) {
                      td = tr.insertCell();
                      td.appendChild(document.createTextNode('List of plugins'));
                      td.style.border = '1px solid black';
                  }
                  if (i === 1) if (j === 1) {
                      td = tr.insertCell();
                      td.appendChild(document.createTextNode(keys[0]));
                      td.style.border = '1px solid black';

                  }
                  if (i === 2) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('User-agent'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[1]));
                          td.style.border = '1px solid black';
                      }

                  }
                  if (i === 3) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('List of fonts'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[2]));
                          td.style.border = '1px solid black';
                      }

                  }
                  if (i === 4) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Canvas'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[3]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 5) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Language'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[4]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 6) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Resolution'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[5]));
                          td.style.border = '1px solid black';

                      }
                  }
                  if (i === 7) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('ColorDepth'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[6]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 8) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('HTTP Accept Header'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[7]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 9) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Timezone'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[8]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 10) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('WebGL Renderer'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[9]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 11) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Platform'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[10]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 12) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('WebGL Vendor'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[11]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 13) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Content-Encoding'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[12]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 14) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Accept - Language'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[13]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 15) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Use of an adblock'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[14]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 16) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('DoNotTrack'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[15]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 17) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Use of local storage'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[16]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 18) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Use of session storage'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[17]));
                          td.style.border = '1px solid black';
                      }
                  }
                  if (i === 19) {
                      if (j === 0) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode('Cookie enabled'));
                          td.style.border = '1px solid black';
                      }
                      if (j === 1) {
                          td = tr.insertCell();
                          td.appendChild(document.createTextNode(keys[18]));
                          td.style.border = '1px solid black';
                      }
                  }
              }
              body.appendChild(tbl);

          }

      };
      tableCreate();
  }
