// Meta

import Head from "next/head"

class Meta extends React.Component {
  render () {
    const { meta_title, meta_description, meta_tags, meta_type, meta_url, meta_image, meta_card, meta_handle } = this.props.project
    return (
      <Head>
        <meta name="viewport"                 content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type"        content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible"     content="IE=edge" />
        <meta name="google-site-verification" content="IaRCCW6UPhB03R9kZZwvGT4q4WTTgvnrDZ6dBIO2_sQ" />
        {/* Base */}
        <title>{meta_title}</title>
        <meta name="description"              content={meta_description} />
        <meta name="keywords"                 content={meta_tags}></meta>
        <meta name="application-name"         content={meta_title}/>
        {/* Open Graph */}
        <meta property="og:type"              content={meta_type} />
        <meta property="og:url"               content={meta_url} />
        <meta property="og:title"             content={meta_title} />
        <meta property="og:description"       content={meta_description} />
        <meta property="og:image"             content={meta_image} />
        {/* Twitter */}
        <meta name="twitter:card"             content={meta_card} />
        <meta name="twitter:site"             content={meta_handle} />
        <meta name="twitter:creator"          content={meta_handle} />
        <meta name="twitter:title"            content={meta_title} />
        <meta name="twitter:description"      content={meta_description} />
        <meta name="twitter:image"            content={meta_image} />
        {/* PWA */}
        <meta name="theme-color" content="#FFFFFF"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/webmanifest.json" />
        {/* Icon */}
        <link rel="icon" sizes="196x196" type="image/png" href="/icons/favicon196px196px.png" />
        <link rel="icon" sizes="128x128" type="image/png" href="/icons/favicon128px128px.png" />
        <link rel="icon" sizes="96x96" type="image/png" href="/icons/favicon96px96px.png" />
        <link rel="icon" sizes="32x32" type="image/png" href="/icons/favicon32px32px.png" />
        <link rel="icon" sizes="16x16" type="image/png" href="/icons/favicon16px16px.png" />
        {/* Windows */}
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/icons/mstile144px144px.png" />
        <meta name="msapplication-square70x70logo" content="/icons/mstile70px70px.png" />
        <meta name="msapplication-square150x150logo" content="/icons/mstile150px150px.png" />
        <meta name="msapplication-wide310x150logo" content="/icons/mstile310px150px.png" />
        <meta name="msapplication-square310x310logo" content="/icons/mstile310px310px.png" />
        <meta name="msapplication-config" content="none"/>
        {/* Apple */}
        <link rel="apple-touch-icon" sizes="196x196" href="/icons/apple-touch-icon196px196px.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon152px152px.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon144px144px.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon120px120px.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon114px114px.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon76px76px.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon72px72px.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon60px60px.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon57px57px.png" />
        {/* Apple Splash screens */}
        <link rel="apple-touch-startup-image" href="/icons/iphone1242px2688px.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone1242px2208px.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/phone1125px2436px.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone828px1792px.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone750px1334px.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone640px1136px.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone2688px1242px.png" media="(device-width: 896px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone2208px1242px.png" media="(device-width: 736px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone2436px1125px.png" media="(device-width: 812px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone1792px828px.png" media="(device-width: 896px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone1334px750px.png" media="(device-width: 667px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/iphone1136px640px.png" media="(device-width: 568px) and (device-height: 320px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/ipad2048px2732px.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/ipad1668px2388px.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/ipad1668px2224px.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/ipad1536px2048px.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/ipad2732px2048px.png" media="(device-width: 1366px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/ipad2388px1668px.png" media="(device-width: 1194px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/ipad2224px1668px.png" media="(device-width: 1112px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/ipad2048px1536px.png" media="(device-width: 1024px) and (device-height: 768px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      </Head>
    )
  }
}

export default Meta
