"use strict";(self.webpackChunkroar_repackage=self.webpackChunkroar_repackage||[]).push([[288],{YpQ9:function(t,e,r){var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.firebaseSignOut=e.firebaseSignIn=e.roarPassword=e.roarEmail=void 0;var s=r("CMMD"),o=r("rMb3");e.roarEmail=function(t){return"".concat(t,"@dispostable.com")};var a=(0,o.v5)("https://reading.stanford.edu/",o.v5.URL);e.roarPassword=function(t){return(0,o.v5)(t,a).replace(/-/g,"")},e.firebaseSignIn=function(t){return n(void 0,void 0,void 0,(function(){var r;return i(this,(function(n){switch(n.label){case 0:return r=(0,s.getAuth)(),[4,(0,s.createUserWithEmailAndPassword)(r,(0,e.roarEmail)(t),(0,e.roarPassword)(t)).catch((function(n){if("auth/email-already-in-use"===n.code)return(0,s.signInWithEmailAndPassword)(r,(0,e.roarEmail)(t),(0,e.roarPassword)(t));throw n}))];case 1:return n.sent(),[2,r]}}))}))},e.firebaseSignOut=function(){return n(void 0,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return t=(0,s.getAuth)(),[4,(0,s.signOut)(t)];case 1:return e.sent(),[2,t]}}))}))}},"2JHA":function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)},i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},o=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,i=0,s=e.length;i<s;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.RoarAppFirekit=void 0;var a=r("gc5b"),u=r("GPf/"),c=r("oG1m"),l=r("YpQ9"),h=r("Wcq6"),f=r("IM/u"),d=function(){function t(t){var e=t.userInfo,r=t.taskInfo,n=t.config;this.userInfo=e,this.taskInfo=r,this.user=void 0,this.task=void 0,this.run=void 0;var i=(0,h.initializeApp)(n.firebaseConfig),s=(0,f.getFirestore)(i);(0,f.enableIndexedDbPersistence)(s).catch((function(t){"failed-precondition"==t.code?console.log("Couldn't enable indexed db persistence. This is probably because the browser has multiple roar tabs open."):"unimplemented"==t.code&&console.log("Couldn't enable indexed db persistence. This is probably because the browser doesn't support it.")})),this.rootDoc=f.doc.apply(void 0,o([(0,f.collection)(s,n.rootDoc[0])],n.rootDoc.slice(1),!1))}return t.prototype.startRun=function(){return i(this,void 0,void 0,(function(){var t,e=this;return s(this,(function(r){switch(r.label){case 0:return[4,(0,l.firebaseSignIn)(this.userInfo.id)];case 1:return t=r.sent(),this.user=new a.RoarUser(n(n({},this.userInfo),{firebaseUid:t.currentUser.uid})),this.user.setRefs(this.rootDoc),this.task=new u.RoarTaskVariant(this.taskInfo),this.task.setRefs(this.rootDoc),this.run=new c.RoarRun({user:this.user,task:this.task}),[2,this.task.toFirestore().then((function(){return e.user.toFirestore()})).then((function(){return e.run.startRun()}))]}}))}))},t.prototype.finishRun=function(){return i(this,void 0,void 0,(function(){return s(this,(function(t){if(this.run)return[2,this.run.finishRun().then((function(){return(0,l.firebaseSignOut)()}))];throw new Error("Run is undefined. Use the startRun method first.")}))}))},t.prototype.writeTrial=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){if(this.run)return[2,this.run.writeTrial(t)];throw new Error("Run is undefined. Use the startRun method first.")}))}))},t}();e.RoarAppFirekit=d},icyM:function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)},i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.RoarFirekit=void 0;var o,a=r("TvNY"),u=r("Wcq6"),c=r("CMMD"),l=r("IM/u");!function(t){t.admin="adminData",t.educator="educatorData",t.student="studentData",t.caregiver="caregiverData"}(o||(o={}));var h=function(){function t(t){var e=t.roarConfig;this.roarConfig=e;var r=(0,u.initializeApp)(e.app);this.app={firebaseApp:r,auth:(0,c.getAuth)(r),db:(0,l.getFirestore)(r)},(0,c.setPersistence)(this.app.auth,c.inMemoryPersistence),(0,a.roarEnableIndexedDbPersistence)(this.app.db);var n=(0,u.initializeApp)(e.admin);this.admin={firebaseApp:n,auth:(0,c.getAuth)(n),db:(0,l.getFirestore)(n)},(0,c.setPersistence)(this.admin.auth,c.inMemoryPersistence),(0,a.roarEnableIndexedDbPersistence)(this.admin.db)}return t.prototype.registerWithEmailAndPassword=function(t){var e=t.email,r=t.password;return i(this,void 0,void 0,(function(){var t=this;return s(this,(function(n){return[2,(0,c.createUserWithEmailAndPassword)(this.admin.auth,e,r).then((function(n){t.admin.user=n.user,(0,c.createUserWithEmailAndPassword)(t.app.auth,e,r).then((function(e){t.app.user=e.user}))}))]}))}))},t.prototype.logInWithEmailAndPassword=function(t){var e=t.email,r=t.password;return i(this,void 0,void 0,(function(){var t=this;return s(this,(function(n){return[2,(0,c.signInWithEmailAndPassword)(this.admin.auth,e,r).then((function(n){t.admin.user=n.user,(0,c.signInWithEmailAndPassword)(t.app.auth,e,r).then((function(e){t.app.user=e.user}))}))]}))}))},t.prototype.signInWithGooglePopup=function(){return i(this,void 0,void 0,(function(){var t,e,r,n=this;return s(this,(function(i){return t=new c.GoogleAuthProvider,e=["auth/cancelled-popup-request","auth/popup-closed-by-user"],r=function(t){if(!e.includes(t.code))throw t},(0,c.signInWithPopup)(this.admin.auth,t).then((function(t){n.admin.user=t.user})).catch(r).then((function(){(0,c.signInWithPopup)(n.app.auth,t).then((function(t){n.app.user=t.user})).catch(r)})),[2]}))}))},t.prototype.initiateGoogleRedirect=function(){return i(this,void 0,void 0,(function(){var t;return s(this,(function(e){return t=new c.GoogleAuthProvider,[2,(0,c.signInWithRedirect)(this.admin.auth,t)]}))}))},t.prototype.signInFromRedirectResult=function(t){return i(this,void 0,void 0,(function(){var e,r=this;return s(this,(function(n){return e=function(e){if("auth/web-storage-unsupported"!=e.code)throw e;t()},[2,(0,c.getRedirectResult)(this.admin.auth).then((function(t){null!==t&&(r.admin.user=t.user)})).catch(e).then((function(){(0,c.getRedirectResult)(r.app.auth).then((function(t){null!==t&&(r.app.user=t.user)})).catch(e)}))]}))}))},t.prototype.signOut=function(){return i(this,void 0,void 0,(function(){var t=this;return s(this,(function(e){return[2,this.app.auth.signOut().then((function(){t.app.user=void 0,t.admin.auth.signOut().then((function(){t.admin.user=void 0}))}))]}))}))},t.prototype.getUserAdminData=function(){return i(this,void 0,void 0,(function(){var t,e,r,i,a,u,c,h,f;return s(this,(function(s){switch(s.label){case 0:if(null==this.admin.user)throw new Error("User is not authenticated.");return t=(0,l.doc)(this.admin.db,"users",this.admin.user.uid),[4,(0,l.getDoc)(t)];case 1:if(!(e=s.sent()).exists())return[3,7];this.userData=e.data(),r=0,i=Object.values(o),s.label=2;case 2:return r<i.length?(a=i[r],u=(0,l.doc)(t,a),[4,(0,l.getDoc)(u)]):[3,5];case 3:(c=s.sent()).exists()&&(this.userData[a]=c.data()),s.label=4;case 4:return r++,[3,2];case 5:return[4,(0,l.getDocs)((0,l.collection)(t,"externalData"))];case 6:h=s.sent(),f={},h.forEach((function(t){var e;f=n(n({},f),((e={})[t.id]=t.data(),e))})),this.userData.externalData=f,s.label=7;case 7:return[2]}}))}))},t}();e.RoarFirekit=h},oG1m:function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)},i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.RoarRun=e.calculateRunScores=e.convertTrialToFirestore=void 0;var o=r("IM/u");e.convertTrialToFirestore=function(t){return Object.fromEntries(Object.entries(t).map((function(t){var r=t[0],n=t[1];return n instanceof URL?[r,n.toString()]:"object"==typeof n&&null!==n?[r,(0,e.convertTrialToFirestore)(n)]:[r,n]})))},e.calculateRunScores=function(t){return i(void 0,void 0,void 0,(function(){var e,r,n,i,a,u,c,l,h;return s(this,(function(s){switch(s.label){case 0:return e=(0,o.collection)(t,"trials"),[4,(0,o.getCountFromServer)(e)];case 1:return r=s.sent(),n=r.data().count,i=(0,o.query)(e,(0,o.where)("correct","==",!0)),[4,(0,o.getCountFromServer)(i)];case 2:return r=s.sent(),a=r.data().count,i=(0,o.query)(e,(0,o.where)("correct","==",!1)),[4,(0,o.getCountFromServer)(i)];case 3:return r=s.sent(),u=r.data().count,i=(0,o.query)(e,(0,o.orderBy)("serverTimestamp","desc"),(0,o.limit)(1)),[4,(0,o.getDocs)(i)];case 4:return c=s.sent(),l=null,h=null,c.forEach((function(t){l=t.data().theta||null,h=t.data().thetaSE||null})),[2,{numAttempted:n,numCorrect:a,numIncorrect:u,theta:l,thetaSE:h}]}}))}))};var a=function(){function t(t){var e=t.user,r=t.task;if("student"!==e.userCategory)throw new Error("Only students can start a run.");if(this.user=e,this.task=r,!this.user.userRef)throw new Error("User refs not set. Please use the user.setRefs method first.");if(this.runRef=(0,o.doc)((0,o.collection)(this.user.userRef,"runs")),!this.task.taskRef)throw new Error("Task refs not set. Please use the task.setRefs method first.");this.started=!1}return t.prototype.startRun=function(){return i(this,void 0,void 0,(function(){var t,e=this;return s(this,(function(r){switch(r.label){case 0:return this.user.isPushedToFirestore?[3,2]:[4,this.user.toFirestore()];case 1:r.sent(),r.label=2;case 2:return void 0!==this.task.variantRef?[3,4]:[4,this.task.toFirestore()];case 3:r.sent(),r.label=4;case 4:return t={districtId:this.user.districtId,schoolId:this.user.schoolId,classId:this.user.classId,studyId:this.user.studyId,taskId:this.task.taskId,variantId:this.task.variantId,taskRef:this.task.taskRef,variantRef:this.task.variantRef,completed:!1,timeStarted:(0,o.serverTimestamp)(),timeFinished:null},[4,(0,o.setDoc)(this.runRef,t).then((function(){return(0,o.updateDoc)(e.user.userRef,{tasks:(0,o.arrayUnion)(e.task.taskId),variants:(0,o.arrayUnion)(e.task.variantId),taskRefs:(0,o.arrayUnion)(e.task.taskRef),variantRefs:(0,o.arrayUnion)(e.task.variantRef)})})).then((function(){return e.user.updateFirestoreTimestamp()}))];case 5:return r.sent(),this.started=!0,[2]}}))}))},t.prototype.finishRun=function(){return i(this,void 0,void 0,(function(){var t,r=this;return s(this,(function(i){switch(i.label){case 0:if(!this.started)throw new Error("Run has not been started yet. Use the startRun method first.");return[4,(0,e.calculateRunScores)(this.runRef)];case 1:return t=i.sent(),[2,(0,o.updateDoc)(this.runRef,n({completed:!0,timeFinished:(0,o.serverTimestamp)()},t)).then((function(){return r.user.updateFirestoreTimestamp()}))]}}))}))},t.prototype.writeTrial=function(t){return i(this,void 0,void 0,(function(){var r,i=this;return s(this,(function(s){if(!this.started)throw new Error("Run has not been started yet. Use the startRun method first.");return r=(0,o.doc)((0,o.collection)(this.runRef,"trials")),[2,(0,o.setDoc)(r,n(n({},(0,e.convertTrialToFirestore)(t)),{serverTimestamp:(0,o.serverTimestamp)()})).then((function(){i.user.updateFirestoreTimestamp()}))]}))}))},t}();e.RoarRun=a},"GPf/":function(t,e,r){var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.RoarTaskVariant=void 0;var s=r("IM/u"),o=r("TvNY"),a=function(){function t(t){var e=t.taskId,r=t.taskName,n=t.variantName,i=t.taskDescription,s=void 0===i?null:i,o=t.variantDescription,a=void 0===o?null:o,u=t.blocks,c=void 0===u?[]:u,l=t.srcHash,h=void 0===l?null:l;this.taskId=e,this.taskName=r,this.taskDescription=s,this.variantName=n,this.variantDescription=a,this.blocks=c,this.srcHash=h,this.taskRef=void 0,this.variantsCollectionRef=void 0,this.variantId=void 0,this.variantRef=void 0}return t.prototype.setRefs=function(t){this.taskRef=(0,s.doc)(t,"tasks",this.taskId),this.variantsCollectionRef=(0,s.collection)(this.taskRef,"variants")},t.prototype.addBlock=function(t){var e=t.blockNumber,r=void 0===e?0:e,n=t.trialMethod,i=void 0===n?"practice":n,s=t.corpus,o=void 0===s?"practiceCorpusId":s;this.blocks.push({blockNumber:r,trialMethod:i,corpus:o})},t.prototype.toFirestore=function(){return n(this,void 0,void 0,(function(){var t,e,r,n,a,u=this;return i(this,(function(i){switch(i.label){case 0:if(void 0!==this.taskRef&&void 0!==this.variantsCollectionRef)return[3,1];throw new Error("Task refs not set. Please use the setRefs method first.");case 1:return t={id:this.taskId,name:this.taskName,description:this.taskDescription,lastUpdated:(0,s.serverTimestamp)()},[4,(0,s.setDoc)(this.taskRef,t)];case 2:return i.sent(),e=(0,s.doc)(this.taskRef,"variants","empty"),[4,(0,s.setDoc)(e,{name:"empty",blocksString:"empty",srcHash:"empty"})];case 3:return i.sent(),r=(0,s.query)(this.variantsCollectionRef,(0,s.where)("name","==",this.variantName),(0,s.where)("blocksString","==",JSON.stringify(this.blocks)),(0,s.orderBy)("lastPlayed","desc"),(0,s.orderBy)("srcHash"),(0,s.limit)(1)),[4,(0,s.getDocs)(r)];case 4:return i.sent().forEach((function(t){t.get("srcHash")===u.srcHash&&(u.variantId=t.id,u.variantRef=(0,s.doc)(u.variantsCollectionRef,u.variantId),(0,s.updateDoc)(u.variantRef,(0,o.removeNull)({description:u.variantDescription,lastPlayed:(0,s.serverTimestamp)()})))})),void 0!==this.variantId?[3,6]:(n=(0,s.query)(this.variantsCollectionRef,(0,s.where)("name","==",this.variantName),(0,s.where)("blocksString","==",JSON.stringify(this.blocks)),(0,s.orderBy)("lastPlayed","desc"),(0,s.limit)(1)),[4,(0,s.getDocs)(n)]);case 5:i.sent().forEach((function(t){u.variantId=t.id,u.variantRef=(0,s.doc)(u.variantsCollectionRef,u.variantId),(0,s.updateDoc)(u.variantRef,(0,o.removeNull)({description:u.variantDescription,lastPlayed:(0,s.serverTimestamp)(),srcHash:u.srcHash}))})),i.label=6;case 6:return void 0!==this.variantId?[3,8]:(a={name:this.variantName,description:this.variantDescription,blocks:this.blocks,blocksString:JSON.stringify(this.blocks),srcHash:this.srcHash,lastPlayed:(0,s.serverTimestamp)()},this.variantRef=(0,s.doc)(this.variantsCollectionRef),[4,(0,s.setDoc)(this.variantRef,a)]);case 7:i.sent(),this.variantId=this.variantRef.id,i.label=8;case 8:return[2]}}))}))},t}();e.RoarTaskVariant=a},gc5b:function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)},i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.RoarUser=void 0;var o=r("IM/u"),a=r("TvNY"),u=function(){function t(t){var e=t.id,r=t.firebaseUid,n=t.birthMonth,i=void 0===n?null:n,s=t.birthYear,o=void 0===s?null:s,a=t.classId,u=void 0===a?null:a,c=t.schoolId,l=void 0===c?null:c,h=t.districtId,f=void 0===h?null:h,d=t.studyId,p=void 0===d?null:d,v=t.userCategory,b=void 0===v?"student":v,y=t.userMetadata,m=void 0===y?{}:y,w=["student","educator","researcher","admin","caregiver"];if(!w.includes(b))throw new Error("User category must be one of ".concat(w.join(", "),"."));this.id=e,this.firebaseUid=r,this.birthMonth=i,this.birthYear=o,this.classId=u,this.schoolId=l,this.districtId=f,this.studyId=p,this.userCategory=b,this.userMetadata=m,this.userRef=void 0,this.isPushedToFirestore=!1}return t.prototype.setRefs=function(t){this.userRef=(0,o.doc)(t,"users",this.id)},t.prototype.toFirestore=function(){return i(this,void 0,void 0,(function(){var t,e=this;return s(this,(function(r){if(void 0===this.userRef)throw new Error("User refs not set. Please use the setRefs method first.");return t={id:this.id,firebaseUid:this.firebaseUid,birthMonth:this.birthMonth,birthYear:this.birthYear,classId:this.classId,schoolId:this.schoolId,districtId:this.districtId,studyId:this.studyId,userCategory:this.userCategory,lastUpdated:(0,o.serverTimestamp)()},this.studyId&&(t.studies=(0,o.arrayUnion)(this.studyId)),this.districtId&&(t.districts=(0,o.arrayUnion)(this.districtId)),this.schoolId&&(t.schools=(0,o.arrayUnion)(this.schoolId)),this.classId&&(t.classes=(0,o.arrayUnion)(this.classId)),[2,(0,o.updateDoc)(this.userRef,(0,a.removeNull)(t)).catch((function(r){if("permission-denied"===r.code)return(0,o.setDoc)(e.userRef,n(n(n({},t),e.userMetadata),{createdAt:(0,o.serverTimestamp)()}));throw r})).then((function(){e.isPushedToFirestore=!0}))]}))}))},t.prototype.updateFirestoreTimestamp=function(){return i(this,void 0,void 0,(function(){return s(this,(function(t){if(void 0===this.userRef)throw new Error("User refs not set. Please use the setRefs method first.");return(0,o.updateDoc)(this.userRef,{lastUpdated:(0,o.serverTimestamp)()}),[2]}))}))},t}();e.RoarUser=u},TvNY:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.roarEnableIndexedDbPersistence=e.removeNull=void 0;var n=r("IM/u");e.removeNull=function(t){return Object.fromEntries(Object.entries(t).filter((function(t){return t[0],null!=t[1]})))},e.roarEnableIndexedDbPersistence=function(t){(0,n.enableIndexedDbPersistence)(t).catch((function(t){"failed-precondition"==t.code?console.log("Couldn't enable indexed db persistence. This is probably because the browser has multiple roar tabs open."):"unimplemented"==t.code&&console.log("Couldn't enable indexed db persistence. This is probably because the browser doesn't support it.")}))}},jZDP:(t,e,r)=>{e.kf=void 0;var n=r("icyM");Object.defineProperty(e,"kf",{enumerable:!0,get:function(){return n.RoarFirekit}});r("2JHA"),r("gc5b"),r("GPf/")}}]);