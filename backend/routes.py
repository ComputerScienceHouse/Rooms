from backend import APP
from flask import Flask
from .ldap_wrapper import LDAPManager

# Rooms
@APP.route('/api/v1/rooms', methods=['GET'])
def fetch_rooms():
    manager = LDAPManager()
    residents = manager.get_live_onfloor()
    return residents 

@APP.route('/api/v1/room/<room_number>/<uid>', methods=['DELETE'])
def remove_occupant(room_number, uid):
    pass 

# Housing Queue
@APP.route('/api/v1/queue', methods=['GET', 'POST'])
def fetch_queue():
    pass

@APP.route('/api/v1/queue/<uid>')
def remove_member(uid):
    pass