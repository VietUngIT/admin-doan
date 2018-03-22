import axios from 'axios';

const API_BASE_URL = 'http://localhost:8083/';

function checkStatus(response) {
  console.log("response: "+response)
    if (response.status >= 200 && response.status < 300) {
        return response; 
    }else{
      message.error("Không thể gọi api !" + response.status) 
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

export function callAPILoginPhone(phone,password) {
  const url = `${API_BASE_URL}adminuser?ph=${phone}&p=${password}&t=login`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}
export function callAPIGetUserInfo(phone,password) {
  const url = `${API_BASE_URL}manageruser?ph=${phone}&p=${password}&t=get`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}
export function callAPIChangeNameUserInfo(phone,password,name) {
  const url = `${API_BASE_URL}manageruser?ph=${phone}&p=${password}&name=${name}&t=cname`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}
export function callAPIChangePhoneUserInfo(phone,password,newPhone) {
  const url = `${API_BASE_URL}manageruser?ph=${phone}&p=${password}&nph=${newPhone}&t=cphone`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}

export function callAPIChangeAddressUserInfo(phone,password,address) {
  const url = `${API_BASE_URL}manageruser?ph=${phone}&p=${password}&address=${address}&t=caddress`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}
export function callAPIChangeAvatarUserInfo(ph,p,avatar) {
  const url = `${API_BASE_URL}upload`;
  var formData = new FormData();
  formData.append("t","cavatar")
  formData.append("ph",ph);
  formData.append("p",p);
  formData.append("avatar",avatar);
  return axios.post(url,formData)
    .then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}

export function callAPIChangePassUserInfo(phone,password,oldPass,newPass) {
  const url = `${API_BASE_URL}manageruser?ph=${phone}&p=${password}&pass=${oldPass}&np=${newPass}&t=cpass`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}

export function callAPIGetListCategoryNews(phone,password) {
  const url = `${API_BASE_URL}categorynews?ph=${phone}&p=${password}&t=getall`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}

export function callAPIAddCategoryNews(phone,password,name) {
  const url = `${API_BASE_URL}admincatenews?ph=${phone}&p=${password}&t=add&name=${name}`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}
export function callAPIDelCategoryNews(phone,password,id) {
  const url = `${API_BASE_URL}admincatenews?ph=${phone}&p=${password}&t=del&id=${id}`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}
export function callAPIEditCategoryNews(phone,password,id,name) {
  const url = `${API_BASE_URL}admincatenews?ph=${phone}&p=${password}&t=edit&id=${id}&name=${name}`;
  return axios({ url,
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((data) => ( {data}))
    .catch((error) => ({ error }));
}