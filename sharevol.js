/*
 Copyright (c) 2012 Brandon Jones, Colin MacKenzie IV

 This software is provided 'as-is', without any express or implied
 warranty. In no event will the authors be held liable for any damages
 arising from the use of this software.

 Permission is granted to anyone to use this software for any purpose,
 including commercial applications, and to alter it and redistribute it
 freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.

    2. Altered source versions must be plainly marked as such, and must not
    be misrepresented as being the original software.

    3. This notice may not be removed or altered from any source
    distribution.
*/
(function(z,G){"object"===typeof exports?module.exports=G(global):"function"===typeof define&&define.amd?define([],function(){return G(z)}):G(z)})(this,function(z){function G(a){return r=a}function J(){return r="undefined"!==typeof Float32Array?Float32Array:Array}var H={};(function(){if("undefined"!=typeof Float32Array){var a=new Float32Array(1),b=new Int32Array(a.buffer);H.invsqrt=function(c){a[0]=c;b[0]=1597463007-(b[0]>>1);var d=a[0];return d*(1.5-.5*c*d*d)}}else H.invsqrt=function(a){return 1/
Math.sqrt(a)}})();var r=null;J();var u={create:function(a){var b=new r(3);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2]):b[0]=b[1]=b[2]=0;return b},createFrom:function(a,b,c){var d=new r(3);d[0]=a;d[1]=b;d[2]=c;return d},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b},equal:function(a,b){return a===b||1E-6>Math.abs(a[0]-b[0])&&1E-6>Math.abs(a[1]-b[1])&&1E-6>Math.abs(a[2]-b[2])},add:function(a,b,c){if(!c||a===c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c},
subtract:function(a,b,c){if(!c||a===c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c},multiply:function(a,b,c){if(!c||a===c)return a[0]*=b[0],a[1]*=b[1],a[2]*=b[2],a;c[0]=a[0]*b[0];c[1]=a[1]*b[1];c[2]=a[2]*b[2];return c},negate:function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b},scale:function(a,b,c){if(!c||a===c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c},normalize:function(a,b){b||(b=a);var c=a[0],
d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(!g)return b[0]=0,b[1]=0,b[2]=0,b;if(1===g)return b[0]=c,b[1]=d,b[2]=e,b;g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b},cross:function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c},length:function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)},squaredLength:function(a){var b=a[0],c=a[1];a=a[2];return b*b+c*c+a*a},dot:function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},direction:function(a,
b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d},dist:function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return Math.sqrt(c*c+d*d+e*e)}},K=null,B=new r(4);u.unproject=function(a,b,c,d,e){e||(e=a);K||(K=A.create());var g=K;B[0]=2*(a[0]-d[0])/d[2]-1;B[1]=2*(a[1]-d[1])/d[3]-1;B[2]=
2*a[2]-1;B[3]=1;A.multiply(c,b,g);if(!A.inverse(g))return null;A.multiplyVec4(g,B);if(0===B[3])return null;e[0]=B[0]/B[3];e[1]=B[1]/B[3];e[2]=B[2]/B[3];return e};var O=u.createFrom(1,0,0),P=u.createFrom(0,1,0),Q=u.createFrom(0,0,1),C=u.create();u.rotationTo=function(a,b,c){c||(c=m.create());var d=u.dot(a,b);if(1<=d)m.set(R,c);else if(-.999999>d)u.cross(O,a,C),1E-6>u.length(C)&&u.cross(P,a,C),1E-6>u.length(C)&&u.cross(Q,a,C),u.normalize(C),m.fromAngleAxis(Math.PI,C,c);else{var d=Math.sqrt(2*(1+d)),
e=1/d;u.cross(a,b,C);c[0]=C[0]*e;c[1]=C[1]*e;c[2]=C[2]*e;c[3]=.5*d;m.normalize(c)}1<c[3]?c[3]=1:-1>c[3]&&(c[3]=-1);return c};u.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var D={create:function(a){var b=new r(9);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8]):b[0]=b[1]=b[2]=b[3]=b[4]=b[5]=b[6]=b[7]=b[8]=0;return b},createFrom:function(a,b,c,d,e,g,f,h,l){var k=new r(9);k[0]=a;k[1]=b;k[2]=c;k[3]=d;k[4]=e;k[5]=g;k[6]=f;k[7]=h;k[8]=l;return k},
determinant:function(a){var b=a[3],c=a[4],d=a[5],e=a[6],g=a[7],f=a[8];return a[0]*(f*c-d*g)+a[1]*(-f*b+d*e)+a[2]*(g*b-c*e)},inverse:function(a,b){var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],l=a[6],k=a[7],p=a[8],n=p*f-h*k,F=-p*g+h*l,t=k*g-f*l,q=c*n+d*F+e*t;if(!q)return null;q=1/q;b||(b=D.create());b[0]=n*q;b[1]=(-p*d+e*k)*q;b[2]=(h*d-e*f)*q;b[3]=F*q;b[4]=(p*c-e*l)*q;b[5]=(-h*c+e*g)*q;b[6]=t*q;b[7]=(-k*c+d*l)*q;b[8]=(f*c-d*g)*q;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],
f=a[3],h=a[4],l=a[5],k=a[6],p=a[7];a=a[8];var n=b[0],F=b[1],t=b[2],q=b[3],m=b[4],s=b[5],r=b[6],v=b[7];b=b[8];c[0]=n*d+F*f+t*k;c[1]=n*e+F*h+t*p;c[2]=n*g+F*l+t*a;c[3]=q*d+m*f+s*k;c[4]=q*e+m*h+s*p;c[5]=q*g+m*l+s*a;c[6]=r*d+v*f+b*k;c[7]=r*e+v*h+b*p;c[8]=r*g+v*l+b*a;return c},multiplyVec2:function(a,b,c){c||(c=b);var d=b[0];b=b[1];c[0]=d*a[0]+b*a[3]+a[6];c[1]=d*a[1]+b*a[4]+a[7];return c},multiplyVec3:function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=d*a[0]+e*a[3]+b*a[6];c[1]=d*a[1]+e*a[4]+b*a[7];
c[2]=d*a[2]+e*a[5]+b*a[8];return c},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b},equal:function(a,b){return a===b||1E-6>Math.abs(a[0]-b[0])&&1E-6>Math.abs(a[1]-b[1])&&1E-6>Math.abs(a[2]-b[2])&&1E-6>Math.abs(a[3]-b[3])&&1E-6>Math.abs(a[4]-b[4])&&1E-6>Math.abs(a[5]-b[5])&&1E-6>Math.abs(a[6]-b[6])&&1E-6>Math.abs(a[7]-b[7])&&1E-6>Math.abs(a[8]-b[8])},identity:function(a){a||(a=D.create());a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=
0;a[6]=0;a[7]=0;a[8]=1;return a},transpose:function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b},toMat4:function(a,b){b||(b=A.create());b[15]=1;b[14]=0;b[13]=0;b[12]=0;b[11]=0;b[10]=a[8];b[9]=a[7];b[8]=a[6];b[7]=0;b[6]=a[5];b[5]=a[4];b[4]=a[3];b[3]=0;b[2]=a[2];b[1]=a[1];b[0]=a[0];return b},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+
", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"}},A={create:function(a){var b=new r(16);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b},createFrom:function(a,b,c,d,e,g,f,h,l,k,p,n,F,t,q,m){var s=new r(16);s[0]=a;s[1]=b;s[2]=c;s[3]=d;s[4]=e;s[5]=g;s[6]=f;s[7]=h;s[8]=l;s[9]=k;s[10]=p;s[11]=n;s[12]=F;s[13]=t;s[14]=q;s[15]=m;return s},set:function(a,
b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b},equal:function(a,b){return a===b||1E-6>Math.abs(a[0]-b[0])&&1E-6>Math.abs(a[1]-b[1])&&1E-6>Math.abs(a[2]-b[2])&&1E-6>Math.abs(a[3]-b[3])&&1E-6>Math.abs(a[4]-b[4])&&1E-6>Math.abs(a[5]-b[5])&&1E-6>Math.abs(a[6]-b[6])&&1E-6>Math.abs(a[7]-b[7])&&1E-6>Math.abs(a[8]-b[8])&&1E-6>Math.abs(a[9]-b[9])&&1E-6>Math.abs(a[10]-b[10])&&
1E-6>Math.abs(a[11]-b[11])&&1E-6>Math.abs(a[12]-b[12])&&1E-6>Math.abs(a[13]-b[13])&&1E-6>Math.abs(a[14]-b[14])&&1E-6>Math.abs(a[15]-b[15])},identity:function(a){a||(a=A.create());a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a},transpose:function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;
return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b},determinant:function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],l=a[7],k=a[8],p=a[9],n=a[10],F=a[11],t=a[12],q=a[13],m=a[14];a=a[15];return t*p*h*e-k*q*h*e-t*f*n*e+g*q*n*e+k*f*m*e-g*p*m*e-t*p*d*l+k*q*d*l+t*c*n*l-b*q*n*l-k*c*m*l+b*p*m*l+t*f*d*F-g*q*d*F-t*c*h*F+b*q*h*F+g*c*m*F-b*f*m*F-k*f*d*a+g*p*d*
a+k*c*h*a-b*p*h*a-g*c*n*a+b*f*n*a},inverse:function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],l=a[6],k=a[7],p=a[8],n=a[9],m=a[10],t=a[11],q=a[12],r=a[13],s=a[14],u=a[15],v=c*h-d*f,y=c*l-e*f,w=c*k-g*f,x=d*l-e*h,z=d*k-g*h,A=e*k-g*l,B=p*r-n*q,C=p*s-m*q,I=p*u-t*q,D=n*s-m*r,G=n*u-t*r,H=m*u-t*s,E=v*H-y*G+w*D+x*I-z*C+A*B;if(!E)return null;E=1/E;b[0]=(h*H-l*G+k*D)*E;b[1]=(-d*H+e*G-g*D)*E;b[2]=(r*A-s*z+u*x)*E;b[3]=(-n*A+m*z-t*x)*E;b[4]=(-f*H+l*I-k*C)*E;b[5]=(c*H-e*I+g*C)*E;b[6]=(-q*A+s*w-
u*y)*E;b[7]=(p*A-m*w+t*y)*E;b[8]=(f*G-h*I+k*B)*E;b[9]=(-c*G+d*I-g*B)*E;b[10]=(q*z-r*w+u*v)*E;b[11]=(-p*z+n*w-t*v)*E;b[12]=(-f*D+h*C-l*B)*E;b[13]=(c*D-d*C+e*B)*E;b[14]=(-q*x+r*y-s*v)*E;b[15]=(p*x-n*y+m*v)*E;return b},toRotationMat:function(a,b){b||(b=A.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b},toMat3:function(a,b){b||(b=D.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=
a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b},toInverseMat3:function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],l=a[8],k=a[9],p=a[10],n=p*f-h*k,m=-p*g+h*l,t=k*g-f*l,q=c*n+d*m+e*t;if(!q)return null;q=1/q;b||(b=D.create());b[0]=n*q;b[1]=(-p*d+e*k)*q;b[2]=(h*d-e*f)*q;b[3]=m*q;b[4]=(p*c-e*l)*q;b[5]=(-h*c+e*g)*q;b[6]=t*q;b[7]=(-k*c+d*l)*q;b[8]=(f*c-d*g)*q;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],l=a[5],k=a[6],p=a[7],n=a[8],m=a[9],t=
a[10],q=a[11],r=a[12],s=a[13],u=a[14];a=a[15];var v=b[0],y=b[1],w=b[2],x=b[3];c[0]=v*d+y*h+w*n+x*r;c[1]=v*e+y*l+w*m+x*s;c[2]=v*g+y*k+w*t+x*u;c[3]=v*f+y*p+w*q+x*a;v=b[4];y=b[5];w=b[6];x=b[7];c[4]=v*d+y*h+w*n+x*r;c[5]=v*e+y*l+w*m+x*s;c[6]=v*g+y*k+w*t+x*u;c[7]=v*f+y*p+w*q+x*a;v=b[8];y=b[9];w=b[10];x=b[11];c[8]=v*d+y*h+w*n+x*r;c[9]=v*e+y*l+w*m+x*s;c[10]=v*g+y*k+w*t+x*u;c[11]=v*f+y*p+w*q+x*a;v=b[12];y=b[13];w=b[14];x=b[15];c[12]=v*d+y*h+w*n+x*r;c[13]=v*e+y*l+w*m+x*s;c[14]=v*g+y*k+w*t+x*u;c[15]=v*f+y*p+
w*q+x*a;return c},multiplyVec3:function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c},multiplyVec4:function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c},translate:function(a,b,c){var d=b[0],e=b[1];b=b[2];var g,f,h,l,k,p,n,m,t,q,r,s;if(!c||a===c)return a[12]=
a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;g=a[0];f=a[1];h=a[2];l=a[3];k=a[4];p=a[5];n=a[6];m=a[7];t=a[8];q=a[9];r=a[10];s=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=l;c[4]=k;c[5]=p;c[6]=n;c[7]=m;c[8]=t;c[9]=q;c[10]=r;c[11]=s;c[12]=g*d+k*e+t*b+a[12];c[13]=f*d+p*e+q*b+a[13];c[14]=h*d+n*e+r*b+a[14];c[15]=l*d+m*e+s*b+a[15];return c},scale:function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a===c)return a[0]*=d,a[1]*=d,a[2]*=d,a[3]*=
d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c},rotate:function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c),h,l,k,p,n,m,t,q,r,s,u,v,y,w,x,z,A,B,C,D;if(!f)return null;1!==f&&(f=1/f,e*=f,g*=f,c*=f);h=Math.sin(b);l=Math.cos(b);k=1-l;b=a[0];f=a[1];p=a[2];n=a[3];
m=a[4];t=a[5];q=a[6];r=a[7];s=a[8];u=a[9];v=a[10];y=a[11];w=e*e*k+l;x=g*e*k+c*h;z=c*e*k-g*h;A=e*g*k-c*h;B=g*g*k+l;C=c*g*k+e*h;D=e*c*k+g*h;e=g*c*k-e*h;g=c*c*k+l;d?a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]):d=a;d[0]=b*w+m*x+s*z;d[1]=f*w+t*x+u*z;d[2]=p*w+q*x+v*z;d[3]=n*w+r*x+y*z;d[4]=b*A+m*B+s*C;d[5]=f*A+t*B+u*C;d[6]=p*A+q*B+v*C;d[7]=n*A+r*B+y*C;d[8]=b*D+m*e+s*g;d[9]=f*D+t*e+u*g;d[10]=p*D+q*e+v*g;d[11]=n*D+r*e+y*g;return d},rotateX:function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=
a[4],g=a[5],f=a[6],h=a[7],l=a[8],k=a[9],p=a[10],n=a[11];c?a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+l*d;c[5]=g*b+k*d;c[6]=f*b+p*d;c[7]=h*b+n*d;c[8]=e*-d+l*b;c[9]=g*-d+k*b;c[10]=f*-d+p*b;c[11]=h*-d+n*b;return c},rotateY:function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],l=a[8],k=a[9],p=a[10],n=a[11];c?a!==c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=
e*b+l*-d;c[1]=g*b+k*-d;c[2]=f*b+p*-d;c[3]=h*b+n*-d;c[8]=e*d+l*b;c[9]=g*d+k*b;c[10]=f*d+p*b;c[11]=h*d+n*b;return c},rotateZ:function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],l=a[4],k=a[5],p=a[6],n=a[7];c?a!==c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*d;c[1]=g*b+k*d;c[2]=f*b+p*d;c[3]=h*b+n*d;c[4]=e*-d+l*b;c[5]=g*-d+k*b;c[6]=f*-d+p*b;c[7]=h*-d+n*b;return c},frustum:function(a,b,c,d,e,g,f){f||(f=A.create());
var h=b-a,l=d-c,k=g-e;f[0]=2*e/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2*e/l;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/l;f[10]=-(g+e)/k;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/k;f[15]=0;return f},perspective:function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return A.frustum(-b,b,-a,a,c,d,e)},ortho:function(a,b,c,d,e,g,f){f||(f=A.create());var h=b-a,l=d-c,k=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/l;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/k;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/l;f[14]=-(g+e)/k;f[15]=
1;return f},lookAt:function(a,b,c,d){d||(d=A.create());var e,g,f,h,l,k,p,n,m=a[0],r=a[1];a=a[2];f=c[0];h=c[1];g=c[2];p=b[0];c=b[1];e=b[2];if(m===p&&r===c&&a===e)return A.identity(d);b=m-p;c=r-c;p=a-e;n=1/Math.sqrt(b*b+c*c+p*p);b*=n;c*=n;p*=n;e=h*p-g*c;g=g*b-f*p;f=f*c-h*b;(n=Math.sqrt(e*e+g*g+f*f))?(n=1/n,e*=n,g*=n,f*=n):f=g=e=0;h=c*f-p*g;l=p*e-b*f;k=b*g-c*e;(n=Math.sqrt(h*h+l*l+k*k))?(n=1/n,h*=n,l*=n,k*=n):k=l=h=0;d[0]=e;d[1]=h;d[2]=b;d[3]=0;d[4]=g;d[5]=l;d[6]=c;d[7]=0;d[8]=f;d[9]=k;d[10]=p;d[11]=
0;d[12]=-(e*m+g*r+f*a);d[13]=-(h*m+l*r+k*a);d[14]=-(b*m+c*r+p*a);d[15]=1;return d},fromRotationTranslation:function(a,b,c){c||(c=A.create());var d=a[0],e=a[1],g=a[2],f=a[3],h=d+d,l=e+e,k=g+g;a=d*h;var p=d*l,d=d*k,m=e*l,e=e*k,g=g*k,h=f*h,l=f*l,f=f*k;c[0]=1-(m+g);c[1]=p+f;c[2]=d-l;c[3]=0;c[4]=p-f;c[5]=1-(a+g);c[6]=e+h;c[7]=0;c[8]=d+l;c[9]=e-h;c[10]=1-(a+m);c[11]=0;c[12]=b[0];c[13]=b[1];c[14]=b[2];c[15]=1;return c},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+
a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"}},m={create:function(a){var b=new r(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):b[0]=b[1]=b[2]=b[3]=0;return b},createFrom:function(a,b,c,d){var e=new r(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},equal:function(a,b){return a===b||1E-6>Math.abs(a[0]-b[0])&&1E-6>Math.abs(a[1]-b[1])&&1E-6>Math.abs(a[2]-b[2])&&1E-6>Math.abs(a[3]-
b[3])},identity:function(a){a||(a=m.create());a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a}},R=m.identity();m.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a===b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};m.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};m.inverse=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[3],c=(c=c*c+d*d+e*e+g*g)?1/c:0;if(!b||a===b)return a[0]*=-c,a[1]*=-c,a[2]*=-c,a[3]*=c,a;b[0]=
-a[0]*c;b[1]=-a[1]*c;b[2]=-a[2]*c;b[3]=a[3]*c;return b};m.conjugate=function(a,b){if(!b||a===b)return a[0]*=-1,a[1]*=-1,a[2]*=-1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};m.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};m.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(0===f)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};m.add=function(a,b,c){if(!c||a===c)return a[0]+=
b[0],a[1]+=b[1],a[2]+=b[2],a[3]+=b[3],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];c[3]=a[3]+b[3];return c};m.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],h=b[1],l=b[2];b=b[3];c[0]=d*b+a*f+e*l-g*h;c[1]=e*b+a*h+g*f-d*l;c[2]=g*b+a*l+d*h-e*f;c[3]=a*b-d*f-e*h-g*l;return c};m.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],h=a[2];a=a[3];var l=a*d+f*g-h*e,k=a*e+h*d-b*g,m=a*g+b*e-f*d,d=-b*d-f*e-h*g;c[0]=l*a+d*-b+k*-h-m*-f;c[1]=k*a+d*-f+m*
-b-l*-h;c[2]=m*a+d*-h+l*-f-k*-b;return c};m.scale=function(a,b,c){if(!c||a===c)return a[0]*=b,a[1]*=b,a[2]*=b,a[3]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;c[3]=a[3]*b;return c};m.toMat3=function(a,b){b||(b=D.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,l=e+e,k=c*f,m=c*h,c=c*l,n=d*h,d=d*l,e=e*l,f=g*f,h=g*h,g=g*l;b[0]=1-(n+e);b[1]=m+g;b[2]=c-h;b[3]=m-g;b[4]=1-(k+e);b[5]=d+f;b[6]=c+h;b[7]=d-f;b[8]=1-(k+n);return b};m.toMat4=function(a,b){b||(b=A.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=
c+c,h=d+d,l=e+e,k=c*f,m=c*h,c=c*l,n=d*h,d=d*l,e=e*l,f=g*f,h=g*h,g=g*l;b[0]=1-(n+e);b[1]=m+g;b[2]=c-h;b[3]=0;b[4]=m-g;b[5]=1-(k+e);b[6]=d+f;b[7]=0;b[8]=c+h;b[9]=d-f;b[10]=1-(k+n);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};m.slerp=function(a,b,c,d){d||(d=a);var e=a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3],g,f;if(1<=Math.abs(e))return d!==a&&(d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3]),d;g=Math.acos(e);f=Math.sqrt(1-e*e);if(.001>Math.abs(f))return d[0]=.5*a[0]+.5*b[0],d[1]=.5*a[1]+.5*b[1],d[2]=.5*a[2]+
.5*b[2],d[3]=.5*a[3]+.5*b[3],d;e=Math.sin((1-c)*g)/f;c=Math.sin(c*g)/f;d[0]=a[0]*e+b[0]*c;d[1]=a[1]*e+b[1]*c;d[2]=a[2]*e+b[2]*c;d[3]=a[3]*e+b[3]*c;return d};m.fromRotationMatrix=function(a,b){b||(b=m.create());var c=a[0]+a[4]+a[8],d;if(0<c)d=Math.sqrt(c+1),b[3]=.5*d,d=.5/d,b[0]=(a[7]-a[5])*d,b[1]=(a[2]-a[6])*d,b[2]=(a[3]-a[1])*d;else{d=m.fromRotationMatrix.s_iNext=m.fromRotationMatrix.s_iNext||[1,2,0];c=0;a[4]>a[0]&&(c=1);a[8]>a[3*c+c]&&(c=2);var e=d[c],g=d[e];d=Math.sqrt(a[3*c+c]-a[3*e+e]-a[3*g+
g]+1);b[c]=.5*d;d=.5/d;b[3]=(a[3*g+e]-a[3*e+g])*d;b[e]=(a[3*e+c]+a[3*c+e])*d;b[g]=(a[3*g+c]+a[3*c+g])*d}return b};D.toQuat4=m.fromRotationMatrix;(function(){var a=D.create();m.fromAxes=function(b,c,d,e){a[0]=c[0];a[3]=c[1];a[6]=c[2];a[1]=d[0];a[4]=d[1];a[7]=d[2];a[2]=b[0];a[5]=b[1];a[8]=b[2];return m.fromRotationMatrix(a,e)}})();m.identity=function(a){a||(a=m.create());a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a};m.fromAngleAxis=function(a,b,c){c||(c=m.create());a*=.5;var d=Math.sin(a);c[3]=Math.cos(a);
c[0]=d*b[0];c[1]=d*b[1];c[2]=d*b[2];return c};m.toAngleAxis=function(a,b){b||(b=a);var c=a[0]*a[0]+a[1]*a[1]+a[2]*a[2];0<c?(b[3]=2*Math.acos(a[3]),c=H.invsqrt(c),b[0]=a[0]*c,b[1]=a[1]*c,b[2]=a[2]*c):(b[3]=0,b[0]=1,b[1]=0,b[2]=0);return b};m.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};var M={create:function(a){var b=new r(2);a?(b[0]=a[0],b[1]=a[1]):(b[0]=0,b[1]=0);return b},createFrom:function(a,b){var c=new r(2);c[0]=a;c[1]=b;return c},add:function(a,b,c){c||(c=b);c[0]=a[0]+
b[0];c[1]=a[1]+b[1];return c},subtract:function(a,b,c){c||(c=b);c[0]=a[0]-b[0];c[1]=a[1]-b[1];return c},multiply:function(a,b,c){c||(c=b);c[0]=a[0]*b[0];c[1]=a[1]*b[1];return c},divide:function(a,b,c){c||(c=b);c[0]=a[0]/b[0];c[1]=a[1]/b[1];return c},scale:function(a,b,c){c||(c=a);c[0]=a[0]*b;c[1]=a[1]*b;return c},dist:function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(c*c+d*d)},set:function(a,b){b[0]=a[0];b[1]=a[1];return b},equal:function(a,b){return a===b||1E-6>Math.abs(a[0]-b[0])&&1E-6>
Math.abs(a[1]-b[1])},negate:function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];return b},normalize:function(a,b){b||(b=a);var c=a[0]*a[0]+a[1]*a[1];0<c?(c=Math.sqrt(c),b[0]=a[0]/c,b[1]=a[1]/c):b[0]=b[1]=0;return b},cross:function(a,b,c){a=a[0]*b[1]-a[1]*b[0];if(!c)return a;c[0]=c[1]=0;c[2]=a;return c},length:function(a){var b=a[0];a=a[1];return Math.sqrt(b*b+a*a)},squaredLength:function(a){var b=a[0];a=a[1];return b*b+a*a},dot:function(a,b){return a[0]*b[0]+a[1]*b[1]},direction:function(a,b,c){c||(c=a);
var d=a[0]-b[0];a=a[1]-b[1];b=d*d+a*a;if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/Math.sqrt(b);c[0]=d*b;c[1]=a*b;return c},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);return d},str:function(a){return"["+a[0]+", "+a[1]+"]"}},L={create:function(a){var b=new r(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):b[0]=b[1]=b[2]=b[3]=0;return b},createFrom:function(a,b,c,d){var e=new r(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=
a[3];return b},equal:function(a,b){return a===b||1E-6>Math.abs(a[0]-b[0])&&1E-6>Math.abs(a[1]-b[1])&&1E-6>Math.abs(a[2]-b[2])&&1E-6>Math.abs(a[3]-b[3])},identity:function(a){a||(a=L.create());a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a},transpose:function(a,b){if(!b||a===b){var c=a[1];a[1]=a[2];a[2]=c;return a}b[0]=a[0];b[1]=a[2];b[2]=a[1];b[3]=a[3];return b},determinant:function(a){return a[0]*a[3]-a[2]*a[1]},inverse:function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=c*g-e*d;if(!f)return null;f=1/
f;b[0]=g*f;b[1]=-d*f;b[2]=-e*f;b[3]=c*f;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];c[0]=d*b[0]+e*b[2];c[1]=d*b[1]+e*b[3];c[2]=g*b[0]+a*b[2];c[3]=g*b[1]+a*b[3];return c},rotate:function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=Math.sin(b);b=Math.cos(b);c[0]=d*b+e*f;c[1]=d*-f+e*b;c[2]=g*b+a*f;c[3]=g*-f+a*b;return c},multiplyVec2:function(a,b,c){c||(c=b);var d=b[0];b=b[1];c[0]=d*a[0]+b*a[1];c[1]=d*a[2]+b*a[3];return c},scale:function(a,b,c){c||(c=a);var d=
a[1],e=a[2],g=a[3],f=b[0];b=b[1];c[0]=a[0]*f;c[1]=d*b;c[2]=e*f;c[3]=g*b;return c},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"}},N={create:function(a){var b=new r(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):(b[0]=0,b[1]=0,b[2]=0,b[3]=0);return b},createFrom:function(a,b,c,d){var e=new r(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},add:function(a,b,c){c||(c=b);c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];c[3]=a[3]+b[3];return c},subtract:function(a,b,c){c||(c=b);c[0]=a[0]-b[0];c[1]=
a[1]-b[1];c[2]=a[2]-b[2];c[3]=a[3]-b[3];return c},multiply:function(a,b,c){c||(c=b);c[0]=a[0]*b[0];c[1]=a[1]*b[1];c[2]=a[2]*b[2];c[3]=a[3]*b[3];return c},divide:function(a,b,c){c||(c=b);c[0]=a[0]/b[0];c[1]=a[1]/b[1];c[2]=a[2]/b[2];c[3]=a[3]/b[3];return c},scale:function(a,b,c){c||(c=a);c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;c[3]=a[3]*b;return c},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},equal:function(a,b){return a===b||1E-6>Math.abs(a[0]-b[0])&&1E-6>Math.abs(a[1]-b[1])&&1E-6>
Math.abs(a[2]-b[2])&&1E-6>Math.abs(a[3]-b[3])},negate:function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=-a[3];return b},length:function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)},squaredLength:function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return b*b+c*c+d*d+a*a},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);d[3]=a[3]+c*(b[3]-a[3]);return d},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"}};
z&&(z.glMatrixArrayType=r,z.MatrixArray=r,z.setMatrixArrayType=G,z.determineMatrixArrayType=J,z.glMath=H,z.vec2=M,z.vec3=u,z.vec4=N,z.mat2=L,z.mat3=D,z.mat4=A,z.quat4=m);return{glMatrixArrayType:r,MatrixArray:r,setMatrixArrayType:G,determineMatrixArrayType:J,glMath:H,vec2:M,vec3:u,vec4:N,mat2:L,mat3:D,mat4:A,quat4:m}});
/*
 dat-gui JavaScript Controller Library
 http://code.google.com/p/dat-gui

 Copyright 2011 Data Arts Team, Google Creative Lab

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0
*/
var dat=dat||{};dat.gui=dat.gui||{};dat.utils=dat.utils||{};dat.controllers=dat.controllers||{};dat.dom=dat.dom||{};dat.color=dat.color||{};dat.utils.css=function(){return{load:function(f,a){a=a||document;var d=a.createElement("link");d.type="text/css";d.rel="stylesheet";d.href=f;a.getElementsByTagName("head")[0].appendChild(d)},inject:function(f,a){a=a||document;var d=document.createElement("style");d.type="text/css";d.innerHTML=f;a.getElementsByTagName("head")[0].appendChild(d)}}}();
dat.utils.common=function(){var f=Array.prototype.forEach,a=Array.prototype.slice;return{BREAK:{},extend:function(d){this.each(a.call(arguments,1),function(a){for(var c in a)this.isUndefined(a[c])||(d[c]=a[c])},this);return d},defaults:function(d){this.each(a.call(arguments,1),function(a){for(var c in a)this.isUndefined(d[c])&&(d[c]=a[c])},this);return d},compose:function(){var d=a.call(arguments);return function(){for(var e=a.call(arguments),c=d.length-1;0<=c;c--)e=[d[c].apply(this,e)];return e[0]}},
each:function(a,e,c){if(a)if(f&&a.forEach&&a.forEach===f)a.forEach(e,c);else if(a.length===a.length+0)for(var b=0,p=a.length;b<p&&!(b in a&&e.call(c,a[b],b)===this.BREAK);b++);else for(b in a)if(e.call(c,a[b],b)===this.BREAK)break},defer:function(a){setTimeout(a,0)},toArray:function(d){return d.toArray?d.toArray():a.call(d)},isUndefined:function(a){return void 0===a},isNull:function(a){return null===a},isNaN:function(a){return a!==a},isArray:Array.isArray||function(a){return a.constructor===Array},
isObject:function(a){return a===Object(a)},isNumber:function(a){return a===a+0},isString:function(a){return a===a+""},isBoolean:function(a){return!1===a||!0===a},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)}}}();
dat.controllers.Controller=function(f){var a=function(a,e){this.initialValue=a[e];this.domElement=document.createElement("div");this.object=a;this.property=e;this.__onFinishChange=this.__onChange=void 0};f.extend(a.prototype,{onChange:function(a){this.__onChange=a;return this},onFinishChange:function(a){this.__onFinishChange=a;return this},setValue:function(a){this.object[this.property]=a;this.__onChange&&this.__onChange.call(this,a);this.updateDisplay();return this},getValue:function(){return this.object[this.property]},
updateDisplay:function(){return this},isModified:function(){return this.initialValue!==this.getValue()}});return a}(dat.utils.common);
dat.dom.dom=function(f){function a(b){if("0"===b||f.isUndefined(b))return 0;b=b.match(e);return f.isNull(b)?0:parseFloat(b[1])}var d={};f.each({HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},function(b,a){f.each(b,function(b){d[b]=a})});var e=/(\d+(\.\d+)?)px/,c={makeSelectable:function(b,a){void 0!==b&&void 0!==b.style&&(b.onselectstart=a?function(){return!1}:function(){},b.style.MozUserSelect=a?"auto":"none",b.style.KhtmlUserSelect=
a?"auto":"none",b.unselectable=a?"on":"off")},makeFullscreen:function(b,a,c){f.isUndefined(a)&&(a=!0);f.isUndefined(c)&&(c=!0);b.style.position="absolute";a&&(b.style.left=0,b.style.right=0);c&&(b.style.top=0,b.style.bottom=0)},fakeEvent:function(b,a,c,e){c=c||{};var r=d[a];if(!r)throw Error("Event type "+a+" not supported.");var n=document.createEvent(r);switch(r){case "MouseEvents":n.initMouseEvent(a,c.bubbles||!1,c.cancelable||!0,window,c.clickCount||1,0,0,c.x||c.clientX||0,c.y||c.clientY||0,!1,
!1,!1,!1,0,null);break;case "KeyboardEvents":r=n.initKeyboardEvent||n.initKeyEvent;f.defaults(c,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0});r(a,c.bubbles||!1,c.cancelable,window,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.keyCode,c.charCode);break;default:n.initEvent(a,c.bubbles||!1,c.cancelable||!0)}f.defaults(n,e);b.dispatchEvent(n)},bind:function(a,e,d,f){a.addEventListener?a.addEventListener(e,d,f||!1):a.attachEvent&&a.attachEvent("on"+e,d);return c},
unbind:function(a,e,d,f){a.removeEventListener?a.removeEventListener(e,d,f||!1):a.detachEvent&&a.detachEvent("on"+e,d);return c},addClass:function(a,e){if(void 0===a.className)a.className=e;else if(a.className!==e){var d=a.className.split(/ +/);-1==d.indexOf(e)&&(d.push(e),a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return c},removeClass:function(a,e){if(e){if(void 0!==a.className)if(a.className===e)a.removeAttribute("class");else{var d=a.className.split(/ +/),f=d.indexOf(e);-1!=
f&&(d.splice(f,1),a.className=d.join(" "))}}else a.className=void 0;return c},hasClass:function(a,c){return(new RegExp("(?:^|\\s+)"+c+"(?:\\s+|$)")).test(a.className)||!1},getWidth:function(b){b=getComputedStyle(b);return a(b["border-left-width"])+a(b["border-right-width"])+a(b["padding-left"])+a(b["padding-right"])+a(b.width)},getHeight:function(b){b=getComputedStyle(b);return a(b["border-top-width"])+a(b["border-bottom-width"])+a(b["padding-top"])+a(b["padding-bottom"])+a(b.height)},getOffset:function(a){var c=
{left:0,top:0};if(a.offsetParent){do c.left+=a.offsetLeft,c.top+=a.offsetTop;while(a=a.offsetParent)}return c},isActive:function(a){return a===document.activeElement&&(a.type||a.href)}};return c}(dat.utils.common);
dat.controllers.OptionController=function(f,a,d){var e=function(c,b,f){e.superclass.call(this,c,b);var q=this;this.__select=document.createElement("select");if(d.isArray(f)){var l={};d.each(f,function(a){l[a]=a});f=l}d.each(f,function(a,b){var c=document.createElement("option");c.innerHTML=b;c.setAttribute("value",a);q.__select.appendChild(c)});this.updateDisplay();a.bind(this.__select,"change",function(){q.setValue(this.options[this.selectedIndex].value)});this.domElement.appendChild(this.__select)};
e.superclass=f;d.extend(e.prototype,f.prototype,{setValue:function(a){a=e.superclass.prototype.setValue.call(this,a);this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue());return a},updateDisplay:function(){this.__select.value=this.getValue();return e.superclass.prototype.updateDisplay.call(this)}});return e}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.controllers.NumberController=function(f,a){function d(a){a=a.toString();return-1<a.indexOf(".")?a.length-a.indexOf(".")-1:0}var e=function(c,b,f){e.superclass.call(this,c,b);f=f||{};this.__min=f.min;this.__max=f.max;this.__step=f.step;a.isUndefined(this.__step)?this.__impliedStep=0==this.initialValue?1:Math.pow(10,Math.floor(Math.log(this.initialValue)/Math.LN10))/10:this.__impliedStep=this.__step;this.__precision=d(this.__impliedStep)};e.superclass=f;a.extend(e.prototype,f.prototype,{setValue:function(a){void 0!==
this.__min&&a<this.__min?a=this.__min:void 0!==this.__max&&a>this.__max&&(a=this.__max);void 0!==this.__step&&0!=a%this.__step&&(a=Math.round(a/this.__step)*this.__step);return e.superclass.prototype.setValue.call(this,a)},min:function(a){this.__min=a;return this},max:function(a){this.__max=a;return this},step:function(a){this.__impliedStep=this.__step=a;this.__precision=d(a);return this}});return e}(dat.controllers.Controller,dat.utils.common);
dat.controllers.NumberControllerBox=function(f,a,d){var e=function(c,b,f){function q(){var a=parseFloat(n.__input.value);d.isNaN(a)||n.setValue(a)}function l(a){var b=t-a.clientY;n.setValue(n.getValue()+b*n.__impliedStep);t=a.clientY}function r(){a.unbind(window,"mousemove",l);a.unbind(window,"mouseup",r)}this.__truncationSuspended=!1;e.superclass.call(this,c,b,f);var n=this,t;this.__input=document.createElement("input");this.__input.setAttribute("type","text");a.bind(this.__input,"change",q);a.bind(this.__input,
"blur",function(){q();n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())});a.bind(this.__input,"mousedown",function(b){a.bind(window,"mousemove",l);a.bind(window,"mouseup",r);t=b.clientY});a.bind(this.__input,"keydown",function(a){13===a.keyCode&&(n.__truncationSuspended=!0,this.blur(),n.__truncationSuspended=!1)});this.updateDisplay();this.domElement.appendChild(this.__input)};e.superclass=f;d.extend(e.prototype,f.prototype,{updateDisplay:function(){var a=this.__input,b;if(this.__truncationSuspended)b=
this.getValue();else{b=this.getValue();var d=Math.pow(10,this.__precision);b=Math.round(b*d)/d}a.value=b;return e.superclass.prototype.updateDisplay.call(this)}});return e}(dat.controllers.NumberController,dat.dom.dom,dat.utils.common);
dat.controllers.NumberControllerSlider=function(f,a,d,e,c){function b(a,b,c,e,d){return e+(a-b)/(c-b)*(d-e)}var p=function(c,e,d,f,t){function z(c){c.preventDefault();var e=a.getOffset(k.__background),d=a.getWidth(k.__background);k.setValue(b(c.clientX,e.left,e.left+d,k.__min,k.__max));return!1}function g(){a.unbind(window,"mousemove",z);a.unbind(window,"mouseup",g);k.__onFinishChange&&k.__onFinishChange.call(k,k.getValue())}p.superclass.call(this,c,e,{min:d,max:f,step:t});var k=this;this.__background=
document.createElement("div");this.__foreground=document.createElement("div");a.bind(this.__background,"mousedown",function(b){a.bind(window,"mousemove",z);a.bind(window,"mouseup",g);z(b)});a.addClass(this.__background,"slider");a.addClass(this.__foreground,"slider-fg");this.updateDisplay();this.__background.appendChild(this.__foreground);this.domElement.appendChild(this.__background)};p.superclass=f;p.useDefaultStyles=function(){d.inject(c)};e.extend(p.prototype,f.prototype,{updateDisplay:function(){var a=
(this.getValue()-this.__min)/(this.__max-this.__min);this.__foreground.style.width=100*a+"%";return p.superclass.prototype.updateDisplay.call(this)}});return p}(dat.controllers.NumberController,dat.dom.dom,dat.utils.css,dat.utils.common,"/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
dat.controllers.FunctionController=function(f,a,d){var e=function(c,b,d){e.superclass.call(this,c,b);var f=this;this.__button=document.createElement("div");this.__button.innerHTML=void 0===d?"Fire":d;a.bind(this.__button,"click",function(a){a.preventDefault();f.fire();return!1});a.addClass(this.__button,"button");this.domElement.appendChild(this.__button)};e.superclass=f;d.extend(e.prototype,f.prototype,{fire:function(){this.__onChange&&this.__onChange.call(this);this.__onFinishChange&&this.__onFinishChange.call(this,
this.getValue());this.getValue().call(this.object)}});return e}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.controllers.BooleanController=function(f,a,d){var e=function(c,b){e.superclass.call(this,c,b);var d=this;this.__prev=this.getValue();this.__checkbox=document.createElement("input");this.__checkbox.setAttribute("type","checkbox");a.bind(this.__checkbox,"change",function(){d.setValue(!d.__prev)},!1);this.domElement.appendChild(this.__checkbox);this.updateDisplay()};e.superclass=f;d.extend(e.prototype,f.prototype,{setValue:function(a){a=e.superclass.prototype.setValue.call(this,a);this.__onFinishChange&&
this.__onFinishChange.call(this,this.getValue());this.__prev=this.getValue();return a},updateDisplay:function(){!0===this.getValue()?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0):this.__checkbox.checked=!1;return e.superclass.prototype.updateDisplay.call(this)}});return e}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.color.toString=function(f){return function(a){if(1==a.a||f.isUndefined(a.a)){for(a=a.hex.toString(16);6>a.length;)a="0"+a;return"#"+a}return"rgba("+Math.round(a.r)+","+Math.round(a.g)+","+Math.round(a.b)+","+a.a+")"}}(dat.utils.common);
dat.color.interpret=function(f,a){var d,e,c=[{litmus:a.isString,conversions:{THREE_CHAR_HEX:{read:function(a){a=a.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null===a?!1:{space:"HEX",hex:parseInt("0x"+a[1].toString()+a[1].toString()+a[2].toString()+a[2].toString()+a[3].toString()+a[3].toString())}},write:f},SIX_CHAR_HEX:{read:function(a){a=a.match(/^#([A-F0-9]{6})$/i);return null===a?!1:{space:"HEX",hex:parseInt("0x"+a[1].toString())}},write:f},CSS_RGB:{read:function(a){a=a.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
return null===a?!1:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3])}},write:f},CSS_RGBA:{read:function(a){a=a.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);return null===a?!1:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3]),a:parseFloat(a[4])}},write:f}}},{litmus:a.isNumber,conversions:{HEX:{read:function(a){return{space:"HEX",hex:a,conversionName:"HEX"}},write:function(a){return a.hex}}}},{litmus:a.isArray,conversions:{RGB_ARRAY:{read:function(a){return 3!=
a.length?!1:{space:"RGB",r:a[0],g:a[1],b:a[2]}},write:function(a){return[a.r,a.g,a.b]}},RGBA_ARRAY:{read:function(a){return 4!=a.length?!1:{space:"RGB",r:a[0],g:a[1],b:a[2],a:a[3]}},write:function(a){return[a.r,a.g,a.b,a.a]}}}},{litmus:a.isObject,conversions:{RGBA_OBJ:{read:function(b){return a.isNumber(b.r)&&a.isNumber(b.g)&&a.isNumber(b.b)&&a.isNumber(b.a)?{space:"RGB",r:b.r,g:b.g,b:b.b,a:b.a}:!1},write:function(a){return{r:a.r,g:a.g,b:a.b,a:a.a}}},RGB_OBJ:{read:function(b){return a.isNumber(b.r)&&
a.isNumber(b.g)&&a.isNumber(b.b)?{space:"RGB",r:b.r,g:b.g,b:b.b}:!1},write:function(a){return{r:a.r,g:a.g,b:a.b}}},HSVA_OBJ:{read:function(b){return a.isNumber(b.h)&&a.isNumber(b.s)&&a.isNumber(b.v)&&a.isNumber(b.a)?{space:"HSV",h:b.h,s:b.s,v:b.v,a:b.a}:!1},write:function(a){return{h:a.h,s:a.s,v:a.v,a:a.a}}},HSV_OBJ:{read:function(b){return a.isNumber(b.h)&&a.isNumber(b.s)&&a.isNumber(b.v)?{space:"HSV",h:b.h,s:b.s,v:b.v}:!1},write:function(a){return{h:a.h,s:a.s,v:a.v}}}}}];return function(){e=!1;
var b=1<arguments.length?a.toArray(arguments):arguments[0];a.each(c,function(c){if(c.litmus(b))return a.each(c.conversions,function(c,f){d=c.read(b);if(!1===e&&!1!==d)return e=d,d.conversionName=f,d.conversion=c,a.BREAK}),a.BREAK});return e}}(dat.color.toString,dat.utils.common);
dat.GUI=dat.gui.GUI=function(f,a,d,e,c,b,p,q,l,r,n,t,z,g,k){function u(a,b,h,d){if(void 0===b[h])throw Error("Object "+b+' has no property "'+h+'"');d.color?b=new n(b,h):(b=[b,h].concat(d.factoryArgs),b=e.apply(a,b));d.before instanceof c&&(d.before=d.before.__li);x(a,b);g.addClass(b.domElement,"c");h=document.createElement("span");g.addClass(h,"property-name");h.innerHTML=b.property;var f=document.createElement("div");f.appendChild(h);f.appendChild(b.domElement);d=v(a,f,d.before);g.addClass(d,m.CLASS_CONTROLLER_ROW);
g.addClass(d,typeof b.getValue());s(a,d,b);a.__controllers.push(b);return b}function v(a,b,h){var c=document.createElement("li");b&&c.appendChild(b);h?a.__ul.insertBefore(c,params.before):a.__ul.appendChild(c);a.onResize();return c}function s(a,c,h){h.__li=c;h.__gui=a;k.extend(h,{options:function(b){if(1<arguments.length)return h.remove(),u(a,h.object,h.property,{before:h.__li.nextElementSibling,factoryArgs:[k.toArray(arguments)]});if(k.isArray(b)||k.isObject(b))return h.remove(),u(a,h.object,h.property,
{before:h.__li.nextElementSibling,factoryArgs:[b]})},name:function(a){h.__li.firstElementChild.firstElementChild.innerHTML=a;return h},listen:function(){h.__gui.listen(h);return h},remove:function(){h.__gui.remove(h);return h}});if(h instanceof l){var d=new q(h.object,h.property,{min:h.__min,max:h.__max,step:h.__step});k.each(["updateDisplay","onChange","onFinishChange"],function(a){var J=h[a],b=d[a];h[a]=d[a]=function(){var a=Array.prototype.slice.call(arguments);J.apply(h,a);return b.apply(d,a)}});
g.addClass(c,"has-slider");h.domElement.insertBefore(d.domElement,h.domElement.firstElementChild)}else if(h instanceof q){var e=function(b){return k.isNumber(h.__min)&&k.isNumber(h.__max)?(h.remove(),u(a,h.object,h.property,{before:h.__li.nextElementSibling,factoryArgs:[h.__min,h.__max,h.__step]})):b};h.min=k.compose(e,h.min);h.max=k.compose(e,h.max)}else h instanceof b?(g.bind(c,"click",function(){g.fakeEvent(h.__checkbox,"click")}),g.bind(h.__checkbox,"click",function(a){a.stopPropagation()})):
h instanceof p?(g.bind(c,"click",function(){g.fakeEvent(h.__button,"click")}),g.bind(c,"mouseover",function(){g.addClass(h.__button,"hover")}),g.bind(c,"mouseout",function(){g.removeClass(h.__button,"hover")})):h instanceof n&&(g.addClass(c,"color"),h.updateDisplay=k.compose(function(a){c.style.borderLeftColor=h.__color.toString();return a},h.updateDisplay),h.updateDisplay());h.setValue=k.compose(function(b){a.getRoot().__preset_select&&h.isModified()&&D(a.getRoot(),!0);return b},h.setValue)}function x(a,
b){var c=a.getRoot(),d=c.__rememberedObjects.indexOf(b.object);if(-1!=d){var e=c.__rememberedObjectIndecesToControllers[d];void 0===e&&(e={},c.__rememberedObjectIndecesToControllers[d]=e);e[b.property]=b;if(c.load&&c.load.remembered){c=c.load.remembered;if(c[a.preset])c=c[a.preset];else if(c.Default)c=c.Default;else return;c[d]&&void 0!==c[d][b.property]&&(d=c[d][b.property],b.initialValue=d,b.setValue(d))}}}function K(a){var b=a.__save_row=document.createElement("li");g.addClass(a.domElement,"has-save");
a.__ul.insertBefore(b,a.__ul.firstChild);g.addClass(b,"save-row");var c=document.createElement("span");c.innerHTML="&nbsp;";g.addClass(c,"button gears");var d=document.createElement("span");d.innerHTML="Save";g.addClass(d,"button");g.addClass(d,"save");var e=document.createElement("span");e.innerHTML="New";g.addClass(e,"button");g.addClass(e,"save-as");var f=document.createElement("span");f.innerHTML="Revert";g.addClass(f,"button");g.addClass(f,"revert");var r=a.__preset_select=document.createElement("select");
a.load&&a.load.remembered?k.each(a.load.remembered,function(b,c){E(a,c,c==a.preset)}):E(a,"Default",!1);g.bind(r,"change",function(){for(var b=0;b<a.__preset_select.length;b++)a.__preset_select[b].innerHTML=a.__preset_select[b].value;a.preset=this.value});b.appendChild(r);b.appendChild(c);b.appendChild(d);b.appendChild(e);b.appendChild(f);if(w){var n=function(){t.style.display=a.useLocalStorage?"block":"none"},b=document.getElementById("dg-save-locally"),t=document.getElementById("dg-local-explain");
b.style.display="block";b=document.getElementById("dg-local-storage");"true"===localStorage.getItem(document.location.href+".isLocal")&&b.setAttribute("checked","checked");n();g.bind(b,"change",function(){a.useLocalStorage=!a.useLocalStorage;n()})}var m=document.getElementById("dg-new-constructor");g.bind(m,"keydown",function(a){!a.metaKey||67!==a.which&&67!=a.keyCode||A.hide()});g.bind(c,"click",function(){m.innerHTML=JSON.stringify(a.getSaveObject(),void 0,2);A.show();m.focus();m.select()});g.bind(d,
"click",function(){a.save()});g.bind(e,"click",function(){var b=prompt("Enter a new preset name.");b&&a.saveAs(b)});g.bind(f,"click",function(){a.revert()})}function L(a){function b(f){f.preventDefault();e=f.clientX;g.addClass(a.__closeButton,m.CLASS_DRAG);g.bind(window,"mousemove",c);g.bind(window,"mouseup",d);return!1}function c(b){b.preventDefault();a.width+=e-b.clientX;a.onResize();e=b.clientX;return!1}function d(){g.removeClass(a.__closeButton,m.CLASS_DRAG);g.unbind(window,"mousemove",c);g.unbind(window,
"mouseup",d)}a.__resize_handle=document.createElement("div");k.extend(a.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});var e;g.bind(a.__resize_handle,"mousedown",b);g.bind(a.__closeButton,"mousedown",b);a.domElement.insertBefore(a.__resize_handle,a.domElement.firstElementChild)}function F(a,b){a.domElement.style.width=b+"px";a.__save_row&&a.autoPlace&&(a.__save_row.style.width=b+"px");a.__closeButton&&(a.__closeButton.style.width=b+"px")}
function B(a,b){var c={};k.each(a.__rememberedObjects,function(d,e){var f={};k.each(a.__rememberedObjectIndecesToControllers[e],function(a,c){f[c]=b?a.initialValue:a.getValue()});c[e]=f});return c}function E(a,b,c){var d=document.createElement("option");d.innerHTML=b;d.value=b;a.__preset_select.appendChild(d);c&&(a.__preset_select.selectedIndex=a.__preset_select.length-1)}function D(a,b){var c=a.__preset_select[a.__preset_select.selectedIndex];c.innerHTML=b?c.value+"*":c.value}function G(a){0!=a.length&&
t(function(){G(a)});k.each(a,function(a){a.updateDisplay()})}f.inject(d);var w;try{w="localStorage"in window&&null!==window.localStorage}catch(M){w=!1}var A,H=!0,y,C=!1,I=[],m=function(a){function b(){var a=c.getRoot();a.width+=1;k.defer(function(){a.width-=1})}var c=this;this.domElement=document.createElement("div");this.__ul=document.createElement("ul");this.domElement.appendChild(this.__ul);g.addClass(this.domElement,"dg");this.__folders={};this.__controllers=[];this.__rememberedObjects=[];this.__rememberedObjectIndecesToControllers=
[];this.__listening=[];a=a||{};a=k.defaults(a,{autoPlace:!0,width:m.DEFAULT_WIDTH});a=k.defaults(a,{resizable:a.autoPlace,hideable:a.autoPlace});k.isUndefined(a.load)?a.load={preset:"Default"}:a.preset&&(a.load.preset=a.preset);k.isUndefined(a.parent)&&a.hideable&&I.push(this);a.resizable=k.isUndefined(a.parent)&&a.resizable;a.autoPlace&&k.isUndefined(a.scrollable)&&(a.scrollable=!0);var d=w&&"true"===localStorage.getItem(document.location.href+".isLocal"),e;Object.defineProperties(this,{parent:{get:function(){return a.parent}},
scrollable:{get:function(){return a.scrollable}},autoPlace:{get:function(){return a.autoPlace}},preset:{get:function(){return c.parent?c.getRoot().preset:a.load.preset},set:function(b){c.parent?c.getRoot().preset=b:a.load.preset=b;for(b=0;b<this.__preset_select.length;b++)this.__preset_select[b].value==this.preset&&(this.__preset_select.selectedIndex=b);c.revert()}},width:{get:function(){return a.width},set:function(b){a.width=b;F(c,b)}},name:{get:function(){return a.name},set:function(b){a.name=
b;r&&(r.innerHTML=a.name)}},closed:{get:function(){return a.closed},set:function(b){a.closed=b;a.closed?g.addClass(c.__ul,m.CLASS_CLOSED):g.removeClass(c.__ul,m.CLASS_CLOSED);this.onResize();c.__closeButton&&(c.__closeButton.innerHTML=b?m.TEXT_OPEN:m.TEXT_CLOSED)}},load:{get:function(){return a.load}},useLocalStorage:{get:function(){return d},set:function(a){w&&((d=a)?g.bind(window,"unload",e):g.unbind(window,"unload",e),localStorage.setItem(document.location.href+".isLocal",a))}}});if(k.isUndefined(a.parent)){a.closed=
!1;g.addClass(this.domElement,m.CLASS_MAIN);g.makeSelectable(this.domElement,!1);if(w&&d){c.useLocalStorage=!0;var f=localStorage.getItem(document.location.href+".gui");f&&(a.load=JSON.parse(f))}this.__closeButton=document.createElement("div");this.__closeButton.innerHTML=m.TEXT_CLOSED;g.addClass(this.__closeButton,m.CLASS_CLOSE_BUTTON);this.domElement.appendChild(this.__closeButton);g.bind(this.__closeButton,"click",function(){c.closed=!c.closed})}else{void 0===a.closed&&(a.closed=!0);var r=document.createTextNode(a.name);
g.addClass(r,"controller-name");f=v(c,r);g.addClass(this.__ul,m.CLASS_CLOSED);g.addClass(f,"title");g.bind(f,"click",function(a){a.preventDefault();c.closed=!c.closed;return!1});a.closed||(this.closed=!1)}a.autoPlace&&(k.isUndefined(a.parent)&&(H&&(y=document.createElement("div"),g.addClass(y,"dg"),g.addClass(y,m.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(y),H=!1),y.appendChild(this.domElement),g.addClass(this.domElement,m.CLASS_AUTO_PLACE)),this.parent||F(c,a.width));g.bind(window,"resize",
function(){c.onResize()});g.bind(this.__ul,"webkitTransitionEnd",function(){c.onResize()});g.bind(this.__ul,"transitionend",function(){c.onResize()});g.bind(this.__ul,"oTransitionEnd",function(){c.onResize()});this.onResize();a.resizable&&L(this);this.saveToLocalStorageIfPossible=e=function(){w&&"true"===localStorage.getItem(document.location.href+".isLocal")&&localStorage.setItem(document.location.href+".gui",JSON.stringify(c.getSaveObject()))};c.getRoot();a.parent||b()};m.toggleHide=function(){C=
!C;k.each(I,function(a){a.domElement.style.zIndex=C?-999:999;a.domElement.style.opacity=C?0:1})};m.CLASS_AUTO_PLACE="a";m.CLASS_AUTO_PLACE_CONTAINER="ac";m.CLASS_MAIN="main";m.CLASS_CONTROLLER_ROW="cr";m.CLASS_TOO_TALL="taller-than-window";m.CLASS_CLOSED="closed";m.CLASS_CLOSE_BUTTON="close-button";m.CLASS_DRAG="drag";m.DEFAULT_WIDTH=245;m.TEXT_CLOSED="Close Controls";m.TEXT_OPEN="Open Controls";g.bind(window,"keydown",function(a){"text"===document.activeElement.type||72!==a.which&&72!=a.keyCode||
m.toggleHide()},!1);k.extend(m.prototype,{add:function(a,b){return u(this,a,b,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(a,b){return u(this,a,b,{color:!0})},remove:function(a){this.__ul.removeChild(a.__li);this.__controllers.slice(this.__controllers.indexOf(a),1);var b=this;k.defer(function(){b.onResize()})},destroy:function(){this.autoPlace&&y.removeChild(this.domElement)},addFolder:function(a){if(void 0!==this.__folders[a])throw Error('You already have a folder in this GUI by the name "'+
a+'"');var b={name:a,parent:this};b.autoPlace=this.autoPlace;this.load&&this.load.folders&&this.load.folders[a]&&(b.closed=this.load.folders[a].closed,b.load=this.load.folders[a]);b=new m(b);this.__folders[a]=b;a=v(this,b.domElement);g.addClass(a,"folder");return b},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var a=this.getRoot();if(a.scrollable){var b=g.getOffset(a.__ul).top,c=0;k.each(a.__ul.childNodes,function(b){a.autoPlace&&b===a.__save_row||(c+=g.getHeight(b))});
window.innerHeight-b-20<c?(g.addClass(a.domElement,m.CLASS_TOO_TALL),a.__ul.style.height=window.innerHeight-b-20+"px"):(g.removeClass(a.domElement,m.CLASS_TOO_TALL),a.__ul.style.height="auto")}a.__resize_handle&&k.defer(function(){a.__resize_handle.style.height=a.__ul.offsetHeight+"px"});a.__closeButton&&(a.__closeButton.style.width=a.width+"px")},remember:function(){k.isUndefined(A)&&(A=new z,A.domElement.innerHTML=a);if(this.parent)throw Error("You can only call remember on a top level GUI.");var b=
this;k.each(Array.prototype.slice.call(arguments),function(a){0==b.__rememberedObjects.length&&K(b);-1==b.__rememberedObjects.indexOf(a)&&b.__rememberedObjects.push(a)});this.autoPlace&&F(this,this.width)},getRoot:function(){for(var a=this;a.parent;)a=a.parent;return a},getSaveObject:function(){var a=this.load;a.closed=this.closed;0<this.__rememberedObjects.length&&(a.preset=this.preset,a.remembered||(a.remembered={}),a.remembered[this.preset]=B(this));a.folders={};k.each(this.__folders,function(b,
c){a.folders[c]=b.getSaveObject()});return a},save:function(){this.load.remembered||(this.load.remembered={});this.load.remembered[this.preset]=B(this);D(this,!1);this.saveToLocalStorageIfPossible()},saveAs:function(a){this.load.remembered||(this.load.remembered={},this.load.remembered.Default=B(this,!0));this.load.remembered[a]=B(this);this.preset=a;E(this,a,!0);this.saveToLocalStorageIfPossible()},revert:function(a){k.each(this.__controllers,function(b){this.getRoot().load.remembered?x(a||this.getRoot(),
b):b.setValue(b.initialValue)},this);k.each(this.__folders,function(a){a.revert(a)});a||D(this.getRoot(),!1)},listen:function(a){var b=0==this.__listening.length;this.__listening.push(a);b&&G(this.__listening)}});return m}(dat.utils.css,'<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n",
dat.controllers.factory=function(f,a,d,e,c,b,p){return function(q,l,r,n){var t=q[l];if(p.isArray(r)||p.isObject(r))return new f(q,l,r);if(p.isNumber(t))return p.isNumber(r)&&p.isNumber(n)?new d(q,l,r,n):new a(q,l,{min:r,max:n});if(p.isString(t))return new e(q,l);if(p.isFunction(t))return new c(q,l,"");if(p.isBoolean(t))return new b(q,l)}}(dat.controllers.OptionController,dat.controllers.NumberControllerBox,dat.controllers.NumberControllerSlider,dat.controllers.StringController=function(f,a,d){var e=
function(c,b){function d(){f.setValue(f.__input.value)}e.superclass.call(this,c,b);var f=this;this.__input=document.createElement("input");this.__input.setAttribute("type","text");a.bind(this.__input,"keyup",d);a.bind(this.__input,"change",d);a.bind(this.__input,"blur",function(){f.__onFinishChange&&f.__onFinishChange.call(f,f.getValue())});a.bind(this.__input,"keydown",function(a){13===a.keyCode&&this.blur()});this.updateDisplay();this.domElement.appendChild(this.__input)};e.superclass=f;d.extend(e.prototype,
f.prototype,{updateDisplay:function(){a.isActive(this.__input)||(this.__input.value=this.getValue());return e.superclass.prototype.updateDisplay.call(this)}});return e}(dat.controllers.Controller,dat.dom.dom,dat.utils.common),dat.controllers.FunctionController,dat.controllers.BooleanController,dat.utils.common),dat.controllers.Controller,dat.controllers.BooleanController,dat.controllers.FunctionController,dat.controllers.NumberControllerBox,dat.controllers.NumberControllerSlider,dat.controllers.OptionController,
dat.controllers.ColorController=function(f,a,d,e,c){function b(a,b,d,e){a.style.background="";c.each(l,function(c){a.style.cssText+="background: "+c+"linear-gradient("+b+", "+d+" 0%, "+e+" 100%); "})}function p(a){a.style.background="";a.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";a.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
a.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";a.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";a.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var q=function(f,n){function t(b){u(b);a.bind(window,"mousemove",u);a.bind(window,
"mouseup",l)}function l(){a.unbind(window,"mousemove",u);a.unbind(window,"mouseup",l)}function g(){var a=e(this.value);!1!==a?(s.__color.__state=a,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function k(){a.unbind(window,"mousemove",v);a.unbind(window,"mouseup",k)}function u(b){b.preventDefault();var c=a.getWidth(s.__saturation_field),d=a.getOffset(s.__saturation_field),e=(b.clientX-d.left+document.body.scrollLeft)/c;b=1-(b.clientY-d.top+document.body.scrollTop)/c;1<b?b=1:0>
b&&(b=0);1<e?e=1:0>e&&(e=0);s.__color.v=b;s.__color.s=e;s.setValue(s.__color.toOriginal());return!1}function v(b){b.preventDefault();var c=a.getHeight(s.__hue_field),d=a.getOffset(s.__hue_field);b=1-(b.clientY-d.top+document.body.scrollTop)/c;1<b?b=1:0>b&&(b=0);s.__color.h=360*b;s.setValue(s.__color.toOriginal());return!1}q.superclass.call(this,f,n);this.__color=new d(this.getValue());this.__temp=new d(0);var s=this;this.domElement=document.createElement("div");a.makeSelectable(this.domElement,!1);
this.__selector=document.createElement("div");this.__selector.className="selector";this.__saturation_field=document.createElement("div");this.__saturation_field.className="saturation-field";this.__field_knob=document.createElement("div");this.__field_knob.className="field-knob";this.__field_knob_border="2px solid ";this.__hue_knob=document.createElement("div");this.__hue_knob.className="hue-knob";this.__hue_field=document.createElement("div");this.__hue_field.className="hue-field";this.__input=document.createElement("input");
this.__input.type="text";this.__input_textShadow="0 1px 1px ";a.bind(this.__input,"keydown",function(a){13===a.keyCode&&g.call(this)});a.bind(this.__input,"blur",g);a.bind(this.__selector,"mousedown",function(b){a.addClass(this,"drag").bind(window,"mouseup",function(b){a.removeClass(s.__selector,"drag")})});var x=document.createElement("div");c.extend(this.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"});c.extend(this.__field_knob.style,
{position:"absolute",width:"12px",height:"12px",border:this.__field_knob_border+(.5>this.__color.v?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1});c.extend(this.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1});c.extend(this.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"});c.extend(x.style,{width:"100%",height:"100%",
background:"none"});b(x,"top","rgba(0,0,0,0)","#000");c.extend(this.__hue_field.style,{width:"15px",height:"100px",display:"inline-block",border:"1px solid #555",cursor:"ns-resize"});p(this.__hue_field);c.extend(this.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:this.__input_textShadow+"rgba(0,0,0,0.7)"});a.bind(this.__saturation_field,"mousedown",t);a.bind(this.__field_knob,"mousedown",t);a.bind(this.__hue_field,"mousedown",function(b){v(b);a.bind(window,
"mousemove",v);a.bind(window,"mouseup",k)});this.__saturation_field.appendChild(x);this.__selector.appendChild(this.__field_knob);this.__selector.appendChild(this.__saturation_field);this.__selector.appendChild(this.__hue_field);this.__hue_field.appendChild(this.__hue_knob);this.domElement.appendChild(this.__input);this.domElement.appendChild(this.__selector);this.updateDisplay()};q.superclass=f;c.extend(q.prototype,f.prototype,{updateDisplay:function(){var a=e(this.getValue());if(!1!==a){var f=!1;
c.each(d.COMPONENTS,function(b){if(!c.isUndefined(a[b])&&!c.isUndefined(this.__color.__state[b])&&a[b]!==this.__color.__state[b])return f=!0,{}},this);f&&c.extend(this.__color.__state,a)}c.extend(this.__temp.__state,this.__color.__state);this.__temp.a=1;var l=.5>this.__color.v||.5<this.__color.s?255:0,p=255-l;c.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toString(),border:this.__field_knob_border+"rgb("+l+
","+l+","+l+")"});this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px";this.__temp.s=1;this.__temp.v=1;b(this.__saturation_field,"left","#fff",this.__temp.toString());c.extend(this.__input.style,{backgroundColor:this.__input.value=this.__color.toString(),color:"rgb("+l+","+l+","+l+")",textShadow:this.__input_textShadow+"rgba("+p+","+p+","+p+",.7)"})}});var l=["-moz-","-o-","-webkit-","-ms-",""];return q}(dat.controllers.Controller,dat.dom.dom,dat.color.Color=function(f,a,d,e){function c(a,
b,c){Object.defineProperty(a,b,{get:function(){if("RGB"===this.__state.space)return this.__state[b];p(this,b,c);return this.__state[b]},set:function(a){"RGB"!==this.__state.space&&(p(this,b,c),this.__state.space="RGB");this.__state[b]=a}})}function b(a,b){Object.defineProperty(a,b,{get:function(){if("HSV"===this.__state.space)return this.__state[b];q(this);return this.__state[b]},set:function(a){"HSV"!==this.__state.space&&(q(this),this.__state.space="HSV");this.__state[b]=a}})}function p(b,c,d){if("HEX"===
b.__state.space)b.__state[c]=a.component_from_hex(b.__state.hex,d);else if("HSV"===b.__state.space)e.extend(b.__state,a.hsv_to_rgb(b.__state.h,b.__state.s,b.__state.v));else throw"Corrupted color state";}function q(b){var c=a.rgb_to_hsv(b.r,b.g,b.b);e.extend(b.__state,{s:c.s,v:c.v});e.isNaN(c.h)?e.isUndefined(b.__state.h)&&(b.__state.h=0):b.__state.h=c.h}var l=function(){this.__state=f.apply(this,arguments);if(!1===this.__state)throw"Failed to interpret color arguments";this.__state.a=this.__state.a||
1};l.COMPONENTS="r g b h s v hex a".split(" ");e.extend(l.prototype,{toString:function(){return d(this)},toOriginal:function(){return this.__state.conversion.write(this)}});c(l.prototype,"r",2);c(l.prototype,"g",1);c(l.prototype,"b",0);b(l.prototype,"h");b(l.prototype,"s");b(l.prototype,"v");Object.defineProperty(l.prototype,"a",{get:function(){return this.__state.a},set:function(a){this.__state.a=a}});Object.defineProperty(l.prototype,"hex",{get:function(){"HEX"!==!this.__state.space&&(this.__state.hex=
a.rgb_to_hex(this.r,this.g,this.b));return this.__state.hex},set:function(a){this.__state.space="HEX";this.__state.hex=a}});return l}(dat.color.interpret,dat.color.math=function(){var f;return{hsv_to_rgb:function(a,d,e){var c=a/60-Math.floor(a/60),b=e*(1-d),f=e*(1-c*d);d=e*(1-(1-c)*d);a=[[e,d,b],[f,e,b],[b,e,d],[b,f,e],[d,b,e],[e,b,f]][Math.floor(a/60)%6];return{r:255*a[0],g:255*a[1],b:255*a[2]}},rgb_to_hsv:function(a,d,e){var c=Math.min(a,d,e),b=Math.max(a,d,e),c=b-c;if(0==b)return{h:NaN,s:0,v:0};
a=(a==b?(d-e)/c:d==b?2+(e-a)/c:4+(a-d)/c)/6;0>a&&(a+=1);return{h:360*a,s:c/b,v:b/255}},rgb_to_hex:function(a,d,e){a=this.hex_with_component(0,2,a);a=this.hex_with_component(a,1,d);return a=this.hex_with_component(a,0,e)},component_from_hex:function(a,d){return a>>8*d&255},hex_with_component:function(a,d,e){return e<<(f=8*d)|a&~(255<<f)}}}(),dat.color.toString,dat.utils.common),dat.color.interpret,dat.utils.common),dat.utils.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(f,a){window.setTimeout(f,1E3/60)}}(),dat.dom.CenteredDiv=function(f,a){var d=function(){this.backgroundElement=document.createElement("div");a.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear"});f.makeFullscreen(this.backgroundElement);this.backgroundElement.style.position="fixed";this.domElement=
document.createElement("div");a.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear"});document.body.appendChild(this.backgroundElement);document.body.appendChild(this.domElement);var d=this;f.bind(this.backgroundElement,"click",function(){d.hide()})};d.prototype.show=function(){var d=this;this.backgroundElement.style.display="block";this.domElement.style.display="block";this.domElement.style.opacity=
0;this.domElement.style.webkitTransform="scale(1.1)";this.layout();a.defer(function(){d.backgroundElement.style.opacity=1;d.domElement.style.opacity=1;d.domElement.style.webkitTransform="scale(1)"})};d.prototype.hide=function(){var a=this,c=function(){a.domElement.style.display="none";a.backgroundElement.style.display="none";f.unbind(a.domElement,"webkitTransitionEnd",c);f.unbind(a.domElement,"transitionend",c);f.unbind(a.domElement,"oTransitionEnd",c)};f.bind(this.domElement,"webkitTransitionEnd",
c);f.bind(this.domElement,"transitionend",c);f.bind(this.domElement,"oTransitionEnd",c);this.backgroundElement.style.opacity=0;this.domElement.style.opacity=0;this.domElement.style.webkitTransform="scale(1.1)"};d.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-f.getWidth(this.domElement)/2+"px";this.domElement.style.top=window.innerHeight/2-f.getHeight(this.domElement)/2+"px"};return d}(dat.dom.dom,dat.utils.common),dat.dom.dom,dat.utils.common);
/*
 Javascript graphics utility library
 Helper functions, WebGL classes, Mouse input, Colours and Gradients UI
 Copyright (c) 2014, Owen Kaluza
 Released into public domain:
 This program is free software. It comes without any warranty, to
 the extent permitted by applicable law. You can redistribute it
 and/or modify it as long as this header remains intact
*/
var OK=function(){var a={debug_on:!1,debug:function(b){if(a.debug_on){var c=document.getElementById("console");c?c.innerHTML="<div style=\"font-family: 'monospace'; font-size: 8pt;\">"+b+"</div>"+c.innerHTML:console.log(b)}},clear:function(){var a=document.getElementById("console");a&&(a.innerHTML="")}};return a}();function getSearchVariable(a,b){for(var c=window.location.search.substring(1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(unescape(e[0])==a)return unescape(e[1])}return b}
function getImageDataURL(a){var b=document.createElement("canvas");b.width=a.width;b.height=a.height;b.getContext("2d").drawImage(a,0,0);return b.toDataURL("image/png")}window.$||(window.$=function(a,b){return("object"==typeof b?b:document).getElementById(a)});window.$S||(window.$S=function(a){if(a=$(a))return a.style});window.toggle||(window.toggle=function(a){var b=$S(a).display;"none"!=b&&b?$S(a).display="none":$S(a).display="block"});
function setAll(a,b){for(var c=document.getElementsByClassName(b),d=0;d<c.length;d++)c[d].style.display=a}function getSourceFromElement(a){var b=document.getElementById(a);if(!b)return null;a="";for(b=b.firstChild;b;)3==b.nodeType&&(a+=b.textContent),b=b.nextSibling;return a}function removeChildren(a){if(a.hasChildNodes())for(;0<a.childNodes.length;)a.removeChild(a.firstChild)}
window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame}());function requestFullScreen(a){a=document.getElementById(a);a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullScreen&&a.webkitRequestFullScreen()}
function typeOf(a){var b=typeof a;"object"===b&&(a?"number"!==typeof a.length||a.propertyIsEnumerable("length")||"function"!==typeof a.splice||(b="array"):b="null");return b}function isEmpty(a){var b,c;if("object"===typeOf(a))for(b in a)if(c=a[b],void 0!==c&&"function"!==typeOf(c))return!1;return!0}
function ajaxReadFile(a,b,c,d,e){var f=new XMLHttpRequest,g=0;void 0!=d&&("number"==typeof d?g=d:f.onprogress=d);f.onreadystatechange=function(){if(0<g&&2<f.readyState){var c=parseInt(f.responseText.length);d&&setProgress(c/g*100)}4==f.readyState&&(200==f.status?(d&&setProgress(100),OK.debug("RECEIVED: "+a),b&&b(f.responseText,a)):b?b("Error: "+f.status+" : "+a):OK.debug("Ajax Read File Error: returned status code "+f.status+" "+f.statusText))};c?f.open("GET",a+"?d="+(new Date).getTime(),!0):f.open("GET",
a,!0);for(var h in e)f.setRequestHeader(h,e[h]);f.send(null)}function readURL(a,b,c){var d=new XMLHttpRequest,e=0;void 0!=c&&("number"==typeof c?e=c:d.onprogress=c);d.onreadystatechange=function(){if(0<e&&2<d.readyState){var a=parseInt(d.responseText.length);c&&setProgress(a/e*100)}};b?d.open("GET",a+"?d="+(new Date).getTime(),!1):d.open("GET",a,!1);d.overrideMimeType("text/plain; charset=x-user-defined");d.send(null);if(200!=d.status)return"";c&&setProgress(100);return d.responseText}
function updateProgress(a){a.lengthComputable&&(setProgress(a.loaded/a.total*100),OK.debug(a.loaded+" / "+a.total))}function setProgress(a){a=Math.round(a);$S("progressbar").width=3*a+"px";$("progressstatus").innerHTML=a+"%"}
function ajaxPost(a,b,c,d,e){var f=new XMLHttpRequest;void 0!=d&&(f.upload.onprogress=d);f.onreadystatechange=function(){4==f.readyState&&(200==f.status?(d&&setProgress(100),OK.debug("POST: "+a),c&&c(f.responseText)):c?c("Error, status:"+f.status):OK.debug("Ajax Post Error: returned status code "+f.status+" "+f.statusText))};f.open("POST",a,!0);"string"==typeof b&&(f.setRequestHeader("Content-type","application/x-www-form-urlencoded"),f.setRequestHeader("Content-length",b.length));if(e)for(key in e)f.setRequestHeader(key,
e[key]);f.send(b)}var defaultMouse,dragMouse;function MouseEventHandler(a,b,c,d,e,f,g){this.click=a;this.wheel=b;this.move=c;this.down=d;this.up=e;this.leave=f;this.pinch=g}
function Mouse(a,b,c){this.element=a;this.handler=b;this.isdown=this.disabled=!1;this.button=null;this.dragged=!1;this.lastY=this.lastX=this.absoluteY=this.absoluteX=this.x=this.x=0;this.slider=null;this.spin=0;this.moveUpdate=!1;this.enableContext=c?!0:!1;a.addEventListener("onwheel"in document?"wheel":"mousewheel",handleMouseWheel,!1);a.onmousedown=handleMouseDown;a.onmouseout=handleMouseLeave;document.onmouseup=handleMouseUp;document.onmousemove=handleMouseMove;a.addEventListener("touchstart",
touchHandler,!0);a.addEventListener("touchmove",touchHandler,!0);a.addEventListener("touchend",touchHandler,!0);a.oncontextmenu=function(){return this.mouse.enableContext}}Mouse.prototype.setDefault=function(){defaultMouse=document.mouse=this};Mouse.prototype.update=function(a){a||(a=window.event);var b=mousePageCoord(a);this.x=b[0];this.y=b[1];this.absoluteX=this.x;this.absoluteY=this.y;b=findElementPos(this.element);this.x-=b[0];this.y-=b[1];this.clientx=a.clientX-b[0];this.clienty=a.clientY-b[1]};
function mousePageCoord(a){var b;a.pageX||a.pageY?(b=a.pageX,a=a.pageY):(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,a=a.clientY+document.body.scrollTop+document.documentElement.scrollTop);return[b,a]}function elementRelativeCoord(a,b){var c=findElementPos(a);b[0]-=c[0];b[1]-=c[1]}function findElementPos(a){var b=curtop=0;do b+=a.offsetLeft,curtop+=a.offsetTop;while(a=a.offsetParent);return[b,curtop]}
function getMouse(a){a||(a=window.event);var b=a.target.mouse;if(b)return b;for(a=a.target;a!=document;)if(a=a.parentNode,a.mouse)return a.mouse;return null}function handleMouseDown(a){var b=getMouse(a);if(!b||b.disabled)return!0;b.target=(a||window.event).target;b.dragged=!1;b.update(a);b.isdown||(b.lastX=b.absoluteX,b.lastY=b.absoluteY);b.isdown=!0;dragMouse=b;b.button=a.button;document.mouse=b;var c=!0;b.handler.down&&(c=b.handler.down(a,b));!c&&a.preventDefault&&a.preventDefault();return c}
function handleMouseUp(a){var b=document.mouse;if(!b||b.disabled)return!0;var c=!0;b.isdown&&(b.update(a),b.handler.click&&(c=b.handler.click(a,b)),b.isdown=!1,dragMouse=null,b.button=null,b.dragged=!1);b.handler.up&&(c=c&&b.handler.up(a,b));document.mouse=defaultMouse;!c&&a.preventDefault&&a.preventDefault();return c}
function handleMouseMove(a){var b=dragMouse?dragMouse:getMouse(a);if(!b||b.disabled)return!0;b.update(a);b.deltaX=b.absoluteX-b.lastX;b.deltaY=b.absoluteY-b.lastY;var c=!0;!b.dragged&&b.isdown&&3<Math.abs(b.deltaX)+Math.abs(b.deltaY)&&(b.dragged=!0);b.handler.move&&(c=b.handler.move(a,b));b.moveUpdate&&(b.lastX=b.absoluteX,b.lastY=b.absoluteY);!c&&a.preventDefault&&a.preventDefault();return c}
function handleMouseWheel(a){var b=getMouse(a);if(!b||b.disabled)return!0;b.update(a);var c=!1;a.spin=0<(a.deltaY?-a.deltaY:a.wheelDelta)?1:-1;b.handler.wheel&&(c=b.handler.wheel(a,b));!c&&a.preventDefault&&a.preventDefault();return c}function handleMouseLeave(a){var b=getMouse(a);if(!b||b.disabled)return!0;var c=!0;b.handler.leave&&(c=b.handler.leave(a,b));!c&&a.preventDefault&&a.preventDefault();return a.returnValue=c}
function touchHandler(a){var b=a.changedTouches[0],c=null,d=getMouse(a);switch(a.type){case "touchstart":2==a.touches.length?(d.isdown=!1,d.scaling=0):c="mousedown";break;case "touchmove":if(null!=d.scaling&&2==a.touches.length){var e=Math.sqrt((a.touches[0].pageX-a.touches[1].pageX)*(a.touches[0].pageX-a.touches[1].pageX)+(a.touches[0].pageY-a.touches[1].pageY)*(a.touches[0].pageY-a.touches[1].pageY));0<d.scaling?(a.distance=e-d.scaling,d.handler.pinch&&d.handler.pinch(a,d),a.returnValue=!0):d.scaling=
e}else c="mousemove";break;case "touchend":null!=d.scaling?d.scaling=0==d.scaling?null:0:c="mouseup";break;default:return}1<a.touches.length&&(c=null);c&&(d=document.createEvent("MouseEvent"),d.initMouseEvent(c,!0,!0,window,1,b.screenX,b.screenY,b.clientX,b.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),b.target.dispatchEvent(d),a.preventDefault())}function Viewport(a,b,c,d){this.x=a;this.y=b;this.width=c;this.height=d}
function WebGL(a,b){this.program=null;this.modelView=new ViewMatrix;this.perspective=new ViewMatrix;this.textures=[];this.timer=null;if(!window.WebGLRenderingContext)throw"No browser WebGL support";try{this.gl=a.getContext("webgl",b)||a.getContext("experimental-webgl",b)}catch(c){throw OK.debug("detectGL exception: "+c),"No context";}this.viewport=new Viewport(0,0,a.width,a.height);if(!this.gl)throw"Failed to get context";}
WebGL.prototype.setMatrices=function(){this.gl.uniformMatrix4fv(this.program.mvMatrixUniform,!1,this.modelView.matrix);this.gl.uniformMatrix4fv(this.program.pMatrixUniform,!1,this.perspective.matrix);if(this.program.nMatrixUniform){var a=mat4.create(this.modelView.matrix);mat4.inverse(a);mat4.transpose(a);this.gl.uniformMatrix4fv(this.program.nMatrixUniform,!1,a)}};
WebGL.prototype.initDraw2d=function(){this.gl.viewport(this.viewport.x,this.viewport.y,this.viewport.width,this.viewport.height);this.gl.enableVertexAttribArray(this.program.attributes.aVertexPosition);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexPositionBuffer);this.gl.vertexAttribPointer(this.program.attributes.aVertexPosition,this.vertexPositionBuffer.itemSize,this.gl.FLOAT,!1,0,0);this.program.attributes.aTextureCoord&&(this.gl.enableVertexAttribArray(this.program.attributes.aTextureCoord),
this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.textureCoordBuffer),this.gl.vertexAttribPointer(this.program.attributes.aTextureCoord,this.textureCoordBuffer.itemSize,this.gl.FLOAT,!1,0,0));this.setMatrices()};WebGL.prototype.updateTexture=function(a,b,c){void 0==c&&(c=this.gl.TEXTURE0);this.gl.activeTexture(c);this.gl.bindTexture(this.gl.TEXTURE_2D,a);this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,b);this.gl.bindTexture(this.gl.TEXTURE_2D,null)};
WebGL.prototype.init2dBuffers=function(a){void 0==a&&(a=this.gl.TEXTURE0);this.vertexPositionBuffer=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexPositionBuffer);this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),this.gl.STATIC_DRAW);this.vertexPositionBuffer.itemSize=2;this.vertexPositionBuffer.numItems=4;this.gl.activeTexture(a);this.gradientTexture=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,this.gradientTexture);this.gl.texParameteri(this.gl.TEXTURE_2D,
this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST);this.textureCoordBuffer=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.textureCoordBuffer);this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([1,1,0,1,1,0,0,0]),this.gl.STATIC_DRAW);this.textureCoordBuffer.itemSize=2;this.textureCoordBuffer.numItems=4};
WebGL.prototype.loadTexture=function(a,b){void 0==b&&(b=this.gl.NEAREST);this.texid=this.textures.length;this.textures.push(this.gl.createTexture());this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[this.texid]);this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.LUMINANCE,this.gl.LUMINANCE,this.gl.UNSIGNED_BYTE,a);this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,b);this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,b);this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,
this.gl.CLAMP_TO_EDGE);this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE);this.gl.bindTexture(this.gl.TEXTURE_2D,null);return this.textures[this.texid]};WebGL.prototype.setPerspective=function(a,b,c,d){this.perspective.matrix=mat4.perspective(a,b,c,d)};WebGL.prototype.use=function(a){this.program=a;this.program.program&&this.gl.useProgram(this.program.program)};
function WebGLProgram(a,b,c){this.program=null;0>b.indexOf("main")&&(b=getSourceFromElement(b));0>c.indexOf("main")&&(c=getSourceFromElement(c));this.gl=a;this.program&&this.gl.isProgram(this.program)&&(this.gl.isShader(this.vshader)&&(this.gl.detachShader(this.program,this.vshader),this.gl.deleteShader(this.vshader)),this.gl.isShader(this.fshader)&&(this.gl.detachShader(this.program,this.fshader),this.gl.deleteShader(this.fshader)),this.gl.deleteProgram(this.program));this.program=this.gl.createProgram();
this.vshader=this.compileShader(b,this.gl.VERTEX_SHADER);this.fshader=this.compileShader(c,this.gl.FRAGMENT_SHADER);this.gl.attachShader(this.program,this.vshader);this.gl.attachShader(this.program,this.fshader);this.gl.linkProgram(this.program);if(!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))throw"Could not initialise shaders: "+this.gl.getProgramInfoLog(this.program);}
WebGLProgram.prototype.compileShader=function(a,b){var c=this.gl.createShader(b);this.gl.shaderSource(c,a);this.gl.compileShader(c);if(!this.gl.getShaderParameter(c,this.gl.COMPILE_STATUS))throw this.gl.getShaderInfoLog(c);return c};
WebGLProgram.prototype.setup=function(a,b,c){if(this.program){void 0==a&&(a=["aVertexPosition","aTextureCoord"]);this.attributes={};for(var d in a)this.attributes[a[d]]=this.gl.getAttribLocation(this.program,a[d]),c||this.gl.enableVertexAttribArray(this.attributes[a[d]]);this.uniforms={};for(d in b)this.uniforms[b[d]]=this.gl.getUniformLocation(this.program,b[d]);this.mvMatrixUniform=this.gl.getUniformLocation(this.program,"uMVMatrix");this.pMatrixUniform=this.gl.getUniformLocation(this.program,"uPMatrix");
this.nMatrixUniform=this.gl.getUniformLocation(this.program,"uNMatrix")}};function ViewMatrix(){this.matrix=mat4.create();mat4.identity(this.matrix);this.stack=[]}ViewMatrix.prototype.toString=function(){return JSON.stringify(this.toArray())};ViewMatrix.prototype.toArray=function(){return JSON.parse(mat4.str(this.matrix))};ViewMatrix.prototype.push=function(a){a?(this.stack.push(mat4.create(a)),this.matrix=mat4.create(a)):this.stack.push(mat4.create(this.matrix))};
ViewMatrix.prototype.pop=function(){if(0==this.stack.length)throw"Matrix stack underflow";return this.matrix=this.stack.pop()};ViewMatrix.prototype.mult=function(a){mat4.multiply(this.matrix,a)};ViewMatrix.prototype.identity=function(){mat4.identity(this.matrix)};ViewMatrix.prototype.scale=function(a){mat4.scale(this.matrix,a)};ViewMatrix.prototype.translate=function(a){mat4.translate(this.matrix,a)};ViewMatrix.prototype.rotate=function(a,b){mat4.rotate(this.matrix,a*Math.PI/180,b)};
function Palette(a,b){this.premultiply=b;this.background=new Colour("rgba(0,0,0,0)");this.colours=[];this.slider=new Image;this.slider.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAPCAYAAAA2yOUNAAAAj0lEQVQokWNIjHT8/+zZs//Pnj37/+TJk/9XLp/+f+bEwf9HDm79v2Prqv9aKrz/GUYVEaeoMDMQryJXayWIoi0bFmFV1NWS+z/E1/Q/AwMDA0NVcez/LRsWoSia2luOUAADVcWx/xfO6/1/5fLp/1N7y//HhlmhKoCBgoyA/w3Vyf8jgyyxK4CBUF8zDAUAAJRXY0G1eRgAAAAASUVORK5CYII=";if(a){if("string"==typeof a)for(var c=a.split("\n"),d,e=0;e<c.length;e++){var f=
c[e].trim();if(f)if(f=f.split("="),"Background"==f[0])this.background=new Colour(f[1]);else if("P"==f[0][0])d=parseFloat(f[1]);else if("C"==f[0][0]){if(this.colours.push(new ColourPos(f[1],d)),1==d)break}else f[0]&&this.colours.push(new ColourPos(f[1],f[0]))}else for(c=0;c<a.length;c++)void 0==a[c].position&&(a[c].position=1/(a.length-1)*c),this.colours.push(new ColourPos(a[c].colour,a[c].position));this.sort();c=!1;for(d=0;d<this.colours.length;d++)0<this.colours[d].colour.alpha&&(c=!0),1<this.colours[d].colour.alpha&&
(this.colours[d].colour.alpha=1);if(!c)for(d=0;d<this.colours.length;d++)this.colours[d].colour.alpha=1}else this.colours.push(new ColourPos("rgba(255,255,255,1)",0)),this.colours.push(new ColourPos("rgba(0,0,0,1)",1))}Palette.prototype.sort=function(){this.colours.sort(function(a,b){return a.position-b.position})};Palette.prototype.newColour=function(a,b){var c=new ColourPos(b,a);this.colours.push(c);this.sort();for(c=1;c<this.colours.length-1;c++)if(this.colours[c].position==a)return c;return-1};
Palette.prototype.inRange=function(a,b,c){for(var d=0;d<this.colours.length;d++){var e=this.colours[d].position*c;if(a==e||1<b&&a>=e-b/2&&a<=e+b/2)return d}return-1};Palette.prototype.inDragRange=function(a,b,c){for(var d=1;d<this.colours.length-1;d++){var e=this.colours[d].position*c;if(a==e||1<b&&a>=e-b/2&&a<=e+b/2)return d}return 0};Palette.prototype.remove=function(a){this.colours.splice(a,1)};
Palette.prototype.toString=function(){for(var a="Background="+this.background.html(),b=0;b<this.colours.length;b++)a+="\n"+this.colours[b].position.toFixed(6)+"="+this.colours[b].colour.html();return a};Palette.prototype.get=function(){var a={};a.background=this.background.html();a.colours=[];for(var b=0;b<this.colours.length;b++)a.colours.push({position:this.colours[b].position,colour:this.colours[b].colour.html()});return a};Palette.prototype.toJSON=function(){return JSON.stringify(this.get())};
Palette.prototype.draw=function(a,b){if(!this.slider.width&&b){var c=this;setTimeout(function(){c.draw(a,b)},150)}else if(a){var d=/webkit/.test(navigator.userAgent.toLowerCase());0==this.colours.length&&(this.background=new Colour("#ffffff"),this.colours.push(new ColourPos("#000000",0)),this.colours.push(new ColourPos("#ffffff",1)));list=this.colours.slice(0);list.sort(function(a,b){return a.position-b.position});if(a.getContext){var e=a.width,f=a.height,g=a.getContext("2d");g.clearRect(0,0,e,f);
if(d)for(var h=0,d=1;d<list.length;d++){var k=Math.round(e*list[d].position);g.fillStyle=g.createLinearGradient(h,0,k,0);var l=list[d-1].colour,m=list[d].colour;this.premultiply&&!b&&(l=this.background.blend(l),m=this.background.blend(m));g.fillStyle.addColorStop(0,l.html());g.fillStyle.addColorStop(1,m.html());g.fillRect(h,0,k-h,f);h=k}else{g.fillStyle=g.createLinearGradient(0,0,e,0);for(d=0;d<list.length;d++)h=list[d].colour,this.premultiply&&!b&&(h=this.background.blend(h)),g.fillStyle.addColorStop(list[d].position,
h.html());g.fillRect(0,0,e,f)}if(f=document.getElementById("backgroundCUR"))f.style.background=this.background.html();if(b)for(d=1;d<list.length-1;d++)f=Math.floor(e*list[d].position)+.5,50<list[d].colour.HSV().V?g.strokeStyle="black":g.strokeStyle="white",g.beginPath(),g.moveTo(f,0),g.lineTo(f,a.height),g.closePath(),g.stroke(),f-=this.slider.width/2,g.drawImage(this.slider,f,0)}else alert("getContext failed!")}else alert("Invalid canvas!")};
function ColourPos(a,b){this.position=parseFloat(b);if(0<=this.position&&1>=this.position)this.colour=a?"object"==typeof a?a:new Colour(a):new Colour("#000000");else throw"Invalid Colour Position: "+b;}
function Colour(a){"undefined"==typeof a?this.set("#ffffff"):"string"==typeof a?this.set(a):"object"==typeof a?"undefined"!=typeof a.H?this.setHSV(a):"undefined"!=typeof a.red?(this.red=a.red,this.green=a.green,this.blue=a.blue,this.alpha=a.alpha):a.R?(this.red=a.R,this.green=a.G,this.blue=a.B,this.alpha="undefined"==typeof a.A?1:a.A):(this.red=a[0],this.green=a[1],this.blue=a[2],this.alpha="undefined"==typeof a[3]?1:a[3]):this.fromInt(a)}
Colour.prototype.set=function(a){a||(a="#ffffff");var b=/^rgba?\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d\.?\d*)?\)$/.exec(a);b?(this.red=parseInt(b[1]),this.green=parseInt(b[2]),this.blue=parseInt(b[3]),this.alpha="undefined"==typeof b[4]?1:parseFloat(b[4])):"#"==a.charAt(0)?(a=a.substring(1,7),this.alpha=1,this.red=parseInt(a.substring(0,2),16),this.green=parseInt(a.substring(2,4),16),this.blue=parseInt(a.substring(4,6),16)):this.fromInt(parseInt(a))};
Colour.prototype.fromInt=function(a){this.red=a&255;this.green=(a&65280)>>>8;this.blue=(a&16711680)>>>16;this.alpha=((a&4278190080)>>>24)/255};Colour.prototype.toInt=function(){var a=this.red,a=a+(this.green<<8),a=a+(this.blue<<16);return a+=Math.round(255*this.alpha)<<24};Colour.prototype.toString=function(){return this.html()};Colour.prototype.html=function(){return"rgba("+this.red+","+this.green+","+this.blue+","+this.alpha.toFixed(2)+")"};
Colour.prototype.rgbaGL=function(){return new Float32Array([this.red/255,this.green/255,this.blue/255,this.alpha])};Colour.prototype.rgbaGLSL=function(){var a=this.rgbaGL();return"rgba("+a[0].toFixed(4)+","+a[1].toFixed(4)+","+a[2].toFixed(4)+","+a[3].toFixed(4)+")"};Colour.prototype.rgba=function(){return[this.red,this.green,this.blue,this.alpha]};Colour.prototype.rgbaObj=function(){return{R:this.red,G:this.green,B:this.blue,A:this.alpha}};Colour.prototype.print=function(){OK.debug(this.printString(!0))};
Colour.prototype.printString=function(a){return"R:"+this.red+" G:"+this.green+" B:"+this.blue+(a?" A:"+this.alpha:"")};Colour.prototype.HEX=function(a){a=Math.round(Math.min(Math.max(0,a),255));return"0123456789ABCDEF".charAt((a-a%16)/16)+"0123456789ABCDEF".charAt(a%16)};Colour.prototype.htmlHex=function(a){return"#"+this.HEX(this.red)+this.HEX(this.green)+this.HEX(this.blue)};Colour.prototype.hex=function(a){return this.HEX(this.red)+this.HEX(this.green)+this.HEX(this.blue)+this.HEX(255*this.alpha)};
Colour.prototype.hexGL=function(a){return this.HEX(255*this.alpha)+this.HEX(this.blue)+this.HEX(this.green)+this.HEX(this.red)};
Colour.prototype.setHSV=function(a){var b,c,d,e,f;f=a.S/100;var g=a.V/100,h=a.H/360;if(0<f){1<=h&&(h=0);h*=6;F=h-Math.floor(h);d=Math.round(255*g*(1-f));e=Math.round(255*g*(1-f*F));f=Math.round(255*g*(1-f*(1-F)));g=Math.round(255*g);switch(Math.floor(h)){case 0:b=g;c=f;e=d;break;case 1:b=e;c=g;e=d;break;case 2:b=d;c=g;e=f;break;case 3:b=d;c=e;e=g;break;case 4:b=f;c=d;e=g;break;case 5:b=g,c=d}this.red=b?b:0;this.green=c?c:0;this.blue=e?e:0}else this.blue=this.green=this.red=g=Math.round(255*g);this.alpha=
"undefined"==typeof a.A?1:a.A};Colour.prototype.HSV=function(){var a=this.red/255,b=this.green/255,c=this.blue/255,d=Math.min(a,b,c),e=Math.max(a,b,c);deltaMax=e-d;var f,g,h,k;0==deltaMax?d=f=0:(d=deltaMax/e,g=((e-a)/6+deltaMax/2)/deltaMax,h=((e-b)/6+deltaMax/2)/deltaMax,k=((e-c)/6+deltaMax/2)/deltaMax,a==e?f=k-h:b==e?f=1/3+g-k:c==e&&(f=2/3+h-g),0>f&&(f+=1),1<f&&(f-=1));return{H:360*f,S:100*d,V:100*e}};Colour.prototype.HSVA=function(){var a=this.HSV();a.A=this.alpha;return a};
Colour.prototype.interpolate=function(a,b){this.red=Math.round(this.red+b*(a.red-this.red));this.green=Math.round(this.green+b*(a.green-this.green));this.blue=Math.round(this.blue+b*(a.blue-this.blue));this.alpha=Math.round(this.alpha+b*(a.alpha-this.alpha))};Colour.prototype.blend=function(a){return new Colour([Math.round((1-a.alpha)*this.red+a.alpha*a.red),Math.round((1-a.alpha)*this.green+a.alpha*a.green),Math.round((1-a.alpha)*this.blue+a.alpha*a.blue),(1-a.alpha)*this.alpha+a.alpha*a.alpha])};
function MoveWindow(a){if(a){this.element=$(a);if(!this.element)return alert("No such element: "+a),null;this.mouse=new Mouse(this.element,this);this.mouse.moveUpdate=!0;this.element.mouse=this.mouse}}
MoveWindow.prototype.open=function(a,b){var c=this.element.style;0>a&&(a=0);0>b&&(b=0);void 0!=a&&(c.left=a+"px");void 0!=b&&(c.top=b+"px");c.display="block";var d=this.element.offsetWidth,e=this.element.offsetHeight;a+d>window.innerWidth-20&&(c.left=window.innerWidth-d-20+"px");b+e>window.innerHeight-20&&(c.top=window.innerHeight-e-20+"px")};MoveWindow.prototype.close=function(){this.element.style.display="none"};
MoveWindow.prototype.move=function(a,b){if(b.isdown&&!(0<b.button)){var c=b.element.style;c.left=parseInt(c.left)+b.deltaX+"px";c.top=parseInt(c.top)+b.deltaY+"px"}};MoveWindow.prototype.down=function(a,b){return!1};function scale(a,b,c,d){return clamp(d*a/b,c,d)}function clamp(a,b,c){return Math.max(b,Math.min(c,a))}
function ColourPicker(a,b){function c(a,b,c){var d=document.createElement("div");d.id=a;b&&(d.innerHTML=b);c&&(d.style.cssText=c);return d}var d=document.body;this.element=c("picker",null,"display:none; top: 58px; z-index: 20; background: #0d0d0d; color: #aaa; cursor: move; font-family: arial; font-size: 11px; padding: 7px 10px 11px 10px; position: fixed; width: 229px; border-radius: 5px; border: 1px solid #444;");var e=c("pickCURBG",null,'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4jWP4TwAcOHAAL2YYNWBYGEBIASEwasCwMAAALvidroqDalkAAAAASUVORK5CYII="); float: left; width: 12px; height: 12px; margin-right: 3px;');
e.appendChild(c("pickCUR",null,"float: left; width: 12px; height: 12px; background: #fff; margin-right: 3px;"));this.element.appendChild(e);e=c("pickRGB","R: 255 G: 255 B: 255","float: left; position: relative; top: -1px;");e.onclick="colours.picker.updateString()";this.element.appendChild(e);this.element.appendChild(c("pickCLOSE","X","float: right; cursor: pointer; margin: 0 8px 3px;"));this.element.appendChild(c("pickOK","OK","float: right; cursor: pointer; margin: 0 8px 3px;"));e=c("SV",null,"position: relative; cursor: crosshair; float: left; height: 170px; width: 170px; margin-right: 10px; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEG0lEQVQ4jQEQBO/7APz8/Pz7+/vx+/v75Pr6+tb6+vrF+Pj4tPf396H4+PiO9/f3e/X19Wfz8/NU8PDwQuvr6zLi4uIjzs7OFZmZmQoA8PDw/O/v7/Ht7e3l7Ozs2Ozs7Mjq6uq35ubmpeXl5ZLf39+A3NzcbtXV1VvMzMxLvr6+O6ioqCyEhIQfQEBAFADk5OT84eHh8uDg4Obe3t7Z3Nzcy9nZ2brV1dWq0NDQmcrKyofCwsJ2uLi4ZKqqqlSYmJhFfX19N1lZWSsnJychANPT0/zT09Pz0NDQ6c3NzdzKysrNx8fHv8DAwK+6urqfsrKyj6mpqX+cnJxvjIyMX3l5eVBeXl5EPz8/ORsbGy8Aw8PD/MHBwfS+vr7qurq63ra2ttKxsbHErKystaOjo6eampqXj4+PiYODg3lycnJrXl5eX0hISFIuLi5IEBAQPwCwsLD9r6+v9aysrOynp6fioqKi1p2dncmVlZW8jo6OroODg6F5eXmUa2trhl1dXXlLS0ttNzc3YiIiIlkNDQ1RAJ6env2bm5v2l5eX7pSUlOWPj4/aiIiIz4GBgcN5eXm3cHBwq2RkZJ5XV1eSSkpKhzk5OX0qKipzGBgYawgICGMAioqK/YeHh/eDg4PvgICA6Hp6et90dHTVbW1ty2VlZcBcXFy1UVFRqkZGRqA6OjqWLS0tjSEhIYQSEhJ9BgYGdwB2dnb+c3Nz+HFxcfJra2vrZmZm42JiYttaWlrRUlJSyUtLS79CQkK2Nzc3rS0tLaQiIiKdGBgYlQ4ODo8EBASKAGNjY/5gYGD5XV1d9FpaWu5VVVXnTk5O4UlJSdlCQkLRPDw8yTQ0NMEqKiq7IiIisxkZGa0RERGmCgoKoQMDA5wAUFBQ/k9PT/pKSkr3R0dH8kNDQ+w+Pj7mOTk54DMzM9otLS3TJycnzSAgIMgZGRnBExMTvA0NDbcHBweyAwMDrwA9PT3+PDw8+zo6Ovg2Njb0MzMz8DAwMOwqKirnJSUl4iEhId4cHBzYFxcX1BISEtAODg7KCQkJxwQEBMQBAQHBAC0tLf4rKyv9Kioq+iYmJvclJSX0ISEh8R4eHu4aGhrqFhYW5xMTE+MQEBDgDQ0N3AgICNkGBgbWBAQE0wAAANEAHh4e/h0dHf0bGxv7Ghoa+hgYGPcWFhb2FBQU8xEREfEPDw/uDAwM7AoKCuoICAjoBgYG5gMDA+MBAQHiAAAA4QARERH+EBAQ/g8PD/0NDQ38DQ0N+wsLC/kKCgr4CAgI9wcHB/YFBQX0BAQE8wICAvIBAQHwAQEB7wAAAO8AAADuAAUFBf4FBQX+BAQE/gQEBP4DAwP+AwMD/QMDA/0CAgL8AQEB/AEBAfsAAAD7AAAA+wAAAPoAAAD6AAAA+QAAAPmq2NbsCl2m4wAAAABJRU5ErkJggg==') no-repeat; background-size: 100%;");
e.appendChild(c("SVslide",null,"background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALUlEQVQYlWNgQAX/kTBW8B8ZYFMIk0ARQFaIoQCbQuopIspNRPsOrpABSzgBAFHzU61KjdKlAAAAAElFTkSuQmCC'); height: 9px; width: 9px; position: absolute; cursor: crosshair"));this.element.appendChild(e);e=c("H",null,'cursor: crosshair; float: left; height: 170px; position: relative; width: 19px; padding: 0;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4jWP4TwAcOHAAL2YYNWBYGEBIASEwasCwMAAALvidroqDalkAAAAASUVORK5CYII=");');
e.appendChild(c("Hmodel",null,"position: relative;"));e.appendChild(c("Hslide",null,'top: 0px; left: -5px; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAFCAYAAAC5Fuf5AAAAKklEQVQokWP4////fwY6gv////9n+A8F9LIQxVJaW4xiz4D5lB4WIlsMAPjER7mTpG/OAAAAAElFTkSuQmCC"); height: 5px; width: 29px; position: absolute; '));this.element.appendChild(e);e=c("O",null,'cursor: crosshair; float: left; height: 170px; position: relative; width: 19px; padding: 0;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4jWP4TwAcOHAAL2YYNWBYGEBIASEwasCwMAAALvidroqDalkAAAAASUVORK5CYII=");border: 1px solid #888; left: 9px;');
e.appendChild(c("Omodel",null,"position: relative;"));e.appendChild(c("Oslide",null,'top: 0px; left: -5px; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAFCAYAAAC5Fuf5AAAAKklEQVQokWP4////fwY6gv////9n+A8F9LIQxVJaW4xiz4D5lB4WIlsMAPjER7mTpG/OAAAAAElFTkSuQmCC"); height: 5px; width: 29px; position: absolute; '));this.element.appendChild(e);d.appendChild(this.element);d=document.createElement("style");d.styleSheet?d.styleSheet.cssText="#pickRGB:hover {color: #FFD000;} #pickCLOSE:hover {color: #FFD000;} #pickOK:hover {color: #FFD000;}":
d.appendChild(document.createTextNode("#pickRGB:hover {color: #FFD000;} #pickCLOSE:hover {color: #FFD000;} #pickOK:hover {color: #FFD000;}"));document.getElementsByTagName("head")[0].appendChild(d);MoveWindow.call(this,"picker");this.savefn=a;this.abortfn=b;this.size=170;this.sv=5;this.oh=2;this.picked={H:360,S:100,V:100,A:1};this.max={H:360,S:100,V:100,A:1};this.colour=new Colour;for(var e="",f,d=0;d<=this.size;d++)f=new Colour({H:Math.round(360/this.size*d),S:100,V:100,A:1}),e+="<div class='hue' style='height: 1px; width: 19px; margin: 0; padding: 0; background: "+
f.htmlHex()+";'> </div>";$("Hmodel").innerHTML=e;e="";for(d=0;d<=this.size;d++)f=1-d/this.size,e+="<div class='opacity' style='height: 1px; width: 19px; margin: 0; padding: 0; background: #000;opacity: "+f.toFixed(2)+";'> </div>";$("Omodel").innerHTML=e}ColourPicker.prototype=new MoveWindow;ColourPicker.prototype.constructor=MoveWindow;ColourPicker.prototype.pick=function(a,b,c){this.update(a.HSVA());"block"!=this.element.style.display&&MoveWindow.prototype.open.call(this,b,c)};
ColourPicker.prototype.select=function(a,b,c){if(!b||!c){var d=findElementPos(a);b=b?b:d[0]+32;c=c?c:d[1]+32}d=new Colour(a.style.backgroundColor);this.update(d.HSVA());"block"!=this.element.style.display&&(MoveWindow.prototype.open.call(this,b,c),this.target=a)};
ColourPicker.prototype.click=function(a,b){if("pickCLOSE"==b.target.id)this.abortfn&&this.abortfn(),toggle("picker");else if("pickOK"==b.target.id){this.savefn&&this.savefn(this.picked);if(this.target){var c=new Colour(this.picked);this.target.style.backgroundColor=c.html()}toggle("picker")}else"SV"==b.target.id?this.setSV(b):"Hslide"==b.target.id||"hue"==b.target.className?this.setHue(b):"Oslide"!=b.target.id&&"opacity"!=b.target.className||this.setOpacity(b)};
ColourPicker.prototype.move=function(a,b){b.isdown&&0==b.button&&("picker"==b.target.id||"pickCUR"==b.target.id||"pickRGB"==b.target.id?MoveWindow.prototype.move.call(this,a,b):b.target&&this.click(a,b))};ColourPicker.prototype.wheel=function(a,b){this.incHue(-a.spin)};ColourPicker.prototype.setSV=function(a){var b=a.clientx-parseInt($("SV").offsetLeft);a=a.clienty-parseInt($("SV").offsetTop);this.picked.S=scale(b,this.size,0,this.max.S);this.picked.V=this.max.V-scale(a,this.size,0,this.max.V);this.update(this.picked)};
ColourPicker.prototype.setHue=function(a){parseInt($("H").offsetLeft);a=a.clienty-parseInt($("H").offsetTop);this.picked.H=scale(a,this.size,0,this.max.H);this.update(this.picked)};ColourPicker.prototype.incHue=function(a){this.picked.H+=a;this.picked.H=clamp(this.picked.H,0,this.max.H);this.update(this.picked)};ColourPicker.prototype.setOpacity=function(a){parseInt($("O").offsetLeft);a=a.clienty-parseInt($("O").offsetTop);this.picked.A=1-clamp(a/this.size,0,1);this.update(this.picked)};
ColourPicker.prototype.updateString=function(a){a||(a=prompt("Edit colour:",this.colour.html()));a&&(this.colour=new Colour(a),this.update(this.colour.HSV()))};
ColourPicker.prototype.update=function(a){this.picked=a;this.colour=new Colour(a);rgba=this.colour.rgbaObj();rgbaStr=this.colour.html();bgcol=new Colour({H:a.H,S:100,V:100,A:255});$("pickRGB").innerHTML=this.colour.printString();$S("pickCUR").background=rgbaStr;$S("pickCUR").backgroundColour=rgbaStr;$S("SV").backgroundColor=bgcol.htmlHex();$S("Hslide").top=a.H/360*this.size-this.oh+"px";$S("SVslide").top=Math.round(this.size-a.V/100*this.size-this.sv)+"px";$S("SVslide").left=Math.round(a.S/100*this.size-
this.sv)+"px";$S("Oslide").top=this.size*(1-a.A)-this.oh-1+"px"};function GradientEditor(a,b,c,d,e){this.canvas=a;this.callback=b;this.premultiply=c;this.changed=!0;this.inserting=!1;this.element=this.editing=null;this.spin=0;this.scrollable=e;d||(this.picker=new ColourPicker(this.save.bind(this),this.cancel.bind(this)));this.palette=new Palette(null,c);this.canvas.mouse=new Mouse(this.canvas,this);this.canvas.oncontextmenu="return false;";this.canvas.oncontextmenu=function(){return!1}}
GradientEditor.prototype.read=function(a){this.palette=new Palette(a,this.premultiply);this.reset();this.update(!0)};GradientEditor.prototype.update=function(a){this.changed=!0;this.palette.draw(this.canvas,!0);!a&&this.callback&&this.callback(this)};GradientEditor.prototype.get=function(a,b){if(b&&!this.changed)return!1;this.changed=!1;this.palette.draw(a,!1);return!0};
GradientEditor.prototype.insert=function(a,b,c){this.inserting=!0;var d=new Colour;this.editing=this.palette.newColour(a,d);this.update();this.picker.pick(d,b,c)};GradientEditor.prototype.editBackground=function(a){this.editing=-1;var b=findElementPos(a);this.element=a;this.picker.pick(this.palette.background,b[0]+32,b[1]+32)};
GradientEditor.prototype.edit=function(a,b,c){"number"==typeof a?(this.editing=a,this.picker.pick(this.palette.colours[a].colour,b,c)):"object"==typeof a&&(this.cancel(),this.element=a,b=new Colour(a.style.backgroundColor),a=findElementPos(a),this.picker.pick(b,a[0]+32,a[1]+32));this.update()};
GradientEditor.prototype.save=function(a){null!=this.editing&&(0<=this.editing?this.palette.colours[this.editing].colour.setHSV(a):this.palette.background.setHSV(a));if(this.element){var b=new Colour(0);b.setHSV(a);this.element.style.backgroundColor=b.html();if(this.element.onchange)this.element.onchange()}this.reset();this.update()};GradientEditor.prototype.cancel=function(){0<=this.editing&&this.inserting&&this.palette.remove(this.editing);this.reset();this.update()};
GradientEditor.prototype.reset=function(){this.inserting=!1;this.element=this.editing=null};
GradientEditor.prototype.click=function(a,b){if(a.ctrlKey){for(var c=0;c<this.palette.colours.length;c++)this.palette.colours[c].position=1-this.palette.colours[c].position;this.update();return!1}this.scrollable||(b.x=b.clientx);if(null!=b.slider)return b.slider=null,this.palette.sort(),this.update(),!1;var d=this.canvas;if(d.getContext){this.cancel();d.getContext("2d");var e=findElementPos(d)[1]+30,c=this.palette.inRange(b.x,this.palette.slider.width,d.width);0<=c?0==a.button?this.edit(c,a.clientX-
128,e):2==a.button&&(this.palette.remove(c),this.update()):this.insert(b.x/d.width,a.clientX-128,e)}return!1};GradientEditor.prototype.down=function(a,b){return!1};
GradientEditor.prototype.move=function(a,b){if(!b.isdown)return!0;this.scrollable||(b.x=b.clientx);if(null==b.slider){var c=this.palette.inDragRange(b.x,this.palette.slider.width,this.canvas.width);0<c&&(b.slider=c)}null==b.slider?b.isdown=!1:(1>b.x&&(b.x=1),b.x>this.canvas.width-1&&(b.x=this.canvas.width-1),this.palette.colours[b.slider].position=b.x/this.canvas.width,this.update(!0))};
GradientEditor.prototype.wheel=function(a,b){this.timer?clearTimeout(this.timer):this.canvas.style.cursor="wait";this.spin+=.01*a.spin;var c=this;this.timer=setTimeout(function(){c.cycle(c.spin);c.spin=0},150)};GradientEditor.prototype.leave=function(a,b){};
GradientEditor.prototype.cycle=function(a){this.canvas.style.cursor="default";this.timer=null;for(var b=1;b<this.palette.colours.length-1;b++){var c=this.palette.colours[b].position,c=c+a;0>=c&&(c+=1);1<=c&&(c-=1);this.palette.colours[b].position=c}this.palette.sort();this.update()};
/** @preserve
 * ShareVol
 * Lightweight WebGL volume viewer/slicer
 *
 * Copyright (c) 2014, Monash University. All rights reserved.
 * Author: Owen Kaluza - owen.kaluza ( at ) monash.edu
 *
 * Licensed under the GNU Lesser General Public License
 * https://www.gnu.org/licenses/lgpl.html
 *
 */
//TODO: colourmaps per slicer/volume not shared (global shared list of selectable maps?)
var volume;
var slicer;
var colours;
//Windows...
var info, colourmaps;
var state = {};
var reset;
var filename;
var mobile;

function initPage() {
  window.onresize = autoResize;

  //Create tool windows
  info = new Popup("info");
  info.show();
  colourmaps = new Popup("colourmap", 400, 200);

  //Yes it's user agent sniffing, but we need to attempt to detect mobile devices so we don't over-stress their gpu...
  mobile = (screen.width <= 760 || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));

  //Colour editing and palette management
  colours = new GradientEditor($('palette'), updateColourmap);

  //Load json data?
  var json = getSearchVariable("data");
  //Attempt to load default.json
  if (!json) json = "default.json";

  $('status').innerHTML = "Loading params...";
  ajaxReadFile(decodeURI(json), loadData, true);
}

function loadStoredData(key) {
  if (localStorage[key]) {
    try {
      var parsed = JSON.parse(localStorage[key]);
      state = parsed;
    } catch (e) {
      //if erroneous data in local storage, delete
      //console.log("parse error: " + e.message);
      alert("parse error: " + e.message);
      localStorage[key] = null;
    }
  }
}

function loadData(src, fn) {
  var parsed = JSON.parse(src);
  if (parsed.volume) {
    //Old data format
    state = {}
    state.properties = {};
    state.colourmaps = [{}];
    object = {};
    view = {};
    state.views = [view];
    state.objects = [object];
    //Copy fields to their new locations
    //Objects
    object.name = "volume";
    object.samples = parsed.volume.properties.samples;
    object.isovalue = parsed.volume.properties.isovalue;
    object.isowalls = parsed.volume.properties.drawWalls;
    object.isoalpha = parsed.volume.properties.isoalpha;
    object.isosmooth = parsed.volume.properties.isosmooth;
    object.colour = parsed.volume.properties.isocolour;
    object.density = parsed.volume.properties.density;
    object.power = parsed.volume.properties.power;
    if (parsed.volume.properties.usecolourmap) object.colourmap = 0;
    object.tricubicfilter = parsed.volume.properties.tricubicFilter;
    object.zmin = parsed.volume.properties.Zmin;
    object.zmax = parsed.volume.properties.Zmax;
    object.ymin = parsed.volume.properties.Ymin;
    object.ymax = parsed.volume.properties.Ymax;
    object.xmin = parsed.volume.properties.Xmin;
    object.xmax = parsed.volume.properties.Xmax;
    object.brightness = parsed.volume.properties.brightness;
    object.contrast = parsed.volume.properties.contrast;
    //The volume data sub-object
    object.volume = {};
    object.volume.url = parsed.url;
    object.volume.res = parsed.res;
    object.volume.scale = parsed.scale;
    //The slicer properties
    object.slices = parsed.slicer;
    //Properties - global rendering properties
    state.properties.nogui = parsed.nogui;
    //Views - single only in old data
    view.axes = parsed.volume.properties.axes;
    view.border = parsed.volume.properties.border;
    view.translate = parsed.volume.translate;
    view.rotate = parsed.volume.rotate;
    view.focus = parsed.volume.focus;

    //Colourmap
    colours.read(parsed.volume.colourmap);
    colours.update();
    state.colourmaps = [colours.palette.get()];
    delete state.colourmaps[0].background;
    state.properties.background = colours.palette.background.html();
  } else {
    //New format - LavaVu compatible
    state = parsed;
  }

  reset = state; //Store orig for reset
  //Storage reset?
  if (getSearchVariable("reset")) {localStorage.removeItem(fn); console.log("Storage cleared");}
  /* LOCALSTORAGE DISABLED
  //Load any stored presets for this file
  filename = fn;
  loadStoredData(fn);
  */

  //Setup default props from original data...
  //state.objects = reset.objects;
  if (!state.objects[0].volume.res) state.objects[0].volume.res = [256, 256, 256];
  if (!state.objects[0].volume.scale) state.objects[0].volume.scale = [1.0, 1.0, 1.0];

  //Load the image
  loadTexture();
}

function saveData() {
  try {
    localStorage[filename] = getData();
  } catch(e) {
    //data wasn’t successfully saved due to quota exceed so throw an error
    console.log('LocalStorage Error: Quota exceeded? ' + e);
  }
}

function getData(compact, matrix) {
  if (volume) {
    var vdat = volume.get(matrix);
    var object = state.objects[0];
    object.brightness = vdat.properties.brightness;
    object.contrast = vdat.properties.contrast;
    object.zmin = vdat.properties.zmin;
    object.zmax = vdat.properties.zmax;
    object.ymin = vdat.properties.ymin;
    object.ymax = vdat.properties.ymax;
    object.xmin = vdat.properties.xmin;
    object.xmax = vdat.properties.xmax;
    //object.volume.res = parsed.res;
    //object.volume.scale = parsed.scale;
    object.samples = vdat.properties.samples;
    object.isovalue = vdat.properties.isovalue;
    object.isowalls = vdat.properties.isowalls
    object.isoalpha = vdat.properties.isoalpha;
    object.isosmooth = vdat.properties.isosmooth;
    object.colour = vdat.properties.colour;
    object.density = vdat.properties.density;
    object.power = vdat.properties.power;
    object.tricubicfilter = vdat.properties.tricubicFilter;
    if (vdat.properties.usecolourmap)
      object.colourmap = 0;
    else
      delete object.colourmap;

    //Views - single only in old data
    state.views[0].axes = vdat.properties.axes;
    state.views[0].border = vdat.properties.border;
    state.views[0].translate = vdat.translate;
    state.views[0].rotate = vdat.rotate;

    if (slicer)
       state.objects[0].slices = slicer.get();

    //Colourmap
    state.colourmaps = [colours.palette.get()];
    delete state.colourmaps[0].background;
    state.properties.background = colours.palette.background.html();
  }

  //Return compact json string
  console.log(JSON.stringify(state, null, 2));
  if (compact) return JSON.stringify(state);
  //Otherwise return indented json string
  return JSON.stringify(state, null, 2);
}

function exportData() {
  window.open('data:text/json;base64,' + window.btoa(getData()));
}

function resetFromData(src) {
  //Restore data from saved props
  if (src.objects[0].volume && volume) {
    volume.load(src.objects[0]);
    volume.draw();
  }

  if (src.objects[0].slices && slicer) {
    slicer.load(src.objects[0].slices);
    slicer.draw();
  }
}

function loadTexture() {
  $('status').innerHTML = "Loading image data... ";
  var image;

  loadImage(state.objects[0].volume.url, function () {
    image = new Image();

    var headers = request.getAllResponseHeaders();
    var match = headers.match( /^Content-Type\:\s*(.*?)$/mi );
    var mimeType = match[1] || 'image/png';
    var blob = new Blob([request.response], {type: mimeType} );
    image.src =  window.URL.createObjectURL(blob);
    var imageElement = document.createElement("img");

    image.onload = function () {
      console.log("Loaded image: " + image.width + " x " + image.height);
      imageLoaded(image);
    }
  }
  );
}

function imageLoaded(image) {
  //Create the slicer
  if (state.objects[0].slices) {
    if (mobile) state.objects[0].slices.show = false; //Start hidden on small screen
    slicer = new Slicer(state.objects[0], image, "linear");
  }

  //Create the volume viewer
  if (state.objects[0].volume) {
    volume = new Volume(state.objects[0], image, mobile);
    volume.slicer = slicer; //For axis position
  }

  //Volume draw on mouseup to apply changes from other controls (including slicer)
  document.addEventListener("mouseup", function(ev) {if (volume) volume.delayedRender(250, true);}, false);
  document.addEventListener("wheel", function(ev) {if (volume) volume.delayedRender(250, true);}, false);

  //Update colours (and draw objects)
  colours.read(state.colourmaps[0].colours);
  colours.update();
  updateColourmap();

  info.hide();  //Status

  /*/Draw speed test
  frames = 0;
  testtime = new Date().getTime();
  info.show();
  volume.draw(false, true);*/

  if (!state.properties.nogui) {
    var gui = new dat.GUI();
    if (state.properties.server)
      gui.add({"Update" : function() {ajaxPost(state.properties.server + "/update", "data=" + encodeURIComponent(getData(true, true)));}}, 'Update');
    /* LOCALSTORAGE DISABLED
    gui.add({"Reset" : function() {resetFromData(reset);}}, 'Reset');
    */
    gui.add({"Restore" : function() {resetFromData(state);}}, 'Restore');
    gui.add({"Export" : function() {exportData();}}, 'Export');
    gui.add({"loadFile" : function() {document.getElementById('fileupload').click();}}, 'loadFile'). name('Load Image file');
    gui.add({"ColourMaps" : function() {window.colourmaps.toggle();}}, 'ColourMaps');

    if (volume) volume.addGUI(gui);
    if (slicer) slicer.addGUI(gui);
  }

  //Save props on exit
  window.onbeforeunload = saveData;
}

/////////////////////////////////////////////////////////////////////////
function autoResize() {
  if (volume) {
    volume.width = 0; //volume.canvas.width = window.innerWidth;
    volume.height = 0; //volume.canvas.height = window.innerHeight;
    volume.draw();
  }
}

function setColourMap(filename) {
  var data = readURL("colourmaps/" + filename);
  colours.read(data);
  updateColourmap();
}

function updateColourmap() {
  if (!colours) return;
  var gradient = $('gradient');
  colours.palette.draw(gradient, false);

  if (volume && volume.webgl) {
    volume.webgl.updateTexture(volume.webgl.gradientTexture, gradient, volume.gl.TEXTURE1);  //Use 2nd texture unit
    volume.applyBackground(colours.palette.background.html());
    volume.draw();
  }

  if (slicer) {
    slicer.updateColourmap();
    slicer.draw();
  }
}

var request, progressBar;

    function loadImage(imageURI, callback)
    {
        request = new XMLHttpRequest();
        request.onloadstart = showProgressBar;
        request.onprogress = updateProgressBar;
        request.onload = callback;
        request.onloadend = hideProgressBar;
        request.open("GET", imageURI, true);
        request.responseType = 'arraybuffer';
        request.send(null);
    }
    
    function showProgressBar()
    {
        progressBar = document.createElement("progress");
        progressBar.value = 0;
        progressBar.max = 100;
        progressBar.removeAttribute("value");
        document.getElementById('status').appendChild(progressBar);
    }
    
    function updateProgressBar(e)
    {
        if (e.lengthComputable)
            progressBar.value = e.loaded / e.total * 100;
        else
            progressBar.removeAttribute("value");
    }
    
    function hideProgressBar()
    {
      document.getElementById('status').removeChild(progressBar);
    }

/**
 * @constructor
 */
function Popup(id, x, y) {
  this.el = $(id);
  this.style = $S(id);
  if (x && y) {
    this.style.left = x + 'px';
    this.style.top = y + 'px';
  } else {
    this.style.left = ((window.innerWidth - this.el.offsetWidth) * 0.5) + 'px';
    this.style.top = ((window.innerHeight - this.el.offsetHeight) * 0.5) + 'px';
  }
  this.drag = false;
}

Popup.prototype.toggle = function() {
  if (this.style.visibility == 'visible')
    this.hide();
  else
    this.show();
}

Popup.prototype.show = function() {
  this.style.visibility = 'visible';
}

Popup.prototype.hide = function() {
  this.style.visibility = 'hidden';
}

/*
 * ShareVol
 * Lightweight WebGL volume viewer/slicer
 *
 * Copyright (c) 2014, Monash University. All rights reserved.
 * Author: Owen Kaluza - owen.kaluza ( at ) monash.edu
 *
 * Licensed under the GNU Lesser General Public License
 * https://www.gnu.org/licenses/lgpl.html
 *
 */

  function Slicer(props, image, filter, parentEl) {
    this.image = image;
    this.res = props.volume.res;
    this.dims = [props.volume.res[0] * props.volume.scale[0], 
                 props.volume.res[1] * props.volume.scale[1], 
                 props.volume.res[2] * props.volume.scale[2]];
    this.slices = [0.5, 0.5, 0.5];

    // Set properties
    this.properties = {};
    this.properties.show = true;
    this.properties.X = Math.round(this.res[0] / 2);
    this.properties.Y = Math.round(this.res[1] / 2);
    this.properties.Z = Math.round(this.res[2] / 2);
    this.properties.brightness = 0.0;
    this.properties.contrast = 1.0;
    this.properties.power = 1.0;
    this.properties.usecolourmap = false;
    this.properties.layout = "xyz";
    this.flipY = false;
    this.properties.zoom = 1.0;

    this.container = document.createElement("div");
    this.container.style.cssText = "position: absolute; bottom: 10px; left: 10px; margin: 0px; padding: 0px; pointer-events: none;";
    if (!parentEl) parentEl = document.body;
    parentEl.appendChild(this.container);

    //Load from local storage or previously loaded file
    if (props.slices) this.load(props.slices);

    this.canvas = document.createElement("canvas");
    this.canvas.style.cssText = "position: absolute; bottom: 0px; margin: 0px; padding: 0px; border: none; background: rgba(0,0,0,0); pointer-events: none;";

    this.doLayout();

    this.canvas.mouse = new Mouse(this.canvas, this);

    this.webgl = new WebGL(this.canvas);
    this.gl = this.webgl.gl;

    this.filter = this.gl.NEAREST; //Nearest-neighbour (default)
    if (filter == "linear") this.filter = this.gl.LINEAR;

    //Use the default buffers
    this.webgl.init2dBuffers(this.gl.TEXTURE2);

    //Compile the shaders
    this.program = new WebGLProgram(this.gl, 'texture-vs', 'texture-fs');
    if (this.program.errors) OK.debug(this.program.errors);
    this.program.setup(["aVertexPosition"], ["palette", "texture", "colourmap", "cont", "bright", "power", "slice", "dim", "res", "axis", "select"]);

    this.gl.clearColor(0, 0, 0, 0);
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.gl.enable(this.gl.SCISSOR_TEST);

    //Load the textures
    this.loadImage(this.image);

    //Hidden?
    if (!this.properties.show) this.toggle();
  }

  Slicer.prototype.toggle = function() {
    if (this.container.style.visibility == 'hidden')
      this.container.style.visibility = 'visible';
    else
      this.container.style.visibility = 'hidden';
  }

  Slicer.prototype.addGUI = function(gui) {
    this.gui = gui;
    var that = this;
    //Add folder
    var f1 = this.gui.addFolder('Slices');
    f1.add(this.properties, 'show').onFinishChange(function(l) {that.toggle();});
    //["hide/show"] = function() {};
    f1.add(this.properties, 'layout').onFinishChange(function(l) {that.doLayout(); that.draw();});
    //f1.add(this.properties, 'X', 0, this.res[0], 1).listen();
    //f1.add(this.properties, 'Y', 0, this.res[1], 1).listen();
    //f1.add(this.properties, 'Z', 0, this.res[2], 1).listen();
    f1.add(this.properties, 'zoom', 0.01, 4.0, 0.1).onFinishChange(function(l) {that.doLayout(); that.draw();});

    f1.add(this.properties, 'brightness', -1.0, 1.0, 0.01);
    f1.add(this.properties, 'contrast', 0.0, 3.0, 0.01);
    f1.add(this.properties, 'power', 0.01, 5.0, 0.01);
    f1.add(this.properties, 'usecolourmap');
    f1.open();

    var changefn = function(value) {that.draw();};
    for (var i in f1.__controllers)
      f1.__controllers[i].onChange(changefn);
  }

  Slicer.prototype.get = function() {
    var data = {};
    //data.colourmap = colours.palette.toString();
    data.properties = this.properties;
    return data;
  }

  Slicer.prototype.load = function(src) {
    //colours.read(data.colourmap);
    //colours.update();
    for (var key in src.properties)
      this.properties[key] = src.properties[key]
  }

  Slicer.prototype.setX = function(val) {this.properties.X = val * this.res[0]; this.draw();}


  Slicer.prototype.setY = function(val) {this.properties.Y = val * this.res[1]; this.draw();}
  Slicer.prototype.setZ = function(val) {this.properties.Z = val * this.res[2]; this.draw();}

  Slicer.prototype.doLayout = function() {
    this.viewers = [];

    var x = 0;
    var y = 0;
    var xmax = 0;
    var ymax = 0;
    var rotate = 0;
    var alignTop = true;

    removeChildren(this.container);

    var that = this;
    var buffer = "";
    var rowHeight = 0, rowWidth = 0;
    var addViewer = function(idx) {
      var mag = 1.0;
      if (buffer) mag = parseFloat(buffer);
      var v = new SliceView(that, x, y, idx, rotate, mag);
      that.viewers.push(v);
      that.container.appendChild(v.div);

//      x += v.viewport.width + 5; //Offset by previous width
//      var h = v.viewport.height + 5;
//      if (h > rowHeight) rowHeight = h;
//      if (x > xmax) xmax = x;

      y += v.viewport.height + 5; //Offset by previous height
      var w = v.viewport.width + 5;
      if (w > rowWidth) rowWidth = w;
      if (y > ymax) ymax = y;
    }

    //Process based on layout
    this.flipY = false;
    for (var i=0; i<this.properties.layout.length; i++) {
      var c = this.properties.layout.charAt(i);
      rotate = 0;
      switch (c) {
        case 'X':
          rotate = 90;
        case 'x':
          addViewer(0);
          break;
        case 'Y':
          rotate = 90;
        case 'y':
          addViewer(1);
          break;
        case 'Z':
          rotate = 90;
        case 'z':
          addViewer(2);
          break;
        case '|':
//          x = 0;
//          y += rowHeight; //this.viewers[this.viewers.length-1].viewport.height + 5; //Offset by previous height
//          rowHeight = 0;

          y = 0;
          x += rowWidth;
          rowWidth = 0;
          break;
        case '_':
          this.flipY = true;
          break;
        case '-':
          alignTop = false;
          break;
        default:
          //Add other chars to buffer, if a number will be used as zoom
          buffer += c;
          continue;
      }
      //Clear buffer
      buffer = "";
    }

//    this.width = xmax;
//    this.height = y + rowHeight; //this.viewers[this.viewers.length-1].viewport.height;

    this.width = x + rowWidth;
    this.height = ymax;

    //Restore the main canvas
    this.container.appendChild(this.canvas);

    //Align to top or bottom?
    //console.log(this.height);
    //console.log(this.height + " : top? " + alignTop);
    if (alignTop) {
      this.container.style.bottom = "";
      this.container.style.top = (this.height + 10) + "px";
    } else {
      this.container.style.top = undefined;
      this.container.style.bottom = 10 + "px";
    }
  }

  Slicer.prototype.loadImage = function(image) {
    //Texture load
    for (var i=0; i<3; i++)
      this.webgl.loadTexture(image, this.filter);
    this.reset();
  }

  Slicer.prototype.reset = function() {
    this.dimx = this.image.width / this.res[0];
    this.dimy = this.image.height / this.res[1];
    //console.log(this.res[0] + "," + this.res[1] + "," + this.res[2] + " -- " + this.dimx + "x" + this.dimy);
  }

  Slicer.prototype.updateColourmap = function() {
    this.webgl.updateTexture(this.webgl.gradientTexture, $('gradient'), this.gl.TEXTURE2);  //Use 2nd texture unit
    this.draw();
  }

  Slicer.prototype.draw = function() {
    this.slices = [(this.properties.X-1)/(this.res[0]-1), 
                   (this.properties.Y-1)/(this.res[1]-1),
                   (this.properties.Z-1)/(this.res[2]-1)];

    if (this.width != this.canvas.width || this.height != this.canvas.height) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.canvas.setAttribute("width", this.width);
      this.canvas.setAttribute("height", this.height);
      if (this.webgl) {
        this.gl.viewportWidth = this.width;
        this.gl.viewportHeight = this.height;
        this.webgl.viewport = new Viewport(0, 0, this.width, this.height);
      }
    }
    //console.log(this.gl.viewportWidth + " x " + this.gl.viewportHeight);
    //console.log(this.width + " x " + this.height);

    this.webgl.use(this.program);

    //Uniform variables
    this.gl.uniform4fv(this.program.uniforms["background"], colours.palette.colours[0].colour.rgbaGL());

    //Gradient texture
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.webgl.gradientTexture);
    this.gl.uniform1i(this.program.uniforms["palette"], 0);

    //Options
    this.gl.uniform1i(this.program.uniforms["colourmap"], this.properties.usecolourmap);

    // brightness and contrast
    this.gl.uniform1f(this.program.uniforms["bright"], this.properties.brightness);
    this.gl.uniform1f(this.program.uniforms["cont"], this.properties.contrast);
    this.gl.uniform1f(this.program.uniforms["power"], this.properties.power);

    //Image texture
    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.webgl.textures[0]);
    this.gl.uniform1i(this.program.uniforms["texture"], 1);

    //Clear all
    this.gl.scissor(0, 0, this.width, this.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    //Draw each slice viewport
    for (var i=0; i<this.viewers.length; i++)
      this.drawSlice(i);
  }

  Slicer.prototype.drawSlice = function(idx) {
    var view = this.viewers[idx];
    var vp = view.viewport;

    //Set selection crosshairs
    var sel;
    if (view.rotate == 90)
      sel = [1.0 - this.slices[view.j], this.slices[view.i]];
    else
      sel = [this.slices[view.i], this.slices[view.j]];
    
    //Swap y-coord
    if (!this.flipY) sel[1] = 1.0 - sel[1];

    this.webgl.viewport = vp;
    this.gl.scissor(vp.x, vp.y, vp.width, vp.height);
    //console.log(JSON.stringify(vp));

    //Apply translation to origin, any rotation and scaling (inverse of zoom factor)
    this.webgl.modelView.identity()
    this.webgl.modelView.translate([0.5, 0.5, 0])
    this.webgl.modelView.rotate(-view.rotate, [0, 0, 1]);

    //Apply zoom and flip Y
    var scale = [1.0/2.0, -1.0/2.0, -1.0];
    if (this.flipY) scale[1] = -scale[1];
    this.webgl.modelView.scale(scale);

    //Texturing
    //this.gl.uniform1i(this.program.uniforms["slice"], ));
    this.gl.uniform3f(this.program.uniforms['slice'], this.slices[0], this.slices[1], this.slices[2]);
    this.gl.uniform2f(this.program.uniforms["dim"], this.dimx, this.dimy);
    this.gl.uniform3i(this.program.uniforms["res"], this.res[0], this.res[1], this.res[2]);
    this.gl.uniform1i(this.program.uniforms["axis"], view.axis);
    //Convert [0,1] selection coords to pixel coords
    this.gl.uniform2i(this.program.uniforms["select"], vp.width * sel[0] + vp.x, vp.height * sel[1] + vp.y);

    this.webgl.initDraw2d();

    this.gl.enable(this.gl.BLEND);

    //Draw, single pass
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.webgl.vertexPositionBuffer.numItems);
  }

  function SliceView(slicer, x, y, axis, rotate, magnify) {
    this.axis = axis;
    this.slicer = slicer;

    this.magnify = magnify || 1.0;
    this.origin = [0.5,0.5];
    this.rotate = rotate || 0;

    //Calc viewport
    this.i = 0;
    this.j = 1;
    if (axis == 0) this.i = 2;
    if (axis == 1) this.j = 2;

    var w = Math.round(slicer.dims[this.i] * slicer.properties.zoom * this.magnify);
    var h = Math.round(slicer.dims[this.j] * slicer.properties.zoom * this.magnify);

    if (this.rotate == 90)
      this.viewport = new Viewport(x, y, h, w);
    else
      this.viewport = new Viewport(x, y, w, h);
  
    //Border and mouse interaction element
    this.div = document.createElement("div");
    this.div.style.cssText = "padding: 0px; margin: 0px; outline: 2px solid rgba(64,64,64,0.5); position: absolute; display: inline-block; pointer-events: auto;";
    this.div.id = "slice-div-" + axis;

    this.div.style.left = x + "px";
    this.div.style.bottom = y + "px";
    this.div.style.width = this.viewport.width + "px";
    this.div.style.height = this.viewport.height + "px";

    this.div.mouse = new Mouse(this.div, this);
  }

  SliceView.prototype.click = function(event, mouse) {
    if (this.slicer.flipY) mouse.y = mouse.element.clientHeight - mouse.y;

    var coord;

    //Rotated?
    if (this.rotate == 90)
      coord = [mouse.y / mouse.element.clientHeight, 1.0 - mouse.x / mouse.element.clientWidth];
    else 
      coord = [mouse.x / mouse.element.clientWidth, mouse.y / mouse.element.clientHeight];

    var A = Math.round(this.slicer.res[this.i] * coord[0]);
    var B = Math.round(this.slicer.res[this.j] * coord[1]);

    if (this.axis == 0) {
      slicer.properties.Z = A;
      slicer.properties.Y = B;
    } else if (this.axis == 1) {
      slicer.properties.X = A;
      slicer.properties.Z = B;
    } else {
      slicer.properties.X = A;
      slicer.properties.Y = B;
    }

    this.slicer.draw();
  }

  SliceView.prototype.wheel = function(event, mouse) {
    if (this.axis == 0) slicer.properties.X += event.spin;
    if (this.axis == 1) slicer.properties.Y += event.spin;
    if (this.axis == 2) slicer.properties.Z += event.spin;
    this.slicer.draw();
  }

  SliceView.prototype.move = function(event, mouse) {
    if (mouse.isdown) this.click(event, mouse);
  }


/*
 * ShareVol
 * Lightweight WebGL volume viewer/slicer
 *
 * Copyright (c) 2014, Monash University. All rights reserved.
 * Author: Owen Kaluza - owen.kaluza ( at ) monash.edu
 *
 * Licensed under the GNU Lesser General Public License
 * https://www.gnu.org/licenses/lgpl.html
 *
 */
//BUGS:
//Canvas Y slightly too large, scroll bar appearing
//
//Improvements:
//Separate Opacity gradient
//Data min, data max - masked or clamped
//Timestepping
//Superimposed volumes

function Volume(props, image, mobile, parentEl) {
  this.image = image;
  this.canvas = document.createElement("canvas");
  this.canvas.style.cssText = "width: 100%; height: 100%; z-index: 0; margin: 0px; padding: 0px; background: black; border: none; display:block;";
  if (!parentEl) parentEl = document.body;
  parentEl.appendChild(this.canvas);

  //canvas event handling
  this.canvas.mouse = new Mouse(this.canvas, this);
  this.canvas.mouse.moveUpdate = true; //Continual update of deltaX/Y

  this.background = new Colour(0xff404040);
  this.borderColour = new Colour(0xffbbbbbb);

  this.width = this.height = 0; //Auto-size

  this.webgl = new WebGL(this.canvas);
  this.gl = this.webgl.gl;

  this.rotating = false;
  this.translate = [0,0,4];
  this.rotate = quat4.create();
  quat4.identity(this.rotate);
  this.focus = [0,0,0];
  this.centre = [0,0,0];
  this.modelsize = 1;
  this.scale = [1, 1, 1];
  this.orientation = 1.0; //1.0 for RH, -1.0 for LH
  this.fov = 45.0;
  this.focalLength = 1.0 / Math.tan(0.5 * this.fov * Math.PI/180);
  this.resolution = props.volume["res"];

  //Calculated scaling
  this.scaling = [props.volume["res"][0] * props.volume["scale"][0], 
                  props.volume["res"][1] * props.volume["scale"][1],
                  props.volume["res"][2] * props.volume["scale"][2]];
  this.tiles = [this.image.width / props.volume["res"][0],
                this.image.height / props.volume["res"][1]];
  var maxn = props.volume["res"][2];
  this.scaling = [maxn / this.scaling[0], maxn / this.scaling[1], maxn / this.scaling[2]]

  //Set dims
  //Inverse the scaling factors, used to correct focus/centre of rotation
  this.centre = [0.5/this.scaling[0], 0.5/this.scaling[1], 0.5/this.scaling[2]];
  //this.centre = [0.5, 0.5, 0.5];
  this.modelsize = Math.sqrt(3);
  this.focus = this.centre;

  this.translate[2] = -this.modelsize*1.25;

  OK.debug("New model size: " + this.modelsize + ", Focal point: " + this.focus[0] + "," + this.focus[1] + "," + this.focus[2]);

    //Setup 3D rendering
    this.linePositionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.linePositionBuffer);
    var vertexPositions = [-1.0,  0.0,  0.0,
                            1.0,  0.0,  0.0,
                            0.0, -1.0,  0.0, 
                            0.0,  1.0,  0.0, 
                            0.0,  0.0, -1.0, 
                            0.0,  0.0,  1.0];
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexPositions), this.gl.STATIC_DRAW);
    this.linePositionBuffer.itemSize = 3;
    this.linePositionBuffer.numItems = 6;

    this.lineColourBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.lineColourBuffer);
    var vertexColours =  [1.0, 0.0, 0.0, 1.0,
                          1.0, 0.0, 0.0, 1.0,
                          0.0, 1.0, 0.0, 1.0,
                          0.0, 1.0, 0.0, 1.0,
                          0.0, 0.0, 1.0, 1.0,
                          0.0, 0.0, 1.0, 1.0];
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexColours), this.gl.STATIC_DRAW);
    this.lineColourBuffer.itemSize = 4;
    this.lineColourBuffer.numItems = 6;

  //Bounding box
  this.box([0.0, 0.0, 0.0], [1.0, 1.0, 1.0]);

  //Setup two-triangle rendering
  this.webgl.init2dBuffers(this.gl.TEXTURE1); //Use 2nd texture unit

  //Override texture params set in previous call
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

  this.webgl.loadTexture(image, this.gl.LINEAR);

  //Compile the shaders
  var IE11 = !!window.MSInputMethodContext;  //More evil user-agent sniffing, broken WebGL on windows forces me to do this
  this.lineprogram = new WebGLProgram(this.gl, 'line-vs', 'line-fs');
  if (this.lineprogram.errors) OK.debug(this.lineprogram.errors);
  this.lineprogram.setup(["aVertexPosition", "aVertexColour"], ["uColour", "uAlpha"]);
    this.gl.vertexAttribPointer(this.lineprogram.attributes["aVertexPosition"], this.linePositionBuffer.itemSize, this.gl.FLOAT, false, 0, 0);
    this.gl.vertexAttribPointer(this.lineprogram.attributes["aVertexColour"], this.lineColourBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

  var defines = "precision highp float; const highp vec2 slices = vec2(" + this.tiles[0] + "," + this.tiles[1] + ");\n";
  defines += (IE11 ? "#define IE11\n" : "#define NOT_IE11\n");
  var maxSamples = mobile ? 256 : 1024;
  defines += "const int maxSamples = " + maxSamples + ";\n\n\n\n\n\n"; //Extra newlines so errors in main shader have correct line #
  OK.debug(defines);

  var fs = getSourceFromElement('ray-fs');
  this.program = new WebGLProgram(this.gl, 'ray-vs', defines + fs);
   //console.log(defines + fs);
  if (this.program.errors) OK.debug(this.program.errors);
  this.program.setup(["aVertexPosition"], 
                     ["uBackCoord", "uVolume", "uTransferFunction", "uEnableColour", "uFilter",
                      "uDensityFactor", "uPower", "uBrightness", "uContrast", "uSamples",
                      "uFocalLength", "uWindowSize", "uBBMin", "uBBMax", "uResolution",
                      "uIsoValue", "uIsoColour", "uIsoSmooth", "uIsoWalls"]);

  this.gl.enable(this.gl.DEPTH_TEST);
  this.gl.clearColor(0, 0, 0, 0);
  //this.gl.clearColor(this.background.red/255, this.background.green/255, this.background.blue/255, 0.0);
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
  this.gl.depthFunc(this.gl.LEQUAL);

  //Set default properties
  this.properties = {};

  this.properties.samples = 256;
  this.properties.isovalue = 0.0;
  this.properties.isowalls = false;
  this.properties.isoalpha = 0.75;
  this.properties.isosmooth = 1.0;
  this.properties.colour = [214, 188, 86];

  this.properties.xmin = this.properties.ymin = this.properties.zmin = 0.0;
  this.properties.xmax = this.properties.ymax = this.properties.zmax = 1.0;

  this.properties.density = 10.0;
  this.properties.brightness = 0.0;
  this.properties.contrast = 1.0;
  this.properties.power = 1.0;
  this.properties.usecolourmap = false;
  this.properties.tricubicFilter = false;
  this.properties.lowPowerDevice = false;
  this.properties.axes = true;
  this.properties.border = true;

  //Load from local storage or previously loaded file
  this.load(props);

  if (mobile) //Low power can be enabled in props by default but not switched off
    this.properties.lowPowerDevice = true;
}

Volume.prototype.box = function(min, max) {
  var vertices = new Float32Array(
        [
          min[0], min[1], max[2],
          min[0], max[1], max[2],
          max[0], max[1], max[2],
          max[0], min[1], max[2],
          min[0], min[1], min[2],
          min[0], max[1], min[2],
          max[0], max[1], min[2],
          max[0], min[1], min[2]
        ]);

  var indices = new Uint16Array(
        [
          0, 1, 1, 2, 2, 3, 3, 0,
          4, 5, 5, 6, 6, 7, 7, 4,
          0, 4, 3, 7, 1, 5, 2, 6
        ]
     );
  this.boxPositionBuffer = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.boxPositionBuffer);
  this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);
  this.boxPositionBuffer.itemSize = 3;

  this.boxIndexBuffer = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.boxIndexBuffer); 
  this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indices, this.gl.STATIC_DRAW);
  this.boxIndexBuffer.numItems = 24;
}

Volume.prototype.addGUI = function(gui) {
  if (this.gui) this.gui.destroy(); //Necessary/valid?

  this.gui = gui;

  var f = this.gui.addFolder('Volume');
  f.add(this.properties, 'lowPowerDevice');
  f.add(this.properties, 'usecolourmap');
  this.properties.samples = Math.floor(this.properties.samples);
  if (this.properties.samples % 32 > 0) this.properties.samples -= this.properties.samples % 32;
  f.add(this.properties, 'samples', 32, 1024, 32);
  f.add(this.properties, 'density', 0.0, 50.0, 1.0);
  f.add(this.properties, 'brightness', -1.0, 1.0, 0.05);
  f.add(this.properties, 'contrast', 0.0, 3.0, 0.05);
  f.add(this.properties, 'power', 0.01, 5.0, 0.05);
  f.add(this.properties, 'axes');
  f.add(this.properties, 'border');
  f.add(this.properties, 'tricubicFilter');
  f.open();
  //this.gui.__folders.f.controllers[1].updateDisplay();  //Update samples display

  //Clip planes folder
  var f0 = this.gui.addFolder('Clip planes');
  f0.add(this.properties, 'xmin', 0.0, 1.0, 0.01);//.onFinishChange(function(l) {if (slicer) slicer.setX(l);});
  f0.add(this.properties, 'xmax', 0.0, 1.0, 0.01);//.onFinishChange(function(l) {if (slicer) slicer.setX(l);});
  f0.add(this.properties, 'ymin', 0.0, 1.0, 0.01);//.onFinishChange(function(l) {if (slicer) slicer.setY(l);});
  f0.add(this.properties, 'ymax', 0.0, 1.0, 0.01);//.onFinishChange(function(l) {if (slicer) slicer.setY(l);});
  f0.add(this.properties, 'zmin', 0.0, 1.0, 0.01);//.onFinishChange(function(l) {if (slicer) slicer.setZ(l);});
  f0.add(this.properties, 'zmax', 0.0, 1.0, 0.01);//.onFinishChange(function(l) {if (slicer) slicer.setZ(l);});
  //f0.open();

  //Isosurfaces folder
  var f1 = this.gui.addFolder('Isosurface');
  f1.add(this.properties, 'isovalue', 0.0, 1.0, 0.01);
  f1.add(this.properties, 'isowalls');
  f1.add(this.properties, 'isoalpha', 0.0, 1.0, 0.01);
  f1.add(this.properties, 'isosmooth', 0.1, 3.0, 0.1);
  f1.addColor(this.properties, 'colour');
  //f1.open();

  // Iterate over all controllers and set change function
  var that = this;
  var changefn = function(value) {that.delayedRender(250);};  //Use delayed high quality render for faster interaction
  for (var i in f.__controllers)
    f.__controllers[i].onChange(changefn);
  for (var i in f0.__controllers)
    f0.__controllers[i].onChange(changefn);
  for (var i in f1.__controllers)
    f1.__controllers[i].onChange(changefn);
}

Volume.prototype.load = function(src) {
  for (var key in src)
    this.properties[key] = src[key]

  if (src.colourmap != undefined) this.properties.usecolourmap = true;
  this.properties.axes = state.views[0].axes;
  this.properties.border = state.views[0].border;
  this.properties.tricubicFilter = src.tricubicfilter;

  if (state.views[0].translate) this.translate = state.views[0].translate;
  //Initial rotation (Euler angles or quaternion accepted)
  if (state.views[0].rotate) {
    if (state.views[0].rotate.length == 3) {
      this.rotateZ(-state.views[0].rotate[2]);
      this.rotateY(-state.views[0].rotate[1]);
      this.rotateX(-state.views[0].rotate[0]);
    } else if (state.views[0].rotate[3] != 0)
      this.rotate = quat4.create(state.views[0].rotate);    
  }
}

Volume.prototype.get = function(matrix) {
  var data = {};
  if (matrix) {
    //Include the modelview matrix array
    data.modelview = this.webgl.modelView.toArray();
  } else {
    //Translate + rotation quaternion
    data.translate = this.translate;
    data.rotate = [this.rotate[0], this.rotate[1], this.rotate[2], this.rotate[3]];
  }
  data.properties = this.properties;
  return data;
}

var frames = 0;
var testtime;

Volume.prototype.draw = function(lowquality, testmode) {
  if (!this.properties || !this.webgl) return; //Getting called before vars defined, TODO:fix
  //this.time = new Date().getTime();
  if (this.width == 0 || this.height == 0) {
    //Get size from window
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  if (this.width != this.canvas.width || this.height != this.canvas.height) {
    //Get size from element
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
    if (this.gl) {
      this.gl.viewportWidth = this.width;
      this.gl.viewportHeight = this.height;
      this.webgl.viewport = new Viewport(0, 0, this.width, this.height);
    }
  }
  //Reset to auto-size...
  //this.width = this.height = 0;
  //console.log(this.width + "," + this.height);

  this.camera();

      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      this.gl.viewport(this.webgl.viewport.x, this.webgl.viewport.y, this.webgl.viewport.width, this.webgl.viewport.height);

  if (this.properties.axes) this.drawAxis(1.0);
  if (this.properties.border) this.drawBox(1.0);

  this.camera();

  //Volume render (skip while interacting if lowpower device flag is set)
  if (!(lowquality && this.properties.lowPowerDevice)) {
    this.webgl.use(this.program);
    this.webgl.modelView.scale(this.scaling);  //Apply scaling
      this.gl.disableVertexAttribArray(this.program.attributes["aVertexColour"]);

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.webgl.textures[0]);

    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.webgl.gradientTexture);

    //Only render full quality when not interacting
    //this.gl.uniform1i(this.program.uniforms["uSamples"], this.samples);
    this.gl.uniform1i(this.program.uniforms["uSamples"], lowquality ? this.properties.samples * 0.5 : this.properties.samples);
    this.gl.uniform1i(this.program.uniforms["uVolume"], 0);
    this.gl.uniform1i(this.program.uniforms["uTransferFunction"], 1);
    this.gl.uniform1i(this.program.uniforms["uEnableColour"], this.properties.usecolourmap);
    this.gl.uniform1i(this.program.uniforms["uFilter"], lowquality ? false : this.properties.tricubicFilter);
    this.gl.uniform1f(this.program.uniforms["uFocalLength"], this.focalLength);
    this.gl.uniform2fv(this.program.uniforms["uWindowSize"], new Float32Array([this.gl.viewportWidth, this.gl.viewportHeight]));

    var bbmin = [this.properties.xmin, this.properties.ymin, this.properties.zmin];
    var bbmax = [this.properties.xmax, this.properties.ymax, this.properties.zmax];
    this.gl.uniform3fv(this.program.uniforms["uBBMin"], new Float32Array(bbmin));
    this.gl.uniform3fv(this.program.uniforms["uBBMax"], new Float32Array(bbmax));
    this.gl.uniform3fv(this.program.uniforms["uResolution"], new Float32Array(this.resolution));

    this.gl.uniform1f(this.program.uniforms["uDensityFactor"], this.properties.density);
    // brightness and contrast
    this.gl.uniform1f(this.program.uniforms["uBrightness"], this.properties.brightness);
    this.gl.uniform1f(this.program.uniforms["uContrast"], this.properties.contrast);
    this.gl.uniform1f(this.program.uniforms["uPower"], this.properties.power);

    this.gl.uniform1f(this.program.uniforms["uIsoValue"], this.properties.isovalue);
    var colour = new Colour(this.properties.colour);
    colour.alpha = this.properties.isoalpha;
    this.gl.uniform4fv(this.program.uniforms["uIsoColour"], colour.rgbaGL());
    this.gl.uniform1f(this.program.uniforms["uIsoSmooth"], this.properties.isosmooth);
    this.gl.uniform1i(this.program.uniforms["uIsoWalls"], this.properties.isowalls);

    //Clip Plane
    //this.gl.uniform4fv(this.program.uniforms["uClipPlane"], new Float32Array([0, 1, 0, 7]));
    //this.gl.uniform3fv(this.program.uniforms["uScaling"], new Float32Array(this.scaling));
    //this.gl.uniform3fv(this.program.uniforms["uScaling"], new Float32Array([1,1,1]));

    //Draw two triangles
    this.webgl.initDraw2d();
    //this.gl.enableVertexAttribArray(this.program.attributes["aVertexPosition"]);
    //this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.webgl.vertexPositionBuffer);
    //this.gl.vertexAttribPointer(this.program.attributes["aVertexPosition"], this.webgl.vertexPositionBuffer.itemSize, this.gl.FLOAT, false, 0, 0);
    //this.webgl.setMatrices();

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.webgl.vertexPositionBuffer.numItems);

  } else {
    //Always draw axis even if turned off to show interaction
    if (!this.properties.axes) this.drawAxis(1.0);
    //Bounding box
    this.drawBox(1.0);
  }

  //this.timeAction("Render", this.time);

  if (this.properties.axes) {
    this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
    this.camera();
    this.drawAxis(0.2);
  }

  if (this.properties.border) {
    //Bounding box
    this.camera();
    this.drawBox(0.2);
  }

  //Running speed test?
  if (testmode) {
    frames++;
    $('status').innerHTML = "Speed test: frame " + frames;
    if (frames == 5) {
      var elapsed = new Date().getTime() - testtime;
      console.log("5 frames in " + (elapsed / 1000) + " seconds");
      //Reduce quality for slower device
      if (elapsed > 1000) {
        this.properties.samples = Math.floor(this.properties.samples * 1000 / elapsed);
        if (this.properties.samples < 32) this.properties.samples = 32;
        $('status').innerHTML = "5 frames in " + (elapsed / 1000) + " seconds, Reduced quality to " + this.properties.samples;
        //Hide info window in 2 sec
        setTimeout(function() {info.hide()}, 2000);
      } else {
        info.hide();
      }
    } else {
      this.draw(true, true);
    }
  }
}

Volume.prototype.camera = function() {
  //Apply translation to origin, any rotation and scaling
  this.webgl.modelView.identity()
  this.webgl.modelView.translate(this.translate)
  // Adjust centre of rotation, default is same as focal point so this does nothing...
  adjust = [-(this.focus[0] - this.centre[0]), -(this.focus[1] - this.centre[1]), -(this.focus[2] - this.centre[2])];
  this.webgl.modelView.translate(adjust);

  // rotate model 
  var rotmat = quat4.toMat4(this.rotate);
  this.webgl.modelView.mult(rotmat);
  //this.webgl.modelView.mult(this.rotate);

  // Adjust back for rotation centre
  adjust = [this.focus[0] - this.centre[0], this.focus[1] - this.centre[1], this.focus[2] - this.centre[2]];
  this.webgl.modelView.translate(adjust);

  // Translate back by centre of model to align eye with model centre
  this.webgl.modelView.translate([-this.focus[0], -this.focus[1], -this.focus[2] * this.orientation]);

  //Perspective matrix (not required for volume render pass)
  this.webgl.setPerspective(this.fov, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 100.0);
}

Volume.prototype.drawAxis = function(alpha) {
  this.webgl.use(this.lineprogram);
  this.gl.uniform1f(this.lineprogram.uniforms["uAlpha"], alpha);
  this.gl.uniform4fv(this.lineprogram.uniforms["uColour"], new Float32Array([1.0, 1.0, 1.0, 0.0]));

  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.linePositionBuffer);
  this.gl.enableVertexAttribArray(this.lineprogram.attributes["aVertexPosition"]);
  this.gl.vertexAttribPointer(this.lineprogram.attributes["aVertexPosition"], this.linePositionBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.lineColourBuffer);
  this.gl.enableVertexAttribArray(this.lineprogram.attributes["aVertexColour"]);
  this.gl.vertexAttribPointer(this.lineprogram.attributes["aVertexColour"], this.lineColourBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

  //Axis position, default centre, use slicer positions if available
  var pos = [0.5/this.scaling[0], 0.5/this.scaling[1], 0.5/this.scaling[2]];
  if (this.slicer) {
    pos = [this.slicer.slices[0]/this.scaling[0], 
           this.slicer.slices[1]/this.scaling[1],
           this.slicer.slices[2]/this.scaling[2]];
  }
  this.webgl.modelView.translate(pos);
  this.webgl.setMatrices();
  this.gl.drawArrays(this.gl.LINES, 0, this.linePositionBuffer.numItems);
  this.webgl.modelView.translate([-pos[0], -pos[1], -pos[2]]);
}

Volume.prototype.drawBox = function(alpha) {
  this.webgl.use(this.lineprogram);
  this.gl.uniform1f(this.lineprogram.uniforms["uAlpha"], alpha);
  this.gl.uniform4fv(this.lineprogram.uniforms["uColour"], this.borderColour.rgbaGL());

  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.boxPositionBuffer);
  this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.boxIndexBuffer);
  this.gl.enableVertexAttribArray(this.lineprogram.attributes["aVertexPosition"]);
  this.gl.vertexAttribPointer(this.lineprogram.attributes["aVertexPosition"], this.boxPositionBuffer.itemSize, this.gl.FLOAT, false, 0, 0);
    this.gl.vertexAttribPointer(this.lineprogram.attributes["aVertexColour"], 4, this.gl.UNSIGNED_BYTE, true, 0, 0);

    //this.webgl.modelView.scale(this.scaling);  //Apply scaling
    this.webgl.modelView.scale([1.0/this.scaling[0], 1.0/this.scaling[1], 1.0/this.scaling[2]]);  //Invert scaling
  this.webgl.setMatrices();
  this.gl.drawElements(this.gl.LINES, this.boxIndexBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);
}

Volume.prototype.timeAction = function(action, start) {
  if (!window.requestAnimationFrame) return;
  var timer = start || new Date().getTime();
  function logTime() {
    var elapsed = new Date().getTime() - timer;
    if (elapsed < 50) 
      window.requestAnimationFrame(logTime); //Not enough time, assume triggered too early, try again
    else {
      console.log(action + " took: " + (elapsed / 1000) + " seconds");
      /*if (elapsed > 200 && this.quality > 32) {
        this.quality = Math.floor(this.quality * 0.5);
        OK.debug("Reducing quality to " + this.quality + " samples");
        this.draw();
      } else if (elapsed < 100 && this.quality < 512 && this.quality >= 128) {
        this.quality = this.quality * 2;
        OK.debug("Increasing quality to " + this.quality + " samples");
        this.draw();
      }*/
    }
  }
  window.requestAnimationFrame(logTime);
}

Volume.prototype.rotateX = function(deg) {
  this.rotation(deg, [1,0,0]);
}

Volume.prototype.rotateY = function(deg) {
  this.rotation(deg, [0,1,0]);
}

Volume.prototype.rotateZ = function(deg) {
  this.rotation(deg, [0,0,1]);
}

Volume.prototype.rotation = function(deg, axis) {
  //Quaterion rotate
  var arad = deg * Math.PI / 180.0;
  var rotation = quat4.fromAngleAxis(arad, axis);
  rotation = quat4.normalize(rotation);
  this.rotate = quat4.multiply(rotation, this.rotate);
}

Volume.prototype.zoom = function(factor) {
  this.translate[2] += factor * this.modelsize;
}

Volume.prototype.zoomClip = function(factor) {
  //var clip = parseFloat($("nearclip").value) - factor;
  //$("nearclip").value = clip;
  this.draw();
  //OK.debug(clip + " " + $("nearclip").value);
}

Volume.prototype.click = function(event, mouse) {
  this.rotating = false;
  this.draw();
  return false;
}

Volume.prototype.move = function(event, mouse) {
  this.rotating = false;
  if (!mouse.isdown) return true;

  //Switch buttons for translate/rotate
  var button = mouse.button;

  switch (button)
  {
    case 0:
      this.rotateY(mouse.deltaX/5.0);
      this.rotateX(mouse.deltaY/5.0);
      this.rotating = true;
      break;
    case 1:
      this.rotateZ(Math.sqrt(mouse.deltaX*mouse.deltaX + mouse.deltaY*mouse.deltaY)/5.0);
      this.rotating = true;
      break;
    case 2:
      var adjust = this.modelsize / 1000;   //1/1000th of size
      this.translate[0] += mouse.deltaX * adjust;
      this.translate[1] -= mouse.deltaY * adjust;
      break;
  }

  this.draw(true);
  return false;
}

Volume.prototype.wheel = function(event, mouse) {
  if (event.shiftKey) {
    var factor = event.spin * 0.01;
    this.zoomClip(factor);
  } else {
    var factor = event.spin * 0.05;
    this.zoom(factor);
  }
  this.delayedRender(250); //Delayed high quality render

  return false; //Prevent default
}

Volume.prototype.pinch = function(event, mouse) {

  var zoom = (event.distance * 0.0001);
  console.log(' --> ' + zoom);
  this.zoom(zoom);
  this.delayedRender(250); //Delayed high quality render
}

//Delayed high quality render
Volume.prototype.delayedRender = function(time, skipImm) {
  if (!skipImm) this.draw(true); //Draw immediately in low quality
  //Set timer to draw the final render
  if (this.delaytimer) clearTimeout(this.delaytimer);
  var that = this;
  this.delaytimer = setTimeout(function() {that.draw();}, time);
}

Volume.prototype.applyBackground = function(bg) {
  if (!bg) return;
  this.background = new Colour(bg);
  var hsv = this.background.HSV();
  this.borderColour = hsv.V > 50 ? new Colour(0xff444444) : new Colour(0xffbbbbbb);

  //document.body.style.background = bg;

    //Set canvas background
    if (this.properties.usecolourmap)
      this.canvas.style.backgroundColor = bg;
    else
      this.canvas.style.backgroundColor = "black";


}
