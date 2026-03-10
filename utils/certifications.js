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
            logo: '/assets/pftf-lms-logo.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'E-commerce Specialization',
            platform: 'E-Hunar',
            link: '',
            date: 'Issued Oct 2023 · No Expiration Date',
            logo: '/assets/ehunar-logo.webp',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Meta Advertising',
            platform: 'Meta Blueprint',
            link: '',
            date: 'Issued Aug 2024 · No Expiration Date',
            logo: '/assets/meta certification.webp',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Certified Mobile and Web App Developer',
            platform: 'SMIT | Saylani Mass IT Training',
            link: '',
            date: 'Issued Feb 2019 · No Expiration DateIssued',
            logo: '/assets/smit.png',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: 'Hackathon on creating OLX App using PWA Development',
            platform: 'SMIT | Saylani Mass IT Training',
            link: '',
            date: 'Issued Jul 2018 · No Expiration Date',
            logo: '/assets/smit.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications