"""
Defines the application's database models
"""

from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from . import db

class Rooms(db.Model):
    __tablename__ = 'rooms'
    room_number = Column(Integer, primary_key=True)

# This table is only going to hold intro members because upperclassmen information is stored in LDAP
class Residents(db.Model):
    __tablename__ = 'residents'
    rit_username = Column(String(7), primary_key=True)
    full_name = Column(String(64), nullable=False)
    room_number = relationship("Rooms") 

class HousingQueue(db.Model):
    __tablename__ = 'housing_queue'
    username = Column(String(32), primary_key=True)
