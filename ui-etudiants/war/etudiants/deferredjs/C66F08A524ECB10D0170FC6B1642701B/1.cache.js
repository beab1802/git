function Od(){}
function _F(){}
function fG(){}
function vc(a,b){a.db(b)}
function rG(a,b){$E(a,b,a.cb)}
function ZL(a){XL();this.a=a}
function XB(a){Vh(a.parentNode,a)}
function pc(a,b){return new zd(a,b)}
function Xh(c,a,b){return c.replaceChild(a,b)}
function Ai(b,a){return b.getElementById(a)}
function zd(a,b){yd();qb.call(this,a,b)}
function ZB(a,b,c){this.b=a;this.c=b;this.a=c}
function cG(a){this.b=(JG(),GG).a;this.d=(QG(),PG).a;this.a=a}
function YL(a,b){gq(b.f,56).b=false;pb(b,(iJ(),hJ),a.a)}
function UF(a,b){var c;c=gq(a.ab,42);c.d=b.a;!!c.c&&HC(c.c,tlb,b.a)}
function TF(a,b){var c;c=gq(a.ab,42);c.b=b.a;!!c.c&&(c.c[slb]=b.a,undefined)}
function VB(a){var b,c;WB();b=ii(a);c=hi(a);Sh(UB,a);return new ZB(b,c,a)}
function WB(){if(!UB){UB=ki($doc,Nkb);BE(UB,false);Sh(KH(),UB)}}
function WF(a){if(a==LF){return true}return a==KF}
function VF(a){if(a==MF){return true}return a==PF}
function xi(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function hi(a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function QF(){QF=wkb;JF=new _F;MF=new _F;LF=new _F;KF=new _F;NF=new _F;OF=new _F;PF=new _F}
function XF(){QF();GF.call(this);this.b=(JG(),GG);this.c=(QG(),PG);this.e[wlb]=0;this.e[xlb]=0}
function Ac(a){var b;!a.e&&(a.e=(b=pc((!a.k&&(a.k=new vp),a.k),(!a.f&&(a.f=new Jd(new Od)),a.f),!a.d&&(a.d=new Fd)),vc(b,(!a.o&&(a.o=new $I),a.o)),b));return a.e}
function RF(a,b,c){var d;if(c==JF){if(b==a.a){return}else if(a.a){throw new peb('Only one CENTER widget may be added')}}IE(b);YH(a.f,b);c==JF&&(a.a=b);d=new cG(c);b.ab=d;TF(b,a.b);UF(b,a.c);SF(a);JE(b,a)}
function Jd(){var a,b,c,d,e,g,i,j,k,n,o,p;this.d=(b=xi($doc),i=new sG((k=new Bfb,new rB(xh(k.a))).a),g=new sG((n=new Bfb,new rB(xh(n.a))).a),j=new sG((o=new Bfb,new rB(xh(o.a))).a),d=new XF,e=new sG((p=new Bfb,uh(p.a,"<span id='"),Afb(p,NB(b)),uh(p.a,"'><\/span>"),new rB(xh(p.a))).a),RF(d,i,(QF(),PF)),RF(d,g,JF),RF(d,j,NF),d.cb.style[nlb]=olb,d.cb.style[plb]=olb,e.cb.style[nlb]=olb,e.cb.style[plb]=olb,a=VB(e.cb),c=Ai($doc,b),a.b?Th(a.b,a.a,a.c):XB(a.a),IE(d),YH(e.f,d),Xh(c.parentNode,d.cb,c),JE(d,e),this.a=g,this.b=i,this.c=j,e)}
function SF(a){var b,c,d,e,g,i,j,k,n,o,p,q,r,s,t,u;b=a.d;while(b.children.length>0){Vh(b,b.children[0])}r=1;e=1;for(j=new iI(a.f);j.a<j.b.c-1;){d=gI(j);g=gq(d.ab,42).a;g==NF||g==OF?++r:(g==KF||g==PF||g==MF||g==LF)&&++e}s=Yp(oz,{114:1,122:1},43,r,0);for(i=0;i<r;++i){s[i]=new fG;s[i].b=ki($doc,qlb);Sh(b,qH(s[i].b))}n=0;o=e-1;p=0;t=r-1;c=null;for(j=new iI(a.f);j.a<j.b.c-1;){d=gI(j);k=gq(d.ab,42);u=ki($doc,rlb);k.c=u;k.c[slb]=k.b;HC(k.c,tlb,k.d);k.c[plb]=Bkb;k.c[nlb]=Bkb;if(k.a==NF){EC(s[p].b,u,s[p].a);Sh(u,qH(d.Yb()));u[ulb]=o-n+1;++p}else if(k.a==OF){EC(s[t].b,u,s[t].a);Sh(u,qH(d.Yb()));u[ulb]=o-n+1;--t}else if(k.a==JF){c=u}else if(VF(k.a)){q=s[p];EC(q.b,u,q.a++);Sh(u,qH(d.Yb()));u[vlb]=t-p+1;++n}else if(WF(k.a)){q=s[p];EC(q.b,u,q.a);Sh(u,qH(d.Yb()));u[vlb]=t-p+1;--o}}if(a.a){q=s[p];EC(q.b,c,q.a);Sh(c,qH(a.a.cb))}}
var olb='100%',ulb='colSpan',vlb='rowSpan';_=Ic.prototype;_.ob=function Mc(){hK(this.b,Ac(this.a.a))};_=zd.prototype=ud.prototype;_.eb=function Bd(){};_.gb=function Cd(){};_.hb=function Dd(){XL();lb(this,new ZL(this))};_=Jd.prototype=Id.prototype;_.lb=function Kd(){return this.d};_.kb=function Md(a,b){a===(yd(),vd)?(WE(this.a),!!b&&rG(this.a,b)):a===wd?(WE(this.b),!!b&&rG(this.b,b)):a===xd?(WE(this.c),!!b&&rG(this.c,b)):undefined};_=Od.prototype=Nd.prototype;var UB=null;_=ZB.prototype=YB.prototype;_=XF.prototype=IF.prototype;_.ic=function ZF(a){var b;b=cF(this,a);if(b){a==this.a&&(this.a=null);SF(this)}return b};var JF,KF,LF,MF,NF,OF,PF;_=_F.prototype=$F.prototype;_=cG.prototype=bG.prototype;_=fG.prototype=eG.prototype;_=ZL.prototype=VL.prototype;_.Fb=function $L(a){YL(this,gq(a,64))};_.Gb=function _L(){return WL};var oz=eeb(ylb,'DockPanel$TmpRow;');zkb(gg)(1);