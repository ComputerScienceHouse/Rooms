import os
from os import environ as env
from os import environ as env

# LDAP
LDAP_BIND_DN = env.get("ROOMS_LDAP_BIND_DN", "")
LDAP_BIND_PW = env.get("ROOMS_LDAP_BIND_PW", "")

# DB Info
SQLALCHEMY_DATABASE_URI = env.get("SQLALCHEMY_DATABASE_URI", "postgresql://postgres:mysecretpassword@localhost:5432/postgres")
