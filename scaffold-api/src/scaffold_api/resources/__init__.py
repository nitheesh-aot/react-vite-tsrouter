# Copyright © 2024 Province of British Columbia
#
# Licensed under the Apache License, Version 2.0 (the 'License');
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an 'AS IS' BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Exposes all of the resource endpoints mounted in Flask-Blueprint style.

Uses restplus namespaces to mount individual api endpoints into the service.

All services have 2 defaults sets of endpoints:
 - ops
 - meta
That are used to expose operational health information about the service, and meta information.
"""

from flask import Blueprint


from .apihelper import Api

from .user import API as USER_API

__all__ = ('API_BLUEPRINT',)

URL_PREFIX = '/api/'
API_BLUEPRINT = Blueprint('API', __name__, url_prefix=URL_PREFIX)

authorizations = {
    'Bearer Auth': {
        'type': 'apiKey',
        'in': 'header',
        'name': 'Authorization',
        'description': 'Add "Bearer " before your token'
    }
}

API = Api(
    API_BLUEPRINT,
    title='SCAFFOLD API',
    version='1.0',
    description='The Core API for SCAFFOLD',
    authorizations=authorizations
)

# HANDLER = ExceptionHandler(API)

API.add_namespace(USER_API)
