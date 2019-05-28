Vue.component('vue-signin',{
    props:['todo'],
    template:'\
    <form>\
        <div class="form-group">\
            <label for="usr">用户名:</label>\
            <input type="text" class="form-control" id="usr"v-model="todo.username">\
        </div>\
        <div class="form-group">\
            <label for="pwd">密码:</label>\
            <input type="password" class="form-control" id="pwd"v-model="todo.password">\
        </div>\
        <div class="form-group">\
            <label for="pwd">再出输入密码:</label>\
            <input type="password" class="form-control" id="pwd">\
        </div>\
        <button type="submit" class="btn btn-primary">登入</button>\
        <button type="submit" class="btn btn-primary">注册</button>\
    </form>\
    '
})
var signin = new Vue({
    el: '#my-signin',
    data: {
        signin_massage: {
            id: 0,
            username:'',
            password:'',
            login_url:'',
            signin_url:''
        }
    }
})