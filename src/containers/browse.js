import React, {useState, useContext} from 'react';
import { FirebaseContext } from '../context/firebase';
import {SelectProfileContainer} from './profiles';

export function BrowseContainer({slides}) {
    const [profile, setProfile] = useState({});
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    return <SelectProfileContainer  user={user}  setProfile={setProfile}/>
}