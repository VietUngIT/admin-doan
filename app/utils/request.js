import axios from 'axios';

const API_BASE_URL = 'http://localhost:8083/';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      
      if (response.data.e ==11) {        
        message.error("Phiên làm việc hết hạn ! Mời đăng nhập lại !")    
        window.localStorage.removeItem('userInfo');
        browserHistory.push('/');
      }else{  
        return response; 
      }
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