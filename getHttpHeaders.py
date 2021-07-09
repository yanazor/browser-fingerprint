import time
import re
from collections import defaultdict


def get_http_accept_headers() -> object:
    d = defaultdict(list)
    time.sleep(1)
    f = open('logs.log', 'r')
    accept = ''
    accept_enc = ''
    accept_lang = ''
    count = 0
    cmatch = 0
    for line in f:
        if count < 16:
            count += 1
            match = re.findall(r'Accept[0-9a-zA-Z- :.;=/,+*]*', line)
            if match:
                cmatch += 1
            if cmatch == 1:
                for i in match:
                    accept += i.lstrip("Accept:")
                    d['accept'] = accept
            elif cmatch == 2:
                for i in match:
                    accept_enc += i.lstrip("Accept-Encoding:")
                    d['acceptEnc'] = accept_enc
            elif cmatch == 3:
                for i in match:
                    accept_lang += i.lstrip("Accept-Language:")
                    d['acceptLang'] = accept_lang

    return d
