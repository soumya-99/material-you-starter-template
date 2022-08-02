const Mt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}};Mt();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n){return n<0?-1:n===0?0:1}function Q(n,r,t){return(1-t)*n+t*r}function gt(n,r,t){return t<n?n:t>r?r:t}function It(n,r,t){return t<n?n:t>r?r:t}function U(n){return n=n%360,n<0&&(n=n+360),n}function Ct(n,r){return 180-Math.abs(Math.abs(n-r)-180)}function St(n,r){const t=n[0]*r[0][0]+n[1]*r[0][1]+n[2]*r[0][2],o=n[0]*r[1][0]+n[1]*r[1][1]+n[2]*r[1][2],e=n[0]*r[2][0]+n[1]*r[2][1]+n[2]*r[2][2];return[t,o,e]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],kt=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],et=[95.047,100,108.883];function Et(n,r,t){return(255<<24|(n&255)<<16|(r&255)<<8|t&255)>>>0}function st(n){return n>>16&255}function at(n){return n>>8&255}function ct(n){return n&255}function it(n,r,t){const o=kt,e=o[0][0]*n+o[0][1]*r+o[0][2]*t,a=o[1][0]*n+o[1][1]*r+o[1][2]*t,s=o[2][0]*n+o[2][1]*r+o[2][2]*t,c=x(e),i=x(a),h=x(s);return Et(c,i,h)}function Dt(n){const r=q(st(n)),t=q(at(n)),o=q(ct(n));return St([r,t,o],At)}function _(n){const r=(n+16)/116,t=r,o=r,e=24389/27,a=216/24389,c=n>8?r*r*r:n/e,i=r*r*r>a,h=i?o*o*o:n/e,u=i?t*t*t:n/e,f=et;return it(h*f[0],c*f[1],u*f[2])}function j(n){const r=Dt(n)[1]/100,t=216/24389;if(r<=t)return 24389/27*r;{const o=Math.pow(r,.3333333333333333);return 116*o-16}}function tt(n){return n>8?Math.pow((n+16)/116,3)*100:n/(24389/27)*100}function q(n){const r=n/255;return r<=.040449936?r/12.92*100:Math.pow((r+.055)/1.055,2.4)*100}function x(n){const r=n/100;let t=0;return r<=.0031308?t=r*12.92:t=1.055*Math.pow(r,1/2.4)-.055,gt(0,255,Math.round(t*255))}function wt(){return et}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(r,t,o,e,a,s,c,i,h,u){this.n=r,this.aw=t,this.nbb=o,this.ncb=e,this.c=a,this.nc=s,this.rgbD=c,this.fl=i,this.fLRoot=h,this.z=u}static make(r=wt(),t=200/Math.PI*tt(50)/100,o=50,e=2,a=!1){const s=r,c=s[0]*.401288+s[1]*.650173+s[2]*-.051461,i=s[0]*-.250268+s[1]*1.204414+s[2]*.045854,h=s[0]*-.002079+s[1]*.048952+s[2]*.953127,u=.8+e/10,f=u>=.9?Q(.59,.69,(u-.9)*10):Q(.525,.59,(u-.8)*10);let l=a?1:u*(1-1/3.6*Math.exp((-t-42)/92));l=l>1?1:l<0?0:l;const p=u,d=[l*(100/c)+1-l,l*(100/i)+1-l,l*(100/h)+1-l],b=1/(5*t+1),S=b*b*b*b,F=1-S,g=S*t+.1*F*F*Math.cbrt(5*t),w=tt(o)/r[1],L=1.48+Math.sqrt(w),I=.725/Math.pow(w,.2),T=I,y=[Math.pow(g*d[0]*c/100,.42),Math.pow(g*d[1]*i/100,.42),Math.pow(g*d[2]*h/100,.42)],M=[400*y[0]/(y[0]+27.13),400*y[1]/(y[1]+27.13),400*y[2]/(y[2]+27.13)],A=(2*M[0]+M[1]+.05*M[2])*I;return new D(w,A,I,T,f,p,d,g,Math.pow(g,.25),L)}}D.DEFAULT=D.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(r,t,o,e,a,s,c,i,h){this.hue=r,this.chroma=t,this.j=o,this.q=e,this.m=a,this.s=s,this.jstar=c,this.astar=i,this.bstar=h}distance(r){const t=this.jstar-r.jstar,o=this.astar-r.astar,e=this.bstar-r.bstar,a=Math.sqrt(t*t+o*o+e*e);return 1.41*Math.pow(a,.63)}static fromInt(r){return m.fromIntInViewingConditions(r,D.DEFAULT)}static fromIntInViewingConditions(r,t){const o=(r&16711680)>>16,e=(r&65280)>>8,a=r&255,s=q(o),c=q(e),i=q(a),h=.41233895*s+.35762064*c+.18051042*i,u=.2126*s+.7152*c+.0722*i,f=.01932141*s+.11916382*c+.95034478*i,l=.401288*h+.650173*u-.051461*f,p=-.250268*h+1.204414*u+.045854*f,d=-.002079*h+.048952*u+.953127*f,b=t.rgbD[0]*l,S=t.rgbD[1]*p,F=t.rgbD[2]*d,g=Math.pow(t.fl*Math.abs(b)/100,.42),w=Math.pow(t.fl*Math.abs(S)/100,.42),L=Math.pow(t.fl*Math.abs(F)/100,.42),I=H(b)*400*g/(g+27.13),T=H(S)*400*w/(w+27.13),y=H(F)*400*L/(L+27.13),M=(11*I+-12*T+y)/11,A=(I+T-2*y)/9,N=(20*I+20*T+21*y)/20,X=(40*I+20*T+y)/20,P=Math.atan2(A,M)*180/Math.PI,z=P<0?P+360:P>=360?P-360:P,$=z*Math.PI/180,ht=X*t.nbb,B=100*Math.pow(ht/t.aw,t.c*t.z),ut=4/t.c*Math.sqrt(B/100)*(t.aw+4)*t.fLRoot,lt=z<20.14?z+360:z,ft=.25*(Math.cos(lt*Math.PI/180+2)+3.8),mt=5e4/13*ft*t.nc*t.ncb*Math.sqrt(M*M+A*A)/(N+.305),K=Math.pow(mt,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),Z=K*Math.sqrt(B/100),Y=Z*t.fLRoot,pt=50*Math.sqrt(K*t.c/(t.aw+4)),dt=(1+100*.007)*B/(1+.007*B),v=1/.0228*Math.log(1+.0228*Y),yt=v*Math.cos($),bt=v*Math.sin($);return new m(z,Z,B,ut,Y,pt,dt,yt,bt)}static fromJch(r,t,o){return m.fromJchInViewingConditions(r,t,o,D.DEFAULT)}static fromJchInViewingConditions(r,t,o,e){const a=4/e.c*Math.sqrt(r/100)*(e.aw+4)*e.fLRoot,s=t*e.fLRoot,c=t/Math.sqrt(r/100),i=50*Math.sqrt(c*e.c/(e.aw+4)),h=o*Math.PI/180,u=(1+100*.007)*r/(1+.007*r),f=1/.0228*Math.log(1+.0228*s),l=f*Math.cos(h),p=f*Math.sin(h);return new m(o,t,r,a,s,i,u,l,p)}static fromUcs(r,t,o){return m.fromUcsInViewingConditions(r,t,o,D.DEFAULT)}static fromUcsInViewingConditions(r,t,o,e){const a=t,s=o,c=Math.sqrt(a*a+s*s),h=(Math.exp(c*.0228)-1)/.0228/e.fLRoot;let u=Math.atan2(s,a)*(180/Math.PI);u<0&&(u+=360);const f=r/(1-(r-100)*.007);return m.fromJchInViewingConditions(f,h,u,e)}toInt(){return this.viewed(D.DEFAULT)}viewed(r){const t=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(t/Math.pow(1.64-Math.pow(.29,r.n),.73),1/.9),e=this.hue*Math.PI/180,a=.25*(Math.cos(e+2)+3.8),s=r.aw*Math.pow(this.j/100,1/r.c/r.z),c=a*(5e4/13)*r.nc*r.ncb,i=s/r.nbb,h=Math.sin(e),u=Math.cos(e),f=23*(i+.305)*o/(23*c+11*o*u+108*o*h),l=f*u,p=f*h,d=(460*i+451*l+288*p)/1403,b=(460*i-891*l-261*p)/1403,S=(460*i-220*l-6300*p)/1403,F=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),g=H(d)*(100/r.fl)*Math.pow(F,1/.42),w=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),L=H(b)*(100/r.fl)*Math.pow(w,1/.42),I=Math.max(0,27.13*Math.abs(S)/(400-Math.abs(S))),T=H(S)*(100/r.fl)*Math.pow(I,1/.42),y=g/r.rgbD[0],M=L/r.rgbD[1],A=T/r.rgbD[2],N=1.86206786*y-1.01125463*M+.14918677*A,X=.38752654*y+.62144744*M-.00897398*A,W=-.0158415*y-.03412294*M+1.04996444*A;return it(N,X,W)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(r,t,o){this.internalHue=r,this.internalChroma=t,this.internalTone=o,this.setInternalState(this.toInt())}static from(r,t,o){return new C(r,t,o)}static fromInt(r){const t=m.fromInt(r),o=j(r);return new C(t.hue,t.chroma,o)}toInt(){return R(this.internalHue,this.internalChroma,this.internalTone)}get hue(){return this.internalHue}set hue(r){this.setInternalState(R(U(r),this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(r){this.setInternalState(R(this.internalHue,r,this.internalTone))}get tone(){return this.internalTone}set tone(r){this.setInternalState(R(this.internalHue,this.internalChroma,r))}setInternalState(r){const t=m.fromInt(r),o=j(r);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=o}}const Tt=.4,Ft=1,Lt=.2,Pt=.01;function R(n,r,t){return Ht(U(n),r,It(0,100,t),D.DEFAULT)}function Ht(n,r,t,o){if(r<1||Math.round(t)<=0||Math.round(t)>=100)return _(t);n=U(n);let e=r,a=r,s=0,c=!0,i=null;for(;Math.abs(s-e)>=Tt;){const h=qt(n,a,t);if(c){if(h!=null)return h.viewed(o);c=!1,a=s+(e-s)/2;continue}h===null?e=a:(i=h,s=a),a=s+(e-s)/2}return i===null?_(t):i.viewed(o)}function qt(n,r,t){let o=0,e=100,a=0,s=1e3,c=1e3,i=null;for(;Math.abs(o-e)>Pt;){a=o+(e-o)/2;const u=m.fromJch(a,r,n).toInt(),f=j(u),l=Math.abs(t-f);if(l<Lt){const p=m.fromInt(u),d=p.distance(m.fromJch(p.j,p.chroma,n));d<=Ft&&d<=c&&(s=l,c=d,i=p)}if(s===0&&c===0)break;f<t?o=a:e=a}return i}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static harmonize(r,t){const o=C.fromInt(r),e=C.fromInt(t),a=Ct(o.hue,e.hue),s=Math.min(a*.5,15),c=U(o.hue+s*J.rotationDirection(o.hue,e.hue));return C.from(c,o.chroma,o.tone).toInt()}static hctHue(r,t,o){const e=J.cam16Ucs(r,t,o),a=m.fromInt(e),s=m.fromInt(r);return C.from(a.hue,s.chroma,j(r)).toInt()}static cam16Ucs(r,t,o){const e=m.fromInt(r),a=m.fromInt(t),s=e.jstar,c=e.astar,i=e.bstar,h=a.jstar,u=a.astar,f=a.bstar,l=s+(h-s)*o,p=c+(u-c)*o,d=i+(f-i)*o;return m.fromUcs(l,p,d).toInt()}static rotationDirection(r,t){const o=t-r,e=t-r+360,a=t-r-360,s=Math.abs(o),c=Math.abs(e),i=Math.abs(a);return s<=c&&s<=i?o>=0?1:-1:c<=s&&c<=i?e>=0?1:-1:a>=0?1:-1}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(r,t){this.hue=r,this.chroma=t,this.cache=new Map}static fromInt(r){const t=C.fromInt(r);return E.fromHueAndChroma(t.hue,t.chroma)}static fromHueAndChroma(r,t){return new E(r,t)}tone(r){let t=this.cache.get(r);return t===void 0&&(t=C.from(this.hue,this.chroma,r).toInt(),this.cache.set(r,t)),t}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(r){const t=C.fromInt(r),o=t.hue;this.a1=E.fromHueAndChroma(o,Math.max(48,t.chroma)),this.a2=E.fromHueAndChroma(o,16),this.a3=E.fromHueAndChroma(o+60,24),this.n1=E.fromHueAndChroma(o,4),this.n2=E.fromHueAndChroma(o,8),this.error=E.fromHueAndChroma(25,84)}static of(r){return new O(r)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(r){this.props=r}get primary(){return this.props.primary}get primaryContainer(){return this.props.primaryContainer}get onPrimary(){return this.props.onPrimary}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondary(){return this.props.onSecondary}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get shadow(){return this.props.shadow}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(r){const t=O.of(r);return new V({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),shadow:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static dark(r){const t=O.of(r);return new V({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),shadow:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}toJSON(){return Object.assign({},this.props)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=n=>{const r=st(n),t=at(n),o=ct(n),e=[r.toString(16),t.toString(16),o.toString(16)];for(const[a,s]of e.entries())s.length===1&&(e[a]="0"+s);return"#"+e.join("")},rt=n=>{n=n.replace("#","");const r=n.length===3,t=n.length===6,o=n.length===8;if(!r&&!t&&!o)throw new Error("unexpected hex "+n);let e=0,a=0,s=0;return r?(e=k(n.slice(0,1).repeat(2)),a=k(n.slice(1,2).repeat(2)),s=k(n.slice(2,3).repeat(2))):t?(e=k(n.slice(0,2)),a=k(n.slice(2,4)),s=k(n.slice(4,6))):o&&(e=k(n.slice(2,4)),a=k(n.slice(4,6)),s=k(n.slice(6,8))),(255<<24|(e&255)<<16|(a&255)<<8|s&255)>>>0};function k(n){return parseInt(n,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n,r=[]){const t=O.of(n);return{source:n,schemes:{light:V.light(n),dark:V.dark(n)},palettes:{primary:t.a1,secondary:t.a2,tertiary:t.a3,neutral:t.n1,neutralVariant:t.n2,error:t.error},customColors:r.map(o=>Bt(n,o))}}function Bt(n,r){let t=r.value;const o=t,e=n;r.blend&&(t=J.harmonize(o,e));const s=O.of(t).a1;return{color:r,value:t,light:{color:s.tone(40),onColor:s.tone(100),colorContainer:s.tone(90),onColorContainer:s.tone(10)},dark:{color:s.tone(80),onColor:s.tone(20),colorContainer:s.tone(30),onColorContainer:s.tone(90)}}}function nt(n,r){var t;const o=(r==null?void 0:r.target)||document.body,a=((t=r==null?void 0:r.dark)!==null&&t!==void 0?t:!1)?n.schemes.dark:n.schemes.light;for(const[s,c]of Object.entries(a.toJSON())){const i=s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),h=Ot(c);o.style.setProperty(`--md-sys-color-${i}`,h)}}const Vt=document.querySelector(".col1"),Rt=document.querySelector(".col2"),jt=document.querySelector(".col3"),Jt=document.querySelector(".col4"),Ut=document.querySelector(".col5"),Nt=document.querySelector(".col6");Vt.style.backgroundColor="var(--md-sys-color-primary)";Rt.style.backgroundColor="var(--md-sys-color-on-primary)";jt.style.backgroundColor="var(--md-sys-color-secondary)";Jt.style.backgroundColor="var(--md-sys-color-on-secondary)";Ut.style.backgroundColor="var(--md-sys-color-tertiary)";Nt.style.backgroundColor="var(--md-sys-color-on-tertiary)";const G=document.getElementById("dark"),ot=document.getElementById("colr");ot.addEventListener("input",()=>{const n=ot.value,r=zt(rt(n),[{name:"custom-1",value:rt("#ff0000"),blend:!0}]),t=G.checked?window.matchMedia("(prefers-color-scheme: dark)").matches:window.matchMedia("(prefers-color-scheme: light)").matches;nt(r,{target:document.body,dark:t}),G.addEventListener("input",()=>{const o=G.checked?window.matchMedia("(prefers-color-scheme: dark)").matches:window.matchMedia("(prefers-color-scheme: light)").matches;nt(r,{target:document.body,dark:o})})});
