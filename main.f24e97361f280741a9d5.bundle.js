webpackJsonp([1,4],{1170:function(t,e,n){t.exports=n(568)},202:function(t,e,n){"use strict";var r=n(0),o=n(188),a=n(489),i=n(45);n.n(i);n.d(e,"b",function(){return a.a}),n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this.http=t}return t.prototype.getRepo=function(e,n){return this.http.get("https://api.github.com/repos/"+e+"/"+n,{headers:t.header}).map(function(t){return new a.a(t.json())})},t.prototype.getPullRequest=function(e){return this.http.get("https://api.github.com/search/issues?q=+type:pr+repo:"+e+"&sort=created&‌​order=asc",{headers:t.header}).map(function(t){return t.json().total_count})},t.prototype.getStargazers=function(t,e,n,r){return void 0===r&&(r=30),this.http.get("https://api.github.com/repos/"+t+"/"+e+"/stargazers?page="+n+"&per_page="+r).map(function(t){return t.json().map(function(t){return t.avatar_url})})},t.header=new o.b({Accept:"application/vnd.github.v3+json"}),t=c([n.i(r.c)(),s("design:paramtypes",["function"==typeof(e=void 0!==o.c&&o.c)&&e||Object])],t);var e}()},488:function(t,e,n){"use strict";var r=n(0),o=n(202),a=n(493);n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.af=t,this.repoDetail=new o.b,this.devicelist=[]}return t.prototype.ngOnInit=function(){var t=this;this.af.database.list("/device",{preserveSnapshot:!0}).subscribe(function(e){t.devicelist=[],e.forEach(function(e){e.forEach(function(e){t.devicelist.push(e.val())})})})},t=i([n.i(r.R)({selector:"dashboard",template:n(915)}),c("design:paramtypes",["function"==typeof(e=void 0!==a.b&&a.b)&&e||Object])],t);var e}()},489:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t){t&&(this.name=t.name,this.description=t.description,this.stargazersCount=t.stargazers_count,this.forksCount=t.forks_count,this.openIssuesCount=t.open_issues_count,this.fullName=t.full_name)}return t}()},490:function(t,e,n){"use strict";var r=n(0),o=n(482),a=n(202),i=n(747);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){this.activatedRoute=t,this.githubService=e,this.stargazers=[],this.repoDetail=new a.b,this.page=1,this.perPage=24}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(e){var n=e.owner,r=e.repo;t.owner=n,t.repo=r,t.loadStargazers(t.page,t.perPage),t.githubService.getRepo(n,r).subscribe(function(e){return t.repoDetail=e})})},t.prototype.onWindowScroll=function(t){var e=t.currentTarget,n=t.target;this.loading||e.innerHeight+e.scrollY>=n.body.offsetHeight&&this.loadStargazers(this.page,this.perPage)},t.prototype.loadStargazers=function(t,e){var n=this;this.loading=!0,this.githubService.getStargazers(this.owner,this.repo,t,e).finally(function(){n.loading=!1}).subscribe(function(t){n.stargazers=n.stargazers.concat(t),n.page++})},c([n.i(r._15)("window:scroll",["$event"]),s("design:type",Function),s("design:paramtypes",[Object]),s("design:returntype",void 0)],t.prototype,"onWindowScroll",null),t=c([n.i(r.R)({selector:"stargazers",animations:[i.a],styles:[n(913)],template:n(917)}),s("design:paramtypes",["function"==typeof(e=void 0!==o.b&&o.b)&&e||Object,"function"==typeof(u=void 0!==a.a&&a.a)&&u||Object])],t);var e,u}()},567:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=567},568:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(712),o=n(0),a=n(748),i=n(744);a.a.production&&n.i(o.a)(),n.i(r.a)().bootstrapModule(i.a)},742:function(t,e,n){"use strict";var r=n(0),o=n(482),a=n(488),i=n(490);n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=[{path:"",component:a.a,pathMatch:"full"},{path:":owner/:repo/stargazers",component:i.a}],f=function(){function t(){}return t=c([n.i(r.b)({imports:[o.a.forRoot(u)],exports:[o.a],providers:[]}),s("design:paramtypes",[])],t)}()},743:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t=o([n.i(r.R)({selector:"app-root",template:n(914)}),a("design:paramtypes",[])],t)}()},744:function(t,e,n){"use strict";var r=n(58),o=n(0),a=n(51),i=n(188),c=n(493),s=n(742),u=n(743),f=n(488),d=n(746),p=n(202),l=n(490),h=n(696),m=n(660),g=n(745);n.d(e,"a",function(){return R});var v=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y={apiKey:"AIzaSyACJQeElNE3aIZ-ZBojwMNVc7P5xgD8NW8",authDomain:"https://azay-dfl.firebaseapp.com/",databaseURL:"https://azay-dfl.firebaseio.com/",storageBucket:""},R=function(){function t(){}return t=v([n.i(o.b)({declarations:[u.a,f.a,d.a,l.a,g.a],imports:[r.a,a.a,i.a,s.a,h.a,m.FlexLayoutModule.forRoot(),c.a.initializeApp(y)],providers:[p.a],bootstrap:[u.a]}),b("design:paramtypes",[])],t)}()},745:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.transform=function(t,e){return t.sort(function(t,e){var n=new Date(t.date),r=new Date(e.date);return n>r?1:n<r?-1:0}).slice().reverse()},t=o([n.i(r.p)({name:"orderBy"}),a("design:paramtypes",[])],t)}()},746:function(t,e,n){"use strict";var r=n(0),o=n(202),a=n(919);n.n(a);n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.githubService=t,this.repoDetail=new o.b}return t.prototype.ngOnChanges=function(t){var e=this;if(t.owner&&t.repo){var n=t.owner.currentValue,r=t.repo.currentValue;a.Observable.forkJoin(this.githubService.getRepo(n,r),this.githubService.getPullRequest(n+"/"+r)).subscribe(function(t){var n=t[0],r=t[1];e.repoDetail=n,e.pullRequestCount=r})}},i([n.i(r.w)(),c("design:type",String)],t.prototype,"owner",void 0),i([n.i(r.w)(),c("design:type",String)],t.prototype,"repo",void 0),t=i([n.i(r.R)({selector:"poor-enemy-dashboard",template:n(916)}),c("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},747:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return o});var o=n.i(r.S)("slideInUp",[n.i(r.T)("in",n.i(r.U)({transform:"translateY(0)"})),n.i(r.V)("void => *",[n.i(r.U)({transform:"translateY(100%)"}),n.i(r.W)(500)])])},748:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},913:function(t,e){t.exports=".stargazer{text-align:center;margin-bottom:20px}@media (max-width:576px){:host{text-align:center}}"},914:function(t,e){t.exports='<md-toolbar class="toolbar-shadow" color="primary">\n  <button md-button routerLink="/">\n   <md-icon>home</md-icon>\n       {{title}}</button>\n   <!-- This fills the remaining space of the current row -->\n   <span class="toolbar-spacer"></span>\n   <div fxLayout="row" fxShow="false" fxShow.gt-sm>\n       <button md-button routerLink="angular/angular/stargazers">Products</button>\n       <button md-button routerLink="/dashboard">Dashboard</button>\n   </div>\n   <button md-button [md-menu-trigger-for]="menu" fxHide="false" fxHide.gt-sm>\n    <md-icon>menu</md-icon>\n   </button>\n</md-toolbar>\n<md-menu x-position="before" #menu="mdMenu">\n    <button md-menu-item routerLink="angular/angular/stargazers">Products</button>\n    <button md-menu-item routerLink="/dashboard">Dashboard</button>\n</md-menu>\n\n<!-- <div style="position: fixed; width: 100%">\n  <md-toolbar>...</md-toolbar>\n</div>\n<md-sidenav-layout style="top: 64px !important">...</md-sidenav-layout> -->\n\n\n<div class="container">\n  <router-outlet></router-outlet>\n</div>\n'},915:function(t,e){t.exports='<div style="padding: 8px">\n  <md-list>\n    <h2 md-subheader>DFL Devices</h2>\n    <md-list-item *ngFor="let device of devicelist | orderBy : \'device.date\'">\n      <md-icon md-list-avatar>devices</md-icon>\n      <!-- <h4 md-line> {{device.name}}</h4> -->\n      <p md-line style="color: rgba(0,0,0,.54);"> {{device.device_name}} </p>\n      <p md-line style="color: rgba(0,0,0,.54);"> v: {{device.azay_version}} </p>\n      <p md-line style="color: rgba(0,0,0,.54);"> {{device.date | date:\'dd MMM yyyy HH:mm a\'}} </p>\n      <md-divider></md-divider>\n    </md-list-item>\n  </md-list>\n</div>\n'},916:function(t,e){t.exports='<div class="card">\n  <h3 class="card-header capitalize">{{repoDetail.name}}</h3>\n  <div class="card-block">\n    <p class="card-text">{{repoDetail.description}}</p>\n    <p class="card-text">Stars: {{repoDetail.stargazersCount | number}}</p>\n    <p class="card-text">Open Issues: {{repoDetail.openIssuesCount | number}}</p>\n    <p class="card-text">Forks: {{repoDetail.forksCount | number}}</p>\n    <p class="card-text">Pull Requests: {{pullRequestCount | number}}</p>\n  </div>\n  <div class="card-footer text-muted">\n    <a class="btn btn-primary" [routerLink]="repoDetail.fullName + \'/stargazers\'">View enemies</a>\n  </div>\n</div>\n'},917:function(t,e){t.exports='<h1 class="capitalize">{{repoDetail.name}}</h1>\n<p>{{repoDetail.description}}</p>\n<div class="row">\n  <div class="stargazer col-6 col-sm-3 align-self-center" *ngFor="let stargazer of stargazers" [@slideInUp]="\'in\'">\n    <img class="img-fluid" [src]="stargazer" />\n  </div>\n  <div class="col-12">\n    <div class="mx-auto loader"></div>\n  </div>\n</div>\n'}},[1170]);