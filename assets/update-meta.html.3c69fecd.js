import{_ as o,o as s,c as u,b as t,w as n,a as e,d as l,r as i}from"./app.92c486f4.js";const p={},b=e("h1",{id:"admin-update-meta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-update-meta","aria-hidden":"true"},"#"),l(),e("code",null,"admin/update-meta")],-1),y=e("p",null,"Credential required.",-1),c=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),l(" Parameters")],-1),g=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),l(" Response")],-1),d=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),l(" Errors")],-1);function m(h,S){const r=i("MkSchemaViewer"),a=i("ClientOnly");return s(),u("div",null,[b,y,c,t(a,null,{default:n(()=>[t(r,{schema:{type:"object",properties:{disableRegistration:{type:"boolean",nullable:!0},disableLocalTimeline:{type:"boolean",nullable:!0},disableGlobalTimeline:{type:"boolean",nullable:!0},useStarForReactionFallback:{type:"boolean",nullable:!0},pinnedUsers:{type:"array",nullable:!0,items:{type:"string"}},hiddenTags:{type:"array",nullable:!0,items:{type:"string"}},blockedHosts:{type:"array",nullable:!0,items:{type:"string"}},themeColor:{type:"string",nullable:!0,pattern:"^#[0-9a-fA-F]{6}$"},mascotImageUrl:{type:"string",nullable:!0},bannerUrl:{type:"string",nullable:!0},errorImageUrl:{type:"string",nullable:!0},iconUrl:{type:"string",nullable:!0},backgroundImageUrl:{type:"string",nullable:!0},logoImageUrl:{type:"string",nullable:!0},name:{type:"string",nullable:!0},description:{type:"string",nullable:!0},defaultLightTheme:{type:"string",nullable:!0},defaultDarkTheme:{type:"string",nullable:!0},localDriveCapacityMb:{type:"integer"},remoteDriveCapacityMb:{type:"integer"},cacheRemoteFiles:{type:"boolean"},emailRequiredForSignup:{type:"boolean"},enableHcaptcha:{type:"boolean"},hcaptchaSiteKey:{type:"string",nullable:!0},hcaptchaSecretKey:{type:"string",nullable:!0},enableRecaptcha:{type:"boolean"},recaptchaSiteKey:{type:"string",nullable:!0},recaptchaSecretKey:{type:"string",nullable:!0},sensitiveMediaDetection:{type:"string",enum:["none","all","local","remote"]},sensitiveMediaDetectionSensitivity:{type:"string",enum:["medium","low","high","veryLow","veryHigh"]},setSensitiveFlagAutomatically:{type:"boolean"},enableSensitiveMediaDetectionForVideos:{type:"boolean"},proxyAccountId:{type:"string",format:"misskey:id",nullable:!0},maintainerName:{type:"string",nullable:!0},maintainerEmail:{type:"string",nullable:!0},pinnedPages:{type:"array",items:{type:"string"}},pinnedClipId:{type:"string",format:"misskey:id",nullable:!0},langs:{type:"array",items:{type:"string"}},summalyProxy:{type:"string",nullable:!0},deeplAuthKey:{type:"string",nullable:!0},deeplIsPro:{type:"boolean"},enableTwitterIntegration:{type:"boolean"},twitterConsumerKey:{type:"string",nullable:!0},twitterConsumerSecret:{type:"string",nullable:!0},enableGithubIntegration:{type:"boolean"},githubClientId:{type:"string",nullable:!0},githubClientSecret:{type:"string",nullable:!0},enableDiscordIntegration:{type:"boolean"},discordClientId:{type:"string",nullable:!0},discordClientSecret:{type:"string",nullable:!0},enableEmail:{type:"boolean"},email:{type:"string",nullable:!0},smtpSecure:{type:"boolean"},smtpHost:{type:"string",nullable:!0},smtpPort:{type:"integer",nullable:!0},smtpUser:{type:"string",nullable:!0},smtpPass:{type:"string",nullable:!0},enableServiceWorker:{type:"boolean"},swPublicKey:{type:"string",nullable:!0},swPrivateKey:{type:"string",nullable:!0},tosUrl:{type:"string",nullable:!0},repositoryUrl:{type:"string"},feedbackUrl:{type:"string"},useObjectStorage:{type:"boolean"},objectStorageBaseUrl:{type:"string",nullable:!0},objectStorageBucket:{type:"string",nullable:!0},objectStoragePrefix:{type:"string",nullable:!0},objectStorageEndpoint:{type:"string",nullable:!0},objectStorageRegion:{type:"string",nullable:!0},objectStoragePort:{type:"integer",nullable:!0},objectStorageAccessKey:{type:"string",nullable:!0},objectStorageSecretKey:{type:"string",nullable:!0},objectStorageUseSSL:{type:"boolean"},objectStorageUseProxy:{type:"boolean"},objectStorageSetPublicRead:{type:"boolean"},objectStorageS3ForcePathStyle:{type:"boolean"},enableIpLogging:{type:"boolean"},enableActiveEmailValidation:{type:"boolean"}},required:[]}})]),_:1}),g,t(a,null,{default:n(()=>[t(r,{schema:{}})]),_:1}),d])}var f=o(p,[["render",m],["__file","update-meta.html.vue"]]);export{f as default};