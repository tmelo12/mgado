import Realm from 'realm'

import CampoSchema from '../schemas/CampoSchema'
import AnimalSchema from '../schemas/AnimalSchema'

export default function getRealm(){
    return Realm.open({
        schema: [ CampoSchema, AnimalSchema ],
    });
}