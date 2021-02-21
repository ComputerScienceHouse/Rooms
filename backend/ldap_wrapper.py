"""
A module in charge of abstracting various ldap functions
"""
from dataclasses import dataclass
import ldap
from ldap.ldapobject import ReconnectLDAPObject
import srvlookup
from . import APP

room_numbers = ['3009', '3013', '3016', '3020',
                '3050', '3051', '3054', '3055',
                '3063', '3067', '3070', '3071',
                '3086', '3090', '3094', '3103',
                '3106', '3110', '3111', '3126' ]

@dataclass
class Resident:
    """
    Class that holds propreties for a resident of CSH
    """
    username: str
    room_number: str
    housing_points: int

class LDAPManager:
    """
    class that abstracts various ldap functions
    """
    __ldap_users_ou__ = 'cn=users,cn=accounts,dc=csh,dc=rit,dc=edu'
    __base_ou__ = 'cn=accounts,dc=csh,dc=rit,dc=edu'

    def __init__(self):
        ldap_srvs = srvlookup.lookup('ldap', 'tcp', 'csh.rit.edu')
        ldap_uris = ['ldaps://' + uri.hostname for uri in ldap_srvs]

        for uri in ldap_uris:
            try:
                self.__con__ = ReconnectLDAPObject(uri)
                break
            except (ldap.SERVER_DOWN, ldap.TIMEOUT):
                continue

        self.__con__.simple_bind_s(APP.config['LDAP_BIND_DN'], APP.config['LDAP_BIND_PW'])

    def get_live_onfloor(self):
        """
        Returns a dictionary with room numbers mapped to a list of Resident objects
        """
        query = f'(&(memberOf=cn=onfloor,cn=groups,{self.__base_ou__})(memberOf=cn=current_student,cn=groups,{self.__base_ou__})(roomnumber=*))'
        residents = self.__con__.search_s(self.__ldap_users_ou__, ldap.SCOPE_SUBTREE, query, ['uid', 'housingpoints', 'roomnumber'])
        room_assignments = { num: [] for num in room_numbers }
        for resident in residents:
            res_info = resident[1]
            uid = res_info['uid'][0].decode('utf-8')
            room_number = res_info['roomnumer'][0].decode('utf-8')
            housing_points = res_info['housingpoints'][0].decode('utf-8')
            room_assignments[res_info[room_number]] = Resident(uid, room_number, housing_points)
        return room_assignments

    def fetch_house_points(self, uid):
        """
        """
        pass
