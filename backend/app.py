"""
The Primary entry point for the Flask backend.
"""
from . import APP
from . import routes

if __name__ == '__main__':
    APP.run(host=APP.config['IP'], port=int(APP.config['PORT']))
