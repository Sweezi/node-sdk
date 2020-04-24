"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,e=(t=require("axios"))&&"object"==typeof t&&"default"in t?t.default:t;const r="https://my.sweezi.pt/api";let s=null,a=null;const i=(t,e,r=!1)=>r?{headers:{authorization:"Bearer "+t,"content-type":"multipart/form-data"}}:e?{headers:{authorization:"Bearer "+t,"selected-page":e}}:{headers:{authorization:"Bearer "+t}},c=async(t,i)=>{try{const c=await e.post(r+"/authentication/request-token",{clientId:t,secret:i});s=c.data.token,a=c.data.expireDate}catch(t){return t}},n=()=>{const t=Date.now();return t>a||t+5e3>a};exports.Address=class{constructor(t,e,r,s,a,i){this.city=t,this.countryId=e,this.postalCode=r,this.state=s,this.street=a,this.street2=i}},exports.Item=class{constructor(t,e,r,s,a,i){this.description=t,this.height=e,this.length=r,this.quantity=s,this.weight=a,this.width=i}},exports.Order=class{constructor(t,e,r,s,a,i){this.contactName=t,this.email=e,this.items=i,this.receiverAddress=s,this.serviceId=r,this.shipperAddress=a}},exports.default=class{constructor(t,e){this.clientId=t,this.clientSecret=e}async getAllOrders(t,a="",o="id",l="asc",d=0,h=20){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const c=await e.get(((t,e,s,a,i,c)=>{let n=`?_start=${i}&_limit=${c}`;return n+=e?"&_q="+e:"",n+=s?`&_sort=${s}&_order=${a}`:"",`${r}/stores/${t}/orders${n}`})(t,a,o,l,d,h),i(s)),{data:n}=c;return n}catch(t){return t}}async getOrder(t,a){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const c=await e.get(((t,e)=>`${r}/stores/${t}/orders/${e}`)(t,a),i(s)),{data:n}=c;return n}catch(t){return t}}async createOrder(t,a){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const c=await e.post((t=>`${r}/stores/${t}/orders`)(t),a,i(s)),{data:n}=c;return n}catch(t){return t}}async updateOrder(t,a,o){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const c=await e.put(((t,e)=>`${r}/stores/${t}/orders/${e}`)(t,a),o,i(s)),{data:n}=c;return n}catch(t){return t}}async getCountries(){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const t=await e.get(r+"/countries",i(s)),{data:a}=t;return a}catch(t){return t}}async getServices(t){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const a=await e.get((t=>`${r}/plans/${t}/services`)(t),i(s)),{data:c}=a;return c}catch(t){return t}}async getMyStores(){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const t=await e.get(r+"/stores",i(s)),{data:a}=t;return a}catch(t){return t}}async getMyStoreAddress(t){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const a=await e.get((t=>`${r}/stores/${t}`)(t),i(s)),{data:c}=a;return c.address}catch(t){return t}}async getMySweeziOrders(t,a){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const c=await e.get(((t,e)=>`${r}/stores/${t}/sweezi-orders${e?`?_corder=${e}&_sort=id`:""}`)(t,a),i(s)),{data:n}=c;return n}catch(t){return t}}async getMySweeziOrderTracking(t,a){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const c=await e.get(((t,e)=>`${r}/stores/${t}/orders/${e}/tracking`)(t,a),i(s)),{data:n}=c;return n}catch(t){return t}}async getTracking(t){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const s=await e.get((t=>`${r}/tracking/${t}`)(t)),{data:a}=s;return a}catch(t){return t}}async getSweeziSpots(t,a){(null===s||n())&&await c(this.clientId,this.clientSecret);try{const c=await e.get(((t,e)=>`${r}/pick-me/${t}/${e}`)(t,a),i(s)),{data:n}=c;return n}catch(t){return t}}};
