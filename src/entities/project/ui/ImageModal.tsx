import styled from "@emotion/styled";
import {theme} from "../../../shared/styles/theme";
import {useEffect, useRef, useState} from "react";
import {Images} from "../model/ProjectData";

interface ProjectProps{
    title:string,
    images: Images[],
    onClose:()=>void,
}
export const ImageModal :React.FC<ProjectProps> = ({title,images,onClose})=>{
    const modalBackground = useRef<HTMLTableSectionElement|null>(null);
    const [pageNum, setPageNum] = useState<number>(0)

    const pageHandler =(direct:number)=>{
        if(direct){
            if(pageNum === images.length-1){
                setPageNum(0)
            }else{
                setPageNum((prev)=>prev+1)
            }
        }else{
            if(pageNum === 0){
                setPageNum(images.length-1)
            }else{
                setPageNum((prev)=>prev-1)
            }
        }

    }


    return(
        <Modal_Container  ref={modalBackground} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (e.target === modalBackground.current) {
                onClose();
            }
        }}>
            <Modal_Content_Container>
                <span>
                    <h4>{title}</h4>
                    <i className="bi bi-x-lg" onClick={onClose}></i>
                </span>
                <h5>
                {images[pageNum].title}
                </h5>
                <p style={{height:'2rem'}}>
                    {images[pageNum].content}
                </p>
                <div>
                    <i className="fi fi-bs-angle-left" onClick={()=>pageHandler(0)}></i>
                        <img src={process.env.PUBLIC_URL +`/images/project/${images[pageNum].url}`} alt={'projectImg'}></img>
                    <i className="fi fi-bs-angle-right" onClick={()=>pageHandler(1)}></i>
                </div>
                <div style={{width:'100%',display:'flex' ,justifyContent:'center'}}>
                    <h5>{pageNum+1}/{images.length}</h5>
                </div>
            </Modal_Content_Container>
        </Modal_Container>
    )
}

const Modal_Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.3);
`

const Modal_Content_Container = styled.div`
    width: 44rem;
    height: fit-content;
    background-color: ${theme.color.white};
    border-radius: 5px;
    box-sizing: border-box;
    padding-block: 1.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    h4{
        font-size: 1.5rem;
        font-weight: 550;
        margin-inline: 7.5%;

        width: fit-content;
        padding: 0.4rem;
        border-radius: 5px;
        background-color: ${theme.color.black};
        color: ${theme.color.white};
        font-weight: 550;
    }
    span{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        i{
            color: ${theme.color.black}77;
            font-size: 1rem;
            &:hover{
                color: ${theme.color.black};
            }
        };
        margin-inline: 1rem;

    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        img{
            margin-top: 0.7rem;
            width: 80%;
            max-height: 28rem;
            border-radius: 5px;
        }
        cursor: pointer;
        &:hover{
            i{
                color: ${theme.color.black}77;
            }
        }
    }
    i{
        color: transparent;
        font-size: 3rem;
    }
    h5{
        font-size: 1.2rem;
        margin-top: 0.8rem;
        font-weight: 550;
        margin-inline: 10%;
    }
    p{
        font-size: 0.9rem;
        margin-inline: 10%;
        line-height: 1.2rem;
        heigth: 2rem;
    } 
`