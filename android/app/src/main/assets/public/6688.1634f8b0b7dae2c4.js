"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6688],{6688:(L,c,t)=>{t.r(c),t.d(c,{LoginPageModule:()=>M});var p=t(177),r=t(4341),l=t(4742),u=t(4964),n=t(3953),m=t(8287);const f=[{path:"",component:(()=>{var o;class a{constructor(e,i){this.auths=e,this.router=i,this.usr={id:Date.now().toString(),usuario:"",email:"",password:"",role:"",departamento:""}}ngOnInit(){}login(){this.auths.login(this.usr.email,this.usr.password).then(()=>{console.log("Usuario logeado"),this.usr.email.endsWith("@alumnoduoc.cl")?this.router.navigate(["/vista-alumnos"]):this.usr.email.endsWith("@profesorduoc.cl")&&this.router.navigate(["/vista-profesor"])}).catch(e=>{console.log("Error al iniciar sesi\xf3n",e)})}}return(o=a).\u0275fac=function(e){return new(e||o)(n.rXU(m.f),n.rXU(u.Ix))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-login"]],decls:13,vars:2,consts:[["color","primary",1,"ion-padding"],[1,"login-card-content","login-container"],[3,"ngSubmit"],["src","assets/logo.png","alt","Logo",1,"logo"],["required","","label","Email","label-placement","floating","fill","outline","placeholder","Ingrese email","name","email",3,"ngModelChange","ngModel"],["type","password","required","","label","Contrase\xf1a","name","password","label-placement","floating","fill","outline","placeholder","Ingrese Contrase\xf1a","name","password",3,"ngModelChange","ngModel"],["color","secondary","type","submit","expand","block"],["color","secondary","expand","full","fill","outline","routerLink","/recuperar"],["color","secondary","expand","full","fill","clear","routerLink","/registro"]],template:function(e,i){1&e&&(n.j41(0,"ion-content",0)(1,"ion-card-content",1)(2,"form",2),n.bIt("ngSubmit",function(){return i.login()}),n.nrm(3,"img",3),n.j41(4,"ion-card-content")(5,"ion-input",4),n.mxI("ngModelChange",function(s){return n.DH7(i.usr.email,s)||(i.usr.email=s),s}),n.k0s(),n.j41(6,"ion-input",5),n.mxI("ngModelChange",function(s){return n.DH7(i.usr.password,s)||(i.usr.password=s),s}),n.k0s(),n.j41(7,"ion-button",6),n.EFF(8,"Ingresar"),n.k0s()(),n.j41(9,"ion-button",7),n.EFF(10,"Recuperar Contrase\xf1a"),n.k0s(),n.j41(11,"ion-button",8),n.EFF(12,"Registrarse"),n.k0s()()()()),2&e&&(n.R7$(5),n.R50("ngModel",i.usr.email),n.R7$(),n.R50("ngModel",i.usr.password))},dependencies:[r.qT,r.BC,r.cb,r.YS,r.vS,r.cV,l.Jm,l.I9,l.W9,l.$w,l.Gw,l.N7,u.Wk],styles:["ion-input[_ngcontent-%COMP%]{margin-top:10px}ion-button[_ngcontent-%COMP%]{margin-top:10px}.login-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh}"]}),a})()}];let h=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[u.iI.forChild(f),u.iI]}),a})(),M=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[p.MD,r.YN,l.bv,h]}),a})()}}]);