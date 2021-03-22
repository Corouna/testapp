/* API collections */

import axios from 'axios';

const host = 'https://api-app.zinguist.com';

export const Conversation = {
    getConversationById : (id) => {
        const config = {
            method: 'GET',
            url: `${host}/conversations-v2/${id}`,
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWE3ODMzMmZhNmRjMGNjOTE2NjNmMCIsImlhdCI6MTYxNjEyNDY1OCwiZXhwIjoxNjQ3NjYwNjU4fQ.KkVqpDSsctqB9TafUcjvs6nE4wanDHdrLOCMM65axtI'
            }
        };

        return axios(config);
    },
    getAllConversation : () => {
        const config = {
            method: 'GET',
            url: `${host}/conversations-v2`,
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWE3ODMzMmZhNmRjMGNjOTE2NjNmMCIsImlhdCI6MTYxNjEyNDY1OCwiZXhwIjoxNjQ3NjYwNjU4fQ.KkVqpDSsctqB9TafUcjvs6nE4wanDHdrLOCMM65axtI'
            }
        };

        return axios(config);
    },
    getToken : (body) => {
        const data  = JSON.stringify({ "identifier":"calin.tamas@yopeso.com","password":"12345678" });
        const config = {
            method: 'POST',
            url: `${host}/auth/local`,
            headers: { 
            'Content-Type': 'application/json'
            },
            data : data
        }
        return axios(config);
    }
}