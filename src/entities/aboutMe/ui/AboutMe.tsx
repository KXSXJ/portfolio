import styled from "@emotion/styled";
import {media, theme} from "../../../shared/styles/theme";


export const AboutMe :React.FC =()=>{

    return(
        <AboutMe_Container>
            <h1 id={"About"}>ABOUT ME</h1>
            <Explain_Box>
                <h2>Who's 강승재</h2>
                <br/>
                <h4>프로그래밍을 통한 문제해결을 즐기는 개발자입니다.</h4>
                <h4>소통을 어려워하지 않으며 제가 생각하고 있는 것을 자유롭게 표현할 수 있습니다.</h4>
                <h4>새로운 기술을 학습하고 지식을 확장하여 기업, 소비자에게 가치를 더하는 개발자가 되겠습니다.</h4>
            </Explain_Box>
            <SubTitle_Box>
                <h2>Information & Contact</h2>
            </SubTitle_Box>
            <Grid_Box>
                <Info_Box>
                    <Icon_Wrapper>
                        <i className="fi fi-rc-cake-birthday"></i>
                    </Icon_Wrapper>
                    <div style={{marginLeft: '1rem'}}>
                        <h4>생년월일</h4>
                        <h5>2000.03.03</h5>
                    </div>
                </Info_Box>
                <Info_Box>
                    <Icon_Wrapper>
                        <i className="bi bi-pencil"></i>
                    </Icon_Wrapper>
                    <div style={{marginLeft: '1rem'}}>
                        <h4>학력</h4>
                        <h5>동양미래대학교</h5>
                        <h6>컴퓨터 정보공학과</h6>
                    </div>
                </Info_Box>
                <Info_Box>
                    <Icon_Wrapper>
                        <i className="bi bi-envelope"></i>
                    </Icon_Wrapper>
                    <div style={{marginLeft: '1rem'}}>
                        <h4>이메일</h4>
                        <h5>dysj12@gmail.com</h5>
                    </div>
                </Info_Box>
                <Info_Box>
                <Icon_Wrapper>
                        <i className="bi bi-telephone"></i>
                    </Icon_Wrapper>
                    <div style={{marginLeft: '1rem'}}>
                        <h4>연락처</h4>
                        <h5>010-4488-6977</h5>
                    </div>
                </Info_Box>
            </Grid_Box>
    
  

        </AboutMe_Container>
    )
}

const AboutMe_Container = styled.section`
    width: 100%;
    padding-block: 4rem;
    color: ${theme.color.black};
    background-color:${theme.color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 2rem;
        margin-top: 2rem;
        color: ${theme.color.black};
    }
    p{
        margin-top: 1rem;
        color: ${theme.color.black}77;
        font-weight: 700;
        ${media.tablet} {
            font-size: 1.2rem;
        }

        ${media.mobile} {
            font-size: 1rem;
        }
    }
    hr{
        width: 50rem;
        height: 2px;
        margin-block: 2rem;
        background-color: ${theme.color.black}40;
        border:none;
        ${media.laptop} {
            width: 50rem;
        }

        ${media.tablet} {
            width: 40rem;
        }

        ${media.mobile} {
            width: 35rem;
        }
    }
`

const Info_Box = styled.div`
    width:20rem;
    height:5rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    align-items: center;
    h4{
        font-size: 1.2rem;
        font-weight: 700;
    }
    h5{
        color: inherit;
        margin-top: 0.3rem;
        font-weight: 550;
    }
    h6{
        color: inherit;
        font-size: 0.8rem;
        margin-top: 0.1rem;
        font-weight: 550;
    }
    position:relative;
    z-index: 2;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
    }
`
const Icon_Wrapper = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: ${theme.color.black};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 2;
    i{
        color: ${theme.color.white};
    }
`

const Grid_Box = styled.div`
    display: grid;
    justify-content: center; 
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-block: 1rem;
    
    div {
        margin: 0.1rem;
    }

    /* 모바일 모드: 화면 너비 400px 이하일 때 1줄씩 */
    ${media.mobile} {
        grid-template-columns: 1fr; /* 1줄 */
    }
`;


const Explain_Box = styled.div`
    width:40rem;
    ${media.mobile} {
        width:80%;
        max-width:30rem;
    }
    margin-block:4rem;
    display: block;
    justify-content:left !important;
    h4{
        line-height:1.5rem;
    }
`

const SubTitle_Box = styled.div`
    width:40rem;
    ${media.mobile} {
        width:80%;
        max-width:20rem;
    }
    margin-bottom:1rem;
    justify-content:left !important;

`