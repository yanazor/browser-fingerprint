import logging
import os
import json
import getHttpHeaders
from flask import Flask, render_template, request
import sqlite3
import calculation

app = Flask(__name__)


@app.before_request
def log_request_info():
    app.logger.debug(request.headers)
    app.logger.debug(request.get_data())
    logging.basicConfig(filename="static/logs.log",
                        level=logging.DEBUG)


# app._static_folder = os.path.abspath("../static")


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/browser_fingerprint/', methods=['GET', 'POST'])
def browser_fingerprint():
    headers = json.dumps(getHttpHeaders.get_http_accept_headers())
    fl = open('./static/headers.json', 'w')
    fl.write(headers)
    fl.close()
    with open('./static/entropy.json', 'w')as outfile:
        outfile.write(json.dumps(calculation.calc_entropy()))
    with open('./static/ig.json', 'w')as outfile:
        outfile.write(json.dumps(calculation.list_of_gain(calculation.calc_entropy())))
    return render_template("browser_fingerprint.html")


@app.route('/create/', methods=['GET', 'POST'])
def create():
    global result
    con = sqlite3.connect('fingerprints.s3db')
    cur = con.cursor()
    SQL = 'INSERT INTO users (' \
          'list_of_plugins, ' \
          'useragent , ' \
          'list_of_fonts,' \
          'canvas,' \
          'language,' \
          'resolution,' \
          'color_depth,' \
          'accept_headers,' \
          'timezone,' \
          'WebGL_renderer,' \
          'platform,' \
          'WebGL_vendor,' \
          'content_encoding,' \
          'accept_lang,' \
          'adblock,' \
          'donottrack,' \
          'local_storage,' \
          'session_storage,' \
          'cookie) VALUES (?, ?, ?,?, ?, ?, ?, ' \
          '?, ?, ?, ?, ?, ?,' \
          '?,?, ?, ?, ?, ?)'

    try:
        cur.execute(SQL, (request.json['List of Plugins'],
                          request.json['User-agent'],
                          request.json['List of fonts'],
                          request.json['Canvas'],
                          request.json['Language'],
                          request.json['Resolution'],
                          request.json['ColorDepth'],
                          request.json['HTTP Accept Header'],
                          request.json['Timezone'],
                          request.json['WebGL Renderer'],
                          request.json['Platform'],
                          request.json['WebGL Vendor'],
                          request.json['Content-Encoding'],
                          request.json['Accept'],
                          request.json['Use of an adblock'],
                          request.json['DoNotTrack'],
                          request.json['Use of local storage'],
                          request.json['Use of session storage'],
                          request.json['Cookie enabled'],))

        con.commit()
        result = {'result': 'OK', 'id': cur.lastrowid}
    except KeyError:
        cur.execute(SQL, (request.json['List of Plugins'],
                          request.json['User-agent'],
                          request.json['List of fonts'],
                          request.json['Canvas'],
                          request.json['Language'],
                          request.json['Resolution'],
                          request.json['ColorDepth'],
                          request.json['HTTP Accept Header'],
                          request.json['Timezone'],
                          request.json['WebGL Renderer'],
                          request.json['Platform'],
                          request.json['WebGL Vendor'],
                          request.json['Content-Encoding'],
                          request.json['Accept'],
                          request.json['Use of an adblock'],
                          '<null>',
                          request.json['Use of local storage'],
                          request.json['Use of session storage'],
                          request.json['Cookie enabled'],))
        con.commit()
        result = {'result': 'OK', 'id': cur.lastrowid}
    return result


if __name__ != "__main__":
    pass
else:
    os.system(r'> ./static/logs.log')
    app.run(host='0.0.0.0', port=8080, debug=True)
