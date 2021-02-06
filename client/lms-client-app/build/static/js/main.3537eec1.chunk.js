(this["webpackJsonplms-client-app"]=this["webpackJsonplms-client-app"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(1),r=n.n(s),c=n(24),i=n.n(c),o=n(12),l=n(13),d=n(15),j=n(14),h=n(11),u=n(29),b=n(63),O=n(17),p="GET_LESSONS",g="ADD_LESSON",m="LESSONS_LOADING",x="USER_LOADING",f="USER_LOADED",v="AUTH_ERROR",y="LOGIN_SUCCESS",S="LOGIN_FAIL",C="LOGOUT_SUCCESS",k="REGISTER_SUCCESS",N="REGISTER_FAIL",L="GET_ERRORS",w="CLEAR_ERRORS",A={lessons:[],loading:!1},E={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},I={msg:{},status:null,id:null},R=Object(u.c)({lesson:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(O.a)(Object(O.a)({},e),{},{lessons:t.payload,loading:!1});case m:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case g:return Object(O.a)(Object(O.a)({},e),{},{lessons:t.payload,loading:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(O.a)(Object(O.a)({},e),{},{isLoading:!0});case f:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case y:case k:return localStorage.setItem("token",t.payload.token),Object(O.a)(Object(O.a)(Object(O.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case v:case S:case C:case N:return localStorage.removeItem("token"),Object(O.a)(Object(O.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case w:return{msg:{},status:null,id:null};default:return e}}}),F=[b.a],_=Object(u.e)(R,{},Object(u.d)(u.a.apply(void 0,F))),T=n(32),G=n.n(T),D=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:L,payload:{msg:e,status:t,id:n}}},U=function(){return{type:w}},z=function(e){var t=e().auth.token,n={headers:{"Content-type":"application/json"}};return t&&(n.headers["x-auth-token"]=t),n},J=(n(97),n(139)),P=n(140),q=n(141),M=n(142),B=n(143),H=n(144),V=n(145),K=n(25),Q=n(130),W=n(157),X=n(131),Y=n(132),Z=n(133),$=n(134),ee=n(135),te=n(136),ne=n(137),ae=n(138),se=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={modal:!1,firstname:"",lastname:"",grade:"",email:"",gender:"",schoolName:"",password:"",roles:"student",msg:null},e.toggle=function(){e.props.clearErrors(),e.setState({modal:!e.state.modal})},e.onChange=function(t){e.setState(Object(K.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n=e.state,a={firstname:n.firstname,lastname:n.lastname,grade:n.grade,email:n.email,password:n.password,gender:n.gender,schoolName:n.schoolName,roles:n.roles};e.props.register(a)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.error,a=t.isAuthenticated;n!==e.error&&("REGISTER_FAIL"===n.id?this.setState({msg:n.msg.msg}):this.setState({msg:null})),this.state.modal&&a&&this.toggle()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Q.a,{onClick:this.toggle,href:"#",style:{fontSize:"1rem"},children:"Register"}),Object(a.jsxs)(W.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(a.jsx)(X.a,{toggle:this.toggle,children:"Register"}),Object(a.jsxs)(Y.a,{children:[this.state.msg?Object(a.jsx)(Z.a,{color:"danger",children:this.state.msg}):null,Object(a.jsx)($.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(ee.a,{children:[Object(a.jsx)(te.a,{for:"firstname",children:"First Name"}),Object(a.jsx)(ne.a,{type:"text",name:"firstname",id:"firstname",placeholder:"First Name",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"lastname",children:"Last Name"}),Object(a.jsx)(ne.a,{type:"text",name:"lastname",id:"lastname",placeholder:"Last Name",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"email",children:"Email"}),Object(a.jsx)(ne.a,{type:"text",name:"email",id:"email",placeholder:"Email",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"password",children:"Password"}),Object(a.jsx)(ne.a,{type:"password",name:"password",id:"password",placeholder:"Password",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"grade",children:"Grade"}),Object(a.jsx)(ne.a,{type:"text",name:"grade",id:"grade",placeholder:"Grade",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"gender",children:"Gender"}),Object(a.jsx)(ne.a,{type:"text",name:"gender",id:"gender",placeholder:"Gender",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"schoolName",children:"School Name"}),Object(a.jsx)(ne.a,{type:"text",name:"schoolName",id:"schoolName",placeholder:"School Name",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"roles",children:"Roles"}),Object(a.jsx)(ne.a,{type:"text",name:"roles",id:"roles",placeholder:"Roles",onChange:this.onChange}),Object(a.jsx)(ae.a,{color:"dark",style:{marginTop:"2rem"},block:!0,children:"Register"})]})})]})]})]})}}]),n}(s.Component),re=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{register:function(e){var t=e.firstname,n=e.lastname,a=e.grade,s=e.email,r=e.password,c=e.gender,i=e.schoolName,o=e.roles;return function(e){var l=JSON.stringify({firstname:t,lastname:n,grade:a,email:s,password:r,gender:c,schoolName:i,roles:o});G.a.post("http://localhost:5000/user/register",l,{headers:{"Content-Type":"application/json"}}).then((function(t){return e({type:k,payload:t.data})})).catch((function(t){e(D(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:N})}))}},clearErrors:U})(se),ce=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Q.a,{onClick:this.props.logout,href:"#",style:{fontSize:"1rem"},children:"Logout"})})}}]),n}(s.Component),ie=Object(h.b)(null,{logout:function(){return{type:C}}})(ce),oe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={modal:!1,email:"",password:"",msg:null},e.toggle=function(){e.props.clearErrors(),e.setState({modal:!e.state.modal})},e.onChange=function(t){e.setState(Object(K.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n=e.state,a={email:n.email,password:n.password};e.props.login(a)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.error,a=t.isAuthenticated;n!==e.error&&("LOGIN_FAIL"===n.id?this.setState({msg:n.msg.msg}):this.setState({msg:null})),this.state.modal&&a&&this.toggle()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Q.a,{onClick:this.toggle,href:"#",style:{fontSize:"1rem"},children:"Login"}),Object(a.jsxs)(W.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(a.jsx)(X.a,{toggle:this.toggle,children:"Login"}),Object(a.jsxs)(Y.a,{children:[this.state.msg?Object(a.jsx)(Z.a,{color:"danger",children:this.state.msg}):null,Object(a.jsx)($.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(ee.a,{children:[Object(a.jsx)(te.a,{for:"email",children:"Email"}),Object(a.jsx)(ne.a,{type:"text",name:"email",id:"email",placeholder:"Email",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"password",children:"Password"}),Object(a.jsx)(ne.a,{type:"password",name:"password",id:"password",placeholder:"Password",onChange:this.onChange}),Object(a.jsx)(ae.a,{color:"dark",style:{marginTop:"2rem"},block:!0,children:"Login"})]})})]})]})]})}}]),n}(s.Component),le=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{login:function(e){var t=e.email,n=e.password;return function(e){var a=JSON.stringify({email:t,password:n});G.a.post("http://localhost:5000/user/login",a,{headers:{"Content-Type":"application/json"}}).then((function(t){return e({type:y,payload:t.data})})).catch((function(t){e(D(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:S})}))}},clearErrors:U})(oe),de=function(){return{type:m}},je=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={modal:!1,lesson:"",grade:"",msg:null},e.toggle=function(){e.props.clearErrors(),e.setState({modal:!e.state.modal})},e.onChange=function(t){e.setState(Object(K.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n=e.state,a={lesson:n.lesson,grade:n.grade};e.props.createLesson(a)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.error;t.isAuthenticated;n!==e.error&&("LESSON_FAIL"===n.id?this.setState({msg:n.msg.msg}):this.setState({msg:null}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Q.a,{onClick:this.toggle,href:"#",style:{fontSize:"1rem"},children:"Create Lesson"}),Object(a.jsxs)(W.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(a.jsx)(X.a,{toggle:this.toggle,children:"Create Lesson"}),Object(a.jsxs)(Y.a,{children:[this.state.msg?Object(a.jsx)(Z.a,{color:"danger",children:this.state.msg}):null,Object(a.jsx)($.a,{onSubmit:this.onSubmit,children:Object(a.jsxs)(ee.a,{children:[Object(a.jsx)(te.a,{for:"lesson",children:"Lesson Name"}),Object(a.jsx)(ne.a,{type:"text",name:"lesson",id:"lesson",placeholder:"lesson",onChange:this.onChange}),Object(a.jsx)(te.a,{for:"grade",children:"Grade"}),Object(a.jsx)(ne.a,{type:"text",name:"grade",id:"grade",placeholder:"grade",onChange:this.onChange}),Object(a.jsx)(ae.a,{color:"dark",style:{marginTop:"2rem"},block:!0,children:"Create"})]})})]})]})]})}}]),n}(s.Component),he=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{createLesson:function(e){var t=e.lesson,n=e.grade;return function(e,a){var s=JSON.stringify({lesson:t,grade:n});G.a.post("http://localhost:5000/lessons/lesson",s,z(a)).then((function(t){return e({type:g,payload:t.data})})).catch((function(t){e(D(t.response.data,t.response.status,"LESSON_FAIL")),e({type:"LESSON_FAIL"})}))}},clearErrors:U})(je),ue=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,n=e.user,s=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(J.a,{children:Object(a.jsx)("span",{className:"navbar-text mr-3",children:Object(a.jsx)("strong",{style:{fontSize:"1rem"},children:n?" ".concat(n.firstname):""})})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(ie,{})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(he,{})})]}),r=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(re,{})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(le,{})})]});return Object(a.jsx)("div",{children:Object(a.jsx)(P.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5",children:Object(a.jsxs)(q.a,{children:[Object(a.jsx)(M.a,{href:"/",style:{fontFamily:"Lobster",fontSize:"3rem"},children:"eTution"}),Object(a.jsx)(B.a,{onClick:this.toggle}),Object(a.jsx)(H.a,{isOpen:this.state.isOpen,navbar:!0,children:Object(a.jsx)(V.a,{className:"ml-auto",navbar:!0,children:t?s:r})})]})})})}}]),n}(s.Component),be=Object(h.b)((function(e){return{auth:e.auth}}),null)(ue),Oe=n(147),pe=n(148),ge=n(149),me=n(150),xe=n(146),fe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"renderUser",value:function(e){if(null==e||0==e.length)return Object(a.jsx)("div",{});var t=e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[e.studentid.firstname,Object(a.jsx)("br",{}),JSON.stringify(e.isVerified)]})})}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Students"}),Object(a.jsx)(xe.a,{type:"unstyled",children:t})]})}},{key:"renderCourse",value:function(e){return null!=e?Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(a.jsx)(Oe.a,{children:Object(a.jsxs)(pe.a,{children:[Object(a.jsx)(ge.a,{children:e.lesson}),Object(a.jsx)(me.a,{children:e.grade})]})})}),Object(a.jsx)("div",{className:"col-12 col-md-5 m-1",children:this.renderUser(e.students)})]}):Object(a.jsx)("div",{})}},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.renderCourse(this.props.course)})}}]),n}(s.Component),ve=n(151),ye=n(152),Se=n.p+"static/media/a11.fe386dea.png",Ce=n(27),ke=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={selectedCourse:null},a}return Object(l.a)(n,[{key:"onCourseSelect",value:function(e){this.setState({selectedCourse:e})}},{key:"componentDidMount",value:function(){this.props.getLessons()}},{key:"renderCourse",value:function(e){return null!=e?Object(a.jsx)(fe,{course:e}):Object(a.jsx)("div",{})}},{key:"render",value:function(){var e=this,t=this.props.lesson.lessons;return Object(a.jsxs)(q.a,{children:[Object(a.jsx)(Oe.a,{style:{width:"200px"},children:Object(a.jsx)(pe.a,{children:t.map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)(ve.a,{width:"50px",src:Se,alt:"Card image cap"}),Object(a.jsx)(ge.a,{tag:"h5",children:t.lesson}),Object(a.jsxs)(ye.a,{tag:"h6",className:"mb-2 text-muted",children:["grade: ",t.grade]}),Object(a.jsx)(Ce.a,{children:Object(a.jsxs)(Ce.b,{to:"/lesson/".concat(t._id),children:[" ",Object(a.jsx)(ae.a,{onClick:function(){return e.onCourseSelect(t)},children:"View"})]})})]},t.id)}))})}),Object(a.jsx)("div",{children:this.renderCourse(this.state.selectedCourse)})]})}}]),n}(s.Component),Ne=Object(h.b)((function(e){return{lesson:e.lesson}}),{getLessons:function(){return function(e,t){e(de()),G.a.get("http://localhost:5000/lessons/lesson",z(t)).then((function(t){return e({type:p,payload:t.data})}))}}})(ke),Le=n(154),we=n.p+"static/media/b1.6726857e.jpg",Ae=n(153),Ee=n.p+"static/media/d.b9d2f089.jpg",Ie=n.p+"static/media/e.f8640e34.jpg",Re=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,n=(e.user,Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(Ae.a,{style:{padding:"10px"},children:[Object(a.jsxs)(Oe.a,{style:{width:"250px"},children:[Object(a.jsx)(ve.a,{width:"50px",src:Se,alt:"Card image cap"}),Object(a.jsxs)(pe.a,{children:[Object(a.jsx)(ge.a,{tag:"h5",children:"Can Submit Assignments"}),Object(a.jsx)(ye.a,{tag:"h6",className:"mb-2 text-muted",children:"Card subtitle"}),Object(a.jsx)(me.a,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]}),Object(a.jsxs)(Oe.a,{style:{width:"250px"},children:[Object(a.jsx)(ve.a,{width:"50px",src:Ee,alt:"Card image cap"}),Object(a.jsxs)(pe.a,{children:[Object(a.jsx)(ge.a,{tag:"h5",children:"Can Teach"}),Object(a.jsx)(ye.a,{tag:"h6",className:"mb-2 text-muted",children:"Card subtitle"}),Object(a.jsx)(me.a,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]}),Object(a.jsxs)(Oe.a,{style:{width:"250px"},children:[Object(a.jsx)(ve.a,{width:"50px",src:Ie,alt:"Card image cap"}),Object(a.jsxs)(pe.a,{children:[Object(a.jsx)(ge.a,{tag:"h5",children:"Can Study"}),Object(a.jsx)(ye.a,{tag:"h6",className:"mb-2 text-muted",children:"Card subtitle"}),Object(a.jsx)(me.a,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})]})}));return Object(a.jsx)("div",{children:t?"":n})}}]),n}(s.Component),Fe=Object(h.b)((function(e){return{auth:e.auth}}),null)(Re),_e=n(31),Te=n.n(_e),Ge=(n(112),n(10)),De=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,n=e.user;return Object(a.jsx)("div",{children:t?Object(a.jsxs)(q.a,{children:[Object(a.jsx)(Ne,{}),Object(a.jsxs)(Te.a,{onSelect:function(e){},children:[Object(a.jsx)(Te.a.Toggle,{}),Object(a.jsxs)(Te.a.Nav,{defaultSelected:"home",children:[Object(a.jsxs)(_e.NavItem,{eventKey:"home",children:[Object(a.jsx)(_e.NavIcon,{children:Object(a.jsx)("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})}),Object(a.jsxs)(_e.NavText,{children:[n.firstname,n.lastname]})]}),Object(a.jsx)(_e.NavItem,{children:Object(a.jsx)(Ge.a,{children:Object(a.jsx)(Ce.b,{to:"/lessonlist",children:"Lesson"})})})]})]})]}):""})}}]),n}(s.Component),Ue=Object(h.b)((function(e){return{auth:e.auth}}),null)(De),ze=n(156),Je=Object(Le.a)((function(e){return{root:{minHeight:"100vh",backgroundImage:"url(".concat(we,")"),backgroundRepeat:"no-repeat"}}}));var Pe=function(){var e=Je();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(Fe,{}),Object(a.jsx)(ze.a,{})]})})},qe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){_.dispatch((function(e,t){e({type:x}),G.a.get("http://localhost:5000/user/user",z(t)).then((function(t){return e({type:f,payload:t.data})})).catch((function(t){e(D(t.response.msg,t.response.status)),e({type:v})}))}))}},{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated;e.user;return Object(a.jsx)(Ce.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(be,{}),t?Object(a.jsx)(Ge.c,{children:Object(a.jsx)(Ge.a,{path:"/",component:Ue})}):Object(a.jsx)(Pe,{})]})})}}]),n}(s.Component),Me=Object(h.b)((function(e){return{auth:e.auth}}),null)(qe),Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h.a,{store:_,children:Object(a.jsx)(Me,{})})}),document.getElementById("root")),Be()}},[[115,1,2]]]);
//# sourceMappingURL=main.3537eec1.chunk.js.map