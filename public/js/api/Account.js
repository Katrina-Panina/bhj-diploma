"use strict";
/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
 class Account extends Entity {
    /**
     * Информация о счете
     * */
    static URL = '/account';
    
    static get(id = '', callback){
      createRequest({
        method: 'GET',
        url: this.URL + '/' + id,
        callback: callback
      });
    }
  }