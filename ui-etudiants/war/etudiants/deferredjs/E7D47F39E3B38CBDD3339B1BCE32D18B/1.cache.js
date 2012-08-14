function Pd(){}
function mH(){}
function sH(){}
function wc(a,b){a.db(b)}
function EH(a,b){lG(a,b,a.cb)}
function tN(a){rN();this.a=a}
function WC(a){Xh(a.parentNode,a)}
function qc(a,b){return new Ad(a,b)}
function Zh(c,a,b){return c.replaceChild(a,b)}
function Hi(b,a){return b.getElementById(a)}
function Ad(a,b){zd();rb.call(this,a,b)}
function YC(a,b,c){this.b=a;this.c=b;this.a=c}
function pH(a){this.b=(WH(),TH).a;this.d=(bI(),aI).a;this.a=a}
function sN(a,b){wq(b.f,57).b=false;qb(b,(EK(),DK),a.a)}
function fH(a,b){var c;c=wq(a.ab,43);c.d=b.a;!!c.c&&HD(c.c,jqb,b.a)}
function eH(a,b){var c;c=wq(a.ab,43);c.b=b.a;!!c.c&&(c.c[iqb]=b.a,undefined)}
function UC(a){var b,c;VC();b=ki(a);c=ji(a);Th(TC,a);return new YC(b,c,a)}
function VC(){if(!TC){TC=mi($doc,Onb);OF(TC,false);Th(XI(),TC)}}
function gH(a){if(a==ZG){return true}return a==aH}
function hH(a){if(a==YG){return true}return a==XG}
function Ei(a){!a.gwt_uid&&(a.gwt_uid=1);return eqb+a.gwt_uid++}
function ji(a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function bH(){bH=mnb;WG=new mH;ZG=new mH;YG=new mH;XG=new mH;$G=new mH;_G=new mH;aH=new mH}
function iH(){bH();TG.call(this);this.b=(WH(),TH);this.c=(bI(),aI);this.e[mqb]=0;this.e[nqb]=0}
function Bc(a){var b;!a.e&&(a.e=(b=qc((!a.k&&(a.k=new Lp),a.k),(!a.f&&(a.f=new Kd(new Pd)),a.f),!a.d&&(a.d=new Gd)),wc(b,(!a.o&&(a.o=new uK),a.o)),b));return a.e}
function cH(a,b,c){var d;if(c==WG){if(b==a.a){return}else if(a.a){throw new dhb(fqb)}}VF(b);jJ(a.f,b);c==WG&&(a.a=b);d=new pH(c);b.ab=d;eH(b,a.b);fH(b,a.c);dH(a);WF(b,a)}
function Kd(){var a,b,c,d,e,g,i,j,k,n,o,p;this.d=(b=Ei($doc),i=new FH((k=new qib,new qC(yh(k.a))).a),g=new FH((n=new qib,new qC(yh(n.a))).a),j=new FH((o=new qib,new qC(yh(o.a))).a),d=new iH,e=new FH((p=new qib,vh(p.a,_pb),pib(p,MC(b)),vh(p.a,aqb),new qC(yh(p.a))).a),cH(d,i,(bH(),aH)),cH(d,g,WG),cH(d,j,$G),d.cb.style[bqb]=cqb,d.cb.style[dqb]=cqb,e.cb.style[bqb]=cqb,e.cb.style[dqb]=cqb,a=UC(e.cb),c=Hi($doc,b),a.b?Vh(a.b,a.a,a.c):WC(a.a),VF(d),jJ(e.f,d),Zh(c.parentNode,d.cb,c),WF(d,e),this.a=g,this.b=i,this.c=j,e)}
function dH(a){var b,c,d,e,g,i,j,k,n,o,p,q,r,s,t,u;b=a.d;while(b.children.length>0){Xh(b,b.children[0])}r=1;e=1;for(j=new vJ(a.f);j.a<j.b.c-1;){d=tJ(j);g=wq(d.ab,43).a;g==$G||g==_G?++r:(g==XG||g==aH||g==ZG||g==YG)&&++e}s=mq(Nz,{116:1,124:1},44,r,0);for(i=0;i<r;++i){s[i]=new sH;s[i].b=mi($doc,gqb);Th(b,DI(s[i].b))}n=0;o=e-1;p=0;t=r-1;c=null;for(j=new vJ(a.f);j.a<j.b.c-1;){d=tJ(j);k=wq(d.ab,43);u=mi($doc,hqb);k.c=u;k.c[iqb]=k.b;HD(k.c,jqb,k.d);k.c[dqb]=rnb;k.c[bqb]=rnb;if(k.a==$G){DD(s[p].b,u,s[p].a);Th(u,DI(d.dc()));u[kqb]=o-n+1;++p}else if(k.a==_G){DD(s[t].b,u,s[t].a);Th(u,DI(d.dc()));u[kqb]=o-n+1;--t}else if(k.a==WG){c=u}else if(gH(k.a)){q=s[p];DD(q.b,u,q.a++);Th(u,DI(d.dc()));u[lqb]=t-p+1;++n}else if(hH(k.a)){q=s[p];DD(q.b,u,q.a);Th(u,DI(d.dc()));u[lqb]=t-p+1;--o}}if(a.a){q=s[p];DD(q.b,c,q.a);Th(c,DI(a.a.cb))}}
var aqb="'><\/span>",cqb='100%',_pb="<span id='",pqb='DockPanel$TmpRow;',fqb='Only one CENTER widget may be added',kqb='colSpan',eqb='gwt-uid-',lqb='rowSpan';_=Jc.prototype;_.ob=function Nc(){DL(this.b,Bc(this.a.a))};_=Ad.prototype=vd.prototype;_.eb=function Cd(){};_.gb=function Dd(){};_.hb=function Ed(){rN();mb(this,new tN(this))};_=Kd.prototype=Jd.prototype;_.lb=function Ld(){return this.d};_.kb=function Nd(a,b){a===(zd(),wd)?(hG(this.a),!!b&&EH(this.a,b)):a===xd?(hG(this.b),!!b&&EH(this.b,b)):a===yd?(hG(this.c),!!b&&EH(this.c,b)):undefined};_=Pd.prototype=Od.prototype;var TC=null;_=YC.prototype=XC.prototype;_=iH.prototype=VG.prototype;_.pc=function kH(a){var b;b=pG(this,a);if(b){a==this.a&&(this.a=null);dH(this)}return b};var WG,XG,YG,ZG,$G,_G,aH;_=mH.prototype=lH.prototype;_=pH.prototype=oH.prototype;_=sH.prototype=rH.prototype;_=tN.prototype=pN.prototype;_.Gb=function uN(a){sN(this,wq(a,65))};_.Hb=function vN(){return qN};var Nz=Ugb(oqb,pqb);pnb(hg)(1);