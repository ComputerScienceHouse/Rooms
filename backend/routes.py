from server import APP
from flask import Flask

# Rooms
@App.route('/api/v1/rooms', methods=['GET'])
def fetch_rooms():
    pass

@App.route('api/v1/room/<room_number>/<uid>', methods=['DELETE'])
def remove_occupant(room_number, uid):
    pass 

# Housing Queue
@App.route('/api/v1/queue', methods=['GET', 'POST'])
def fetch_queue():
    pass

@App.route('/api/v1/queue/<uid>')
def remove_member(uid):
    pass