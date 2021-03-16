"""
The application setup and initialization code lives here
"""

import os
from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

APP = Flask(__name__)

# Load file based configuration overrides if present
_root_dir = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
APP.config.from_pyfile(os.path.join(os.path.join(_root_dir), 'backend/config.env.py'))

_pyfile_config = os.path.join(_root_dir, "backend/config.py")
if os.path.exists(_pyfile_config):
    APP.config.from_pyfile(os.path.join(_pyfile_config))

db = SQLAlchemy(APP)
migrate = Migrate(APP, db)

from . import models
