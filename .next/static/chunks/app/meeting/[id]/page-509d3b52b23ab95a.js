(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48],{8971:function(e,t,n){Promise.resolve().then(n.bind(n,2193)),Promise.resolve().then(n.bind(n,8999)),Promise.resolve().then(n.bind(n,747)),Promise.resolve().then(n.bind(n,1934)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,9464))},2193:function(e,t,n){"use strict";n.r(t),n.d(t,{ClientClerkProvider:function(){return d}});var r=n(2618),i=n(7907),s=n(2265),o=n(9854);let a="undefined"!=typeof window?s.useLayoutEffect:s.useEffect;var c=n(9079);let u=e=>({...e,frontendApi:e.frontendApi||c.env.NEXT_PUBLIC_CLERK_FRONTEND_API||"",publishableKey:e.publishableKey||"pk_test_bW9kZXJuLXNpbGt3b3JtLTEuY2xlcmsuYWNjb3VudHMuZGV2JA",clerkJSUrl:e.clerkJSUrl||c.env.NEXT_PUBLIC_CLERK_JS,clerkJSVersion:e.clerkJSVersion||c.env.NEXT_PUBLIC_CLERK_JS_VERSION,proxyUrl:e.proxyUrl||c.env.NEXT_PUBLIC_CLERK_PROXY_URL||"",domain:e.domain||c.env.NEXT_PUBLIC_CLERK_DOMAIN||"",isSatellite:e.isSatellite||"true"===c.env.NEXT_PUBLIC_CLERK_IS_SATELLITE,signInUrl:e.signInUrl||c.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL||"",signUpUrl:e.signUpUrl||c.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL||"",afterSignInUrl:e.afterSignInUrl||c.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL||"",afterSignUpUrl:e.afterSignUpUrl||c.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL||"",sdkMetadata:{name:"@clerk/nextjs",version:"4.31.2"}}),l=()=>{let{push:e}=(0,i.useRouter)(),[t,n]=(0,s.useTransition)(),r=(0,s.useRef)(),o=(0,s.useRef)([]);return r.current||(r.current=(t,r)=>new Promise(i=>{o.current.push(i),n(()=>{e(t,r)})})),(0,s.useEffect)(()=>{var e;t||((null==(e=null==o?void 0:o.current)?void 0:e.length)&&o.current.forEach(e=>e()),o.current=[])},[t]),r.current},d=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:t=!0}=e,n=(0,i.useRouter)(),c=l();a(()=>{window.__unstable__onBeforeSetActive=()=>{t&&(n.refresh(),n.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{n.refresh()}},[]);let d=u({...e,navigate:c});return s.createElement(o.f,{options:d},s.createElement(r.El,{...d}))}},9854:function(e,t,n){"use strict";n.d(t,{f:function(){return o},k:function(){return s}});var r=n(2265);let i=r.createContext(void 0);i.displayName="ClerkNextOptionsCtx";let s=()=>r.useContext(i).value,o=e=>{let{children:t,options:n}=e;return r.createElement(i.Provider,{value:{value:n}},t)}},8999:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthenticateWithRedirectCallback:function(){return r.vn},ClerkLoaded:function(){return r.a7},ClerkLoading:function(){return r.qI},MultisessionAppSupport:function(){return r.KM},Protect:function(){return r.Cv},RedirectToCreateOrganization:function(){return r.gM},RedirectToOrganizationProfile:function(){return r.yB},RedirectToSignIn:function(){return r.N1},RedirectToSignUp:function(){return r.C2},RedirectToUserProfile:function(){return r.sO},SignedIn:function(){return r.CH},SignedOut:function(){return r.tj}});var r=n(2618)},747:function(e,t,n){"use strict";n.r(t),n.d(t,{EmailLinkErrorCode:function(){return r._L},MagicLinkErrorCode:function(){return r.X1},WithClerk:function(){return r._E},WithSession:function(){return r.CJ},WithUser:function(){return r.Gi},isClerkAPIResponseError:function(){return r.kD},isEmailLinkError:function(){return r.G1},isKnownError:function(){return r.sZ},isMagicLinkError:function(){return r.V9},isMetamaskError:function(){return r.ZC},useAuth:function(){return r.aC},useClerk:function(){return r.ll},useEmailLink:function(){return r.E2},useMagicLink:function(){return r.jS},useOrganization:function(){return r.o8},useOrganizationList:function(){return r.eW},useOrganizations:function(){return r.qi},useSession:function(){return r.kP},useSessionList:function(){return r.xo},useSignIn:function(){return r.zq},useSignUp:function(){return r.QS},useUser:function(){return r.aF},withClerk:function(){return r.r0},withSession:function(){return r.NA},withUser:function(){return r.ns}});var r=n(2618)},1934:function(e,t,n){"use strict";n.r(t),n.d(t,{CreateOrganization:function(){return r.Gp},GoogleOneTap:function(){return r.Kb},OrganizationList:function(){return r.Bg},OrganizationProfile:function(){return r.A},OrganizationSwitcher:function(){return r.Li},SignIn:function(){return o},SignInButton:function(){return r.$d},SignInWithMetamaskButton:function(){return r.qu},SignOutButton:function(){return r.AM},SignUp:function(){return a},SignUpButton:function(){return r.gX},UserButton:function(){return r.l8},UserProfile:function(){return r.Iw}});var r=n(2618),i=n(2265),s=n(9854);let o=e=>{let{signInUrl:t}=(0,s.k)();return t?i.createElement(r.cL,{routing:"path",path:t,...e}):i.createElement(r.cL,{...e})},a=e=>{let{signUpUrl:t}=(0,s.k)();return t?i.createElement(r.Mo,{routing:"path",path:t,...e}):i.createElement(r.Mo,{...e})}},7907:function(e,t,n){"use strict";var r=n(5313);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},9464:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(7437),i=n(4256),s=n(2265);function o(){let{useMicrophoneState:e}=(0,i.dvl)(),{isEnabled:t,mediaStream:n}=e(),[o,a]=(0,s.useState)(0);return((0,s.useEffect)(()=>{if(!t||!n)return;let e=(0,i.stH)(n,e=>{let{audioLevel:t}=e;return a(t)},{detectionFrequencyInMs:80,destroyStreamOnStop:!1});return()=>{e().catch(console.error)}},[t,n]),t)?(0,r.jsxs)("div",{className:"flex w-72 items-center gap-3 rounded-md bg-slate-900 p-4",children:[(0,r.jsx)(i.JO$,{icon:"mic"}),(0,r.jsx)("div",{className:"h-1.5 flex-1 rounded-md bg-white",children:(0,r.jsx)("div",{className:"h-full w-full origin-left bg-blue-500",style:{transform:"scaleX(".concat(o/100,")")}})})]}):null}var a=n(8008);function c(){let e=(0,i.W7t)();if(!e)throw Error("useStreamCall must be used within a StreamCall component with a valid call prop.");return e}var u=n(7461);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,u.Z)("BetweenVerticalEnd",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]),d=(0,u.Z)("BetweenHorizontalEnd",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]),f=(0,u.Z)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);var h=n(7907);function x(){let e=c(),{useLocalParticipant:t}=(0,i.dvl)(),n=t();return n&&e.state.createdBy&&n.userId===e.state.createdBy.id?(0,r.jsx)("button",{onClick:e.endCall,className:"mx-auto block font-medium text-red-500 hover:underline",children:"End call for everyone"}):null}function m(){let[e,t]=(0,s.useState)("speaker-vert"),n=c(),o=(0,h.useRouter)();return(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsx)(p,{layout:e,setLayout:t}),(0,r.jsx)(g,{layout:e}),(0,r.jsx)(i.PHQ,{onLeave:()=>o.push("/meeting/".concat(n.id,"/left"))}),(0,r.jsx)(x,{})]})}function p(e){let{layout:t,setLayout:n}=e;return(0,r.jsxs)("div",{className:"mx-auto w-fit space-x-6",children:[(0,r.jsx)("button",{onClick:()=>n("speaker-vert"),children:(0,r.jsx)(l,{className:"speaker-vert"!==t?"text-gray-400":""})}),(0,r.jsx)("button",{onClick:()=>n("speaker-horiz"),children:(0,r.jsx)(d,{className:"speaker-horiz"!==t?"text-gray-400":""})}),(0,r.jsx)("button",{onClick:()=>n("grid"),children:(0,r.jsx)(f,{className:"grid"!==t?"text-gray-400":""})})]})}function g(e){let{layout:t}=e;return"speaker-vert"===t?(0,r.jsx)(i.gy1,{}):"speaker-horiz"===t?(0,r.jsx)(i.gy1,{participantsBarPosition:"right"}):"grid"===t?(0,r.jsx)(i.ZXw,{}):null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let v=(0,u.Z)("Webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]),j=(0,u.Z)("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);function y(){return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)(v,{size:40}),(0,r.jsx)(j,{size:40})]}),(0,r.jsx)("p",{className:"text-center",children:"Please allow access to your microphone and camera to join the call"})]})}var N=n(2618),k=n(8994),_=n(8792);function b(){let{recordings:e,recordingsLoading:t}=function(e){let{user:t}=(0,N.aF)(),[n,r]=(0,s.useState)([]),[i,o]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{(async function(){if(o(!0),!(null==t?void 0:t.id))return;let{recordings:n}=await e.queryRecordings();r(n),o(!1)})()},[e,null==t?void 0:t.id]),{recordings:n,recordingsLoading:i}}(c()),{user:n,isLoaded:i}=(0,N.aF)();return i&&!n?(0,r.jsx)("p",{className:"text-center",children:"You must be logged in to view recordings."}):t?(0,r.jsx)(k.Z,{className:"mx-auto animate-spin"}):(0,r.jsxs)("div",{className:"space-y-3 text-center",children:[0===e.length&&(0,r.jsx)("p",{children:"No recordings for this meeting."}),(0,r.jsx)("ul",{className:"list-inside list-disc",children:e.sort((e,t)=>t.end_time.localeCompare(e.end_time)).map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(_.default,{href:e.url,target:"_blank",className:"hover:underline",children:new Date(e.end_time).toLocaleString()})},e.url))}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Note: It can take up to 1 minute before new recordings show up.",(0,r.jsx)("br",{}),"You can refresh the page to see if new recordings are available."]})]})}function E(e){let{id:t}=e,{user:n,isLoaded:o}=(0,N.aF)(),{call:a,callLoading:c}=function(e){let t=(0,i.b12)(),[n,r]=(0,s.useState)(),[o,a]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{(async function(){if(a(!0),!t)return;let{calls:n}=await t.queryCalls({filter_conditions:{id:e}});if(n.length>0){let e=n[0];await e.get(),r(e)}a(!1)})()},[t,e]),{call:n,callLoading:o}}(t);return!o||c?(0,r.jsx)(k.Z,{className:"mx-auto animate-spin"}):a?"private-meeting"!==a.type||n&&a.state.members.find(e=>e.user.id===n.id)?(0,r.jsx)(i.N_D,{call:a,children:(0,r.jsx)(i.c3T,{children:(0,r.jsx)(C,{})})}):(0,r.jsx)("p",{className:"text-center font-bold",children:"You are not allowed to view this meeting"}):(0,r.jsx)("p",{className:"text-center font-bold",children:"Call not found"})}function C(){let e=c(),{useCallEndedAt:t,useCallStartsAt:n}=(0,i.dvl)(),o=t(),a=n(),[u,l]=(0,s.useState)(!1);async function d(){e.join(),l(!0)}let f=a&&new Date(a)>new Date;if(o)return(0,r.jsx)(U,{});if(f)return(0,r.jsx)(L,{});let h=e.state.custom.description;return(0,r.jsxs)("div",{className:"space-y-6",children:[h&&(0,r.jsxs)("p",{className:"text-center",children:["Meeting description: ",(0,r.jsx)("span",{className:"font-bold",children:h})]}),u?(0,r.jsx)(w,{}):(0,r.jsx)(S,{onSetupComplete:d})]})}function S(e){let{onSetupComplete:t}=e,n=c(),{useMicrophoneState:u,useCameraState:l}=(0,i.dvl)(),d=u(),f=l(),[h,x]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{h?(n.camera.disable(),n.microphone.disable()):(n.camera.enable(),n.microphone.enable())},[h,n]),d.hasBrowserPermission&&f.hasBrowserPermission)?(0,r.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,r.jsx)("h1",{className:"text-center text-2xl font-bold",children:"Setup"}),(0,r.jsx)(i.FoN,{}),(0,r.jsxs)("div",{className:"flex h-16 items-center gap-3",children:[(0,r.jsx)(o,{}),(0,r.jsx)(i.Avh,{})]}),(0,r.jsxs)("label",{className:"flex items-center gap-2 font-medium",children:[(0,r.jsx)("input",{type:"checkbox",checked:h,onChange:e=>x(e.target.checked)}),"Join with mic and camera off"]}),(0,r.jsx)(a.Z,{onClick:t,children:"Join meeting"})]}):(0,r.jsx)(y,{})}function w(){let{useCallCallingState:e}=(0,i.dvl)();return e()!==i.Uq0.JOINED?(0,r.jsx)(k.Z,{className:"mx-auto animate-spin"}):(0,r.jsx)(m,{})}function L(){var e;let t=c();return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[(0,r.jsxs)("p",{children:["This meeting has not started yet. It will start at"," ",(0,r.jsx)("span",{className:"font-bold",children:null===(e=t.state.startsAt)||void 0===e?void 0:e.toLocaleString()})]}),t.state.custom.description&&(0,r.jsxs)("p",{children:["Description:"," ",(0,r.jsx)("span",{className:"font-bold",children:t.state.custom.description})]}),(0,r.jsx)(_.default,{href:"/",className:a.P,children:"Go home"})]})}function U(){return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[(0,r.jsx)("p",{className:"font-bold",children:"This meeting has ended"}),(0,r.jsx)(_.default,{href:"/",className:a.P,children:"Go home"}),(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsx)("h2",{className:"text-center text-xl font-bold",children:"Recordings"}),(0,r.jsx)(b,{})]})]})}},8008:function(e,t,n){"use strict";n.d(t,{P:function(){return a},Z:function(){return o}});var r=n(7437),i=n(3167),s=n(1367);function o(e){let{className:t,...n}=e;return(0,r.jsx)("button",{className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,i.Z)(t))}(a,t),...n})}let a="flex items-center justify-center gap-2 rounded-full bg-blue-500 px-3 py-2 font-semibold text-white transition-colors hover:bg-blue-600 active:bg-blue-600 disabled:bg-gray-200"}},function(e){e.O(0,[463,674,250,558,769,971,69,744],function(){return e(e.s=8971)}),_N_E=e.O()}]);