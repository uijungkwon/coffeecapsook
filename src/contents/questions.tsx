//버튼에 번호 부여 OR 버튼 이름 부여 방법 고민(서버로 값 넘겨주는거 논의)
const questions = [
    {
        title:"놀러 다닐 때 내가 들고 다니는 것은?",
        content:[
            {
                answer:"귀여운 미니백",
                weight:[3, 0, 0, 3, 3, 3]
            },
            {
                answer:"물건 가득  보부상백",
                weight: [0, 0, 5, 4, 0, 0]
            }
        ]
    },
    {
        title:"여행지를 선택할 때 선호하는 풍경은? ",
        content:[
            {
                answer:"자연 풍경",
                weight: [4, 4, 0, 0, 0, 0]
            },
            {
                answer:"도시 풍경",
                weight: [0, 0, 4, 5, 5, 0]
            }
        ]
    },
    {
        title:"카페에서 음료를 마실 때 사이즈업을 한다? ",
        content:[
            {
                answer:"한다",
                weight: [5, 5, 0, 0, 0, 0]
            },
            {
                answer:"안한다",
                weight: [0, 0, 5, 5, 5, 0]
            }
        ]
    },
    {
        title:" 나에게 가장 달콤함을 주는 커피는? ",
        content:[
            {
                answer:"점심에 밥먹고 먹는 커피",
                weight: [5, 4, 4, 0, 0, 0]
            },
            {
                answer:"밤샐 때 먹는 커피",
                weight: [0, 0, 0, 0, 0, 3]
            }
        ]
    },
    {
        title:"내가 좋아하는 과자 종류는? ",
        content:[
            {
                answer:"칸쵸",
                weight: [3, 5, 0, 0, 3, 0]
            },
            {
                answer:"포테이토칩",
                weight: [0, 5, 0, 0, 4, 0]
            }
        ]
    },
    {
        title:"내가 먹는 아침 식사는? ",
        content:[
            {
                answer:"프렌치 토스트",
                weight: [4, 3, 0, 0, 0, 0]
            },
            {
                answer:"뜨끈한 국밥",
                weight: [0, 3, 0, 4, 5, 0]
            }
        ]
    },
    {
        title:"좋아하는 아이스크림은? ",
        content:[
            {
                answer:"빵빠레",
                weight: [5, 0, 4, 3, 3, 0]
            },
            {
                answer:"폴라포",
                weight: [4, 4, 3, 5, 5, 0]
            }
        ]
    },
    {
        title:"술먹고 해장을 해야한다. 어떤 라면을 먹을까? ",
        content:[
            {
                answer:"사리곰탕",
                weight: [5, 0, 5, 0, 0, 0]
            },
            {
                answer:"열라면",
                weight: [0, 0, 0, 5, 5, 5]
            }
        ]
    },
];


/*
const questions = [
    {
        title: "계획을 세울 때 나는?",//1
        content: [
            {
                answer: "시간 단위로 세세하게 장소와 동선까지 정하고싶어",
                weight: [3, 5, 0, 0, 2, 0, 0, 0]
            },
            {
                answer: "지역이랑 숙소만 정해놓고 나머지는 여행 중에 정할래",
                weight: [3, 0, 0, 3, 3, 3, 3, 0]
            },
            {
                answer: "계획 없이 기분에 따라 발길 닿는대로 다니고 싶어",
                weight: [0, 0, 5, 4, 0, 0, 0, 5]
            },
            {
                answer: "함께 하는 사람들이 하자는 대로 할게",
                weight: [0, 0, 0, 0, 0, 5, 4, 3]
            }
        ]
    },
    {
        title: "한 장소에서 다른 장소로 이동할 때 나는?",//2
        content: [
            {
                answer: "이동 시간은 최대한 줄이고 관광을 더 하고 싶어",
                weight: [4, 4, 0, 0, 0, 0, 0, 0]
            },
            {
                answer: "천천히 이곳저곳 둘러보며 이동할래",
                weight: [0, 0, 4, 5, 5, 0, 0, 0]
            },
            {
                answer: "이동을 많이 하고 싶지 않아. 움직이는게 싫어",
                weight: [0, 0, 0, 0, 0, 0, 0, 5]
            },
            {
                answer: "이동도 함께하면 즐거울 거야. 무엇이든 상관없어",
                weight: [0, 0, 0, 0, 0, 5, 5, 0]
            }
        ]
    },
    {
        title: "내가 원하는 여행 스타일은?",//3
        content: [
            {
                answer: "최대한 많은 관광지를 둘러보고 싶어",
                weight: [5, 5, 0, 0, 0, 0, 3, 0]
            },
            {
                answer: "쉬엄쉬엄 여유롭게 구경 다니고 싶어",
                weight: [0, 0, 5, 5, 5, 0, 3, 0]
            },
            {
                answer: "구경보다는 편안한 곳에서 느긋하게 힐링하고 싶어",
                weight: [0, 0, 0, 0, 0, 0, 0, 5]
            },
            {
                answer: "같이 가는 사람들이 하자는 대로 다닐래",
                weight: [0, 0, 0, 0, 0, 5, 4, 3]
            }
        ]
    },
    {
        title: "멋진 풍경이 내 눈 앞에 펼쳐졌을 때 나는?",//4
        content: [
            {
                answer: "당연히 풍경사진도, 내 인생샷도 열심히 찍어야지",
                weight: [5, 4, 4, 0, 0, 0, 5, 0]
            },
            {
                answer: "주변 사람한테 부탁해서 단체사진부터 찍고싶어",
                weight: [0, 0, 0, 0, 0, 3, 5, 0]
            },
            {
                answer: "함께 간 사람들의 사진을 찍어줄래",
                weight: [0, 0, 0, 4, 5, 4, 0, 0]
            },
            {
                answer: "사진을 찍기보다는 그 순간을 내 눈에 담고 싶어",
                weight: [0, 0, 0, 4, 5, 0, 0, 4]
            }
        ]
    },
    {
        title: "가려고 했던 식당이 문을 닫았을 때 나는?",//5
        content: [
            {
                answer: "미리 다른 식당도 조사해 놓을 거라 걱정없어",
                weight: [3, 5, 0, 0, 3, 0, 0, 0]
            },
            {
                answer: "다시 검색해서 검증된 식당을 갈래",
                weight: [0, 5, 0, 0, 4, 0, 0, 0]
            },
            {
                answer: "주변 사람들한테 맛있는 식당을 아는지 물어볼래",
                weight: [4, 0, 3, 3, 0, 0, 5, 0]
            },
            {
                answer: "그 근처에 괜찮아 보이는 식당으로 갈래",
                weight: [5, 0, 4, 3, 0, 0, 3, 3]
            }
        ]
    },
    {
        title: "내가 더 많은 시간을 보내고 싶은 곳은?", //6
        content: [
            {
                answer: "사람이 붐비는 시끌벅적한 곳이야",
                weight: [4, 3, 0, 0, 0, 0, 5, 0]
            },
            {
                answer: "우리밖에 없는 한적하고 조용한 곳이야",
                weight: [0, 3, 0, 4, 5, 0, 0, 3]
            },
            {
                answer: "그날의 기분에 따라 달라질 것 같아",
                weight: [0, 0, 5, 5, 0, 0, 0, 5]
            },
            {
                answer: "다같이 있다면 장소의 분위기 상관없이 어디든 좋아",
                weight: [0, 0, 0, 0, 0, 5, 5, 0]
            }
        ]
    },
    {
        title: "일행과 서로 가고 싶은 곳이 다를 때는?",//7
        content: [
            {
                answer: "나 혼자라도 다녀오고 싶어",
                weight: [5, 0, 4, 3, 3, 0, 0, 0]
            },
            {
                answer: "그룹 일정이 끝나고 혼자 다녀 올래",
                weight: [4, 4, 3, 5, 5, 0, 0, 0]
            },
            {
                answer: "다음을 기약하며 그곳을 포기하고 그룹이랑 다닐래",
                weight: [0, 0, 0, 0, 0, 5, 4, 3]
            },
            {
                answer: "그곳이 얼마나 좋은지 어필해서 그룹을 설득시켜볼래",
                weight: [4, 5, 3, 0, 0, 0, 5, 0]
            }
        ]
    },
    {
        title: "다른 사람들이 말을 걸어왔을 때 나는?",//8
        content: [
            {
                answer: "새로운 사람들과 즐겁게 대화를 이어 갈래",
                weight: [5, 0, 5, 0, 0, 0, 5, 0]
            },
            {
                answer: "다른 친구들이 대답하는 걸 지켜보고 있을거야",
                weight: [0, 0, 0, 5, 5, 5, 0, 3]
            },
            {
                answer: "내가 바로 먼저 말을 거는 그 사람이야",
                weight: [4, 0, 3, 0, 0, 0, 5, 0]
            },
            {
                answer: "모르는 사람을 만나기보다는 우리끼리만 놀고 싶어",
                weight: [0, 3, 0, 3, 3, 3, 0, 3]
            }
        ]
    },
    {
        title: "방문한 장소가 마음에 들 때 나는?",//9
        content: [
            {
                answer: "그래도 계획한 만큼만 머물고 다음 장소로 이동할래",
                weight: [4, 5, 0, 0, 3, 0, 0, 0]
            },
            {
                answer: "다음 계획을 위해 떠나지만 다른 날에 다시 방문할래",
                weight: [5, 3, 0, 3, 4, 0, 0, 0]
            },
            {
                answer: "기존 계획을 변경하더라도 그곳에 오래 있을래",
                weight: [0, 0, 5, 4, 0, 0, 0, 5]
            },
            {
                answer: "함께 하는 사람들의 의견을 따를래",
                weight: [0, 0, 0, 0, 0, 5, 4, 4]
            }
        ]
    },
    {
        title: "이번 여행에서 방문할 장소를 <br/> 선택할 때 나는?",//10
        content: [
            {
                answer: "사람들이 많이 가는 유명한 장소 위주로 다닐래",
                weight: [0, 4, 3, 0, 3, 0, 4, 0]
            },
            {
                answer: "랜드마크 몇 군데만 가고 나머지는 마음대로 다닐래",
                weight: [4, 0, 4, 4, 4, 0, 0, 0]
            },
            {
                answer: "아무도 안 가본 새로운 장소를 찾아보고 싶어",
                weight: [5, 0, 3, 4, 0, 0, 0, 0]
            },
            {
                answer: "함께 하는 사람들이 가자는 대로 갈래",
                weight: [0, 0, 0, 0, 0, 5, 4, 3]
            }
        ]
    }
];
*/
export default questions;