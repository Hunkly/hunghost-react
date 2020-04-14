import React, {useEffect, useState} from 'react';
import UserModel from '../../shared/models/User';
import StyledUserPage from './UserPage.styled';
import { PersonalInformation } from '../../shared/components/PersonalInformation/PersonalInformation.component';
import ProfileMenu from "../../shared/components/ProfileMenu";
import Subscribers from "../../shared/components/Subscribers";
import Subscriptions from "../../shared/components/Subscriptions";
import {PostsContainer} from "../../shared/components/Posts/Posts.container";
import axios from "axios";
import {checkAuthentication} from "../../actions/current";

interface IUserPageProps {
  user: UserModel | null;
}

export default function UserPage({user}: IUserPageProps){
    const [userId, setUserId] = useState(0);
    useEffect(() => {
        checkAuthentication();
        axios({
            method: 'get',
            url: `http://localhost:9005/authuser`,
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                'Accept': 'application/json',
                'Content-Type': 'x-www-form-urlencoded',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
            .then(res => {
                setUserId(res.data.id);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);
    if (!user) {
      return (
          <StyledUserPage>
            <div>Loading...</div>
          </StyledUserPage>
      );
    }
    let mode: 'profile' | 'otherProfile' = 'otherProfile';
    if(user.id === userId) {
        mode = 'profile'
    } else {
        mode = 'otherProfile'
    }
    return (
          <StyledUserPage>
            <div className="page-container">
              <div className = "page-information-box">
                <ProfileMenu viewMode={mode} user={user}/>
                <PersonalInformation viewMode={mode} user={user} />
              </div>
              <PostsContainer viewMode={mode} user={user}/>
            </div>
            <div className="page__friend-box">
                <Subscribers user={user}/>
                <Subscriptions user={user} />
            </div>
          </StyledUserPage>
    );
}
