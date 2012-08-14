function Od(){}
function RF(){}
function XF(){}
function vc(a,b){a.db(b)}
function hG(a,b){QE(a,b,a.cb)}
function PL(a){NL();this.a=a}
function SB(a){Vh(a.parentNode,a)}
function pc(a,b){return new zd(a,b)}
function Xh(c,a,b){return c.replaceChild(a,b)}
function vi(b,a){return b.getElementById(a)}
function zd(a,b){yd();qb.call(this,a,b)}
function UB(a,b,c){this.b=a;this.c=b;this.a=c}
function UF(a){this.b=(zG(),wG).a;this.d=(GG(),FG).a;this.a=a}
function OL(a,b){bq(b.f,56).b=false;pb(b,($I(),ZI),a.a)}
function KF(a,b){var c;c=bq(a.ab,42);c.d=b.a;!!c.c&&qC(c.c,ilb,b.a)}
function JF(a,b){var c;c=bq(a.ab,42);c.b=b.a;!!c.c&&(c.c[hlb]=b.a,undefined)}
function QB(a){var b,c;RB();b=hi(a);c=gi(a);Sh(PB,a);return new UB(b,c,a)}
function LF(a){if(a==CF){return true}return a==FF}
function MF(a){if(a==BF){return true}return a==AF}
function si(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function RB(){if(!PB){PB=$doc.createElement(Lkb);rE(PB,false);Sh(AH(),PB)}}
function gi(a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function wD(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b}
function vD(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null}
function NF(){GF();wF.call(this);this.b=(zG(),wG);this.c=(GG(),FG);this.e[llb]=0;this.e[mlb]=0}
function GF(){GF=mkb;zF=new RF;CF=new RF;BF=new RF;AF=new RF;DF=new RF;EF=new RF;FF=new RF}
function Ac(a){var b;!a.e&&(a.e=(b=pc((!a.k&&(a.k=new qp),a.k),(!a.f&&(a.f=new Jd(new Od)),a.f),!a.d&&(a.d=new Fd)),vc(b,(!a.o&&(a.o=new QI),a.o)),b));return a.e}
function HF(a,b,c){var d;if(c==zF){if(b==a.a){return}else if(a.a){throw new feb('Only one CENTER widget may be added')}}yE(b);OH(a.f,b);c==zF&&(a.a=b);d=new UF(c);b.ab=d;JF(b,a.b);KF(b,a.c);IF(a);zE(b,a)}
function Jd(){var a,b,c,d,e,g,i,j,k,n,o,p;this.d=(b=si($doc),i=new iG((k=new rfb,new mB(xh(k.a))).a),g=new iG((n=new rfb,new mB(xh(n.a))).a),j=new iG((o=new rfb,new mB(xh(o.a))).a),d=new NF,e=new iG((p=new rfb,uh(p.a,"<span id='"),qfb(p,IB(b)),uh(p.a,"'><\/span>"),new mB(xh(p.a))).a),HF(d,i,(GF(),FF)),HF(d,g,zF),HF(d,j,DF),d.cb.style[clb]=dlb,d.cb.style[elb]=dlb,e.cb.style[clb]=dlb,e.cb.style[elb]=dlb,a=QB(e.cb),c=vi($doc,b),a.b?Th(a.b,a.a,a.c):SB(a.a),yE(d),OH(e.f,d),Xh(c.parentNode,d.cb,c),zE(d,e),this.a=g,this.b=i,this.c=j,e)}
function IF(a){var b,c,d,e,g,i,j,k,n,o,p,q,r,s,t,u;b=a.d;while(wD(b)>0){Vh(b,vD(b,0))}r=1;e=1;for(j=new $H(a.f);j.a<j.b.c-1;){d=YH(j);g=bq(d.ab,42).a;g==DF||g==EF?++r:(g==AF||g==FF||g==CF||g==BF)&&++e}s=Tp(jz,{114:1,122:1},43,r,0);for(i=0;i<r;++i){s[i]=new XF;s[i].b=$doc.createElement(flb);Sh(b,gH(s[i].b))}n=0;o=e-1;p=0;t=r-1;c=null;for(j=new $H(a.f);j.a<j.b.c-1;){d=YH(j);k=bq(d.ab,42);u=$doc.createElement(glb);k.c=u;k.c[hlb]=k.b;qC(k.c,ilb,k.d);k.c[elb]=rkb;k.c[clb]=rkb;if(k.a==DF){nC(s[p].b,u,s[p].a);Sh(u,gH(d.Zb()));u[jlb]=o-n+1;++p}else if(k.a==EF){nC(s[t].b,u,s[t].a);Sh(u,gH(d.Zb()));u[jlb]=o-n+1;--t}else if(k.a==zF){c=u}else if(LF(k.a)){q=s[p];nC(q.b,u,q.a++);Sh(u,gH(d.Zb()));u[klb]=t-p+1;++n}else if(MF(k.a)){q=s[p];nC(q.b,u,q.a);Sh(u,gH(d.Zb()));u[klb]=t-p+1;--o}}if(a.a){q=s[p];nC(q.b,c,q.a);Sh(c,gH(a.a.cb))}}
var dlb='100%',jlb='colSpan',klb='rowSpan';_=Ic.prototype;_.ob=function Mc(){ZJ(this.b,Ac(this.a.a))};_=zd.prototype=ud.prototype;_.eb=function Bd(){};_.gb=function Cd(){};_.hb=function Dd(){NL();lb(this,new PL(this))};_=Jd.prototype=Id.prototype;_.lb=function Kd(){return this.d};_.kb=function Md(a,b){a===(yd(),vd)?(ME(this.a),!!b&&hG(this.a,b)):a===wd?(ME(this.b),!!b&&hG(this.b,b)):a===xd?(ME(this.c),!!b&&hG(this.c,b)):undefined};_=Od.prototype=Nd.prototype;var PB=null;_=UB.prototype=TB.prototype;_=NF.prototype=yF.prototype;_.jc=function PF(a){var b;b=UE(this,a);if(b){a==this.a&&(this.a=null);IF(this)}return b};var zF,AF,BF,CF,DF,EF,FF;_=RF.prototype=QF.prototype;_=UF.prototype=TF.prototype;_=XF.prototype=WF.prototype;_=PL.prototype=LL.prototype;_.Fb=function QL(a){OL(this,bq(a,64))};_.Gb=function RL(){return ML};var jz=Wdb(nlb,'DockPanel$TmpRow;');pkb(gg)(1);