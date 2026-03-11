import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'Search Engine Optimization',
            platform: 'PFTF',
            link: '',
            date: 'Issued Mar 2023 · No Expiration Date',
            logo: '/assets/pftf.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'E-commerce Specialization',
            platform: 'E-Hunar',
            link: '',
            date: 'Issued Oct 2023 · No Expiration Date',
            logo: '/assets/ehunar.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Meta Advertising',
            platform: 'Meta Blueprint',
            link: '',
            date: 'Issued Nov 2024 · No Expiration Date',
            logo: '/assets/metablueprint.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications