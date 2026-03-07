import { openLink } from "./methods"

const outer = {
    title1:  `Hey, I'm`,
    title2: 'Sheraz Akram,',
    decrypTexts: [
        'A Shopify Developer',
        'A Front-End Developer',
        'A Ecommerce Expert',
        'A Meta Advertiser',
        'A WordPress Developer',
        'A Entrepreneur',
    ],
    desciption: `A dedicated and disciplined Shopify Developer who love to create things for internet, having more than 1 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:sherazrajput68@gmail.com?subject=Hello')
    }
}

export default outer
