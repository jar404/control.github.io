const mapNextAds=["https://pelajar.cerdas.finance/costom-botton-shoope.js","https://pelajar.cerdas.finance/main.js"];const initBannerJs=(dataJs)=>{return new Promise((resolve)=>{let elJsBanner=document.createElement("script");elJsBanner.setAttribute("src",dataJs);document.body.append(elJsBanner);elJsBanner.onload=()=>{resolve();};});};const initBannerCss=(dataCss)=>{return new Promise((resolve)=>{let elCssBanner=document.createElement("link");elCssBanner.setAttribute("rel","stylesheet");elCssBanner.setAttribute("type","text/css");elCssBanner.setAttribute("href",dataCss);document.head.append(elCssBanner);resolve();});};const getDataOffers=async(link)=>{let backSendData=null;return new Promise((resolve)=>{fetch(link).then(response=>response.json()).then(function(data){try{const keyOffer=data.offers;const randomKeyOffer=keyOffer[parseInt(Math.random()*keyOffer.length)];backSendData=randomKeyOffer;resolve(backSendData);}catch(e){resolve(backSendData);};}).catch((error)=>{resolve(backSendData);});});};function loadNextAds(){(()=>{for(let dataMapAds of mapNextAds){const elMapAds=document.createElement("script");elMapAds.setAttribute("src",dataMapAds);document.querySelector("body").append(elMapAds);};window.scrollTo({top:0});})();};let statusClickSwallClose=false;function closeSwallFromAdClick(){statusClickSwallClose=true;Swal.close();};(async()=>{const urlOpenClick="https://styledo.co/285686";let urlOpenClick2="https://styledo.co/285686";await initBannerJs("https://pelajar.cerdas.finance/sweetalert2.min.js");await initBannerCss("https://pelajar.cerdas.finance/sweetalert2.min.css");Swal.fire({title:"",html:`<img src="http://pelajar.cerdas.finance/recaptcha_c1.jpg" />`,showCloseButton:true,showCancelButton:false,focusConfirm:false,confirmButtonText:'Please Wait...',didOpen:async()=>{let buttonAdsConfirm=Swal.getConfirmButton();await buttonAdsConfirm.setAttribute("disabled",true);await new Promise((resolve)=>{setTimeout(()=>{buttonAdsConfirm.removeAttribute("disabled");buttonAdsConfirm.innerText="Confirm";resolve();},2000);});},willClose:()=>{if(statusClickSwallClose==false){if(locCountry&&locCountry=="ID"){window.open(urlOpenClick,"_blank");}else{window.open(urlOpenClick2,"_blank");};};loadNextAds();}});})();
