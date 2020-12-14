import axios from 'axios'; //导入axios模块
export const getTodoList = params => { //get to do 
  return axios.get(`/todo/list`, { //
    params: params
  });
};
export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params).then(res => res.data);
};