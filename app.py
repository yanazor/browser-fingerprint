import logging
import os
import json


import getHttpHeaders
from flask import Flask, render_template, request

app = Flask(__name__)


@app.before_request
def log_request_info():
    app.logger.debug(request.headers)
    app.logger.debug(request.get_data())
    logging.basicConfig(filename="logs.log", level=logging.DEBUG)


app._static_folder = os.path.abspath("templates/static/")


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/browser_fingerprint/')
def browser_fingerprint():
    headers = json.dumps(getHttpHeaders.get_http_accept_headers())
    fl = open('templates/static/headers.json', 'w')
    fl.write(headers)
    fl.close()
    return render_template("browser_fingerprint.html")


if __name__ != "__main__":
    pass
else:
    f = open('logs.log', 'w')
    f.close()
    app.run(host='0.0.0.0', port=8080, debug=True)
