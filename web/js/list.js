// 리스트 페이지 데이터
const listTitle = [
    '감천 문화 마을',
    '광안리',
    '다대포',
    '송도 해상 케이블카',
    '청사포(해변열차)'
]

const listInfoLink = [
    './infor.html',
    './infor_gwanganri.html',
    './infor_dadaepo.html',
    './infor_songdo.html',
    './infor_beachTrain.html'
]

// 0 -> 감천문화마을
// 1 -> 광안리
// 3 -> 다대포
// 4 -> 송도 해상 케이블카
// 5 -> 청사포(해변열차)
const listData = [
    {
        id: 0,
        title: listTitle[0],
        foodList: [
            {
                name:"영의루",
                address: "부산 서구 구덕로 203",
                img: './image/gamR_young.jpg',
                content: '중국식 냉면이 인기인 중국요리 전문점입니다. 영의루의 냉면은 쫄깃한 면발과 차가운 국물에 담긴 면의 느낌이 좋지요. 일반 냉면이나 밀면과는 씹는 맛이 다르고 식초가 있어야 육수의 감칠맛이 더해집니다. 고명은 고소한 맛이 좋은 새우와 해파리채, 오이, 고기채, 계란채 정도로 특별한 것은 없지만 그 수수함이 이 집 냉면의 특징이지요.',
                menu: './image/gamY_menu.jpg'
            },
            {
                name:"거인통닭",
                address: "부산 사하구 낙동대로 233번길 21",
                img: './image/gamR_giant.jpg',
                content: '통닭이 인기인 치킨집 입니다.',
                menu: './image/gamY_menu.jpg'
            },
            {
                name:"커피잇집",
                address: "부산 사하구 옥천로 115 2층",
                img: './image/gamR_it.jpg',
                content: '커피 맛이 좋은 부산 카페입니다.',
                menu: './image/gamY_menu.jpg'
            }
        ]
    },
    {
        id: 1,
        title: listTitle[1],
        foodList: [
            {
                name:"갈삼구이",
                address: "부산 수영구 민락수변로 7",
                img: './image/gwangGalSam.jpg',
                content: '부산의 별미, 부산에서만 맛볼 수 있는 갈삼구이 "조개삼겹삼합"',
                menu: './image/gwangGalMenujpg.jpg'
            },
            {
                name:"더스모코",
                address: "부산 수영구 광안해변로 294번길 36 1층",
                img: './image/gwangSmoko.jpg',
                content: '새로 오픈한 지 얼마 되지 않은 부산 카페입니다.',
                menu: './image/gwangGalMenujpg.jpg'
            },
            {
                name:"라크초콜릿",
                address: "부산 수영구 광안로 58-1 1층",
                img: './image/gwangLac.jpg',
                content: '이번 화이트데이에는 여기서 초콜릿을 주문하는 건 어떨까요?',
                menu: './image/gwangGalMenujpg.jpg'
            }
        ]
    },
    {
        id: 2,
        title: listTitle[2],
        foodList: [
            {
                name:"할매집",
                address: "부산 사하구 몰운대1길 55 할매집",
                img: './image/daHal.jpg',
                content: '3대째 가업을 이어오며 40년 이상의 전통을 가진 분위기 좋은 야외 포장마차 술집',
                menu: './image/daHalMenu1.jpg'
            },
            {
                name:"까치 생 숯불구이",
                address: "부산 사하구 다대동 626",
                img: './image/daGga.jpg',
                content: '까치도 지나다가 들린다는 숯불구이 맛집',
                menu: './image/daHalMenu1.jpg'
            },
            {
                name:"백두봉 삼계탕",
                address: "부산 사하구 다대로 714-1",
                img: './image/daBaekjpg.jpg',
                content: '백두산에 들리기 전 필수코스인 백두봉 삼계탕',
                menu: './image/daHalMenu1.jpg'
            }
        ]
    }
]
