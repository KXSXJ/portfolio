import {ExperienceState} from "./types";

export const ExperienceData:ExperienceState[]=[
    {
        title:'Next',
        _skills:[{name:'Next.js', url :'next.png'}],
        content:[
            'SSR과 Hydration에 대해 이해하고 있습니다.',
            'App Routing과 Page Routing을 통한 경로를 관리 할 수 있습니다.',
            'Parallel Routing을 통한 병렬 라우팅 처리를 할 수 있습니다.',
            'Intercepted Routing을 통한 모달기능을 구현할 수 있습니다.',
            '비동기 컴포넌트를 사용할 수 있으며 캐싱된 데이터를 관리할 수 있습니다.',
            'Page Error Handling 및 지연처리를 할 수 있습니다.'
        ]
    },
    {
        title:'React',
        _skills:[{name:'React.js', url :'react.png'}],
        content:[
            '함수형 컴포넌트를 능숙하게 다룰 수 있습니다.',
            'Reducer, React Hook Form 등 다양한 React 훅을 상황에 맞게 활용 가능합니다.',
            '커스텀 훅의 동작과 원리를 이해하여 사용할 수 있습니다.',
            '컴포넌트와 훅을 분리해 구조적으로 관리할 수 있습니다.',
            'React-Query를 활용한 api호출 관리를 할 수 있습니다.',
            'useActionState, useOptimistic 등 최신 React Hook을 다룰 수 있습니다.'
        ]
    },
    {
        title:'Redux',
        _skills:[{name:'Redux', url :'redux.png'},{name:'Redux-Saga', url :'saga.png'}],
        content:[
            'Redux slice 및 상태(state)를 효율적으로 관리할 수 있습니다.',
            'connect 함수를 활용해 Props를 전달할 수 있습니다.',
            'Redux의 불변성 원칙을 이해하고 있습니다.',
            'Redux-Saga를 통해 비동기 액션 처리를 할 수 있습니다.',
            'Middleware를 이해하고 상황에 맞게 적용할 수 있습니다.',
            'Redux Middleware + Web Socket을 활용한 소켓 통신을 할 수 있습니다.',
        ]
    },
    {
        title:'Spring',
        _skills:[{name:'Spring', url :'spring.png'}],
        content:[
            'MVC 패턴에대해 이해하고 사용할 수 있습니다.',
            'Jpa를 활용한 간단한 CRUD처리를 할 수 있습니다.',
            'Spring Security + JWT를 활용한 사용자 검증을 구현할 수 있습니다.',
            '기본적인 Annotation을 활용할 수 있습니다.',
            'DTO를 통한 데이터 처리를 할 수 있습니다.',
            'RESTful API의 원칙을 이해하고 설계할 수 있습니다.',
        ]
    },
    {
        title:'JavaScript',
        _skills:[{name:'JavaScript', url:'js.png'}],
        content:[
            'JavaScript의 동작원리와 실행 컨텍스트를 이해하고있습니다.',
            'Callback 함수를 활용한 비동기 처리를 할 수 있습니다.',
            'Promise를 사용해 비동기 처리를 할 수 있습니다.',
            '내장함수를 활용해 데이터를 효과적으로 처리할 수 있습니다.',
            'IntersectionObserver을 활용해 무한 스크롤 기능을 구현할 수 있습니다.',
            'ES6 문법을 깊이 이해하고 응용할 수 있습니다.',
        ]
    },
    {
        title:'Html5',
        _skills:[{name:'HTML5', url:'html.png'},{name:'CSS', url:'css.png'}],
        content:[
            '웹표준을 준수하며 시멘틱 마크업 작업이 가능합니다.',
            '미디어 쿼리를 활용한 반응형 웹 디자인을 구현할 수 있습니다.',
            'Styled-component, Emotion을 통한 스타일링 작업이 가능합니다.',
            'BEM 네이밍 규칙을 적용하여 구조를 설계할 수 있습니다.',
            '이벤트 버블링과 캡처링에대해 이해하고 있습니다.'
        ]
    },

]