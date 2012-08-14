function Od(){}
function xF(){}
function DF(){}
function vc(a,b){a.eb(b)}
function PF(a,b){wE(a,b,a.db)}
function vL(a){tL();this.b=a}
function IB(a){Xh(a.parentNode,a)}
function pc(a,b){return new zd(a,b)}
function Zh(c,a,b){return c.replaceChild(a,b)}
function si(b,a){return b.getElementById(a)}
function zd(a,b){yd();qb.call(this,a,b)}
function KB(a,b,c){this.c=a;this.d=b;this.b=c}
function AF(a){this.c=(fG(),cG).b;this.e=(mG(),lG).b;this.b=a}
function uL(a,b){_p(b.g,56).c=false;pb(b,(GI(),FI),a.b)}
function qF(a,b){var c;c=_p(a.bb,42);c.e=b.b;!!c.d&&dC(c.d,clb,b.b)}
function pF(a,b){var c;c=_p(a.bb,42);c.c=b.b;!!c.d&&(c.d[blb]=b.b,undefined)}
function GB(a){var b,c;HB();b=ji(a);c=ii(a);Th(FB,a);return new KB(b,c,a)}
function rF(a){if(a==iF){return true}return a==lF}
function sF(a){if(a==hF){return true}return a==gF}
function pi(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function HB(){if(!FB){FB=$doc.createElement(Ekb);ZD(FB,false);Th(gH(),FB)}}
function ii(a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function jD(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b}
function iD(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null}
function tF(){mF();cF.call(this);this.c=(fG(),cG);this.d=(mG(),lG);this.f[flb]=0;this.f[glb]=0}
function mF(){mF=jkb;fF=new xF;iF=new xF;hF=new xF;gF=new xF;jF=new xF;kF=new xF;lF=new xF}
function Ac(a){var b;!a.f&&(a.f=(b=pc((!a.n&&(a.n=new op),a.n),(!a.g&&(a.g=new Jd(new Od)),a.g),!a.e&&(a.e=new Fd)),vc(b,(!a.p&&(a.p=new wI),a.p)),b));return a.f}
function nF(a,b,c){var d;if(c==fF){if(b==a.b){return}else if(a.b){throw new ceb('Only one CENTER widget may be added')}}eE(b);uH(a.g,b);c==fF&&(a.b=b);d=new AF(c);b.bb=d;pF(b,a.c);qF(b,a.d);oF(a);fE(b,a)}
function Jd(){var a,b,c,d,e,g,i,j,k,n,o,p;this.e=(b=pi($doc),i=new QF((k=new ofb,new cB(k.b.b)).b),g=new QF((n=new ofb,new cB(n.b.b)).b),j=new QF((o=new ofb,new cB(o.b.b)).b),d=new tF,e=new QF((p=new ofb,p.b.b+="<span id='",nfb(p,yB(b)),p.b.b+="'><\/span>",new cB(p.b.b)).b),nF(d,i,(mF(),lF)),nF(d,g,fF),nF(d,j,jF),d.db.style[Ykb]=Zkb,d.db.style[$kb]=Zkb,e.db.style[Ykb]=Zkb,e.db.style[$kb]=Zkb,a=GB(e.db),c=si($doc,b),a.c?Vh(a.c,a.b,a.d):IB(a.b),eE(d),uH(e.g,d),Zh(c.parentNode,d.db,c),fE(d,e),this.b=g,this.c=i,this.d=j,e)}
function oF(a){var b,c,d,e,g,i,j,k,n,o,p,q,r,s,t,u;b=a.e;while(jD(b)>0){Xh(b,iD(b,0))}r=1;e=1;for(j=new GH(a.g);j.b<j.c.d-1;){d=EH(j);g=_p(d.bb,42).b;g==jF||g==kF?++r:(g==gF||g==lF||g==iF||g==hF)&&++e}s=Rp(fz,{114:1,122:1},43,r,0);for(i=0;i<r;++i){s[i]=new DF;s[i].c=$doc.createElement(_kb);Th(b,OG(s[i].c))}n=0;o=e-1;p=0;t=r-1;c=null;for(j=new GH(a.g);j.b<j.c.d-1;){d=EH(j);k=_p(d.bb,42);u=$doc.createElement(alb);k.d=u;k.d[blb]=k.c;dC(k.d,clb,k.e);k.d[$kb]=okb;k.d[Ykb]=okb;if(k.b==jF){aC(s[p].c,u,s[p].b);Th(u,OG(d.Yb()));u[dlb]=o-n+1;++p}else if(k.b==kF){aC(s[t].c,u,s[t].b);Th(u,OG(d.Yb()));u[dlb]=o-n+1;--t}else if(k.b==fF){c=u}else if(rF(k.b)){q=s[p];aC(q.c,u,q.b++);Th(u,OG(d.Yb()));u[elb]=t-p+1;++n}else if(sF(k.b)){q=s[p];aC(q.c,u,q.b);Th(u,OG(d.Yb()));u[elb]=t-p+1;--o}}if(a.b){q=s[p];aC(q.c,c,q.b);Th(c,OG(a.b.db))}}
var Zkb='100%',dlb='colSpan',elb='rowSpan';_=Ic.prototype;_.pb=function Mc(){FJ(this.c,Ac(this.b.b))};_=zd.prototype=ud.prototype;_.fb=function Bd(){};_.hb=function Cd(){};_.ib=function Dd(){tL();lb(this,new vL(this))};_=Jd.prototype=Id.prototype;_.mb=function Kd(){return this.e};_.lb=function Md(a,b){a===(yd(),vd)?(sE(this.b),!!b&&PF(this.b,b)):a===wd?(sE(this.c),!!b&&PF(this.c,b)):a===xd?(sE(this.d),!!b&&PF(this.d,b)):undefined};_=Od.prototype=Nd.prototype;var FB=null;_=KB.prototype=JB.prototype;_=tF.prototype=eF.prototype;_.ic=function vF(a){var b;b=AE(this,a);if(b){a==this.b&&(this.b=null);oF(this)}return b};var fF,gF,hF,iF,jF,kF,lF;_=xF.prototype=wF.prototype;_=AF.prototype=zF.prototype;_=DF.prototype=CF.prototype;_=vL.prototype=rL.prototype;_.Fb=function wL(a){uL(this,_p(a,64))};_.Gb=function xL(){return sL};var fz=Tdb(hlb,'DockPanel$TmpRow;');mkb(gg)(1);