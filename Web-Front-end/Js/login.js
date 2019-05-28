Vue.component('vue-login', {
    props: ['todo'],
    template: '\
    <form>\
        <div class="form-group">\
            <label for="usr">用户名:</label>\
            <input type="text" class="form-control" id="usr" v-model="todo.username">\
        </div>\
        <div class="form-group">\
            <label for="pwd">密码:</label>\
            <input type="password" class="form-control" id="pwd" v-model="todo.password">\
        </div>\
        <div class="form-check">\
            <input type="checkbox" class="form-check-input" id="exampleCheck1">\
            <label class="form-check-label" for="exampleCheck1">Check me out</label>\
        </div>\
        <button type="submit" class="btn btn-primary">登入</button>\
        <button type="submit" class="btn btn-primary">注册</button>\
    </form>\
    '
})
var login = new Vue({
    el: '#my-login',
    data: {
        login_massage: {
            id: 0,
            username:'',
            password:'',
            ischeck:false,
            login_url:'',
            signin_url:''
        }
    }
})