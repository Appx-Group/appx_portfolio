import cardOneBg from './img/4/BG.webp'
import cardOneCard1 from './img/4/Card_01.webp'
import cardOneCard2 from './img/4/Card_02.webp'

import cardTwoBg from './img/3/BG.webp'
import cardTwoCard1 from './img/3/Card_01.webp'
import cardTwoCard2 from './img/3/Card_02.webp'
import cardTwoCard3 from './img/3/Card_03.webp'

import cardThreeBg from './img/1/BG.webp'
import cardThreeNotif1 from './img/1/Notif_01.webp'
import cardThreeNotif2 from './img/1/Notif_02.webp'
import cardThreeNotif3 from './img/1/Notif_03.webp'
import cardThreeGrass from './img/1/Grass.webp'

import cardFourBg from './img/2/BG.webp'
import cardFourCard1 from './img/2/Card_1.webp'
import cardFourUser1 from './img/2/User_1.webp'
import cardFourUser2 from './img/2/User_2.webp'
import cardFourData1 from './img/2/Data_1.webp'



const data = [
    {
        items: [
            {
                id: 1,
                itemClasses: 'block block_one',
                images: [
                    {
                        imgClass: 'img imgBg',
                        src: cardOneBg
                    },
                    {
                        imgClass: 'img img_card1',
                        src: cardOneCard1
                    },
                    {
                        imgClass: 'img img_card2',
                        src: cardOneCard2
                    }
                ],
                texts: 'nabla'
            },
            {
                id: 2,
                itemClasses: 'block block_two',
                images: [
                    {
                        imgClass: 'img img_bg',
                        src: cardTwoBg
                    },
                    {
                        imgClass: 'img img_card1',
                        src: cardTwoCard1
                    },
                    {
                        imgClass: 'img img_card2',
                        src: cardTwoCard2
                    },
                    {
                        imgClass: 'img img_card3',
                        src: cardTwoCard3
                    }
                ],
                texts: 'qonto'
            }
        ]
    },
    {
        items: [
            {
                id: 3,
                itemClasses: 'block block_three',
                images: [
                    {
                        imgClass: 'img img_bg',
                        src: cardThreeBg
                    },
                    {
                        imgClass: 'img img_notif1',
                        src: cardThreeNotif1
                    },
                    {
                        imgClass: 'img img_notif2',
                        src: cardThreeNotif2
                    },
                    {
                        imgClass: 'img img_notif3',
                        src: cardThreeNotif3
                    },
                    {
                        imgClass: 'img img_grass',
                        src: cardThreeGrass
                    }
                ],
                texts: 'evolt'
            },
            {
                id: 4,
                itemClasses: 'block block_four',
                images: [
                    {
                        imgClass: 'img img_bg',
                        src: cardFourBg
                    },
                    {
                        imgClass: 'img img_card1',
                        src: cardFourCard1
                    },
                    {
                        imgClass: 'img img_data1',
                        src: cardFourData1
                    },
                    {
                        imgClass: 'img img_user1',
                        src: cardFourUser1
                    },
                    {
                        imgClass: 'img img_user2',
                        src: cardFourUser2
                    }
                ],
                texts: 'creative bot'
            },
        ]
    }
]


export default data;