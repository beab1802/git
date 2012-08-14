function Od(){}
function AG(){}
function GG(){}
function vc(a,b){a.eb(b)}
function SG(a,b){zF(a,b,a.db)}
function yM(a){wM();this.b=a}
function FC(a){Di(a.parentNode,a)}
function pc(a,b){return new zd(a,b)}
function Fi(c,a,b){return c.replaceChild(a,b)}
function cj(b,a){return b.getElementById(a)}
function zd(a,b){yd();qb.call(this,a,b)}
function HC(a,b,c){this.c=a;this.d=b;this.b=c}
function DG(a){this.c=(iH(),fH).b;this.e=(pH(),oH).b;this.b=a}
function xM(a,b){Lq(b.g,56).c=false;pb(b,(JJ(),IJ),a.b)}
function tG(a,b){var c;c=Lq(a.bb,42);c.e=b.b;!!c.d&&dD(c.d,Bnb,b.b)}
function sG(a,b){var c;c=Lq(a.bb,42);c.c=b.b;!!c.d&&(c.d[Anb]=b.b,undefined)}
function DC(a){var b,c;EC();b=Ri(a);c=Qi(a);zi(CC,a);return new HC(b,c,a)}
function uG(a){if(a==lG){return true}return a==oG}
function vG(a){if(a==kG){return true}return a==jG}
function _i(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function EC(){if(!CC){CC=$doc.createElement(cnb);aF(CC,false);zi(jI(),CC)}}
function Qi(a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function jE(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b}
function iE(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null}
function wG(){pG();fG.call(this);this.c=(iH(),fH);this.d=(pH(),oH);this.f[Enb]=0;this.f[Fnb]=0}
function pG(){pG=Emb;iG=new AG;lG=new AG;kG=new AG;jG=new AG;mG=new AG;nG=new AG;oG=new AG}
function Ac(a){var b;!a.f&&(a.f=(b=pc((!a.n&&(a.n=new $p),a.n),(!a.g&&(a.g=new Jd(new Od)),a.g),!a.e&&(a.e=new Fd)),vc(b,(!a.p&&(a.p=new zJ),a.p)),b));return a.f}
function qG(a,b,c){var d;if(c==iG){if(b==a.b){return}else if(a.b){throw new wgb('Only one CENTER widget may be added')}}hF(b);xI(a.g,b);c==iG&&(a.b=b);d=new DG(c);b.bb=d;sG(b,a.c);tG(b,a.d);rG(a);iF(b,a)}
function Jd(){var a,b,c,d,e,g,i,j,k,n,o,p;this.e=(b=_i($doc),i=new TG((k=new Jhb,new _B(k.b.b)).b),g=new TG((n=new Jhb,new _B(n.b.b)).b),j=new TG((o=new Jhb,new _B(o.b.b)).b),d=new wG,e=new TG((p=new Jhb,p.b.b+="<span id='",Ihb(p,vC(b)),p.b.b+="'><\/span>",new _B(p.b.b)).b),qG(d,i,(pG(),oG)),qG(d,g,iG),qG(d,j,mG),d.db.style[vnb]=wnb,d.db.style[xnb]=wnb,e.db.style[vnb]=wnb,e.db.style[xnb]=wnb,a=DC(e.db),c=cj($doc,b),a.c?Bi(a.c,a.b,a.d):FC(a.b),hF(d),xI(e.g,d),Fi(c.parentNode,d.db,c),iF(d,e),this.b=g,this.c=i,this.d=j,e)}
function rG(a){var b,c,d,e,g,i,j,k,n,o,p,q,r,s,t,u;b=a.e;while(jE(b)>0){Di(b,iE(b,0))}r=1;e=1;for(j=new JI(a.g);j.b<j.c.d-1;){d=HI(j);g=Lq(d.bb,42).b;g==mG||g==nG?++r:(g==jG||g==oG||g==lG||g==kG)&&++e}s=Bq(bA,{115:1,123:1},43,r,0);for(i=0;i<r;++i){s[i]=new GG;s[i].c=$doc.createElement(ynb);zi(b,RH(s[i].c))}n=0;o=e-1;p=0;t=r-1;c=null;for(j=new JI(a.g);j.b<j.c.d-1;){d=HI(j);k=Lq(d.bb,42);u=$doc.createElement(znb);k.d=u;k.d[Anb]=k.c;dD(k.d,Bnb,k.e);k.d[xnb]=Jmb;k.d[vnb]=Jmb;if(k.b==mG){aD(s[p].c,u,s[p].b);zi(u,RH(d.fc()));u[Cnb]=o-n+1;++p}else if(k.b==nG){aD(s[t].c,u,s[t].b);zi(u,RH(d.fc()));u[Cnb]=o-n+1;--t}else if(k.b==iG){c=u}else if(uG(k.b)){q=s[p];aD(q.c,u,q.b++);zi(u,RH(d.fc()));u[Dnb]=t-p+1;++n}else if(vG(k.b)){q=s[p];aD(q.c,u,q.b);zi(u,RH(d.fc()));u[Dnb]=t-p+1;--o}}if(a.b){q=s[p];aD(q.c,c,q.b);zi(c,RH(a.b.db))}}
var wnb='100%',Cnb='colSpan',Dnb='rowSpan';_=Ic.prototype;_.pb=function Mc(){IK(this.c,Ac(this.b.b))};_=zd.prototype=ud.prototype;_.fb=function Bd(){};_.hb=function Cd(){};_.ib=function Dd(){wM();lb(this,new yM(this))};_=Jd.prototype=Id.prototype;_.mb=function Kd(){return this.e};_.lb=function Md(a,b){a===(yd(),vd)?(vF(this.b),!!b&&SG(this.b,b)):a===wd?(vF(this.c),!!b&&SG(this.c,b)):a===xd?(vF(this.d),!!b&&SG(this.d,b)):undefined};_=Od.prototype=Nd.prototype;var CC=null;_=HC.prototype=GC.prototype;_=wG.prototype=hG.prototype;_.rc=function yG(a){var b;b=DF(this,a);if(b){a==this.b&&(this.b=null);rG(this)}return b};var iG,jG,kG,lG,mG,nG,oG;_=AG.prototype=zG.prototype;_=DG.prototype=CG.prototype;_=GG.prototype=FG.prototype;_=yM.prototype=uM.prototype;_.Nb=function zM(a){xM(this,Lq(a,64))};_.Ob=function AM(){return vM};var bA=lgb(Gnb,'DockPanel$TmpRow;');Hmb(ug)(1);