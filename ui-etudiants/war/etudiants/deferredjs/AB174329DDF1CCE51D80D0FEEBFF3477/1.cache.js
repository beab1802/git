function Od(){}
function bG(){}
function hG(){}
function vc(a,b){a.eb(b)}
function tG(a,b){aF(a,b,a.db)}
function _L(a){ZL();this.b=a}
function fC(a){ii(a.parentNode,a)}
function pc(a,b){return new zd(a,b)}
function ki(c,a,b){return c.replaceChild(a,b)}
function Ki(b,a){return b.getElementById(a)}
function zd(a,b){yd();qb.call(this,a,b)}
function hC(a,b,c){this.c=a;this.d=b;this.b=c}
function eG(a){this.c=(LG(),IG).b;this.e=(SG(),RG).b;this.b=a}
function $L(a,b){sq(b.g,56).c=false;pb(b,(kJ(),jJ),a.b)}
function WF(a,b){var c;c=sq(a.bb,42);c.e=b.b;!!c.d&&CC(c.d,nmb,b.b)}
function VF(a,b){var c;c=sq(a.bb,42);c.c=b.b;!!c.d&&(c.d[mmb]=b.b,undefined)}
function dC(a){var b,c;eC();b=wi(a);c=vi(a);ei(cC,a);return new hC(b,c,a)}
function XF(a){if(a==OF){return true}return a==RF}
function YF(a){if(a==NF){return true}return a==MF}
function Hi(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function eC(){if(!cC){cC=$doc.createElement(Plb);DE(cC,false);ei(MH(),cC)}}
function vi(a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function HD(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b}
function GD(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null}
function ZF(){SF();IF.call(this);this.c=(LG(),IG);this.d=(SG(),RG);this.f[qmb]=0;this.f[rmb]=0}
function SF(){SF=slb;LF=new bG;OF=new bG;NF=new bG;MF=new bG;PF=new bG;QF=new bG;RF=new bG}
function Ac(a){var b;!a.f&&(a.f=(b=pc((!a.n&&(a.n=new Hp),a.n),(!a.g&&(a.g=new Jd(new Od)),a.g),!a.e&&(a.e=new Fd)),vc(b,(!a.p&&(a.p=new aJ),a.p)),b));return a.f}
function TF(a,b,c){var d;if(c==LF){if(b==a.b){return}else if(a.b){throw new lfb('Only one CENTER widget may be added')}}KE(b);$H(a.g,b);c==LF&&(a.b=b);d=new eG(c);b.bb=d;VF(b,a.c);WF(b,a.d);UF(a);LE(b,a)}
function Jd(){var a,b,c,d,e,g,i,j,k,n,o,p;this.e=(b=Hi($doc),i=new uG((k=new xgb,new BB(k.b.b)).b),g=new uG((n=new xgb,new BB(n.b.b)).b),j=new uG((o=new xgb,new BB(o.b.b)).b),d=new ZF,e=new uG((p=new xgb,p.b.b+="<span id='",wgb(p,XB(b)),p.b.b+="'><\/span>",new BB(p.b.b)).b),TF(d,i,(SF(),RF)),TF(d,g,LF),TF(d,j,PF),d.db.style[hmb]=imb,d.db.style[jmb]=imb,e.db.style[hmb]=imb,e.db.style[jmb]=imb,a=dC(e.db),c=Ki($doc,b),a.c?gi(a.c,a.b,a.d):fC(a.b),KE(d),$H(e.g,d),ki(c.parentNode,d.db,c),LE(d,e),this.b=g,this.c=i,this.d=j,e)}
function UF(a){var b,c,d,e,g,i,j,k,n,o,p,q,r,s,t,u;b=a.e;while(HD(b)>0){ii(b,GD(b,0))}r=1;e=1;for(j=new kI(a.g);j.b<j.c.d-1;){d=iI(j);g=sq(d.bb,42).b;g==PF||g==QF?++r:(g==MF||g==RF||g==OF||g==NF)&&++e}s=iq(Dz,{115:1,123:1},43,r,0);for(i=0;i<r;++i){s[i]=new hG;s[i].c=$doc.createElement(kmb);ei(b,sH(s[i].c))}n=0;o=e-1;p=0;t=r-1;c=null;for(j=new kI(a.g);j.b<j.c.d-1;){d=iI(j);k=sq(d.bb,42);u=$doc.createElement(lmb);k.d=u;k.d[mmb]=k.c;CC(k.d,nmb,k.e);k.d[jmb]=xlb;k.d[hmb]=xlb;if(k.b==PF){zC(s[p].c,u,s[p].b);ei(u,sH(d.ac()));u[omb]=o-n+1;++p}else if(k.b==QF){zC(s[t].c,u,s[t].b);ei(u,sH(d.ac()));u[omb]=o-n+1;--t}else if(k.b==LF){c=u}else if(XF(k.b)){q=s[p];zC(q.c,u,q.b++);ei(u,sH(d.ac()));u[pmb]=t-p+1;++n}else if(YF(k.b)){q=s[p];zC(q.c,u,q.b);ei(u,sH(d.ac()));u[pmb]=t-p+1;--o}}if(a.b){q=s[p];zC(q.c,c,q.b);ei(c,sH(a.b.db))}}
var imb='100%',omb='colSpan',pmb='rowSpan';_=Ic.prototype;_.pb=function Mc(){jK(this.c,Ac(this.b.b))};_=zd.prototype=ud.prototype;_.fb=function Bd(){};_.hb=function Cd(){};_.ib=function Dd(){ZL();lb(this,new _L(this))};_=Jd.prototype=Id.prototype;_.mb=function Kd(){return this.e};_.lb=function Md(a,b){a===(yd(),vd)?(YE(this.b),!!b&&tG(this.b,b)):a===wd?(YE(this.c),!!b&&tG(this.c,b)):a===xd?(YE(this.d),!!b&&tG(this.d,b)):undefined};_=Od.prototype=Nd.prototype;var cC=null;_=hC.prototype=gC.prototype;_=ZF.prototype=KF.prototype;_.mc=function _F(a){var b;b=eF(this,a);if(b){a==this.b&&(this.b=null);UF(this)}return b};var LF,MF,NF,OF,PF,QF,RF;_=bG.prototype=aG.prototype;_=eG.prototype=dG.prototype;_=hG.prototype=gG.prototype;_=_L.prototype=XL.prototype;_.Jb=function aM(a){$L(this,sq(a,64))};_.Kb=function bM(){return YL};var Dz=afb(smb,'DockPanel$TmpRow;');vlb(tg)(1);