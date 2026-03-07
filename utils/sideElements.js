import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/MBA-17',
        'instagram': 'https://www.instagram.com/sher_rajputofficial/',
        'twitter': 'https://twitter.com/#',
        'linkedin': 'https://www.linkedin.com/in/sherazakram17/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'sherazrajput68@gmail.com',
        onClick: () => openLink('mailto:sherazrajput68@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements